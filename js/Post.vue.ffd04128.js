"use strict";(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[621],{8968:function(e,i,t){t.r(i),t.d(i,{default:function(){return x}});var a=t(3396),s=t(7139),o=t(4870),u=t(9789),n=t(5496),r=t(4301);const l=(0,r.Q_)("modal",{state:()=>({show:!1}),actions:{showModal(e){this.show=e}}});var c=t(678);const m={class:"d-grid gap-2 col-4 mx-auto mt-2"},d=["disabled"];var p={setup(e){const i=l(),t=(0,c.tv)();let u=(0,o.iH)(!1);const n=(0,o.iH)(null);function r(){i.showModal(!1),t.push({name:"PostList"})}function p(){let e='$t("Agreement.Molodec")';alert(e+"!"),i.showModal(!1)}function b(){n.value.clientHeight+n.value.scrollTop>=n.value.scrollHeight&&(u.value=!0)}return(e,i)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",{class:"agreement",onScroll:b,ref_key:"modal",ref:n}," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, ducimus! Culpa incidunt reprehenderit ad iure dicta sit, repellat aperiam a in eos autem repellendus? Labore minus eaque iure reiciendis hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab qui dignissimos recusandae, asperiores soluta libero nulla quis rem sunt saepe? Facilis dignissimos sint porro ex veniam? Fuga, suscipit officia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt harum repellendus molestias dignissimos ut accusantium accusamus ipsum, repellat, aspernatur commodi ducimus dolor autem aperiam iure culpa, facilis odit quia ex? Nesciunt, quo quaerat adipisci ipsam dolore at dolorem necessitatibus perferendis illo facere alias vel aperiam officia sit sunt! Asperiores, fuga enim. Voluptatibus, sit nostrum. Magnam explicabo vitae ad impedit adipisci! Maxime harum architecto iusto quia expedita? Expedita qui quibusdam voluptatum corporis? Deserunt adipisci porro, quidem architecto at provident itaque! In ipsum optio accusantium dolorem molestiae facilis. Assumenda tempora numquam temporibus. Dolorem fugiat ipsam impedit cum ea! Accusantium eius, doloremque, sapiente velit delectus laboriosam dignissimos animi iste debitis possimus provident ut voluptatem quas quaerat maiores. Sunt sapiente soluta nulla corrupti veniam! Aliquid fugiat eum incidunt magni consequatur, neque officiis quibusdam odio maiores a praesentium beatae reiciendis architecto eveniet sed ut, vel animi doloremque cum dignissimos maxime deleniti pariatur. Nobis, illum deleniti! Minus expedita et, voluptatem doloremque pariatur repudiandae fugiat quibusdam maxime ipsa cumque tempore commodi repellendus recusandae odio eum animi? Odit in libero incidunt itaque. Recusandae iure magni reprehenderit et odio. ",544),(0,a._)("div",m,[(0,a._)("button",{class:"btn btn-danger",type:"button",onClick:r},(0,s.zw)(e.$t("Agreement.NotAgree")),1),(0,a._)("button",{class:"btn btn-success",type:"button",disabled:!(0,o.SU)(u),onClick:p},(0,s.zw)(e.$t("Agreement.Agree")),9,d)])]))}},b=t(89);const v=(0,b.Z)(p,[["__scopeId","data-v-21e2b6a2"]]);var g=v,f=t(6265),h=t.n(f),w=t(1702),q=t(5954);const _={class:"postNumber"},k={class:"d-grid gap-2 d-md-flex justify-content-md-center mb-2"},y={key:0,class:"modal"},z={class:"modalContent"};var C={emits:["currentPage"],setup(e,{emit:i}){const t=(0,q.J)(),r=(0,w.$)(),m=(0,c.tv)(),d=(0,c.yj)();let p=(0,o.iH)([]);const b="posts/"+d.params.id+"/comments",v=l();async function f(e){p.value=await x(e)}function C(){i("currentPage",d.params.currentPage),m.go(-1)}function P(){v.showModal(!0)}async function x(e,i=null){return r.showLoader(),await h().get("https://jsonplaceholder.typicode.com/"+e).then((e=>null!==i?i(e.data):e.data)).catch((e=>{t.showError(e.statusCode)})).finally((()=>{r.hideLoader()}))}return(0,a.bv)((()=>{f(b)})),(e,i)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(u.Z),(0,a._)("div",null,[(0,a._)("div",null,[(0,a._)("div",_,[(0,a._)("h3",null,(0,s.zw)(e.$t("PostVue.Comments"))+" "+(0,s.zw)(e.$t("PostVue.Post"))+" "+(0,s.zw)((0,o.SU)(d).params.id),1)]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,o.SU)(p),(i=>((0,a.wg)(),(0,a.iD)("div",{class:"comment",key:i.id},[(0,a._)("p",null,[(0,a._)("b",null,(0,s.zw)(e.$t("PostVue.Name"))+":",1),(0,a.Uk)(" "+(0,s.zw)(i.name),1)]),(0,a._)("p",null,[(0,a._)("b",null,(0,s.zw)(e.$t("PostVue.Email"))+":",1),(0,a.Uk)(" "+(0,s.zw)(i.email),1)]),(0,a._)("p",null,[(0,a._)("b",null,(0,s.zw)(e.$t("PostVue.Body"))+":",1),(0,a.Uk)(" "+(0,s.zw)(i.body),1)])])))),128)),(0,a._)("div",k,[(0,a._)("button",{class:"btn btn-success",type:"button",onClick:P},(0,s.zw)(e.$t("Agreement.ShowAgreement")),1),(0,a._)("button",{class:"btn btn-primary",type:"button",onClick:C},(0,s.zw)(e.$t("PostVue.Back")),1)]),(0,o.SU)(v).show?((0,a.wg)(),(0,a.iD)("div",y,[(0,a._)("div",z,[(0,a.Wm)(g)])])):(0,a.kq)("",!0)])]),(0,a.Wm)(n.Z)]))}};const P=(0,b.Z)(C,[["__scopeId","data-v-a01fb748"]]);var x=P},5954:function(e,i,t){t.d(i,{J:function(){return s}});var a=t(4301);const s=(0,a.Q_)("error",{state:()=>({isError:!1,statusCode:null}),actions:{showError(e){this.statusCode=e,this.isError=!0}}})}}]);
//# sourceMappingURL=Post.vue.ffd04128.js.map