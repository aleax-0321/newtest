import axios from "axios"

const request = axios.create({
    // baseURL: 'https://www.fastmock.site/mock/4f60d566644d6646e94d679ea86f9287/aixue8',
    timeout: 3000,
    // headers: headers
})

// // 添加请求拦截器
// request.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     return config;
// }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
// });

export default request