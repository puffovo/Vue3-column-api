const express = require('express')
const {
  login,
  validateEmail,
  register,
  getUser
} = require('../controller/user')
const { successData, failData } = require('../model/resData')
const { currentTime } = require('../utils/getCurrentTime')
const verify = require('../utils/verify')

const router = express.Router()

// 用户登录
router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const result = await login(email, password).then(sqlData => {
    // 有匹配的数据
    if (sqlData.length >= 1) {
      const token = verify.setToken(sqlData[0])
      // return successData('token', token, '登录成功')
      return successData('token', token,'登陆成功',sqlData[0].username)
    }
    return failData('账号或者密码错误！')
  }).catch(err => failData(err))
  //将登录成功或失败的结果发送给前端
  res.send(result)
})

// 用户信息
router.post('/current', async (req, res) => {
  // 解析token
  const token = req.headers['authorization']
  const data = await verify.getToken(token)
  .then(res => {
    const { _id, username } = res.userinfo
    return successData('user', {
      _id,
      username
    })
  })
  .catch(err => failData(err))
  res.status(201).send(data)
// const {_id, username} = res.userinfo
//   res.send({_id, username})
})

// 验证邮箱是否存在
router.post('/validate', async (req, res) => {
  const { email } = req.body
  const result = await validateEmail(email).then(sqlData => {
    if (sqlData.length > 0) {
      return failData('该邮箱已注册！')
    }
    return successData('msg', '验证通过！')
  }).catch(err => failData(err))
  res.send(result)
})

// 用户注册
router.post('/register', async (req, res) => {
  const result = await register({ ...req.body }).then(() => {
    return successData('msg', '验证通过！')
  }).catch(err => failData(err))
  res.send(result)
})
// 获取用户信息
// 专栏列表
router.get('/info', async (req, res) => {
  const result = await getUser().then(sqlData => {
    return successData('info', sqlData)
  }).catch(err => failData(err))
  res.send(result)
})


module.exports = router
