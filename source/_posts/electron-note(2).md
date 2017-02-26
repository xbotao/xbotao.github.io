title: electron学习笔记(2)--BrowserWindow
author: lazyBoy
tags:
  - electron
categories:
  - electron
date: 2016-12-04 21:24:00
---
学习electron第二篇，上一篇为electron环境的搭建以及如何创建第一个electron应用
[使用ubuntu开发electron](https://www.lazyboy.site/2016/12/03/electron%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/)

## 环境
>系统：windows 10
>软件：electron v1.4.8，node v6.2.0

## BrowserWindow
官方API地址： [http://electron.atom.io/docs/api/browser-window/](http://electron.atom.io/docs/api/browser-window/)

### main process创建窗口
在electron中使用`BrowserWindow`来创建和控制应用窗口状态

```JavaScript
// In the main process. 在主进程中进行
const {BrowserWindow} = require('electron')

// Or use `remote` from the renderer process. 
// 在renderer进程中可以通过remote进行操作
// const {BrowserWindow} = require('electron').remote

let win = new BrowserWindow({width: 800, height: 600})
win.on('closed', () => {
  win = null
})

// Load a remote URL
win.loadURL('https://github.com')

// Or load a local HTML file
win.loadURL(`file://${__dirname}/app/index.html`)
```
<!-- more -->

上述代码可以用来控制生成窗口，并设置窗口大小为800*600，得到一个空的窗口

![](http://oh1jgyw0v.bkt.clouddn.com/qpm3xfslf4qdut3pr39szed5z5.png)

### 创建无边框窗口

在BrowserWindow初始化时设置窗口样式中`frame: false`即可。

```JavaScript
const {BrowserWindow} = require('electron')
let win = new BrowserWindow({width: 800, height: 600, frame: false})
win.show()
```
![](http://oh1jgyw0v.bkt.clouddn.com/uj2c99tw9p7oucbvgt3tjtv12l.png)

#### 设置窗口透明

窗口样式中设置`transparent: true`即可。

#### 设置鼠标点击穿过

设置以上效果以后，鼠标将无法点击窗口内容
```JavaScript
const {BrowserWindow} = require('electron')
let win = new BrowserWindow()
win.setIgnoreMouseEvents(true)
```

#### 设置窗口拖拽

- 对于无边框窗口，无法完成拖拽功能，可以在界面CSS中设置元素`-webkit-app-region`来实现拖拽功能。
- 
```CSS
<body style="-webkit-app-region: drag"> </body>
```

- 如果设置了全局可拖拽，也可以通过`no-drag`设置某个元素不可拖拽
```CSS
button { -webkit-app-region: no-drag; }
```

- 拖拽功能和文本选择功能在实现上是会发生冲突的，对于需要拖拽的区域需要禁用文本选择功能
```CSS
.titlebar {
  -webkit-user-select: none;
  -webkit-app-region: drag;
}
```

### 让应用优雅的展现出来
由于electron创建的桌面应用实际上是在利用封装的chorme浏览器加载页面作为的UI，如果加载过程呈现在给用户，将是一个很好的体验，可以通过以下方式避免

- 使用`ready-to-show`事件

```JavaScript
const {BrowserWindow} = require('electron')
let win = new BrowserWindow({show: false})
win.once('ready-to-show', () => {
  win.show()
})
```

- 设置背景色实现

```JavaScript
const {BrowserWindow} = require('electron')

let win = new BrowserWindow({backgroundColor: '#2e2c29'})
win.loadURL('https://github.com')
```
使用`ready-to-show`事件，会在应用启动时有延时，**设置背景色**可以消除这种延时，但是比较而言，还是使用`ready-to-show`事件的用户体验更好


