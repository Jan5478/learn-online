const Mock = require('mockjs');

Mock.mock('http://localhost:8080/getData',function (reqParam) {
  console.log(reqParam);
  console.log('我被调用了吗？？？？')
  return Mock.mock({
    'name|3':'fei',
    'describe': 'bb乖乖'
  })
});


Mock.mock('http://localhost:8080/getBanner',function (reqParam) {
  console.log(reqParam);
  // console.log('我被调用了吗？？？？')
  return Mock.mock({
    'ag':'fei',
    'describe': 'bb乖乖'
  })
});

// todo  to be  add  below

// n







//  mock.js axios 都可以y用了！！
