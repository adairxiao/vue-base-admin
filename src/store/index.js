/*
 * @Author: your name
 * @Date: 2021-04-12 11:15:20
 * @LastEditTime: 2021-04-12 17:29:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo-uie:\jsproject\vue\vue-base-admin\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  let re = new RegExp(/([\w]+(?=\.\w+$))/)
  const moduleName = re.exec(modulePath)[0]

  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

export default new Vuex.Store({
  modules,
  getters,
})
