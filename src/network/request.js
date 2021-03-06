import axios from 'axios'

export function request(config) {
  // 新建一个实例
  const instance = axios.create({
    baseURL: 'http://111.222.333.444:5555/api/m5',
    timeout: 5000
  })

  //拦截器
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    return err;
  })

  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    return err
  })

  // 真实导出
  return instance(config)
}