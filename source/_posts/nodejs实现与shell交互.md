title: nodejs实现与shell交互
author: newbie
tags:
  - nodejs
categories:
  - 编程语言
date: 2016-12-03 20:08:00
---
>参考[Node.js进程通信模块child_process](http://blog.fens.me/nodejs-child-process/)实现node.js与系统shell之间的交互

```JavaScript
var exec = require('child_process').exec,
    Nodecmd = exec('node -v');

Nodecmd.stdout.on('data', function (data) {
    console.log('标准输出：' + data);
});

Nodecmd.on('exit', function (code) {
    console.log('子进程已关闭，代码：' + code);
});
```

输出结果为：
```Bash
E:\WorkSpace\webProject\nodeWs\childprocess>node test.js
标准输出：v6.2.0

子进程已关闭，代码：0
```