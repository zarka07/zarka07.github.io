"use strict";(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[506,818,323],{8065:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var o=r(3396);const n={key:0},s={key:1};function u(e,t,r,u,a,i){const l=(0,o.up)("Authorization"),d=(0,o.up)("User"),c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(c,{onShowUser:i.toUser},{default:(0,o.w5)((()=>[u.store.email?((0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(d)])):((0,o.wg)(),(0,o.iD)("div",n,[(0,o.Wm)(l)]))])),_:1},8,["onShowUser"])])}var a=r(4761),i=r(1759),l=r(4573),d={name:"project1-component",components:{Authorization:a["default"],User:i["default"]},setup(){const e=(0,l.U)();return{store:e}},methods:{toUser(){this.$router.push("/user")}}},c=r(89);const m=(0,c.Z)(d,[["render",u]]);var p=m},1759:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var o=r(3396),n=r(7139);const s=e=>((0,o.dD)("data-v-10a757f6"),e=e(),(0,o.Cn)(),e),u={class:"container"},a={class:"row"},i={class:"userinfo col-md-12"},l=s((()=>(0,o._)("p",null,"You are successfully logged with user info:",-1))),d={key:0},c={class:"d-grid gap-2 col-6 mx-auto"};function m(e,t,r,s,m,p){const w=(0,o.up)("Header"),v=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(w),(0,o._)("div",u,[(0,o._)("div",a,[(0,o._)("div",i,[l,m.username?((0,o.wg)(),(0,o.iD)("p",d,"username: "+(0,n.zw)(m.username),1)):(0,o.kq)("",!0),(0,o._)("p",null,"email: "+(0,n.zw)(m.email),1),(0,o._)("p",null,"password: "+(0,n.zw)(m.password),1),(0,o._)("div",c,[(0,o._)("button",{class:"btn btn-primary",style:{"margin-top":"1em"},type:"button",onClick:t[0]||(t[0]=(...e)=>p.logout&&p.logout(...e))},"Logout")])])])]),(0,o.Wm)(v)])}var p=r(4573),w=r(8602),v=r(234),f={name:"user-item",components:{Header:w.Z,Footer:v.Z},setup(){const e=(0,p.U)();return{mainStore:e}},data(){return{email:this.mainStore.email,password:this.mainStore.password,username:this.mainStore.username}},methods:{logout(){this.mainStore.resetUser(),this.$router.push("/")}}},h=r(89);const g=(0,h.Z)(f,[["render",m],["__scopeId","data-v-10a757f6"]]);var _=g}}]);
//# sourceMappingURL=project1.b0f3f5dc.js.map