"use strict";(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[179],{7916:function(t,e,r){r.d(e,{Z:function(){return g}});var a=r(3396),s=r(7139);const n={class:"d.flex d-flex justify-content-between align-items-center mb-1 flex-wrap"},i={style:{"margin-left":"1rem"}},o={class:"btn"},l={class:"bi bi-cart",style:{"margin-top":"8px","margin-right":"1rem"}};function c(t,e,r,c,u,d){const m=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("header",null,[(0,a._)("div",n,[(0,a._)("div",i,[(0,a._)("h4",null,[(0,a.Wm)(m,{to:{name:"Project3"}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(u.sitename),1)])),_:1})])]),(0,a._)("div",null,[(0,a._)("button",o,[(0,a.Wm)(m,{"active-class":"active",to:{name:"Form"}},{default:(0,a.w5)((()=>[(0,a._)("p",l,(0,s.zw)(this.userStore.CURRENT_ITEMS_COUNT??0),1)])),_:1})])])])])}var u=r(4573),d={name:"my-header",setup(){const t=(0,u.U)();return{userStore:t}},data(){return{sitename:"Распродажа склада!"}},methods:{showCheckout(){this.$router.push({name:"Form"})}}},m=r(89);const p=(0,m.Z)(d,[["render",c],["__scopeId","data-v-5a9b63f6"]]);var g=p},3471:function(t,e,r){r.r(e),r.d(e,{default:function(){return O}});var a=r(3396),s=r(9242),n=r(7139);const i=t=>((0,a.dD)("data-v-7ec5ae7e"),t=t(),(0,a.Cn)(),t),o={class:"m-3"},l={class:"d-grid gap-2 d-md-flex justify-content-md-start"},c=i((()=>(0,a._)("hr",null,null,-1))),u={class:"row"},d={class:"col-md-4 col-md-offset-0"},m=["src"],p={class:"col-md-8 col-md-offset-0 description"},g={class:"price"},h={class:"rating"},f=i((()=>(0,a._)("span",null,"Состояние товара: ",-1))),v=i((()=>(0,a._)("br",null,null,-1))),w={class:"d-flex mt-4 flex-wrap align-content-around"},_=["onClick"],C={key:1,disabled:"true",class:"btn btn-light"},y={key:2,class:"inventory-message"},b={key:3,class:"inventory-message"},I={key:4,class:"inventory-message"},k=i((()=>(0,a._)("hr",null,null,-1)));function S(t,e,r,i,S,x){const D=(0,a.up)("my-header"),T=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(D),(0,a._)("main",o,[(0,a._)("div",l,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>S.filter=t),type:"text",placeholder:"Фильтр"},null,512),[[s.nr,S.filter]]),S.page>1?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"btn btn-primary me-md-2",type:"button",onClick:e[1]||(e[1]=t=>S.page--)}," Назад ")):(0,a.kq)("",!0),S.hasNextPage?((0,a.wg)(),(0,a.iD)("button",{key:1,class:"btn btn-primary me-md-2",type:"button",onClick:e[2]||(e[2]=t=>S.page++)}," Вперед ")):(0,a.kq)("",!0)]),c,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(x.filteredList(),(t=>((0,a.wg)(),(0,a.iD)("div",{key:t.id},[(0,a._)("div",u,[(0,a._)("div",d,[(0,a._)("figure",null,[(0,a._)("img",{class:"product",src:t.image},null,8,m)])]),(0,a._)("div",p,[(0,a._)("h3",null,[(0,a.Wm)(T,{to:{name:"ProductId",params:{id:t.id}}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(t.title),1)])),_:2},1032,["to"])]),(0,a._)("p",g,"Цена: "+(0,n.zw)(t.price||x.formatPrice)+" грн",1),(0,a._)("div",h,[f,((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(5,(e=>(0,a._)("span",{class:(0,n.C_)({"rating-active":x.checkRating(e,t)}),key:e},"☆",2))),64))]),v,(0,a._)("div",w,[x.canAddToCart(t)?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"btn add-btn",onClick:e=>x.addToCart(t)}," Добавить в корзину ",8,_)):((0,a.wg)(),(0,a.iD)("button",C," Добавить в корзину ")),t.availableInventory-x.cartCount(t.id)===0?((0,a.wg)(),(0,a.iD)("span",y,"Товар закончился ")):t.availableInventory-x.cartCount(t.id)<5?((0,a.wg)(),(0,a.iD)("div",b," Осталось: "+(0,n.zw)(t.availableInventory-x.cartCount(t.id))+" шт! ",1)):((0,a.wg)(),(0,a.iD)("span",I,"Купить сейчас! "))])])]),k])))),128))])])}var x=r(7916),D=r(6265),T=r.n(D),U=r(4573),N={name:"main-component",data(){return{products:[],filter:"",page:1,hasNextPage:!0}},components:{MyHeader:x.Z},setup(){const t=(0,U.U)();return{userStore:t}},methods:{filteredList(){const t=4*(this.page-1),e=4*this.page-1,r=this.products.filter((t=>t.title.toLowerCase().includes(this.filter)));return this.hasNextPage=r.length>e,r.slice(t,e)},formatPrice(t){if(!parseInt(t))return"";if(t>99999){var e=(t/100).toFixed(2),r=e.split("").reverse(),a=3;while(r.length>a+3)r.splice(a+3,0,","),a+=4;return r.reverse().join("")}return(t/100).toFixed(2)},checkRating(t,e){return e.rating-t>=0},addToCart(t){this.userStore.addToCart(t.id)},canAddToCart(t){return t.availableInventory>this.cartCount(t.id)},cartCount(t){let e=0;for(let r=0;r<this.userStore.cartItems.length;r++)this.userStore.cartItems[r]===t&&e++;return e}},computed:{sortedProducts(){function t(t,e){return t.title.toLowerCase()<e.title.toLowerCase()?-1:t.title.toLowerCase()>e.title.toLowerCase()?1:0}if(Object.keys(this.products).length>0){let e=this.products.slice(0);return e.sort(t)}return 0}},created:async function(){await T().get("products.json").then((t=>{this.products=t.data.products}));const t=Object.fromEntries(new URL(window.location).searchParams.entries());t.filter&&(this.filter=t.filter),t.page&&(this.page=t.page)},watch:{filter(){this.page=1,window.history.pushState(null,document.title,`/?filter=${this.filter}&page=${this.page}`)}}},P=r(89);const L=(0,P.Z)(N,[["render",S],["__scopeId","data-v-7ec5ae7e"]]);var O=L},4573:function(t,e,r){r.d(e,{U:function(){return i}});var a=r(4301);let s=localStorage.getItem("products-list"),n=localStorage.getItem("products-count");const i=(0,a.Q_)("auth",{state:()=>({userInfo:{username:"",email:"",password:"",avatar:""},currentPage:1,cartItems:s?JSON.parse(s):[],cartItemsCount:n?JSON.parse(n):0}),getters:{CURRENT_ITEMS_COUNT(t){return t.cartItemsCount}},actions:{addToCart(t){t&&(this.cartItems.push(t),this.cartItemsCount++,localStorage.setItem("products-list",JSON.stringify(this.cartItems)),localStorage.setItem("products-count",JSON.stringify(this.cartItemsCount)))},resetCart(){this.cartItems=[],this.cartItemsCount=0,localStorage.removeItem("products-list"),localStorage.removeItem("products-count")},resetUser(){this.userInfo={}}}})}}]);
//# sourceMappingURL=main.6325f98a.js.map