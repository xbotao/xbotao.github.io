title: 使用ubuntu开发electron应用
tags:
  - electron
categories:
  - electron
author: lazyboy
date: 2016-12-03 11:03:00
---
# 使用ubuntu开发electron应用

>参考[http://blog.csdn.net/arvin0/article/details/52709988](http://blog.csdn.net/arvin0/article/details/52709988)操作整理而成

## 环境配置

- node.js [electron开发实在nodejs基础上进行的]
- electron [ 开发所必须的环境 ]
- VS code [编辑器]

### node.js安装
在ubuntu下可以直接使用`apt-get`安装node.js，安装完成以后使用`node -v`查看node版本。此时安装的node.js为稳定版，如果要安装最新版，需要到官网下载源码，自己编译安装
```Bash
sudo apt-get install nodejs
```
下载得到源码压缩包，解压后安装，在`make install`安装完成以后，使用`node -v`来判断是否安装成功，如果提示没有安装node,可以尝试重新打开终端，输入`node -v`，如果仍没有提示，请检查
```Bash
tar -zxvf node-v6.9.1.tar.gz
cd node-v6.9.1/
./configure
sudo make install
```

<!-- more -->

### electron安装
electron安装可以直接到官网 [http://electron.atom.io/](http://electron.atom.io/) 下载安装，也可以安装为nodejs的一个组件（此为本文采用的方法），使用`npm`指令进行安装，原先版本的electron安装使用的是`npm install electron-prebuild`，在新版本中已经更名为`electron`,安装完成以后使用`electron -v`来进行检查是否安装成功。
```Bash
sudo npm install electron -g
```
在安装`electron`过程中也遇到了一些问题，主要是国内网络访问国外镜像资源不稳定造成的，此时可以指定只用国内镜像资源进行安装，
```Bash
sudo apt-get install electron -g --registry = https://registry.npm.taobao.org
```
或者使用'淘宝npm'定制安装工具`cnpm`(这个名字可能是根据chian npm来的吧)下载
```Bash
sudo npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install electron -g
```

### VS code安装

可以直接到官网[https://code.visualstudio.com/Download](https://code.visualstudio.com/Download)下载相应版本进行安装，也可以通过指令下载
```Bash
wget https://az764295.vo.msecnd.net/stable/7ba55c5860b152d999dda59393ca3ebeb1b5c85f/code_1.7.2-1479766213_amd64.deb
dpkg -i code_1.7.2-1479766213_amd64.deb
```

---

## 第一个electron应用
 
 创建一个electron应用并运行，需要以下几个步骤：
 1. 工作目录下，使用`npm init`创建package.json文件
 2. 本地化安装electron
 3. 创建主程序入口文件
 4. 创建UI界面html
 5. 使用自动化工具gulp运行程序
 6. 配置vs Code 运行程序

### 创建package.json文件

工作目录下执行`npm int`指令，按照提示一步步进行,完成以后在工作目录下会生成package.json文件,如下所示。
主要说明的是，`main`标签的值为应用程序的入口，默认为index.js,此处根据自己的需要修改为app/main.js
```JavaScript
{
  "name": "helloworld",   
  "version": "1.0.0",
  "description": "hello world",
  "main": "app/main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

### 本地化安装electron

在项目根目录下安装electron，并保存到依赖项中
```Bash
npm install electron --save-dev
```
如果受网速影响，安装不成功，可以使用国内镜像，[淘宝NPM](https://npm.taobao.org/)
```Bash
npm install electron --save-dev --registry=https://registry.npm.taobao.org
```

### 创建主程序入口
在工程目录下，新建app文件夹，并新建app/main.js文件。具体窗口属性设置，参考[Electron Documentation](http://electron.atom.io/docs/api/browser-window/)

```JavaScript
const electron = require('electron');
// 控制应用生命周期的模块
const {app} = electron;
// 创建本地浏览器窗口的模块
const {BrowserWindow} = electron;

// 指向窗口对象的一个全局引用，如果没有这个引用，那么当该javascript对象被垃圾回收的
// 时候该窗口将会自动关闭
let win;

function createWindow() {
  // 创建一个新的浏览器窗口
  win = new BrowserWindow({width: 1104, height: 620});//570+50

  // 并且装载应用的index.html页面
  win.loadURL(`file://${__dirname}/html/index.html`);

  // 打开开发工具页面
//   win.webContents.openDevTools();

  // 当窗口关闭时调用的方法
  win.on('closed', () => {
    // 解除窗口对象的引用，通常而言如果应用支持多个窗口的话，你会在一个数组里
    // 存放窗口对象，在窗口关闭的时候应当删除相应的元素。
    win = null;
  });
}

// 当Electron完成初始化并且已经创建了浏览器窗口，则该方法将会被调用。
// 有些API只能在该事件发生后才能被使用。
app.on('ready', createWindow);

// 当所有的窗口被关闭后退出应用
app.on('window-all-closed', () => {
  // 对于OS X系统，应用和相应的菜单栏会一直激活直到用户通过Cmd + Q显式退出
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // 对于OS X系统，当dock图标被点击后会重新创建一个app窗口，并且不会有其他
  // 窗口打开
  if (win === null) {
    createWindow();
  }
});

// 在这个文件后面你可以直接包含你应用特定的由主进程运行的代码。
// 也可以把这些代码放在另一个文件中然后在这里导入。
```

### 创建UI界面html

在app目录下新建html，并建立app/html/index.html文件
```HTML
<!doctype html>
<html>
<head>
    <meta charset="utf-8" /> 
    <title>hello electron</title>
</head>
<body>
    <p>Hello electron</p>
</body>
</html>
```

### 使用gulp运行程序

#### 安装gulp

首先全局安装
```Bash
npm install gulp -g
```
然后在工程主目录下本地安装，并添加到依赖
```Bash
npm install gulp --save-dev
```
#### 创建运行脚本

在工程根目录下创建gulpfile.js，内容如下
```JavaScript
// 获取依赖
var gulp = require('gulp'),
    childProcess = require('child_process'),
    electron = require('electron');

// 创建 gulp 任务
gulp.task('run', function () {
    childProcess.spawn(electron, ['--debug=5858','.'], {stdio:'inherit'});
});
```

#### 通过cmd命令运行程序

```Bash
gulp run
```
在项目根目录下运行`gulp run`即可运行程序，效果如下所示

![程序运行结果](http://oh1jgyw0v.bkt.clouddn.com/wyksl2q896n7bm079154rq30iz.png)

### 使用VS Code编译启动项目

1. 使用vs code打开文件夹，找到工作目录作为主文件夹
2. 按下键盘的`ctrl +shift + b`配置生成任务![](http://oh1jgyw0v.bkt.clouddn.com/4emg89g6l96swvfuvhbsfwthb0.png)
3. 修改生成的tasks.json文件，然后再次执行`ctrl +shift + b`即可执行程序

```JavaScript
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "0.1.0",
    "command": "gulp",
    "isShellCommand": true,
    "args": [
        "--no-color"
    ],
    "tasks": [ { 
      "taskName": "run", 
      "args": [], 
      "isBuildCommand": true 
    }]
}
```

---
注：vs coe在使用工程中，无需专门打开命令行，可以通过**[查看]-[集成终端]**调出code中嵌入的命令窗口，运行相应的指令。