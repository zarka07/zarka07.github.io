"use strict";(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[225],{270:function(e,s,o){o.r(s),o.d(s,{default:function(){return Z}});var t=o(3396),a=o(9242),r=o(7139);const n=e=>((0,t.dD)("data-v-066d8087"),e=e(),(0,t.Cn)(),e),i={key:1,class:"container"},l=n((()=>(0,t._)("p",{class:"formDescription"},"Домашняя бухгалтерия",-1))),d={class:"form-floating mb-3"},c=n((()=>(0,t._)("label",{for:"floatingInput"},"Email",-1))),u={key:0,class:"text-danger errors"},m={key:0},p={class:"form-floating"},v=n((()=>(0,t._)("label",{for:"floatingPassword"},"Пароль",-1))),g={key:0,class:"text-danger errors"},f={key:0},w={key:0,class:"mt-4 d-grid gap-2"},k=n((()=>(0,t._)("button",{type:"submit",class:"btn btn-success"},[(0,t.Uk)(" Войти "),(0,t._)("i",{class:"bi bi-arrow-right-square-fill float-end"})],-1))),y=[k],h={class:"form-button mt-3 account have-not-account"},$=(0,t.Uk)(" Нет аккаунта? "),_=(0,t.Uk)("Зарегистрироваться");function b(e,s,o,n,k,b){const D=(0,t.up)("Loader"),q=(0,t.up)("router-link");return e.isLoaded?((0,t.wg)(),(0,t.j4)(D,{key:0})):((0,t.wg)(),(0,t.iD)("div",i,[(0,t._)("form",{class:"form",onSubmit:s[2]||(s[2]=(0,a.iM)((e=>b.onSubmit()),["prevent"]))},[l,(0,t._)("div",d,[(0,t.wy)((0,t._)("input",{type:"email",class:"form-control",id:"floatingInput",placeholder:"name@example.com",autocomplete:"username ","onUpdate:modelValue":s[0]||(s[0]=s=>e.email=s)},null,512),[[a.nr,e.email,void 0,{trim:!0}]]),c,n.v$.$invalid?((0,t.wg)(),(0,t.iD)("div",u,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(n.v$.$silentErrors,(e=>((0,t.wg)(),(0,t.iD)("span",{class:"error",key:e.uid},["email"===e.$property?((0,t.wg)(),(0,t.iD)("i",m,(0,r.zw)(e.$message),1)):(0,t.kq)("",!0)])))),128))])):(0,t.kq)("",!0)]),(0,t._)("div",p,[(0,t.wy)((0,t._)("input",{type:"password",class:"form-control",id:"floatingPassword",placeholder:"Пароль",autocomplete:"current-password","onUpdate:modelValue":s[1]||(s[1]=s=>e.password=s)},null,512),[[a.nr,e.password,void 0,{trim:!0}]]),v,n.v$.$invalid?((0,t.wg)(),(0,t.iD)("div",g,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(n.v$.$silentErrors,(e=>((0,t.wg)(),(0,t.iD)("span",{key:e.uid},["password"===e.$property?((0,t.wg)(),(0,t.iD)("i",f,(0,r.zw)(e.$message),1)):(0,t.kq)("",!0)])))),128))])):(0,t.kq)("",!0)]),n.v$.$invalid?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("div",w,y)),(0,t._)("div",h,[(0,t._)("p",null,[$,(0,t.Wm)(q,{class:"register",to:"/register"},{default:(0,t.w5)((()=>[_])),_:1})])])],32)]))}var D=o(3053),q=o(9117),L=o(5635),S=o(4435),x={name:"login-component",components:{Loader:S.Z},setup(){const e=(0,L.S)();return{crmStore:e,v$:(0,D.ZP)()}},data:()=>({email:"",password:"",isLoaded:!1}),validations(){return{email:{required:q.C1,email:q.Do},password:{required:q.C1,minLength:(0,q.Ei)(6)}}},methods:{async onSubmit(){if(this.v$.$invalid)return;const e={email:this.email,password:this.password};try{await this.crmStore.login(e).then((e=>{console.log("res done ",e)})),console.log("all done "),setTimeout((()=>this.$router.push({name:"Home"})),1500),setTimeout((()=>this.$toast.success("Вы вошли в систему")),2e3)}catch(s){console.log(s.message)}}}},C=o(89);const U=(0,C.Z)(x,[["render",b],["__scopeId","data-v-066d8087"]]);var Z=U},4435:function(e,s,o){o.d(s,{Z:function(){return u}});var t=o(3396);const a={class:"d-flex justify-content-center m-5"},r=(0,t._)("div",{class:"spinner-border .text-info",role:"status"},[(0,t._)("span",{class:"visually-hidden"},"Loading...")],-1),n=[r];function i(e,s,o,r,i,l){return(0,t.wg)(),(0,t.iD)("div",a,n)}var l={name:"loader-component"},d=o(89);const c=(0,d.Z)(l,[["render",i]]);var u=c}}]);
//# sourceMappingURL=Login.vue.f5e3c5bd.js.map