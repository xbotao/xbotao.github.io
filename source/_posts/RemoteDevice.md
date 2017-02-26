title: 使用VS2010调用visa程控设备
tags:
  - 程控
  - visa
  - vs2010
date: 2015-07-20 15:57:09
---
最近项目中用到了对设备的程控，但是菜鸟一个，什么SCPI指令啊，visa什么的，都不懂，还好有万能的互联网，此处进行以下总结……

### 环境配置
```
 系 统 ：win8.1 with update
开发环境： VS2010
编程语言： C++
```
<!--more-->

### 相关知识
**SCPI指令**
>Standard Commands for Programmable Instruments的缩写，即程控仪器（可编程仪器）标准命令集。SCPI 是一种建立在现有标准IEEE488.1 和 IEEE 488．2 基础上，并遵循了IEEE754 标准中浮点运算规则、ISO646 信息交换7 位编码符号（相当于ASCll编程）等多种标准的标准化仪器编程语言。它采用一套树状分层结构的命令集，提出了一个具有普遍性的通用仪器模型，采用面向信号的测量；它的助记符产生规则简单、明确，且易于记忆。

**VISA编程接口**
>NI-VISA(Virtual Instrument Software Architec-ture，以下简称为“VISA”)是美国国家仪器NI(NationalInstrument)公司开发的一种用来与各种仪器总线进行通信的高级应用编程接口。VISA总线I/O软件是一个综合软件包，不受平台、总线和环境的限制，可用来对USB、GPIB、串口、VXI、PXI和以太网系统进行配置、编程和调试。VISA是虚拟仪器系统I/ O接口软件。基于自底向上结构模型的VISA创造了一个统一形式的I/ O控制函数集。一方面，对初学者或是简单任务的设计者来说，VISA提供了简单易用的控制函数集，在应用形式上相当简单；另一方面,对复杂系统的组建者来说，VISA提供了非常强大的仪器控制功能与资源管理。

### 如何在VS2010中使用visa库

一、首先在计算机上安装NI提供的驱动库，然后在计算机上找到相应的库文件和头文件

>文件目录：C:\Program Files (x86)\IVI Foundation\VISA\WinNT
其中lib文件在： lib\msc\visa32.lib 和ivi.lib
头文件在： include

二、添加库到工程
博主是直接将库文件和对应的头文件复制到了工程目录下，然后在工程中添加了对lib库的引用，vs2010中引用visa库操作如下，

>**1 菜单**  项目---> 属性--->配置属性-->链接器---->输入---附加依赖项,  加入库名,如: visa32.lib;
>或是在cpp源文件中用代码#pragma comment(lib,"visa32.lib")代替. 此时再编译会提示错误:fatal error LNK1104: 无法打开文件“my_API.lib” ,  原因应该是编译器不知道去哪里找我们的这个库,下面就来解决
>
>**2 然后给项目添加库文件路径,添加附加库路径:**
>"项目--->属性--->配置属性--->连接器-->常规-->附加库目录" 点右边的向下箭头,这里添加 我们的库所在的路径. F:\my_program\meiyong\PPPP_Decode_ETIM;或 ../../PPPP_Decode_ETIM,  而且经试验测试是以项目文件.vcxproj 所在目录为当前目录,当前以当前目录这个方式设置更好了.这样就好了.
 
三、在工程中使用visa库
下面的代码中是在VS2010中通过调用visa库发送`*IDN?`来查询仪器的ID
```C++
#include "visa/include/visa.h"
#include "visa/include/ivi.h"

#pragma comment(lib,"visa32.lib")
#pragma comment(lib,"ivi.lib")

/*----------------------------------------------------------------------------*/
/* 宏定义声明                                                                 */
/*----------------------------------------------------------------------------*/
#define MAX_SCPI_LENGTH                 255                         // 最大的SCPI命令 
#define DEFAULT_TIMEOUT                 5000                    // 超时:5000ms   

int main(void)
{
	ViStatus nReturnStatus = 0;                         // 保存返回数值
	ViSession rmSession = 0,pnInstrHandle;
	ViUInt32 retCnt = 0;
	ViByte wrtBuf[MAX_SCPI_LENGTH];                     // 写缓冲区
	ViByte rdBuf[MAX_SCPI_LENGTH];                      // 读缓冲区
	int Return_Count;

	nReturnStatus = viOpenDefaultRM (&rmSession);
	nReturnStatus = viOpen (rmSession, "TCPIP0::172.141.114.6::5001::SOCKET", VI_NULL, VI_NULL, &pnInstrHandle);

	/*- Configure VISA Formatted I/O ----------------------------------------*/
	nReturnStatus = viSetAttribute (pnInstrHandle, VI_ATTR_TMO_VALUE, DEFAULT_TIMEOUT);        // 设置超时
	nReturnStatus = viSetAttribute (pnInstrHandle, VI_ATTR_SUPPRESS_END_EN, VI_FALSE);        // 不发送终止符
	nReturnStatus = viSetAttribute (pnInstrHandle, VI_ATTR_SEND_END_EN, VI_FALSE);        // 不接收终止符

	nReturnStatus = viQueryf (pnInstrHandle, "*IDN?\n", "%s", rdBuf);
	viClose (pnInstrHandle);
	viClose (rmSession);    

	return 0;
}
```

***
博主github托管的静态博客：newbie-bt.com