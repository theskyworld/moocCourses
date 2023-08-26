##### 数据驱动视图

可以理解为，通过一个函数(f)将数据(state)进行封装处理，然后得到最终渲染后的视图(UI)

**UI = f(state)**

只需要关注对数据的修改，不需要手动进行对DOM的操作(例如`createElement`、`appendChild`等)
