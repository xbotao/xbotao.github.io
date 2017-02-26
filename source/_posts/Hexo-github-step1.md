title: 使用Hexo在github上搭建个人静态网站（一）
date: 2015-07-01 15:11:59
tags: 
- Hexo
- github

---

前几天图像想搭建一个自己的个人博客，分享一下自己在学习科研中的经验和遇到的问题。开始想要利用免费虚拟主机使用wordpress进行搭建，从同学[lbzhang](http://lbzhang.cn)那了解到还可以使用github搭建免费的个人静态博客，就了解了一下，发现这个正适合我，那就果断搞起来。

下面分享一下自己使用github搭建Newbie博客的过程：

<!-- more -->

## 一、首先申请一个github账号 ##

> GitHub可以托管各种git库，并提供一个web界面，但与其它像 SourceForge或Google Code这样的服务不同，GitHub的独特卖点在于从另外一个项目进行分支的简易性。为一个项目贡献代码非常简单：首先点击项目站点的“fork”的按钮，然后将代码检出并将修改加入到刚才分出的代码库中，最后通过内建的“pull request”机制向项目负责人申请代码合并。已经有人将GitHub称为代码玩家的MySpace。

前往[github官网](https://github.com/)，注册一个自己的github账号，大家可以把自己的代码以及开源工程在github上共享，让更多跟你相同兴趣的人共同来完善。

GitHub Pages本用于介绍托管在GitHub的项目， 不过，由于他的空间免费稳定，用来做搭建一个博客再好不过了，所以**我们需要建立yourname.github.io来创建自己的博客**如下图所示：

![](http://7xk1z1.com1.z0.glb.clouddn.com/newbie-bt/step1搭建博客（一）1.PNG)

> 点击New repository

![](http://7xk1z1.com1.z0.glb.clouddn.com/newbie-bt/step1搭建博客（一）2.PNG)

> 此处输入yourname.github.io，yourname必须和你的github名称相同

![](http://7xk1z1.com1.z0.glb.clouddn.com/newbie-bt/step1搭建博客（一）3.PNG)

> 这样我们就有了搭建自己博客的一个空间 yourname.github.io，等待博客搭建完成以后，在浏览器输入yourname.github.io就可以访问自己的博客了。


## 二、安装准备软件 ##

依次安装以下2个软件：

1. **Node.js** : [http://nodejs.org/](http://nodejs.org/)
2. **Git** : [http://git-scm.com/](http://git-scm.com/)

安装完成之后，可以在开始菜单和右键中找到**Git Bash**菜单，那么我们如何把本地git项目和github建立连接呢？这就需要配置SSH Keys

## 三、配置SSH keys ##

#### 检查SSH keys的设置 ####

首先我们需要检查你电脑上现有的ssh key：

    $ cd ~/. ssh #检查本机的ssh密钥

如果提示：No such file or directory 说明你是第一次使用git。

#### 生成新的SSH Key ####
 
    $ ssh-keygen -t rsa -C "邮件地址@youremail.com"
    Generating public/private rsa key pair.
    Enter file in which to save the key (/Users/your_user_directory/.ssh/id_rsa):<回车就好>


***注意1***: 此处的邮箱地址，你可以输入自己的邮箱地址；

***注意2***: 此处的「-C」的是大写的「C」然后系统会要你输入密码：

    Enter passphrase (empty for no passphrase):<输入加密串>
    Enter same passphrase again:<再次输入加密串>

在回车中会提示你输入一个密码，这个密码会在你提交项目时使用，如果为空的话提交项目时则不用输入。这个设置是防止别人往你的项目里提交内容。

注意：输入密码的时候没有*字样的，你直接输入就可以了。
最后看到这样的界面，就成功设置ssh key了。

![](http://7xk1z1.com1.z0.glb.clouddn.com/newbie-bt/step14.png)


## 四、添加SSH Key到GitHub ##

在本机设置SSH Key之后，需要添加到GitHub上，以完成SSH链接的设置。

> 1、 打开本地C:\Users\你的用户名\.ssh\id_rsa.pub文件。此文件里面内容为刚才生成人密钥。如果看不到这个文件，你需要设置显示隐藏文件。准确的复制这个文件的内容，才能保证设置的成功。
> 
2、 登陆github系统。点击右上角的 yourname-->Settings—->SSH Public keys —-add another public keys

![](http://7xk1z1.com1.z0.glb.clouddn.com/newbie-bt/step15.PNG)
![](http://7xk1z1.com1.z0.glb.clouddn.com/newbie-bt/step16.PNG)

> 3、把你本地生成的密钥复制到里面（key文本框中）， 点击 add key 就ok了

![](http://7xk1z1.com1.z0.glb.clouddn.com/newbie-bt/step18.PNG)

## 五、测试 ##

可以输入下面的命令，看看设置是否成功，git@github.com的部分不要修改：

    $ ssh -T git@github.com

如果是下面的反馈：

> The authenticity of host 'github.com (207.97.227.239)' can't be established.
RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
Are you sure you want to continue connecting (yes/no)?

不要紧张，输入yes就好，然后会看到：

> Hi newbie-bt! You've successfully authenticated, but GitHub does not provide shell access.

#### 设置用户信息 ####

现在你已经可以通过SSH链接到GitHub了，还有一些个人信息需要完善的。

Git会根据用户的名字和邮箱来记录提交。GitHub也是用这些信息来做权限的处理，输入下面的代码进行个人信息的设置，把名称和邮箱替换成你自己的，名字必须是你的真名，而不是GitHub的昵称。

	$ git config --global user.name "newbie-bt"//用户名
	$ git config --global user.email  "newbie-bt@163.com"//填写自己的邮箱

SSH Key配置成功,本机已成功连接到github。

至此，github仓库和本地环境已经准备完成，下一篇介绍怎样用Hexo来创建自己的博客。



***

*相关资料参考网络上关于怎样使用github和hexo搭建自己的个人博客的介绍。*