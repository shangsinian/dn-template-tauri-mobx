import axios from 'axios';
import _jsonp from 'jsonp';
// //http.js
// //设置请求baseURL
// axios.defaults.baseURL = '/api'
// //设置默认请求头
// axios.defaults.headers = {
// "Content-Type": "application/x-www-form-urlencoded"
// }
// // 发送请求前处理request的数据
// axios.defaults.transformRequest = [function (data) {
// let newData = ''
// for (let k in data) {
//   newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
// }
// return newData
// }]
// 带cookie请求
axios.defaults.withCredentials = true;

//get请求
export function get(option) {
  return axios.get(option.url, { params: option.params });
}
//post请求
export function post(option) {
  return axios.post(option.url, { params: option.params });

}

export function jsonp(option) {
  return new Promise((resolve, reject) => {
    const opts = {
      cache: option.cache
    };
    _jsonp(option.url, opts, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  }); 
}