---
layout: doc
outline: deep
---

# <center>电脑客户端操作说明</center>

## 1. 波形界面

**1. 连接。**
    选择USB生成的虚拟COM口，并连接，连接后则开始记录波形数据，当点击断开连接则停止。

<p align="center">
    <img border="1px" width="100%" src="/images/Power-Pico/clent_operation/client_main.png">
</p>

**2. 拖动与缩放。**
    下方进度条可以对界面进行拖动和缩放。

**3. 数据导出与导入。**
    导出数据格式为原始的.bin文件，和可供二次处理的.csv文件, 如果想要导入保存的数据到客户端进行二次查看, 选中xxxx.bin导入即可. 注意，xxxx.L1.bin这种是多级统计数据，不用管这个，如果要导入软件请点击原始的时间戳前缀的.bin文件.

<p align="center">
    <img border="1px" width="50%" src="/images/Power-Pico/clent_operation/data_rec.png">
</p>

**4. 鼠标操作。**
    左键拖动可以放大；右键拖动可以弹出区域分析；滚轮是窗口左右移动。

<p align="center">
    <img border="1px" width="100%" src="/images/Power-Pico/clent_operation/region.png">
</p>


## 2. 固件升级

:::warning 警告
自定义代码出问题，可能导致Power-Pico卡死或变砖
:::

**1. 固件选择。**
    可以顶部的按钮点击下载官方的`.bin固件`, 下载完后顶部会出现固件版本信息。当然你也可以自己改App的源代码，选择编译后生成的.bin固件自定义路径。

**2. 强制进入Boot（非必须）。**
    如果设备卡死或者变砖，请按住最上方的Boot键然后再上电，则会开机自动进入BootLoader模式。

**4. 固件下载。**
    选择COM端口，然后点击`烧录固件`即可。当Power-Pico在运行时（波形界面需要断开串口链接断开占用），也可以直接点击`烧录固件`，在App中也会跳转到BootLoader模式然后开始升级固件。

<p align="center">
    <img border="1px" width="100%" src="/images/Power-Pico/clent_operation/firmware.png">
</p>

## 3. 设置界面

这里就是常规的一些设置，用户你可以自己设置自己的主题和语音等等。

<p align="center">
    <img border="1px" width="100%" src="/images/Power-Pico/clent_operation/setting.png">
</p>
