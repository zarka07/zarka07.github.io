"use strict";(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[859,619,688],{8764:function(t,e,a){a.r(e),a.d(e,{default:function(){return i}});var n=a(3396);const o={class:"about"};function d(t,e){return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("h1",{onClick:e[0]||(e[0]=e=>t.$router.go(-1))},"About")])}var s=a(89);const l={},r=(0,s.Z)(l,[["render",d],["__scopeId","data-v-3f381d66"]]);var i=r},9874:function(t,e,a){a.r(e),a.d(e,{default:function(){return T}});var n=a(3396);const o=t=>((0,n.dD)("data-v-5fd7edec"),t=t(),(0,n.Cn)(),t),d={class:"main"},s={class:"main__aside__left"},l=o((()=>(0,n._)("h6",null,"where?",-1))),r=(0,n.uE)('<article class="main__article" data-v-5fd7edec><section id="text" class="main__article__title" data-v-5fd7edec><div data-v-5fd7edec>FULL-CYCLE</div><div data-v-5fd7edec>EVENT AGENCY</div></section><section id="run" class="main__article__runningtext" data-v-5fd7edec><div class="article__runningtext__top marquee marquee__top" data-v-5fd7edec><span class="marq" data-v-5fd7edec>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</span></div><div class="article__runningtext__bottom marquee marquee__bottom" data-v-5fd7edec><span class="marq" data-v-5fd7edec>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</span></div></section><section class="main__article__textRotated" data-v-5fd7edec><img class="rot" src="/assets/images/buttons.svg" alt="buttons" data-v-5fd7edec></section></article>',1),i={class:"main__aside__right"},u=o((()=>(0,n._)("h6",null,"what?",-1))),c={class:"main__aside__bottom"},_=o((()=>(0,n._)("h6",null,"who?",-1)));function m(t,e,a,o,m,v){const p=(0,n.up)("Header"),f=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("header",null,[(0,n.Wm)(p)]),(0,n._)("main",d,[(0,n._)("aside",s,[(0,n.Wm)(f,{to:"/about"},{default:(0,n.w5)((()=>[l])),_:1})]),r,(0,n._)("aside",i,[(0,n.Wm)(f,{to:"/about"},{default:(0,n.w5)((()=>[u])),_:1})]),(0,n._)("aside",c,[(0,n.Wm)(f,{to:"/about"},{default:(0,n.w5)((()=>[_])),_:1})])])],64)}var v=a(7139);const p=t=>((0,n.dD)("data-v-43314996"),t=t(),(0,n.Cn)(),t),f={class:"nav"},w=p((()=>(0,n._)("div",{class:"nav__group53"},[(0,n._)("img",{src:"/assets/images/Group53.svg",alt:"group53"}),(0,n._)("h5",{class:"nav__lang nav__lang__ua"},"UA"),(0,n._)("h5",{class:"nav__lang nav__lang__usa"},"EN")],-1))),g=p((()=>(0,n._)("img",{src:"/assets/images/Union.svg",alt:"union"},null,-1))),h=[g],E=p((()=>(0,n._)("img",{src:"/assets/images/Group176.svg",alt:"two lines"},null,-1))),b={key:0,class:"dropdown"},C=p((()=>(0,n._)("h5",null,"where?",-1))),L=p((()=>(0,n._)("h5",null,"what?",-1))),x=p((()=>(0,n._)("h5",null,"who?",-1)));function D(t,e,a,o,d,s){const l=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("nav",f,[w,(0,n._)("div",{id:"nav__title",style:(0,v.j5)(d.style)},h,4),(0,n._)("button",{type:"button",class:"nav__group176",onClick:e[0]||(e[0]=t=>d.showDropdown=!d.showDropdown)},[E,d.showDropdown?((0,n.wg)(),(0,n.iD)("ul",b,[(0,n._)("li",null,[(0,n.Wm)(l,{to:"/about",class:"dropDownButton"},{default:(0,n.w5)((()=>[C])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(l,{to:"/about",class:"dropDownButton"},{default:(0,n.w5)((()=>[L])),_:1})]),(0,n._)("li",null,[(0,n.Wm)(l,{to:"/about",class:"dropDownButton"},{default:(0,n.w5)((()=>[x])),_:1})])])):(0,n.kq)("",!0)])])}var y={name:"Header-component",data(){return{showDropdown:!1,style:"clip-path:polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"}},mounted(){setTimeout(this.set,1e3)},methods:{set(){this.style="clip-path:polygon(0 0, 100% 0, 100% 100%, 0 100%); display:inline-block"}}},Y=a(89);const k=(0,Y.Z)(y,[["render",D],["__scopeId","data-v-43314996"]]);var W=k,N={name:"HomeView",components:{Header:W},mounted(){let t=document.getElementById("text"),e=7;function a(a){let n,o,d,s=Math.round(e/(window.innerWidth/2)*(window.innerWidth/2-a.clientX)),l=Math.round(e/(window.innerHeight/2)*(window.innerHeight/2-a.clientY)),r="",i=190;for(n=0;n<e;n++)o=Math.round(s/e*n),d=Math.round(l/e*n),(o||d)&&(i-=3*n,r+=o+"px "+d+"px 0 rgb("+i+", "+i+", "+i+"), ");r+=s+"px "+l+"px 1px rgba(0,0,0,.2), "+2*s+"px "+2*l+"px 6px rgba(0,0,0,.3)",t.style.textShadow=r,t.style.webkitTransform="translateZ(0) rotateX("+1.5*l+"deg) rotateY("+1.5*-s+"deg)",t.style.MozTransform="translateZ(0) rotateX("+1.5*l+"deg) rotateY("+1.5*-s+"deg)"}document.addEventListener("mousemove",a,!1)}};const H=(0,Y.Z)(N,[["render",m],["__scopeId","data-v-5fd7edec"]]);var T=H},1361:function(t,e,a){a.r(e),a.d(e,{default:function(){return v}});var n=a(3396),o=a(9242);const d={class:"cont"};function s(t,e,a,s,l,r){const i=(0,n.up)("Header"),u=(0,n.up)("router-view"),c=(0,n.up)("Footer");return(0,n.wg)(),(0,n.iD)("div",d,[(0,n.Wm)(i),(0,n.Wm)(u,null,{default:(0,n.w5)((({Component:e})=>[(0,n.Wm)(o.uT,{name:"slide-fade",mode:"out-in"},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.iD)("div",{class:"slide-fade__component",key:t.$route.name},[((0,n.wg)(),(0,n.j4)((0,n.LL)(e)))]))])),_:2},1024)])),_:1}),(0,n.Wm)(c)])}var l=a(9789),r=a(5496),i=a(9874),u=a(8764),c={name:"project7-component",computed:{Component(){return i["default"]?i["default"]:u["default"]}},components:{Header:l.Z,Footer:r.Z,HomeView:i["default"],AboutView:u["default"]}},_=a(89);const m=(0,_.Z)(c,[["render",s],["__scopeId","data-v-8230f8f6"]]);var v=m}}]);
//# sourceMappingURL=Project7.vue.b145482f.js.map