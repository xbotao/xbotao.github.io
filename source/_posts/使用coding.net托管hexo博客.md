title: 使用coding搭建hexo静态博客
author: lazyBoy
tags:
  - Hexo
categories:
  - 教程
  - ''
date: 2017-01-09 14:47:00
---
>配置环境：windows10

![paste image](http://oh1jgyw0v.bkt.clouddn.com/6cm2v4gra55orsin6nnnwjtk0q?imageslim)

<!-- more -->

## 所需软件
### windows软件
- nodej: [http://nodejs.cn/](http://nodejs.cn/)
- git: [https://git-for-windows.github.io/](https://git-for-windows.github.io/)

### hexo包
- Hexo-cli: Hexo主体安装包，原为Hexo
- hexo-deployer-git: 用于git发布博客
- hexo-admin-qiniu: Hexo admin UI 插件修改版
- hexo-git-backup: Hexo 备份插件
- hexo-neat: Hexo 博客压缩插件

### 主题
- Next: 可以选择自己喜欢的主题， [知乎上推荐的主题](https://www.zhihu.com/question/24422335)

## 安装
1. 首先安装所需软件**nodejs** 和 **git**
2. 在磁盘中，新建一个目录，用于保存自己的博客， 并右键-**Git Bash Here**
3. 输入以下指令，创建博客并预览

  ```Bash
  npm install hexo-cli -g

  # 当前目录创建博客
  hexo init .  

  # 当前目录新建文件夹并创建博客
  # hexo init my-blog

  cd . 
  # or
  # cd my-blog

  # 安装所需hexo插件包
  npm install

  # 生成静态博客
  hexo g

  # 运行本地服务器并预览
  hexo s

  # open http://localhost:4000 预览博客
  ```
4. 安装部署插件 `hexo-deployer-git`，具体使用配置**见下文**

	```Bash
    npm install hexo-deployer-git --save
    ```
5. 安装界面化管理插件`hexo-admin`，可以管理文章，写文章并具有一键发布功能，此处使用的为其自改版，可以粘贴图片直接上传到**七牛云存储**。具体使用配置**见下文**
	```Bash
    npm install hexo-admin-qiniu --save
    ```
6. 安装博客备份插件`hexo-git-backup`用于博客备份，具体使用配置**见下文**
	```Bash
    npm install hexo-git-backup
    ```
    
## 配置

### 博客基础配置

博客配置需要修改根目录下的`_config.yml`文件,基本配置如下
```
# Site
title: lazyBoy's Blog  //博客名称
subtitle: 努力完成任务是为了学点感兴趣的东西   //子标题
description:   //描述
author: lazyBoy  //作者名称
language: zh-Hans  //语言，根据主题设置标记
timezone:
avatar: http://oh1jgyw0v.bkt.clouddn.com/1_u014124220.jpg.png  //图标
```

### 修改主题
通过修改博客配置文件`_config.yml`中的以下字段修改主题
```
## Themes: https://hexo.io/themes/
theme: next
```

### hexo-admin-qiniu插件
具体使用方法参照[github.com/xbotao/hexo-amdin-qiniu](http://github.com/xbotao/hexo-amdin-qiniu)

### hexo-git-backup插件
具体使用参照[github介绍](https://github.com/coneycode/hexo-git-backup#git-backup)