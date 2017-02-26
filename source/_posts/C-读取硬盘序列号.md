title: C++读取硬盘序列号
author: lazyBoy
tags:
  - C++
categories:
  - 编程语言
comments: false
date: 2016-12-20 15:02:00
---
>有时在将程序或者打包库提供给第三方时，为了防止传播泛滥，或者有一定的版权问题，需要绑定特定的计算机设备。此时就需要读取计算机的一些硬件资源（硬盘、CPU、BIOS等），来计算一个验证码，达到一机一码的目的。

## 软件查看硬盘序列号

借助`DiskGenius`查看硬盘序列号，选中硬盘，即可看到在下方有序列号。不过貌似SSD和机械硬盘的序列号格式是不一样的
SSD:     12位序列号
机械硬盘： 8位序列号

![](http://oh1jgyw0v.bkt.clouddn.com/023holeh7tvmf8fofp2dsqm3iv.png "DG查看硬盘序列号")

<!-- more -->

## C++实现读取硬盘序列号

### 参考资料
- [VC++如何获取机器码?硬盘序列号、CPU编号、BIOS编号等](http://www.kanliuxing.com/thread-11979-1-1.html)
- [MSDN - Computer System Hardware Classes](https://msdn.microsoft.com/en-us/library/aa389273(v=vs.85)

### 代码实现

代码实现使用的是微软提供的`WMI Providers`库， 读取不同硬件设备有不同的类，具体查看上面的MSDN链接。
- 硬盘	[Win32_PhysicalMemory class](https://msdn.microsoft.com/en-us/library/aa394346(v=vs.85)
- CPU   [Win32_Processor class](https://msdn.microsoft.com/en-us/library/aa394373(v=vs.85)
- BIOS  [Win32_BIOS class](https://msdn.microsoft.com/en-us/library/aa394077(v=vs.85)

```C++
#define _WIN32_DCOM
#include <iostream>
using namespace std;
#include <comdef.h>
#include <Wbemidl.h>

# pragma comment(lib, "wbemuuid.lib")

int main(int argc, char **argv)
{
	HRESULT hres;

	// Step 1: --------------------------------------------------
	// Initialize COM. 初始化COM组件------------------------------

	hres = CoInitializeEx(0, COINIT_MULTITHREADED);
	if (FAILED(hres))
	{
		cout << "Failed to initialize COM library. Error code = 0x"
			<< hex << hres << endl;
		return 1;                  // Program has failed.
	}

	// Step 2: --------------------------------------------------
	// Set general COM security levels --------------------------
	// Note: If you are using Windows 2000, you need to specify -
	// the default authentication credentials for a user by using
	// a SOLE_AUTHENTICATION_LIST structure in the pAuthList ----
	// parameter of CoInitializeSecurity ------------------------

	hres = CoInitializeSecurity(
		NULL,
		-1,                          // COM authentication
		NULL,                        // Authentication services
		NULL,                        // Reserved
		RPC_C_AUTHN_LEVEL_DEFAULT,   // Default authentication
		RPC_C_IMP_LEVEL_IMPERSONATE, // Default Impersonation  
		NULL,                        // Authentication info
		EOAC_NONE,                   // Additional capabilities
		NULL                         // Reserved
		);

	if (FAILED(hres))
	{
		cout << "Failed to initialize security. Error code = 0x"
			<< hex << hres << endl;
		CoUninitialize();
		return 1;                    // Program has failed.
	}

	// Step 3: ---------------------------------------------------
	// Obtain the initial locator to WMI -------------------------

	IWbemLocator *pLoc = NULL;

	hres = CoCreateInstance(
		CLSID_WbemLocator,
		0,
		CLSCTX_INPROC_SERVER,
		IID_IWbemLocator, (LPVOID *)&pLoc);

	if (FAILED(hres))
	{
		cout << "Failed to create IWbemLocator object."
			<< " Err code = 0x"
			<< hex << hres << endl;
		CoUninitialize();
		return 1;                 // Program has failed.
	}

	// Step 4: -----------------------------------------------------
	// Connect to WMI through the IWbemLocator::ConnectServer method

	IWbemServices *pSvc = NULL;

	// Connect to the root\cimv2 namespace with
	// the current user and obtain pointer pSvc
	// to make IWbemServices calls.
	hres = pLoc->ConnectServer(
		_bstr_t(L"ROOT\\CIMV2"), // Object path of WMI namespace
		NULL,                    // User name. NULL = current user
		NULL,                    // User password. NULL = current
		0,                       // Locale. NULL indicates current
		NULL,                    // Security flags.
		0,                       // Authority (e.g. Kerberos)
		0,                       // Context object
		&pSvc                    // pointer to IWbemServices proxy
		);

	if (FAILED(hres))
	{
		cout << "Could not connect. Error code = 0x"
			<< hex << hres << endl;
		pLoc->Release();
		CoUninitialize();
		return 1;                // Program has failed.
	}

	cout << "Connected to ROOT\\CIMV2 WMI namespace" << endl;

	// Step 5: --------------------------------------------------
	// Set security levels on the proxy -------------------------

	hres = CoSetProxyBlanket(
		pSvc,                        // Indicates the proxy to set
		RPC_C_AUTHN_WINNT,           // RPC_C_AUTHN_xxx
		RPC_C_AUTHZ_NONE,            // RPC_C_AUTHZ_xxx
		NULL,                        // Server principal name
		RPC_C_AUTHN_LEVEL_CALL,      // RPC_C_AUTHN_LEVEL_xxx
		RPC_C_IMP_LEVEL_IMPERSONATE, // RPC_C_IMP_LEVEL_xxx
		NULL,                        // client identity
		EOAC_NONE                    // proxy capabilities
		);

	if (FAILED(hres))
	{
		cout << "Could not set proxy blanket. Error code = 0x"
			<< hex << hres << endl;
		pSvc->Release();
		pLoc->Release();
		CoUninitialize();
		return 1;               // Program has failed.
	}

	// Step 6: --------------------------------------------------
	// Use the IWbemServices pointer to make requests of WMI ----

	// For example, get the name of the operating system
	IEnumWbemClassObject* pEnumerator = NULL;
	hres = pSvc->ExecQuery(
		bstr_t("WQL"),
		bstr_t("SELECT * Win32_PhysicalMemory"),
		WBEM_FLAG_FORWARD_ONLY | WBEM_FLAG_RETURN_IMMEDIATELY,
		NULL,
		&pEnumerator);

	if (FAILED(hres))
	{
		cout << "Query for physical media failed."
			<< " Error code = 0x"
			<< hex << hres << endl;
		pSvc->Release();
		pLoc->Release();
		CoUninitialize();
		return 1;               // Program has failed.
	}

	// Step 7: -------------------------------------------------
	// Get the data from the query in step 6 -------------------

	IWbemClassObject *pclsObj =NULL;
	ULONG uReturn = 0;

	while (pEnumerator)
	{
		HRESULT hr = pEnumerator->Next(WBEM_INFINITE, 1,
			&pclsObj, &uReturn);

		if (0 == uReturn)
		{
			break;
		}

		VARIANT vtProp;

		// Get the value of the Name property
		hr = pclsObj->Get(L"SerialNumber", 0, &vtProp, 0, 0);

		wcout << "Serial Number : " << vtProp.bstrVal << endl;
		VariantClear(&vtProp);
	}

	// Cleanup
	// ========

	pSvc->Release();
	pLoc->Release();
	pEnumerator->Release();
	pclsObj->Release();
	CoUninitialize();

	return 0;   // Program successfully completed.
}
```

我在实验过程中，获取CPU序列号失败，简单搜了一下，是VMI的问题[使用ManagementClass("Win32_Processor")获取cpuid失败的解决办法[原创]](https://www.cnblogs.com/hzb2010/archive/2009/02/04/1384089.html)，不过我没有测试，有兴趣的可以尝试一下。