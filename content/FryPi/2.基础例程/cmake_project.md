---
layout: doc
outline: deep
---

# <center>使用Cmake进行开发</center>

<b>如果直接使用keil MDK开发，请跳过此章节。</b>

`keil MDK`来开发，自由度会比较低。如果用cmake自定义，添加文件等操作自由度会高很多，也方便很多，同时这也是别人开源社区主要的开发方式了，也方便git管理。所以这里将一下在windows搭建cmake环境开发STM32。（ubuntu的环境更简单，几行命令就行，详细问AI就行）

当然，Cmake构建，gcc编译，我好像遇到了同样的程序，但gcc编译和keil的编译器，编译出来就是不同的，前者无法运行？目前还没找到原因，建议项目一开始就确定好工具，工程移植将会是噩梦。

## 1. 环境安装(windows)

1. <b>Cmake 构建系统生成器</b>

    进入 https://cmake.org/download/ 下载 Windows x64 Installer，一般是`cmake-x.x.x-windows-x86_64.msi`, 然后安装，安装时务必勾选 `Add CMake to the system PATH for all users`添加环境变量。

2. <b>Ninja 构建工具</b>

    进入 https://github.com/ninja-build/ninja/releases 下载`ninja-win.zip`, 解压后会得到一个 ninja.exe。将其放在一个固定的文件夹中（例如 E:\Tools\Ninja\），然后手动将这个文件夹路径添加到 Windows 的系统环境变量 PATH 中。

3. <b>Arm GNU Toolchain 交叉编译器</b>

    为了配合 OpenOCD 进行调试，不要前往 Arm 官网下载，请前往：https://github.com/xpack-dev-tools/arm-none-eabi-gcc-xpack/releases 下载xPack GNU Arm Embedded GCC（通常名字为xpack-arm-none-eabi-gcc-x.x.x-win32-x64.zip）。解压到你指定的文件夹，然后将其 bin 目录（里面有 xxx-gcc.exe）添加到系统环境变量 PATH 中。

4. <b>OpenOCD 调试工具</b>

    使用`OpenOCD`进行开发，请去下载 xPack OpenOCD Windows 版：https://github.com/xpack-dev-tools/openocd-xpack/releases , 解压后同样将其 bin 目录（里面有 openocd.exe）添加到系统环境变量 PATH 中。

5. <b>验证环境</b>

    win+R 弹出命令，输入 cmd 进入命令行，输入版本检查命令看是否有版本信息，有则环境安装好了
    ```PowerShell
    cmake --version
    ninja --version
    arm-none-eabi-gcc --version
    openocd --version
    ```

## 2. 构建和编译

使用 CubeMX 配置工程，然后导出设置的toolchain选择Cmake，然后打开工程，执行下述命令。完成后，进入 build 文件夹，你就能看到生成的 工程名.elf、工程名.hex 和 工程名.bin 文件了。然后就可以烧录验证了。

```PowerShell
# 1. 告诉 CMake 使用 Ninja 作为构建工具，并生成构建配置到 build 文件夹
cmake -B build -G Ninja
# 2. 开始编译
cmake --build build
```

## 3. 调试debug

烧录器我用的`st-link`烧录器，我是在`vscode`中进行编辑，所以以我的工况为例说明。为了方便，添加了`launch.json`和`task.json`，可以自行搜索是什么作用。

1. <b> VS Code 的扩展商店安装插件: </b>

    - C/C++ (Microsoft)

    - CMake Tools (Microsoft)

    - Cortex-Debug (marus25) —— 这是 ARM 调试的灵魂。

2. <b>setting.json配置</b>

    打开设置`Preferences: Open User Settings(JSON)`, 请将`armToolchainPath`和`openocdPath`改为你的工具路径。

    ```json
    "cortex-debug.armToolchainPath": "E:\\environment\\xpack-arm-none-eabi-gcc-14.2.1-1.1\\bin",
    "cortex-debug.openocdPath": "E:\\environment\\xpack-openocd-0.12.0-7\\bin\\openocd.exe",
    ```

3. <b>配置调试文件 (launch.json)</b>

    这是最关键的一步。在你的工程根目录文件夹下，在.vscode文件夹中中创建创建一个名为 launch.json 的文件，填入以下内容：

    ```json
    {
        "version": "0.2.0",
        "configurations": [
            {
                "name": "Cortex Debug (OpenOCD)",
                "cwd": "${workspaceFolder}",
                // 自动获取 CMake 编译输出的 .elf 文件路径，无需每次改名字
                "executable": "${command:cmake.launchTargetPath}",
                "request": "launch",
                "type": "cortex-debug",
                "runToEntryPoint": "main", // 启动后自动停在 main 函数第一行
                "servertype": "openocd",
                "device": "STM32F411",     // 指定芯片型号
                "configFiles": [
                    "interface/stlink.cfg", // 假设你使用的是 ST-Link 下载器
                    "target/stm32f4x.cfg"   // F411 属于 F4 系列
                ],
                // "svdFile": "${workspaceFolder}/STM32F411.svd", // 用于查看外设寄存器
                "preLaunchTask": "Build"   // 每次调试前自动调用编译任务
            }
        ]
    }
    ```

4. <b>配置自动编译任务 (tasks.json)</b>

    为了让 launch.json 中的 "preLaunchTask": "Build" 生效，我们需要在 .vscode 文件夹下再创建一个 tasks.json 文件。这样每次按 F5 调试前，VS Code 都会先确保代码是最新的。

    当然我自己也在task.json中加了其他的编译build和clean任务，这是我的配置：

    ```json
    {
        "version": "2.0.0",
        "tasks": [
            {
                "label": "CMake Configure", // 任务标签
                "type": "shell",
                // 生成 build 文件夹，并指定 Ninja 作为构建系统
                "command": "cmake -B build -G Ninja",
                "problemMatcher": []
            },
            {
                "label": "Build", // 任务标签
                "type": "shell",
                // 执行实际的编译过程 (相当于以前的 make)
                "command": "cmake --build build",
                // 每次 Build 前都确保 CMake 已配置
                // "dependsOn": "CMake Configure",
                "group": {
                    "kind": "build",
                    "isDefault": true
                },
                "problemMatcher": "$gcc"
            },
            {
                "label": "Flash via OpenOCD", // 任务标签
                "type": "shell",
                "command": "openocd",
                "args": [
                    "-f",
                    "interface/stlink.cfg",
                    "-f",
                    "target/stm32f4x.cfg",
                    "-c",
                    "program build/Debug/GPIO_CMAKE.elf verify reset exit"
                ],
                // 确保烧录前先编译，防止烧录的是老代码
                "dependsOn": "Build",
                "problemMatcher": []
            },
            {
                "label": "Clean", // 任务标签
                "type": "shell",
                // 跨平台安全删除整个 build 文件夹
                "command": "cmake -E rm -rf build",
                "problemMatcher": []
            }
        ]
    }
    ```
    如果调试在vscode中debug，出现环境问题，可以自行问问AI，需要改哪些配置。

5. <b>开始debug即可</b>

    <p align="center">
        <img width="100%" src="/images/FryPi/2.1/vscode_debug.png">
    </p>
