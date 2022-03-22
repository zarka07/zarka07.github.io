<template>
 
  <div >
    <router-view @showUser="toUser"/>
  </div>
  <!-- <div v-if="!store.email"><AuthorizationItem/></div>
  <div v-else><UserItem/></div> -->
  
</template>

<script>

import { UserStore } from '@/stores/UserStore'

export default {
  name: 'App',
  components: {
    
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
  color: #b7d842;
 
}
</style>
