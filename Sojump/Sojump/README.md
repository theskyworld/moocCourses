##### 项目分析

![image-20230826080141526](C:\Users\ycx\AppData\Roaming\Typora\typora-user-images\image-20230826080141526.png)

##### 业务闭环

问卷创建者 → 新建问卷 → 编辑问卷 → 发布问卷 → 问卷H5页面
   👆                                           ⬇
分析结果   👈  后台统计并分析页面  👈 用户填写页面并提交

##### 项目组件分析

![image-20230826080407619](C:\Users\ycx\AppData\Roaming\Typora\typora-user-images\image-20230826080407619.png)

##### 项目页面

![image-20230828141801145](C:\Users\ycx\AppData\Roaming\Typora\typora-user-images\image-20230828141801145.png)

路由设计

- 首页 `'/'`
- 登录页 `'/login'`
- 注册页 `'/register'`
- 问卷管理
  - 我的问卷 `'/manage/list'`
  - 星标问卷 `'/manage/star'`
  - 回收站 `'/manage/trash'`
- 问卷详情
  - 编辑问卷 `/question/edit/:id`
  - 问卷统计 `/question/stat/:id`
- 404
