title: C++使用try catch捕获错误
tags: C++
date: 2015-07-26 16:37:09
---
## try catch的学习使用

最近在使用VC2010进行项目开发，使用visa库和仪器驱动进行仪器仪表的程控操作，在每次执行完一次操作之后，都需要判断该操作是否正确执行，如果正确执行，则仅需往下执行，如果指令执行错误则返回-1并跳出函数。

开始使用下面的方式进行判断;
```C++
int result = SystemWrite(cmd1,……）；
if (result < 0)
{
    return -1;
}

int result = SystemWrite(cmd2,……）；
if (result < 0)
{
    return -1;
}
```


<!-- more -->

对于每一条指令都是用下面的方式进行判断，造成的结果是，代码行太多，看着密密麻麻一大片，并且可读性差。后来了解到C++的`try{……}catch(){……} `异常捕获功能，通过学习，做了下面的函数进行测试。

```C++
#include "stdafx.h"

void checkError(int resultState)
{
    if (resultState < 0)
    {
        throw ("命令执行错误，请检查!");
    }
}

int _tmain(int argc, _TCHAR* argv[])
{
    try
    {
        checkError(1);
        checkError(0);
        checkError(-1);
        checkError(5);
    }
    catch (const char *err_msg)
    {
        printf("CMemoryException \n");
    }

    return 0;
}
```

这样在对命令执行情况进行判断的时候就变得简单了，如下

```C++
try
{
    checkError(SystemWrite(cmd1,……）);
    checkError(SystemWrite(cmd2,……）);
    checkError(SystemWrite(cmd3,……）);
}
catch (const char *err_msg)
{
    return -1;
}
```

由于此处只写了2条指令，所以感官上却别不是特别大，但是当命令增加到十几二十几条的时候，感觉就特别明显了。

*注意：*
此处是通过定义个函数来对参数检查的，缺点是会增加很多函数的调用过程，可以修改为带参数的宏定义的形式进行，不过博主此处没有进行尝试。