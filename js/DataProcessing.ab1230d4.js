"use strict";(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[678],{7169:function(e,r,a){a.d(r,{Z:function(){return d}});var t=a(3396),s=a(7139);const n={class:"Progress"},l={class:"percent"};function i(e,r,a,i,c,o){return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",n,[(0,t._)("div",{class:"bar",style:(0,s.j5)({background:a.barColor,width:a.barPercent+"%",height:a.barHeight+"px"})},[(0,t._)("div",l,[(0,t._)("b",null,(0,s.zw)(a.barProgress),1)])],4)])])}var c={name:"progress-bar",props:{barColor:{type:String,required:!1,default:""},barPercent:{type:Number,required:!1,default:0},barHeight:{type:Number,required:!1,default:0},barProgress:{type:String,required:!1,default:""}}},o=a(89);const b=(0,o.Z)(c,[["render",i],["__scopeId","data-v-2aac6f50"]]);var d=b},9194:function(e,r,a){a.r(r),a.d(r,{default:function(){return V}});var t=a(3396),s=a(7139),n=a(9242);const l=e=>((0,t.dD)("data-v-14ad8f72"),e=e(),(0,t.Cn)(),e),i={class:"container"},c={class:"dataProcessing"},o=l((()=>(0,t._)("p",null,"Обработка ваших данных:",-1))),b={class:"description"},d={key:0,class:"elem"},u=(0,t.Uk)(" Анализ введенных данных ..... "),g=l((()=>(0,t._)("span",null,"Выполнено!",-1))),k=[u,g],p={key:1,class:"elem"},v=(0,t.Uk)(" Коррекция астрологического знака ..... "),P=l((()=>(0,t._)("span",null,"Выполнено!",-1))),m=[v,P],_={key:2,class:"elem"},h=(0,t.Uk)(" Расчет вариаций ответов ..... "),w=l((()=>(0,t._)("span",null,"Выполнено!",-1))),f=[h,w],y={key:3,class:"elem"},q=(0,t.Uk)(" Генерация предсказания ..... "),D=l((()=>(0,t._)("span",null,"Выполнено!",-1))),C=[q,D],H={key:4,class:"elem"},U=(0,t.Uk)(" Сохранение результата ..... "),Z=l((()=>(0,t._)("span",null,"Выполнено!",-1))),I=[U,Z],x={key:5,class:"elem"},B=(0,t.Uk)(" Поиск свободного оператора ..... "),W=l((()=>(0,t._)("span",null,"Выполнено!",-1))),z=[B,W],F={key:6,class:"elem"},N=(0,t.Uk)(" Начало озвучки и записи аудио - сообщения ..... "),S=l((()=>(0,t._)("span",null,"Выполнено!",-1))),j=[N,S],M={key:7,class:"elem",style:{color:"#b53e42"}},$=l((()=>(0,t._)("b",null,"ИДЁТ ЗАПИСЬ",-1))),A=[$],E={key:8,class:"elem"},G={key:0,class:"submit",style:{"text-align":"center"}};function J(e,r,a,l,u,g){const v=(0,t.up)("Header"),P=(0,t.up)("progress-bar"),h=(0,t.up)("Footer");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(v),(0,t._)("div",i,[(0,t._)("div",c,[o,(0,t.Wm)(P,{barPercent:u.barPercent,barColor:u.barColor,barHeight:u.barHeight,barProgress:u.barProgress},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(u.barProgress),1)])),_:1},8,["barPercent","barColor","barHeight","barProgress"]),(0,t._)("div",b,[u.barPercent>15?((0,t.wg)(),(0,t.iD)("div",d,k)):(0,t.kq)("",!0),u.barPercent>25?((0,t.wg)(),(0,t.iD)("div",p,m)):(0,t.kq)("",!0),u.barPercent>35?((0,t.wg)(),(0,t.iD)("div",_,f)):(0,t.kq)("",!0),u.barPercent>45?((0,t.wg)(),(0,t.iD)("div",y,C)):(0,t.kq)("",!0),u.barPercent>50?((0,t.wg)(),(0,t.iD)("div",H,I)):(0,t.kq)("",!0),u.barPercent>65?((0,t.wg)(),(0,t.iD)("div",x,z)):(0,t.kq)("",!0),u.barPercent>75?((0,t.wg)(),(0,t.iD)("div",F,j)):(0,t.kq)("",!0),u.barPercent>76?((0,t.wg)(),(0,t.iD)("div",M,A)):(0,t.kq)("",!0),100==u.barPercent?((0,t.wg)(),(0,t.iD)("div",E,"ГОТОВО!")):(0,t.kq)("",!0)]),100==u.barPercent?((0,t.wg)(),(0,t.iD)("div",G,[(0,t._)("button",{type:"submit",class:"submitButton",onClick:r[0]||(r[0]=(0,n.iM)((e=>this.$router.push({name:"p4main-get-data"})),["prevent"]))}," ДАЛЕЕ ")])):(0,t.kq)("",!0)])]),(0,t.Wm)(h)])}var K=a(7169),L=a(9789),O=a(5496),Q={name:"data-processing",components:{"progress-bar":K.Z,Header:L.Z,Footer:O.Z},data(){return{barColor:"#419330",barHeight:45,barPercent:0,barProgress:"",text:"Анализ введенных данных"}},methods:{loadBar(){let e=0;if(0==e){e=1;let r=setInterval((()=>{this.barPercent>=100?(clearInterval(r),e=0):this.barPercent++}),50)}}},mounted(){this.loadBar()},watch:{barPercent(){this.barProgress=this.barPercent+"%"}}},R=a(89);const T=(0,R.Z)(Q,[["render",J],["__scopeId","data-v-14ad8f72"]]);var V=T}}]);
//# sourceMappingURL=DataProcessing.ab1230d4.js.map