<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid d-flex bd-highlight ">
            <div class="p-2 flex-grow-1 bd-highlight">
                <img src="../assets/vue-10-10.png" id="flag" alt="brand" style="float:left"/>
            </div>
            
            <div class="p-2 bd-highlight ">
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-danger">1</button>
                    <button type="button" class="btn btn-warning">2</button>
                    <button type="button" class="btn btn-success">3</button>
                    <button type="button" class="btn btn-primary">4</button>
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
                         <img src="../assets/settings.png" id="vue" alt="brand" style="width:20px;height:20px;margin-right:5px"/>{{email}}
                        </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" style="text-align:center;color: blue" @click="logout" href="#">Logout</a></li>
                    </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div>
        <!-- <swiper
            :slides-per-view="1"
            :space-between="50"
            navigation
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide>slide1</swiper-slide>
            <swiper-slide>slide2</swiper-slide>
            <swiper-slide>slide3</swiper-slide>
            
        </swiper> -->
    </div>
    
</template>

<script>
import { UserStore } from '@/stores/UserStore';
/*import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';*/
export default {
    name: 'UserItem',
    components:{
        //Swiper,
        //SwiperSlide,
    },
    setup() {
        const mainStore = UserStore();
        /*const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };*/
        return{
          mainStore,
          /*onSwiper,
          onSlideChange,
          modules: [Navigation, Pagination, Scrollbar, A11y],*/
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