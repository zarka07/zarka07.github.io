"use strict";(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[323],{1759:function(e,s,t){t.r(s),t.d(s,{default:function(){return _}});var r=t(3396),a=t(7139);const o=e=>((0,r.dD)("data-v-10a757f6"),e=e(),(0,r.Cn)(),e),n={class:"container"},u={class:"row"},i={class:"userinfo col-md-12"},l=o((()=>(0,r._)("p",null,"You are successfully logged with user info:",-1))),m={key:0},d={class:"d-grid gap-2 col-6 mx-auto"};function c(e,s,t,o,c,p){const w=(0,r.up)("Header"),v=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(w),(0,r._)("div",n,[(0,r._)("div",u,[(0,r._)("div",i,[l,c.username?((0,r.wg)(),(0,r.iD)("p",m,"username: "+(0,a.zw)(c.username),1)):(0,r.kq)("",!0),(0,r._)("p",null,"email: "+(0,a.zw)(c.email),1),(0,r._)("p",null,"password: "+(0,a.zw)(c.password),1),(0,r._)("div",d,[(0,r._)("button",{class:"btn btn-primary",style:{"margin-top":"1em"},type:"button",onClick:s[0]||(s[0]=(...e)=>p.logout&&p.logout(...e))},"Logout")])])])]),(0,r.Wm)(v)])}var p=t(4573),w=t(8602),v=t(234),f={name:"user-item",components:{Header:w.Z,Footer:v.Z},setup(){const e=(0,p.U)();return{mainStore:e}},data(){return{email:this.mainStore.email,password:this.mainStore.password,username:this.mainStore.username}},methods:{logout(){this.mainStore.resetUser(),this.$router.push("/")}}},g=t(89);const h=(0,g.Z)(f,[["render",c],["__scopeId","data-v-10a757f6"]]);var _=h}}]);
//# sourceMappingURL=User.60507623.js.map