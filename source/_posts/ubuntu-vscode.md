title: ubuntu-vscode
tags:
  - ubuntu
  - vscode
date: 2015-10-10 09:10:30
---
Microsoft在2015年4月30日Build 开发者大会上正式宣布了 Visual Studio Code 项目：
一个运行于 Mac OS X、Windows和 Linux 之上的，针对于编写现代 Web 和云应用的跨平台源代码编辑器。该编辑器也集成了所有一款现代编辑器所应该具备的特性，包括语法高亮（syntax hight lighting），可定制的热键绑定（customizable keyboard bindings），括号匹配（bracket matching）以及代码片段收集（snippets）。

> 环境为ubuntu15.04

<!-- more -->

打开终端并运行下面的命令：

```Bash
sudo add-apt-repository ppa:ubuntu-desktop/ubuntu-make
sudo apt-get update
sudo apt-get install ubuntu-make
```

如果已经安装，运行下面的命令：

```Bash
umake web visual-studio-code
```

请注意，在安装过程中, 你会问，给出路径 insatllation 软件包. 在那之后它会询问提交您的权限，安装 Visual Studio 代码. 请按 ‘’ 若要安装 (‘’ 表示接受条款和条件).

从 Ubuntu 卸载 Microsoft Visual Studio 代码

要卸载并从 Ubuntu 系统中删除 Visual Studio 代码, 在终端中运行下面的命令:

```Bash
umake web visual-studio-code --remove
sudo apt-get remove ubuntu-make
```

转载自http://blog.csdn.net/shf4715/article/details/46810693