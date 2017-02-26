title: codemirror的基本用法
author: lazyBoy
tags:
  - 前端
categories:
  - 教程
date: 2016-12-17 20:53:00
---

CodeMirror是一款在线的支持语法高亮的代码编辑器。官网： [http://codemirror.net/](http://codemirror.net/)
相关使用可以参考[官方文档](https://codemirror.net/doc/manual.html)，也可以参考[JavaScript爱好者的博客](http://www.hyjiacan.com/category/trans/codemirror-doc/)

## codemirror基本使用
我是在electron的应用中使用的codemirror，具体示例和内容如下所示

![](http://oh1jgyw0v.bkt.clouddn.com/bjqxkhh7aiu4yub7xhctttv8wi.png)

<!-- more -->

### 使用codemerror填充body
```HTML
<!doctype html>
<!-- 本例程，将codemirror作为全局编辑器使用，填充整个body -->
<html>
<head>
    <meta charset="utf-8" /> 
    <title>code mirrorDemo</title>

    <script>
        //重命名node js,并移除，后面引用jquery
        window.nodeRequire = require;
        delete window.require;
        delete window.exports;
        delete window.module;

        window.$ = window.jQuery = require('../module/jquery-3.1.1.min.js');
    </script>

    <script src="../module/codemirror/lib/codemirror.js"></script>
    <link rel="stylesheet" href="../module/codemirror/lib/codemirror.css">
    <script src="../module/codemirror/mode/javascript/javascript.js"></script>
    
</head>
<body>
    <script>
        var myCodeMirror = CodeMirror(document.body, {
            value: "function myScript(){return 100;}\n",
            mode:  "javascript"
            });
    </script>
</body>
</html>
```

### 使用codemrrior替换富文本框

```HTML
<!doctype html>
<html>
<head>
    <meta charset="utf-8" /> 
    <title>codeMirror替换富文本框</title>

    <script>
        //重命名node js,并移除，后面引用jquery
        window.nodeRequire = require;
        delete window.require;
        delete window.exports;
        delete window.module;

        window.$ = window.jQuery = require('../module/jquery-3.1.1.min.js');
    </script>

    <link rel="stylesheet" href="../css/style.css">


    <!-- cidenmirror -->
    <link rel="stylesheet" href="../module/codemirror/lib/codemirror.css">
    <link rel="stylesheet" href="../module/codemirror/theme/ambiance.css">

    <script src="../module/codemirror/lib/codemirror.js"></script>
    <script src="../module/codemirror/addon/mode/overlay.js"></script>
    <script src="../module/codemirror/addon/edit/continuelist.js"></script>
    <script src="../module/codemirror/mode/markdown/markdown.js"></script>
    <script src="../module/codemirror/mode/gfm/gfm.js"></script>
    <script src="../module/codemirror/mode/javascript/javascript.js"></script>    
    <!-- end cidenmirror -->
</head>
<body>
    <div class="editorBox">
        <textarea id="editor" class="md_editor">function myScript(){return 100;}</textarea>
    </div>
    

    <script>
        myTextArea = document.getElementById('editor');
        var myCodeMirror = CodeMirror.fromTextArea(myTextArea, {
            theme: 'ambiance',   /*主题*/
            mode: 'gfm', /*语言*/
            lineNumbers: false, /*行号*/ 
            lineWrapping: true, /*自动换行*/
            //value: "设置显示的内容",
            //lineSeparator: 'CRLF', /*指定换行符*/
            indentUnit: 4,   /*设置缩进的字符数，默认为2*/
            smartIndent: true, /*自动缩进，默认为true*/
            //tabSize: 8, /*tab字符的宽度，默认为4*/
            lineWiseCopyCut: false,  /*true时，如果当前没有选中文本，会自动选中当前行*/
            dragDrop: false,   /*是否可以被拖拽*/
            autofocus: true
        });
    </script>
</body>
</html>
```

CSS 文件为
```CSS
html, body{
    margin: 0;
    padding: 0;
    height:100%;
    overflow: hidden;
}

body{
    background-color: #1399ce;   
}

.editorBox{
    font-family: Courier New;
    font-size: 16px;
    float:left;
    width:50%;
    height:100%;    
}

.md_editor{
    width:100%;
    height:100%;
    background-color: lightyellow;
}
```


