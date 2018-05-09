/*!
 * query 1.0.0
 * (c) 2018 Smohan<https://smohan.net>
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Query",[],e):"object"==typeof exports?exports.Query=e():t.Query=e()}(this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=Object.prototype.toString,o=[!0,1,"1","true"],s=[!1,0,"0","false"],u=["string","number","boolean","symbol"],a=Number.MAX_SAFE_INTEGER||Math.pow(2,53)-1,c=function(t){return"[object RegExp]"===i.call(t)},f=function(t){return"string"==typeof t},l=function(t){return void 0===t},p=function(t){return null===t},y=function(t){return"number"==typeof t},h=function(t){return y(t)&&t%1==0},d=function(t){return f(t)&&(t=t.toLowerCase()),!!~o.indexOf(t)},b=function(t){return f(t)&&(t=t.toLowerCase()),!!~s.indexOf(t)},m={regex:function(t,e){if(!c(t))throw TypeError("[VALIDATE ERROR]: The parameter reg must be a RegExp object");return!!t.test(e)},isRegexp:c,isString:f,isUndefined:l,isNull:p,isEmpty:function(t){return!!(l(t)||p(t)||f(t)&&0===t.trim().length)},isObject:function(t){return!p(t)&&"object"===(void 0===t?"undefined":n(t))},isPlainObject:function(t){return"[object Object]"===i.call(t)},isArray:function(t){return Array.isArray.call(null,t)},isPrimitive:function(t){return!!~u.indexOf(void 0===t?"undefined":n(t))},isFunction:function(t){return"function"==typeof t},isNumber:y,isInteger:h,isFloat:function(t){return+t&&t!==(0|t)},isSafeInteger:function(t){return h(t)&&t>=-a&&t<=a},isTrue:d,isFalse:b,isBoolean:function(t){return d(t)||b(t)}},g=function(t){return JSON.parse(JSON.stringify(t))},v=["eq","neq","gt","gte","lt","lte","like","in","nin","exists"],O=["and","or"],x=["asc","desc"];function j(t,e){if(!(this instanceof j))return new j(t);Array.isArray(t),this.source=t,this.target=g(t),this.size=t.length,this.params=Object.create(null),this.params.query=[],this.params.sort=[]}j.version="1.0.0";var S=j.prototype;function _(t,e,r){var n=!0;switch(e){case"like":case"in":case"nin":break;case"neq":n=t!==r;break;case"lt":n=t<r;break;case"lte":n=t<=r;break;case"gt":n=t>r;break;case"gte":n=t>=r;break;case"eq":default:n=t===r}return n}function w(t,e){for(var r=this.params.sort,n=r.length,i=void 0;--n>=0;){if(r[n][0]===t){i=n;break}}var o=[t,e];i>-1&&this.params.sort.splice(i,1),this.params.sort.push(o)}function E(t,e){if(!m.isEmpty(t)){for(var r=t.split(".");r.length;){if(e=e[r.shift()],!m.isPlainObject(e)&&!m.isArray(e))break}return e}}S.skip=function(t){return this.params.skip=m.isInteger(t)?t:0,this},S.limit=function(t){return this.params.limit=m.isInteger(t)?t:1,this},S.where=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"eq",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"and";if(!m.isString(t)||m.isEmpty(t))return this;if(null!==e&&void 0!==e&&!m.isPrimitive(e))throw new TypeError("Query: 参数condition必须是一个基本类型值");r=r.toLocaleLowerCase(),r=~v.indexOf(r)?r:"eq",n=n.toLocaleLowerCase();var i={_f:t,_c:e,_e:r,_r:n=~O.indexOf(n)?n:"and"};return~JSON.stringify(this.params.query).indexOf(JSON.stringify(i))||this.params.query.push(i),this},S.sort=function(t,e){var r=Object.create(null);for(var n in 1===arguments.length?m.isPlainObject(t)?r=t:r[t]="desc":r[t]=e,r){var i=r[n].toLocaleLowerCase();m.isString(n)&&~x.indexOf(i)&&w.call(this,n,i)}return this},S.count=function(){},S.find=function(){var t=this,e=[];this.target.forEach(function(r){(function(t){var e=this.params.query,r=e.length;if(0===r)return!0;for(var n=!0,i=0;i<r;i++){var o=e[i],s=o._f,u=o._c,a=o._e,c=o._r,f=E(s,t),l=_(f,a,u);n="or"===c?n||l:n&&l}return n}).call(t,r)&&e.push(r)}),function(t){var e=this.params.sort;t.sort(function(t,r){for(var n=-1,i=e.length,o=void 0;++n<i;){var s=(o=e[n])[0],u=o[1],a=E(s,t),c=E(s,r);if(a>c)return"desc"===u?-1:1;if(a<c)return"asc"===u?-1:1}})}.call(this,e),console.log(e)};e.default=j}]).default});