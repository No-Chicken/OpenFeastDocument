// /docs/config/sidebar.config.ts

// ============ Power-Pico 侧边栏 ============
const PowerPicoSidebar = {
  '/content/Power-Pico/': [
    {
      text: 'Power-Pico便携功耗计',
      collapsed: false,
      items: [
        { text: 'Power-Pico 介绍', link: '/content/Power-Pico/intro.md' },
        { text: '资料链接', link: '/content/Power-Pico/data_collection.md' },
      ]
    },
    {
      text: '用户操作说明',
      collapsed: false,
      items: [
        { text: '硬件操作', link: '/content/Power-Pico/UserManual/hardware_operation.md' },
        { text: '电脑客户端', link: '/content/Power-Pico/UserManual/client_operation.md' },
        { text: '疑问解答', link: '/content/Power-Pico/UserManual/QandA.md' },
      ]
    },
    {
      text: '开源复刻说明',
      collapsed: false,
      items: [
        { text: '硬件复刻', link: '/content/Power-Pico/WorkingPrinciple/replicate_project.md' },
        { text: '固件烧录', link: '/content/Power-Pico/WorkingPrinciple/firmware_flash.md' },
        { text: '硬件原理', link: '/content/Power-Pico/WorkingPrinciple/hardware_detail.md' },
        { text: '代码说明', link: '/content/Power-Pico/WorkingPrinciple/code_detail.md' },
      ]
    },
    {
      text: '其他说明',
      collapsed: false,
      items: [
        { text: '版本更新说明', link: '/content/Power-Pico/others/release_note.md' },
        { text: '免责声明', link: '/content/Power-Pico/others/disclaimer.md' },
      ]
    },
  ]
}

// ============ Echo-Mate 侧边栏 ============
const EchoMateSidebar = {
  '/content/Echo-Mate/': [
    {
      text: 'AI桌面机器人',
      collapsed: false,
      items: [
        { text: 'Echo-Mate 介绍', link: '/content/Echo-Mate/intro.md' },
        { text: 'RV1106开发板参数', link: '/content/Echo-Mate/0.参数介绍.md' },
        { text: '资料链接', link: '/content/Echo-Mate/2.资料收集.md' },
      ]
    },
    {
      text: '1.开始使用',
      collapsed: false,
      items: [
        { text: '入门指南', link: '/content/Echo-Mate/1.入门指南.md' },
        { text: '环境搭建', link: '/content/Echo-Mate/3.环境搭建.md' },
        { text: '镜像烧录', link: '/content/Echo-Mate/4.镜像烧录.md' },
        { text: '开发板使用操作', link: '/content/Echo-Mate/5.开发板操作.md' },
        { text: '运行桌面机器人', link: '/content/Echo-Mate/6.运行桌面机器人.md' },
      ]
    },
    {
      text: '2.Linux基础知识',
      collapsed: false,
      items: [
        { text: 'Linux基础知识', link: '/content/Echo-Mate/7.Linux基础知识/7.Linux基础知识.md' },
        { text: 'Linux基本命令', link: '/content/Echo-Mate/7.Linux基础知识/7.1.Linux基础命令.md' },
        { text: 'uboot,kernel,rootfs是？', link: '/content/Echo-Mate/7.Linux基础知识/7.2.uboot,kernel,rootfs.md' },
        { text: '什么是Cmake和make', link: '/content/Echo-Mate/7.Linux基础知识/7.3.什么是Cmake和make.md' },
        { text: '快速上手一个C和C++程序', link: '/content/Echo-Mate/7.Linux基础知识/7.4.快速上手一个C和C++程序.md' },
      ]
    },
    {
      text: '3.项目详解',
      collapsed: false,
      items: [
        { text: 'SDK说明', link: '/content/Echo-Mate/8.SDK说明.md' },
        { text: '整体软件说明', link: '/content/Echo-Mate/9.软件说明.md' },
        { text: 'DeskBot例程说明', link: '/content/Echo-Mate/10.deskbot.md' },
      ]
    },
  ],
}

// ============ OV-Watch 侧边栏 ============
const OVWatchSidebar = {
  '/content/OV-Watch/': [
    {
      text: 'STM32智能手表',
      collapsed: false,
      items: [
        { text: 'OV-Watch 介绍', link: '/content/OV-Watch/intro.md' },
        { text: '资料链接', link: '/content/OV-Watch/1.资料收集.md' },
      ]
    },
    {
      text: '1.上手测试',
      collapsed: false,
      items: [
        { text: '如何烧录 (必看!)', link: '/content/OV-Watch/2.如何烧录.md' },
        { text: '蓝牙串口通信协议 (必看!)', link: '/content/OV-Watch/6.蓝牙串口.md' },
        { text: '深入学习预备知识', link: '/content/OV-Watch/预备知识.md' },
      ]
    },
    {
      text: '2.整体框架',
      collapsed: false,
      items: [
        { text: '硬件结构', link: '/content/OV-Watch/3.硬件结构.md' },
        { text: '软件框架', link: '/content/OV-Watch/4.软件框架.md' },
      ]
    },
    {
      text: '3.原理与算法讲解',
      collapsed: false,
      items: [
        { text: '浮点计算器', link: '/content/OV-Watch/5.算法/1.浮点计算器.md' },
        { text: '心率算法', link: '/content/OV-Watch/5.算法/2.心率.md' },
        { text: '运行模式管理 (低功耗)', link: '/content/OV-Watch/5.算法/3.运行模式管理.md' },
        { text: '翻腕亮屏', link: '/content/OV-Watch/5.算法/4.翻腕亮屏.md' },
      ]
    },
  ]
}

// ============ FryPi 侧边栏 ============
const FryPiSidebar = {
  '/content/FryPi/': [
    {
      text: 'STM32F411RET6开发板',
      collapsed: false,
      items: [
        { text: 'FryPi 介绍', link: '/content/FryPi/intro.md' },
        { text: '资料链接', link: '/content/FryPi/1.资料收集.md' },
        { text: '准备工作', link: '/content/FryPi/2.基础例程/2.1.准备工作.md' },
        { text: '使用Cmake开发', link: '/content/FryPi/2.基础例程/cmake_project.md' },
      ]
    },
    {
      text: '2.基础例程',
      collapsed: true,
      items: [
        { text: '上机测试 (强烈建议!)', link: '/content/FryPi/2.基础例程/2.2.上机测试.md' },
        { text: 'CubeMX创建工程', link: '/content/FryPi/2.基础例程/2.3.CubeMX创建工程.md' },
        { text: 'GPIO', link: '/content/FryPi/2.基础例程/2.4.GPIO.md' },
        { text: 'USART', link: '/content/FryPi/2.基础例程/2.5.USART.md' },
        { text: 'TIMER', link: '/content/FryPi/2.基础例程/2.6.TIM.md' },
        { text: 'PWM', link: '/content/FryPi/2.基础例程/2.7.PWM.md' },
        { text: '其他', link: '/content/FryPi/2.基础例程/2.8.others.md' },
      ]
    },
    {
      text: '3.进阶例程',
      collapsed: true,
      items: [
        { text: 'FreeRTOS例程', link: '/content/FryPi/3.进阶例程/3.0.FreeRTOS.md' },
        { text: '如何使用CubeAI', link: '/content/FryPi/3.进阶例程/3.1.如何使用CubeAI.md' },
        { text: '手写数字识别MNIST', link: '/content/FryPi/3.进阶例程/3.2.手写数字识别.md' },
        { text: 'BootLoader和IAP', link: '/content/FryPi/3.进阶例程/3.3.BootLoader.md' },
        { text: 'LVGL手表例程', link: '/content/FryPi/3.进阶例程/3.4.LVGL_Watch.md' },
      ]
    },
    {
      text: '4.RTOS基础知识',
      collapsed: true,
      items: [
        { text: '初学者指南', link: '/content/FryPi/4.RTOS基础知识/README.md' },
        { text: '什么是FreeRTOS', link: '/content/FryPi/4.RTOS基础知识/1.什么是FreeRTOS.md' },
        { text: '创建工程模板', link: '/content/FryPi/4.RTOS基础知识/2.创建工程模板.md' },
        { text: 'config', link: '/content/FryPi/4.RTOS基础知识/3.config.md' },
        { text: '任务', link: '/content/FryPi/4.RTOS基础知识/4.任务.md' },
        { text: '信号量', link: '/content/FryPi/4.RTOS基础知识/5.信号量.md' },
        { text: '软件定时器', link: '/content/FryPi/4.RTOS基础知识/6.软件定时器.md' },
        { text: '钩子函数', link: '/content/FryPi/4.RTOS基础知识/7.钩子函数.md' },
        { text: '如何调试', link: '/content/FryPi/4.RTOS基础知识/8.调试.md' },
      ]
    },
    {
      text: '5.LVGL基础知识',
      collapsed: true,
      items: [
        { text: '初学者指南', link: '/content/FryPi/5.LVGL基础知识/1.什么是LVGL.md' },
        { text: '快速上手LVGL', link: '/content/FryPi/5.LVGL基础知识/2.快速上手LVGL.md' },
        { text: 'LVGL仿真', link: '/content/FryPi/5.LVGL基础知识/3.LVGL仿真.md' },
        { text: 'SquareLine快速设计UI', link: '/content/FryPi/5.LVGL基础知识/4.SquareLine_Studio快速设计.md' },
        { text: 'LVGL在STM32上运行', link: '/content/FryPi/5.LVGL基础知识/5.LVGL在STM32上运行.md' },
      ]
    },
  ]
}


// ============ OV-Card 侧边栏 ============
const OVCardSidebar = {
  '/content/OV-Card/': [
    {
      text: '万能卡片',
      collapsed: false,
      items: [
        { text: 'OV-Card 介绍', link: '/content/OV-Card/intro.md' },
        { text: '资料收集', link: '/content/OV-Card/1.资料收集.md' }
      ]
    },
  ]
}


// ============ sidebarConfig ============
export const sidebarConfig = {
  '/content/': [
    {
      text: 'OpenFeast Tech',
      collapsed: false,
      items: [
        { text: '油炸鸡开源 介绍', link: '/content/main_intro.md' },
        { text: '交流群', link: '/content/discuss_groups.md' },
      ]
    }
  ],
  ...PowerPicoSidebar,
  ...EchoMateSidebar,
  ...OVWatchSidebar,
  ...FryPiSidebar,
  ...OVCardSidebar,

}
