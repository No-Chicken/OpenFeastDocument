---
layout: doc
outline: deep
---

# <center>介绍</center>

这是一个比手掌还小的STM32F411RET6迷你开发板，可以用于AI开发，UI开发，数字电源控制板等等，甚至可以拿去用于你的毕业设计和其他相关的项目。

<div style="margin: 20px 0; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.1);">
  <iframe
    src="https://player.bilibili.com/player.html?isOutside=true&aid=1600747244&bvid=BV1u2421F7kf&cid=1443750631&p=1"
    style="width: 100%; aspect-ratio: 16 / 9;"
    scrolling="no"
    border="0"
    frameborder="no"
    framespacing="0"
    allowfullscreen="true">
  </iframe>
</div>

<div style="display: flex; gap: 20px; justify-content: center;">
  <figure style="flex: 1;">
    <img src="/images/FryPi/0/热成像手势识别演示.jpg" alt="热成像手势识别演示" style="max-width: 100%; height: auto;" />
    <figcaption style="opacity: 0.5;"> </figcaption>
  </figure>
  <figure style="flex: 1;">
    <img src="/images/FryPi/0/MNIST演示.jpg" alt="MNIST演示" style="max-width: 100%; height: auto;" />
    <figcaption style="opacity: 0.5;"> </figcaption>
  </figure>
</div>

<br>
</br>

<div style="display: flex; gap: 20px; justify-content: center;">
  <figure style="flex: 1;">
    <img src="/images/FryPi/0/在环开发.jpg" alt="在环开发" style="max-width: 100%; height: 250px;" />
    <figcaption style="opacity: 0.5;"> </figcaption>
  </figure>
  <figure style="flex: 1;">
    <img src="/images/FryPi/0/LVGL演示.jpg" alt="LVGL演示" style="max-width: 100%; height: auto;" />
    <figcaption style="opacity: 0.5;"> </figcaption>
  </figure>
</div>

  - MCU使用STM32F411RET6，Cortex-M4 core with DSP and FPU，512 Kbytes of Flash memory, 100 MHz CPU, ART Accelerator，.
  - 可额外焊接外置SPI Flash.
  - 例程丰富：高级例程：[LVGL智能手表](https://github.com/No-Chicken/FryPi/tree/master/2.software/2.Advanced/6.LVGL-SmartWatch)，[热成像手势识别](https://github.com/No-Chicken/FryPi/tree/master/2.software/2.Advanced/3.Thermal-camera-gesture-recognition)，[手写数字识别](https://github.com/No-Chicken/FryPi/tree/master/2.software/2.Advanced/2.%20MNIST-Handwritten-number-recognition)，与matlab联合开发，[simulink在环开发](https://github.com/No-Chicken/FryPi/tree/master/2.software/2.Advanced/5.simulink-Co-develope)等等.
  - 留有端口可外接扩展板.（例如最上面的演示动态图，都是在Core板插上Cam扩展板）
  - 有双TypeC和单TypeC版本的Core板.
  - FryPi的pin map如下所示，目前仅有一部分IO口被用到LCD和触摸屏等外设.

<p align="center">
    <img width="100%" src="/images/FryPi/0/frypi-pin-map.jpg">
</p>

最开始做这块板子的目的是因为上一个智能手表的项目[OV-Watch](https://github.com/No-Chicken/OV-Watch)，很多复刻的人说器件非常难焊接，二次开发不太方便，再加上我也打算在STM32上部署一下AI相关的东西，做下教程，因此，FryPi炸鸡派就诞生了。这一块开发板不仅适用于初学者，也适用于进阶开发者。

同时，选这个MCU的原因也是因为STM32F411REU6可以完美替代原来智能手表项目的CEU6，而且在simulink中也有F411的硬件选项。

<p align="center">
    <img width="100%" src="/images/FryPi/0/simulink适配STM32.jpg">
</p>

git仓库中例程demo如下目录所示，分为基础例程Basic，和高级例程Advanced。仓库中的高级例程项目可能需要一定的知识储备。

- [Basic](https://gitee.com/kingham/FryPi/tree/master/2.software/1.Basic)
  - [0.template](https://gitee.com/kingham/FryPi/tree/master/2.software/1.Basic0.template)
  - [1.GPIO](https://gitee.com/kingham/FryPi/tree/master/2.software/1.Basic1.GPIO)
  - [2.USART](https://gitee.com/kingham/FryPi/tree/master/2.software/1.Basic2.USART)
  - [3.TIM](https://gitee.com/kingham/FryPi/tree/master/2.software/1.Basic3.TIM)
  - [4.PWM](https://gitee.com/kingham/FryPi/tree/master/2.software/1.Basic4.PWM)
  - [5.ADC](https://gitee.com/kingham/FryPi/tree/master/2.software/1.Basic5.ADC)
  - [6.SPI](https://gitee.com/kingham/FryPi/tree/master/2.software/1.Basic6.SPI)
  - [7.LCD](https://gitee.com/kingham/FryPi/tree/master/2.software/1.Basic7.LCD)
  - ...
- [Advanced](https://gitee.com/kingham/FryPi/tree/master/2.software/2.Advanced)
  - [0.FreeRTOS相关](https://gitee.com/kingham/FryPi/tree/master/2.software/2.Advanced/0.FreeRTOS)
  - [1.如何使用CubeAI](https://gitee.com/kingham/FryPi/tree/master/2.software/2.Advanced/1.CubeAI)
  - [2.手写数字识别](https://gitee.com/kingham/FryPi/tree/master/2.software/2.Advanced/2.MNIST-Handwritten-number-recognition)
  - [3.热成像手势识别](https://gitee.com/kingham/FryPi/tree/master/2.software/2.Advanced/3.Thermal-camera-gesture-recognition)
  - [4.使用VScode EIDE插件](https://gitee.com/kingham/FryPi/tree/master/2.software/2.Advanced/4.VScode-EIDE-build)
  - [5.simulink在环开发](https://gitee.com/kingham/FryPi/tree/master/2.software/2.Advanced/5.simulink-Co-develope)
  - [6.LVGL智能手表](https://gitee.com/kingham/FryPi/tree/master/2.software/2.Advanced/6.LVGL-SmartWatch)
  - [7.IAP升级例程](https://gitee.com/kingham/FryPi/tree/master/2.software/2.Advanced/7.IAP_F411)
  - [8.OV2640摄像头+识别](https://gitee.com/kingham/FryPi/tree/master/2.software/2.Advanced/7.OV2640-recognition)
  - ...
