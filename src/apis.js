import axios from 'axios';


// 获取 服务端 域名的 方法 （测试环境，正式环境的）

const testDomain = "http://localhost:8080"

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求拦截器
axios.interceptors.request.use(function(config) {
  return config;
}, function(error) {
  return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
});

// 封装axios的post请求
export function post(action, params) {
  return new Promise((resolve, reject) => {
    // url 判断是测试环境 就要拿 测试环境的域名， 正式环境的就要用 正式域名
    let url = testDomain + action;
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}

// 封装axios的post请求
export function get(action) {
  return axios.get(testDomain + action)
    .then(function (response) {
      // handle success
      console.log(response);
      console.log('xxxxxxxxxxxxxxxxxxxxxxx')
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      console.log('xxxxxxxxxxxxxxxxxxxxxxx 有错误')
    })
    .then(function () {
      // always executed
      console.log('  这是 什么 贵 ----------------')
    });

}

export default {
  mockdata(action, params) {
    return post(action, params);
  },
  testGet(action) {
    return get(action)
  }

}
