---
title: MFC XP风格
date: 2016-03-25 22:16:41
tags: mfc

---

最近遇到一个问题，在win7+vs2010的环境下创建的程序，有时候是win7风格，有时候是win98风格的，但是不知道是因为什么原因造成的。

通过从网上查了一些资料，这些是由于unicode编码的问题。

在预编译头文件afxstd.h中有如下代码：
```
#ifdef _UNICODE 
#if defined _M_IX86 
#pragma comment(linker,"/manifestdependency:\"type='win32' name='Microsoft.Windows.Common-Controls' version='6.0.0.0' processorArchitecture='x86' publicKeyToken='6595b64144ccf1df' language='*'\"") 
#elif defined _M_X64 
#pragma comment(linker,"/manifestdependency:\"type='win32' name='Microsoft.Windows.Common-Controls' version='6.0.0.0' processorArchitecture='amd64' publicKeyToken='6595b64144ccf1df' language='*'\"") 
#else 
#pragma comment(linker,"/manifestdependency:\"type='win32' name='Microsoft.Windows.Common-Controls' version='6.0.0.0' processorArchitecture='*' publicKeyToken='6595b64144ccf1df' language='*'\"") 
#endif 
#endif
```

<!-- more -->

在使用了unicode编码以后就会使用不同的风格。

效果图如下所示，
### 多字节编码

![多字节编码][1]

![多字节编码效果][2]

### unicode编码效果

![unicode编码][3]

![unicode编码效果][4]


  [1]: http://7xk1z1.com1.z0.glb.clouddn.com/MFC_Style%2F1.png "1.png"
  [2]: http://7xk1z1.com1.z0.glb.clouddn.com/MFC_Style%2F2.png "2.png"
  [3]: http://7xk1z1.com1.z0.glb.clouddn.com/MFC_Style%2F3.png "3.png"
  [4]: http://7xk1z1.com1.z0.glb.clouddn.com/MFC_Style%2F4.png "4.png"
  
  

----------

除了使用unicode编码意外，还可以通过在工程中添加mainfest文件来切换风格。
在工程里下创建一个.mainfest文件，放到工程根目录下

```
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<assembly xmlns="urn:schemas-microsoft-com:asm.v1" manifestVersion="1.0">
<assemblyIdentity
 name="XP style manifest"
 processorArchitecture="x86"
 version="1.0.0.0"
 type="win32"/>
<dependency>
 <dependentAssembly>
    <assemblyIdentity
      type="win32"
      name="Microsoft.Windows.Common-Controls"
      version="6.0.0.0"
      processorArchitecture="x86"
      publicKeyToken="6595b64144ccf1df"
      language="*"
    />
 </dependentAssembly>
</dependency>
</assembly>
```

手动在资源管理文件（.rc）中添加

    1 24 “XPStyle.manifest”

“1”代表资源ID，必须是“1”。“24”代表资源类型，实际上是RT_MANIFEST。这样再编译工程就是xp风格了。



