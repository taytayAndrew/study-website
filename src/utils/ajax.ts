import axios from 'axios';

//1. 创建axios对象
const ajax = axios.create();

//2. 请求拦截器
ajax.interceptors.request.use(config => {
  return config;
}, error => {
  Promise.reject(error);
});

//3. 响应拦截器
ajax.interceptors.response.use(response => {
  //判断code码
  return response.data;
},error => {
  return Promise.reject(error);
});

export default ajax;