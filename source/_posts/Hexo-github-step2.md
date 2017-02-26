title: 使用Hexo在github上搭建个人静态网站（二）
date: 2015-07-04 15:32:15
tags:
- Hexo
- github

---

在上一篇，newbie已经把准备工作怎么做写完了，当然也写了一些废话，今天趁机把剩下的部分也完成。

## 安装Hexo

打开git命令行，在其中输入如下指令：

	$ npm install -g hexo

<!-- more -->

在计算机硬盘的任意位置建立Hexo目录，然后在该目录下`右键-->Git Bash`或者直接打开Git Bash,然后私用cd指令切换到该目录

	$ hexo init

Hexo随后会自动在目标文件夹建立网站所需要的所有文件，这是一定不要忘了按照提示运行

	$ npm install

现在我们已经搭建起本地的hexo博客了，执行以下命令(在H:\hexo)，然后到浏览器输入`localhost:4000`看看,这是可以看到我们的博客已经可以正常运行了。

	$ hexo g  #生成静态博客所需的文件
	$ hexo s  #启动本地服务器，方便使用localhost查看

当前我们创建起来的博客还只是能够在本地运行，下面需要进行部署，让其在同步到github，然后使用`newbie-bt.github.io`进行访问。

部署到Github前需要配置_config.yml（Hexo根目录）文件，首先找到下面的内容，

	# Deployment
	## Docs: http://hexo.io/docs/deployment.html
	deploy:
  	type:
  	repository:

然后修改为：

	# Deployment
	## Docs: http://hexo.io/docs/deployment.html
	deploy:
  	type: git
  	repository: https://github.com/xbotao/newbie-bt.github.io.git
  	branch: master

其中，repository可以通过在github建立的仓库下获得，如下图所示：

![](http://7xk1z1.com1.z0.glb.clouddn.com/newbie-bt/step2/getAddr.PNG)

这样就完成了相关设置，然后在git中执行下面的指令就可以部署到github上了，在浏览器中输入`yourname.github.io`就可以进行访问了，都一次成功部署时间比较长，请耐心等待10分钟，后面就比较快了。

	$ hexo g
	$ hexo d


在此过程中会要求输入用户名和密码，为你的github的和密码,成功执行以后，应该得到下面的结果,

![](http://7xk1z1.com1.z0.glb.clouddn.com/newbie-bt/step2/dresult.PNG)

到此，利用github搭建自己的个人博客就完成了，下面介绍一下怎么**写文章**和**更换主题**以及相关配置。

## 更换主题

去网上搜索自己喜欢的hexo主题，此处我用的是Litten的Yilia主题，相关主题设置请参考其文章

Hexo主题Yilia : http://litten.github.io/2014/08/31/hexo-theme-yilia/

## 开始写文章

在hexo根目录下执行，这样会在\Hexo\source\_posts目录下生成对应的md文件，打开md文件进行使用markdown语法进行编辑即可。

	$ hexo n "My New Post"

文章头建议按照以下标准填写

>title: postName #文章页面上的显示名称，可以任意修改，不会出现在URL中
date: 2013-12-02 15:30:16 #文章生成时间，一般不改，当然也可以任意修改
tags: [tag1,tag2,tag3] #文章标签，可空，多标签请用格式，注意:后面有个空格
>
---
下面为正文

### Hexo指令

**Hexo命令**
常用命令：
hexo new "postName" #新建文章
hexo new page "pageName" #新建页面
hexo generate #生成静态页面至public目录
hexo server #开启预览访问端口（默认端口4000，'ctrl + c'关闭server）
hexo deploy #将.deploy目录部署到GitHub

**常用复合命令：**
hexo d -g #生成加部署
hexo s -g #预览加部署

**简写：**
hexo n ： hexo new
hexo g ： hexo generate
hexo s ： hexo server
hexo d ： hexo deploy

***
下一篇介绍怎样购买自己的域名并和自己的博客绑定。