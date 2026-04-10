---
layout: doc
outline: deep
---

# <center>复刻说明</center>

此章节用于从0复刻硬件，如果不想麻烦和焊接，直接去淘宝购买焊接好组装好的即可。

## 1.物料清单表

<table style="width:100%;table-layout:fixed">
    <thead>
        <tr>
            <th style="padding:16px;text-align:center;font-weight:600;width:15%">参数类别</th>
            <th style="padding:16px;text-align:center;font-weight:600;width:40%">规格</th>
            <th style="padding:16px;text-align:center;font-weight:600;width:15%">购买链接</th>
            <th style="padding:16px;text-align:center;font-weight:600;width:10%">单机数量</th>
            <th style="padding:16px;text-align:center;font-weight:600;width:20%">备注</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border-bottom:1px solid rgba(0,0,0,0.05)">
            <td style="padding:16px">物料+PCB</td>
            <td style="padding:16px">芯片/电阻/电容等物料 (STM32, INA190, FUSB302等)</td>
            <td style="padding:16px;text-align:center"><a href="https://www.szlcsc.com/" style="color:#007aff;text-decoration:none">立创商城</a> / <a href="https://www.jlc.com/" style="color:#007aff;text-decoration:none">嘉立创</a></td>
            <td style="padding:16px;text-align:center">1 套</td>
            <td style="padding:16px;text-align:center">4层板，JLC04161H-7628，免费20%阻抗，1.6mm板厚。</td>
        </tr>
        <tr>
            <td style="padding:16px">面板</td>
            <td style="padding:16px">材料<b>透明亚克力</b>，基材厚度<b>1.5mm</b>，打印方式<b>正面</b>，遮光程度<b>常规遮光(白底)</b>，背胶<b>正品3M9448A(通用款)</b></td>
            <td style="padding:16px;text-align:center"><a href="https://www.szlcmb.com/home.html" style="color:#007aff;text-decoration:none">立创面板定制</a></td>
            <td style="padding:16px;text-align:center">1 片</td>
            <td style="padding:16px;text-align:center">好像有免费券可以领取</td>
        </tr>
        <tr>
            <td style="padding:16px">3D打印外壳</td>
            <td style="padding:16px">底壳+上壳 [JLC Black] + 5个按钮 [Grey灰色]</td>
            <td style="padding:16px;text-align:center"><a href="https://www.jlc-3dp.cn/" style="color:#007aff;text-decoration:none">嘉立创 3D 打印</a></td>
            <td style="padding:16px;text-align:center">1 套</td>
            <td style="padding:16px;text-align:center">外壳喜欢什么颜色打什么颜色~</td>
        </tr>
        <tr>
            <td style="padding:16px">屏幕</td>
            <td style="padding:16px">宜星1.54寸TFT液晶屏ST7789的240*240屏幕，接插15p弯排</td>
            <td style="padding:16px;text-align:center"><a href="https://item.taobao.com/item.htm?id=787746153516&amp;mi_id=0000KcTV7n6Z7QEWrnIzdClKtlQetoYhBOMm6hxRzUzks-E&amp;skuId=5375504836262&amp;spm=tbpc.boughtlist.suborder_itemtitle.1.5d472e8d2pylFt" style="color:#007aff;text-decoration:none">淘宝链接</a></td>
            <td style="padding:16px;text-align:center">1 块</td>
            <td style="padding:16px;text-align:center">\</td>
        </tr>
        <tr>
            <td style="padding:16px">双面胶</td>
            <td style="padding:16px">\</td>
            <td style="padding:16px;text-align:center">\</td>
            <td style="padding:16px;text-align:center">若干</td>
            <td style="padding:16px;text-align:center">需要把屏幕粘在PCB背面划线区域</td>
        </tr>
        <tr>
            <td style="padding:16px">平头自攻螺丝</td>
            <td style="padding:16px">M3*8</td>
            <td style="padding:16px;text-align:center"><a href="https://detail.tmall.com/item.htm?id=601686498336&amp;mi_id=000093Ff_b0eVCYhVRhu4Tm1JGjBhgxGwx7oBWbNtXRek5w&amp;skuId=5748019833274&amp;spm=tbpc.boughtlist.suborder_itemtitle.1.33562e8d4VDGS5" style="color:#007aff;text-decoration:none">淘宝链接</a></td>
            <td style="padding:16px;text-align:center">4颗</td>
            <td style="padding:16px;text-align:center">螺丝太长会顶到面板盖不下，太短会拧不上</td>
        </tr>
        <tr>
            <td style="padding:16px">Type-C转接头</td>
            <td style="padding:16px">公对公Type-c全功能转接头</td>
            <td style="padding:16px;text-align:center"><a href="https://detail.tmall.com/item.htm?id=803699315933&amp;mi_id=0000VttRLVyQrJ3aRjiXWuP7rBRj382ygjlA2Revbiu75jg&amp;skuId=5641426919738&amp;spm=tbpc.boughtlist.suborder_itemtitle.1.6deb2e8dZrYkDv" style="color:#007aff;text-decoration:none">淘宝链接</a></td>
            <td style="padding:16px;text-align:center">看自己需要</td>
            <td style="padding:16px;text-align:center"><b>非必须</b>物料</td>
        </tr>
        <tr>
            <td style="padding:16px">Type-C转鳄鱼夹</td>
            <td style="padding:16px">公头-鳄鱼夹5A</td>
            <td style="padding:16px;text-align:center"><a href="https://item.taobao.com/item.htm?id=893569405866&amp;mi_id=0000FekyGJhsWPxKVqES49eo08qww3YikMJ6eNNzbK5l24g&amp;sku_properties=148242406%3A40233957&amp;spm=tbpc.boughtlist.suborder_itemtitle.1.6deb2e8dZrYkDv" style="color:#007aff;text-decoration:none">淘宝链接</a></td>
            <td style="padding:16px;text-align:center">看自己需要</td>
            <td style="padding:16px;text-align:center"><b>非必须</b>物料</td>
        </tr>
    </tbody>
</table>

## 2.焊接说明

打1.6mm的板子自己焊接就行，焊接部分没什么好说的

## 3.程序烧录

详见后面写的[烧录说明](./firmware_flash.md).

## 4.结构安装

先把屏幕用双面胶粘在PCB背面划线区域，PCB+屏幕和安装好的实物图如下所示，面板是粘装在顶部的，所以螺丝不要太长会顶到面板。

<div style="display:flex;gap:2px;justify-content:center;align-items:center;margin-bottom:20px">

<div style="flex:1;display:flex;align-items:center;justify-content:center;border-radius:12px;overflow:hidden">
    <img src="/images/Power-Pico/WorkingPrinciple/replicate/PCBA.jpg" style="max-width:100%;max-height:100%;width:auto;height:auto;display:block" alt="PCB+屏幕图" />
</div>

<div style="flex:1;display:flex;align-items:center;justify-content:center;border-radius:12px;overflow:hidden">
    <img src="/images/Power-Pico/WorkingPrinciple/replicate/all.jpg" style="max-width:100%;max-height:100%;width:auto;height:auto;display:block" alt="实物图" />
</div>

</div>

3D打印的结构件的爆炸图如下图所示。

<div style="display:flex;gap:2px;justify-content:center;align-items:center;margin-bottom:20px">

<div style="flex:1;display:flex;align-items:center;justify-content:center;border-radius:12px;overflow:hidden">
    <img src="/images/Power-Pico/WorkingPrinciple/replicate/3Dexpand.png" style="max-width:100%;max-height:100%;width:auto;height:auto;display:block" alt="3D爆炸左侧图" />
</div>

<div style="flex:1;display:flex;align-items:center;justify-content:center;border-radius:12px;overflow:hidden">
    <img src="/images/Power-Pico/WorkingPrinciple/replicate/3Dexpand.gif" style="max-width:100%;max-height:100%;width:auto;height:auto;display:block" alt="3D爆炸右侧图" />
</div>

</div>
