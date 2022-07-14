# 泡芙专栏--后端api
基于Node.js, express, mysql实现的vue3-column[泡芙专栏](https://github.com/puffovo/vue3-zhiye)的后端接口，包含登录、注册、专栏、文章、上传图片等操作的api。
# 技术栈
Node.js + express + mysql
# 项目运行
### 数据库：在/config/db.js 文件中修改 database 和 password
```
MYSQL_CONF = {
    host: 'localhost',
    port: '3306',
    database: 'puffovo',  // 你的数据库表名
    user: 'root',
    password: '123456'    // 你的密码
  }
```
ps:建议安装Navicat Preminum，可视化操作数据库
### 安装插件及启动项目：
```
npm install express —save (安装express)

npm install mysql --save(安装数据库)

npm install body-parser --save(安装body-parser)

npm install multer --save (安装文件上传中间件)

npm install jsonwebtoken --save (安装JWT)

npm run start.dev(启动项目)
```
# 项目功能点
1. 登录接口
2. 注册接口
3. 用户信息接口
4. 验证邮箱接口
5. 专栏列表接口
6. 专栏详情接口
7. 文章列表接口
8. 文章详情接口
9. 新建文章接口
10. 删除文章接口
11. 上传头图接口
# 结语
如果您想要学习后端express、nodejs以及MySQl，了解Vue3和TypeScript，了解，可以尝试该项目，欢迎交流讨论！
