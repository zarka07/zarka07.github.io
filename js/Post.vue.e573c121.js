"use strict";(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[621],{653:function(e,t,s){s.r(t),s.d(t,{default:function(){return y}});var o=s(3396),i=s(7139);const a={class:"main"},r={class:"postNumber"},n={class:"d-grid gap-2 d-md-flex justify-content-md-center mb-2"},u={key:0,class:"modal"},d={class:"modalContent"};function m(e,t,s,m,c,l){const p=(0,o.up)("Header"),h=(0,o.up)("Agreement"),g=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(p),(0,o._)("div",a,[(0,o._)("div",null,[(0,o._)("div",r,[(0,o._)("h3",null,(0,i.zw)(e.$t("PostVue.Comments"))+" "+(0,i.zw)(e.$t("PostVue.Post"))+" "+(0,i.zw)(e.$route.params.id),1)]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(c.comments,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"comment",key:t.id},[(0,o._)("p",null,[(0,o._)("b",null,(0,i.zw)(e.$t("PostVue.Name"))+":",1),(0,o.Uk)(" "+(0,i.zw)(t.name),1)]),(0,o._)("p",null,[(0,o._)("b",null,(0,i.zw)(e.$t("PostVue.Email"))+":",1),(0,o.Uk)(" "+(0,i.zw)(t.email),1)]),(0,o._)("p",null,[(0,o._)("b",null,(0,i.zw)(e.$t("PostVue.Body"))+":",1),(0,o.Uk)(" "+(0,i.zw)(t.body),1)])])))),128)),(0,o._)("div",n,[(0,o._)("button",{class:"btn btn-success",type:"button",onClick:t[0]||(t[0]=(...e)=>l.showModal&&l.showModal(...e))},(0,i.zw)(e.$t("Agreement.ShowAgreement")),1),(0,o._)("button",{class:"btn btn-primary",type:"button",onClick:t[1]||(t[1]=(...e)=>l.back&&l.back(...e))},(0,i.zw)(e.$t("PostVue.Back")),1)]),this.modalStore.show?((0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("div",d,[(0,o.Wm)(h)])])):(0,o.kq)("",!0)])]),(0,o.Wm)(g)])}var c=s(1937),l=s(1896),p=s(6656),h=s(1375);const g={class:"d-grid gap-2 col-4 mx-auto mt-2"},b=["disabled"];function w(e,t,s,a,r,n){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",{class:"agreement",onScroll:t[0]||(t[0]=(...e)=>n.onBodyScroll&&n.onBodyScroll(...e)),ref:"modal"}," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, ducimus! Culpa incidunt reprehenderit ad iure dicta sit, repellat aperiam a in eos autem repellendus? Labore minus eaque iure reiciendis hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab qui dignissimos recusandae, asperiores soluta libero nulla quis rem sunt saepe? Facilis dignissimos sint porro ex veniam? Fuga, suscipit officia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt harum repellendus molestias dignissimos ut accusantium accusamus ipsum, repellat, aspernatur commodi ducimus dolor autem aperiam iure culpa, facilis odit quia ex? Nesciunt, quo quaerat adipisci ipsam dolore at dolorem necessitatibus perferendis illo facere alias vel aperiam officia sit sunt! Asperiores, fuga enim. Voluptatibus, sit nostrum. Magnam explicabo vitae ad impedit adipisci! Maxime harum architecto iusto quia expedita? Expedita qui quibusdam voluptatum corporis? Deserunt adipisci porro, quidem architecto at provident itaque! In ipsum optio accusantium dolorem molestiae facilis. Assumenda tempora numquam temporibus. Dolorem fugiat ipsam impedit cum ea! Accusantium eius, doloremque, sapiente velit delectus laboriosam dignissimos animi iste debitis possimus provident ut voluptatem quas quaerat maiores. Sunt sapiente soluta nulla corrupti veniam! Aliquid fugiat eum incidunt magni consequatur, neque officiis quibusdam odio maiores a praesentium beatae reiciendis architecto eveniet sed ut, vel animi doloremque cum dignissimos maxime deleniti pariatur. Nobis, illum deleniti! Minus expedita et, voluptatem doloremque pariatur repudiandae fugiat quibusdam maxime ipsa cumque tempore commodi repellendus recusandae odio eum animi? Odit in libero incidunt itaque. Recusandae iure magni reprehenderit et odio. ",544),(0,o._)("div",g,[(0,o._)("button",{class:"btn btn-danger",type:"button",onClick:t[1]||(t[1]=(...e)=>n.closeAgreement&&n.closeAgreement(...e))},(0,i.zw)(e.$t("Agreement.NotAgree")),1),(0,o._)("button",{class:"btn btn-success",type:"button",disabled:!r.isReaded,onClick:t[2]||(t[2]=(...e)=>n.showPost&&n.showPost(...e))},(0,i.zw)(e.$t("Agreement.Agree")),9,b)])])}var v=s(4301);const f=(0,v.Q_)("modal",{state:()=>({show:!1}),actions:{showModal(e){this.show=e}}});var q={name:"agreement-component",data(){return{isReaded:!1}},setup(){const e=f();return{modalStore:e}},methods:{closeAgreement(){this.modalStore.showModal(!1),this.$router.push({name:"PostList"})},showPost(){let e=this.$t("Agreement.Molodec");alert(e+"!"),this.modalStore.showModal(!1)},onBodyScroll(){const e=this.$refs.modal;e.clientHeight+e.scrollTop>=e.scrollHeight&&(this.isReaded=!0)}}},_=s(89);const k=(0,_.Z)(q,[["render",w],["__scopeId","data-v-3f3389fc"]]);var S=k,$={name:"Post-component",components:{Header:p.Z,Footer:h.Z,Agreement:S},mixins:[c.Z,l.Z],setup(){const e=f();return{modalStore:e}},data(){return{isOpen:!1,post:{},comments:{},path:"posts/"+this.$route.params.id,commentsPath:"posts/"+this.$route.params.id+"/comments"}},created(){this.showComments(this.commentsPath)},methods:{async showComments(e){this.comments=await this.get(e)},back(){this.$emit("currentPage",this.$route.params.currentPage),this.$router.go(-1)},showModal(){this.modalStore.showModal(!0)}}};const P=(0,_.Z)($,[["render",m],["__scopeId","data-v-03dc97f6"]]);var y=P},1937:function(e,t,s){var o=s(6265),i=s.n(o),a=s(290),r=s(5954);t["Z"]={data(){const e=(0,a.$)(),t=(0,r.J)();return{loaderStore:e,errorStore:t,loading:!1,statusCode:"",isError:!1}},methods:{async get(e,t=null){return this.loaderStore.showLoader(),await i().get("https://jsonplaceholder.typicode.com/"+e).then((e=>null!==t?t(e.data):e.data)).catch((e=>{if(e.response.status){const t=e.response.status;switch(t){case 400:case 404:this.errorStore.showError(t);break;case 401:case 403:this.errorStore.showError(t);break;case 422:this.errorStore.showError(t);break;case 500:case 501:case 502:case 503:case 504:case 505:this.errorStore.showError(t,"500"),this.$router.go(-1);break;default:e({statusCode:t})}}})).finally((()=>{this.loaderStore.hideLoader()}))}}}},1896:function(e,t){t["Z"]={methods:{async showPosts(e){this.posts=await this.get(e)}},created(){this.showPosts(this.path)}}},5954:function(e,t,s){s.d(t,{J:function(){return i}});var o=s(4301);const i=(0,o.Q_)("error",{state:()=>({isError:!1,statusCode:null}),actions:{showError(e){this.statusCode=e,this.isError=!0}}})}}]);
//# sourceMappingURL=Post.vue.e573c121.js.map