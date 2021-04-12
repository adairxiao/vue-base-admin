/*
 * @Author: your name
 * @Date: 2021-04-12 13:40:00
 * @LastEditTime: 2021-04-12 14:00:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo-uie:\jsproject\vue\vue-base-admin\src\utils\auth.js
 */
 import Cookies from 'js-cookie'

 const TokenKey = 'Admin-Token'


 export function getToken(){
   return Cookies.get(TokenKey)
 }

 export function setToken(token){
  return Cookies.set(TokenKey,token)
}


export function removeToken(){
  return Cookies.remove(TokenKey)
}