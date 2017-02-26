title: hexo-admin插件使用
author: lazyboy
tags: []
categories:
  - 前端
date: 2016-12-03 15:49:00
---
## hexo主页
[https://github.com/hexojs/hexo](https://github.com/hexojs/hexo)

## hexo-admin插件
>hexo-admin是可以可视化操作hexo的插件，无需单独的markdown编辑器，可以实现在浏览器中编辑，新建等功能,
地址为[https://github.com/jaredly/hexo-admin](https://github.com/jaredly/hexo-admin)

# 使用方法
 
### 1. Setup hexo & create a blog
```Bash
npm install -g hexo
cd ~/
hexo init my-blog
cd my-blog
npm install
```

### 2. Install the admin & start things up

```Bash
npm install --save hexo-admin
hexo server -d
open http://localhost:4000/admin/
```

# 设置deploy

create deploy-script in project dir:
```Bash
$ touch hexo-deploy.sh; chmod a+x hexo-deploy.sh
```

with such 2 lines for example or any custom code:

```
#!/usr/bin/env sh
hexo deploy
```

and edit _config.yml:

```
admin:
  deployCommand: './hexo-deploy.sh'
```

参照
- [https://github.com/vladpurga/hexo-admin-deploy-command](https://github.com/vladpurga/hexo-admin-deploy-command)