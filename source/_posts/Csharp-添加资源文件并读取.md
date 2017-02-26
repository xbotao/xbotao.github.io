title: Csharp 添加资源文件并读取
author: lazyBoy
tags:
  - 'C#'
categories:
  - 编程语言
date: 2016-12-14 14:36:00
---
>在使用CSharp开发是，某些时刻不想把软件所用到资源暴露给用户，此时可以将资源添加到工程中，并在编译时嵌入到工程中。

## 添加资源文件到工程

1. 在工程名称上右键，选择属性，在属性窗口中添加现有文件 ![](http://oh1jgyw0v.bkt.clouddn.com/vsjz8j9lqns1c5rcqdmva7tf8y.png)
2. 添加完成以后，在工程管理器中修改文件属性 ![](http://oh1jgyw0v.bkt.clouddn.com/hl8xauhqle91wzyv1kx7fhe6rb.png)


## 代码中使用资源文件

```C#
//baiduMapTile是名空间，bdMap.html是html文件名
Assembly assembly = Assembly.GetAssembly(GetType());
Stream myStream = assembly.GetManifestResourceStream("baiduMapTile.Resources.bdMap.html");            
StreamReader myStreamReader = new StreamReader(myStream, Encoding.UTF8);
string strhtml = myStreamReader.ReadToEnd();
```
  