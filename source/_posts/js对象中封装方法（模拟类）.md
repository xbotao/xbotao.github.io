title: js对象中封装方法（模拟类）
author: lazyBoy
tags:
  - JavaScript
categories:
  - 编程语言
date: 2016-12-18 16:48:00
---

>前端菜鸟一只，针对JavaScript的所有知识也仅限于[W3school](http://www.w3school.com.cn/js/index.asp)中能够查到的。在看代码过程中,遇到了与类很相似的代码，学习之，并做该笔记

### 相关网络资料
- [把一个Js功能块封装到一个JS对象中](http://blog.csdn.net/xixiaoming_A/article/details/43453135)
- [Javascript定义类（class）的三种方法](http://www.ruanyifeng.com/blog/2012/07/three_ways_to_define_a_javascript_class.html)
- [Javascript 面向对象编程（一）：封装](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html)

### 常见的js对象模拟类代码

```JavaScript
hmd.editor = {
  init: function (options,filepath) {
    var el = options.el,txt,me = this;
    options = $.extend({}, defaultConfig, options);
    //编辑器样式文件动态加载,用于以后增加样式选择功能
    if(options.theme != 'default'){
      $('head').append('<link href="lib/codemirror/theme/'+options.theme+'.css" rel="stylesheet" />');
    }
    ...
    }
```

通过学习，了解到这种写法叫**『极简主义法 minimalist approach』**,是由荷兰程序员Gabor de Mooij提出的。具体语法参考[Javascript定义类（class）的三种方法](http://www.ruanyifeng.com/blog/2012/07/three_ways_to_define_a_javascript_class.html)这篇文章。


