"use strict";(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[927],{9815:function(l,a,t){t.r(a),t.d(a,{default:function(){return $}});var s=t(3396);const r=l=>((0,s.dD)("data-v-08a63637"),l=l(),(0,s.Cn)(),l),e={class:"d-flex flex-row mt-3 mb-3 justify-content-between"},c=r((()=>(0,s._)("h3",{class:"m-3"},"Счет",-1))),n=r((()=>(0,s._)("i",{class:"bi bi-bootstrap-reboot"},null,-1))),i=[n],o=r((()=>(0,s._)("hr",null,null,-1))),d={class:"row m-3 justify-content-evenly flex-sm-wrap flex-md-wrap"};function m(l,a,t,r,n,m){const u=(0,s.up)("BillComponent"),p=(0,s.up)("CurrencyComponent");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",e,[c,(0,s._)("button",{class:"reload m-2",onClick:a[0]||(a[0]=(...l)=>m.refresh&&m.refresh(...l))},i)]),o,(0,s._)("div",d,[(0,s.Wm)(u,{class:"col-xl-4 col-lg-4 col-md-4 col-sm-10 p-4 mb-4 bg-gradient bill",billParams:n.billParams},null,8,["billParams"]),(0,s.Wm)(p,{class:"col-xl-6 col-lg-6 col-md-6 col-sm-10 p-4 mb-4 bg-gradient currency",billParams:n.billParams,rateDate:n.date},null,8,["billParams","rateDate"])])],64)}var u=t(7139);const p=l=>((0,s.dD)("data-v-6f999c2f"),l=l(),(0,s.Cn)(),l),h={key:0,"aria-hidden":"true"},b=(0,s.uE)('<div class="m-1" data-v-6f999c2f><p class="card-text placeholder-glow" data-v-6f999c2f><span class="placeholder col-7 mb-3" data-v-6f999c2f></span><span class="placeholder col-4 mb-3" data-v-6f999c2f></span><span class="placeholder col-4 mb-3" data-v-6f999c2f></span><span class="placeholder col-6 mb-3" data-v-6f999c2f></span><span class="placeholder col-8 mb-3" data-v-6f999c2f></span></p><hr data-v-6f999c2f></div>',1),v=[b],_={key:1},f=p((()=>(0,s._)("span",{class:"m-2 text-light"},"Счет в валюте",-1))),g={class:"m-2 currency-line"},P={class:"text-light"},w={class:"m-2 currency-line"},y={class:"text-light"},S=p((()=>(0,s._)("hr",null,null,-1)));function x(l,a,t,r,e,c){return t.billParams.loading?((0,s.wg)(),(0,s.iD)("div",h,v)):((0,s.wg)(),(0,s.iD)("div",_,[(0,s._)("div",null,[f,(0,s._)("p",g,[(0,s._)("span",P,(0,u.zw)(t.billParams.from)+": "+(0,u.zw)(c.userBillFrom)+" ₴ ",1)]),(0,s._)("p",w,[(0,s._)("span",y,(0,u.zw)(t.billParams.to)+": "+(0,u.zw)(c.userBillTo||"Нет соединения с сервером")+" $ ",1)]),S])]))}var D=t(5635),E={name:"bill-component",props:["billParams"],setup(){const l=(0,D.S)();return{crmStore:l}},computed:{isBillExist(){return!!this.crmStore.GET_USER_BILL&&this.crmStore.GET_USER_BILL},userBillFrom(){return this.isBillExist?this.crmStore.GET_USER_BILL:" ---"},userBillTo(){return this.isBillExist&&0!=this.billParams.result?(this.crmStore.GET_USER_BILL/(this.crmStore.GET_USER_BILL/this.billParams.result)).toPrecision(3):" ---"}}},B=t(89);const C=(0,B.Z)(E,[["render",x],["__scopeId","data-v-6f999c2f"]]);var L=C;const k=l=>((0,s.dD)("data-v-2b425926"),l=l(),(0,s.Cn)(),l),I={key:0,"aria-hidden":"true"},z=(0,s.uE)('<div class="m-1" data-v-2b425926><p class="card-text placeholder-glow" data-v-2b425926><span class="placeholder col-5" data-v-2b425926></span><span class="placeholder col-9 ms-2 mt-4" data-v-2b425926></span><span class="placeholder col-12 ms-2 mt-2" data-v-2b425926></span></p></div><hr data-v-2b425926>',2),T=[z],U={key:1},G=k((()=>(0,s._)("div",{class:"mb-2"},[(0,s._)("span",{class:"text-light"},"Курс валют")],-1))),R={class:"text-light table"},Z=k((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{scope:"col"},"Валюта"),(0,s._)("th",{scope:"col"},"Курс"),(0,s._)("th",{scope:"col"},"Дата")])],-1)));function j(l,a,t,r,e,c){return t.billParams.loading?((0,s.wg)(),(0,s.iD)("div",I,T)):((0,s.wg)(),(0,s.iD)("div",U,[G,(0,s._)("table",R,[Z,(0,s._)("tbody",null,[(0,s._)("tr",null,[(0,s._)("td",null,(0,u.zw)(t.billParams.to),1),(0,s._)("td",null,(0,u.zw)((100/t.billParams.result).toPrecision(4)||"Нет соединения с сервером"),1),(0,s._)("td",null,(0,u.zw)(t.rateDate||c.date),1)])])])]))}var F={name:"currency-component",props:["billParams","rateDate"],computed:{date(){return(new Date).toLocaleDateString()}}};const H=(0,B.Z)(F,[["render",j],["__scopeId","data-v-2b425926"]]);var W=H,A={name:"home-component",components:{BillComponent:L,CurrencyComponent:W},setup(){const l=(0,D.S)();return{crmStore:l}},data(){return{currency:null,date:"",billParams:{loading:!1,from:"UAH",to:"USD",result:0}}},methods:{async refresh(){this.billParams.loading=!0,this.currency=await this.crmStore.getCurrency(this.billParams.to,this.billParams.from),this.billParams.loading=!1}},async mounted(){this.currency=await this.crmStore.getCurrency(this.billParams.to,this.billParams.from),this.billParams.result=this.currency.result,this.date=this.currency.date,this.billParams.loading=!1}};const Y=(0,B.Z)(A,[["render",m],["__scopeId","data-v-08a63637"]]);var $=Y}}]);
//# sourceMappingURL=Home.vue.0ed3b6d5.js.map