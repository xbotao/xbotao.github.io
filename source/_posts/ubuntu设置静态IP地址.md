title: ubuntu设置静态IP地址
tags:
  - ubuntu
date: 2016-03-30 00:00:00
---
环境： ubuntu10.04


----------
修改以下文件

```Bash
sudo vim /etc/network/interfaces
```

修改内容如下：
```Bash
auto eth0
iface eth0 inet static
address 192.168.17.88
gateway 192.168.17.1 #这个地址你要确认下 网关是不是这个地址
netmask 255.255.255.0
network 192.168.17.0
broadcast 192.168.17.255
```
<!-- more -->

修改dns解析
因为以前是dhcp解析，所以会自动分配dns服务器地址
而一旦设置为静态ip后就没有自动获取到的dns服务器了
要自己设置一个

```Bash
sudo vim /etc/resolv.conf
```
写上一个公网的DNS（由于我是在虚拟机中使用的Host-only模式，此处可以不设置）

```Bash
nameserver 202.96.128.86
```

（注意：8.8.8.8是谷歌的DNS服务器，但是解析速度慢，还是找到一个国内的dns来用）

3. 重启网卡：

```Bash
sudo /etc/init.d/network restart
```

注意：
此处设置静态IP时，可能会出现重启失败，找不到该设备的情况，这可能是因为你的网卡不叫eth0的原因，可以在启动命令行模式后，执行“ifconfig”指令，会显示当前网卡的名称。

![重启网卡失败][1]

![ifconfig查看IP地址][2]


我的就是显示eth7，这是需要将上文中讲到的配置IP地址的eth0修改为eth7即可，重启网卡后就可以看到设置的IP地址了。


[1]: http://7xk1z1.com1.z0.glb.clouddn.com/eef40745-c898-47f6-9007-bb59e6227c83.png "eef40745-c898-47f6-9007-bb59e6227c83.png"
[2]: http://7xk1z1.com1.z0.glb.clouddn.com/10d274ec-2162-4bbc-87bc-8a1483ba8357.png "10d274ec-2162-4bbc-87bc-8a1483ba8357.png"