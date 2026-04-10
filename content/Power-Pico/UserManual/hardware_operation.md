---
layout: doc
outline: deep
---

# <center>硬件操作说明</center>

:::danger 致命警告
进行PD诱骗时，别连接任何贵重设备，当心烧坏！PPS诱骗出来是充当一个可调电压源的角色！
:::

<p align="center">
    <img border="1px" width="50%" src="/images/Power-Pico/hardware_operation/3D.png">
</p>

## 1. 按键说明

:::warning 提示
若要强制进入Boot模式，则长按顶部按键，再上电.
:::

各按键说明如下图所示，顶部按键为 **换页/boot**，底部按键为**取消**，**左**，**右**，**确认** 。如果设备变砖, 或者烧录的自定义app固件有问题, 在BootLoader完好的情况下, 可以长按顶部的按键然后上电, 强制进入Boot模式升级。

<p align="center">
    <img border="1px" width="50%" src="/images/Power-Pico/hardware_operation/front_view.png">
</p>

## 2. 界面说明

1. 开机界面.

<p align="center">
    <img border="1px" width="50%" src="/images/Power-Pico/hardware_operation/startup.png">
</p>

2. 主界面. 主界面显示电压电流功率的滑动窗口平均值，同时统计记录时间。滑动窗口大小可以自行改代码。

<p align="center">
    <img border="1px" width="50%" src="/images/Power-Pico/hardware_operation/main.png">
</p>

3. 波形页面. 这个界面由于我写的比较卡顿，目前已经删除，有需要的可以自行改代码DIY。

<p align="center">
    <img border="1px" width="50%" src="/images/Power-Pico/hardware_operation/wave.png">
</p>

4. 设置页面. 这个界面可以设置光强度，是否按键声音和屏幕旋转角度等。注意，修改语言后重启才有效

<p align="center">
    <img border="1px" width="50%" src="/images/Power-Pico/hardware_operation/setting.png">
</p>

5. PPS诱骗页面. 在设置界面中点击`PD诱骗`，成功则可进入这个界面，顶部显示的是当前工作的电压和电流。你可以在PPS界面中设置预设好的电压和步进调节电压，这样就可以充当可调电源了。

<div style="display:flex;gap:2px;justify-content:center;align-items:center;margin-bottom:20px">

<div style="flex:1;display:flex;align-items:center;justify-content:center;border-radius:12px;overflow:hidden">
    <img src="/images/Power-Pico/hardware_operation/PPS_fixed.png" style="max-width:100%;max-height:100%;width:auto;height:auto;display:block" alt="PPS预设" />
</div>

<div style="flex:1;display:flex;align-items:center;justify-content:center;border-radius:12px;overflow:hidden">
    <img src="/images/Power-Pico/hardware_operation/PPS_step.png" style="max-width:100%;max-height:100%;width:auto;height:auto;display:block" alt="PPS步进" />
</div>

</div>

## 3. PD协议诱骗说明

::: tip 提示
目前只支持标准PD3.0协议的PPS, 固定档位的PD Fixed代码暂时没写, 代码可以自行更改
:::

::: warning 警告
诱骗电压时, 非专业人士请谨慎使用, 切勿链接您的贵重设备如手机等！！！
:::

这个地方代码可以自行更改，详见git仓库中开源的资料。

如果只用输入口做电源给系统供电，刚开机时系统没工作FUSB302不工作，有的充电头检测不到CC下拉电阻而不供电，可以买一个type-c公头CC下拉5.1k电阻的小板子，来插到输出端口，这样有下拉电阻，系统没工作时FUSB302没工作时，也可以让快充充电头供电了。

## 4. 上位机连接说明

使用Type-C数据线连接顶部接口，然后连接电脑即可，然后就可以使用我写的`PowerPico Client`客户端连接看波形或者升级固件等操作即可。

<p align="center">
    <img border="1px" width="50%" src="/images/Power-Pico/hardware_operation/connect1.png">
</p>

<p align="center">
    <img border="1px" width="100%" src="/images/Power-Pico/hardware_operation/connect2.png">
</p>

如果你想学习传输的协议，连接上电脑就可以看到COM口了，可以用`vofa`等串口助手看原始数据，使用任意波特率连接即可。

下位机利用USB的CDC（Communication Device Class）类协议，使嵌入式设备能够通过USB与计算机进行串行通信，即USB模拟串口（Virtual COM Port, VCP）。使用USB bulk传输，是因为速度较快，稳定性高。原理讲解详见后面的`开源复刻原理说明`章节.

<p align="center">
    <img border="1px" width="50%" src="/images/Power-Pico/hardware_operation/COM.png">
</p>


## 5. 精度测量

:::warning 注意
TypeC转鳄鱼夹这些接口，本身Vbus和GND就是有MΩ级别电阻的，不是完全开路，所以插上会有漏电流！
:::


<div style="display:flex;gap:2px;justify-content:center;align-items:center;margin-bottom:20px">

<div style="flex:1;display:flex;align-items:center;justify-content:center;border-radius:12px;overflow:hidden">
    <img src="/images/Power-Pico/hardware_operation/test/50u.jpg" style="max-width:100%;max-height:100%;width:auto;height:auto;display:block" alt="50uA" />
</div>

<div style="flex:1;display:flex;align-items:center;justify-content:center;border-radius:12px;overflow:hidden">
    <img src="/images/Power-Pico/hardware_operation/test/500u.jpg" style="max-width:100%;max-height:100%;width:auto;height:auto;display:block" alt="500uA" />
</div>

</div>

<div style="display:flex;gap:2px;justify-content:center;align-items:center;margin-bottom:20px">

<div style="flex:1;display:flex;align-items:center;justify-content:center;border-radius:12px;overflow:hidden">
    <img src="/images/Power-Pico/hardware_operation/test/500m.png" style="max-width:100%;max-height:100%;width:auto;height:auto;display:block" alt="500mA" />
</div>

<div style="flex:1;display:flex;align-items:center;justify-content:center;border-radius:12px;overflow:hidden">
    <img src="/images/Power-Pico/hardware_operation/test/1.8A.jpg" style="max-width:100%;max-height:100%;width:auto;height:auto;display:block" alt="1.8A" />
</div>

</div>

使用 SDM3055 六位半万用表进行对比，如下表所示：

| SDM3055示数 | Power-Pico示数 | 绝对误差 | 相对误差 |
| :--- | :--- | :--- | :--- |
| 52.03 uA | 52.05 uA | 0.02uA | 0.4% |
| 518.84 uA | 518.4 uA | 0.5 uA | 1.0% |
| 5.22 mA |	5.29 mA | 0.07 mA |	1.3% |
| 469.3 mA | 482.7 mA |	13.4 mA | 2.9% |
| 1.78 A | 1.81 A |	0.03 A | 1.7% |
| 5.19 V | 5.24 V | 0.05 V | 1.0% |
| 15.20 V | 15.56 V | 0.36 V | 2.4% |
| 19.98 V | 20.17 V | 0.19 V | 1.0% |

