"use strict";(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[729],{7716:function(t,e,o){o.r(e),o.d(e,{default:function(){return W}});var l=o(3396),n=o(7139),d=o(9242);const i=t=>((0,l.dD)("data-v-4c59788a"),t=t(),(0,l.Cn)(),t),s={class:"main-container"},a=i((()=>(0,l._)("img",{class:"main__logo",src:"/assets/logoCITI.png",alt:"Logo"},null,-1))),c={class:"todo-wrapper"},r={class:"username"},u={class:"todo-title"},m=i((()=>(0,l._)("br",null,null,-1))),h={key:0},g={class:"status busy"},p={key:0},w=["id","onUpdate:modelValue"],_=["for"],k=["onClick"],y=["onClick"],C={key:1},f={class:"status"},v=["id","onUpdate:modelValue"],b=["for"],I={class:"todo-text"},D=["onClick"],L=["onClick"],S={class:"control-buttons"},x={key:0},U={key:1},T=(0,l.Uk)(" Complete "),z=i((()=>(0,l._)("div",{class:"footer"},null,-1)));function E(t,e,o,i,E,V){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",s,[a,(0,l._)("section",c,[(0,l._)("h1",r,"Thank you, "+(0,n.zw)(E.lsUsername||"anonimus")+"!",1),(0,l._)("button",{class:"btn logout",onClick:e[0]||(e[0]=t=>V.logout())},"Tap here to logout"),(0,l._)("h1",u,[(0,l.Uk)((0,n.zw)(V.today.day),1),m,(0,l.Uk)((0,n.zw)(V.today.date),1)]),(0,l._)("form",{onKeydown:e[4]||(e[4]=(0,d.D2)((0,d.iM)((()=>{}),["prevent"]),["enter"]))},[(0,l.wy)((0,l._)("input",{type:"text",class:(0,n.C_)(["input-todo",{active:E.new_todo}]),placeholder:"Enter task","onUpdate:modelValue":e[1]||(e[1]=t=>E.new_todo=t),onKeyup:e[2]||(e[2]=(0,d.D2)(((...t)=>V.addItem&&V.addItem(...t)),["enter"]))},null,34),[[d.nr,E.new_todo]]),(0,l._)("div",{class:(0,n.C_)(["btn btn-add",{active:E.new_todo}]),onClick:e[3]||(e[3]=(...t)=>V.addItem&&V.addItem(...t))}," + ",2)],32),V.pending.length>0?((0,l.wg)(),(0,l.iD)("div",h,[(0,l._)("p",g,[(0,l.Uk)(" You have "+(0,n.zw)(V.pending.length)+" pending item",1),V.pending.length>1?((0,l.wg)(),(0,l.iD)("span",p,"s")):(0,l.kq)("",!0)]),(0,l.Wm)(d.W3,{name:"todo-item",tag:"ul",class:"todo-list"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(V.pending,(t=>((0,l.wg)(),(0,l.iD)("li",{key:t.title},[(0,l.wy)((0,l._)("input",{class:"todo-checkbox",id:"item_"+t.id,"onUpdate:modelValue":e=>t.done=e,type:"checkbox"},null,8,w),[[d.e8,t.done]]),(0,l._)("label",{for:"item_"+t.id},null,8,_),(0,l._)("button",{class:"btn todo-text",onClick:e=>V.editItem(t)},(0,n.zw)(t.title),9,k),(0,l._)("span",{class:"delete",onClick:e=>V.deleteItem(t)},null,8,y)])))),128))])),_:1})])):(0,l.kq)("",!0),V.completed.length>0&&E.showComplete?((0,l.wg)(),(0,l.iD)("div",C,[(0,l._)("p",f,"Completed tasks: "+(0,n.zw)(V.completedPercentage),1),(0,l.Wm)(d.W3,{name:"todo-item",tag:"ul",class:"todo-list archived"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(V.completed,(t=>((0,l.wg)(),(0,l.iD)("li",{key:t.title},[(0,l.wy)((0,l._)("input",{class:"todo-checkbox",id:"item_"+t.id,"onUpdate:modelValue":e=>t.done=e,type:"checkbox"},null,8,v),[[d.e8,t.done]]),(0,l._)("label",{for:"item_"+t.id},null,8,b),(0,l._)("span",I,(0,n.zw)(t.title),1),(0,l._)("span",{class:"edit",onClick:e=>V.editItem(t)},null,8,D),(0,l._)("span",{class:"delete",onClick:e=>V.deleteItem(t)},null,8,L)])))),128))])),_:1})])):(0,l.kq)("",!0),(0,l._)("div",S,[V.completed.length>0?((0,l.wg)(),(0,l.iD)("div",{key:0,class:"btn btn-secondary",onClick:e[5]||(e[5]=(...t)=>V.toggleShowComplete&&V.toggleShowComplete(...t))},[E.showComplete?((0,l.wg)(),(0,l.iD)("span",U,"Hide")):((0,l.wg)(),(0,l.iD)("span",x,"Show")),T])):(0,l.kq)("",!0),E.todoList.length>0?((0,l.wg)(),(0,l.iD)("div",{key:1,class:"btn btn-secondary",onClick:e[6]||(e[6]=(...t)=>V.clearAll&&V.clearAll(...t))}," Clear All ")):(0,l.kq)("",!0)])])]),z],64)}var V={name:"todo-component",data(){return{lsUsername:"",username:this.lsUsername?JSON.parse(this.lsUsername):{},todoList:[],indexEditTodo:null,new_todo:"",showComplete:!1}},mounted(){this.lsUsername=localStorage.getItem("username"),this.getTodos()},watch:{todoList:{handler:function(t){localStorage.setItem("todo_list",JSON.stringify(t))},deep:!0}},methods:{getTodos(){localStorage.getItem("todo_list")&&(this.todoList=JSON.parse(localStorage.getItem("todo_list")))},addItem(){null===this.indexEditTodo?this.todoList.unshift({id:this.todoList.length,title:this.new_todo,done:!1}):(this.todoList[this.indexEditTodo].title=this.new_todo,this.indexEditTodo=null),this.new_todo=""},editItem(t){let e=this.todoList.indexOf(t);this.new_todo=this.todoList[e].title,this.indexEditTodo=e},deleteItem(t){this.todoList.splice(this.todoList.indexOf(t),1)},toggleShowComplete(){this.showComplete=!this.showComplete},clearAll(){this.todoList=[]},logout(){localStorage.removeItem("auth"),localStorage.removeItem("username"),localStorage.removeItem("todo_list"),this.$router.push({name:"LoginView"}),location.reload()}},computed:{pending:function(){return this.todoList.filter((function(t){return!t.done}))},completed:function(){return this.todoList.filter((function(t){return t.done}))},completedPercentage:function(){return Math.floor(this.completed.length/this.todoList.length*100)+"%"},today:function(){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],e=new Date,o=e.getDate(),l=e.getMonth()+1,n=e.getFullYear();return o<10&&(o="0"+o),l<10&&(l="0"+l),e={day:t[e.getDay()],date:l+"-"+o+"-"+n},e}}},q=o(89);const O=(0,q.Z)(V,[["render",E],["__scopeId","data-v-4c59788a"]]);var W=O}}]);
//# sourceMappingURL=ToDoView.vue.4fc4f8b7.js.map