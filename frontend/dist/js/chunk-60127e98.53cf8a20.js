(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60127e98","chunk-579dc055"],{"0366":function(t,e,r){var n=r("1c0b");t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},1276:function(t,e,r){"use strict";var n=r("d784"),o=r("44e7"),i=r("825a"),a=r("1d80"),s=r("4840"),l=r("8aa5"),c=r("50c4"),u=r("14c3"),f=r("9263"),d=r("9f7f"),m=r("d039"),g=d.UNSUPPORTED_Y,p=[].push,h=Math.min,v=4294967295,b=!m((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));n("split",(function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n=String(a(this)),i=void 0===r?v:r>>>0;if(0===i)return[];if(void 0===t)return[n];if(!o(t))return e.call(n,t,i);var s,l,c,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,g=new RegExp(t.source,d+"g");while(s=f.call(g,n)){if(l=g.lastIndex,l>m&&(u.push(n.slice(m,s.index)),s.length>1&&s.index<n.length&&p.apply(u,s.slice(1)),c=s[0].length,m=l,u.length>=i))break;g.lastIndex===s.index&&g.lastIndex++}return m===n.length?!c&&g.test("")||u.push(""):u.push(n.slice(m)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var o=a(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,o,r):n.call(String(o),e,r)},function(t,o){var a=r(n,this,t,o,n!==e);if(a.done)return a.value;var f=i(this),d=String(t),m=s(f,RegExp),p=f.unicode,b=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(g?"g":"y"),F=new m(g?"^(?:"+f.source+")":f,b),w=void 0===o?v:o>>>0;if(0===w)return[];if(0===d.length)return null===u(F,d)?[d]:[];var x=0,y=0,k=[];while(y<d.length){F.lastIndex=g?0:y;var $,E=u(F,g?d.slice(y):d);if(null===E||($=h(c(F.lastIndex+(g?y:0)),d.length))===x)y=l(d,y,p);else{if(k.push(d.slice(x,y)),k.length===w)return k;for(var C=1;C<=E.length-1;C++)if(k.push(E[C]),k.length===w)return k;y=x=$}}return k.push(d.slice(x)),k}]}),!b,g)},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("17c2"),a=r("9112");for(var s in o){var l=n[s],c=l&&l.prototype;if(c&&c.forEach!==i)try{a(c,"forEach",i)}catch(u){c.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),i=o("forEach");t.exports=i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1c0b":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"23f6":function(t,e,r){"use strict";r("e155")},"44e7":function(t,e,r){var n=r("861d"),o=r("c6b6"),i=r("b622"),a=i("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==o(t))}},4840:function(t,e,r){var n=r("825a"),o=r("1c0b"),i=r("b622"),a=i("species");t.exports=function(t,e){var r,i=n(t).constructor;return void 0===i||void 0==(r=n(i)[a])?e:o(r)}},5942:function(t,e,r){"use strict";r("6e20")},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),a=i("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"6e20":function(t,e,r){},8439:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loading?r("div",{staticStyle:{"text-align":"center"}},[r("el-image",{attrs:{src:t.url}}),r("p",{staticStyle:{"font-size":"2em"}},[t._v("客官莫急 俺正努力")])],1):r("div",{staticClass:"main"},[r("div",{staticClass:"box"},[r("div",{staticClass:"sub_box"},[r("p",{staticClass:"title"},[t._v(" 欢迎您， "),r("span",{staticStyle:{color:"red"}},[t._v(t._s(t.logonForm.nickname))]),t._v(" : ")]),r("p",{staticClass:"text"},[t._v("您是首次登陆本平台，请先完成注册以授权。")]),r("el-divider"),r("logon",{attrs:{ding:!0,form:t.logonForm}}),r("el-divider")],1)])])},o=[],i=(r("ac1f"),r("1276"),r("159b"),r("5319"),r("365c")),a=r("e4dd"),s={data:function(){return{code:"",loading:!0,url:"",logonForm:{}}},methods:{getCode:function(){var t=this,e=window.location.href,r=e.substr(e.lastIndexOf("?")+1).split("&");r.forEach((function(e){var r=e.split("=")[0],n=e.split("=")[1];"code"==r&&(t.code=n)}))},loginByDing:function(t){var e=this;Object(i["j"])(t).then((function(t){if(202==t.status)return t.data.active||(e.$message.error("当前登陆账号已失效，请重新登录"),setTimeout((function(){e.$router.replace("/login/dingtalk")}),2e3)),e.logonForm=t.data,void(delete e.logonForm.active&&(e.loading=!1));e.$store.commit("setStatus",t.data),e.$router.push("/")}))},loadImage:function(){var t=this;Object(i["m"])("login").then((function(e){t.url=e.data.loading}))}},mounted:function(){this.loadImage(),this.getCode(),this.loginByDing(this.code)},components:{logon:a["default"]}},l=s,c=(r("5942"),r("2877")),u=Object(c["a"])(l,n,o,!1,null,"582c223f",null);e["default"]=u.exports},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),i=r("7b0b"),a=r("50c4"),s=r("65f0"),l=[].push,c=function(t){var e=1==t,r=2==t,c=3==t,u=4==t,f=6==t,d=7==t,m=5==t||f;return function(g,p,h,v){for(var b,F,w=i(g),x=o(w),y=n(p,h,3),k=a(x.length),$=0,E=v||s,C=e?E(g,k):r||d?E(g,0):void 0;k>$;$++)if((m||$ in x)&&(b=x[$],F=y(b,$,w),t))if(e)C[$]=F;else if(F)switch(t){case 3:return!0;case 5:return b;case 6:return $;case 2:l.call(C,b)}else switch(t){case 4:return!1;case 7:l.call(C,b)}return f?-1:c||u?u:C}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)}},e155:function(t,e,r){},e4dd:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sub-box"},[r("el-form",{ref:"logonForm",attrs:{model:t.logonForm,rules:t.rules,size:"mini","label-width":"6em"}},[r("el-form-item",{attrs:{prop:"username",label:"账号"}},[r("el-input",{attrs:{disabled:t.ding},model:{value:t.logonForm.username,callback:function(e){t.$set(t.logonForm,"username",e)},expression:"logonForm.username"}})],1),r("el-form-item",{attrs:{prop:"nickname",label:"昵称"}},[r("el-input",{model:{value:t.logonForm.nickname,callback:function(e){t.$set(t.logonForm,"nickname",e)},expression:"logonForm.nickname"}})],1),r("el-form-item",{attrs:{prop:"email",label:"邮箱"}},[r("el-input",{model:{value:t.logonForm.email,callback:function(e){t.$set(t.logonForm,"email",e)},expression:"logonForm.email"}})],1),r("el-form-item",{attrs:{prop:"password",label:"密码"}},[r("el-input",{attrs:{type:"password"},model:{value:t.logonForm.password,callback:function(e){t.$set(t.logonForm,"password",e)},expression:"logonForm.password"}})],1),r("el-form-item",{attrs:{prop:"password2",label:"确认密码"}},[r("el-input",{attrs:{type:"password"},model:{value:t.logonForm.password2,callback:function(e){t.$set(t.logonForm,"password2",e)},expression:"logonForm.password2"}})],1),r("el-form-item",{attrs:{prop:"mobile",label:"手机"}},[r("el-input",{model:{value:t.logonForm.mobile,callback:function(e){t.$set(t.logonForm,"mobile",e)},expression:"logonForm.mobile"}})],1),r("el-form-item",{attrs:{prop:"smsCode",label:"验证码"}},[r("el-input",{staticStyle:{width:"40%"},attrs:{palceholder:"验证码"},model:{value:t.logonForm.smsCode,callback:function(e){t.$set(t.logonForm,"smsCode",e)},expression:"logonForm.smsCode"}}),r("el-button",{staticStyle:{width:"35%","margin-left":"5%"},attrs:{type:"primary",disabled:t.flag},on:{click:function(e){return t.sendSmsCode()}}},[t._v(t._s(t.tip))])],1)],1),r("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.submit()}}},[t._v("立 即 注 册")])],1)},o=[],i=(r("ac1f"),r("5319"),r("365c")),a={props:["ding","form"],data:function(){var t=this,e=function(t,e,r){Object(i["c"])(e).then((function(t){t.data.count>0&&r(new Error("用户名已存在")),r()}))},r=function(t,e,r){if(e){var n=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;n.test(e)||r(new Error("邮箱格式错误"))}r()},n=function(e,r,n){r!=t.logonForm.password&&n(new Error("请确认两次密码一致")),n()},o=function(t,e,r){Object(i["c"])(e).then((function(t){t.data.count>0&&r(new Error("手机号已被注册")),r()}))};return{logonForm:{},rules:{username:[{required:!0,pattern:/^[\.\w]{6,18}$/,message:"账号由6-18位数字 字母 . 下划线 组成",trigger:"blur"},{validator:e,trigger:"submit"}],nickname:[{required:!0,pattern:/^[\u2E80-\u9FFF]{2,8}$/,message:"昵称由2-8位中文字符组成",trigger:"blur"}],email:[{validator:r,trigger:"blur"}],password:[{required:!0,pattern:/^\S{8,20}$/,message:"密码不合法",trigger:"blur"}],password2:[{required:!0,message:"确认密码必填",trigger:"blur"},{validator:n,trigger:"blur"}],mobile:[{required:!0,pattern:/^1[3-9]{1}\d{9}$/,message:"手机号码错误",trigger:"blur"},{validator:o,trigger:"submit"}],smsCode:[{required:!0,pattern:/^\d{6}$/,message:"验证码错误",trigger:"blur"}]},tip:"发送验证码",flag:!1,subForm:this.form}},methods:{submit:function(){var t=this;this.$refs.logonForm.validate((function(e){e&&Object(i["s"])(t.logonForm).then((function(e){t.$store.commit("setStatus",e.data),t.$router.replace("/")}))}))},sendSmsCode:function(){var t=this,e=/^1[3-9]{1}\d{9}$/;e.test(this.logonForm.mobile)?Object(i["y"])(this.logonForm.mobile).then((function(){t.flag=!0;var e=60,r=setInterval((function(){1==e?(clearInterval(r),t.tip="发送验证码",t.flag=!1):(e-=1,t.tip=e+" s")}),1e3,60)})):this.$message({type:"error",message:"手机号非法"})},checkProps:function(){this.subForm&&(this.logonForm=this.subForm)}},mounted:function(){this.checkProps()}},s=a,l=(r("23f6"),r("2877")),c=Object(l["a"])(s,n,o,!1,null,"5f64beac",null);e["default"]=c.exports},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-60127e98.53cf8a20.js.map