title: matlab调用opencv
author: lazyBoy
date: 2017-03-05 10:01:13
tags:
---
<!-- matlab＆C++ 混合编程 -->

参考：

- [matlab调用opencv的函数](http://blog.csdn.net/ts_zxc/article/details/17338797)
- [matlab调用opencv](http://blog.csdn.net/yeyang911/article/details/24984717)

## 环境

在matlab下调用opencv所使用的环境如下

> 系统： windows 10
> 软件： matlab2013b + vs2010
> 开源库： mexOpencv24 +  opencv249


1. 下载mexOpencv 并解压
2. 到解压目录下 执行`>> mexopencv.make('opencv_path', 'D:\opencv\opencv249')`

C:\Users\Botao Xiao\AppData\Roaming\MathWorks\MATLAB\R2013a

不是有效的win32程序
http://blog.csdn.net/raby_gyl/article/details/52663607

- 不是有效的win32程序
	
    matlab为64位版本，opencv默认自动配置为x64，但是在环境变量中设置时，设置的为x86


