title: python实现爬虫下载网络文件
author: newbie
tags:
  - python
  - 爬虫
categories:
  - 编程语言
date: 2016-12-04 14:51:00
---
## 使用python分析html页面，获取文件超链接，然后将文件下载保存到本地

>系统：windows10
>python版本2.7

文件获取页面 
- [https://www.cs.toronto.edu/~vmnih/data/mass_buildings/train/sat/index.html](https://www.cs.toronto.edu/~vmnih/data/mass_buildings/train/sat/index.html)

### 实现思路：
1. 获取页面内容
2. 使用正则表达式分析页面内容,获得文件超链接
3. 使用下载模块下载每个文件

页面html内容，是由一系列的超链接组成的，非常容易得到文件url
```HTML
<a href="http://www.cs.toronto.edu/~vmnih/data/mass_buildings/train/sat//22678915_15.tiff">22678915_15.tiff</a> </br>
<a href="http://www.cs.toronto.edu/~vmnih/data/mass_buildings/train/sat//22678930_15.tiff">22678930_15.tiff</a> </br>
...
...
<a href="http://www.cs.toronto.edu/~vmnih/data/mass_buildings/train/sat//24478885_15.tiff">24478885_15.tiff</a> </br>
<a href="http://www.cs.toronto.edu/~vmnih/data/mass_buildings/train/sat//24478900_15.tiff">24478900_15.tiff</a> </br>
<a href="http://www.cs.toronto.edu/~vmnih/data/mass_buildings/train/sat//24479005_15.tiff">24479005_15.tiff</a> </br>

```

<!-- more -->

## python代码如下：
```Python
#!/usr/bin/python
import urllib,urllib2,re,os

currentDir = os.getcwd() + '/tiffs/'

# get html content
response = urllib2.urlopen("https://www.cs.toronto.edu/~vmnih/data/mass_buildings/train/sat/index.html")
strhtml = response.read()

# get tiff links, 'links' is a 'list',element in links is 'tuple'
links = re.findall('(https?://.+?tiff)">(.+?tiff)', strhtml)

# url[0] is the image link, url[1] is the image name
for url in links:
    print url[1] + " is downloading...",
    urllib.urlretrieve(url[0], currentDir + url[1])
    print " ### finished."
```

本人不懂python，以上代码是边学边写出来的，用时30min,由于文件太大，下载很慢，可以考虑修改下载方式为多线程分块下载,可以参考下方【Python实现多线程下载文件的代码实例】这篇文章修改



### 参考网络资源
- [python下载文件的三种方法](http://www.pythontab.com/html/2014/pythonjichu_0121/681.html)
- [python获取指定网页上所有超链接的方法](http://www.jb51.net/article/63483.htm)
- [python2.7爬虫学习笔记（一）---Urllib库的使用 ](http://blog.csdn.net/sirm2z/article/details/46350721)
- [Python正则表达式](http://www.runoob.com/python/python-reg-expressions.html)
- [Python实现多线程下载文件的代码实例](http://www.jb51.net/article/50554.htm)

---

## 附C#实现代码

```C#
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;

namespace demo
{
    class Program
    {

        /// <summary>  
        /// GET请求与获取结果  
        /// </summary>  
        public static string HttpGet(string Url)
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(Url);
            request.Method = "GET";
            request.ContentType = "text/html;charset=UTF-8";

            HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            Stream myResponseStream = response.GetResponseStream();
            StreamReader myStreamReader = new StreamReader(myResponseStream, Encoding.UTF8);
            string retString = myStreamReader.ReadToEnd();
            myStreamReader.Close();
            myResponseStream.Close();

            return retString;
        }


        static void Main(string[] args)
        {
            //获取页面html内容
            string strUrl = "https://www.cs.toronto.edu/~vmnih/data/mass_buildings/train/sat/index.html";
            string strhtml = HttpGet(strUrl);
            
            //使用正则表达式分析出超链接地址
            MatchCollection results = Regex.Matches(strhtml, "http(.+?)tiff");

            List<string> urlList = new List<string>();
            foreach(Match mt in results)
            {
                urlList.Add(mt.Groups[0].Value);
            }

            Console.WriteLine("共" + urlList.Count.ToString()+"个文件");

            //下载文件
            WebClient client = new WebClient();
            string receivePath = System.Environment.CurrentDirectory + "/images/";
            foreach (string strImageAddr in urlList)
            {                
                string imageName = System.IO.Path.GetFileName(strImageAddr);
                Console.Write("\"" + imageName + "\" 下载中……");

                client.DownloadFile(strImageAddr, receivePath + imageName);

                Console.WriteLine("   下载完成");
            }

            Console.WriteLine("所有文件下载文成，存储路径为：" + receivePath);
        }
    }
}

```