title: Qwebview使用
author: lazyBoy
tags:
  - Qt
  - webkit
categories:
  - Qt
date: 2016-12-08 23:12:00
---
# qt webview 使用

>QWebView在Qt5.6及以上版本中已不存在，如果要使用，需要自行下载源码编译组件，或者从安装Qt5.5及以下版本使用。

## 基本使用

1. 引用库
```C++
QT       += webkitwidgets
```
2. 添加头文件
```C++
#include <QtWebKitWidgets>
```
3. UI界面添加webview

### 问题

Q：在QWebView使用过程中，会出现不能加载网页的问题，log中打印ssl相关错误
A： 这是因为Qt中ssl版本不对造成的，需要从Qt Creator复制两个库文件到SDK。从`D:\Qt\Qt5.5.1\Tools\QtCreator\bin`复制`libeay32.dll`和`ssleay32.dll`到`D:\Qt\Qt5.5.1\5.5\msvc2013\bin`。*注：经验证，本方法只试用32bit版本*

<!-- more -->

![](http://oh1jgyw0v.bkt.clouddn.com/5p02p5lv5h0350xl128v2weq7u.png)
![](http://oh1jgyw0v.bkt.clouddn.com/qb2l2st6nokr1pc3huqm3ywah5.png)

## 打开网址

打开本地文件

```C++
QUrl url = QUrl::fromLocalFile("d://1.html");
ui->webView1->load(url);
```

打开网络文件

```C++
QUrl url("http://www.baidu.com");
ui->webView1->load(url);
```

## Qt中调用页面脚本

```C++
//qt中调用webkit中的程序
QWebFrame *webFrame = ui->webView->page()->mainFrame();
QString cmd = QString("alert('hello');");
webFrame->evaluateJavaScript(cmd);
```

## Qt webkit调用本地函数
在webkit中调用Qt本地函数，需要向webkit注册一个对象，然后在js中调用
```C++
//1. 构造函数中，添加信号和槽
    connect(ui->webView->page()->mainFrame(), SIGNAL(javaScriptWindowObjectCleared()),
            this,  SLOT(insertObject2html()));
            
//2. 在javaScriptWindowObjectCleared()信号的响应函数insertObject2html()中向webkit注册对象
void MainWindow::insertObject2html()
{
    ui->webView->page()->mainFrame()->addToJavaScriptWindowObject("qtObject", this);
}

//3. 本地创建公共槽函数 sayHello
void MainWindow::sayHello()
{
    qDebug() << "Hello";
}

// 4. js中调用函数
    <form onsubmit="qtObject.sayHello()">
```

公共槽函数声明如下
```C++
public slots:
    void insertObject2html();
    void sayHello();
```
![](http://oh1jgyw0v.bkt.clouddn.com/thcg05y5amhuan5rk3opb2q589.png)