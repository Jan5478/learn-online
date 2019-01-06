const Mock = require('mockjs');

Mock.mock('/getData',function (reqParam) {
  console.log(reqParam);
  return Mock.mock({
    'name|3':'fei',
    'describe': 'bb乖乖'
  })
});
