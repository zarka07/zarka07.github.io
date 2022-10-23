"use strict";(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[424],{9129:function(e,t,r){r.r(t),r.d(t,{default:function(){return X}});var a=r(3396);const o={class:"p-4 categories"},i=(0,a._)("div",{class:""},[(0,a._)("h3",null,"Categories")],-1),s=(0,a._)("hr",null,null,-1),c={class:"row justify-content-evenly"};function n(e,t,r,n,l,d){const u=(0,a.up)("AddCategory"),m=(0,a.up)("EditCategory");return(0,a.wg)(),(0,a.iD)("div",o,[i,s,(0,a._)("section",null,[(0,a._)("div",c,[(0,a.Wm)(u,{onCategoryAdded:d.updateCategories},null,8,["onCategoryAdded"]),((0,a.wg)(),(0,a.j4)(m,{categories:d.categories,key:l.updateCount},null,8,["categories"]))])])])}var l=r(9242);const d={class:"create border border-success col-xl-5 col-lg-5 col-md-5 col-sm-5 bg-info flex-wrap m-2"},u={class:"p-2"},m=(0,a._)("div",{class:"mb-4"},[(0,a._)("h4",null,"Create")],-1),g={class:"form-floating mb-3"},y=(0,a._)("label",{for:"floatingName"},"Title",-1),p={class:"form-floating mb-3"},h=(0,a._)("label",{for:"floatingLimit"},"Limit",-1),b={key:0,class:"error"},v={key:0,type:"submit",class:"btn btn-success shadow-sm rounded mb-2"},f=(0,a.Uk)(" CREATE "),w=(0,a._)("i",{class:"bi bi-send float-end ms-2"},null,-1),C=[f,w];function _(e,t,r,o,i,s){return(0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("div",u,[m,(0,a._)("form",{onSubmit:t[2]||(t[2]=(0,l.iM)(((...e)=>s.addCategory&&s.addCategory(...e)),["prevent"]))},[(0,a._)("div",g,[(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"floatingName",placeholder:"Enter title","onUpdate:modelValue":t[0]||(t[0]=t=>e.categoryName=t)},null,512),[[l.nr,e.categoryName]]),y]),(0,a._)("div",p,[(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"floatingLimit",placeholder:"Limit",min:"1","onUpdate:modelValue":t[1]||(t[1]=t=>e.categoryLimit=t)},null,512),[[l.nr,e.categoryLimit]]),h,o.v$.categoryLimit.required?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",b,"Enter limit"))]),o.v$.$invalid?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("button",v,C))],32)])])}var $=r(5635),k=r(3053),L=r(9117),N={name:"add-category",emits:["categoryAdded"],setup(){const e=(0,$.S)();return{crmStore:e,v$:(0,k.ZP)()}},data:()=>({categoryName:"",categoryLimit:""}),validations(){return{categoryName:{required:L.C1},categoryLimit:{required:L.C1}}},methods:{async addCategory(){if(this.v$.$invalid)for(let e of this.v$.$silentErrors)this.$toast.warning(e.$message);else await this.crmStore.setNewCategory({name:this.categoryName,limit:this.categoryLimit}).then((e=>{this.$toast.success(`Category ${e.newCategory.categoryName} added`),this.categoryName="",this.categoryLimit="",this.v$.$reset(),this.$emit("categoryAdded")}))}}},S=r(89);const D=(0,S.Z)(N,[["render",_]]);var x=D,E=r(7139);const A={key:0,class:"edit border border-success col-xl-5 col-lg-5 col-md-5 col-sm-5 bg-light flex-wrap m-2"},U={class:"p-2"},q=(0,a._)("div",{class:"mb-4"},[(0,a._)("h4",null,"Edit")],-1),V={class:"mb-2"},Z=(0,a._)("option",{disabled:""},"Categories:",-1),M=["value"],P=(0,a._)("label",{for:"selectCategory"},"Choose the category",-1),T={class:"mb-2"},j=["placeholder"],I={class:"mb-4"},O=["placeholder"],Y={key:0,type:"submit",class:"btn btn-success shadow-sm rounded mb-2"},z=(0,a.Uk)(" UPDATE "),H=(0,a._)("i",{class:"bi bi-send float-end ms-2"},null,-1),J=[z,H],K={key:1,class:"text-center col-xl-5 col-lg-5 col-md-5 col-sm-5 flex-wrap"};function R(e,t,r,o,i,s){return r.categories.length?((0,a.wg)(),(0,a.iD)("div",A,[(0,a._)("div",U,[q,(0,a._)("form",{onSubmit:t[3]||(t[3]=(0,l.iM)(((...e)=>s.submit&&s.submit(...e)),["prevent"]))},[(0,a._)("div",V,[(0,a.wy)((0,a._)("select",{class:"form-select",id:"selectCategory","aria-label":"Default select example","onUpdate:modelValue":t[0]||(t[0]=e=>i.current=e)},[Z,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.categories,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.id,value:e},(0,E.zw)(e.categoryName),9,M)))),128))],512),[[l.bM,i.current]]),P]),(0,a._)("div",T,[(0,a.wy)((0,a._)("input",{type:"text",id:"name",placeholder:i.current.categoryName,"onUpdate:modelValue":t[1]||(t[1]=e=>i.current.categoryName=e)},null,8,j),[[l.nr,i.current.categoryName]])]),(0,a._)("div",I,[(0,a.wy)((0,a._)("input",{id:"limit",type:"number",placeholder:i.current.categoryLimit,"onUpdate:modelValue":t[2]||(t[2]=e=>i.current.categoryLimit=e)},null,8,O),[[l.nr,i.current.categoryLimit]])]),i.current.hasOwnProperty("categoryLimit")?((0,a.wg)(),(0,a.iD)("button",Y,J)):(0,a.kq)("",!0)],32)])])):((0,a.wg)(),(0,a.iD)("p",K,"You didn't add categories"))}var W={name:"edit-category",props:["categories"],setup(){const e=(0,$.S)();return{crmStore:e}},data(){return{current:{}}},methods:{submit(){try{this.crmStore.updateCategory(this.current),this.current={},this.$toast.success("Категория обновлена!")}catch(e){this.$toast.warning(e.message)}}},mounted(){this.categories.length&&(this.current=this.categories[0].id)}};const B=(0,S.Z)(W,[["render",R]]);var F=B,G={name:"categories-component",setup(){const e=(0,$.S)();return{crmStore:e}},components:{AddCategory:x,EditCategory:F},data(){return{isLoaded:!0,updateCount:0}},methods:{updateCategories(){this.updateCount++,this.crmStore.categories=JSON.parse(localStorage.getItem("categories"))||[]}},computed:{categories(){return this.crmStore._userInfo.categories}},mounted(){this.updateCategories()}};const Q=(0,S.Z)(G,[["render",n]]);var X=Q}}]);
//# sourceMappingURL=Categories.vue.5b05b15c.js.map