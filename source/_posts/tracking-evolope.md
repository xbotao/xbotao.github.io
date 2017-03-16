title: 跟踪算法评估方式
author: lazyBoy
tags:
  - 目标跟踪
categories:
  - 计算机视觉
date: 2017-03-13 15:56:00
---
<!--

运动目标跟踪（十八）--阶段性总结 - 工作笔记 - 博客频道 - CSDN.NET
http://blog.csdn.net/app_12062011/article/details/52247476 -->

<p id= "div-border-left-yellow">研究生阶段的课题是Tracking相关的内容，之前虽然也有看过相关的论文，但是一直没有关心过目标跟踪效果的评价标准。
<br />
<b>我的认知：</b> 那个算法跟踪的时间长，那个算法效果就好。但是需要自己写论文才知道，需要使用定量的标准来评价。</p>

<!-- more -->

## 定量评价标准OPE(one-pass evaluation)

![paste image](http://oh1jgyw0v.bkt.clouddn.com/14896452708394e868jju.png?imageslim "定量分析曲线")

对于目标跟踪效果的评价一般使用<span id="inline-blue">准确度</span>(Precision Plot)和<span id="inline-green">成功率</span>(Success Plot)曲线进行评估。

### Precision Plot

<span id="inline-blue">准确度</span>定义为：跟踪算法估计的目标位置**(bounding box)**的中心点与人工标注**（ground-truth）**的中心点，这两者的距离小于给定阈值的视频帧的百分比。使用不同的阈值，得到的百分比不同。这样，使用阈值作为横坐标，百分比作为纵坐标，就可以得到一条曲线。（定量分析曲线中左侧曲线），一般阈值取20.

$$ err= \frac{\sum_{i=1}^{N}\sqrt{\left ( x_{it}- x_{ig}\right )^{2}+\left ( y_{it}- y_{ig}\right )^{2}}}{N} $$

>比如一个视频有101帧，追踪算法预测的bounding box中心点与ground-truth中心点距离小于20像素有60帧，其余40帧两者距离均大于20个像素，则当阈值为20像素时，精度为0.6。

### Success Plot

**重合率得分**(overlap score, OS): 跟踪算法得到的bouding box 记为 $ a $ 与ground-truth给出的box， 记为 $ b $， 则定义重合率OS为$ OS=\frac{\left | a\bigcap b \right |}{\left | a\bigcup b \right |} $。$\left | \bullet \right |$表示区域的像素数目。

<span id="inline-green">成功率</span>定义为：当某一帧的OS大于设定的阈值时，则该帧被视为成功的（Success），总的成功的帧占所有帧的百分比即为成功率（Success rate）。OS的取值范围为0~1，因此可以绘制出一条曲线（定量分析曲线中右侧曲线），一般阈值设定为0.5。

### 总结
以上两种常见的评估方式一般都是用ground-truth中目标的位置初始化第一帧，然后运行跟踪算法得到平均精度和成功率。这种方法被称为**one-pass evaluation (OPE)**。

这种方法有2个缺点。
- 一是一个跟踪算法可能对第一帧给定的初始位置比较敏感，在不同位置或者帧初始会造成比较大的影响。
- 二是大多数算法遇到跟踪失败后没有重新初始化的机制。

---

## 鲁棒性评估

通过从**时间**（temporally，从不同帧起始）和**空间**（spatially，不同的bounding box）上打乱，然后进行评估。可以分为：temporal robustness evaluation (**TRE**) 和 spatial robustness evaluation (**SRE**)。

### TRE (temporal robustness evaluation)

在一个图片/视频序列中，每个跟踪算法从不同的帧作为起始进行追踪（比如分别从第一帧开始进行跟踪，从第十帧开始进行跟踪，从第二十帧开始进行跟踪等），初始化采用的bounding box即为对应帧标注的ground-truth。最后对这些结果取平均值，得到**TRE score**。

### SRE (Spatial robustness evaluation)

由于有些算法对初始化时给定的bounding box比较敏感，而目前测评用的ground-truth都是人工标注的，因此可能会对某些跟踪算法产生影响。因此为了评估这些跟踪算法是否**对初始化敏感**，作者通过将ground-truth轻微的平移和尺度的扩大与缩小来产生bounding box。平移的大小为目标物体大小的10%，尺度变化范围为ground-truth的80%到120%，每10%依次增加。最后取这些结果的平均值作为**SRE score**。

### OPER (One-pass evaluation with restart)

在跟踪期间，如果跟踪失败，那么就在下一帧重新初始化然后再跟踪，其余与OPE一样。

### SRER (Spatial robustness evaluation with restart)

在跟踪期间，如果跟踪失败，那么就在下一帧重新初始化然后再跟踪，其余与SRE一样。



![paste image](http://oh1jgyw0v.bkt.clouddn.com/1489665056199my9ytwlr.png?imageslim "在每一帧图像中，绿色框代表ground-truth,其他颜色框代表跟踪结果")

---

## 参考
- [Online Object Tracking Benchmark (OOTB) 目标跟踪系统评估方式](http://blog.csdn.net/hjl240/article/details/52453030)