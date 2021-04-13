<!--
 * @Author: your name
 * @Date: 2021-04-12 11:15:20
 * @LastEditTime: 2021-04-13 16:55:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo-uie:\jsproject\vue\vue-base-admin\src\views\Home.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import baseUrl from '@/network/baseUrl'

console.log(baseUrl,process.env.VUE_APP_ENV,process.env.NODE_ENV);

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
