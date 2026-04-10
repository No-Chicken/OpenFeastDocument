---
layout: doc
outline: deep
---

# <center>问题答疑说明</center>

## 0. 产品完美吗？

答：这是全开源套件，仅供学习使用，任何疑问都可以详见代码，淘宝那边只提供焊接和组装好的套件。

## 1. 为什么偶尔有花屏横条？

答：猜测是因为采样的ADC+DMA 和 LCD的SPI+DMA打架了导致的传输问题。

## 2. 如何更改Power-Pico的界面？

答：看仓库的代码，可以根据PageManager方便的加UI界面.

## 3. BootLoader是什么？IAP是什么？

答：

这个问题就是需要解释[资料收集](../data_collection.md)页面中的这些文件的功能和含义了。

`BootLoader.hex`是使用SWD例如ST-LINK烧录到STM32中的, 这是启动程序。它提供了加载应用程序和执行固件更新的基础能力。有了Bootloader，我们就可以通过预留的通信接口（比如串口UART, USB, CAN, 以太网, 甚至无线方式如蓝牙, Wi-Fi, LoRa, NB-IoT等），给设备发送新的应用程序固件。

`Firmware.bin`固件，上位机客户端通过ymodem协议传输到Power-Pico, 通过USB升级App。这个升级过程就叫做IAP（In-Application Programming，在应用编程）或者OTA（Over-The-Air，空中升级）。

`PowerPico Client`客户端，上位机，是用来看实时波形和升级下位机Power-Pico的。
