"use strict";(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[680],{3255:function(e,t,r){r.r(t),r.d(t,{default:function(){return T}});var o=r(3396),s=r(9242),a=r(7139);const l={class:"d-grid gap-2 col-6 mx-auto"},n={class:"m-2"},d={class:"row mb-4"},i={class:"col"},m={class:"form-outline"},c={class:"col"},u={class:"form-outline"},f={class:"form-outline mb-4"},p={class:"form-outline mb-4"},h={class:"form-outline mb-4"},v={class:"form-check d-flex justify-content-center mb-4"},_=["true-value","false-value"],b=(0,o._)("label",{class:"form-check-label",for:"form6Example8"}," Упаковать как хрупкое? ",-1),y={class:"form-check d-flex justify-content-center"},w={style:{"margin-right":"2.5rem"}},g=["value"],C=(0,o._)("label",{class:"form-check-label",for:"home"}," Доставка Новой почтой ",-1),x=["value"],I=(0,o._)("label",{class:"form-check-label",for:"business"}," Доставка другим перевозчиком ",-1),S={class:"d-flex justify-content-center mb-4 mt-4"},k={class:"col-md-12 verify"};function N(e,t,r,N,U,z){const E=(0,o.up)("my-header");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(E),(0,o._)("div",l,[(0,o._)("button",{onClick:t[0]||(t[0]=(...e)=>z.resetCart&&z.resetCart(...e)),class:"btn btn-primary",type:"button"}," Сбросить корзину ")]),(0,o._)("form",n,[(0,o._)("div",d,[(0,o._)("div",i,[(0,o._)("div",m,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>U.order.firstName=e),type:"text",id:"form6Example1",class:"form-control",placeholder:"Имя"},null,512),[[s.nr,U.order.firstName,void 0,{trim:!0}]])])]),(0,o._)("div",c,[(0,o._)("div",u,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>U.order.lastName=e),type:"text",id:"form6Example2",class:"form-control",placeholder:"Фамилия"},null,512),[[s.nr,U.order.lastName,void 0,{trim:!0}]])])])]),(0,o._)("div",f,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>U.order.address=e),type:"text",id:"form6Example3",class:"form-control",placeholder:"Адрес склада перевозчика:"},null,512),[[s.nr,U.order.address,void 0,{trim:!0}]])]),(0,o._)("div",p,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>U.order.city=e),type:"text",id:"form6Example4",class:"form-control",placeholder:"Город"},null,512),[[s.nr,U.order.city,void 0,{trim:!0}]])]),(0,o._)("div",h,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>U.order.zip=e),type:"number",id:"form6Example4",class:"form-control",placeholder:"Почтовый код"},null,512),[[s.nr,U.order.zip,void 0,{number:!0}]])]),(0,o._)("div",v,[(0,o.wy)((0,o._)("input",{class:"form-check-input me-2",type:"checkbox",value:"true","true-value":U.order.sendGift,"false-value":U.order.dontSendGift,"onUpdate:modelValue":t[6]||(t[6]=e=>U.order.gift=e),id:"form6Example8"},null,8,_),[[s.e8,U.order.gift]]),b]),(0,o._)("div",y,[(0,o._)("div",w,[(0,o.wy)((0,o._)("input",{class:"form-check-input",type:"radio",value:U.order.home,"onUpdate:modelValue":t[7]||(t[7]=e=>U.order.method=e),id:"home",name:"home"},null,8,g),[[s.G2,U.order.method]]),C]),(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{class:"form-check-input",type:"radio",value:U.order.business,"onUpdate:modelValue":t[8]||(t[8]=e=>U.order.method=e),id:"business",name:"business"},null,8,x),[[s.G2,U.order.method]]),I])]),(0,o._)("div",S,[(0,o._)("button",{type:"submit",class:"btn btn-primary btn-block",onClick:t[9]||(t[9]=(...e)=>z.submitForm&&z.submitForm(...e))}," Отправить заказ ")]),(0,o._)("div",k,[(0,o._)("pre",null,"          First Name: "+(0,a.zw)(U.order.firstName)+"\r\n          Last Name: "+(0,a.zw)(U.order.lastName)+"\r\n          Address: "+(0,a.zw)(U.order.address)+"\r\n          City: "+(0,a.zw)(U.order.city)+"\r\n          Zip: "+(0,a.zw)(U.order.zip)+"\r\n          State: "+(0,a.zw)(U.order.state)+"\r\n          Method: "+(0,a.zw)(U.order.method)+"\r\n          Gift: "+(0,a.zw)(U.order.gift)+"\r\n        ",1)])])])}var U=r(7916),z=r(4573),E={name:"form-component",setup(){const e=(0,z.U)();return{userStore:e}},data(){return{order:{firstName:"",lastName:"",address:"",city:"",state:"",method:"Новой почтой",business:"другим перевозчиком",home:"Новой почтой",gift:"",sendGift:"Упаковать как хрупкое",dontSendGift:"Не упаковывать как хрупкое"}}},components:{MyHeader:U.Z},methods:{submitForm(){alert("Submitted")},resetCart(){this.userStore.resetCart()}}},V=r(89);const G=(0,V.Z)(E,[["render",N]]);var T=G},7916:function(e,t,r){r.d(t,{Z:function(){return p}});var o=r(3396),s=r(7139);const a={class:"d.flex d-flex justify-content-between align-items-center mb-1 flex-wrap"},l={style:{"margin-left":"1rem"}},n={class:"btn"},d={class:"bi bi-cart",style:{"margin-top":"8px","margin-right":"1rem"}};function i(e,t,r,i,m,c){const u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",null,[(0,o._)("div",a,[(0,o._)("div",l,[(0,o._)("h4",null,[(0,o.Wm)(u,{to:{name:"Project3"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(m.sitename),1)])),_:1})])]),(0,o._)("div",null,[(0,o._)("button",n,[(0,o.Wm)(u,{"active-class":"active",to:{name:"Form"}},{default:(0,o.w5)((()=>[(0,o._)("p",d,(0,s.zw)(this.userStore.CURRENT_ITEMS_COUNT??0),1)])),_:1})])])])])}var m=r(4573),c={name:"my-header",setup(){const e=(0,m.U)();return{userStore:e}},data(){return{sitename:"Распродажа склада!"}},methods:{showCheckout(){this.$router.push({name:"Form"})}}},u=r(89);const f=(0,u.Z)(c,[["render",i],["__scopeId","data-v-5a9b63f6"]]);var p=f},4573:function(e,t,r){r.d(t,{U:function(){return l}});var o=r(4301);let s=localStorage.getItem("products-list"),a=localStorage.getItem("products-count");const l=(0,o.Q_)("auth",{state:()=>({userInfo:{username:"",email:"",password:"",avatar:""},currentPage:1,cartItems:s?JSON.parse(s):[],cartItemsCount:a?JSON.parse(a):0}),getters:{CURRENT_ITEMS_COUNT(e){return e.cartItemsCount}},actions:{addToCart(e){e&&(this.cartItems.push(e),this.cartItemsCount++,localStorage.setItem("products-list",JSON.stringify(this.cartItems)),localStorage.setItem("products-count",JSON.stringify(this.cartItemsCount)))},resetCart(){this.cartItems=[],this.cartItemsCount=0,localStorage.removeItem("products-list"),localStorage.removeItem("products-count")},resetUser(){this.userInfo={}}}})}}]);
//# sourceMappingURL=form.9d6ff206.js.map