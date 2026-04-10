---
layout: doc
outline: deep
---

# <center>介绍</center>

这是一个基于STM32F411CUE6和FreeRTOS和LVGL的低成本的超多功能的STM32智能手表~

<div style="margin: 20px 0; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.1);">
  <iframe
    src="https://player.bilibili.com/player.html?isOutside=true&aid=613287149&bvid=BV1hh4y1J7TS&cid=1121134144&p=1"
    style="width: 100%; aspect-ratio: 16 / 9;"
    scrolling="no"
    border="0"
    frameborder="no"
    framespacing="0"
    allowfullscreen="true">
  </iframe>
</div>

<div style="display:flex;gap:2px;justify-content:center;align-items:center;margin-bottom:20px">

<div style="flex:1;display:flex;align-items:center;justify-content:center;border-radius:12px;overflow:hidden">
    <img src="/images/OV-Watch/0/手表宣传图.png" style="max-width:100%;max-height:100%;width:100%;height:auto;display:block" alt="宣传图" />
</div>

<div style="flex:1;display:flex;align-items:center;justify-content:center;border-radius:12px;overflow:hidden">
    <img src="/images/OV-Watch/0/界面.jpg" style="max-width:100%;max-height:100%;width:80%;height:auto;display:block" alt="界面" />
</div>

</div>


### 功能说明

大致功能表如下图所示：

<p align="center">
    <img width="100%" src="/images/OV-Watch/0/功能表.jpg">
</p>

### 系统组成

系统框图如下所示，主控使用STM32F411CEU6，操作系统使用FreeRTOS，图形库使用的LVGL。传感器部分：手势识别使用6轴MPU6050；心率血氧使用的是EM7028，EM7028的资料很少，之前自己写的局部寻峰算法来计算心率但是效果不好，现在改成了使用官方的库；海拔测量用的气压计SPL06-001；电子指南针使用LSM303DLHC；V2.4版本，蓝牙芯片换成了KT6368A，有SPP功能，可以无线升级。

<p align="center">
    <img width="50%" src="/images/OV-Watch/0/框图.png">
</p>

### 软件框架

手表的软件架构如下所示，具体代码详见仓库。

<p align="center">
    <img width="70%" src="/images/OV-Watch/0/software structure.jpg">
</p>

V2.4版本以后的手表的代码分为Bootloader和APP了，为的是方便用户戴在手上进行不用拆解的升级，BOOT区后面划分了一个Flag区，用于记录是否是完整的APP，这个位置是APP传输完成后才记录的，为的是保证程序完整性。

<p align="center">
    <img width="70%" src="/images/OV-Watch/0/storage.jpg">
</p>


