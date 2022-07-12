const execSql = require('../mysql/execSql')


// 获取文章列表
const getList = () => {
  const sql = 'select * from table_post'
  return execSql(sql)
}

// 通过id获取对应文章
const getPost = (id) => {
  const sql = `select * from table_post where _id = '${id}'`
  return execSql(sql)
}

// 创建文章
const createPost = ({title, content, imgUrl, editor, createTime, columnId}) => {
  const sql = `insert into table_post(title, content, imgUrl, editor, createtime, columnid) values('${title}', '${content}', '${imgUrl}', '${editor}', '${createTime}', '${columnId}')`

  return execSql(sql)
}

//上传图片
const uploadIcon = (path) => {
  // const sql = `insert into comic(newPath,oldPath) values('${newPath}','${oldPath}')`
  const sql = `insert into comic(path) values('${path}')`
  return execSql(sql)
}
const getIcon = (name) => {
  console.log('name',name)
  console.log('name2',`'${name}'`);
  const sql = `select * from comic where path = '${name}'`
  return execSql(sql)
}
const deletePost = (id) => {
  const sql = `delete from table_post where _id = '${id}'`
  return execSql(sql)
}
module.exports = {
  getList,
  getPost,
  createPost,
  uploadIcon,
  getIcon,
  deletePost
}
