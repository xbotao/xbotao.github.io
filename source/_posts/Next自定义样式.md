title: '[Hexo] Next主题自定义样式'
author: lazyBoy
tags:
  - hexo
categories:
  - 教程
date: 2017-01-15 22:38:00
---
## 参考<i> Never_yu's Blog</i>添加自定义样式
<p id="div-border-top-green"><i>[博客地址](https://neveryu.github.io)
[博客源码](https://github.com/Neveryu/Blog)
</i></p>

<!-- more -->

修改next\source\css\_custom目录下的`custom.styl`文件，添加自定义内容，见文章最后

## 使用方法

### 颜色块

```JavaScript
<span id="inline-purple">这是颜色块标签</span>
```
颜色 可以设置以下几种：

<span id="inline-yellow"> yellow </span><span id="inline-green"> green </span><span id="inline-blue"> blue </span> <span id="inline-purple"> purple </span> <span id="inline-red"> red </span> 

### 文本框

```JavaScript
<p id="div-border-top-green">这是带颜色的文本框</p>
```

<p id="div-border-top-green">位置可为：left \ top \ right<br>颜色可为：<span id="inline-yellow"> yellow </span><span id="inline-green"> green </span><span id="inline-blue"> blue </span> <span id="inline-purple"> purple </span> <span id="inline-red"> red </span> </p>

### 作者信息

编辑`next\layout\_macro`目录下的 <span id="inline-yellow"> reward.swig </span> 文件

```JavaScript
<br />
<blockquote class="blockquote-center">
    本文完
</blockquote>
<p id="div-border-left-blue">
<span id="inline-green" style="border-radius:3px;">作者</span>：<a class="link-blue" href="https://github.com/xbotao" target="_blank">LazyBoy</a><br/>有问题请 <a class="link-blue" href="http://www.lazyboy.site/board/" target="_blank">留言</a> 或者 Email我: <a class="link-blue" href="mailto:upc_xbt@163.com" target="_blank">upc_xbt@163.com</a>
</p>

{% if theme.alipay or theme.wechatpay %}
...
```

效果如本文最后


---
## <span id="inline-purple">custom.styl 文件</span>

```JavaScript
// Custom styles.

//修改文章内链接文本样式
.post-body p a {
	color: #0593d3;
	border-bottom: none;
	&:hover {
		color: #0477ab;
		text-decoration: underline;
	}
}
//修改不在文章内的链接文本样式
.link-blue{
	color: #f36;
	&:hover {
		color: #f00;
	}
}
//修改文章内code样式
code {color:#fff;background:#333;}

//修改文章中图片样式，改为居中
.posts-expand .post-body img {
	margin: 0 auto;
}

// 下载样式
a#download {
	display: inline-block;
	padding: 0 10px;
	color: #000;
	background: transparent;
	border: 2px solid #000;
	border-radius: 2px;
	transition: all .5s ease;
	font-weight: bold;
	&:hover {
		background: #000;
		color: #fff;
	}
}
//阅读全文样式
.post-more-link .btn {
	position:relative;
	border: 2px solid #000;
	border-radius: 2px;
	padding: 0 10px;
	font-weight: bold;
	background: transparent;
	transition: all .5s ease;
	&:hover {
		background: #000;
		color: #eee;
	}
}
//
// 颜色块-黄
span#inline-yellow {
	display:inline;
	padding:.2em .6em .3em;
	font-size:80%;
	font-weight:bold;
	line-height:1;
	color:#fff;
	text-align:center;
	white-space:nowrap;
	vertical-align:baseline;
	border-radius:0;
	background-color: #f0ad4e;
}
// 颜色块-绿
span#inline-green {
	display:inline;
	padding:.2em .6em .3em;
	font-size:80%;
	font-weight:bold;
	line-height:1;
	color:#fff;
	text-align:center;
	white-space:nowrap;
	vertical-align:baseline;
	border-radius:0;
	background-color: #5cb85c;
}
// 颜色块-蓝
span#inline-blue {
	display:inline;
	padding:.2em .6em .3em;
	font-size:80%;
	font-weight:bold;
	line-height:1;
	color:#fff;
	text-align:center;
	white-space:nowrap;
	vertical-align:baseline;
	border-radius:0;
	background-color: #2780e3;
}
// 颜色块-紫
span#inline-purple {
	display:inline;
	padding:.2em .6em .3em;
	font-size:80%;
	font-weight:bold;
	line-height:1;
	color:#fff;
	text-align:center;
	white-space:nowrap;
	vertical-align:baseline;
	border-radius:0;
	background-color: #9954bb;
}
// 颜色块-红
span#inline-red {
	display:inline;
	padding:.2em .6em .3em;
	font-size:80%;
	font-weight:bold;
	line-height:1;
	color:#fff;
	text-align:center;
	white-space:nowrap;
	vertical-align:baseline;
	border-radius:0;
	background-color: #df3e3e;
}

// 左侧边框红色块级
p#div-border-left-red {
	display: block;
	padding: 10px;
	margin: 10px 0;
	border: 1px solid #ccc;
	border-left-width: 5px;
	border-radius: 3px;
	border-left-color: #df3e3e;
}
// 左侧边框黄色块级
p#div-border-left-yellow {
	display: block;
	padding: 10px;
	margin: 10px 0;
	border: 1px solid #ccc;
	border-left-width: 5px;
	border-radius: 3px;
	border-left-color: #f0ad4e;
}
// 左侧边框绿色块级
p#div-border-left-green {
	display: block;
	padding: 10px;
	margin: 10px 0;
	border: 1px solid #ccc;
	border-left-width: 5px;
	border-radius: 3px;
	border-left-color: #5cb85c;
}
// 左侧边框蓝色块级
p#div-border-left-blue {
	display: block;
	padding: 10px;
	margin: 10px 0;
	border: 1px solid #ccc;
	border-left-width: 5px;
	border-radius: 3px;
	border-left-color: #2780e3;
}
// 左侧边框紫色块级
p#div-border-left-purple {
	display: block;
	padding: 10px;
	margin: 10px 0;
	border: 1px solid #ccc;
	border-left-width: 5px;
	border-radius: 3px;
	border-left-color: #9954bb;
}
// 右侧边框红色块级
p#div-border-right-red {
	display: block;
	padding: 10px;
	margin: 10px 0;
	border: 1px solid #ccc;
	border-right-width: 5px;
	border-radius: 3px;
	border-right-color: #df3e3e;
}
// 右侧边框黄色块级
p#div-border-right-yellow {
	display: block;
	padding: 10px;
	margin: 10px 0;
	border: 1px solid #ccc;
	border-right-width: 5px;
	border-radius: 3px;
	border-right-color: #f0ad4e;
}
// 右侧边框绿色块级
p#div-border-right-green {
	display: block;
	padding: 10px;
	margin: 10px 0;
	border: 1px solid #ccc;
	border-right-width: 5px;
	border-radius: 3px;
	border-right-color: #5cb85c;
}
// 右侧边框蓝色块级
p#div-border-right-blue {
	display: block;
	padding: 10px;
	margin: 10px 0;
	border: 1px solid #ccc;
	border-right-width: 5px;
	border-radius: 3px;
	border-right-color: #2780e3;
}
// 右侧边框紫色块级
p#div-border-right-purple {
	display: block;
	padding: 10px;
	margin: 10px 0;
	border: 1px solid #ccc;
	border-right-width: 5px;
	border-radius: 3px;
	border-right-color: #9954bb;
}
// 上侧边框红色
p#div-border-top-red {
	display: block;
	padding: 10px;
	margin: 10px 0;
	border: 1px solid #ccc;
	border-top-width: 5px;
	border-radius: 3px;
	border-top-color: #df3e3e;
}
// 上侧边框黄色
p#div-border-top-yellow {
	display: block;
	padding: 10px;
	margin: 10px 0;
	border: 1px solid #ccc;
	border-top-width: 5px;
	border-radius: 3px;
	border-top-color: #f0ad4e;
}
// 上侧边框绿色
p#div-border-top-green {
	display: block;
	padding: 10px;
	margin: 10px 0;
	border: 1px solid #ccc;
	border-top-width: 5px;
	border-radius: 3px;
	border-top-color: #5cb85c;
}
// 上侧边框蓝色
p#div-border-top-blue {
	display: block;
	padding: 10px;
	margin: 10px 0;
	border: 1px solid #ccc;
	border-top-width: 5px;
	border-radius: 3px;
	border-top-color: #2780e3;
}
// 上侧边框紫色
p#div-border-top-purple {
	display: block;
	padding: 10px;
	margin: 10px 0;
	border: 1px solid #ccc;
	border-top-width: 5px;
	border-radius: 3px;
	border-top-color: #9954bb;
}

//动画模块
//第一篇博客中-精于心，简于形-的动画
span#yu-1 {
	display:inline;
	position:relative;
	border-top:1px solid #222;
	border-bottom:1px solid #222;
	font-size:110%;
	cursor:pointer;
	&:hover {
		background-color: #000;
		color: #fff;
		animation: animate-yu-1 3s ease-in;
	}
}
@keyframes animate-yu-1 {
	0% {
		left:-10px;
		top:0px;
	}
	10% {
		left:10px;
		top:0px;
	}
	20% {
		left:-8px;
		top:0px;
	}
	30% {
		left:8px;
		top:0px;
	}
	40% {
		left:-5px;
		top:0px;
	}
	50% {
		left:5px;
		top:0px;
	}
	60% {
		left:-3px;
		top:0px;
	}
	70% {
		left:3px;
		top:0px;
	}
	80% {
		left:-1px;
		top:0px;
	}
	90% {
		left:1px;
		top:0px;
	}
	100% {
		left:0px;
		top:0px;
	}
}
//留言页面-[最近访客]-的样式
span#yu-2 {
	display:inline;
	position:relative;
	border-top:1px solid #222;
	border-bottom:1px solid #222;
	font-size:130%;
}
```