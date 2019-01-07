const Mock = require('mockjs');
const Random = Mock.Random;

Mock.mock('http://localhost:8080/getData',function (reqParam) {
  console.log(reqParam);
  console.log('我被调用了吗？？？？');
  return Mock.mock({
    'name|3':'fei',
    'describe': 'bb乖乖'
  })
});

// const bannerData = function() {
//   let Data = [];
//   for (let i = 0; i < 8; i++) {
//     let data = {
//       name: Random.name(), // Random.name() 随机生成一个常见的姓名
//       img: Random.image('650x400', '#FF6600')
//     };
//     Data.push(data)
//   }
//
//   return {
//     Data: Data
//   }
// };

Mock.mock('http://localhost:8080/getBanner',function (reqParam) {
  // console.log(reqParam);
  return Mock.mock({
    'name':'learn',
    'describe': 'learnEnglish',
    'imgs': [
      'https://m.360buyimg.com/babel/jfs/t1/29191/26/4235/95551/5c2f2996Eba0b025d/c6a2aa923a67f952.jpg',
      'https://img1.360buyimg.com/da/jfs/t1/28807/10/4306/85260/5c30484cE8f828f42/3b36d2a6b80d10eb.jpg',
      'https://img10.360buyimg.com/da/jfs/t18487/241/1444742474/110119/f5bc9082/5acb3af6N2af11d1c.jpg',
      'https://m.360buyimg.com/babel/jfs/t1/22710/5/3081/75342/5c244f9eE54c2699a/74f8c021c36b6366.jpg'
    ]
  })
});

Mock.mock('http://localhost:8080/getHot',function (reqParam) {
  // console.log(reqParam);
  return Mock.mock({
    'name':'learn',
    'describe': 'learnEnglish',
    'imgs': [
      'https://i1.mifile.cn/a1/pms_1537323963.1278763!220x220.jpg',
      'https://i1.mifile.cn/a1/pms_1545457703.71734471!220x220.png',
      'https://i1.mifile.cn/a1/pms_1527685277.65255600!220x220.jpg',
      'https://i1.mifile.cn/a1/pms_1528719461.20891365!220x220.jpg',
      'https://i1.mifile.cn/a1/pms_1522034061.12391230!220x220.jpg',
      'https://i1.mifile.cn/a1/pms_1537323963.1278763!220x220.jpg',
      'https://i1.mifile.cn/a1/pms_1545457703.71734471!220x220.png',
      'https://i1.mifile.cn/a1/pms_1527685277.65255600!220x220.jpg',
      'https://i1.mifile.cn/a1/pms_1528719461.20891365!220x220.jpg',
      'https://i1.mifile.cn/a1/pms_1522034061.12391230!220x220.jpg'
    ]
  })
});

Mock.mock('http://localhost:8080/getScheduling',function (reqParam) {
  // console.log(reqParam);
  return Mock.mock({
    'name':'learn',
    'describe': 'learnEnglish',
    'imgs': [
      'https://img11.360buyimg.com/n7/jfs/t20365/316/1216991915/173915/859d65d4/5b221170Nfc40038d.jpg',
      'https://img11.360buyimg.com/n7/jfs/t1/12102/11/4461/130121/5c30ccf4E4b696c41/4c48e92deea71d02.jpg',
      'https://img10.360buyimg.com/n7/jfs/t1/20150/20/4499/301648/5c32be24Ed9438a1b/c92c9f8de8f310c5.jpg',
    ],
  })
});



// todo  to be  add  below

// n







//  mock.js axios 都可以y用了！！
