<template>
    <div class="user-main">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid d-flex bd-highlight ">
            <div class="p-2 flex-grow-1 bd-highlight">
                <img src="../assets/vue-10-10.png" id="flag" alt="brand" style="float:left"/>
            </div>
            
            <div class="p-2 bd-highlight ">
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-danger">Project 1</button>
                    <button type="button" class="btn btn-warning">Project 2</button>
                    <button type="button" class="btn btn-success">Project 3</button>
                    <button type="button" class="btn btn-primary">Project 4</button>
                </div>  
            </div>

            <div class="p-2 bd-highlight ">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>

            <div class="p-2 bd-highlight collapse navbar-collapse" id="navbarSupportedContent">
                <ul style="" class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown" >
                        
                        <a style="color: black" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                         <img src="../assets/settings.png" 
                         id="vue" 
                         alt="brand" 
                         style="width:20px;height:20px;margin-right:5px"/>
                         Hello, {{email}}
                        </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" style="text-align:center;color: blue" @click="logout" href="#">Logout</a></li>
                    </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div id="cv">
        <CV/>
    </div>
    </div>
</template>

<script>
import { UserStore } from '@/stores/UserStore';
import CV from '@/components/CV.vue'

export default {
    name: 'UserItem',
    components:{
       CV
    },
    setup() {
        const mainStore = UserStore();
       
        return{
          mainStore,
          
        }
    },
    data() {
        return{
           email: this.mainStore.email
        }
    },
    methods:{
      logout(){
        this.mainStore.resetUser()
        this.$router.push('/')
    }
  },
}
</script>
<style scoped>
    .mxauto{
        position: absolute;
        left: 55%;
        transform: translateX(-45%);
    }
    #settings{
        margin-top:10px;
    }
    .user-main{
        background-color: honeydew;
    }
</style>