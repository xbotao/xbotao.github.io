title: MarkdownPad2 在win10下不能预览的解决方法
date: 2015-12-08 8:38
tags: MarkDown

---

##  ##MarkdownPad2 在win10下不能预览的解决方法

[MarkdownPad2](http://markdownpad.com/)官方下载主页上表明了Free版本只能针对win8以及win8以前的版本，而针对win8.1和win10会出现无法预览的情况。

![下载](http://7xk1z1.com1.z0.glb.clouddn.com/Markdown/markdown_Download.png)

![](http://7xk1z1.com1.z0.glb.clouddn.com/Markdown/win10markpad.png)

针对这种不能预览的情况，官方给出了解决方案，

<!-- more -->


> LivePreview is not working - it displays an error message stating This view has crashed!This issue has been specifically observed in Windows 8. You may see an error message as shown here, and no HTML will be rendered when you type in the Markdown Editor pane.To fix this issue, please try installing the [Awesomium 1.6.6 SDK](http://markdownpad.com/download/awesomium_v1.6.6_sdk_win.exe).If you continue to experience issues, please install [Microsoft's DirectX End-User Runtimes (June 2010)](http://www.microsoft.com/en-us/download/details.aspx?id=8109)

根据官方给出的解决方案，win10下需要安装[Awesomium 1.6.6 SDK](http://markdownpad.com/download/awesomium_v1.6.6_sdk_win.exe)来解决，如果仍不能预览，则需要安装[Microsoft's DirectX End-User Runtimes (June 2010)](http://www.microsoft.com/en-us/download/details.aspx?id=8109)

实际操作中，只需要安装**Awesomium 1.6.6 SDK**就可完美解决改问题。