"use strict";(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[768],{2513:function(e,a,r){r.r(a),r.d(a,{default:function(){return Y}});var s=r(3396),i=r(9242),t=r(7139);const l=e=>((0,s.dD)("data-v-60d7a81e"),e=e(),(0,s.Cn)(),e),o={class:"container"},n=l((()=>(0,s._)("p",{class:"formDescription"},"Домашняя бухгалтерия",-1))),d={class:"form-floating mb-3"},c=l((()=>(0,s._)("label",{for:"floatingInput"},"Email ",-1))),u={key:0,class:"text-danger errors"},m={key:0},p={class:"form-floating"},g=l((()=>(0,s._)("label",{for:"floatingPassword"},"Пароль",-1))),v={key:0,class:"text-danger errors"},w={key:0},f={class:"input-group mb-3 mt-3"},k=l((()=>(0,s._)("span",{class:"input-group-text",id:"basic-addon1"},"@",-1))),h=l((()=>(0,s._)("br",null,null,-1))),b={key:0,class:"text-danger errors"},y={key:0},$={class:"form-check"},_=l((()=>(0,s._)("label",{class:"form-check-label",for:"flexCheckDefault"}," С правилами согласен ",-1))),D={key:0,class:"mt-4 d-grid gap-2"},q=l((()=>(0,s._)("button",{type:"submit",class:"btn btn-success"},[(0,s.Uk)(" Зарегистрироваться "),(0,s._)("i",{class:"bi bi-arrow-right-square-fill float-end"})],-1))),x=[q],C={class:"form-button mt-3 account have-not-account"},S=(0,s.Uk)(" Уже есть аккаунт? "),U=(0,s.Uk)("Войти");function E(e,a,r,l,q,E){const P=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("form",{class:"form",onSubmit:a[4]||(a[4]=(0,i.iM)(((...e)=>E.onSubmit&&E.onSubmit(...e)),["prevent"]))},[n,(0,s._)("div",d,[(0,s.wy)((0,s._)("input",{type:"email",class:"form-control",id:"floatingInput",placeholder:"name@example.com",autocomplete:"username","onUpdate:modelValue":a[0]||(a[0]=a=>e.email=a)},null,512),[[i.nr,e.email,void 0,{trim:!0}]]),c,l.v$.$invalid?((0,s.wg)(),(0,s.iD)("div",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.v$.$silentErrors,(e=>((0,s.wg)(),(0,s.iD)("span",{key:e.uid},["email"===e.$property?((0,s.wg)(),(0,s.iD)("i",m,(0,t.zw)(e.$message),1)):(0,s.kq)("",!0)])))),128))])):(0,s.kq)("",!0)]),(0,s._)("div",p,[(0,s.wy)((0,s._)("input",{type:"password",class:"form-control",id:"floatingPassword",placeholder:"Password",autocomplete:"current-password","onUpdate:modelValue":a[1]||(a[1]=a=>e.password=a)},null,512),[[i.nr,e.password,void 0,{trim:!0}]]),g,l.v$.$invalid?((0,s.wg)(),(0,s.iD)("div",v,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.v$.$silentErrors,(e=>((0,s.wg)(),(0,s.iD)("span",{key:e.uid},["password"===e.$property?((0,s.wg)(),(0,s.iD)("i",w,(0,t.zw)(e.$message),1)):(0,s.kq)("",!0)])))),128))])):(0,s.kq)("",!0)]),(0,s._)("div",f,[k,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",placeholder:"Имя","aria-label":"Имя","aria-describedby":"basic-addon1","onUpdate:modelValue":a[2]||(a[2]=a=>e.name=a)},null,512),[[i.nr,e.name,void 0,{trim:!0}]]),h,l.v$.$invalid?((0,s.wg)(),(0,s.iD)("div",b,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.v$.$silentErrors,(e=>((0,s.wg)(),(0,s.iD)("span",{key:e.uid},["name"===e.$property?((0,s.wg)(),(0,s.iD)("i",y,(0,t.zw)(e.$message),1)):(0,s.kq)("",!0)])))),128))])):(0,s.kq)("",!0)]),(0,s._)("div",$,[(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":a[3]||(a[3]=a=>e.agree=a)},null,512),[[i.e8,e.agree]]),_]),l.v$.$invalid?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",D,x)),(0,s._)("div",C,[(0,s._)("p",null,[S,(0,s.Wm)(P,{class:"register",to:"/login"},{default:(0,s.w5)((()=>[U])),_:1})])])],32)])}var P=r(3053),V=r(9117),z=r(5635),H={name:"register-component",setup(){const e=(0,z.S)();return{crmStore:e,v$:(0,P.ZP)()}},data:()=>({email:"",password:"",name:"",agree:!1}),validations(){return{email:{email:V.Do,required:V.C1},password:{required:V.C1,minLength:(0,V.Ei)(6)},name:{required:V.C1},agree:{checked:e=>e}}},methods:{async onSubmit(){if(this.v$.$invalid)return;const e={email:this.email,password:this.password,name:this.name};try{await this.crmStore.register(e).then(this.$router.push("/login"))}catch(a){this.$toast.error(a.message)}}}},I=r(89);const K=(0,I.Z)(H,[["render",E],["__scopeId","data-v-60d7a81e"]]);var Y=K}}]);
//# sourceMappingURL=Register.vue.93f9179c.js.map