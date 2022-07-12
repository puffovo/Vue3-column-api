/* 
  res返回数据模板
*/
const { currentTime } = require('../utils/getCurrentTime')

class base {
  constructor (dataName, data) {
    this[dataName] = data
  }
}

/* 成功模板
  {
    code: 1,
    data: {  },
    successTime: 'xxx',
    msg?: ''
  }
*/
class success extends base {
  constructor (dataName, data, msg, username) {
    super(dataName, data, msg,username)
    this.code = 1
    this.successTime = currentTime()
    if (msg) {
      this.msg = msg
    }
    if (username) {
      this.username = username
    }
    else {
this.username = '游客'
    }
    
  }
}

/* 失败模板
  {
    code: 0,
    error: 'xxx',
    failTiem: 'xxx'
  }
*/
class fail extends base {
  constructor (data) {
    super('error', data)
    this.code = 0
    this.failTime = currentTime()
  }
}

const successData = (dataName, data, msg,username) => {
  return new success(dataName, data, msg,username)
}
const failData = (err) => {
  return new fail(err)
}

module.exports = {
  successData,
  failData
}
