!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(((t="undefined"!=typeof globalThis?globalThis:t||self).google=t.google||{},t.google.maps=t.google.maps||{},t.google.maps.plugins=t.google.maps.plugins||{},t.google.maps.plugins.loader={}))}(this,(function(t){"use strict";function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t,e){return t(e={exports:{}},e.exports),e.exports}var o,i,c=function(t){return t&&t.Math==Math&&t},a=c("object"==typeof globalThis&&globalThis)||c("object"==typeof window&&window)||c("object"==typeof self&&self)||c("object"==typeof n&&n)||function(){return this}()||Function("return this")(),u=function(t){try{return!!t()}catch(t){return!0}},s=!u((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),l={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,h={f:f&&!l.call({1:2},1)?function(t){var e=f(this,t);return!!e&&e.enumerable}:l},p=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},d={}.toString,v=function(t){return d.call(t).slice(8,-1)},g="".split,y=u((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==v(t)?g.call(t,""):Object(t)}:Object,m=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},b=function(t){return y(m(t))},w=function(t){return"function"==typeof t},S=function(t){return"object"==typeof t?null!==t:w(t)},j=function(t){return w(t)?t:void 0},O=function(t,e){return arguments.length<2?j(a[t]):a[t]&&a[t][e]},E=O("navigator","userAgent")||"",T=a.process,k=a.Deno,L=T&&T.versions||k&&k.version,P=L&&L.v8;P?i=(o=P.split("."))[0]<4?1:o[0]+o[1]:E&&(!(o=E.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=E.match(/Chrome\/(\d+)/))&&(i=o[1]);var x=i&&+i,M=!!Object.getOwnPropertySymbols&&!u((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&x&&x<41})),C=M&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,A=C?function(t){return"symbol"==typeof t}:function(t){var e=O("Symbol");return w(e)&&Object(t)instanceof e},I=function(t){try{return String(t)}catch(t){return"Object"}},_=function(t){if(w(t))return t;throw TypeError(I(t)+" is not a function")},R=function(t,e){var n=t[e];return null==n?void 0:_(n)},F=function(t,e){try{Object.defineProperty(a,t,{value:e,configurable:!0,writable:!0})}catch(n){a[t]=e}return e},N="__core-js_shared__",D=a[N]||F(N,{}),G=r((function(t){(t.exports=function(t,e){return D[t]||(D[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.18.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),K=function(t){return Object(m(t))},B={}.hasOwnProperty,U=Object.hasOwn||function(t,e){return B.call(K(t),e)},V=0,z=Math.random(),H=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++V+z).toString(36)},q=G("wks"),W=a.Symbol,J=C?W:W&&W.withoutSetter||H,X=function(t){return U(q,t)&&(M||"string"==typeof q[t])||(M&&U(W,t)?q[t]=W[t]:q[t]=J("Symbol."+t)),q[t]},Y=X("toPrimitive"),$=function(t,e){if(!S(t)||A(t))return t;var n,r=R(t,Y);if(r){if(void 0===e&&(e="default"),n=r.call(t,e),!S(n)||A(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),function(t,e){var n,r;if("string"===e&&w(n=t.toString)&&!S(r=n.call(t)))return r;if(w(n=t.valueOf)&&!S(r=n.call(t)))return r;if("string"!==e&&w(n=t.toString)&&!S(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}(t,e)},Q=function(t){var e=$(t,"string");return A(e)?e:String(e)},Z=a.document,tt=S(Z)&&S(Z.createElement),et=function(t){return tt?Z.createElement(t):{}},nt=!s&&!u((function(){return 7!=Object.defineProperty(et("div"),"a",{get:function(){return 7}}).a})),rt=Object.getOwnPropertyDescriptor,ot={f:s?rt:function(t,e){if(t=b(t),e=Q(e),nt)try{return rt(t,e)}catch(t){}if(U(t,e))return p(!h.f.call(t,e),t[e])}},it=function(t){if(S(t))return t;throw TypeError(String(t)+" is not an object")},ct=Object.defineProperty,at={f:s?ct:function(t,e,n){if(it(t),e=Q(e),it(n),nt)try{return ct(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},ut=s?function(t,e,n){return at.f(t,e,p(1,n))}:function(t,e,n){return t[e]=n,t},st=Function.toString;w(D.inspectSource)||(D.inspectSource=function(t){return st.call(t)});var lt,ft,ht,pt,dt=D.inspectSource,vt=a.WeakMap,gt=w(vt)&&/native code/.test(dt(vt)),yt=G("keys"),mt={},bt="Object already initialized",wt=a.WeakMap;if(gt||D.state){var St=D.state||(D.state=new wt),jt=St.get,Ot=St.has,Et=St.set;lt=function(t,e){if(Ot.call(St,t))throw new TypeError(bt);return e.facade=t,Et.call(St,t,e),e},ft=function(t){return jt.call(St,t)||{}},ht=function(t){return Ot.call(St,t)}}else{var Tt=yt[pt="state"]||(yt[pt]=H(pt));mt[Tt]=!0,lt=function(t,e){if(U(t,Tt))throw new TypeError(bt);return e.facade=t,ut(t,Tt,e),e},ft=function(t){return U(t,Tt)?t[Tt]:{}},ht=function(t){return U(t,Tt)}}var kt={set:lt,get:ft,has:ht,enforce:function(t){return ht(t)?ft(t):lt(t,{})},getterFor:function(t){return function(e){var n;if(!S(e)||(n=ft(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},Lt=Function.prototype,Pt=s&&Object.getOwnPropertyDescriptor,xt=U(Lt,"name"),Mt={EXISTS:xt,PROPER:xt&&"something"===function(){}.name,CONFIGURABLE:xt&&(!s||s&&Pt(Lt,"name").configurable)},Ct=r((function(t){var e=Mt.CONFIGURABLE,n=kt.get,r=kt.enforce,o=String(String).split("String");(t.exports=function(t,n,i,c){var u,s=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,f=!!c&&!!c.noTargetGet,h=c&&void 0!==c.name?c.name:n;w(i)&&("Symbol("===String(h).slice(0,7)&&(h="["+String(h).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!U(i,"name")||e&&i.name!==h)&&ut(i,"name",h),(u=r(i)).source||(u.source=o.join("string"==typeof h?h:""))),t!==a?(s?!f&&t[n]&&(l=!0):delete t[n],l?t[n]=i:ut(t,n,i)):l?t[n]=i:F(n,i)})(Function.prototype,"toString",(function(){return w(this)&&n(this).source||dt(this)}))})),At=Math.ceil,It=Math.floor,_t=function(t){return isNaN(t=+t)?0:(t>0?It:At)(t)},Rt=Math.min,Ft=function(t){return t>0?Rt(_t(t),9007199254740991):0},Nt=Math.max,Dt=Math.min,Gt=function(t){return function(e,n,r){var o,i=b(e),c=Ft(i.length),a=function(t,e){var n=_t(t);return n<0?Nt(n+e,0):Dt(n,e)}(r,c);if(t&&n!=n){for(;c>a;)if((o=i[a++])!=o)return!0}else for(;c>a;a++)if((t||a in i)&&i[a]===n)return t||a||0;return!t&&-1}},Kt={includes:Gt(!0),indexOf:Gt(!1)}.indexOf,Bt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),Ut={f:Object.getOwnPropertyNames||function(t){return function(t,e){var n,r=b(t),o=0,i=[];for(n in r)!U(mt,n)&&U(r,n)&&i.push(n);for(;e.length>o;)U(r,n=e[o++])&&(~Kt(i,n)||i.push(n));return i}(t,Bt)}},Vt={f:Object.getOwnPropertySymbols},zt=O("Reflect","ownKeys")||function(t){var e=Ut.f(it(t)),n=Vt.f;return n?e.concat(n(t)):e},Ht=function(t,e){for(var n=zt(e),r=at.f,o=ot.f,i=0;i<n.length;i++){var c=n[i];U(t,c)||r(t,c,o(e,c))}},qt=/#|\.prototype\./,Wt=function(t,e){var n=Xt[Jt(t)];return n==$t||n!=Yt&&(w(e)?u(e):!!e)},Jt=Wt.normalize=function(t){return String(t).replace(qt,".").toLowerCase()},Xt=Wt.data={},Yt=Wt.NATIVE="N",$t=Wt.POLYFILL="P",Qt=Wt,Zt=ot.f,te=function(t,e){var n,r,o,i,c,u=t.target,s=t.global,l=t.stat;if(n=s?a:l?a[u]||F(u,{}):(a[u]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(c=Zt(n,r))&&c.value:n[r],!Qt(s?r:u+(l?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Ht(i,o)}(t.sham||o&&o.sham)&&ut(i,"sham",!0),Ct(n,r,i,t)}},ee=Array.isArray||function(t){return"Array"==v(t)},ne=function(t,e,n){var r=Q(e);r in t?at.f(t,r,p(0,n)):t[r]=n},re={};re[X("toStringTag")]="z";var oe,ie="[object z]"===String(re),ce=X("toStringTag"),ae="Arguments"==v(function(){return arguments}()),ue=ie?v:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),ce))?n:ae?v(e):"Object"==(r=v(e))&&w(e.callee)?"Arguments":r},se=[],le=O("Reflect","construct"),fe=/^\s*(?:class|function)\b/,he=fe.exec,pe=!fe.exec((function(){})),de=function(t){if(!w(t))return!1;try{return le(Object,se,t),!0}catch(t){return!1}},ve=!le||u((function(){var t;return de(de.call)||!de(Object)||!de((function(){t=!0}))||t}))?function(t){if(!w(t))return!1;switch(ue(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return pe||!!he.call(fe,dt(t))}:de,ge=X("species"),ye=function(t,e){return new(function(t){var e;return ee(t)&&(e=t.constructor,(ve(e)&&(e===Array||ee(e.prototype))||S(e)&&null===(e=e[ge]))&&(e=void 0)),void 0===e?Array:e}(t))(0===e?0:e)},me=X("species"),be=X("isConcatSpreadable"),we=9007199254740991,Se="Maximum allowed index exceeded",je=x>=51||!u((function(){var t=[];return t[be]=!1,t.concat()[0]!==t})),Oe=(oe="concat",x>=51||!u((function(){var t=[];return(t.constructor={})[me]=function(){return{foo:1}},1!==t[oe](Boolean).foo}))),Ee=function(t){if(!S(t))return!1;var e=t[be];return void 0!==e?!!e:ee(t)};te({target:"Array",proto:!0,forced:!je||!Oe},{concat:function(t){var e,n,r,o,i,c=K(this),a=ye(c,0),u=0;for(e=-1,r=arguments.length;e<r;e++)if(Ee(i=-1===e?c:arguments[e])){if(u+(o=Ft(i.length))>we)throw TypeError(Se);for(n=0;n<o;n++,u++)n in i&&ne(a,u,i[n])}else{if(u>=we)throw TypeError(Se);ne(a,u++,i)}return a.length=u,a}});var Te=function(t,e){var n=[][t];return!!n&&u((function(){n.call(null,e||function(){throw 1},1)}))},ke=[].join,Le=y!=Object,Pe=Te("join",",");te({target:"Array",proto:!0,forced:Le||!Pe},{join:function(t){return ke.call(b(this),void 0===t?",":t)}});var xe=ie?{}.toString:function(){return"[object "+ue(this)+"]"};ie||Ct(Object.prototype,"toString",xe,{unsafe:!0});var Me=a.Promise,Ce=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return it(n),function(t){if("object"==typeof t||w(t))return t;throw TypeError("Can't set "+String(t)+" as a prototype")}(r),e?t.call(n,r):n.__proto__=r,n}}():void 0),Ae=at.f,Ie=X("toStringTag"),_e=X("species"),Re={},Fe=X("iterator"),Ne=Array.prototype,De=function(t,e,n){if(_(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},Ge=X("iterator"),Ke=function(t){if(null!=t)return R(t,Ge)||R(t,"@@iterator")||Re[ue(t)]},Be=function(t,e,n){var r,o;it(t);try{if(!(r=R(t,"return"))){if("throw"===e)throw n;return n}r=r.call(t)}catch(t){o=!0,r=t}if("throw"===e)throw n;if(o)throw r;return it(r),n},Ue=function(t,e){this.stopped=t,this.result=e},Ve=function(t,e,n){var r,o,i,c,a,u,s,l,f=n&&n.that,h=!(!n||!n.AS_ENTRIES),p=!(!n||!n.IS_ITERATOR),d=!(!n||!n.INTERRUPTED),v=De(e,f,1+h+d),g=function(t){return r&&Be(r,"normal",t),new Ue(!0,t)},y=function(t){return h?(it(t),d?v(t[0],t[1],g):v(t[0],t[1])):d?v(t,g):v(t)};if(p)r=t;else{if(!(o=Ke(t)))throw TypeError(String(t)+" is not iterable");if(void 0!==(l=o)&&(Re.Array===l||Ne[Fe]===l)){for(i=0,c=Ft(t.length);c>i;i++)if((a=y(t[i]))&&a instanceof Ue)return a;return new Ue(!1)}r=function(t,e){var n=arguments.length<2?Ke(t):e;if(_(n))return it(n.call(t));throw TypeError(String(t)+" is not iterable")}(t,o)}for(u=r.next;!(s=u.call(r)).done;){try{a=y(s.value)}catch(t){Be(r,"throw",t)}if("object"==typeof a&&a&&a instanceof Ue)return a}return new Ue(!1)},ze=X("iterator"),He=!1;try{var qe=0,We={next:function(){return{done:!!qe++}},return:function(){He=!0}};We[ze]=function(){return this},Array.from(We,(function(){throw 2}))}catch(t){}var Je,Xe,Ye,$e,Qe=X("species"),Ze=function(t,e){var n,r=it(t).constructor;return void 0===r||null==(n=it(r)[Qe])?e:function(t){if(ve(t))return t;throw TypeError(I(t)+" is not a constructor")}(n)},tn=O("document","documentElement"),en=/(?:ipad|iphone|ipod).*applewebkit/i.test(E),nn="process"==v(a.process),rn=a.setImmediate,on=a.clearImmediate,cn=a.process,an=a.MessageChannel,un=a.Dispatch,sn=0,ln={},fn="onreadystatechange";try{Je=a.location}catch(t){}var hn=function(t){if(ln.hasOwnProperty(t)){var e=ln[t];delete ln[t],e()}},pn=function(t){return function(){hn(t)}},dn=function(t){hn(t.data)},vn=function(t){a.postMessage(String(t),Je.protocol+"//"+Je.host)};rn&&on||(rn=function(t){for(var e=[],n=arguments.length,r=1;n>r;)e.push(arguments[r++]);return ln[++sn]=function(){(w(t)?t:Function(t)).apply(void 0,e)},Xe(sn),sn},on=function(t){delete ln[t]},nn?Xe=function(t){cn.nextTick(pn(t))}:un&&un.now?Xe=function(t){un.now(pn(t))}:an&&!en?($e=(Ye=new an).port2,Ye.port1.onmessage=dn,Xe=De($e.postMessage,$e,1)):a.addEventListener&&w(a.postMessage)&&!a.importScripts&&Je&&"file:"!==Je.protocol&&!u(vn)?(Xe=vn,a.addEventListener("message",dn,!1)):Xe=fn in et("script")?function(t){tn.appendChild(et("script")).onreadystatechange=function(){tn.removeChild(this),hn(t)}}:function(t){setTimeout(pn(t),0)});var gn,yn,mn,bn,wn,Sn,jn,On,En={set:rn,clear:on},Tn=/ipad|iphone|ipod/i.test(E)&&void 0!==a.Pebble,kn=/web0s(?!.*chrome)/i.test(E),Ln=ot.f,Pn=En.set,xn=a.MutationObserver||a.WebKitMutationObserver,Mn=a.document,Cn=a.process,An=a.Promise,In=Ln(a,"queueMicrotask"),_n=In&&In.value;_n||(gn=function(){var t,e;for(nn&&(t=Cn.domain)&&t.exit();yn;){e=yn.fn,yn=yn.next;try{e()}catch(t){throw yn?bn():mn=void 0,t}}mn=void 0,t&&t.enter()},en||nn||kn||!xn||!Mn?!Tn&&An&&An.resolve?((jn=An.resolve(void 0)).constructor=An,On=jn.then,bn=function(){On.call(jn,gn)}):bn=nn?function(){Cn.nextTick(gn)}:function(){Pn.call(a,gn)}:(wn=!0,Sn=Mn.createTextNode(""),new xn(gn).observe(Sn,{characterData:!0}),bn=function(){Sn.data=wn=!wn}));var Rn,Fn,Nn,Dn,Gn,Kn,Bn,Un=_n||function(t){var e={fn:t,next:void 0};mn&&(mn.next=e),yn||(yn=e,bn()),mn=e},Vn=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=_(e),this.reject=_(n)},zn={f:function(t){return new Vn(t)}},Hn=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},qn="object"==typeof window,Wn=En.set,Jn=X("species"),Xn="Promise",Yn=kt.get,$n=kt.set,Qn=kt.getterFor(Xn),Zn=Me&&Me.prototype,tr=Me,er=Zn,nr=a.TypeError,rr=a.document,or=a.process,ir=zn.f,cr=ir,ar=!!(rr&&rr.createEvent&&a.dispatchEvent),ur=w(a.PromiseRejectionEvent),sr="unhandledrejection",lr=!1,fr=Qt(Xn,(function(){var t=dt(tr),e=t!==String(tr);if(!e&&66===x)return!0;if(x>=51&&/native code/.test(t))return!1;var n=new tr((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))};return(n.constructor={})[Jn]=r,!(lr=n.then((function(){}))instanceof r)||!e&&qn&&!ur})),hr=fr||!function(t,e){if(!e&&!He)return!1;var n=!1;try{var r={};r[ze]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(t){}return n}((function(t){tr.all(t).catch((function(){}))})),pr=function(t){var e;return!(!S(t)||!w(e=t.then))&&e},dr=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;Un((function(){for(var r=t.value,o=1==t.state,i=0;n.length>i;){var c,a,u,s=n[i++],l=o?s.ok:s.fail,f=s.resolve,h=s.reject,p=s.domain;try{l?(o||(2===t.rejection&&mr(t),t.rejection=1),!0===l?c=r:(p&&p.enter(),c=l(r),p&&(p.exit(),u=!0)),c===s.promise?h(nr("Promise-chain cycle")):(a=pr(c))?a.call(c,f,h):f(c)):h(r)}catch(t){p&&!u&&p.exit(),h(t)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&gr(t)}))}},vr=function(t,e,n){var r,o;ar?((r=rr.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),a.dispatchEvent(r)):r={promise:e,reason:n},!ur&&(o=a["on"+t])?o(r):t===sr&&function(t,e){var n=a.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}("Unhandled promise rejection",n)},gr=function(t){Wn.call(a,(function(){var e,n=t.facade,r=t.value;if(yr(t)&&(e=Hn((function(){nn?or.emit("unhandledRejection",r,n):vr(sr,n,r)})),t.rejection=nn||yr(t)?2:1,e.error))throw e.value}))},yr=function(t){return 1!==t.rejection&&!t.parent},mr=function(t){Wn.call(a,(function(){var e=t.facade;nn?or.emit("rejectionHandled",e):vr("rejectionhandled",e,t.value)}))},br=function(t,e,n){return function(r){t(e,r,n)}},wr=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=2,dr(t,!0))},Sr=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw nr("Promise can't be resolved itself");var r=pr(e);r?Un((function(){var n={done:!1};try{r.call(e,br(Sr,n,t),br(wr,n,t))}catch(e){wr(n,e,t)}})):(t.value=e,t.state=1,dr(t,!1))}catch(e){wr({done:!1},e,t)}}};if(fr&&(er=(tr=function(t){!function(t,e,n){if(t instanceof e)return t;throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}(this,tr,Xn),_(t),Rn.call(this);var e=Yn(this);try{t(br(Sr,e),br(wr,e))}catch(t){wr(e,t)}}).prototype,(Rn=function(t){$n(this,{type:Xn,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=function(t,e,n){for(var r in e)Ct(t,r,e[r],n);return t}(er,{then:function(t,e){var n=Qn(this),r=ir(Ze(this,tr));return r.ok=!w(t)||t,r.fail=w(e)&&e,r.domain=nn?or.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&dr(n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),Fn=function(){var t=new Rn,e=Yn(t);this.promise=t,this.resolve=br(Sr,e),this.reject=br(wr,e)},zn.f=ir=function(t){return t===tr||t===Nn?new Fn(t):cr(t)},w(Me)&&Zn!==Object.prototype)){Dn=Zn.then,lr||(Ct(Zn,"then",(function(t,e){var n=this;return new tr((function(t,e){Dn.call(n,t,e)})).then(t,e)}),{unsafe:!0}),Ct(Zn,"catch",er.catch,{unsafe:!0}));try{delete Zn.constructor}catch(t){}Ce&&Ce(Zn,er)}te({global:!0,wrap:!0,forced:fr},{Promise:tr}),Kn=Xn,Bn=!1,(Gn=tr)&&!U(Gn=Bn?Gn:Gn.prototype,Ie)&&Ae(Gn,Ie,{configurable:!0,value:Kn}),function(t){var e=O(t),n=at.f;s&&e&&!e[_e]&&n(e,_e,{configurable:!0,get:function(){return this}})}(Xn),Nn=O(Xn),te({target:Xn,stat:!0,forced:fr},{reject:function(t){var e=ir(this);return e.reject.call(void 0,t),e.promise}}),te({target:Xn,stat:!0,forced:fr},{resolve:function(t){return function(t,e){if(it(t),S(e)&&e.constructor===t)return e;var n=zn.f(t);return(0,n.resolve)(e),n.promise}(this,t)}}),te({target:Xn,stat:!0,forced:hr},{all:function(t){var e=this,n=ir(e),r=n.resolve,o=n.reject,i=Hn((function(){var n=_(e.resolve),i=[],c=0,a=1;Ve(t,(function(t){var u=c++,s=!1;i.push(void 0),a++,n.call(e,t).then((function(t){s||(s=!0,i[u]=t,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=ir(e),r=n.reject,o=Hn((function(){var o=_(e.resolve);Ve(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}});var jr={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Or=et("span").classList,Er=Or&&Or.constructor&&Or.constructor.prototype,Tr=Er===Object.prototype?void 0:Er,kr=[].push,Lr=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,c=7==t,a=5==t||i;return function(u,s,l,f){for(var h,p,d=K(u),v=y(d),g=De(s,l,3),m=Ft(v.length),b=0,w=f||ye,S=e?w(u,m):n||c?w(u,0):void 0;m>b;b++)if((a||b in v)&&(p=g(h=v[b],b,d),t))if(e)S[b]=p;else if(p)switch(t){case 3:return!0;case 5:return h;case 6:return b;case 2:kr.call(S,h)}else switch(t){case 4:return!1;case 7:kr.call(S,h)}return i?-1:r||o?o:S}},Pr={forEach:Lr(0),map:Lr(1),filter:Lr(2),some:Lr(3),every:Lr(4),find:Lr(5),findIndex:Lr(6),filterReject:Lr(7)}.forEach,xr=Te("forEach")?[].forEach:function(t){return Pr(this,t,arguments.length>1?arguments[1]:void 0)},Mr=function(t){if(t&&t.forEach!==xr)try{ut(t,"forEach",xr)}catch(e){t.forEach=xr}};for(var Cr in jr)jr[Cr]&&Mr(a[Cr]&&a[Cr].prototype);Mr(Tr);var Ar="__googleMapsScriptId",Ir=function(){function t(e){var n=e.apiKey,r=e.channel,o=e.client,i=e.id,c=void 0===i?Ar:i,a=e.libraries,u=void 0===a?[]:a,s=e.language,l=e.region,f=e.version,h=e.mapIds,p=e.nonce,d=e.retries,v=void 0===d?3:d,g=e.url,y=void 0===g?"https://maps.googleapis.com/maps/api/js":g;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.version=f,this.apiKey=n,this.channel=r,this.client=o,this.id=c||Ar,this.libraries=u,this.language=s,this.region=l,this.mapIds=h,this.nonce=p,this.retries=v,this.url=y,t.instance){if(!function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var r,o,i;if(Array.isArray(e)){if((r=e.length)!=n.length)return!1;for(o=r;0!=o--;)if(!t(e[o],n[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((r=(i=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;0!=o--;){var c=i[o];if(!t(e[c],n[c]))return!1}return!0}return e!=e&&n!=n}(this.options,t.instance.options))throw new Error("Loader must not be called again with different options. ".concat(JSON.stringify(this.options)," !== ").concat(JSON.stringify(t.instance.options)));return t.instance}t.instance=this}var n,r,o;return n=t,(r=[{key:"options",get:function(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}},{key:"failed",get:function(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}},{key:"createUrl",value:function(){var t=this.url;return t+="?callback=".concat(this.CALLBACK),this.apiKey&&(t+="&key=".concat(this.apiKey)),this.channel&&(t+="&channel=".concat(this.channel)),this.client&&(t+="&client=".concat(this.client)),this.libraries.length>0&&(t+="&libraries=".concat(this.libraries.join(","))),this.language&&(t+="&language=".concat(this.language)),this.region&&(t+="&region=".concat(this.region)),this.version&&(t+="&v=".concat(this.version)),this.mapIds&&(t+="&map_ids=".concat(this.mapIds.join(","))),t}},{key:"load",value:function(){return this.loadPromise()}},{key:"loadPromise",value:function(){var t=this;return new Promise((function(e,n){t.loadCallback((function(t){t?n(t.error):e(window.google)}))}))}},{key:"loadCallback",value:function(t){this.callbacks.push(t),this.execute()}},{key:"setScript",value:function(){if(document.getElementById(this.id))this.callback();else{var t=this.createUrl(),e=document.createElement("script");e.id=this.id,e.type="text/javascript",e.src=t,e.onerror=this.loadErrorCallback.bind(this),e.defer=!0,e.async=!0,this.nonce&&(e.nonce=this.nonce),document.head.appendChild(e)}}},{key:"deleteScript",value:function(){var t=document.getElementById(this.id);t&&t.remove()}},{key:"reset",value:function(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}},{key:"resetIfRetryingFailed",value:function(){this.failed&&this.reset()}},{key:"loadErrorCallback",value:function(t){var e=this;if(this.errors.push(t),this.errors.length<=this.retries){var n=this.errors.length*Math.pow(2,this.errors.length);console.log("Failed to load Google Maps script, retrying in ".concat(n," ms.")),setTimeout((function(){e.deleteScript(),e.setScript()}),n)}else this.onerrorEvent=t,this.callback()}},{key:"setCallback",value:function(){window.__googleMapsCallback=this.callback.bind(this)}},{key:"callback",value:function(){var t=this;this.done=!0,this.loading=!1,this.callbacks.forEach((function(e){e(t.onerrorEvent)})),this.callbacks=[]}},{key:"execute",value:function(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version)return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),void this.callback();this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}}])&&e(n.prototype,r),o&&e(n,o),t}();t.DEFAULT_ID=Ar,t.Loader=Ir,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.js.map
