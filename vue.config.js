/*
 * @Author: your name
 * @Date: 2021-04-13 13:53:46
 * @LastEditTime: 2021-04-13 13:57:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo-uie:\jsproject\vue\vue-base-admin\webpack.config.js
 */


let path = require('path')


function resolve(dir) {
  return path.join(__dirname,dir)
}

module.exports = {

  chainWebpack: (config) => {
    config.resolve.alias.set('@',resolve('./src'))
  }
}