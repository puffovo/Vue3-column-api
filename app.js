const express = require('express')
const column = require('./routes/column')
const post = require('./routes/post')
const user = require('./routes/user')
var path = require('path')
const PORT = 8081
const ROOT_PATH = '/zhiye/api'
const app = express()
const { getIcon } = require('./controller/post')
// 设置允许跨域访问该服务
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
  res.header('Access-Control-Max-Age',1728000);//预请求缓存20天
  next()
})
// 解析post请求的数据
app.use(express.json())

app.use(`${ROOT_PATH}/column`, column)
app.use(`${ROOT_PATH}/post`, post)
app.use(`${ROOT_PATH}/user`, user)

app.listen(PORT, () => {
  console.log('服务已启动:127.0.0.1:' + PORT)
})

app.get('/', (req, res)=>{
    res.send('Hello world');
});
// app.get('/img', function (req, res, next) {
//     res.sendFile(path.join(__dirname, 'uploads/1c0add53c5b2e38c435bbc1a9c5e05d0'));
//     console.log(__dirname)
//   })

// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended:false }))
app.post('/zhiye/api/img',  async (req, response) => {
  const newName = req.body.newName
  const id = await getIcon(newName).then(sqlData => {
    if (sqlData.length > 0) {
      return sqlData[0]._id
    }
  }).catch(err => res.send(err))
  response.send((id).toString())
  app.get(`/img/${id}`, function (req, res, next) {
  res.sendFile(path.join(__dirname, `uploads/${newName}`));
})
})

