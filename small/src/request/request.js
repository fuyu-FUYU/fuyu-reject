/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';

export function request(config){
    let seviece= axios.create({
        baseURL:'http://152.136.185.210:8000/api/h8',
        timeout:5000
    })
    // 请求拦截器
    seviece.interceptors.request.use(    
        config => {
            // // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
            // // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
            // const token = store.state.token;        
            // token && (config.headers.Authorization = token);        
            return config;    
        },    
        err => {        
            console.error(err);    
    })
    // 响应拦截器
    seviece.interceptors.response.use((res)=>{        
            return res.data
        },
        // 服务器状态码不是200的情况    
        err=>{        
            console.error(err);        
        })
        return seviece(config)
}
