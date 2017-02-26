title: MFC Table控件的使用
tags: MFC
date: 2015-12-20 22:16:41
---
1、创建MFC工程，添加TAB Control控件，并创建`CTabCtrl`类型的成员变量 `m_TabCtrl`

2、添加选项卡

```C++
m_tab.InsertItem(0,"参数一");  //添加参数一选项卡 
m_tab.InsertItem(1,"参数二");  //添加参数二选项卡 
m_tab.InsertItem(2,"结果");    //添加结果选项卡
```

3、在对话框资源里面添加三个对话框资源, ID分别命名为 IDD_PARA1, IDD_PARA2, IDD_RESULT。字体为宋体, 字号为9, style为Child, Border为None, 宽度调整为161. 再分别为其添加对应的基于CDialog类CPara1, CPara2, CResult

4、在CMyTabDlg类中添加三个成员变量m_para1, m_para2, m_result, 分别是三个子对话框的实例

```C++
CResult m_result; 
CPara2 m_para2; 
CPara1 m_para1; 
```

5、在IDD_MYTAB_DIALOG对话框的初始化函数OnInitDialog里面添加如下代码:

```C++
//关联对话框,并且将IDC_TABTEST控件设为父窗口 
m_para1.Create(IDD_PARA1,GetDlgItem(IDC_TABTEST)); 
m_para2.Create(IDD_PARA2,GetDlgItem(IDC_TABTEST)); 
m_result.Create(IDD_RESULT,GetDlgItem(IDC_TABTEST)); 
```

---
未完，待续