title: 在Hexo博客中嵌入视频
author: lazyBoy
tags:
  - Hexo
categories:
  - 教程
date: 2017-01-19 19:24:00
---
<p id="div-border-left-green">在hexo博客页面中嵌入优酷视频，打开一个视频之后，点击分享链接<br />**通用代码** 和 **html代码** 在md中均可实现</p>

<!-- more -->

![paste image](http://oh1jgyw0v.bkt.clouddn.com/kl5usz6kgfgrly9ld2jife?imageslim)



```HTML
<!-- 通用代码 -->
<iframe height=498 width=510 src='http://player.youku.com/embed/XMTc0OTY3MDE1Mg==' frameborder=0 'allowfullscreen'></iframe>

<!-- HTML代码 -->
<embed src='http://player.youku.com/player.php/sid/XMTc0OTY3MDE1Mg==/v.swf' allowFullScreen='true' quality='high' width='480' height='400' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed>
```

## 使用插件

https://github.com/geekplux/hexo-tag-video