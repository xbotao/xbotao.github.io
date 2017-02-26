title: hexo-admin-qiniu增加图片瘦身
author: lazyBoy
tags:
  - hexo
categories:
  - 教程
date: 2017-01-13 19:43:00
---
<p id="div-border-top-yellow">七牛云提供了<span id="inline-blue">图片瘦身</span>功能，可以在不改变图片尺寸和分辨率的情况下，压缩图片，当前仅支持`.jpg`和`.png`格式的图片。
[测试地址](https://portal.qiniu.com/dora/fop/imageslim)

![paste image](http://oh1jgyw0v.bkt.clouddn.com/hktep7pibs90r5bsrje6f?imageslim "图片瘦身")</p>


<!-- more -->

为了对Hexo博客进行加速，在`hexo-admin-qiniu`插件中也增加了该功能。

### 使用方法

在站点配置文件`_config.yml`中添加**imageslim**开关选项

```
admin:
  qiniuCfg:
      imageslim: true  # 启动图片瘦身，仅华东区bucket可以使用
      AccessKey: 'your qiniu AK'
      SecretKey: 'your qiniu SK'
      BucketName: 'your BK Name'
      bucketHost: 'you BK Host'
```

开启以后，在 **hexo-admin-qiniu** 中粘贴图片即可，在图片链接最后会自动添加 ***?imageslim*** `![paste image](http://oh1jgyw0v.bkt.clouddn.com/hktep7pibs90r5bsrje6f?imageslim)`

---
*注*: 粘贴图片不一定要截图粘贴，如果是计算机上的图片文件，可以复制，然后在编辑器中粘贴