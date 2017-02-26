title: hexo blog备份之hexo-git-back插件
author: lazyBoy
tags:
  - 教程
categories:
  - hexo
date: 2017-01-04 21:39:00
---
## 前言
> Hexo-admin完美的解决了`md`文章编辑发布的困难，界面化操作，方便快捷。下面主要解决hexo博客备份的问题。

![paste image](http://oh1jgyw0v.bkt.clouddn.com/bymzuf4dmf3n62uiect2boat6y?imageslim)

当重装电脑或者更换计算机以后，重新搭建hexo 博客非常简单，但是如何导入原先的文章呢。怎样才能对写的文章有一个比较好的备份呢？通过搜索，找到了解决方案。

<!-- more -->

## 参考文章

- 【 [自动备份Hexo博客源文件 ](http://zhujiegao.com/2015/12/06/automatic-backup/) 】讲了如何对博客进行备份，并创建自己的脚本实现
- 【[hexo-git-backup](https://github.com/coneycode/hexo-git-backup)】插件实现了`hexo b`命令提交备份数据到备份仓库
- 【[有没有办法同步 Coding 与 GitHub](https://segmentfault.com/q/1010000000172591)】给出了推送一份程序到多个仓库的解决办法，用于解决`hexo-git-backup`中的一些bug

## 问题

`hexo-git-back`插件还是有bug的，我遇到的主要有以下2个bug。

1. 设置back属性以后，如果添加备份仓库会出现不能备份到新仓库的问题
2. 更新仓库地址，不能上传，仍为以前仓库地址

针对上述问题，可以手动修改：
使用`git remote`指令修改隐藏文件夹`.git`中的`config`文件

`config`文件内容如下
```
[remote "coding"]
	url = xxxxxxxxxxxxxxxxxxxxxxxxxxx
	fetch = +refs/heads/master:refs/remotes/coding/master
[branch "master"]
	remote = coding
	merge = refs/heads/master
[remote "github"]
	url = xxxxxxxxxxxxxxxxxx
	fetch = +refs/heads/*:refs/remotes/github/*
```

操作：
1. 使用`git remote -v`查看仓库版本和地址，看是否与设置相同![paste image](http://oh1jgyw0v.bkt.clouddn.com/x2t7zc0ufuinrp4392rtrfavej)
2. 针对**问题1**，缺少远程仓库名称和地址，通过`git remote add origin git@ github:xxxxx/xxxx.git`设置
	- `origin`更换为自己的仓库名称，如**coding**、**github**……
	- `git@ github:xxxxx/xxxx.git`更换为仓库地址，也可以使用http形式地址  
3. 针对**问题2**，不能更新仓库地址，通过`git remote set-url origin git@ github.com:xxx/xxx.git`设置
	- `origin`为要修改的仓库名称
    - `git@ github.com:xxx/xxx.git`为新的仓库地址