title: 分享一下常用的SCPI指令及其解释
date: 2015-07-20 16:30:09
tags: 
- 程控
- visa
- SCPI

---

最近在使用程控设备，学习一下常用的SCPI指令，其中分为**IEEE488.2共同命令**和**标准指令**，详细解释请看下面

<!-- more -->

### SCPI 解释 ###
**IEEE488.2 共同命令**
    
    *CLS
    这条命令清除下面的寄存器：标准事件寄存器、查询事件寄存器、操作状态寄存器、操作状态子寄存器、状态字节寄存器的错误信息。
    命令语法：*CLS。
    例：*CLS
 
    *ESE
    这条命令编辑了标准事件使能寄存器的值。编程参数判定了标准事件寄存器中哪些位为1时将会引起状态字节寄存器中ESC 位置1。
    命令语法：*ESE <参数>
    参数：0~255
    上电值：参考*PSC 命令。
    例：*ESE 110

    *ESR?
    这条命令可以用来读取标准事件寄存器的值。在该命令被执行后，标准事件寄存器的值被清零。标准事件寄存器的位与标准事件使能寄存器的位定义相同。
    命令语法：*ESR?
    返回参数：<NR1>
    例：*ESR？

    *IDN？
    这条命令可以读电源的相关信息，它返回的参数包含了四个段。
    命令语法：*IDN？
    返回参数：”制造商“，”产品标号“，”产品序列号“，”软件版本号“。
    例：ITECH,6322,000000000000111101,V1.68

    *OPC
    当在这条命令这前的所有命令被执行完成后，标准事件寄存器的OPC 位被置1。
    命令语法：*OPC
    上电值：参考*PSC 命令。
    例：*OPC

    *PSC
    该命令用来控制当电源上电时是否会产生一个服务请求。
    1|ON：当电源上电时，所有使能寄存器的值被清零。
    0|OFF：当电源上电时。所有使能寄存器的值为上次保存的值。
    命令语法：*PSC <参数>
    参数：0|1|ON|OFF
    上电值：上次保存的值。
    例：*PSC ON

    *RST
    这条命令复位电源所有的参数到出厂状态。
    命令语法：*RST
    例：*RST

    *SRE
    这条命令编辑了状态位组使能寄存器的值。编程参数决定了状态位组寄存器中哪些位为1
    时将会引起状态位组寄存器中RQS 位置1。状态位组使能寄存器的位定义与状态位组寄存
    器的位定义相同。
    命令语法：*SRE <参数>
    参数：0~255
    上电值：参考*PSC 命令。
    例：*SRE 110

    *STB？
    这条命令用来读取状态字节寄存器的值。在该命令被执行后，状态字节寄存器的值被清零。
    命令语法：*STB？
    返回参数：<NR1>
    例：*STB？

    *SAV
    这条命令用来保存电源的当前用户设定值(当前电流、电压、最大电压、步进位)到指定
    单元。
    命令语法：*SAV <参数>
    参数：0~49
    例：*SAV 10

    *RCL
    这条命令将从指定单元中恢复*SAV 命令保存的设定值。
    命令语法：*RCL <参数>
    参数：0~49
    例：*RCL 10
     
**SCPI 标准命令**
     
    SYSTem:ERRor
    这条命令用来读取电源的出错信息。
    命令语法：SYSTem:ERRor?
    返回参数：参见表5
    例：SYST:ERR?

    SYSTem:VERSion
    这条命令用来查询软件的版本号。
    命令语法：SYSTem:VERSion?
    返回参数：软件的版本号。
    例：SYST:VERS?

    SYSTem:BEEPer
    这条命令用来测试蜂鸣器，执行后电源应鸣叫一声。
    命令语法：SYSTem:BEEPer[:IMMediate]
    例：SYST:BEEP

    SYSTem:LOCal
    这条命令用来设置电源为本地操作状态。
    命令语法：SYSTem:LOCal
    例：SYST:LOC

    SYSTem:REMote
    这条命令用来设置电源为远程操作状态。
    命令语法：SYSTem:REMote
    例：SYST:REM

    SYST:RWLock
    这条命令也是用来设置电源为远程操作状态的。但与上一条不同的是，本命令无法在电源上按(LOCATE)键切换到本地操作状态，需用命令才能恢复。
    命令语法：SYSTem:RWLock
    例：SYST:RWL

    SYSTem:ADDRess
    这条命令用来查询电源的本机地址。
    命令语法：SYSTem:ADDRess?
    例：SYST:ADDR?

    STATus:QUEStionable:ENABle
    这条命令编辑了查询事件使能寄存器的值。编程参数决定了查询事件寄存器中哪些位为
    1 时将会引起状态位组寄存器中QUES 位置1
    命令语法：STATus:QUEStionable:ENABle <参数>
    参数：0~255
    上电值：参考PSC 命令。
    例：STAT：QUES：ENAB 110

    STATus:QUEStionable:ENABle?
    这条命令用来读取查询事件使能寄存器的值。该命令被执行后，查询事件使能寄存的值
    被清零。
    命令语法：STATus:QUEStionable:ENABle？
    返回参数：<NR1>
    例：STAT:QUES:ENAB?

    STATus:QUEStionable?
    这条命令可以用来读取查询事件寄存器的值。在该命令被执行后，查询事件寄存器的值
    被清零。
    命令语法:STATus:QUEStionable[:EVENt]?
    返回参数：<NR1>。
    例：STAT:QUES?

    STATus:QUEStionable:CONDition?
    这条命令可以用来读取查询条件寄存器的值。当查询条件寄存器中某位的值变化时，则
    查询事件寄存器中对应的位被置1
    命令语法：STATus:QUEStionable:CONDition?
    返回参数：<NR1>
    例：STAT:QUES:COND?

    STATus:OPERation ENABle
    这条命令编辑了操作事件使能寄存器的值。编程参数决定了操作事件寄存器中哪些位为
    1 时将会引起状态位组寄存器中OPER 位置1。
    命令语法：STATus: OPERation:ENABle <参数>
    参数：0~255
    上电值：参考PSC 命令。
    例：STAT:OPER:ENAB 110

    STATus:OPERation:ENABle?
    这条命令可以用来读取操作使能寄存器的值。在该命令被执行后，操作使能寄存器的值
    被清零。
    查询语法：STATus:OPERation:ENABle?
    返回参数：
    <操作使能寄存器的值>
    例：STAT:OPER:ENAB?

    STATus:OPERation?
    这条命令可以用来读取操作事件寄存器的值。在该命令被执行后，操作事件寄存器的
    值被清零。
    查询语法：STATus:OPERation[:EVENt]?
    返回参数：<操作事件寄存器的值>
    例：STAT:OPER?

    STATus:OPERation:INSTrument?
    这条命令用来读取操作事件子寄存器的值。在该命令被执行后，操作事件子寄存器的值
    被清零。(注意：仅对当前通道的寄存器有效)
    查询语法：STATus:OPERation:INSTrument[:EVENt]?
    返回参数：<操作事件子寄存器的值>
    例：STAT:OPER:INST?

    STATus:OPERation:INSTrument:ENABle
    这条命令用来设置操作事件使能子寄存器的值，编程参数决定了操作事件使能子寄存器
    中哪些位为1 时将会引起状态字节寄存器中OPER 位位置1。(注意：仅对当前通道的寄
    存器有效)
    命令语法：STATus:OPERation:INSTrument:ENABle <value>
    参数：0~255
    上电值：参考PSC 命令。
    例：STAT:OPER:INST:ENAB 110

    STATus:OPERation:INSTrument:ENABle?
    这条命令用来读取操作使能子寄存器的值。在该命令被执行后，操作使能子寄存器的值
    被清零。(注意：仅对当前通道的寄存器有效)
    查询语法：STATus:OPERation:INSTrument:ENABle？
    返回参数：<操作事件使能子寄存器的值>
    例：STAT:OPER:INST:ENAB？

    STATus:OPERation:INSTrument:CONDition?
    这条命令用来读取操作条件子寄存器的值，在该命令被执行后，操作条件子寄存器的值
    被清零。(注意：仅对当前通道的寄存器有效)
    查询语法：STATus:OPERation:INSTrument:CONDition?
    返回参数：<操作条件寄存器的值>
    例：STAT:OPER:INST:COND?

    INSTrument[SELect]
    这条命令用来选择当前的通道。
    命令语法：INSTrument[:SELect] <参数>
    参数：FIRst|SECOnd|THIrd，表示三个通道。
    上电值：FIRst
    例：INST SECO

    INSTrument[:SELect]?
    这条命令用来读取当前选择的通道。
    查询语法：INSTrument[:SELect]?
    返回参数：FIRst(第一通道)|SECOnd(第二通道)|THIrd(第三通道)
    例：INST？

    INSTrument:NSELect
    这条命令与INSTrument[SELect]命令相似，不同仅在用数字表示通道。
    命令语法：INSTrument:NSELect <参数>
    参数：1~3
    上电值：1
    例：INST：NSEL？
    查询语法：[SOURce:]CURRent[:LEVel][:IMMediate][:AMPLitude]? <参数>
    参数：MIN | MAX |无
    返回参数：MIN TO MAX
    单位：A
    例：CURR?

    [SOURce:]VOLTage[:LEVel][:IMMediate][:AMPLitude]
    这条命令用来设置电源的当前通道的输出电压值。
    命令语法：[SOURce:]VOLTage[:LEVel][:IMMediate][:AMPLitude]
    参数：MIN|MAX|MIN TO MAX
    单位：V mV uV kV
    上电值：参考菜单设置。
    复位值：MIN
    例：VOLT 10V

    [SOURce:]VOLTage[:LEVel][:IMMediate][:AMPLitude]?
    这条命令用来查询电源的当前通道的设置电压值。
    命令语法：[SOURce:]VOLTage[:LEVel][:IMMediate][:AMPLitude]? <参数>
    参数：MIN|MAX|无
    返回参数：MIN TO MAX
    单位：V
    例：VOLT？

    [SOURce:]VOLTage:PROTection[:LEVel][:IMMediate][:AMPLitude]
    这条命令用来设置电源的当前通道的最大输出电压值。
    命令语法：[SOURce:]VOLTage:PROTection[:LEVel][:IMMediate][:AMPLitude] <参数>
    参数：不超过电源所能输出的最大电压。
    单位：V mV kV uV
    上电值：参考菜单设置。
    复位值：电源所能输出的最大电压。
    例：VOLT:PROT 20V

    [SOURce:]VOLTage:PROTection[:LEVel][:IMMediate][:AMPLitude]?
    这条命令用来查询电源的当前通道的最大设置电压。
    命令语法：[SOURce:]VOLTage:PROTection[:LEVel][:IMMediate][:AMPLitude]?
    返回参数：电源的当前通道的最大输出电压值
    单位：V
    例：VOLT:PROT?

    MEASure[:SCALer]:CURRent[:DC]?
    读取实际输出电流。
    命令语法：MEASure[:SCALer]:CURRent[:DC]?
    返回参数：实际输出电流。
    单位：A
    例：MEAS：CURR?

    MEAS[:SCALer][:VOLTage][:DC]?
    读取实际输出电压。
    命令语法：MEAS[:SCALer][:VOLTage][:DC]?
    返回参数：实际输出电压。
    单位：V
    例：MEAS?

    MEASure[:SCALer]:POWer[:DC]?
    读取实际输出功率。
    命令语法：MEASure[:SCALer]:POWer[:DC]?
    返回参数：实际输出功率。
    单位：W
    例：MEAS:POW?

    DISPlay[:WINDow][:STATe]
    开启显示屏/关闭显示屏。
    命令语法：DISPlay[:WINDow][:STATe] <参数>
    参数：0(关闭)|1(开启)
    上电值：1(开启)
    复位值：1(开启)
    例：DISP 1

    DISPlay[:WINDow][:STATe]?
    开启显示屏/关闭显示屏状态查询。
    返回参数：1(开启)|0(关闭)
    例：DISP?

    CALibration:SECure[:STATe]
    关闭/开启校准保护，当校准保护被禁止后才能进行校准。且在校准保护被禁止后命令
    表中除标准命令外其它的命令都不能用，且仅能校准当前通道。
    命令语法：CALibration:SECure[:STATe] <参数1>，<参数2>
    参数1：0(关闭)|1(开启)
    参数2：校验密码
    单位：无。
    上电值：1|(开启)
    复位值：1|(开启)
    例：CAL：SEC 0,"6322"

    CALibration:SECure[:STATe]?
    读取校准保护位的状态。
    查询语法：CALibration:SECure[:STATe]?
    返回参数：0(关闭)|1(开启)
    例：CAL:SEC?

    CALibration:VOLTage:LEVel
    设置电压校准的校准点。
    命令语法：CALibration:VOLTage:LEVel <参数>
    参数：P1<第1 点>|P2<第2 点>
    例：CAL:VOLT P1

    CALibration:VOLT[:DATA]
    设置电压校准的校准点电压。
    命令语法：CALibration:VOLT[:DATA] <参数>
    参数：当前的实际输出电压。
    单位：V mV uV kV
    例：CAL:VOLT 1V

    CALibration:CURRent:LEVel
    设置电流校准的校准点。
    命令语法：CALibration:CURRent:LEVel <参数>
    参数：P1<第1 点>|P2<第2 点>
    例：CAL:CURR:LEV P1

    CALibration:CURRent[:DATA]
    设置电流校准的校准点电流。
    命令语法：CALibration:CURRent[:DATA] <参数>
    参数：P1<第1 点>|P2<第2 点>
    例：CAL:CURR 0.3A

    CALibration:SECure:CODE
    设置新的校准密码
    命令语法：CALibration:SECure:CODE <参数>
    参数：长度为4 的校准密码字符串。
    例：CAL:SEC:CODE "1234"

    CALibration:STRing
    设置校准时的校准信息。
    命令语法：CALibration:STRing <参数>
    参数：最大长度为24 个字母的字符串，也就是用户校准时记录的相关信息。如校准时
    的时间、次数等。
    例：CAL:STR "2005-1-9 20:12"

    CALibration:STRing?
    查看当时的校准信息。
    查询语法：CALibration:STRing?
    返回参数：保存在电源中的校准信息
    例：CAL:STR?

    CALibration:SAVe
    保存校准系数到EEPROM
    命令语法：CALibration:SAVe
    例：CAL:SAV
    说明：校准后的校准数据只有保存后才会在下次生效。

    CALibration:INITital
    初始化校准系数，恢复到出厂值。
    命令语法：CALibration:INITital
    例：CAL:INIT
    说明：当校准失败后可用此命令恢复。