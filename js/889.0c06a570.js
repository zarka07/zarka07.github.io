"use strict";(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[889],{9889:function(e,r,a){a.r(r),a.d(r,{default:function(){return xe}});var t=a(3396);const s={class:"container-fluid"},n={class:"row"},o={class:"col-xs-12 col-md-12 form"};function i(e,r,a,i,l,d){return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",s,[(0,t._)("div",n,[(0,t._)("div",o,[l.selected?((0,t.wg)(),(0,t.j4)((0,t.LL)(l.selected),{key:0,onSignIn:d.signIn,onBack:d.back,onShowUser:d.toUser},null,8,["onSignIn","onBack","onShowUser"])):(0,t.kq)("",!0)])])])])}var l=a(7139),d=a(9242);const c=e=>((0,t.dD)("data-v-cf2744f2"),e=e(),(0,t.Cn)(),e),u={class:"form-body"},m={class:"row"},$={class:"form-holder"},v={class:"form-content"},p={class:"form-items"},f=c((()=>(0,t._)("h3",null,"Sign Up",-1))),g={class:"requires-validation",novalidate:""},h={class:"col-md-12"},w={style:{color:"red"},class:"error-msg"},y={class:"col-md-12"},_={style:{color:"red"},class:"error-msg"},b=(0,t.uE)('<div class="col-md-12" data-v-cf2744f2><select class="form-select mt-3" required data-v-cf2744f2><option selected disabled value="" data-v-cf2744f2>Gender</option><option value="Male" data-v-cf2744f2>Male</option><option value="Femail" data-v-cf2744f2>Femail</option></select></div>',1),x={class:"col-md-12"},U={style:{color:"red"},class:"error-msg"},k={class:"form-check",style:{"margin-top":"20px"}},S=c((()=>(0,t._)("label",{class:"form-check-label"},"I confirm that all data are correct",-1))),z={class:"form-button mt-3"},C={class:"form-button mt-3 account"},I=(0,t.Uk)(" Already have an account? ");function j(e,r,a,s,n,o){return(0,t.wg)(),(0,t.iD)("div",u,[(0,t._)("div",m,[(0,t._)("div",$,[(0,t._)("div",v,[(0,t._)("div",p,[f,(0,t._)("form",g,[(0,t._)("div",h,[(0,t._)("div",{class:(0,l.C_)({error:s.v$.username.$errors.length})},[(0,t.wy)((0,t._)("input",{class:"form-control",type:"text","onUpdate:modelValue":r[0]||(r[0]=e=>n.username=e),placeholder:"Username",autocomplete:"username"},null,512),[[d.nr,n.username]]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(s.v$.username.$errors,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"input-errors",key:e.$uid},[(0,t._)("div",w,(0,l.zw)(e.$message),1)])))),128))],2)]),(0,t._)("div",y,[(0,t._)("div",{class:(0,l.C_)({error:s.v$.email.$errors.length})},[(0,t.wy)((0,t._)("input",{class:"form-control",type:"email","onUpdate:modelValue":r[1]||(r[1]=e=>n.email=e),placeholder:"E-mail",autocomplete:"email"},null,512),[[d.nr,n.email]]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(s.v$.email.$errors,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"input-errors",key:e.$uid},[(0,t._)("div",_,(0,l.zw)(e.$message),1)])))),128))],2)]),b,(0,t._)("div",x,[(0,t._)("div",{class:(0,l.C_)({error:s.v$.password.$errors.length})},[(0,t.wy)((0,t._)("input",{class:"form-control",type:"password","onUpdate:modelValue":r[2]||(r[2]=e=>n.password=e),placeholder:"Password (at least 8 long)",autocomplete:"new-password"},null,512),[[d.nr,n.password]]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(s.v$.password.$errors,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"input-errors",key:e.$uid},[(0,t._)("div",U,(0,l.zw)(e.$message),1)])))),128))],2)]),(0,t._)("div",k,[(0,t._)("div",{class:(0,l.C_)({error:s.v$.agree.$errors.length})},[(0,t.wy)((0,t._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":r[3]||(r[3]=e=>n.agree=e),onChange:r[4]||(r[4]=e=>s.v$.agree.$touch())},null,544),[[d.e8,n.agree]]),S],2)]),(0,t._)("div",z,[(0,t._)("button",{type:"submit",onClick:r[5]||(r[5]=(0,d.iM)(((...e)=>o.signUp&&o.signUp(...e)),["prevent"])),class:"btn btn-success"},"Sign Up ")]),(0,t._)("div",C,[I,(0,t._)("button",{type:"submit",onClick:r[6]||(r[6]=(0,d.iM)(((...e)=>o.signIn&&o.signIn(...e)),["prevent"])),class:"btn account btn-link"},"Sign In ")])])])])])])])}var D=a(4573),A=(a(1703),a(4870));function q(e){return"function"===typeof e}function V(e){return null!==e&&"object"===typeof e&&!Array.isArray(e)}function E(e){return q(e.$validator)?Object.assign({},e):{$validator:e}}function M(e){return"object"===typeof e?e.$valid:e}function O(e){return e.$validator||e}function Z(e,r){if(!V(e))throw new Error('[@vuelidate/validators]: First parameter to "withParams" should be an object, provided '+typeof e);if(!V(r)&&!q(r))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const a=E(r);return a.$params=Object.assign({},a.$params||{},e),a}function L(e,r){if(!q(e)&&"string"!==typeof(0,A.SU)(e))throw new Error('[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided '+typeof e);if(!V(r)&&!q(r))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const a=E(r);return a.$message=e,a}function H(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const a=E(e);return Object.assign({},a,{$async:!0,$watchTargets:r})}function K(e){return{$validator(r){for(var a=arguments.length,t=new Array(a>1?a-1:0),s=1;s<a;s++)t[s-1]=arguments[s];return(0,A.SU)(r).reduce(((r,a)=>{const s=Object.entries(a).reduce(((r,s)=>{let[n,o]=s;const i=e[n]||{},l=Object.entries(i).reduce(((e,r)=>{let[s,i]=r;const l=O(i),d=l.call(this,o,a,...t),c=M(d);if(e.$data[s]=d,e.$data.$invalid=!c||!!e.$data.$invalid,e.$data.$error=e.$data.$invalid,!c){let r=i.$message||"";const a=i.$params||{};"function"===typeof r&&(r=r({$pending:!1,$invalid:!c,$params:a,$model:o,$response:d})),e.$errors.push({$property:n,$message:r,$params:a,$response:d,$model:o,$pending:!1,$validator:s})}return{$valid:e.$valid&&c,$data:e.$data,$errors:e.$errors}}),{$valid:!0,$data:{},$errors:[]});return r.$data[n]=l.$data,r.$errors[n]=l.$errors,{$valid:r.$valid&&l.$valid,$data:r.$data,$errors:r.$errors}}),{$valid:!0,$data:{},$errors:{}});return{$valid:r.$valid&&s.$valid,$data:r.$data.concat(s.$data),$errors:r.$errors.concat(s.$errors)}}),{$valid:!0,$data:[],$errors:[]})},$message:e=>{let{$response:r}=e;return r?r.$errors.map((e=>Object.values(e).map((e=>e.map((e=>e.$message)))).reduce(((e,r)=>e.concat(r)),[]))):[]}}}const P=e=>{if(e=(0,A.SU)(e),Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===typeof e){for(let r in e)return!0;return!1}return!!String(e).length},Y=e=>(e=(0,A.SU)(e),Array.isArray(e)?e.length:"object"===typeof e?Object.keys(e).length:String(e).length);function F(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return e=>(e=(0,A.SU)(e),!P(e)||r.every((r=>r.test(e))))}A.SU,F(/^[a-zA-Z]*$/),F(/^[a-zA-Z0-9]*$/),F(/^\d*(\.\d+)?$/);const T=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var B=F(T),N={$validator:B,$message:"Value is not a valid email address",$params:{type:"email"}};function G(e){return r=>!P(r)||Y(r)>=(0,A.SU)(e)}function J(e){return{$validator:G(e),$message:e=>{let{$params:r}=e;return`This field should be at least ${r.min} long`},$params:{min:e,type:"minLength"}}}function Q(e){return"string"===typeof e&&(e=e.trim()),P(e)}var R={$validator:Q,$message:"Value is required",$params:{type:"required"}};const W=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;F(W);F(/(^[0-9]*$)|(^-[0-9]+$)/),F(/^[-]?\d*(\.\d+)?$/);var X=a(3053),ee={name:"signup-component",setup(){return{v$:(0,X.ZP)()}},data(){const e=(0,D.U)();return{mainStore:e,username:"",email:"",password:"",agree:!1}},validations(){return{email:{email:N,required:R},password:{required:R,minLength:J(8)},username:{required:R},agree:{checked:e=>e}}},emits:["sign-in"],methods:{async signUp(){if(this.v$.$invalid)return void this.v$.$touch();const e=await this.v$.$validate();if(!e)return;const r={email:this.email,password:this.password,username:this.username};try{this.mainStore.addUser(r),this.$emit("showUser"),console.log("show user")}catch(a){console.log(a)}},signIn(){this.$emit("sign-in")}}},re=a(89);const ae=(0,re.Z)(ee,[["render",j],["__scopeId","data-v-cf2744f2"]]);var te=ae;const se={class:"form-body"},ne={class:"row"},oe={class:"form-holder"},ie={class:"form-content"},le={class:"form-items"},de=(0,t._)("h3",null,"Sign In",-1),ce={class:"requires-validation",novalidate:""},ue={class:"col-md-12"},me={style:{color:"red"},class:"error-msg"},$e={class:"col-md-12"},ve={style:{color:"red"},class:"error-msg"},pe={class:"form-button mt-3"},fe={class:"form-button mt-3"};function ge(e,r,a,s,n,o){return(0,t.wg)(),(0,t.iD)("div",se,[(0,t._)("div",null,[(0,t._)("div",ne,[(0,t._)("div",oe,[(0,t._)("div",ie,[(0,t._)("div",le,[de,(0,t._)("form",ce,[(0,t._)("div",ue,[(0,t._)("div",{class:(0,l.C_)({error:s.v$.email.$errors.length})},[(0,t.wy)((0,t._)("input",{class:"form-control",type:"email","onUpdate:modelValue":r[0]||(r[0]=e=>n.email=e),placeholder:"E-mail",autocomplete:"email"},null,512),[[d.nr,n.email]]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(s.v$.email.$errors,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"input-errors",key:e.$uid},[(0,t._)("div",me,(0,l.zw)(e.$message),1)])))),128))],2)]),(0,t._)("div",$e,[(0,t._)("div",{class:(0,l.C_)({error:s.v$.password.$errors.length})},[(0,t.wy)((0,t._)("input",{class:"form-control",type:"password","onUpdate:modelValue":r[1]||(r[1]=e=>n.password=e),placeholder:"Password",autocomplete:"current-password",required:""},null,512),[[d.nr,n.password]]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(s.v$.password.$errors,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"input-errors",key:e.$uid},[(0,t._)("div",ve,(0,l.zw)(e.$message),1)])))),128))],2)]),(0,t._)("div",pe,[(0,t._)("button",{type:"button",onClick:r[2]||(r[2]=(0,d.iM)((r=>e.$emit("back")),["prevent"])),class:"btn btn-primary"},"back")]),(0,t._)("div",fe,[(0,t._)("button",{type:"submit",onClick:r[3]||(r[3]=(0,d.iM)(((...e)=>o.signIn&&o.signIn(...e)),["prevent"])),class:"btn btn-success"},"Sign in")])])])])])])])])}var he={name:"signin-component",setup(){return{v$:(0,X.ZP)()}},data(){const e=(0,D.U)();return{mainStore:e,email:"",password:""}},validations(){return{email:{email:N,required:R},password:{required:R,minLength:J(8)}}},emits:["showUser","back"],methods:{async signIn(){if(this.v$.$invalid)return void this.v$.$touch();const e=await this.v$.$validate();if(!e)return;const r={email:this.email,password:this.password};try{this.mainStore.signIn(r),this.$emit("showUser")}catch(a){console.log(a)}}}};const we=(0,re.Z)(he,[["render",ge]]);var ye=we,_e={components:{signup:te,signin:ye},name:"AuthorizationItem",emits:["showUser"],data(){return{items:["signup","signin"],selected:"signup",articles:[]}},computed:{currentTabComponent:function(){return this.selected.toLowerCase()}},methods:{back(){"signin"==this.selected&&(this.selected="signup")},signIn(){"signup"==this.selected&&(this.selected="signin")},toUser(){this.$router.push("/user")}}};const be=(0,re.Z)(_e,[["render",i]]);var xe=be}}]);
//# sourceMappingURL=889.0c06a570.js.map