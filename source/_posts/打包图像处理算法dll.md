title: 打包图像处理算法dll
author: lazyBoy
tags:
  - dll
  - opencv
categories:
  - 教程
date: 2017-01-16 21:29:00
---
<p id="div-border-left-purple">开发图像处理算法，有时并不想把源码开放给对方，此时一般需要将程序打包成动态链接库的形式。此时选择的方案是：<br />**opencv静态库 + 打包成dll**</p>

- 参照之前<span id="inline-green">本博客</span>中的文章[使用opencv staticlib静态库](/2016/12/12/使用opencv-staticlib静态库/)，配置opencv属性文件备用

<!-- more -->

- 参考 [图像处理算法打包成dll](http://blog.csdn.net/hit2015spring/article/details/52624985) 创建动态库并进行测试，该文章可以作为一个简单的Demo来理解如何打包成dll库，但是如果打包比较复杂的类就有一些问题需要注意了。

### 创建dll工程
创建工程dll工程参考 [图像处理算法打包成dll](http://blog.csdn.net/hit2015spring/article/details/52624985) 即可。

### 导入属性文件

dll工程导入之前配置好的opencv属性文件，【视图】-【属性管理器】-【导入已有属性文件】

### 封装类



### 创建测试程序

**未完，待续……**