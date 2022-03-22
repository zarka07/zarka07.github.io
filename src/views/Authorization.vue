<template>
  <div >
    <div class="container-fluid">
        <div class="row">
          <div class="col-xs-6 col-md-6 left-part">
             <component 
              @sign-in="signIn" 
              @back="back"
              @showUser="$emit('showUser')" 
              v-if="selected" 
              :is="selected">
            </component>
          </div>
          <div class="col-md-6 ">
            <div class="row">
              <div class="col-md-12" >
                <h2 class="title">Lorem Ipsum</h2>
                <h4 class="subtitle">
                  "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                </h4>
                <h6 class="title-description">
                  "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                </h6>
              </div>
              <div class="col-md-6">
                <div class="background" style="color:red; order: 3"></div>
              </div>
              <div class="col-md-6">
                <div class="article" v-for="article in articles" :key="article.id">
                  <h5>{{article.title}}</h5>
                  <small>{{article.description}}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div class="row">
        <div class="col-md-12" style="padding:0">
            <div class="bg-dark text-center text-white">
              <div class="container p-4 pb-0">
                <section class="mb-4">
                  <a class="btn btn-outline-light btn-floating m-1" href="google.com" role="button"
                    ><i class="bi bi-google"></i></a>
                  <a class="btn btn-outline-light btn-floating m-1" href="instagram.com" role="button"
                    ><i class="bi bi-instagram"></i></a>
                  <a class="btn btn-outline-light btn-floating m-1" href="www.linkedin.com/in/сергей-тарасов-63ba90203/" role="button"
                    ><i class="bi bi-linkedin"></i></a>
                  <a class="btn btn-outline-light btn-floating m-1" href="github.com/zarka07" role="button"
                    ><i class="bi bi-github"></i></a>
                </section>
            </div>
            <div class="text-center p-3" style="background-color: #152733;">
              © 2022 Copyright:
              <a class="text-white" href="mailto:zarka08@gmail.com">zarka08@gmail.com</a>
            </div>
        </div>
        </div>
      </div>
    </div>

  </div> 
</template>

<script>
//import { storeToRefs } from 'pinia'

import SignUp from '@/components/SignUp.vue';
import SignIn from '@/components/SignIn.vue';
import axios from 'axios'
export default{
  components: { 'signup': SignUp , 'signin': SignIn },
    name: 'AuthorizationItem',
    emits:['showUser'],
    data() {
        return{
          items: [ 'signup', 'signin' ],
          selected: 'signup',
          articles:[],
        } 
    },
    computed: {
          currentTabComponent: function() {
            return this.selected.toLowerCase();
          }
        },
    methods:{
      back(){
        if(this.selected == 'signin'){
              this.selected = 'signup'
            }
      },
       signIn(){
         if(this.selected == 'signup'){
              this.selected = 'signin'
            }
       },
    },
    created() {
    axios.get('/articles.json').then(response => {
      this.articles = response.data.articles;
    });
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap');

*, .form-body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
}

html, .form-body {
    height: 100%;
    background-color: #152733;
    /* overflow: hidden;  */
    
}


.form-holder {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      /* min-height: 80vh; */
}

.form-holder .form-content {
    position: relative;
    text-align: center;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    -webkit-justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    margin: 5px 0 5px 0;
}

.form-content .form-items {
    border: 3px solid #fff;
    padding: 40px;
    display: inline-block;
    width: 100%;
    min-width: 375px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-align: center;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
}

.form-content h3 {
    color: #fff;
    text-align: left;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 5px;
}

.form-content h3.form-title {
    margin-bottom: 30px;
}

.form-content p {
    color: #fff;
    text-align: left;
    font-size: 17px;
    font-weight: 300;
    line-height: 20px;
    margin-bottom: 30px;
}


.form-content label, .was-validated .form-check-input:invalid~.form-check-label, .was-validated .form-check-input:valid~.form-check-label{
    color: #fff;
}

.form-content input[type=text], .form-content input[type=password], .form-content input[type=email], .form-content select {
    width: 100%;
    padding: 9px 20px;
    text-align: left;
    border: 0;
    outline: 0;
    border-radius: 6px;
    background-color: #fff;
    font-size: 15px;
    font-weight: 300;
    color: #8D8D8D;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    margin-top: 16px;
}


.btn-primary{
    background-color: #6C757D;
    outline: none;
    border: 0px;
     box-shadow: none;
}

.btn-primary:hover, .btn-primary:focus, .btn-primary:active{
    background-color: #495056;
    outline: none !important;
    border: none !important;
     box-shadow: none;
}

.form-content textarea {
    position: static !important;
    width: 100%;
    padding: 8px 20px;
    border-radius: 6px;
    text-align: left;
    background-color: #fff;
    border: 0;
    font-size: 15px;
    font-weight: 300;
    color: #8D8D8D;
    outline: none;
    resize: none;
    height: 120px;
    -webkit-transition: none;
    transition: none;
    margin-bottom: 14px;
}

.form-content textarea:hover, .form-content textarea:focus {
    border: 0;
    background-color: #ebeff8;
    color: #8D8D8D;
}

.mv-up{
    margin-top: -9px !important;
    margin-bottom: 8px !important;
}

.invalid-feedback{
    color: #ff606e;
}

.valid-feedback{
   color: #2acc80;
}

.left-part{
  padding: 0;
}

.background{
  background-image: url('@/assets/right-part-bckgrnd.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  /* background-attachment: fixed; */
  background-size: cover;
  background-color: #a7a5a5;
  /* width: 200px; */
  height:30%;
}

@media screen and (max-width: 576px) {

.background {
    display: none;
}
}

.lorem{
  color:#20240d
}

.lorem-img{
  background-image: url('@/assets/lorem-img.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  /* background-attachment: fixed; */
  background-size: cover;
  background-color: #ced114;
}

.border{
  border: 4px double black;
}

.article{
  border: 2px dotted black;
  margin-bottom: 3px;
}

.footer{
  background-color: #fff;
}
</style>