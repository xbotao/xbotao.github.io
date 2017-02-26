title: 使用opencv staticlib静态库
author: lazyBoy
tags:
  - opencv
categories:
  - 教程
  - 图像处理
date: 2016-12-12 23:00:00
---
>opencv提供的库文件目录下有三个路径`bin`、`lib`和`staticlib`，其中前两个库是在动态库使用时调用的，后面一个是使用静态库的形式调用，这样，在发布应用时就可以不额外添加opencv的库文件实现了

## 目的
调用opencv静态库staticlib实现应用脱离opencv配置

## 环境配置
- win10 + vs2013
- opencv249

## 参考
- [Opencv 2.4.6 +VS2010 MFC + StaticLib使用问题](http://blog.csdn.net/neo_zhang_2010/article/details/12321641)
- [VC 运行时库 /MD、/MDd 和 /MT、/MTd](http://blog.csdn.net/leepwang/article/details/8539414)


## 配置过程

在vs2010以上版本中，可以使用属性管理器新建属性页来管理工程属性，这样以后在新建相同配置的工程时，只需要将“属性配置文件”导入到新的工程中即可。
 ---
#### 库文件名挨个复制太麻烦？ 试试我的自制小工具  
 [文件名快速提取工具](http://download.csdn.net/detail/upc_xbt/9711967)，可以匹配"d.lib"，方便快捷
 
---

### Debug模式

1. 新建win32控制台应用程序
2. 新建属性页 opencv249_vc12_x86_static_debug
3. 编辑属性页面
   - 【VC++目录】--【包含目录】  D:\opencv\opencv2.4.9\include
   -  【VC++目录】--【库目录】  D:\opencv\opencv2.4.9\x86\vc12\staticlib
   -  ![](http://oh1jgyw0v.bkt.clouddn.com/fw0alkg69aawnxf3wu004z02g9.png)
4. 添加依赖库名称【链接器】--【输入】--【附加依赖项】
   (1) 非opencv库（必须）
	```BASH
  vfw32.lib
  comctl32.lib
	```

   (2) OPENCV库（可以选择需要的）
	
	```BASH
  IlmImfd.lib
  libjasperd.lib
  libjpegd.lib
  libpngd.lib
  libtiffd.lib
  opencv_calib3d249d.lib
  opencv_contrib249d.lib
  opencv_core249d.lib
  opencv_features2d249d.lib
  opencv_flann249d.lib
  opencv_gpu249d.lib
  opencv_highgui249d.lib
  opencv_imgproc249d.lib
  opencv_legacy249d.lib
  opencv_ml249d.lib
  opencv_nonfree249d.lib
  opencv_objdetect249d.lib
  opencv_ocl249d.lib
  opencv_photo249d.lib
  opencv_stitching249d.lib
  opencv_superres249d.lib
  opencv_ts249d.lib
  opencv_video249d.lib
  opencv_videostab249d.lib
  zlibd.lib
	```
5. 设置运行库【C/C++】--【代码生成】--【运行库】--“多线程调试/MTD”（具体每种的含义，参考[链接2](http://blog.csdn.net/leepwang/article/details/8539414)）



