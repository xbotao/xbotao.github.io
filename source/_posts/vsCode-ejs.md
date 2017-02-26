title: vsCode_ejs
author: lazyBoy
tags: []
categories:
  - 计算机技巧
date: 2017-02-18 17:09:00
---
>vs code本身没有对ejs文件的代码渲染，修改vs code配置文件，使其按照html格式进行渲染。

打开**C:\Program Files (x86)\Microsoft VS Code\resources\app\extensions\html\package.json**文件,
在**`languages`**最后添加`".ejs"`

<!-- more -->

```html
    "languages": [
      {
        "id": "html",
        "extensions": [
          ".html",
          ".htm",
          ".shtml",
          ".xhtml",
          ".mdoc",
          ".jsp",
          ".asp",
          ".aspx",
          ".jshtm",
          ".volt",
          ".vue",
		  ".ejs"
        ],
```

渲染效果

![paste image](http://oh1jgyw0v.bkt.clouddn.com/148740917203336mn5s46.png?imageslim)

