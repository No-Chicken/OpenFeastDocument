---
layout: doc
outline: deep
---

# <center>FreeRTOS 初学者指南</center>

油炸鸡开源硬件在这里只略微讲一些RTOS的知识，需要大家自己在网上深入的学习，这边只是带一遍，然后重点在项目教学~

实时操作系统 (RTOS) 是一种体积小巧、确定性强的计算机操作系统。 RTOS 通常用于需要在严格时间限制内对外部事件做出反应的嵌入式系统，如医疗设备和汽车电子控制单元 (ECU)。 通常，此类嵌入式系统中只有一两项功能需要确定性时序，即使嵌入式系统不需要严格的实时反应，使用 RTOS 仍能提供诸多优势。

RTOS 通常比通用操作系统体积更小、重量更轻，因此 RTOS 非常适用于 内存、计算和功率受限的设备。

### 快速入门目录

1. [什么是FreeRTOS](./1.什么是FreeRTOS.md)

2. [工程模板创建](./2.创建工程模板.md)

3. [FreeRTOS config](./3.config.md)

3. [任务Tasks实验](./4.任务.md)

4. [信号量与消息队列实验](./5.信号量.md)

5. [软件定时器实验](./6.软件定时器.md)

6. [钩子函数实验](./7.钩子函数.md)

7. [如何调试](./8.调试.md)

### 部分参考资料

[[1].FreeRTOS官方手册](https://www.freertos.org/zh-cn-cmn-s/Documentation/01-FreeRTOS-quick-start/01-Beginners-guide/00-Overview)

[[2].cmsis_os_v2 api 教学](https://www.armbbs.cn/forum.php?mod=viewthread&tid=125907)

[[3].FreeRTOS简介(csdn)](https://blog.csdn.net/chengjunchengjun/article/details/109710929)

[[4].韦东山RTOS B站教学](https://www.bilibili.com/video/BV1844y1g7ud)

其他可以自行寻找学习
