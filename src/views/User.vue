<template>
    <div >
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: rgb(136, 212, 143);">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="../assets/flag.jpg" id="flag" alt="brand" width="30" height="24">
                </a>
                <!-- <img src="../assets/flag.jpg" id="flag" class="img-fluid" alt="flag"> -->
                
                <div class="btn-group mxauto" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-danger">1</button>
                    <button type="button" class="btn btn-primary">2</button>
                    <button type="button" class="btn btn-warning">3</button>
                    <button type="button" class="btn btn-success">4</button>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown d-flex">
                            <img src="../assets/settings.png" id="settings" alt="settings" width="20" height="20">
                            <a class="nav-link dropdown-toggle dropdown ms-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {{email}}
                            </a>
                            
                        <ul class="dropdown-menu " aria-labelledby="dropdownMenuLink">
                            <li>
                                <a class="dropdown-item" @click="logout" >Logout</a>
                            </li>
                            <!-- <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li> -->
                        </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div></div>
    </div>
    
</template>

<script>
import { UserStore } from '@/stores/UserStore'

export default {
    name: 'UserItem',
    setup() {
        const mainStore = UserStore();
        return{
          mainStore
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
    /* .dropdown{
        display: contents;
    } */
</style>