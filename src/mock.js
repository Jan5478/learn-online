const Mock = require('mockjs');

Mock.mock('/getData',function (reqParam) {
  console.log(reqParam);
  console.log('我被调用了吗？？？？')
  return Mock.mock({
    'name|3':'fei',
    'describe': 'bb乖乖'
  })
});
