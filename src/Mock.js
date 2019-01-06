const Mock = require('mockjs')

Mock.mock('/getData',function (reqParam) {
  console.log(reqParam)
  return Mock.mock({
    'name': '我是mock.js模拟后端的数据哈哈哈',
    'describe': 'bb乖乖'
  })
})
