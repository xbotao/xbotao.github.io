title: Hexo博客压缩优化
author: lazyBoy
date: 2017-01-11 11:38:14
tags:
---
>本人Hexo博客使用主题为NEXT

>不知是主题原因还是其他原因，生成的静态文件存在大量空白，在一定程度上影响了网页加载。网上寻找解决方案,可以对文件进行压缩。

### 参考文档

- [使用gulp精简hexo博客代码](http://www.5941740.cn/2016/02/19/gulp-minify-blog/)
- [Hexo-Neat介绍](https://segmentfault.com/a/1190000005799759)

<!-- more -->

## [hexo neat插件](https://github.com/Rozbo/hexo-neat#hexo-neat)
本着能偷懒则偷懒的原则，选择了使用hexo-neat插件,hexo-neat插件使用**HTMLMinifier、clean-css、UglifyJS**插件实现。

安装完成以后，打开站点配置文件，添加以下属性。启用`hexo-neat`的基础上，可以选择是否压缩HTML、CSS、Js文件，均有相应的开关选项。
```
# hexo-neat

neat_enable: true

neat_html:
  enable: true
  exclude:
  
neat_css:
  enable: true
  exclude:
    - '*.min.css'

neat_js:
  enable: true
  mangle: true
  output:
  compress:
  exclude:
    - '*.min.js'
```