title: c++/vs 开发技巧
author: lazyBoy
tags: []
categories: []
date: 2017-02-21 09:13:00
---
> 在使用c++/MFC进行开发的过程中，总会遇到这样或那样的问题。将遇到的问题记录下来，发布到博客中，防止忘记

<!-- more -->

## dll开发

Q: 在开发dll过程中，由于需要一边开发一边测试，每次dll程序中修改**.h**文件以后都需去测试工程中修改，非常不方便。

A:
1. 头文件添加宏定义判断，在dll工程中设置宏定义

  [工程] - [属性] - [C/C++] - [预处理器] - [定义与处理器] - [添加 _DLL_EXPORT]

  ```
  #ifdef _DLL_EXPORT
  #define DLL_API __declspec(dllexport)
  #else
  #define DLL_API __declspec(dllimport)
  #endif // _DLL_EXPORT
  ```
  
2. 测试工程，导入dll中头文件，然后#include 直接用

## char* 长度获取

<p id="div-border-left-blue"  style="width:90%;">针对`char* pChar`类型的字符串，不能使用`sizeof(pChar)`获取其长度，应如何获得字符串长度?</p>

<p id="div-border-right-green"  style="width:90%;margin-left:8%">`sizeof(pChar)`得到的是指针长度,结果为4 <br /> 要获取char *字符串的长度，应使用`strlen(pChar)`</p>























