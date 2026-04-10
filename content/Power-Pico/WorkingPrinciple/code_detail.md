---
layout: doc
outline: deep
---

# <center>STM32程序说明</center>

## 1.程序分区

跟以前的项目一样，采用了 BootLoader + App 的结构，方便USB升级。程序分区如下图所示。

* 起始的sector0,1,2的48kB区域为BootLoader区域
* 第3个sector的16kB区域为升级信息区域，用于开机校检App完整性，具体的校检内容详见BootLoader代码
* 从0x08010000第4个扇区开始后的区域，都为App区域（之所以不做AB分区是片上Flash不够）

<p align="center">
    <img border="0px" width="75%" src="/images/Power-Pico/WorkingPrinciple/code/flash.png">
</p>

## 2.代码结构

代码部分的详细内容详见github仓库中的代码，支持MDK开发，同时也支持Cmake进行项目构建，环境配置详见[windows的Cmake环境配置](../../FryPi/2.基础例程/cmake_project.md)。

```
Power_Pico/
├── Core/             # [核心层] STM32 HAL库配置、中断处理、主函数 (CubeMX生成)
├── BSP/              # [板级支持包] 外设的底层硬件驱动 (LCD, PD, EEPROM等)
├── Drivers/          # [HAL库与驱动] 底层硬件驱动
├── User/             # [用户应用层]
│   ├── Tasks/        # FreeRTOS 任务定义与业务逻辑
│   └── GUI/          # LVGL 图形界面源码 (UI屏幕、图片、字体)
├── USB_DEVICE/       # [通信层] USB CDC 虚拟串口驱动，用于PC上位机通信
├── Drivers/          # [驱动库] STM32官方 HAL/LL 库及 CMSIS
├── MDK-ARM/          # [MDK工程] keil-MDK的工程文件
```

注意：`cmake`, `gcc`进行项目构建和编译，与MDK编译器有所区别。我试过gcc直接不带地址偏移编译`.hex`可以直接烧录到`STM32F411CEU6`运行没问题。但是编译出来的带地址偏移的`.bin`，通过`BootLoader`烧录到`STM32F411CEU6`会出现跳转时直接`hardfault`，但是在炸鸡派`STM32F411RET6`开发板验证居然可以？！这也太玄学了？！等待有大佬尝试把cmake构建项目的内容全部搞定，欢迎评论区留言。

## 3.数据传输协议定义

使用USB进行高速数据传输，数据包组成如下图所示。每个数据包100组数据，加上头共计711Bytes。这个协议不要轻易改，因为它是跟Client客户端中数据解析部分是对应的。

<p align="center">
    <img border="0px" width="100%" src="/images/Power-Pico/WorkingPrinciple/code/data.png">
</p>
