"use strict";(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[179],{7433:function(t,e,n){n.d(e,{Z:function(){return g}});var r=n(3396),a=n(7139);const s={class:"d.flex d-flex justify-content-between align-items-center mb-1 flex-wrap"},o={style:{"margin-left":"1rem"}},i={class:""},c={class:"btn"},l={class:"bi bi-cart",style:{"margin-top":"8px","margin-right":"1rem"}};function u(t,e,n,u,d,m){const p=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("header",null,[(0,r._)("div",s,[(0,r._)("div",o,[(0,r._)("h4",null,[(0,r.Wm)(p,{to:{name:"Project3"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(d.sitename),1)])),_:1})])]),(0,r._)("div",i,[(0,r._)("button",c,[(0,r.Wm)(p,{"active-class":"active",to:{name:"Form"}},{default:(0,r.w5)((()=>[(0,r._)("p",l,(0,a.zw)(this.userStore.cartItemCount.length),1)])),_:1})])])])])}var d=n(4573),m={name:"my-header",setup(){const t=(0,d.U)();return{userStore:t}},data(){return{sitename:"Распродажа склада!"}},methods:{showCheckout(){this.$router.push({name:"Form"})}}},p=n(89);const v=(0,p.Z)(m,[["render",u],["__scopeId","data-v-717cc7a8"]]);var g=v},3914:function(t,e,n){n.r(e),n.d(e,{default:function(){return z}});var r=n(3396),a=n(7139);const s=t=>((0,r.dD)("data-v-53b37a26"),t=t(),(0,r.Cn)(),t),o={class:"m-3"},i={class:"row"},c={class:"col-md-4 col-md-offset-0"},l=["src"],u={class:"col-md-8 col-md-offset-0 description"},d=["innerHTML"],m={class:"price"},p={class:"rating"},v=s((()=>(0,r._)("span",null,"Состояние товара: ",-1))),g=s((()=>(0,r._)("br",null,null,-1))),h={class:"d-flex mt-4 flex-wrap align-content-around"},w=["onClick"],_={key:1,disabled:"true",class:"btn btn-light"},f={key:2,class:"inventory-message"},C={key:3,class:"inventory-message"},b={key:4,class:"inventory-message"},y=s((()=>(0,r._)("hr",null,null,-1)));function k(t,e,n,s,k,I){const D=(0,r.up)("Header"),S=(0,r.up)("my-header"),T=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(D),(0,r.Wm)(S),(0,r._)("main",o,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(I.sortedProducts,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.id},[(0,r._)("div",i,[(0,r._)("div",c,[(0,r._)("figure",null,[(0,r._)("img",{class:"product",src:t.image},null,8,l)])]),(0,r._)("div",u,[(0,r._)("h3",null,[(0,r.Wm)(T,{to:{name:"ProductId",params:{id:t.id}}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(t.title),1)])),_:2},1032,["to"])]),(0,r._)("p",{innerHTML:t.description},null,8,d),(0,r._)("p",m,"Цена: "+(0,a.zw)(t.price)+" грн ",1),(0,r._)("div",p,[v,((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)(5,(e=>(0,r._)("span",{class:(0,a.C_)({"rating-active":I.checkRating(e,t)}),key:e},"☆",2))),64))]),g,(0,r._)("div",h,[I.canAddToCart(t)?((0,r.wg)(),(0,r.iD)("button",{key:0,class:"btn add-btn",onClick:e=>I.addToCart(t)},"Добавить в корзину ",8,w)):((0,r.wg)(),(0,r.iD)("button",_,"Добавить в корзину ")),t.availableInventory-I.cartCount(t.id)===0?((0,r.wg)(),(0,r.iD)("span",f,"Товар закончился ")):t.availableInventory-I.cartCount(t.id)<5?((0,r.wg)(),(0,r.iD)("div",C," Осталось: "+(0,a.zw)(t.availableInventory-I.cartCount(t.id))+" шт! ",1)):((0,r.wg)(),(0,r.iD)("span",b,"Купить сейчас! "))])])]),y])))),128))])])}var I=n(7433),D=n(6265),S=n.n(D),T=n(4573),x={name:"main-component",data(){return{products:{}}},components:{MyHeader:I.Z},setup(){const t=(0,T.U)();return{userStore:t}},methods:{checkRating(t,e){return e.rating-t>=0},addToCart(t){this.userStore.addToCart(t.id)},canAddToCart(t){return t.availableInventory>this.cartCount(t.id)},cartCount(t){let e=0;for(let n=0;n<this.userStore.cartItemCount.length;n++)this.userStore.cartItemCount[n]===t&&e++;return e}},computed:{cartItemCount(){return this.userStore.cartItemCount.length||""},sortedProducts(){function t(t,e){return t.title.toLowerCase()<e.title.toLowerCase()?-1:t.title.toLowerCase()>e.title.toLowerCase()?1:0}if(Object.keys(this.products).length>0){let e=this.products.slice(0);return e.sort(t)}return 0}},created:async function(){await S().get("products.json").then((t=>{this.products=t.data.products}))}},H=n(89);const L=(0,H.Z)(x,[["render",k],["__scopeId","data-v-53b37a26"]]);var z=L}}]);
//# sourceMappingURL=main.5f980b3b.js.map