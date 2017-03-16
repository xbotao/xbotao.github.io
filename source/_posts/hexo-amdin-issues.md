title: hexo-amdin issues
author: lazyBoy
tags:
  - hexo
categories:
  - 教程
date: 2017-01-03 12:01:00
---
>hexo-admin的开发者是在linux上使用的，在windows下使用会遇到一些问题，需要进行一定的修改，记录一下当前遇到的问题。

![paste image](http://oh1jgyw0v.bkt.clouddn.com/s1cros1rt0tlezgjly0vl  "Hexo admin")

<!-- more -->

## code preview

在插入代码时，如果代码中间出现空行，预览界面会出现空行出现在最后面的情况。具体查看[#95](https://github.com/jaredly/hexo-admin/issues/95)

修改方法

go to `hexo-admin` and add the following css to `www/css/screen.css`

```
pre .line {
  height: 20px
}
```


## deploy issue

在使用hexo-admin的deploy功能时，需要进行一定的设置，但是在 [#70](https://github.com/jaredly/hexo-admin/issues/70) 中给出的为linux下的解决方案，在windows下并不适用，原因是windows下不能调用shebangs

通过查阅相关资料，对`deploy.js`进行了修改，使其适应linux和windows，并且使用过程无需 [#70](https://github.com/jaredly/hexo-admin/issues/70) 中所讲到的繁琐配置,修改参考 [deploy.js#L16](https://github.com/xbotao/hexo-admin/blob/master/deploy.js#L16)

```JavaScript
  done = once(done);
  //var proc = spawn(command, [message], {detached: true});
  var proc = spawn((process.platform === "win32" ? "hexo.cmd":"hexo"), ['d', '-g'], {detached: true});

```

## `hexo d` 提交警告
在使用`hexo d`提交代码时会遇到
```Bash
warning: LF will be replaced by CRLF   
fatal: CRLF would be replaced by LF  
```

此时可以通过修改git配置来解决这个问题,将`autocrlf`修改为`false`即可

```Bash
#备注可以使用--global 也可以不实用，影响不大  
git config --global core.autocrlf true #这个是转换，也是默认值  
git config --global core.autocrlf input #貌似是上库转换，从库中迁出代码不转换  
git config --global core.autocrlf false  #这个一般是window上的，不转换  
```

##
 优化 http://www.jianshu.com/p/6c1196f12302
 
## 公式显示问题

[如何处理Hexo和MathJax的兼容问题](http://2wildkids.com/2016/10/06/%E5%A6%82%E4%BD%95%E5%A4%84%E7%90%86Hexo%E5%92%8CMathJax%E7%9A%84%E5%85%BC%E5%AE%B9%E9%97%AE%E9%A2%98/)
