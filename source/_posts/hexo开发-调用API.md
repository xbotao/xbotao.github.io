title: hexo开发--调用API
author: lazyBoy
date: 2016-12-07 08:51:18
tags:
---
想要在一个项目中调用Hexo，可以使用界面化设计Hexo静态博客生成，部署，预览等。

- [Hexo github地址](https://github.com/hexojs/hexo)
- [Hexo API](https://hexo.io/zh-cn/api/index.html)

![](http://oh1jgyw0v.bkt.clouddn.com/rpzdpbdsleopqxayu59pyx5stt.png)

操作步骤：
1. 创建node.js工程
2. `npm install hexo --save-dev`添加依赖项到工程
3. node.js中调用hexo，加载文件并生成
4. 预览

<!-- more -->

---
### 目录组织结构
![](http://oh1jgyw0v.bkt.clouddn.com/khodb3l434n29iruy9l8q1tgfo.png)

- **package.json** 工程配置文件
- ** app/index.js** 工程入口文件
- **blogs/**  Hexo博客目录，此路径下已执行Hexo Init命令

### 安装hexo
工程主路径`npm install hexo --save-dev`

### 调用hexo API
初始代码为
```JavaScript
//此为错误代码
var Hexo = require('hexo');
var blogsPath = process.cwd() + '/blogs/';

var hexo = new Hexo(blogsPath, {debug: true});
```
结果不能生成css以及js等文件，使用debug调试模式，发现在这种方式下下是因为调用目录不正确造成的。

在开发人员的帮助下，解决了该问题。 [Hexo load API 问题](https://github.com/hexojs/hexo/issues/2294#issuecomment-265166340)


修改后的 node.js 代码如下

#### 最终代码
```JavaScript
var Hexo = require('hexo');
var p = require('path');
var blogsPath = p.join(process.cwd(), 'blogs');

var hexo = new Hexo(blogsPath, {debug: true});

hexo.init().then(function(){
  console.log('has init hexo module! @' + blogsPath);
  hexo.load().then(function(){
    console.log('has laod files! @' + blogsPath);
    hexo.call('generate', {}).then(function(){
      hexo.call('server', {}).then(function(){
        win.loadURL('http://localhost:4000/');
        //return hexo.exit();
      });
    });
  });
});
```
#### 调试输出

![](http://oh1jgyw0v.bkt.clouddn.com/eutbcsvphdc59d65wgx3zr64oy.png)





