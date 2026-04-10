---
layout: doc
outline: deep
---

# <center>硬件原理</center>

## 1.同类型对比

经过我的拆解和使用发现，大多淘宝卖的产品，或开源USB电流计，基本都直接1个电阻采样，然后接1个采样芯片例如INA226就完事儿了。但是现实电流小数点居然能显示小数点后5 6位之多，单单就论电流测量来说，这明显是不合理的。

<div style="display:flex;gap:2px;justify-content:center;align-items:center;margin-bottom:20px">

<div style="flex:1;display:flex;align-items:center;justify-content:center;border-radius:12px;overflow:hidden">
    <img src="/images/Power-Pico/WorkingPrinciple/hardware/power1.png" style="max-width:100%;max-height:100%;width:auto;height:auto;display:block" alt="拆解图" />
</div>

<div style="flex:1;display:flex;align-items:center;justify-content:center;border-radius:12px;overflow:hidden">
    <img src="/images/Power-Pico/WorkingPrinciple/hardware/sch1.png" style="max-width:100%;max-height:100%;width:auto;height:auto;display:block" alt="原理图" />
</div>

</div>

从以下几个点来分析：

1. 在 INA226 的 16 位 ADC 下，如果满量程是 5A，其物理最小分辨力仅为 $5A / 65536 \approx 76 \mu A$。显示出小数点后 6 位（$1\mu A$）纯粹是靠软件插值出来的虚假位数，没有物理意义。

2. 采样电阻大小选择问题，如果电阻大（如 $1\Omega$）：测量 $1\mu A$ 产生 $1\mu V$ 压降，接近芯片偏置电压，且测量 5A 时功耗高达 $25W$，电阻会瞬间烧毁或因温漂导致巨大误差。而如果果电阻小（如 $10m\Omega$）：测量 5A 没问题，但测量 $1\mu A$ 时，产生的压降仅为：

    $$V_{drop} = 1\mu A \times 0.01\Omega = 10nV$$

    INA226 的失调电压（Offset Voltage）典型值为 $\pm 2.5 \mu V$ , 手册中最大值为$10 \mu V$。$10nV$ 的信号完全淹没在误差里。

3. 环境干扰。即便使用 20ppm 的低温漂电阻，电流从小变大导致的发热也会引起阻值微小波动。对于 $1\mu A$ 级别的测量，这种波动足以让读数乱跳。

## 2.电流采样设计

针对上诉问题，所以需要参考 合宙 Power CC 的分档位电流测量思想来进行电流分段测量。

三段式采样电路，配合 INA190 放大器实现高精度电流监测。至于MOS管自动换挡逻辑，详见代码，目前是简单的滞回(Hysteresis)切换逻辑。

本产品的框图如下图所示，使用3个电阻进行电流的分档采样，可以根据电流大小更换电流通路，然后选择不同的ADC通道进行数据分析。选择INA190的原因是因为差分电压采样，输入偏置电流仅为 0.5 nA (典型值) 。对比便宜一些的INA199，INA199输入呈阻性，会有 $\mu A$ 级别的漏电流。

但不过，怎么样根据数据结果自动调节档位这个就是一个好问题了，各位开发者发烧友可以自行看代码进行学习更改~欢迎去自由添加DIY和更改UI和控制逻辑~

<p align="center">
    <img border="0px" width="75%" src="/images/Power-Pico/WorkingPrinciple/hardware/diagram.png">
</p>

## 3.供电部分

使用2路竞争供电，二极管防止电流倒灌，即USB通信口可以给PowerPico系统供电，电源输入口也可以给系统供电。由于输入端子提供的电流的位置，不经过采样电阻，所以不会影响输出电流采样。

<p align="center">
    <img border="0px" width="100%" src="/images/Power-Pico/WorkingPrinciple/hardware/PowerSupply.png">
</p>

当然，虽然这样做供电方便了，但是当使用输入口供电时， `输入电流` 并不等于 `输出电流`，而是 `输出电流 + PowerPico系统耗电` 了。PowerPico测量的显示的是输出电流，这一点要注意。

## 4.USB传输

硬件原理图和PCB走线详见立创开源硬件平台的Power-Pico工程。

<p align="center">
    <img border="0px" width="100%" src="/images/Power-Pico/WorkingPrinciple/hardware/sch_usb.png">
</p>

下位机利用USB的CDC（Communication Device Class）类协议，使嵌入式设备能够通过USB与计算机进行串行通信，即USB模拟串口（Virtual COM Port, VCP）。之所以使用USB bulk传输，是因为速度较快，稳定性高，所以替代了直接使用串口，而且不用多加一个 CH340 芯片。“高速 ADC 数据连续上传 + 低丢包”的工况需求时，USB 明显优于 UART。

### <center> STM32 串口UART 与 USB 高速传输对比 </center>

在高速 ADC 连续采样场景下，若串口链路频繁出现传输错误，上位机需要抛出错误数据，Power-Pico实测使用 1.5M 波特率的 UART 时，接近 **2.3%** 数据丢失。

| 对比项 | 串口（UART） | USB（CDC/Bulk） |
|---|---|---|
| 吞吐量 | 受波特率限制明显，常见 921600/2M | 全速 USB 理论 12 Mbps（实际可用远高于常见 UART），更适合大吞吐量 |
| 可靠性 | 抗干扰能力受布线与电气环境影响较大，错误后常出现丢包/错帧| USB 协议层有 CRC 与重传机制，整体误码与丢包风险更低 |
| 复杂度 | 实现简单，资源占用低，调试门槛低 | 协议栈更复杂，需要 USB 描述符、端点与类驱动配置 |
| 成本 | 需要CH340等芯片进行UART转USB | 可省去 CH340 等转换芯片，直接连电脑，但要求 USB 规范布线 |
| 应用 | 低~中速遥测、参数配置、日志输出 | 高速采样数据上传、波形/流数据、长时间稳定采集 |


