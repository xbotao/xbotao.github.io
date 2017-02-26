title: hexo-admin添加七牛
author: lazyBoy
tags:
  - hexo
categories:
  - 教程
date: 2017-01-03 20:49:00
---
>[hexo-admin](https://github.com/jaredly/hexo-admin)作为hexo的组件，提供了一个很好的post编辑管理界面，只需浏览器打开`http://localhost:4000/admin/`即可使用，编辑器本身自带图片粘贴功能。

![paste image](http://oh1jgyw0v.bkt.clouddn.com/l8p5cs38i8qx7nw4j29uti "hexo-admin with qiniu")

hexo-admin原本的图片粘贴功能，主要是保存到source/images/目录下，并在部署时同时上传到github pages，本文主要介绍如何粘贴并自定将图片上传到**七牛云**。

<!-- more -->

1.下载[hexo-admin with qiniu](https://github.com/xbotao/hexo-admin-qiniu),并覆盖到原
`hexoBlog/node_module/hexo-admin`

2.在博客根目录下安装必要组件

```Bash
cd ~/your_blog
npm install
```

3.配置七牛空间信息

参照 https://github.com/xbotao/hexo-admin 介绍进行设置，格式如下

```Bash
admin:
  qiniuCfg:
      AccessKey: 'your qiniu AK'
      SecretKey: 'your qiniu SK'
      BucketName: 'your BK Name'
      bucketHost: 'you BK Host'
```

4.open `http://localhost:4000/admin/`