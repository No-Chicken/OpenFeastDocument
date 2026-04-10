---
layout: doc
outline: deep
---

# <center>固件烧录说明</center>

## 1.BootLoader烧录

如果纯从硬件复刻，焊接好硬件后，需要烧录BootLoader，便于后续用 USB 下载和升级 app。

采用 BootLoader + App 的结构。请首先使用 ST-Link 等烧录器进行 SWD 烧录，用烧录夹连接PCB右上角的 SWD 口烧录 BootLoader.hex。

<p align="center">
    <img border="0px" width="75%" src="/images/Power-Pico/WorkingPrinciple/replicate/flash.png">
</p>

## 2.USB固件下载

在客户端中进行固件下载升级，详见前面的PowerPico Client电脑客户端操作章节。

<p align="center">
    <img border="0px" width="75%" src="/images/Power-Pico/WorkingPrinciple/replicate/firmware.png">
</p>
