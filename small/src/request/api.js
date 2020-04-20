import {request} from './request.js'

export function getHome() {
        return request({
            url:'/home/multidata',
            methods:'get'
        })
}
export function getWarp() {
        return request({
            url:'/home/multidata',
            methods:'get'
        })
}
export function getList(type,page) {
        return request({
            url:'/home/data',
            methods:'get',
            params:{
                type,
                page
            }
        })
}
export function getData() {
        return request({
            url:'/detail',
            methods:'get',
        })
}
