<template>
  <div >
    <router-view @showUser="toUser">
      <div v-if="!store.email"><AuthorizationItem/></div>
      <div v-else><UserItem/></div>
    </router-view>
  </div>
  
  
</template>

<script>

import { UserStore } from '@/stores/UserStore';
import AuthorizationItem from '@/views/Authorization.vue';
import UserItem from '@/views/User.vue'
export default {
  name: 'App',
  components: {
    AuthorizationItem, UserItem,
  },
  setup(){
    const store = UserStore()
    return{
      store
    }
  },
  methods:{
    toUser(){
      this.$router.push('/user')
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #050505;
 
}
</style>
