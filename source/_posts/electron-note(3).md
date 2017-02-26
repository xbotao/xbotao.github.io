title: electron学习笔记(3)--多窗口实验
author: lazyBoy
tags:
  - electron
categories:
  - electron
date: 2016-12-05 20:57:00
---
>多窗口实验，主要是学习如何在`Renderer Process`中创建一个新的窗口，并对窗口做一些控制。
>同样， [官方API地址不变 http://electron.atom.io/docs/api/browser-window/](http://electron.atom.io/docs/api/browser-window/)

<!-- more -->

## 创建一个新窗口

该实验实现通过点击界面上的按钮实现创建一个新窗口

** Renderer Process**
```JavaScript
//通过remote来访问BrowserWindow
const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')

const newWindowBtn = document.getElementById('new-window')

newWindowBtn.addEventListener('click', function (event) {
  const modalPath = path.join('file://', __dirname, '../../sections/windows/modal.html')
  let win = new BrowserWindow({ width: 400, height: 320 })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
})
```

也可以创建一个隐藏窗口作为后台任务，这样可以实现多线程执行任务。
```JavaScript
var win = new BrowserWindow({
  width: 400, height: 225, show: false
})
```

## 管理窗口状态

该实验实现监听新窗口的`move`和`resize`事件，来获得窗口的状态。

```JavaScript
const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')

const manageWindowBtn = document.getElementById('manage-window')
let win

manageWindowBtn.addEventListener('click', function (event) {
  const modalPath = path.join('file://', __dirname, '../../sections/windows/manage-modal.html')
  win = new BrowserWindow({ width: 400, height: 275 })
  win.on('resize', updateReply)
  win.on('move', updateReply)
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
  function updateReply () {
    const manageWindowReply = document.getElementById('manage-window-reply')
    const message = `Size: ${win.getSize()} Position: ${win.getPosition()}`
    manageWindowReply.innerText = message
  }
})
```

![](http://oh1jgyw0v.bkt.clouddn.com/eathmhzte4qp8665z7yhl2gknv.png)

## 切换焦点到子窗口

可以通过检测新创建窗口的焦点状态，并通过父窗口按钮来讲焦点转移到子窗口

需要监听的事件`blur `
```JavaScript
const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')

const manageWindowBtn = document.getElementById('listen-to-window')
const focusModalBtn = document.getElementById('focus-on-modal-window')
let win

manageWindowBtn.addEventListener('click', function () {
  const modalPath = path.join('file://', __dirname, '../../sections/windows/modal-toggle-visibility.html')
  win = new BrowserWindow({ width: 600, height: 400 })
  win.on('focus', hideFocusBtn)
  win.on('blur', showFocusBtn)
  win.on('close', function () {
    hideFocusBtn()
    win = null
  })
  win.loadURL(modalPath)
  win.show()
  function showFocusBtn (btn) {
    if (!win) return
    focusModalBtn.classList.add('smooth-appear')
    focusModalBtn.classList.remove('disappear')
    focusModalBtn.addEventListener('click', function () { win.focus() })
  }
  function hideFocusBtn () {
    focusModalBtn.classList.add('disappear')
    focusModalBtn.classList.remove('smooth-appear')
  }
})
```

### 创建无边框窗口

通过设置`frame`属性为false, 创建一个不包含浏览器边框的窗口
```JavaScript
const BrowserWindow = require('electron').remote.BrowserWindow
const newWindowBtn = document.getElementById('frameless-window')

const path = require('path')

newWindowBtn.addEventListener('click', function (event) {
  const modalPath = path.join('file://', __dirname, '../../sections/windows/modal.html')
  let win = new BrowserWindow({ frame: false })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
})
```

下次笔记【刷新和关闭窗口】

