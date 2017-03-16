title: matlab调用opencv
author: lazyBoy
tags: []
categories:
  - 计算机视觉
date: 2017-03-05 10:01:00
---
<p id="div-border-left-yellow">
在研究目标跟踪算法时，习惯了借助Opencv实现对图像的操作，拿到一个matlab的代码，怎么对它进行改进呢？
</p>

有两种方式可以实现：

1. 使用 matlab＆C++ 混合编程实现，需要自己写matlab下的mex程序
2. 利用现有库实现

对于吾等懒人来说，无需考虑，借助第三方开源库是一定的 ^-^
<!-- matlab＆C++ 混合编程 -->

<!-- more -->

---

## 开发环境

在matlab下调用opencv所使用的环境如下

> 系统： windows 10
> 软件： matlab2013b + vs2010
> 开源库： mexOpencv24 +  opencv249

## 步骤

1. 下载mexOpencv 并解压
2. 配准交叉编译环境,执行`>> mex -setup`
![paste image](http://oh1jgyw0v.bkt.clouddn.com/1489563237909997ep05p.png?imageslim)

3. 到mexOpencv解压环境下，执行进行编译`>> mexopencv.make('opencv_path', 'D:\opencv\opencv249')`（由于我已经执配置过了，所以显示的为skipped）
![paste image](http://oh1jgyw0v.bkt.clouddn.com/1489563310509zyknemsq.png?imageslim)
![paste image](http://oh1jgyw0v.bkt.clouddn.com/1489563323851k7gggvyz.png?imageslim)

4. 添加mexOpencv到matlab路径

*注:* 步骤3中，指定的路径为Opencv下的路径，会根据matlab的版本（**x86** or **x64**）自动选择，此时需要把自己设置的 x64/VC10/bin 或者 x86/VC10/bin 配置进环境变量，视自己的matlab版本而定

![paste image](http://oh1jgyw0v.bkt.clouddn.com/1489563458484zprdnnbt.png?imageslim)


** OK! 此时环境已经安装完成，可以测试一下了 **

## 测试

**换个目录，创建.m文件，并输入一下代码吧**

```matlab
im = cv.imread('d://dlrb.png');
im2 = cv.putText(im, 'dlrb', [20, 30], 'Color', [255 0 255], 'Thickness', 2);
imshow(im2);
```
胖迪 快快粗来~

![paste image](http://oh1jgyw0v.bkt.clouddn.com/1489563903345tb4nlzix.png?imageslim)

### 函数使用

不知道参数怎么给？ 试试在函数名上按下**F1**.
![paste image](http://oh1jgyw0v.bkt.clouddn.com/1489564016288pfirh3rb.png?imageslim)

## 问题

Q: 不是有效的win32程序

A：matlab为64位版本，opencv默认自动配置为x64，但是在环境变量中设置时，设置的为x86
     
---
## 参考

- [matlab调用opencv的函数](http://blog.csdn.net/ts_zxc/article/details/17338797)
- [matlab调用opencv](http://blog.csdn.net/yeyang911/article/details/24984717)