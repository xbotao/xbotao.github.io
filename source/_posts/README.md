title: Newbie Markdown
tags: []
categories: []
date: 2016-11-29 22:20:00
---

# Newbie Markdown

>Newbie Markdown项目使用[electron](http://electron.atom.io/)和[node.js](https://nodejs.org/en/)编写，由于本人是一只前端小菜鸟，在编写工程中也遇到了很多问题，所以起名叫Newbie（菜鸟）MarkDown

## 想法来源
>使用Hexo基于github托管静态个人博客，但是用到的MarkDown编辑器基本都不支持图片粘贴等功能，故想要自己实现一个MarkDown编辑器实现自己的需求

## 项目开发过程
>项目开发过程将会写成文档，逐渐发布出来，网址后续将贴出来

[开源中国博客地址: https://my.oschina.net/u/3080113/blog](https://my.oschina.net/u/3080113/blog)

[CSDN博客地址: http://blog.csdn.net/upc_xbt](http://blog.csdn.net/upc_xbt)

## 项目目标
>做一款合适自己的MarkDown编辑器

<!-- more -->

### 已完成

1. 基本MarkDown语法解释

1. 编辑区粘贴图片，自动上传到静态文件托管空间（七牛云）


### 未完成

1. 保存配置信息

1. 拖拽到窗体和图标打开`.md`文件

1. 添加工具栏

1. 增加快捷键

1. 解析Latex公式和流程图

1. Latex公式界面化编辑输入

1. 导出Html和pdf文档

1. 发布md到CSDN博客系统

1. 发布博客到cnblog（博客园）

1. 访问git仓库，并自动同步`.md`文档到私人仓库

1. 自动同步笔记文件到 七牛云

1. 开发“又拍云”存储

1. 待补充……


---

## 版本

--- 0.0.03  实现粘贴图片到编辑区自动上传 七牛 2016/11/25--------------
- 监听图片粘贴事件
- 自动上传图片到七牛云存储

--- 0.0.02  实现基本菜单 2016/11/24--------------
- 创建工具栏
- 实现剪切、复制、粘贴等基本编辑功能

--- 0.0.01  初始创建 2016/11/23--------------
- 解析基本markdown语法并预览
