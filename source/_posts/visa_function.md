title: Visa指令简介
date: 2015-07-20 16:37:09
tags: 
- 程控
- visa
- SCPI

---
## VISA操作表 ##

操作表：

**1、VISA资源模板：**

> viClose（vi）：关闭特定的对话通道。
> viGetAttribute（vi，attribute，attrState）：获取资源属性状态值。
> viSetAttribute（vi，attribute，attrState）：设置资源属性状态值。
> viStatusDesc（vi，status，desc）：获取返回状态描述字符串。
> viTerminate（vi，degree，jobId）：请求VISA资源终止一个或所有对话通道的正常运行。
> viLock（vi，lockType，timeout，requestId，accessKey）：设置资源存取模式。
> viUnlock（vi）：取消资源存取模式。
> viEnableEvent（vi，eventType，mechanism，context）：允许特定事件通知。
> viDisableEvent（vi，eventType，mechanism）：不允许特定事件通知。
> viDiscardEvents（vi，eventType，mechanism）：刷新一个对话通道上事件发生。
> viWaitOnEvent（vi，ineventTypeList，timeout，outEventType，outContext）：等待特定事件的发生。
> viInstallHandler（vi，eventType，handler，userHandle）：安装回调事件句柄 。
> viUnInstallHandler（vi，eventType，handler，userHandle）：卸载回调事件句柄。

<!-- more -->

**2、VISA资源管理器：**
> viOpenDefaultRM（sesn）：打开缺省资源管理器资源对话通道。
> viOpen（sesn，rsrcname，accessMode，timeout，vi）：打开特定资源的对话通道。
> viFindRsrc（sesn，expr，findList，retcnt，instrDesc）：查询VISA系统进行资源定位。
> viFindNext（findList，instrDesc）：返回前一个查询操作查得的资源。

**3、仪器控制管理：**
> viRead（vi，buf，count，retCount）：从器件同步读取数据。
> viReadAsync（vi，buf，count，jobId）：从器件异步读取数据。
> viWrite（vi，buf，count，retCount）：将数据同步写入到器件中。
> viWriteAsync（vi，buf，count，jobId）：将数据异步写入到器件中。
> viAssertTrigger（vi，protocol）：用特定协议确认硬件或软件触发。
> viReadSTB（vi，status）：读取服务请求状态字节。
> viClear（vi）：清除器件。
> viSetBuf（vi，mask，size）：设置格式化I/O缓冲区大小。
> viFlush（vi，mask）：手动刷新格式化I/O缓冲区。
> viPrintf（vi，writeFmt，arg1，arg2…）：按设定格式将数据传送到器件中。
> viVPrintf（vi，writeFmt，params）：按设定格式将数据传送到器件中。
> viScanf（vi，readFmt，arg1，arg2…）：按设定格式从器件中读取数据。
> viVScanf（vi，readFmt，params）：按设定格式从器件中读取数据。
> viQuery（vi，writeFmt，readFmt，arg1，arg2…）：按设定格式对器件进行数据读写。
> viVQuery（vi，writeFmt，readFmt，params）：按设定格式对器件进行数据读写。
> viIn8（vi，space，offset，value）：从接口总线读取8位（字节）单位。
> viIn16（vi，space，offset，value）：从接口总线读取16位（字）单位数据。
> viIn32（vi，space，offset，value）：从接口总线读取32位（双字）单位数据。
>  
> viOut8（vi，space，offset，value）：向接口总线写入8位（字节）单位数据。
> viOut16（vi，space，offset，value）：向接口总线写入16位（字）单位数据。
> viOut32（vi，space，offset，value）：向接口总线写入32位（双字）单位数据。
> viMoveIn8（vi，space，offset，length，buf8）：从器件存储器向当地存储器移动8位（字节）单位数据。
> viMoveIn16（vi，space，offset，length，buf8）：从器件存储器向当地存储器移动16位（字）单位数据。
> viMoveIn32（vi，space，offset，length，buf8）：从器件存储器向当地存储器移动32位（双字）单位数据。
> viMoveOut8（vi，space，offset，length，buf8）：从当地存储器向器件存储器移动8位（字节）单位数据。
> viMoveOut16（vi，space，offset，length，buf8）：从当地存储器向器件存储器移动16位（字）单位数据。
> viMoveOut32（vi，space，offset，length，buf8）：从当地存储器向器件存储器移动32位（双字）单位数据。
> viMapAddress（vi，mapSpace，mapBase，mapSize，access，suggested，address）：映射内存空间。
> viUnMapAddress（vi）：取消内存映射。
> viPeek8（vi，addr，val8）：从特定地址读8位数据。
> viPeek16（vi，addr，val16）：从特定地址读16位数据。
> viPeek32（vi，addr，val32）：从特定地址读32位数据。
> viPoke8（vi，addr，val8）：向特定地址写8位数据。
> viPoke16（vi，addr，val16）：向特定地址写16位数据。
> viPoke32（vi，addr，val32）：向特定地址写32位数据。
> viMemAlloc（vi，size，offset）：从器件存储器分配内存。
> viMemFree（vi，offset）：释放内存分配。
 
## 属性表： ##

**1、VISA资源模板：**

> VI_ATTR_MAX_QUEUE_LENGTH    任一时间特定对话通道最大事件排队长度
> VI_ATTR_RM_SESSION 资源管理器对话通道
> VI_ATTR_RSRC_IMPL_VERSION   资源版本
> VI_ATTR_RSRC_LOCK_STATE 资源存取锁定模式（取值为表中所列三种）
> VI_ATTR_RSRC_MANF_ID    生产厂家标号
> VI_ATTR_RSRC_MANF_NAME 生产厂家名
> VI_ATTR_RSRC_NAME   资源名
> VI_ATTR_RSRC_SPEC_VERSION   VISA规范版本
> VI_ATTR_USER_DATA   资源特定对话通道所用的私有数据

**2、仪器控制资源：**

通用仪器控制属性：

> VI_ATTR_INTF_TYPE   对话通道接口类型
> VI_ATTR_INTF_NUM    接口板号
> VI_ATTR_IO_PROT I/O协议
> VI_ATTR_RD_BUF_OPER_MODE    读缓冲区操作模式
> VI_ATTR_SEND_END_EN 最后一个字节是否有END字符
> VI_ATTR_SUPPRESS_END_EN 是否禁止END字符
> VI_ATTR_TERMCHAR    终止符
> VI_ATTR_TERMCHAR_EN 是否允许终止符
> VI_ATTR_TMO_VALUE   超时值
> VI_ATTR_TRIG_ID 当前触发机制
> VI_ATTR_WR_BUF_OPER_MODE    写缓冲区操作模式
> GPIB仪器控制属性：
> VI_ATTR_GPIB_PRIMARY_ADDR   GPIB主地址
> VI_ATTR_GPIB_SECONDARY       GPIB副地址
> _ADDR
> VI_ATTR_INTF_PAERNT_NUM GPIB板号

VXI仪器控制属性：
> 
> VI_ATTR_MAINFRAME_LA    主机箱地址
> VI_ATTR_MANF_ID VXI器件制造厂家标识符
> VI_ATTR_MEM_BASE    内存基地址
> VI_ATTR_MEM_SIZE    内存大小
> VI_ATTR_MEM_SPACE   内存空间类型
> VI_ATTR_MODEL_CODE 器件标号
> VI_ATTR_SLOT    VXI器件槽位
> VI_ATTR_VXI_LA VXI器件逻辑地址
> VI_ATTR_CMDR_LA VXI总线控制器地址
> VI_ATTR_IMMEDIATE_SERV 是否为立即从者
> VI_ATTR_FDC_CHNL    FDC数据传送通道
> VI_ATTR_FDC_GEN_SIGNAL_EN   是否允许通过FDC传送数据
> VI_ATTR_FDC_MODE    FDC模式
> VI_ATTR_FDC_USE_PAIR    一对或一个FDC有效
> VI_ATTR_SRC_INCREMENT   源偏移量
> VI_ATTR_DEST_INCREMENT 目标偏移量
> VI_ATTR_WIN_ACCESS 当前窗存取模式
> VI_ATTR_WIN_BASE_ADDR   总线基地址
> VI_ATTR_WIN_SIZE    当前窗长度

异步串行仪器控制属性：

> VI_ATTR_ASRL_AVAIL_NUM 接收缓冲区字节个数
> VI_ATTR_ASRL_BAUD   波特率
> VI_ATTR_ASRL_DATA_BITS 数据位
> VI_ATTR_ASRL_END_IN 读操作终止方式
> VI_ATTR_ASRL_END_OUT    写操作终止方式
> VI_ATTR_ASRL_FLOW_CNTRL 数据流控制
> VI_ATTR_ASRL_PARITY 检验极性
> VI_ATTR_ASRL_STOP_BITS 停止位
> VI_ATTR_DEST_INCREMENT 目标偏移量
> VI_ATTR_FDC_CHNL    FDC数据传送通道
> VI_ATTR_FDC_GEN_SIGNAL_EN   是否允许通过FDC传送数据
> VI_ATTR_FDC_MODE    FDC模式
> VI_ATTR_FDC_USE_PAIR    一对或一个FDC有效

对于属性的操作，一般用viSetAttribute（ViSession/ViEvent/ViFindList vi, ViAttr attribute, ViAttrState attrState）及viGetAttribute（ViSession/ViEvent/ViFindList vi, ViAttr attribute, ViPAttrState attrState）来进行属性设置与获取，属性的主体可以是器件句柄类型、事件类型、资源对象类型等，应该分情况对待。如例3.6与例3.7的事件中断子程序中的属性主体即为事件类型。

**事件表：**

> VI_EVENT_SERVICE_REQ    服务请求通知事件
> VI_EVENT_VXI_SIGP   VXI总线信号或中断引发事件
> VI_EVENT_TRIG   硬件触发产生
> VI_EVENT_IO_COMPLETION 异步I/O操作已完成

事件处理方式分事件排队方式与事件回调方式，具体见例3.4~例3.7。


在VISA定义的操作函数列，只是VISA规范的一小部分，但有一些操作函数并没有在VISA规范中定义过，属于软件本身补充定义的，如打开资源管理器函数viOpenDefaultRM（）函数在仪器系统初始化时进行调用，建立仪器系统资源管理器与VISA软件的关联；viStatusDesc（）函数在VISA函数调用返回后调用，并将前一个VISA函数调用返回值作为输入参数，获取字符串形式的状态描述；viFindNext（）函数是viFindRsrc（）函数的补充，用于查寻VISA系统资源；viMemAlloc（）函数与viMemFree（）函数用于器件存储器内存操作。而对于VISA规范中的VISA仪器控制组织器资源与VISA特定接口仪器控制资源定义的操作，VISA1.1中均没有定义，这也为VISA软件今后的发展提供了方向。可以看到，应用VISA1.1函数，可以实现仪器系统基本编程要求，但对于特定的操作，尚需要进一步扩充，VISA软件本身是一个不断完善与发展的产物。如果要修改与开发VISA软件，必须遵循VISA规范，并基于VISA模型进行开发
 
 
 
## 三、 VISA（VPP-4） ##

VISA：Virtual Instrumentation Software Architecture，即虚拟仪器软件结构，是VPP系统联盟制定的I/O接口软件标准及其相关规范的总称。
VISA为虚拟仪器提供了标准化的I/O接口软件规范。VISA是整个工业界的统一的软件基础。
虚拟仪器软件结构中的标准 I/O 接口软件称为VISA库。

**1. VISA的作用**

为整个工业界提供统一的软件基础
对驱动程序、应用程序不必考虑接口类型
仅规定为用户提供的标准函数，不对具体实现作任何说明
用于编写符合VPP规范的仪器驱动程序，完成计算机与仪器之间的命令和数据传输，实现对仪器的控制。
VISA库作为低层 I/O 接口软件，运行于计算机系统中。

**2. VISA的特点**

适用于各类仪器：VXI, PXI, GPIB, RS-232, TCP, USB… …
与硬件接口无关
既适用于单处理器结构又适用于多处理器或分布式结构
适用于多种网络机制

**3. VISA库函数**

资源管理类函数

> viOpenDefaultRM (ViPSession Rsrc_Manager_Handle);
> viOpenDefaultRM(&defaultRMHandle);
> ViStatus viOpen (ViSession Rsrc_Manager_Handle, ViRsrc Instrument_Descriptor, ViAccessMode Access_Mode, ViUInt32 Open_Timeout, ViPSession Instrument_Handle);
> viOpen (defaultRMHandle, "VXI0::24::INSTR", VI_NULL, VI_NULL, &dmmHandle);
> ViStatus viClose (ViSession Session_Handle);
> viClose(dmmHandle);
> 
资源操作类函数
寄存器基仪器通讯

> viIn8, viIn16, viIn32
> viIn16 (dmmHandle, VI_A16_SPACE, 0, &manufactureID);
> viOut8, viOut16, viOut32
> viOut16 (dmmHandle, VI_A16_SPACE, 4, 0);

消息基仪器通讯

> viRead, viWrite
> viRead (dmmHandle, readbuf, 100, &count);
> viWrite (dmmHandle, writebuf, 100, &count);

格式化I/O

> viPrintf, viScanf
> viPrintf (dmmHandle, "*IDN?\n"); 
> viScanf (dmmHandle, "%t", result);

资源模板
事件处理

> viEnableEvent, viDisableEvent
> viInstallHandler, viUninstallHandler
> viWaitOnEvent

资源属性

> viGetAttribute, viSetAttribute

用VISA函数操作仪器的步骤
> 打开VISA资源管理器句柄，用到的函数：viOpenDefaultRM；
> 打开仪器句柄，用到的函数：viFindRsrc、viFindNext、viOpen等；
> 设置仪器状态、控制仪器操作、读取测量数据、处理仪器事件，用到的函数： viGetAttribute、viSetAttribute、viIn16、viOut16、viPrintf、viScanf、viInstallHandler、viUninstallHandler、viEnableEvent、viDisableEvent、viWaitOnEvent等；
> 释放仪器句柄，用到的函数：viClose；
> 释放VISA资源管理器句柄，用到的函数：viClose。

**VISA函数应用举例**

    void main(void)
    {
      error=viOpenDefaultRM (&rsrcManager); /*打开VISA资源管理器*/
      //rsrcManager为得到的VISA资源管理器句柄
      if(error!=VI_SUCCESS) /*如果出错，弹出错误信息对话框，返回*/
      { MessagePopup("Error","Open VISA Resource Manager Error!");
       return;
      }
      error = viOpen (rsrcManager, "VXI0::16::INSTR", VI_NULL, VI_NULL,  &instHandle);   //instHandle为得到的仪器句柄
      if(error!=VI_SUCCESS){ 
       MessagePopup("Error","Open Instrument Error!");
       return;
      }
      else{ /*获取仪器模块代码，设置仪器操作超时时间为2000毫秒*/
       viGetAttribute (instHandle, VI_ATTR_MODEL_CODE, &moduleID);viSetAttribute (instHandle, VI_ATTR_TMO_VALUE, 2000);
      }
      viClose(instHandle); /*关闭仪器句柄和VISA资源管理器*/
      viClose(rsrcManager);
    }

***
转载自：http://blog.csdn.net/lonelyboy34/article/details/8443275