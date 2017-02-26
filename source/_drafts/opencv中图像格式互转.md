title: opencv中char*、IplImage、Mat格式互转
author: lazyBoy
date: 2017-01-17 16:10:10
tags:
---
<p id="div-border-left-green">在使用opencv开发算法时，遇到的图像数据格式有<span id="inline-purple">[unsigned] char*</span>,<span id="inline-blue"> IplImage</span> ,<span id="inline-yellow">Mat</span>，这几种格式之间的相互转换也就经常用到</p>

## Mat <-->IPlImage
1. 将Mat转换为IplImage

  ```C++
  //! converts header to IplImage; no data is copied
  //    operator IplImage() const;

  Mat img；
  IplImage *src；
  src=&IplImage（img）；
  ```

2. 将IplImage转换为Mat

  ```C++
  //! converts old-style IplImage to the new matrix; the data is not copied by default
  Mat(const IplImage* img, bool copyData=false);
  ```