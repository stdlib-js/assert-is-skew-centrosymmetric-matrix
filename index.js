// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isSkewCentrosymmetricMatrix=e()}(this,(function(){"use strict";function t(t){var e=t.default;if("function"==typeof e){var r=function(){return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(t){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,f=i.__defineGetter__,u=i.__defineSetter__,a=i.__lookupGetter__,s=i.__lookupSetter__;var c=function(t,e,r){var n,c,l,h;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(a.call(t,e)||s.call(t,e)?(n=t.__proto__,t.__proto__=i,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),l="get"in r,h="set"in r,c&&(l||h))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&f&&f.call(t,e,r.get),h&&u&&u.call(t,e,r.set),t},l=n,h=c,p=r()?l:h,y=p;var _=function(t,e,r){y(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},v=_;var g=function(t){return"boolean"==typeof t};var d=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return d&&"symbol"==typeof Symbol.toStringTag},m=Object.prototype.toString,w=m;var O=function(t){return w.call(t)},j=Object.prototype.hasOwnProperty;var A=function(t,e){return null!=t&&j.call(t,e)},E="function"==typeof Symbol?Symbol.toStringTag:"",U=A,I=E,S=m;var N=O,T=function(t){var e,r,n;if(null==t)return S.call(t);r=t[I],e=U(t,I);try{t[I]=void 0}catch(e){return S.call(t)}return n=S.call(t),e?t[I]=r:delete t[I],n},x=b()?T:N,P=Boolean.prototype.toString;var B=x,R=function(t){try{return P.call(t),!0}catch(t){return!1}},L=b();var M=function(t){return"object"==typeof t&&(t instanceof Boolean||(L?R(t):"[object Boolean]"===B(t)))},C=g,F=M;var V=v,D=function(t){return C(t)||F(t)},G=M;V(D,"isPrimitive",g),V(D,"isObject",G);var Y=D;var J=function(){return new Function("return this;")()},k="object"==typeof self?self:null,W="object"==typeof window?window:null,X="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},$="object"==typeof X?X:null;module.exports=$;var H=Y.isPrimitive,z=J,q=k,K=W,Q=t(Object.freeze({__proto__:null}));var Z=function(t){if(arguments.length){if(!H(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return z()}if(q)return q;if(K)return K;if(Q)return Q;throw new Error("unexpected error. Unable to resolve global object.")},tt=Z,et=tt();var rt=function(){return"function"==typeof et.BigInt&&"function"==typeof BigInt&&"bigint"==typeof et.BigInt("1")&&"bigint"==typeof BigInt("1")},nt=p;var it=function(t,e,r){nt(t,e,{configurable:!1,enumerable:!1,get:r})},ot=it,ft={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};var ut=function(t){return ft[t]||null};var at=function(t){var e,r;for(e=0,r=0;r<t.length;r++)t[r]<0&&(e+=1);return 0===e?1:e===t.length?-1:0};var st=function(t){return Math.abs(t)};var ct=function(t){var e,r,n,i,o,f;if(0===(r=t.length))return 0;for(e=!0,n=!0,i=st(t[0]),f=1;f<r;f++){if(o=st(t[f]),e&&o<i?e=!1:n&&o>i&&(n=!1),!n&&!e)return 0;i=o}return n&&e?3:n?1:2};var lt=function(t,e){return e&&(2===t||3===t)};var ht=function(t,e){return e&&(1===t||3===t)};var pt=function(t,e,r){var n,i,o,f,u;for(n=t.length,i=r,o=r,u=0;u<n;u++){if(0===t[u])return[r,r];(f=e[u])>0?o+=f*(t[u]-1):f<0&&(i+=f*(t[u]-1))}return[i,o]};v(pt,"assign",(function(t,e,r,n){var i,o,f,u,a;for(i=t.length,o=r,f=r,a=0;a<i;a++){if(0===t[a])return n[0]=r,n[1]=r,n;(u=e[a])>0?f+=u*(t[a]-1):u<0&&(o+=u*(t[a]-1))}return n[0]=o,n[1]=f,n}));var yt=pt;var _t=function(t,e,r,n,i){var o;return 0!==t&&0!==i&&t===(o=yt(e,r,n))[1]-o[0]+1};var vt=function(t){return{ROW_MAJOR_CONTIGUOUS:t.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY}};var gt=function(t){var e,r,n,i,o,f;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(r=this._shape,e=this._strides,i=this._offset,"column-major"===this._order){for(f=0;f<n;f++)t-=o=t%r[f],t/=r[f],i+=o*e[f];return this._accessors?this._buffer.get(i):this._buffer[i]}for(f=n-1;f>=0;f--)t-=o=t%r[f],t/=r[f],i+=o*e[f];return this._accessors?this._buffer.get(i):this._buffer[i]};var dt=function(t,e){var r,n,i,o,f,u;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset+t):this._buffer[this._offset+t]=e,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset-t):this._buffer[this._offset-t]=e,this}if(n=this._shape,r=this._strides,o=this._offset,"column-major"===this._order){for(u=0;u<i;u++)t-=f=t%n[u],t/=n[u],o+=f*r[u];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this}for(u=i-1;u>=0;u--)t-=f=t%n[u],t/=n[u],o+=f*r[u];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this};var bt=function(){var t,e;for(t=this._offset,e=0;e<arguments.length-1;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],t):this._buffer[t]=arguments[e],this};var mt=function(){var t,e;for(t=this._offset,e=0;e<arguments.length;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(t):this._buffer[t]};var wt=function(t){return t.re};var Ot=function(t){return t.im},jt=wt,At=Ot;var Et=function(){var t,e,r,n;for(e=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<e;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<e;n++)r=this.iget(n),t.data.push(jt(r),At(r));else for(n=0;n<e;n++)t.data.push(this.iget(n));return t};var Ut=function(t){return"string"==typeof t},It=String.prototype.valueOf;var St=x,Nt=function(t){try{return It.call(t),!0}catch(t){return!1}},Tt=b();var xt=function(t){return"object"==typeof t&&(t instanceof String||(Tt?Nt(t):"[object String]"===St(t)))},Pt=Ut,Bt=xt;var Rt=v,Lt=function(t){return Pt(t)||Bt(t)},Mt=xt;Rt(Lt,"isPrimitive",Ut),Rt(Lt,"isObject",Mt);var Ct=Lt,Ft=Ct.isPrimitive,Vt=/[-\/\\^$*+?.()|[\]{}]/g;var Dt=function(t){var e,r;if(!Ft(t))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+t+"`.");if("/"===t[0])for(r=t.length-1;r>=0&&"/"!==t[r];r--);return void 0===r||r<=0?t.replace(Vt,"\\$&"):(e=(e=t.substring(1,r)).replace(Vt,"\\$&"),t=t[0]+e+t.substring(r))},Gt=/./,Yt=tt(),Jt=Yt.document&&Yt.document.childNodes,kt=Int8Array,Wt=Gt,Xt=Jt,$t=kt;var Ht=function(){return"function"==typeof Wt||"object"==typeof $t||"function"==typeof Xt};var zt=function(){return/^\s*function\s*([^(]*)/i},qt=zt;v(qt,"REGEXP",zt());var Kt=qt,Qt=x;var Zt=Array.isArray?Array.isArray:function(t){return"[object Array]"===Qt(t)},te=Zt;var ee=function(t){return null!==t&&"object"==typeof t};v(ee,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!te(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(ee));var re=ee,ne=re;var ie=x,oe=Kt.REGEXP,fe=function(t){return ne(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var ue=function(t){var e,r,n;if(("Object"===(r=ie(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=oe.exec(n.toString()))return e[1]}return fe(t)?"Buffer":r},ae=ue;var se=ue;var ce=function(t){var e;return null===t?"null":"object"===(e=typeof t)?ae(t).toLowerCase():e},le=function(t){return se(t).toLowerCase()},he=Ht()?le:ce,pe=he;var ye=function(t){return"function"===pe(t)},_e=RegExp.prototype.exec;var ve=x,ge=function(t){try{return _e.call(t),!0}catch(t){return!1}},de=b();var be=Dt,me=ye,we=Ct.isPrimitive,Oe=function(t){return"object"==typeof t&&(t instanceof RegExp||(de?ge(t):"[object RegExp]"===ve(t)))};var je=function(t,e,r){if(!we(t))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+t+"`.");if(we(e))e=be(e),e=new RegExp(e,"g");else if(!Oe(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!we(r)&&!me(r))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+r+"`.");return t.replace(e,r)},Ae=wt,Ee=Ot,Ue={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var Ie=function(){var t,e,r,n,i,o,f;if(e=this._shape.length,n="ndarray( '"+(i=this._dtype)+"', ",t="",this._length<=100)if("complex64"===i||"complex128"===i)for(f=0;f<this._length;f++)o=this.iget(f),t+=Ae(o)+", "+Ee(o),f<this._length-1&&(t+=", ");else for(f=0;f<this._length;f++)t+=this.iget(f),f<this._length-1&&(t+=", ");else{if("complex64"===i||"complex128"===i)for(f=0;f<3;f++)o=this.iget(f),t+=Ae(o)+", "+Ee(o),f<2&&(t+=", ");else for(f=0;f<3;f++)t+=this.iget(f),f<2&&(t+=", ");if(t+=", ..., ","complex64"===i||"complex128"===i)for(f=2;f>=0;f--)o=this.iget(this._length-1-f),t+=Ae(o)+", "+Ee(o),f>0&&(t+=", ");else for(f=2;f>=0;f--)t+=this.iget(this._length-1-f),f>0&&(t+=", ")}if(r=Ue[this.dtype],n+=je(r,"{{data}}",t),n+=", ",n+=0===e?"[]":"[ "+this._shape.join(", ")+" ]",n+=", ",n+="[ ",0===e)n+="0";else for(f=0;f<e;f++)this._strides[f]<0?n+=-this._strides[f]:n+=this._strides[f],f<e-1&&(n+=", ");return n+=" ]",n+=", ",n+="0",n+=", ",n+="'"+this._order+"'",n+=" )"},Se=x,Ne="function"==typeof Uint8Array;var Te="function"==typeof Uint8Array?Uint8Array:null,xe=function(t){return Ne&&t instanceof Uint8Array||"[object Uint8Array]"===Se(t)},Pe=Te;var Be=function(){var t,e;if("function"!=typeof Pe)return!1;try{e=new Pe(e=[1,3.14,-3.14,256,257]),t=xe(e)&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t};var Re="function"==typeof Uint8Array?Uint8Array:void 0,Le=function(){throw new Error("not implemented")},Me=Be()?Re:Le,Ce=x,Fe="function"==typeof Uint16Array;var Ve="function"==typeof Uint16Array?Uint16Array:null,De=function(t){return Fe&&t instanceof Uint16Array||"[object Uint16Array]"===Ce(t)},Ge=Ve;var Ye=function(){var t,e;if("function"!=typeof Ge)return!1;try{e=new Ge(e=[1,3.14,-3.14,65536,65537]),t=De(e)&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t};var Je,ke="function"==typeof Uint16Array?Uint16Array:void 0,We=function(){throw new Error("not implemented")},Xe={uint16:Ye()?ke:We,uint8:Me};(Je=new Xe.uint16(1))[0]=4660;var $e=52===new Xe.uint8(Je.buffer)[0],He=x,ze="function"==typeof ArrayBuffer;var qe=function(t){return ze&&t instanceof ArrayBuffer||"[object ArrayBuffer]"===He(t)},Ke=x,Qe="function"==typeof Float64Array;var Ze="function"==typeof Float64Array?Float64Array:null,tr=function(t){return Qe&&t instanceof Float64Array||"[object Float64Array]"===Ke(t)},er=Ze;var rr=function(){var t,e;if("function"!=typeof er)return!1;try{e=new er([1,3.14,-3.14,NaN]),t=tr(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t};var nr,ir="function"==typeof Float64Array?Float64Array:void 0,or=function(){throw new Error("not implemented")};nr=rr()?ir:or;var fr="function"==typeof ArrayBuffer?ArrayBuffer:null,ur=qe,ar=nr,sr=fr;var cr=function(){var t,e,r;if("function"!=typeof sr)return!1;try{r=new sr(16),(t=ur(r)&&"function"==typeof sr.isView)&&((e=new ar(r))[0]=-3.14,e[1]=NaN,t=t&&sr.isView(e)&&16===r.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t};var lr="function"==typeof ArrayBuffer?ArrayBuffer:void 0,hr=function(){throw new Error("not implemented")},pr=cr()?lr:hr,yr=x,_r="function"==typeof DataView;var vr="function"==typeof DataView?DataView:null,gr=function(t){return _r&&t instanceof DataView||"[object DataView]"===yr(t)},dr=pr,br=vr;var mr=function(){var t,e,r;if("function"!=typeof br)return!1;try{r=new dr(24),e=new br(r,8),(t=gr(e)&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===r&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t};var wr="function"==typeof DataView?DataView:void 0,Or=function(){throw new Error("not implemented")},jr=mr()?wr:Or,Ar="function"==typeof BigInt?BigInt:void 0,Er=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var Ur=function(){return Er.slice()};var Ir=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},Sr=p;var Nr=function(t,e,r){Sr(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})},Tr=Nr;var xr=function(t){return Object.keys(Object(t))},Pr=xr;var Br=function(){return function(){return 2!==(Pr(arguments)||"").length}(1,2)},Rr=void 0!==Object.keys,Lr=x;var Mr,Cr=function(t){return"[object Arguments]"===Lr(t)},Fr=Cr;Mr=function(){return Fr(arguments)}();var Vr=Mr;var Dr=function(t){return"number"==typeof t},Gr=Number,Yr=Gr.prototype.toString;var Jr=x,kr=Gr,Wr=function(t){try{return Yr.call(t),!0}catch(t){return!1}},Xr=b();var $r=function(t){return"object"==typeof t&&(t instanceof kr||(Xr?Wr(t):"[object Number]"===Jr(t)))},Hr=Dr,zr=$r;var qr=v,Kr=function(t){return Hr(t)||zr(t)},Qr=$r;qr(Kr,"isPrimitive",Dr),qr(Kr,"isObject",Qr);var Zr=Kr;var tn=function(t){return t!=t},en=Zr.isPrimitive,rn=tn;var nn=function(t){return en(t)&&rn(t)},on=Zr.isObject,fn=tn;var un=function(t){return on(t)&&fn(t.valueOf())},an=nn,sn=un;var cn=v,ln=function(t){return an(t)||sn(t)},hn=un;cn(ln,"isPrimitive",nn),cn(ln,"isObject",hn);var pn=ln,yn=Number.POSITIVE_INFINITY,_n=Gr.NEGATIVE_INFINITY,vn=Math.floor,gn=vn;var dn=function(t){return gn(t)===t},bn=yn,mn=_n,wn=dn;var On=function(t){return t<bn&&t>mn&&wn(t)},jn=Zr.isPrimitive,An=On;var En=function(t){return jn(t)&&An(t)},Un=Zr.isObject,In=On;var Sn=function(t){return Un(t)&&In(t.valueOf())},Nn=En,Tn=Sn;var xn=v,Pn=function(t){return Nn(t)||Tn(t)},Bn=Sn;xn(Pn,"isPrimitive",En),xn(Pn,"isObject",Bn);var Rn,Ln=Pn,Mn=Object.prototype.propertyIsEnumerable;Rn=!Mn.call("beep","0");var Cn=Ct,Fn=pn.isPrimitive,Vn=Ln.isPrimitive,Dn=Mn,Gn=Rn;var Yn=function(t,e){var r;return null!=t&&(!(r=Dn.call(t,e))&&Gn&&Cn(t)?!Fn(e=+e)&&Vn(e)&&e>=0&&e<t.length:r)},Jn=Yn,kn=A,Wn=Jn,Xn=Zt,$n=dn;var Hn=Vr?Cr:function(t){return null!==t&&"object"==typeof t&&!Xn(t)&&"number"==typeof t.length&&$n(t.length)&&t.length>=0&&t.length<=4294967295&&kn(t,"callee")&&!Wn(t,"callee")},zn=Hn,qn=xr,Kn=Array.prototype.slice;var Qn=function(t){return zn(t)?qn(Kn.call(t)):qn(t)};var Zn=Jn((function(){}),"prototype"),ti=!Jn({toString:null},"toString"),ei=dn;var ri=pn,ni=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&ei(t.length)&&t.length>=0&&t.length<=9007199254740991},ii=Ct.isPrimitive,oi=Ln.isPrimitive;var fi=function(t,e,r){var n,i;if(!ni(t)&&!ii(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!oi(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(ri(e)){for(;i<n;i++)if(ri(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1};var ui,ai=function(t){return t.constructor&&t.constructor.prototype===t},si="undefined"==typeof window?void 0:window,ci=A,li=fi,hi=he,pi=ai,yi=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],_i=si;ui=function(){var t;if("undefined"===hi(_i))return!1;for(t in _i)try{-1===li(yi,t)&&ci(_i,t)&&null!==_i[t]&&"object"===hi(_i[t])&&pi(_i[t])}catch(t){return!0}return!1}();var vi="undefined"!=typeof window,gi=ui,di=ai,bi=vi;var mi=re,wi=A,Oi=Hn,ji=Zn,Ai=ti,Ei=function(t){if(!1===bi&&!gi)return di(t);try{return di(t)}catch(t){return!1}},Ui=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Ii,Si=xr,Ni=Qn,Ti=function(t){var e,r,n,i,o,f,u;if(i=[],Oi(t)){for(u=0;u<t.length;u++)i.push(u.toString());return i}if("string"==typeof t){if(t.length>0&&!wi(t,"0"))for(u=0;u<t.length;u++)i.push(u.toString())}else{if(!1===(n="function"==typeof t)&&!mi(t))return i;r=ji&&n}for(o in t)r&&"prototype"===o||!wi(t,o)||i.push(String(o));if(Ai)for(e=Ei(t),u=0;u<Ui.length;u++)f=Ui[u],e&&"constructor"===f||!wi(t,f)||i.push(String(f));return i};Ii=Rr?Br()?Ni:Si:Ti;var xi=Tr,Pi=Ii;var Bi=function(t,e){var r,n,i;for(r=Pi(e),i=0;i<r.length;i++)n=r[i],xi(t,n,e[n]);return t},Ri=Ur,Li=Ir,Mi=Bi;v(Ri,"enum",Li),Mi(Ri,Li());var Ci=Ri,Fi=["row-major","column-major"];var Vi=function(){return Fi.slice()};v(Vi,"enum",(function(){return{"row-major":1,"column-major":2}}));var Di=Vi,Gi=["throw","clamp","wrap"];var Yi=function(){return Gi.slice()};v(Yi,"enum",(function(){return{throw:1,clamp:2,wrap:3}}));var Ji=Yi,ki=$e,Wi=pr,Xi=jr,$i=Ar,Hi=Di.enum,zi=Ji.enum,qi=(0,Ci.enum)(),Ki=Hi(),Qi=zi();var Zi=function(){var t,e,r,n,i,o,f,u,a,s,c,l,h,p;if(a=this._mode||"throw",f=this._submode||[a],r=33+16*(l=this._ndims)+(h=f.length),(u=this.__meta_dataview__)&&u.byteLength===r)return u;for(u=new Xi(new Wi(r)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,s=0,u.setInt8(s,ki?1:0),s+=1,u.setInt16(s,qi[n],ki),s+=2,u.setBigInt64(s,$i(l),ki),c=8*l,s+=8,p=0;p<l;p++)u.setBigInt64(s,$i(i[p]),ki),u.setBigInt64(s+c,$i(o[p]*t),ki),s+=8;for(s+=c,u.setBigInt64(s,$i(this._offset*t),ki),s+=8,u.setInt8(s,Ki[this._order]),s+=1,u.setInt8(s,Qi[a]),s+=1,u.setBigInt64(s,$i(h),ki),s+=8,p=0;p<h;p++)u.setInt8(s,Qi[f[p]]),s+=1;return e=0,e|=this._flags.READONLY?4:0,u.setInt32(s,e,ki),this.__meta_dataview__=u,u},to=$e,eo=Me,ro=jr,no=vn;var io=function(t){var e,r,n,i;return e=new eo(8),0===t||(i=(4294967295&t)>>>0,n=no(t/4294967296),r=new ro(e.buffer),to?(r.setUint32(0,i,to),r.setUint32(4,n,to)):(r.setUint32(0,n,to),r.setUint32(4,i,to))),e},oo=$e,fo=jr,uo=vn,ao=new Me(8),so=new fo(ao.buffer);var co=io;v(co,"assign",(function(t,e,r,n){var i,o,f;if(0===t){for(f=0;f<ao.length;f++)e[n]=0,n+=r;return e}for(o=(4294967295&t)>>>0,i=uo(t/4294967296),oo?(so.setUint32(0,o,oo),so.setUint32(4,i,oo)):(so.setUint32(0,i,oo),so.setUint32(4,o,oo)),f=0;f<ao.length;f++)e[n]=ao[f],n+=r;return e}));var lo=$e,ho=pr,po=jr,yo=Me,_o=Di.enum,vo=Ji.enum,go=co.assign,bo=(0,Ci.enum)(),mo=_o(),wo=vo();var Oo=rt,jo=v,Ao=ot,Eo=ut,Uo=at,Io=ct,So=lt,No=ht,To=_t,xo=vt,Po=gt,Bo=dt,Ro=bt,Lo=mt,Mo=Et,Co=Ie,Fo=Zi,Vo=function(){var t,e,r,n,i,o,f,u,a,s,c,l,h,p,y;if(s=this._mode||"throw",u=this._submode||[s],n=33+16*(h=this._ndims)+(p=u.length),(a=this.__meta_dataview__)&&a.byteLength===n)return a;for(a=new po(new ho(n)),e=new yo(a.buffer),o=this._shape,f=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,a.setInt8(c,lo?1:0),c+=1,a.setInt16(c,bo[i],lo),go(h,e,1,c+=2),l=8*h,c+=8,y=0;y<h;y++)go(o[y],e,1,c),go(f[y]*t,e,1,c+l),c+=8;for(c+=l,go(this._offset*t,e,1,c),c+=8,a.setInt8(c,mo[this._order]),c+=1,a.setInt8(c,wo[s]),go(p,e,1,c+=1),c+=8,y=0;y<p;y++)a.setInt8(c,wo[u[y]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,a.setInt32(c,r,lo),this.__meta_dataview__=a,a};function Do(t,e,r,n,i,o){var f,u,a,s,c;if(!(this instanceof Do))return new Do(t,e,r,n,i,o);for(s=1,c=0;c<r.length;c++)s*=r[c];return u=e.BYTES_PER_ELEMENT?e.BYTES_PER_ELEMENT*s:null,this._byteLength=u,this._bytesPerElement=Eo(t),this._buffer=e,this._dtype=t,this._length=s,this._ndims=r.length,this._offset=i,this._order=o,this._shape=r,this._strides=n,this._accessors=Boolean(e.get&&e.set),this._iterationOrder=Uo(n),f=To(s,r,n,i,this._iterationOrder),a=Io(n),this._flags={ROW_MAJOR_CONTIGUOUS:No(a,f),COLUMN_MAJOR_CONTIGUOUS:So(a,f),READONLY:!1},this.__meta_dataview__=null,this}jo(Do,"name","ndarray"),Ao(Do.prototype,"byteLength",(function(){return this._byteLength})),Ao(Do.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),Ao(Do.prototype,"data",(function(){return this._buffer})),Ao(Do.prototype,"dtype",(function(){return this._dtype})),Ao(Do.prototype,"flags",(function(){return xo(this._flags)})),Ao(Do.prototype,"length",(function(){return this._length})),Ao(Do.prototype,"ndims",(function(){return this._ndims})),Ao(Do.prototype,"offset",(function(){return this._offset})),Ao(Do.prototype,"order",(function(){return this._order})),Ao(Do.prototype,"shape",(function(){return this._shape.slice()})),Ao(Do.prototype,"strides",(function(){return this._strides.slice()})),jo(Do.prototype,"get",Lo),jo(Do.prototype,"iget",Po),jo(Do.prototype,"set",Ro),jo(Do.prototype,"iset",Bo),jo(Do.prototype,"toString",Co),jo(Do.prototype,"toJSON",Mo),jo(Do.prototype,"__array_meta_dataview__",Oo()?Fo:Vo);var Go=Do;var Yo=function(t){return t instanceof Go||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set};var Jo=function(t){return Yo(t)&&2===t.ndims&&2===t.shape.length&&2===t.strides.length};var ko=dn;var Wo=function(t){return ko(t/2)};var Xo=function(t){return Jo(t)&&t.shape[0]===t.shape[1]},$o=vn,Ho=function(t){return Wo(t>0?t-1:t+1)};return function(t){var e,r,n,i,o,f;if(!Xo(t))return!1;for(r=t.shape[0],n=$o(r/2),e=r-1,o=0;o<n;o++)for(i=e-o,f=0;f<r;f++)if(t.get(o,f)!==-t.get(i,e-f))return!1;if(Ho(r))for(f=0;f<=n;f++)if(t.get(o,f)!==-t.get(n,e-f))return!1;return!0}}));
//# sourceMappingURL=index.js.map
