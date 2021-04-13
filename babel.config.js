/*
 * @Author: your name
 * @Date: 2021-04-12 11:15:20
 * @LastEditTime: 2021-04-13 16:44:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo-uie:\jsproject\vue\vue-base-admin\babel.config.js
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ["@babel/preset-env", { "modules": false }]
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
