"use strict";(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[788],{7788:function(e,s,r){r.r(s),r.d(s,{default:function(){return ne}});var t=r(3396);const a={class:"container-fluid"},i={class:"row"},n={class:"col-xs-12 col-md-12 form"};function o(e,s,r,o,l,d){return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",a,[(0,t._)("div",i,[(0,t._)("div",n,[l.selected?((0,t.wg)(),(0,t.j4)((0,t.LL)(l.selected),{key:0,onSignIn:d.signIn,onBack:d.back,onShowUser:d.toUser},null,8,["onSignIn","onBack","onShowUser"])):(0,t.kq)("",!0)])])])])}var l=r(7139),d=r(9242);const c=e=>((0,t.dD)("data-v-71628264"),e=e(),(0,t.Cn)(),e),u={class:"form-body"},m={class:"row"},p={class:"form-holder"},v={class:"form-content"},g={class:"form-items"},h=c((()=>(0,t._)("h3",null,"Sign Up",-1))),w={class:"requires-validation",novalidate:""},_={class:"col-md-12"},$={class:"error-msg"},f={class:"col-md-12"},y={class:"error-msg"},k=(0,t.uE)('<div class="col-md-12" data-v-71628264><select class="form-select mt-3" required data-v-71628264><option selected disabled value="" data-v-71628264>Gender</option><option value="Male" data-v-71628264>Male</option><option value="Femail" data-v-71628264>Femail</option></select></div>',1),b={class:"col-md-12"},U={class:"error-msg"},q={class:"form-check"},C=c((()=>(0,t._)("label",{class:"form-check-label"},"I confirm that all data are correct",-1))),S={class:"form-button mt-3"},D={class:"form-button mt-3 account"},I=(0,t.Uk)(" Already have an account? ");function x(e,s,r,a,i,n){return(0,t.wg)(),(0,t.iD)("div",u,[(0,t._)("div",m,[(0,t._)("div",p,[(0,t._)("div",v,[(0,t._)("div",g,[h,(0,t._)("form",w,[(0,t._)("div",_,[(0,t._)("div",{class:(0,l.C_)({error:a.v$.username.$errors.length})},[(0,t.wy)((0,t._)("input",{class:"form-control",type:"text","onUpdate:modelValue":s[0]||(s[0]=e=>i.username=e),placeholder:"Username",autocomplete:"username"},null,512),[[d.nr,i.username]]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.v$.username.$errors,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"input-errors",key:e.$uid},[(0,t._)("div",$,(0,l.zw)(e.$message),1)])))),128))],2)]),(0,t._)("div",f,[(0,t._)("div",{class:(0,l.C_)({error:a.v$.email.$errors.length})},[(0,t.wy)((0,t._)("input",{class:"form-control",type:"email","onUpdate:modelValue":s[1]||(s[1]=e=>i.email=e),placeholder:"E-mail",autocomplete:"email"},null,512),[[d.nr,i.email]]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.v$.email.$errors,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"input-errors",key:e.$uid},[(0,t._)("div",y,(0,l.zw)(e.$message),1)])))),128))],2)]),k,(0,t._)("div",b,[(0,t._)("div",{class:(0,l.C_)({error:a.v$.password.$errors.length})},[(0,t.wy)((0,t._)("input",{class:"form-control",type:"password","onUpdate:modelValue":s[2]||(s[2]=e=>i.password=e),placeholder:"Password (at least 8 long)",autocomplete:"new-password"},null,512),[[d.nr,i.password]]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.v$.password.$errors,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"input-errors",key:e.$uid},[(0,t._)("div",U,(0,l.zw)(e.$message),1)])))),128))],2)]),(0,t._)("div",q,[(0,t._)("div",{class:(0,l.C_)({error:a.v$.agree.$errors.length})},[(0,t.wy)((0,t._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":s[3]||(s[3]=e=>i.agree=e),onChange:s[4]||(s[4]=e=>a.v$.agree.$touch())},null,544),[[d.e8,i.agree]]),C],2)]),(0,t._)("div",S,[(0,t._)("button",{type:"submit",onClick:s[5]||(s[5]=(0,d.iM)(((...e)=>n.signUp&&n.signUp(...e)),["prevent"])),class:"btn btn-success"}," Sign Up ")]),(0,t._)("div",D,[I,(0,t._)("button",{type:"submit",onClick:s[6]||(s[6]=(0,d.iM)(((...e)=>n.signIn&&n.signIn(...e)),["prevent"])),class:"btn account btn-link"}," Sign In ")])])])])])])])}var j=r(4573),z=r(9117),F=r(3053),M=r(6265),V=r.n(M),E={name:"signup-component",setup(){return{v$:(0,F.ZP)()}},data(){const e=(0,j.U)();return{mainStore:e,username:"",email:"",password:"",agree:!1}},validations(){return{email:{email:z.Do,required:z.C1},password:{required:z.C1,minLength:(0,z.Ei)(8)},username:{required:z.C1},agree:{checked:e=>e}}},emits:{"sign-in":{type:String,required:!1,default:""},showUser:{type:String,required:!1,default:""}},methods:{async signUp(){if(this.v$.$invalid)return void this.v$.$touch();const e=await this.v$.$validate();if(!e)return;const s={email:"john_smith",password:"qwert1234",username:"John Smith"};try{V().defaults.headers.common["x-api-key"]="i4vt213pn5o0nek24kmtlpmxfynpg6y086qudpyswsvdaqla94d4j8eim47k7886";let e=await V().post("https://api.dev.taptiqapp.com/user/sign-up",{login:s.email,password:s.password,fullname:s.username}).then(this.$emit("showUser"));this.clearForm(),console.log(e.data)}catch(r){console.log(r)}},signIn(){this.$emit("sign-in")},clearForm(){this.username="",this.email="",this.password=""}}},H=r(89);const K=(0,H.Z)(E,[["render",x],["__scopeId","data-v-71628264"]]);var L=K;const Y=e=>((0,t.dD)("data-v-c54da024"),e=e(),(0,t.Cn)(),e),Z={class:"form-body"},P={class:"row"},A={class:"form-holder"},B={class:"form-content"},T={class:"form-items"},G=Y((()=>(0,t._)("h3",null,"Sign In",-1))),J={class:"requires-validation",novalidate:""},N={class:"col-md-12"},O={class:"error-msg"},Q={class:"col-md-12"},R={class:"error-msg"},W={class:"form-button mt-3"},X={class:"form-button mt-3"};function ee(e,s,r,a,i,n){return(0,t.wg)(),(0,t.iD)("div",Z,[(0,t._)("div",null,[(0,t._)("div",P,[(0,t._)("div",A,[(0,t._)("div",B,[(0,t._)("div",T,[G,(0,t._)("form",J,[(0,t._)("div",N,[(0,t._)("div",{class:(0,l.C_)({error:a.v$.email.$errors.length})},[(0,t.wy)((0,t._)("input",{class:"form-control",type:"email","onUpdate:modelValue":s[0]||(s[0]=e=>i.email=e),placeholder:"E-mail",autocomplete:"email"},null,512),[[d.nr,i.email]]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.v$.email.$errors,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"input-errors",key:e.$uid},[(0,t._)("div",O,(0,l.zw)(e.$message),1)])))),128))],2)]),(0,t._)("div",Q,[(0,t._)("div",{class:(0,l.C_)({error:a.v$.password.$errors.length})},[(0,t.wy)((0,t._)("input",{class:"form-control",type:"password","onUpdate:modelValue":s[1]||(s[1]=e=>i.password=e),placeholder:"Password",autocomplete:"current-password",required:""},null,512),[[d.nr,i.password]]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.v$.password.$errors,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"input-errors",key:e.$uid},[(0,t._)("div",R,(0,l.zw)(e.$message),1)])))),128))],2)]),(0,t._)("div",W,[(0,t._)("button",{type:"button",onClick:s[2]||(s[2]=(0,d.iM)((s=>e.$emit("back")),["prevent"])),class:"btn btn-primary"}," back ")]),(0,t._)("div",X,[(0,t._)("button",{type:"submit",onClick:s[3]||(s[3]=(0,d.iM)(((...e)=>n.signIn&&n.signIn(...e)),["prevent"])),class:"btn btn-success"}," Sign in ")])])])])])])])])}var se={name:"signin-component",setup(){return{v$:(0,F.ZP)()}},data(){const e=(0,j.U)();return{mainStore:e,email:"",password:""}},validations(){return{email:{email:z.Do,required:z.C1},password:{required:z.C1,minLength:(0,z.Ei)(8)}}},emits:{showUser:{type:String,required:!1,default:""},back:{type:String,required:!1,default:""}},methods:{async signIn(){if(this.v$.$invalid)return void this.v$.$touch();const e=await this.v$.$validate();if(!e)return;const s={email:"john_smith",password:"qwert1234"};try{this.mainStore.signIn(s),V().defaults.headers.post["Content-Type"]="application/json",V().defaults.headers.common["x-api-key"]="i4vt213pn5o0nek24kmtlpmxfynpg6y086qudpyswsvdaqla94d4j8eim47k7886";let e=await V().post("https://api.dev.taptiqapp.com/user/login",{login:s.email,password:s.password}).then(this.$emit("showUser"));this.clearForm(),console.log(e.data)}catch(r){console.log(r)}},clearForm(){this.email="",this.password=""}}};const re=(0,H.Z)(se,[["render",ee],["__scopeId","data-v-c54da024"]]);var te=re,ae={components:{signup:L,signin:te},name:"AuthorizationItem",emits:{showUser:{type:String,required:!1,default:""}},data(){return{items:["signup","signin"],selected:"signup",articles:[]}},computed:{currentTabComponent:function(){return this.selected.toLowerCase()}},methods:{back(){"signin"==this.selected&&(this.selected="signup")},signIn(){"signup"==this.selected&&(this.selected="signin")},toUser(){this.$router.push("/user")}}};const ie=(0,H.Z)(ae,[["render",o]]);var ne=ie}}]);
//# sourceMappingURL=788.11bb8fb7.js.map