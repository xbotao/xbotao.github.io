title: 计算GPS两点间的距离（米）
author: lazyBoy
tags:
  - map
categories:
  - 编程语言
date: 2017-01-04 08:32:00
---
> 在项目中，需要进行等距测量，每隔相同的距离进行仪器测试，想法是通过GPS计算两点间的距离，触发测量。
项目是在qt中实现的，网上搜索 java 以及 C# 代码，进行修改实现。

![paste image](http://oh1jgyw0v.bkt.clouddn.com/74xqrk9j7us1yy1lvdmoizimah?imageslim)

[Calculate distance, bearing and more between Latitude/Longitude points](http://www.movable-type.co.uk/scripts/latlong.html)可以根据亮点之间的GPS坐标实现距离测量

<!-- more -->

## 参考文章
- [计算GPS两点间的距离的几种算法 ](http://blog.csdn.net/zhouzheng034/article/details/47704185) 【java】
- [计算GPS两点间的距离[单位为:米]](http://m.blog.chinaunix.net/uid-20804770-id-1838078.html) 【C#】
- [GPS两点的距离](http://blog.csdn.net/chary8088/article/details/17403061) 【C++】
- [Gps测量两点之间的距离](http://blog.csdn.net/yueqinglkong/article/details/10163739) 【Java】

## C#实现

```CSharp
/// 计算地球上任意两点距离
/// 返回长度单位是米
private static double Distance(double long1, double lat1, double long2, double lat2)
{
  double a, b, R;
  R = 6378137; //地球半径
  lat1 = lat1 * Math.PI / 180.0;
  lat2 = lat2 * Math.PI / 180.0;
  a = lat1 - lat2;
  b = (long1 - long2) * Math.PI / 180.0;
  double d;
  double sa2, sb2;
  sa2 = Math.Sin(a / 2.0);
  sb2 = Math.Sin(b / 2.0);
  d = 2 * R * Math.Asin(Math.Sqrt(sa2 * sa2 + Math.Cos(lat1) * Math.Cos(lat2) * sb2 * sb2));
  return d;
}
```

## C++实现

```C++

```

## Java实现
```Java
public static void main(String[] args) {  
  
    //地球半径   
    double R=6378137.0;   
    //模拟数据  
    double lat1=109.99309;  
    double log1=39.81625;  
    double lat2=109.99456;  
    double log2= 39.81595;  
    //将角度转化为弧度  
    double radLat1=(lat1*Math.PI/180.0);  
    double radLat2=(lat2*Math.PI/180.0);  
    double radLog1=(log1*Math.PI/180.0);  
    double radLog2=(log2*Math.PI/180.0);  
    //纬度的差值  
    double a=radLat1-radLat2;  
    //经度差值  
    double b=radLog1-radLog2;  
    //弧度长度  
    double s=2*Math.asin(Math.sqrt(Math.pow(Math.sin(a/2), 2)+Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2), 2)));  
    //获取长度  
    s=s*R;  
    //返回最接近参数的 long。结果将舍入为整数：加上 1/2  
    s=Math.round(s*10000)/10000;  
    System.out.println(s);  
} 
```
结果为 164.0或者163.7m

## qt实现
```C++
//用于计算两GPS坐标点之间的距离
double MapWindow::Distance(double lon1, double lat1, double lon2, double lat2)
{
    //地球半径
    double R=6378137.0;

    //模拟数据
    lat1=109.99309;
    lon1=39.81625;
    lat2=109.99456;
    lon2= 39.81595;

    //将角度转化为弧度
    double radLat1=(lat1*M_PI/180.0);
    double radLat2=(lat2*M_PI/180.0);
    double radLog1=(lon1*M_PI/180.0);
    double radLog2=(lon2*M_PI/180.0);

    //纬度的差值
    double a=radLat1-radLat2;
    //经度差值
    double b=radLog1-radLog2;

    //弧度长度
    double s=2*qAsin(qSqrt(qPow(qSin(a/2), 2)+qCos(radLat1)*qCos(radLat2)*qPow(qSin(b/2), 2)));

    //获取长度
    s=s*R;

    //返回最接近参数的 long。结果将舍入为整数：加上 1/2
    s = qRound(s*10000)/10000;

    return s;
}
```