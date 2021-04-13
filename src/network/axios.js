/*
 * @Author: your name
 * @Date: 2021-04-12 11:42:28
 * @LastEditTime: 2021-04-13 17:08:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo-uie:\jsproject\vue\vue-base-admin\src\network\axios.js
 */
import axios from 'axios'

/**
 * axios
 * @param {Object} config 请求参数
 * @returns axios instance
 */

const serve = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
})
