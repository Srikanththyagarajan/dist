/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;



window.Modernizr = (function( window, document, undefined ) {

    var version = '2.8.3',

    Modernizr = {},

    enableClasses = true,

    docElement = document.documentElement,

    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    inputElem  = document.createElement('input')  ,

    smile = ':)',

    toString = {}.toString,

    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),



    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),

    ns = {'svg': 'http://www.w3.org/2000/svg'},

    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName, 


    injectElementWithStyles = function( rule, callback, nodes, testnames ) {

      var style, ret, node, docOverflow,
          div = document.createElement('div'),
                body = document.body,
                fakeBody = body || document.createElement('body');

      if ( parseInt(nodes, 10) ) {
                      while ( nodes-- ) {
              node = document.createElement('div');
              node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
              div.appendChild(node);
          }
      }

                style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
          (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if ( !body ) {
                fakeBody.style.background = '';
                fakeBody.style.overflow = 'hidden';
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = 'hidden';
          docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
        if ( !body ) {
          fakeBody.parentNode.removeChild(fakeBody);
          docElement.style.overflow = docOverflow;
      } else {
          div.parentNode.removeChild(div);
      }

      return !!ret;

    },



    isEventSupported = (function() {

      var TAGNAMES = {
        'select': 'input', 'change': 'input',
        'submit': 'form', 'reset': 'form',
        'error': 'img', 'load': 'img', 'abort': 'img'
      };

      function isEventSupported( eventName, element ) {

        element = element || document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;

            var isSupported = eventName in element;

        if ( !isSupported ) {
                if ( !element.setAttribute ) {
            element = document.createElement('div');
          }
          if ( element.setAttribute && element.removeAttribute ) {
            element.setAttribute(eventName, '');
            isSupported = is(element[eventName], 'function');

                    if ( !is(element[eventName], 'undefined') ) {
              element[eventName] = undefined;
            }
            element.removeAttribute(eventName);
          }
        }

        element = null;
        return isSupported;
      }
      return isEventSupported;
    })(),


    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function (object, property) { 
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }


    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {

        var target = this;

        if (typeof target != "function") {
            throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function () {

            if (this instanceof bound) {

              var F = function(){};
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

        };

        return bound;
      };
    }

    function setCss( str ) {
        mStyle.cssText = str;
    }

    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    function is( obj, type ) {
        return typeof obj === type;
    }

    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }

    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                            if (elem === false) return props[i];

                            if (is(item, 'function')){
                                return item.bind(elem || obj);
                }

                            return item;
            }
        }
        return false;
    }

    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

            if(is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed);

            } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
          return testDOMProps(props, prefixed, elem);
        }
    }    tests['flexbox'] = function() {
      return testPropsAll('flexWrap');
    };    tests['canvas'] = function() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    };

    tests['canvastext'] = function() {
        return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
    };



    tests['webgl'] = function() {
        return !!window.WebGLRenderingContext;
    };


    tests['touch'] = function() {
        var bool;

        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        } else {
          injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
            bool = node.offsetTop === 9;
          });
        }

        return bool;
    };



    tests['geolocation'] = function() {
        return 'geolocation' in navigator;
    };


    tests['postmessage'] = function() {
      return !!window.postMessage;
    };


    tests['websqldatabase'] = function() {
      return !!window.openDatabase;
    };

    tests['indexedDB'] = function() {
      return !!testPropsAll("indexedDB", window);
    };

    tests['hashchange'] = function() {
      return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
    };

    tests['history'] = function() {
      return !!(window.history && history.pushState);
    };

    tests['draganddrop'] = function() {
        var div = document.createElement('div');
        return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
    };

    tests['websockets'] = function() {
        return 'WebSocket' in window || 'MozWebSocket' in window;
    };


    tests['rgba'] = function() {
        setCss('background-color:rgba(150,255,150,.5)');

        return contains(mStyle.backgroundColor, 'rgba');
    };

    tests['hsla'] = function() {
            setCss('background-color:hsla(120,40%,100%,.5)');

        return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
    };

    tests['multiplebgs'] = function() {
                setCss('background:url(https://),url(https://),red url(https://)');

            return (/(url\s*\(.*?){3}/).test(mStyle.background);
    };    tests['backgroundsize'] = function() {
        return testPropsAll('backgroundSize');
    };

    tests['borderimage'] = function() {
        return testPropsAll('borderImage');
    };



    tests['borderradius'] = function() {
        return testPropsAll('borderRadius');
    };

    tests['boxshadow'] = function() {
        return testPropsAll('boxShadow');
    };

    tests['textshadow'] = function() {
        return document.createElement('div').style.textShadow === '';
    };


    tests['opacity'] = function() {
                setCssAll('opacity:.55');

                    return (/^0.55$/).test(mStyle.opacity);
    };


    tests['cssanimations'] = function() {
        return testPropsAll('animationName');
    };


    tests['csscolumns'] = function() {
        return testPropsAll('columnCount');
    };


    tests['cssgradients'] = function() {
        var str1 = 'background-image:',
            str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
            str3 = 'linear-gradient(left top,#9f9, white);';

        setCss(
                       (str1 + '-webkit- '.split(' ').join(str2 + str1) +
                       prefixes.join(str3 + str1)).slice(0, -str1.length)
        );

        return contains(mStyle.backgroundImage, 'gradient');
    };


    tests['cssreflections'] = function() {
        return testPropsAll('boxReflect');
    };


    tests['csstransforms'] = function() {
        return !!testPropsAll('transform');
    };


    tests['csstransforms3d'] = function() {

        var ret = !!testPropsAll('perspective');

                        if ( ret && 'webkitPerspective' in docElement.style ) {

                      injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
            ret = node.offsetLeft === 9 && node.offsetHeight === 3;
          });
        }
        return ret;
    };


    tests['csstransitions'] = function() {
        return testPropsAll('transition');
    };



    tests['fontface'] = function() {
        var bool;

        injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function( node, rule ) {
          var style = document.getElementById('smodernizr'),
              sheet = style.sheet || style.styleSheet,
              cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';

          bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
        });

        return bool;
    };

    tests['generatedcontent'] = function() {
        var bool;

        injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''), function( node ) {
          bool = node.offsetHeight >= 3;
        });

        return bool;
    };
    tests['video'] = function() {
        var elem = document.createElement('video'),
            bool = false;

            try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('video/ogg; codecs="theora"')      .replace(/^no$/,'');

                            bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"') .replace(/^no$/,'');

                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');
            }

        } catch(e) { }

        return bool;
    };

    tests['audio'] = function() {
        var elem = document.createElement('audio'),
            bool = false;

        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
                bool.mp3  = elem.canPlayType('audio/mpeg;')               .replace(/^no$/,'');

                                                    bool.wav  = elem.canPlayType('audio/wav; codecs="1"')     .replace(/^no$/,'');
                bool.m4a  = ( elem.canPlayType('audio/x-m4a;')            ||
                              elem.canPlayType('audio/aac;'))             .replace(/^no$/,'');
            }
        } catch(e) { }

        return bool;
    };


    tests['localstorage'] = function() {
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };

    tests['sessionstorage'] = function() {
        try {
            sessionStorage.setItem(mod, mod);
            sessionStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };


    tests['webworkers'] = function() {
        return !!window.Worker;
    };


    tests['applicationcache'] = function() {
        return !!window.applicationCache;
    };


    tests['svg'] = function() {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
    };

    tests['inlinesvg'] = function() {
      var div = document.createElement('div');
      div.innerHTML = '<svg/>';
      return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
    };

    tests['smil'] = function() {
        return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
    };


    tests['svgclippaths'] = function() {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
    };

    function webforms() {
                                            Modernizr['input'] = (function( props ) {
            for ( var i = 0, len = props.length; i < len; i++ ) {
                attrs[ props[i] ] = !!(props[i] in inputElem);
            }
            if (attrs.list){
                                  attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
            }
            return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
                            Modernizr['inputtypes'] = (function(props) {

            for ( var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++ ) {

                inputElem.setAttribute('type', inputElemType = props[i]);
                bool = inputElem.type !== 'text';

                                                    if ( bool ) {

                    inputElem.value         = smile;
                    inputElem.style.cssText = 'position:absolute;visibility:hidden;';

                    if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {

                      docElement.appendChild(inputElem);
                      defaultView = document.defaultView;

                                        bool =  defaultView.getComputedStyle &&
                              defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                                                                                  (inputElem.offsetHeight !== 0);

                      docElement.removeChild(inputElem);

                    } else if ( /^(search|tel)$/.test(inputElemType) ){
                                                                                    } else if ( /^(url|email)$/.test(inputElemType) ) {
                                        bool = inputElem.checkValidity && inputElem.checkValidity() === false;

                    } else {
                                        bool = inputElem.value != smile;
                    }
                }

                inputs[ props[i] ] = !!bool;
            }
            return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
        }
    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
                                    featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    Modernizr.input || webforms();


     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
                                              return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (typeof enableClasses !== "undefined" && enableClasses) {
           docElement.className += ' ' + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr; 
     };


    setCss('');
    modElem = inputElem = null;

    ;(function(window, document) {
                var version = '3.7.0';

            var options = window.html5 || {};

            var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

            var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

            var supportsHtml5Styles;

            var expando = '_html5shiv';

            var expanID = 0;

            var expandoData = {};

            var supportsUnknownElements;

        (function() {
          try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
                    supportsHtml5Styles = ('hidden' in a);

            supportsUnknownElements = a.childNodes.length == 1 || (function() {
                        (document.createElement)('a');
              var frag = document.createDocumentFragment();
              return (
                typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
              );
            }());
          } catch(e) {
                    supportsHtml5Styles = true;
            supportsUnknownElements = true;
          }

        }());

            function addStyleSheet(ownerDocument, cssText) {
          var p = ownerDocument.createElement('p'),
          parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

          p.innerHTML = 'x<style>' + cssText + '</style>';
          return parent.insertBefore(p.lastChild, parent.firstChild);
        }

            function getElements() {
          var elements = html5.elements;
          return typeof elements == 'string' ? elements.split(' ') : elements;
        }

            function getExpandoData(ownerDocument) {
          var data = expandoData[ownerDocument[expando]];
          if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
          }
          return data;
        }

            function createElement(nodeName, ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createElement(nodeName);
          }
          if (!data) {
            data = getExpandoData(ownerDocument);
          }
          var node;

          if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
          } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
          } else {
            node = data.createElem(nodeName);
          }

                                                    return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
        }

            function createDocumentFragment(ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createDocumentFragment();
          }
          data = data || getExpandoData(ownerDocument);
          var clone = data.frag.cloneNode(),
          i = 0,
          elems = getElements(),
          l = elems.length;
          for(;i<l;i++){
            clone.createElement(elems[i]);
          }
          return clone;
        }

            function shivMethods(ownerDocument, data) {
          if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
          }


          ownerDocument.createElement = function(nodeName) {
                    if (!html5.shivMethods) {
              return data.createElem(nodeName);
            }
            return createElement(nodeName, ownerDocument, data);
          };

          ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
                                                          'var n=f.cloneNode(),c=n.createElement;' +
                                                          'h.shivMethods&&(' +
                                                                                                                getElements().join().replace(/[\w\-]+/g, function(nodeName) {
            data.createElem(nodeName);
            data.frag.createElement(nodeName);
            return 'c("' + nodeName + '")';
          }) +
            ');return n}'
                                                         )(html5, data.frag);
        }

            function shivDocument(ownerDocument) {
          if (!ownerDocument) {
            ownerDocument = document;
          }
          var data = getExpandoData(ownerDocument);

          if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
            data.hasCSS = !!addStyleSheet(ownerDocument,
                                                                                'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
                                                                                    'mark{background:#FF0;color:#000}' +
                                                                                    'template{display:none}'
                                         );
          }
          if (!supportsUnknownElements) {
            shivMethods(ownerDocument, data);
          }
          return ownerDocument;
        }

            var html5 = {

                'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',

                'version': version,

                'shivCSS': (options.shivCSS !== false),

                'supportsUnknownElements': supportsUnknownElements,

                'shivMethods': (options.shivMethods !== false),

                'type': 'default',

                'shivDocument': shivDocument,

                createElement: createElement,

                createDocumentFragment: createDocumentFragment
        };

            window.html5 = html5;

            shivDocument(document);

    }(this, document));

    Modernizr._version      = version;

    Modernizr._prefixes     = prefixes;
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;


    Modernizr.hasEvent      = isEventSupported;

    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };

    Modernizr.testAllProps  = testPropsAll;


    Modernizr.testStyles    = injectElementWithStyles;
    Modernizr.prefixed      = function(prop, obj, elem){
      if(!obj) {
        return testPropsAll(prop, 'pfx');
      } else {
            return testPropsAll(prop, obj, elem);
      }
    };


    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

                                                    (enableClasses ? ' js ' + classes.join(' ') : '');

    return Modernizr;

})(this, this.document);
/*yepnope1.5.4|WTFPL*/
(function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);
Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0));};
;
/*! VelocityJS.org (1.2.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(e){function t(e){var t=e.length,r=$.type(e);return"function"===r||$.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===r||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var $=function(e,t){return new $.fn.init(e,t)};$.isWindow=function(e){return null!=e&&e==e.window},$.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?a[o.call(e)]||"object":typeof e},$.isArray=Array.isArray||function(e){return"array"===$.type(e)},$.isPlainObject=function(e){var t;if(!e||"object"!==$.type(e)||e.nodeType||$.isWindow(e))return!1;try{if(e.constructor&&!n.call(e,"constructor")&&!n.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}for(t in e);return void 0===t||n.call(e,t)},$.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},$.data=function(e,t,a){if(void 0===a){var n=e[$.expando],o=n&&r[n];if(void 0===t)return o;if(o&&t in o)return o[t]}else if(void 0!==t){var n=e[$.expando]||(e[$.expando]=++$.uuid);return r[n]=r[n]||{},r[n][t]=a,a}},$.removeData=function(e,t){var a=e[$.expando],n=a&&r[a];n&&$.each(t,function(e,t){delete n[t]})},$.extend=function(){var e,t,r,a,n,o,i=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof i&&(u=i,i=arguments[s]||{},s++),"object"!=typeof i&&"function"!==$.type(i)&&(i={}),s===l&&(i=this,s--);l>s;s++)if(null!=(n=arguments[s]))for(a in n)e=i[a],r=n[a],i!==r&&(u&&r&&($.isPlainObject(r)||(t=$.isArray(r)))?(t?(t=!1,o=e&&$.isArray(e)?e:[]):o=e&&$.isPlainObject(e)?e:{},i[a]=$.extend(u,o,r)):void 0!==r&&(i[a]=r));return i},$.queue=function(e,r,a){function n(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){r=(r||"fx")+"queue";var o=$.data(e,r);return a?(!o||$.isArray(a)?o=$.data(e,r,n(a)):o.push(a),o):o||[]}},$.dequeue=function(e,t){$.each(e.nodeType?[e]:e,function(e,r){t=t||"fx";var a=$.queue(r,t),n=a.shift();"inprogress"===n&&(n=a.shift()),n&&("fx"===t&&a.unshift("inprogress"),n.call(r,function(){$.dequeue(r,t)}))})},$.fn=$.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),r=this.offset(),a=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:$(e).offset();return r.top-=parseFloat(t.style.marginTop)||0,r.left-=parseFloat(t.style.marginLeft)||0,e.style&&(a.top+=parseFloat(e.style.borderTopWidth)||0,a.left+=parseFloat(e.style.borderLeftWidth)||0),{top:r.top-a.top,left:r.left-a.left}}};var r={};$.expando="velocity"+(new Date).getTime(),$.uuid=0;for(var a={},n=a.hasOwnProperty,o=a.toString,i="Boolean Number String Function Array Date RegExp Object Error".split(" "),s=0;s<i.length;s++)a["[object "+i[s]+"]"]=i[s].toLowerCase();$.fn.init.prototype=$.fn,e.Velocity={Utilities:$}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return g.isWrapped(e)?e=[].slice.call(e):g.isNode(e)&&(e=[e]),e}function i(e){var t=$.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return g.isString(e)?v.Easings[e]||(r=!1):r=g.isArray(e)&&1===e.length?s.apply(null,e):g.isArray(e)&&2===e.length?b.apply(null,e.concat([t])):g.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=v.Easings[v.defaults.easing]?v.defaults.easing:h),r}function c(e){if(e){var t=(new Date).getTime(),r=v.State.calls.length;r>1e4&&(v.State.calls=n(v.State.calls));for(var o=0;r>o;o++)if(v.State.calls[o]){var s=v.State.calls[o],l=s[0],u=s[2],f=s[3],d=!!f,m=null;f||(f=v.State.calls[o][3]=t-16);for(var y=Math.min((t-f)/u.duration,1),h=0,b=l.length;b>h;h++){var S=l[h],w=S.element;if(i(w)){var V=!1;if(u.display!==a&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var C=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];$.each(C,function(e,t){x.setPropertyValue(w,"display",t)})}x.setPropertyValue(w,"display",u.display)}u.visibility!==a&&"hidden"!==u.visibility&&x.setPropertyValue(w,"visibility",u.visibility);for(var T in S)if("element"!==T){var k=S[T],A,F=g.isString(k.easing)?v.Easings[k.easing]:k.easing;if(1===y)A=k.endValue;else{var E=k.endValue-k.startValue;if(A=k.startValue+E*F(y,u,E),!d&&A===k.currentValue)continue}if(k.currentValue=A,"tween"===T)m=A;else{if(x.Hooks.registered[T]){var j=x.Hooks.getRoot(T),H=i(w).rootPropertyValueCache[j];H&&(k.rootPropertyValue=H)}var N=x.setPropertyValue(w,T,k.currentValue+(0===parseFloat(A)?"":k.unitType),k.rootPropertyValue,k.scrollData);x.Hooks.registered[T]&&(i(w).rootPropertyValueCache[j]=x.Normalizations.registered[j]?x.Normalizations.registered[j]("extract",null,N[1]):N[1]),"transform"===N[0]&&(V=!0)}}u.mobileHA&&i(w).transformCache.translate3d===a&&(i(w).transformCache.translate3d="(0px, 0px, 0px)",V=!0),V&&x.flushTransformCache(w)}}u.display!==a&&"none"!==u.display&&(v.State.calls[o][2].display=!1),u.visibility!==a&&"hidden"!==u.visibility&&(v.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],y,Math.max(0,f+u.duration-t),f,m),1===y&&p(o)}}v.State.isTicking&&P(c)}function p(e,t){if(!v.State.calls[e])return!1;for(var r=v.State.calls[e][0],n=v.State.calls[e][1],o=v.State.calls[e][2],s=v.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&x.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&x.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&($.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test($.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var f=!1;$.each(x.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(f=!0,delete i(p).transformCache[t])}),o.mobileHA&&(f=!0,delete i(p).transformCache.translate3d),f&&x.flushTransformCache(p),x.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(d){setTimeout(function(){throw d},1)}s&&o.loop!==!0&&s(n),i(p)&&o.loop===!0&&!t&&($.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),v(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&$.dequeue(p,o.queue)}v.State.calls[e]=!1;for(var g=0,m=v.State.calls.length;m>g;g++)if(v.State.calls[g]!==!1){l=!0;break}l===!1&&(v.State.isTicking=!1,delete v.State.calls,v.State.calls=[])}var f=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),d=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r=(new Date).getTime(),a;return a=Math.max(0,16-(r-e)),e=r+a,setTimeout(function(){t(r+a)},a)}}(),g={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},$,m=!1;if(e.fn&&e.fn.jquery?($=e,m=!0):$=t.Velocity.Utilities,8>=f&&!m)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=f)return void(jQuery.fn.velocity=jQuery.fn.animate);var y=400,h="swing",v={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:$,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:y,easing:h,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){$.data(e,"velocity",{isSVG:g.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};t.pageYOffset!==a?(v.State.scrollAnchor=t,v.State.scrollPropertyLeft="pageXOffset",v.State.scrollPropertyTop="pageYOffset"):(v.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,v.State.scrollPropertyLeft="scrollLeft",v.State.scrollPropertyTop="scrollTop");var b=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o={x:-1,v:0,tension:null,friction:null},i=[0],s=0,l=1e-4,u=.016,c,p,f;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,o.tension=e,o.friction=t,c=null!==n,c?(s=a(e,t),p=s/n*u):p=u;;)if(f=r(f||o,p),i.push(1+f.x),s+=16,!(Math.abs(f.x)>l&&Math.abs(f.v)>l))break;return c?function(e){return i[e*(i.length-1)|0]}:s}}();v.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},$.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){v.Easings[t[0]]=l.apply(null,t[1])});var x=v.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<x.Lists.colors.length;e++){var t="color"===x.Lists.colors[e]?"0 0 0 1":"255 255 255 1";x.Hooks.templates[x.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(f)for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(x.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),x.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;x.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=x.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return x.RegEx.valueUnwrap.test(t)&&(t=t.match(x.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(t)&&(t=x.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=x.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=x.Hooks.cleanRootPropertyValue(a,t),t.toString().match(x.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=x.Hooks.registered[e];if(a){var n=a[0],o=a[1],i,s;return r=x.Hooks.cleanRootPropertyValue(n,r),i=r.toString().match(x.RegEx.valueSplit),i[o]=t,s=i.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return x.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(x.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return v.State.isFirefox?"filter":"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=f)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=f||v.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var e=0;e<x.Lists.transformsBase.length;e++)!function(){var t=x.Lists.transformsBase[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":v.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<x.Lists.colors.length;e++)!function(){var t=x.Lists.colors[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(x.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:x.RegEx.isHex.test(n)?i="rgb("+x.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=f||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=f?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=f?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(f||v.State.isAndroid&&!v.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(v.State.prefixMatches[e])return[v.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),g.isString(v.State.prefixElement.style[n]))return v.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,a;return e=e.replace(t,function(e,t,r,a){return t+t+r+r+a+a}),a=r.exec(e),a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&x.setPropertyValue(e,"display","none")}var l=0;if(8>=f)l=$.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===x.getPropertyValue(e,"display")&&(u=!0,x.setPropertyValue(e,"display",x.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(x.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(x.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var d;d=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),l=9===f&&"filter"===r?d.getPropertyValue(r):d[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var g=s(e,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(r))&&(l=$(e).position()[r]+"px")}return l}var l;if(x.Hooks.registered[r]){var u=r,c=x.Hooks.getRoot(u);n===a&&(n=x.getPropertyValue(e,x.Names.prefixCheck(c)[0])),x.Normalizations.registered[c]&&(n=x.Normalizations.registered[c]("extract",e,n)),l=x.Hooks.extractValue(u,n)}else if(x.Normalizations.registered[r]){var p,d;p=x.Normalizations.registered[r]("name",e),"transform"!==p&&(d=s(e,x.Names.prefixCheck(p)[0]),x.Values.isCSSNullValue(d)&&x.Hooks.templates[r]&&(d=x.Hooks.templates[r][1])),l=x.Normalizations.registered[r]("extract",e,d)}if(!/^[\d-]/.test(l))if(i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{l=e.getBBox()[r]}catch(g){l=0}else l=e.getAttribute(r);else l=s(e,x.Names.prefixCheck(r)[0]);return x.Values.isCSSNullValue(l)&&(l=0),v.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(x.Normalizations.registered[r]&&"transform"===x.Normalizations.registered[r]("name",e))x.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(x.Hooks.registered[r]){var l=r,u=x.Hooks.getRoot(r);n=n||x.getPropertyValue(e,u),a=x.Hooks.injectValue(l,a,n),r=u}if(x.Normalizations.registered[r]&&(a=x.Normalizations.registered[r]("inject",e,a),r=x.Normalizations.registered[r]("name",e)),s=x.Names.prefixCheck(r)[0],8>=f)try{e.style[s]=a}catch(c){v.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;v.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(x.getPropertyValue(e,t))}var r="";if((f||v.State.isAndroid&&!v.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};$.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;$.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===f&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}x.setPropertyValue(e,"transform",r)}};x.Hooks.register(),x.Normalizations.register(),v.hook=function(e,t,r){var n=a;return e=o(e),$.each(e,function(e,o){if(i(o)===a&&v.init(o),r===a)n===a&&(n=v.CSS.getPropertyValue(o,t));else{var s=v.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&v.CSS.flushTransformCache(o),n=s}}),n};var S=function(){function e(){return l?T.promise||null:f}function n(){function e(e){function p(e,t){var r=a,i=a,s=a;return g.isArray(e)?(r=e[0],!g.isArray(e[1])&&/^[\d-]/.test(e[1])||g.isFunction(e[1])||x.RegEx.isHex.test(e[1])?s=e[1]:(g.isString(e[1])&&!x.RegEx.isHex.test(e[1])||g.isArray(e[1]))&&(i=t?e[1]:u(e[1],o.duration),e[2]!==a&&(s=e[2]))):r=e,t||(i=i||o.easing),g.isFunction(r)&&(r=r.call(n,w,P)),g.isFunction(s)&&(s=s.call(n,w,P)),[r||0,i,s]}function f(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=x.Values.getUnitType(e)),[a,r]}function d(){var e={myParent:n.parentNode||r.body,position:x.getPropertyValue(n,"position"),fontSize:x.getPropertyValue(n,"fontSize")},a=e.position===N.lastPosition&&e.myParent===N.lastParent,o=e.fontSize===N.lastFontSize;N.lastParent=e.myParent,N.lastPosition=e.position,N.lastFontSize=e.fontSize;var s=100,l={};if(o&&a)l.emToPx=N.lastEmToPx,l.percentToPxWidth=N.lastPercentToPxWidth,l.percentToPxHeight=N.lastPercentToPxHeight;else{var u=i(n).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");v.init(u),e.myParent.appendChild(u),$.each(["overflow","overflowX","overflowY"],function(e,t){v.CSS.setPropertyValue(u,t,"hidden")}),v.CSS.setPropertyValue(u,"position",e.position),v.CSS.setPropertyValue(u,"fontSize",e.fontSize),v.CSS.setPropertyValue(u,"boxSizing","content-box"),$.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){v.CSS.setPropertyValue(u,t,s+"%")}),v.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=N.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=N.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=N.lastEmToPx=(parseFloat(x.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===N.remToPx&&(N.remToPx=parseFloat(x.getPropertyValue(r.body,"fontSize"))||16),null===N.vwToPx&&(N.vwToPx=parseFloat(t.innerWidth)/100,N.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=N.remToPx,l.vwToPx=N.vwToPx,l.vhToPx=N.vhToPx,v.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),n),l}if(o.begin&&0===w)try{o.begin.call(m,m)}catch(y){setTimeout(function(){throw y},1)}if("scroll"===k){var S=/^x$/i.test(o.axis)?"Left":"Top",V=parseFloat(o.offset)||0,C,A,F;o.container?g.isWrapped(o.container)||g.isNode(o.container)?(o.container=o.container[0]||o.container,C=o.container["scroll"+S],F=C+$(n).position()[S.toLowerCase()]+V):o.container=null:(C=v.State.scrollAnchor[v.State["scrollProperty"+S]],A=v.State.scrollAnchor[v.State["scrollProperty"+("Left"===S?"Top":"Left")]],F=$(n).offset()[S.toLowerCase()]+V),s={scroll:{rootPropertyValue:!1,startValue:C,currentValue:C,endValue:F,unitType:"",easing:o.easing,scrollData:{container:o.container,direction:S,alternateValue:A}},element:n},v.debug&&console.log("tweensContainer (scroll): ",s.scroll,n)}else if("reverse"===k){if(!i(n).tweensContainer)return void $.dequeue(n,o.queue);"none"===i(n).opts.display&&(i(n).opts.display="auto"),"hidden"===i(n).opts.visibility&&(i(n).opts.visibility="visible"),i(n).opts.loop=!1,i(n).opts.begin=null,i(n).opts.complete=null,b.easing||delete o.easing,b.duration||delete o.duration,o=$.extend({},i(n).opts,o);var E=$.extend(!0,{},i(n).tweensContainer);for(var j in E)if("element"!==j){var H=E[j].startValue;E[j].startValue=E[j].currentValue=E[j].endValue,E[j].endValue=H,g.isEmptyObject(b)||(E[j].easing=o.easing),v.debug&&console.log("reverse tweensContainer ("+j+"): "+JSON.stringify(E[j]),n)}s=E}else if("start"===k){var E;i(n).tweensContainer&&i(n).isAnimating===!0&&(E=i(n).tweensContainer),$.each(h,function(e,t){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),n=r[0],o=r[1],i=r[2];if(x.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=x.Values.hexToRgb(n),u=i?x.Values.hexToRgb(i):a,c=0;c<s.length;c++){var f=[l[c]];o&&f.push(o),u!==a&&f.push(u[c]),h[e+s[c]]=f}delete h[e]}}});for(var R in h){var O=p(h[R]),z=O[0],q=O[1],M=O[2];R=x.Names.camelCase(R);var I=x.Hooks.getRoot(R),B=!1;if(i(n).isSVG||"tween"===I||x.Names.prefixCheck(I)[1]!==!1||x.Normalizations.registered[I]!==a){(o.display!==a&&null!==o.display&&"none"!==o.display||o.visibility!==a&&"hidden"!==o.visibility)&&/opacity|filter/.test(R)&&!M&&0!==z&&(M=0),o._cacheValues&&E&&E[R]?(M===a&&(M=E[R].endValue+E[R].unitType),B=i(n).rootPropertyValueCache[I]):x.Hooks.registered[R]?M===a?(B=x.getPropertyValue(n,I),M=x.getPropertyValue(n,R,B)):B=x.Hooks.templates[I][1]:M===a&&(M=x.getPropertyValue(n,R));var W,G,D,X=!1;if(W=f(R,M),M=W[0],D=W[1],W=f(R,z),z=W[0].replace(/^([+-\/*])=/,function(e,t){return X=t,""}),G=W[1],M=parseFloat(M)||0,z=parseFloat(z)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(R)?(z/=100,G="em"):/^scale/.test(R)?(z/=100,G=""):/(Red|Green|Blue)$/i.test(R)&&(z=z/100*255,G="")),/[\/*]/.test(X))G=D;else if(D!==G&&0!==M)if(0===z)G=D;else{l=l||d();var Y=/margin|padding|left|right|width|text|word|letter/i.test(R)||/X$/.test(R)||"x"===R?"x":"y";switch(D){case"%":M*="x"===Y?l.percentToPxWidth:l.percentToPxHeight;break;case"px":break;default:M*=l[D+"ToPx"]}switch(G){case"%":M*=1/("x"===Y?l.percentToPxWidth:l.percentToPxHeight);break;case"px":break;default:M*=1/l[G+"ToPx"]}}switch(X){case"+":z=M+z;break;case"-":z=M-z;break;case"*":z=M*z;break;case"/":z=M/z}s[R]={rootPropertyValue:B,startValue:M,currentValue:M,endValue:z,unitType:G,easing:q},v.debug&&console.log("tweensContainer ("+R+"): "+JSON.stringify(s[R]),n)}else v.debug&&console.log("Skipping ["+I+"] due to a lack of browser support.")}s.element=n}s.element&&(x.Values.addClass(n,"velocity-animating"),L.push(s),""===o.queue&&(i(n).tweensContainer=s,i(n).opts=o),i(n).isAnimating=!0,w===P-1?(v.State.calls.push([L,m,o,null,T.resolver]),v.State.isTicking===!1&&(v.State.isTicking=!0,c())):w++)}var n=this,o=$.extend({},v.defaults,b),s={},l;switch(i(n)===a&&v.init(n),parseFloat(o.delay)&&o.queue!==!1&&$.queue(n,o.queue,function(e){v.velocityQueueEntryFlag=!0,i(n).delayTimer={setTimeout:setTimeout(e,parseFloat(o.delay)),next:e}}),o.duration.toString().toLowerCase()){case"fast":o.duration=200;break;case"normal":o.duration=y;break;case"slow":o.duration=600;break;default:o.duration=parseFloat(o.duration)||1}v.mock!==!1&&(v.mock===!0?o.duration=o.delay=1:(o.duration*=parseFloat(v.mock)||1,o.delay*=parseFloat(v.mock)||1)),o.easing=u(o.easing,o.duration),o.begin&&!g.isFunction(o.begin)&&(o.begin=null),o.progress&&!g.isFunction(o.progress)&&(o.progress=null),o.complete&&!g.isFunction(o.complete)&&(o.complete=null),o.display!==a&&null!==o.display&&(o.display=o.display.toString().toLowerCase(),"auto"===o.display&&(o.display=v.CSS.Values.getDisplayType(n))),o.visibility!==a&&null!==o.visibility&&(o.visibility=o.visibility.toString().toLowerCase()),o.mobileHA=o.mobileHA&&v.State.isMobile&&!v.State.isGingerbread,o.queue===!1?o.delay?setTimeout(e,o.delay):e():$.queue(n,o.queue,function(t,r){return r===!0?(T.promise&&T.resolver(m),!0):(v.velocityQueueEntryFlag=!0,void e(t))}),""!==o.queue&&"fx"!==o.queue||"inprogress"===$.queue(n)[0]||$.dequeue(n)}var s=arguments[0]&&(arguments[0].p||$.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||g.isString(arguments[0].properties)),l,f,d,m,h,b;if(g.isWrapped(this)?(l=!1,d=0,m=this,f=this):(l=!0,d=1,m=s?arguments[0].elements||arguments[0].e:arguments[0]),m=o(m)){s?(h=arguments[0].properties||arguments[0].p,b=arguments[0].options||arguments[0].o):(h=arguments[d],b=arguments[d+1]);var P=m.length,w=0;if(!/^(stop|finish)$/i.test(h)&&!$.isPlainObject(b)){var V=d+1;b={};for(var C=V;C<arguments.length;C++)g.isArray(arguments[C])||!/^(fast|normal|slow)$/i.test(arguments[C])&&!/^\d/.test(arguments[C])?g.isString(arguments[C])||g.isArray(arguments[C])?b.easing=arguments[C]:g.isFunction(arguments[C])&&(b.complete=arguments[C]):b.duration=arguments[C]}var T={promise:null,resolver:null,rejecter:null};l&&v.Promise&&(T.promise=new v.Promise(function(e,t){T.resolver=e,T.rejecter=t}));var k;switch(h){case"scroll":k="scroll";break;case"reverse":k="reverse";break;case"finish":case"stop":$.each(m,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var A=[];return $.each(v.State.calls,function(e,t){t&&$.each(t[1],function(r,n){var o=b===a?"":b;return o===!0||t[2].queue===o||b===a&&t[2].queue===!1?void $.each(m,function(r,a){a===n&&((b===!0||g.isString(b))&&($.each($.queue(a,g.isString(b)?b:""),function(e,t){g.isFunction(t)&&t(null,!0)}),$.queue(a,g.isString(b)?b:"",[])),"stop"===h?(i(a)&&i(a).tweensContainer&&o!==!1&&$.each(i(a).tweensContainer,function(e,t){t.endValue=t.currentValue
}),A.push(e)):"finish"===h&&(t[2].duration=1))}):!0})}),"stop"===h&&($.each(A,function(e,t){p(t,!0)}),T.promise&&T.resolver(m)),e();default:if(!$.isPlainObject(h)||g.isEmptyObject(h)){if(g.isString(h)&&v.Redirects[h]){var F=$.extend({},b),E=F.duration,j=F.delay||0;return F.backwards===!0&&(m=$.extend(!0,[],m).reverse()),$.each(m,function(e,t){parseFloat(F.stagger)?F.delay=j+parseFloat(F.stagger)*e:g.isFunction(F.stagger)&&(F.delay=j+F.stagger.call(t,e,P)),F.drag&&(F.duration=parseFloat(E)||(/^(callout|transition)/.test(h)?1e3:y),F.duration=Math.max(F.duration*(F.backwards?1-e/P:(e+1)/P),.75*F.duration,200)),v.Redirects[h].call(t,t,F||{},e,P,m,T.promise?T:a)}),e()}var H="Velocity: First argument ("+h+") was not a property map, a known action, or a registered redirect. Aborting.";return T.promise?T.rejecter(new Error(H)):console.log(H),e()}k="start"}var N={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},L=[];$.each(m,function(e,t){g.isNode(t)&&n.call(t)});var F=$.extend({},v.defaults,b),R;if(F.loop=parseInt(F.loop),R=2*F.loop-1,F.loop)for(var O=0;R>O;O++){var z={delay:F.delay,progress:F.progress};O===R-1&&(z.display=F.display,z.visibility=F.visibility,z.complete=F.complete),S(m,"reverse",z)}return e()}};v=$.extend(S,v),v.animate=S;var P=t.requestAnimationFrame||d;return v.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(P=function(e){return setTimeout(function(){e(!0)},16)},c()):P=t.requestAnimationFrame||d}),e.Velocity=v,e!==t&&(e.fn.velocity=S,e.fn.velocity.defaults=v.defaults),$.each(["Down","Up"],function(e,t){v.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},f={};l.display===a&&(l.display="Down"===t?"inline"===v.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){f[r]=e.style[r];var a=v.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}f.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in f)e.style[t]=f[t];c&&c.call(i,i),s&&s.resolver(i)},v(e,p,l)}}),$.each(["In","Out"],function(e,t){v.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),v(this,u,l)}}),v}(window.jQuery||window.Zepto||window,window,document)});
!function(t){"function"==typeof require&&"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(["velocity"],t):t()}(function(){return function(t,a,e,r){function n(t,a){var e=[];return t&&a?(s.each([t,a],function(t,a){var r=[];s.each(a,function(t,a){for(;a.toString().length<5;)a="0"+a;r.push(a)}),e.push(r.join(""))}),parseFloat(e[0])>parseFloat(e[1])):!1}if(!t.Velocity||!t.Velocity.Utilities)return void(a.console&&console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));var i=t.Velocity,s=i.Utilities,o=i.version,l={major:1,minor:1,patch:0};if(n(l,o)){var c="Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";throw alert(c),new Error(c)}i.RegisterEffect=i.RegisterUI=function(t,a){function e(t,a,e,r){var n,o=0;s.each(t.nodeType?[t]:t,function(t,a){r&&(e+=t*r),n=a.parentNode,s.each(["height","paddingTop","paddingBottom","marginTop","marginBottom"],function(t,e){o+=parseFloat(i.CSS.getPropertyValue(a,e))})}),i.animate(n,{height:("In"===a?"+":"-")+"="+o},{queue:!1,easing:"ease-in-out",duration:e*("In"===a?.6:1)})}return i.Redirects[t]=function(n,o,l,c,u,f){function p(){o.display!==r&&"none"!==o.display||!/Out$/.test(t)||s.each(u.nodeType?[u]:u,function(t,a){i.CSS.setPropertyValue(a,"display","none")}),o.complete&&o.complete.call(u,u),f&&f.resolver(u||n)}var d=l===c-1;a.defaultDuration="function"==typeof a.defaultDuration?a.defaultDuration.call(u,u):parseFloat(a.defaultDuration);for(var g=0;g<a.calls.length;g++){var y=a.calls[g],m=y[0],X=o.duration||a.defaultDuration||1e3,Y=y[1],O=y[2]||{},v={};if(v.duration=X*(Y||1),v.queue=o.queue||"",v.easing=O.easing||"ease",v.delay=parseFloat(O.delay)||0,v._cacheValues=O._cacheValues||!0,0===g){if(v.delay+=parseFloat(o.delay)||0,0===l&&(v.begin=function(){o.begin&&o.begin.call(u,u);var a=t.match(/(In|Out)$/);a&&"In"===a[0]&&m.opacity!==r&&s.each(u.nodeType?[u]:u,function(t,a){i.CSS.setPropertyValue(a,"opacity",0)}),o.animateParentHeight&&a&&e(u,a[0],X+v.delay,o.stagger)}),null!==o.display)if(o.display!==r&&"none"!==o.display)v.display=o.display;else if(/In$/.test(t)){var D=i.CSS.Values.getDisplayType(n);v.display="inline"===D?"inline-block":D}o.visibility&&"hidden"!==o.visibility&&(v.visibility=o.visibility)}g===a.calls.length-1&&(v.complete=function(){if(a.reset){for(var t in a.reset){var e=a.reset[t];i.CSS.Hooks.registered[t]!==r||"string"!=typeof e&&"number"!=typeof e||(a.reset[t]=[a.reset[t],a.reset[t]])}var s={duration:0,queue:!1};d&&(s.complete=p),i.animate(n,a.reset,s)}else d&&p()},"hidden"===o.visibility&&(v.visibility=o.visibility)),i.animate(n,m,v)}},i},i.RegisterEffect.packagedEffects={"callout.bounce":{defaultDuration:550,calls:[[{translateY:-30},.25],[{translateY:0},.125],[{translateY:-15},.125],[{translateY:0},.25]]},"callout.shake":{defaultDuration:800,calls:[[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:0},.125]]},"callout.flash":{defaultDuration:1100,calls:[[{opacity:[0,"easeInOutQuad",1]},.25],[{opacity:[1,"easeInOutQuad"]},.25],[{opacity:[0,"easeInOutQuad"]},.25],[{opacity:[1,"easeInOutQuad"]},.25]]},"callout.pulse":{defaultDuration:825,calls:[[{scaleX:1.1,scaleY:1.1},.5,{easing:"easeInExpo"}],[{scaleX:1,scaleY:1},.5]]},"callout.swing":{defaultDuration:950,calls:[[{rotateZ:15},.2],[{rotateZ:-10},.2],[{rotateZ:5},.2],[{rotateZ:-5},.2],[{rotateZ:0},.2]]},"callout.tada":{defaultDuration:1e3,calls:[[{scaleX:.9,scaleY:.9,rotateZ:-3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:-3},.1],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],[{scaleX:1,scaleY:1,rotateZ:0},.2]]},"transition.fadeIn":{defaultDuration:500,calls:[[{opacity:[1,0]}]]},"transition.fadeOut":{defaultDuration:500,calls:[[{opacity:[0,1]}]]},"transition.flipXIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateY:[0,-55]}]],reset:{transformPerspective:0}},"transition.flipXOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateY:55}]],reset:{transformPerspective:0,rotateY:0}},"transition.flipYIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateX:[0,-45]}]],reset:{transformPerspective:0}},"transition.flipYOut":{defaultDuration:800,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateX:25}]],reset:{transformPerspective:0,rotateX:0}},"transition.flipBounceXIn":{defaultDuration:900,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateY:[-10,90]},.5],[{opacity:.8,rotateY:10},.25],[{opacity:1,rotateY:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceXOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateY:-10},.5],[{opacity:0,rotateY:90},.5]],reset:{transformPerspective:0,rotateY:0}},"transition.flipBounceYIn":{defaultDuration:850,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateX:[-10,90]},.5],[{opacity:.8,rotateX:10},.25],[{opacity:1,rotateX:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceYOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateX:-15},.5],[{opacity:0,rotateX:90},.5]],reset:{transformPerspective:0,rotateX:0}},"transition.swoopIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["100%","50%"],transformOriginY:["100%","100%"],scaleX:[1,0],scaleY:[1,0],translateX:[0,-700],translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%"}},"transition.swoopOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformOriginX:["50%","100%"],transformOriginY:["100%","100%"],scaleX:0,scaleY:0,translateX:-700,translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%",scaleX:1,scaleY:1,translateX:0}},"transition.whirlIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,0],scaleY:[1,0],rotateY:[0,160]},1,{easing:"easeInOutSine"}]]},"transition.whirlOut":{defaultDuration:750,calls:[[{opacity:[0,"easeInOutQuint",1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:0,scaleY:0,rotateY:160},1,{easing:"swing"}]],reset:{scaleX:1,scaleY:1,rotateY:0}},"transition.shrinkIn":{defaultDuration:750,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,1.5],scaleY:[1,1.5],translateZ:0}]]},"transition.shrinkOut":{defaultDuration:600,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:1.3,scaleY:1.3,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.expandIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,.625],scaleY:[1,.625],translateZ:0}]]},"transition.expandOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:.5,scaleY:.5,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.bounceIn":{defaultDuration:800,calls:[[{opacity:[1,0],scaleX:[1.05,.3],scaleY:[1.05,.3]},.4],[{scaleX:.9,scaleY:.9,translateZ:0},.2],[{scaleX:1,scaleY:1},.5]]},"transition.bounceOut":{defaultDuration:800,calls:[[{scaleX:.95,scaleY:.95},.35],[{scaleX:1.1,scaleY:1.1,translateZ:0},.35],[{opacity:[0,1],scaleX:.3,scaleY:.3},.3]],reset:{scaleX:1,scaleY:1}},"transition.bounceUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[-30,1e3]},.6,{easing:"easeOutCirc"}],[{translateY:10},.2],[{translateY:0},.2]]},"transition.bounceUpOut":{defaultDuration:1e3,calls:[[{translateY:20},.2],[{opacity:[0,"easeInCirc",1],translateY:-1e3},.8]],reset:{translateY:0}},"transition.bounceDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[30,-1e3]},.6,{easing:"easeOutCirc"}],[{translateY:-10},.2],[{translateY:0},.2]]},"transition.bounceDownOut":{defaultDuration:1e3,calls:[[{translateY:-20},.2],[{opacity:[0,"easeInCirc",1],translateY:1e3},.8]],reset:{translateY:0}},"transition.bounceLeftIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[30,-1250]},.6,{easing:"easeOutCirc"}],[{translateX:-10},.2],[{translateX:0},.2]]},"transition.bounceLeftOut":{defaultDuration:750,calls:[[{translateX:30},.2],[{opacity:[0,"easeInCirc",1],translateX:-1250},.8]],reset:{translateX:0}},"transition.bounceRightIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[-30,1250]},.6,{easing:"easeOutCirc"}],[{translateX:10},.2],[{translateX:0},.2]]},"transition.bounceRightOut":{defaultDuration:750,calls:[[{translateX:-30},.2],[{opacity:[0,"easeInCirc",1],translateX:1250},.8]],reset:{translateX:0}},"transition.slideUpIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,20],translateZ:0}]]},"transition.slideUpOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:-20,translateZ:0}]],reset:{translateY:0}},"transition.slideDownIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,-20],translateZ:0}]]},"transition.slideDownOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:20,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,-20],translateZ:0}]]},"transition.slideLeftOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:-20,translateZ:0}]],reset:{translateX:0}},"transition.slideRightIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,20],translateZ:0}]]},"transition.slideRightOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:20,translateZ:0}]],reset:{translateX:0}},"transition.slideUpBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,75],translateZ:0}]]},"transition.slideUpBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:-75,translateZ:0}]],reset:{translateY:0}},"transition.slideDownBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,-75],translateZ:0}]]},"transition.slideDownBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:75,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,-75],translateZ:0}]]},"transition.slideLeftBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:-75,translateZ:0}]],reset:{translateX:0}},"transition.slideRightBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,75],translateZ:0}]]},"transition.slideRightBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:75,translateZ:0}]],reset:{translateX:0}},"transition.perspectiveUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveUpOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveDownOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveLeftIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveLeftOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}},"transition.perspectiveRightIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveRightOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}}};for(var u in i.RegisterEffect.packagedEffects)i.RegisterEffect(u,i.RegisterEffect.packagedEffects[u]);i.RunSequence=function(t){var a=s.extend(!0,[],t);a.length>1&&(s.each(a.reverse(),function(t,e){var r=a[t+1];if(r){var n=e.o||e.options,o=r.o||r.options,l=n&&n.sequenceQueue===!1?"begin":"complete",c=o&&o[l],u={};u[l]=function(){var t=r.e||r.elements,a=t.nodeType?[t]:t;c&&c.call(a,a),i(e)},r.o?r.o=s.extend({},o,u):r.options=s.extend({},o,u)}}),a.reverse()),i(a[0])}}(window.jQuery||window.Zepto||window,window,document)});
/*! Backstretch - v2.0.4 - 2013-06-19
* http://srobbin.com/jquery-plugins/backstretch/
* Copyright (c) 2013 Scott Robbin; Licensed MIT */
(function(a,d,p){a.fn.backstretch=function(c,b){(c===p||0===c.length)&&a.error("No images were supplied for Backstretch");0===a(d).scrollTop()&&d.scrollTo(0,0);return this.each(function(){var d=a(this),g=d.data("backstretch");if(g){if("string"==typeof c&&"function"==typeof g[c]){g[c](b);return}b=a.extend(g.options,b);g.destroy(!0)}g=new q(this,c,b);d.data("backstretch",g)})};a.backstretch=function(c,b){return a("body").backstretch(c,b).data("backstretch")};a.expr[":"].backstretch=function(c){return a(c).data("backstretch")!==p};a.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5E3,fade:0};var r={left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},s={position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxHeight:"none",maxWidth:"none",zIndex:-999999},q=function(c,b,e){this.options=a.extend({},a.fn.backstretch.defaults,e||{});this.images=a.isArray(b)?b:[b];a.each(this.images,function(){a("<img />")[0].src=this});this.isBody=c===document.body;this.$container=a(c);this.$root=this.isBody?l?a(d):a(document):this.$container;c=this.$container.children(".backstretch").first();this.$wrap=c.length?c:a('<div class="backstretch"></div>').css(r).appendTo(this.$container);this.isBody||(c=this.$container.css("position"),b=this.$container.css("zIndex"),this.$container.css({position:"static"===c?"relative":c,zIndex:"auto"===b?0:b,background:"none"}),this.$wrap.css({zIndex:-999998}));this.$wrap.css({position:this.isBody&&l?"fixed":"absolute"});this.index=0;this.show(this.index);a(d).on("resize.backstretch",a.proxy(this.resize,this)).on("orientationchange.backstretch",a.proxy(function(){this.isBody&&0===d.pageYOffset&&(d.scrollTo(0,1),this.resize())},this))};q.prototype={resize:function(){try{var a={left:0,top:0},b=this.isBody?this.$root.width():this.$root.innerWidth(),e=b,g=this.isBody?d.innerHeight?d.innerHeight:this.$root.height():this.$root.innerHeight(),j=e/this.$img.data("ratio"),f;j>=g?(f=(j-g)/2,this.options.centeredY&&(a.top="-"+f+"px")):(j=g,e=j*this.$img.data("ratio"),f=(e-b)/2,this.options.centeredX&&(a.left="-"+f+"px"));this.$wrap.css({width:b,height:g}).find("img:not(.deleteable)").css({width:e,height:j}).css(a)}catch(h){}return this},show:function(c){if(!(Math.abs(c)>this.images.length-1)){var b=this,e=b.$wrap.find("img").addClass("deleteable"),d={relatedTarget:b.$container[0]};b.$container.trigger(a.Event("backstretch.before",d),[b,c]);this.index=c;clearInterval(b.interval);b.$img=a("<img />").css(s).bind("load",function(f){var h=this.width||a(f.target).width();f=this.height||a(f.target).height();a(this).data("ratio",h/f);a(this).fadeIn(b.options.speed||b.options.fade,function(){e.remove();b.paused||b.cycle();a(["after","show"]).each(function(){b.$container.trigger(a.Event("backstretch."+this,d),[b,c])})});b.resize()}).appendTo(b.$wrap);b.$img.attr("src",b.images[c]);return b}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){this.paused=!0;return this},resume:function(){this.paused=!1;this.next();return this},cycle:function(){1<this.images.length&&(clearInterval(this.interval),this.interval=setInterval(a.proxy(function(){this.paused||this.next()},this),this.options.duration));return this},destroy:function(c){a(d).off("resize.backstretch orientationchange.backstretch");clearInterval(this.interval);c||this.$wrap.remove();this.$container.removeData("backstretch")}};var l,f=navigator.userAgent,m=navigator.platform,e=f.match(/AppleWebKit\/([0-9]+)/),e=!!e&&e[1],h=f.match(/Fennec\/([0-9]+)/),h=!!h&&h[1],n=f.match(/Opera Mobi\/([0-9]+)/),t=!!n&&n[1],k=f.match(/MSIE ([0-9]+)/),k=!!k&&k[1];l=!((-1<m.indexOf("iPhone")||-1<m.indexOf("iPad")||-1<m.indexOf("iPod"))&&e&&534>e||d.operamini&&"[object OperaMini]"==={}.toString.call(d.operamini)||n&&7458>t||-1<f.indexOf("Android")&&e&&533>e||h&&6>h||"palmGetResource"in d&&e&&534>e||-1<f.indexOf("MeeGo")&&-1<f.indexOf("NokiaBrowser/8.5.0")||k&&6>=k)})(jQuery,window);
/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
! function(a) {
    a.flexslider = function(b, c) {
        var d = a(b);
        d.vars = a.extend({}, a.flexslider.defaults, c);
        var j, e = d.vars.namespace,
            f = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            g = ("ontouchstart" in window || f || window.DocumentTouch && document instanceof DocumentTouch) && d.vars.touch,
            h = "click touchend MSPointerUp",
            i = "",
            k = "vertical" === d.vars.direction,
            l = d.vars.reverse,
            m = d.vars.itemWidth > 0,
            n = "fade" === d.vars.animation,
            o = "" !== d.vars.asNavFor,
            p = {},
            q = !0;
        a.data(b, "flexslider", d), p = {
            init: function() {
                d.animating = !1, d.currentSlide = parseInt(d.vars.startAt ? d.vars.startAt : 0, 10), isNaN(d.currentSlide) && (d.currentSlide = 0), d.animatingTo = d.currentSlide, d.atEnd = 0 === d.currentSlide || d.currentSlide === d.last, d.containerSelector = d.vars.selector.substr(0, d.vars.selector.search(" ")), d.slides = a(d.vars.selector, d), d.container = a(d.containerSelector, d), d.count = d.slides.length, d.syncExists = a(d.vars.sync).length > 0, "slide" === d.vars.animation && (d.vars.animation = "swing"), d.prop = k ? "top" : "marginLeft", d.args = {}, d.manualPause = !1, d.stopped = !1, d.started = !1, d.startTimeout = null, d.transitions = !d.vars.video && !n && d.vars.useCSS && function() {
                    var a = document.createElement("div"),
                        b = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var c in b)
                        if (void 0 !== a.style[b[c]]) return d.pfx = b[c].replace("Perspective", "").toLowerCase(), d.prop = "-" + d.pfx + "-transform", !0;
                    return !1
                }(), d.ensureAnimationEnd = "", "" !== d.vars.controlsContainer && (d.controlsContainer = a(d.vars.controlsContainer).length > 0 && a(d.vars.controlsContainer)), "" !== d.vars.manualControls && (d.manualControls = a(d.vars.manualControls).length > 0 && a(d.vars.manualControls)), d.vars.randomize && (d.slides.sort(function() {
                    return Math.round(Math.random()) - .5
                }), d.container.empty().append(d.slides)), d.doMath(), d.setup("init"), d.vars.controlNav && p.controlNav.setup(), d.vars.directionNav && p.directionNav.setup(), d.vars.keyboard && (1 === a(d.containerSelector).length || d.vars.multipleKeyboard) && a(document).bind("keyup", function(a) {
                    var b = a.keyCode;
                    if (!d.animating && (39 === b || 37 === b)) {
                        var c = 39 === b ? d.getTarget("next") : 37 === b ? d.getTarget("prev") : !1;
                        d.flexAnimate(c, d.vars.pauseOnAction);
                        /*Changes Begin - D-57889 - Background video should start play only when slider is activated or user navigates to the particular slider*/
                        try {                           
                            d.find(".hero-video-item").get(0).pause()
                            if (d.find(".flex-active-slide").hasClass("hero-videos")) {
                                $(d.find(".flex-active-slide")).find(".hero-video-item").get(0).currentTime = 0;
                                $(d.find(".flex-active-slide")).find(".hero-video-item").get(0).play()
                            }                           
                        }
                        catch (ex) { }
                        /*Changes Begin - D-57889 - Background video should start play only when slider is activated or user navigates to the particular slider*/
                    }
                }), d.vars.mousewheel && d.bind("mousewheel", function(a, b) {
                    a.preventDefault();
                    var f = 0 > b ? d.getTarget("next") : d.getTarget("prev");
                    d.flexAnimate(f, d.vars.pauseOnAction)
                }), d.vars.pausePlay && p.pausePlay.setup(), d.vars.slideshow && d.vars.pauseInvisible && p.pauseInvisible.init(), d.vars.slideshow && (d.vars.pauseOnHover && d.hover(function() {
                    d.manualPlay || d.manualPause || d.pause()
                }, function() {
                    d.manualPause || d.manualPlay || d.stopped || d.play()
                }), d.vars.pauseInvisible && p.pauseInvisible.isHidden() || (d.vars.initDelay > 0 ? d.startTimeout = setTimeout(d.play, d.vars.initDelay) : d.play())), o && p.asNav.setup(), g && d.vars.touch && p.touch(), (!n || n && d.vars.smoothHeight) && a(window).bind("resize orientationchange focus", p.resize), d.find("img").attr("draggable", "false"), setTimeout(function() {
                    d.vars.start(d)
                }, 200)
            },
            asNav: {
                setup: function() {
                    d.asNav = !0, d.animatingTo = Math.floor(d.currentSlide / d.move), d.currentItem = d.currentSlide, d.slides.removeClass(e + "active-slide").eq(d.currentItem).addClass(e + "active-slide"), f ? (b._slider = d, d.slides.each(function() {
                        var b = this;
                        b._gesture = new MSGesture, b._gesture.target = b, b.addEventListener("MSPointerDown", function(a) {
                            a.preventDefault(), a.currentTarget._gesture && a.currentTarget._gesture.addPointer(a.pointerId)
                        }, !1), b.addEventListener("MSGestureTap", function(b) {
                            b.preventDefault();
                            var c = a(this),
                                e = c.index();
                            a(d.vars.asNavFor).data("flexslider").animating || c.hasClass("active") || (d.direction = d.currentItem < e ? "next" : "prev", d.flexAnimate(e, d.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : d.slides.on(h, function(b) {
                        b.preventDefault();
                        var c = a(this),
                            f = c.index(),
                            g = c.offset().left - a(d).scrollLeft();
                        0 >= g && c.hasClass(e + "active-slide") ? d.flexAnimate(d.getTarget("prev"), !0) : a(d.vars.asNavFor).data("flexslider").animating || c.hasClass(e + "active-slide") || (d.direction = d.currentItem < f ? "next" : "prev", d.flexAnimate(f, d.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function() {
                    d.manualControls ? p.controlNav.setupManual() : p.controlNav.setupPaging()
                },
                setupPaging: function() {
                    var f, g, b = "thumbnails" === d.vars.controlNav ? "control-thumbs" : "control-paging",
                        c = 1;
                    if (d.controlNavScaffold = a('<ol class="' + e + "control-nav " + e + b + '"></ol>'), d.pagingCount > 1)
                        for (var j = 0; j < d.pagingCount; j++) {
                            if (g = d.slides.eq(j), f = "thumbnails" === d.vars.controlNav ? '<img src="' + g.attr("data-thumb") + '"/>' : "<a>" + c + "</a>", "thumbnails" === d.vars.controlNav && !0 === d.vars.thumbCaptions) {
                                var k = g.attr("data-thumbcaption");
                                "" != k && void 0 != k && (f += '<span class="' + e + 'caption">' + k + "</span>")
                            }
                            d.controlNavScaffold.append("<li>" + f + "</li>"), c++
                        }
                    d.controlsContainer ? a(d.controlsContainer).append(d.controlNavScaffold) : d.append(d.controlNavScaffold), p.controlNav.set(), p.controlNav.active(), d.controlNavScaffold.delegate("a, img", h, function(b) {
                        if (b.preventDefault(), "" === i || i === b.type) {
                            var c = a(this),
                                f = d.controlNav.index(c);
                            c.hasClass(e + "active") || (d.direction = f > d.currentSlide ? "next" : "prev", d.flexAnimate(f, d.vars.pauseOnAction))
                        }
                        "" === i && (i = b.type), p.setToClearWatchedEvent()
                    })
                },
                setupManual: function() {
                    d.controlNav = d.manualControls, p.controlNav.active(), d.controlNav.bind(h, function(b) {
                        if (b.preventDefault(), "" === i || i === b.type) {
                            var c = a(this),
                                f = d.controlNav.index(c);
                            c.hasClass(e + "active") || (d.direction = f > d.currentSlide ? "next" : "prev", d.flexAnimate(f, d.vars.pauseOnAction))
                        }
                        "" === i && (i = b.type), p.setToClearWatchedEvent()
                    })
                },
                set: function() {
                    var b = "thumbnails" === d.vars.controlNav ? "img" : "a";
                    d.controlNav = a("." + e + "control-nav li " + b, d.controlsContainer ? d.controlsContainer : d)
                },
                active: function() {
                    d.controlNav.removeClass(e + "active").eq(d.animatingTo).addClass(e + "active")
                },
                update: function(b, c) {
                    d.pagingCount > 1 && "add" === b ? d.controlNavScaffold.append(a("<li><a>" + d.count + "</a></li>")) : 1 === d.pagingCount ? d.controlNavScaffold.find("li").remove() : d.controlNav.eq(c).closest("li").remove(), p.controlNav.set(), d.pagingCount > 1 && d.pagingCount !== d.controlNav.length ? d.update(c, b) : p.controlNav.active()
                }
            },
            directionNav: {
                setup: function() {
                    var b = a('<ul class="' + e + 'direction-nav"><li><a class="' + e + 'prev" href="#">' + d.vars.prevText + '</a></li><li><a class="' + e + 'next" href="#">' + d.vars.nextText + "</a></li></ul>");
                    d.controlsContainer ? (a(d.controlsContainer).append(b), d.directionNav = a("." + e + "direction-nav li a", d.controlsContainer)) : (d.append(b), d.directionNav = a("." + e + "direction-nav li a", d)), p.directionNav.update(), d.directionNav.bind(h, function(b) {
                        b.preventDefault();
                        var c;
                        ("" === i || i === b.type) && (c = a(this).hasClass(e + "next") ? d.getTarget("next") : d.getTarget("prev"), d.flexAnimate(c, d.vars.pauseOnAction)), "" === i && (i = b.type), p.setToClearWatchedEvent()
                    })
                },
                update: function() {
                    var a = e + "disabled";
                    1 === d.pagingCount ? d.directionNav.addClass(a).attr("tabindex", "-1"): d.vars.animationLoop ? d.directionNav.removeClass(a).removeAttr("tabindex"): 0 === d.animatingTo ? d.directionNav.removeClass(a).filter("." +e + "prev").addClass(a).attr("tabindex", "-1"): d.animatingTo === d.last ? d.directionNav.removeClass(a).filter("." +e + "next").addClass(a).attr("tabindex", "-1"): d.directionNav.removeClass(a).removeAttr("tabindex");
                    /*Changes Begin - D-57889 - Background video should start play only when slider is activated or user navigates to the particular slider*/
                     try {
                         d.find(".hero-video-item").get(0).pause()
                         if (d.find(".flex-active-slide").hasClass("hero-videos")) {
                             $(d.find(".flex-active-slide")).find(".hero-video-item").get(0).currentTime = 0;
                             $(d.find(".flex-active-slide")).find(".hero-video-item").get(0).play()
                         }
                    }
                    catch (ex) { }
                    /*Changes Begin - D-57889 - Background video should start play only when slider is activated or user navigates to the particular slider*/
                }
            },
            pausePlay: {
                setup: function() {
                    var b = a('<div class="' + e + 'pauseplay"><a></a></div>');
                    d.controlsContainer ? (d.controlsContainer.append(b), d.pausePlay = a("." + e + "pauseplay a", d.controlsContainer)) : (d.append(b), d.pausePlay = a("." + e + "pauseplay a", d)), p.pausePlay.update(d.vars.slideshow ? e + "pause" : e + "play"), d.pausePlay.bind(h, function(b) {
                        b.preventDefault(), ("" === i || i === b.type) && (a(this).hasClass(e + "pause") ? (d.manualPause = !0, d.manualPlay = !1, d.pause()) : (d.manualPause = !1, d.manualPlay = !0, d.play())), "" === i && (i = b.type), p.setToClearWatchedEvent()
                    })
                },
                update: function(a) {
                    "play" === a ? d.pausePlay.removeClass(e + "pause").addClass(e + "play").html(d.vars.playText) : d.pausePlay.removeClass(e + "play").addClass(e + "pause").html(d.vars.pauseText)
                }
            },
            touch: function() {
                function r(f) {
                    d.animating ? f.preventDefault() : (window.navigator.msPointerEnabled || 1 === f.touches.length) && (d.pause(), g = k ? d.h : d.w, i = Number(new Date), o = f.touches[0].pageX, p = f.touches[0].pageY, e = m && l && d.animatingTo === d.last ? 0 : m && l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : m && d.currentSlide === d.last ? d.limit : m ? (d.itemW + d.vars.itemMargin) * d.move * d.currentSlide : l ? (d.last - d.currentSlide + d.cloneOffset) * g : (d.currentSlide + d.cloneOffset) * g, a = k ? p : o, c = k ? o : p, b.addEventListener("touchmove", s, !1), b.addEventListener("touchend", t, !1))
                }

                function s(b) {
                    o = b.touches[0].pageX, p = b.touches[0].pageY, h = k ? a - p : a - o, j = k ? Math.abs(h) < Math.abs(o - c) : Math.abs(h) < Math.abs(p - c);
                    var f = 500;
                    (!j || Number(new Date) - i > f) && (b.preventDefault(), !n && d.transitions && (d.vars.animationLoop || (h /= 0 === d.currentSlide && 0 > h || d.currentSlide === d.last && h > 0 ? Math.abs(h) / g + 2 : 1), d.setProps(e + h, "setTouch")))
                }

                function t() {
                    if (b.removeEventListener("touchmove", s, !1), d.animatingTo === d.currentSlide && !j && null !== h) {
                        var k = l ? -h : h,
                            m = k > 0 ? d.getTarget("next") : d.getTarget("prev");
                        d.canAdvance(m) && (Number(new Date) - i < 550 && Math.abs(k) > 50 || Math.abs(k) > g / 2) ? d.flexAnimate(m, d.vars.pauseOnAction) : n || d.flexAnimate(d.currentSlide, d.vars.pauseOnAction, !0)
                    }
                    b.removeEventListener("touchend", t, !1), a = null, c = null, h = null, e = null
                }

                function u(a) {
                    a.stopPropagation(), d.animating ? a.preventDefault() : (d.pause(), b._gesture.addPointer(a.pointerId), q = 0, g = k ? d.h : d.w, i = Number(new Date), e = m && l && d.animatingTo === d.last ? 0 : m && l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : m && d.currentSlide === d.last ? d.limit : m ? (d.itemW + d.vars.itemMargin) * d.move * d.currentSlide : l ? (d.last - d.currentSlide + d.cloneOffset) * g : (d.currentSlide + d.cloneOffset) * g)
                }

                function v(a) {
                    a.stopPropagation();
                    var c = a.target._slider;
                    if (c) {
                        var d = -a.translationX,
                            f = -a.translationY;
                        return q += k ? f : d, h = q, j = k ? Math.abs(q) < Math.abs(-d) : Math.abs(q) < Math.abs(-f), a.detail === a.MSGESTURE_FLAG_INERTIA ? (setImmediate(function() {
                            b._gesture.stop()
                        }), void 0) : ((!j || Number(new Date) - i > 500) && (a.preventDefault(), !n && c.transitions && (c.vars.animationLoop || (h = q / (0 === c.currentSlide && 0 > q || c.currentSlide === c.last && q > 0 ? Math.abs(q) / g + 2 : 1)), c.setProps(e + h, "setTouch"))), void 0)
                    }
                }

                function w(b) {
                    b.stopPropagation();
                    var d = b.target._slider;
                    if (d) {
                        if (d.animatingTo === d.currentSlide && !j && null !== h) {
                            var f = l ? -h : h,
                                k = f > 0 ? d.getTarget("next") : d.getTarget("prev");
                            d.canAdvance(k) && (Number(new Date) - i < 550 && Math.abs(f) > 50 || Math.abs(f) > g / 2) ? d.flexAnimate(k, d.vars.pauseOnAction) : n || d.flexAnimate(d.currentSlide, d.vars.pauseOnAction, !0)
                        }
                        a = null, c = null, h = null, e = null, q = 0
                    }
                }
                var a, c, e, g, h, i, j = !1,
                    o = 0,
                    p = 0,
                    q = 0;
                f ? (b.style.msTouchAction = "none", b._gesture = new MSGesture, b._gesture.target = b, b.addEventListener("MSPointerDown", u, !1), b._slider = d, b.addEventListener("MSGestureChange", v, !1), b.addEventListener("MSGestureEnd", w, !1)) : b.addEventListener("touchstart", r, !1)
            },
            resize: function() {
                !d.animating && d.is(":visible") && (m || d.doMath(), n ? p.smoothHeight() : m ? (d.slides.width(d.computedW), d.update(d.pagingCount), d.setProps()) : k ? (d.viewport.height(d.h), d.setProps(d.h, "setTotal")) : (d.vars.smoothHeight && p.smoothHeight(), d.newSlides.width(d.computedW), d.setProps(d.computedW, "setTotal")))
            },
            smoothHeight: function(a) {
                if (!k || n) {
                    var b = n ? d : d.viewport;
                    a ? b.animate({
                        height: d.slides.eq(d.animatingTo).height()
                    }, a) : b.height(d.slides.eq(d.animatingTo).height())
                }
            },
            sync: function(b) {
                var c = a(d.vars.sync).data("flexslider"),
                    e = d.animatingTo;
                switch (b) {
                    case "animate":
                        c.flexAnimate(e, d.vars.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        c.playing || c.asNav || c.play();
                        break;
                    case "pause":
                        c.pause()
                }
            },
            uniqueID: function(b) {
                return b.find("[id]").each(function() {
                    var b = a(this);
                    b.attr("id", b.attr("id") + "_clone")
                }), b
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var a = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var b = 0; b < a.length; b++) a[b] + "Hidden" in document && (p.pauseInvisible.visProp = a[b] + "Hidden");
                    if (p.pauseInvisible.visProp) {
                        var c = p.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(c, function() {
                            p.pauseInvisible.isHidden() ? d.startTimeout ? clearTimeout(d.startTimeout) : d.pause() : d.started ? d.play() : d.vars.initDelay > 0 ? setTimeout(d.play, d.vars.initDelay) : d.play()
                        })
                    }
                },
                isHidden: function() {
                    return document[p.pauseInvisible.visProp] || !1
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(j), j = setTimeout(function() {
                    i = ""
                }, 3e3)
            }
        }, d.flexAnimate = function(b, c, f, h, i) {
            if (d.vars.animationLoop || b === d.currentSlide || (d.direction = b > d.currentSlide ? "next" : "prev"), o && 1 === d.pagingCount && (d.direction = d.currentItem < b ? "next" : "prev"), !d.animating && (d.canAdvance(b, i) || f) && d.is(":visible")) {
                if (o && h) {
                    var j = a(d.vars.asNavFor).data("flexslider");
                    if (d.atEnd = 0 === b || b === d.count - 1, j.flexAnimate(b, !0, !1, !0, i), d.direction = d.currentItem < b ? "next" : "prev", j.direction = d.direction, Math.ceil((b + 1) / d.visible) - 1 === d.currentSlide || 0 === b) return d.currentItem = b, d.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"), !1;
                    d.currentItem = b, d.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"), b = Math.floor(b / d.visible)
                }
                if (d.animating = !0, d.animatingTo = b, c && d.pause(), d.vars.before(d), d.syncExists && !i && p.sync("animate"), d.vars.controlNav && p.controlNav.active(), m || d.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"), d.atEnd = 0 === b || b === d.last, d.vars.directionNav && p.directionNav.update(), b === d.last && (d.vars.end(d), d.vars.animationLoop || d.pause()), n) g ? (d.slides.eq(d.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), d.slides.eq(b).css({
                    opacity: 1,
                    zIndex: 2
                }), d.wrapup(q)) : (d.slides.eq(d.currentSlide).css({
                    zIndex: 1
                }).animate({
                    opacity: 0
                }, d.vars.animationSpeed, d.vars.easing), d.slides.eq(b).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, d.vars.animationSpeed, d.vars.easing, d.wrapup));
                else {
                    var r, s, t, q = k ? d.slides.filter(":first").height() : d.computedW;
                    m ? (r = d.vars.itemMargin, t = (d.itemW + r) * d.move * d.animatingTo, s = t > d.limit && 1 !== d.visible ? d.limit : t) : s = 0 === d.currentSlide && b === d.count - 1 && d.vars.animationLoop && "next" !== d.direction ? l ? (d.count + d.cloneOffset) * q : 0 : d.currentSlide === d.last && 0 === b && d.vars.animationLoop && "prev" !== d.direction ? l ? 0 : (d.count + 1) * q : l ? (d.count - 1 - b + d.cloneOffset) * q : (b + d.cloneOffset) * q, d.setProps(s, "", d.vars.animationSpeed), d.transitions ? (d.vars.animationLoop && d.atEnd || (d.animating = !1, d.currentSlide = d.animatingTo), d.container.unbind("webkitTransitionEnd transitionend"), d.container.bind("webkitTransitionEnd transitionend", function() {
                        clearTimeout(d.ensureAnimationEnd), d.wrapup(q)
                    }), clearTimeout(d.ensureAnimationEnd), d.ensureAnimationEnd = setTimeout(function() {
                        d.wrapup(q)
                    }, d.vars.animationSpeed + 100)) : d.container.animate(d.args, d.vars.animationSpeed, d.vars.easing, function() {
                        d.wrapup(q)
                    })
                }
                d.vars.smoothHeight && p.smoothHeight(d.vars.animationSpeed)
            }
        }, d.wrapup = function(a) {
            n || m || (0 === d.currentSlide && d.animatingTo === d.last && d.vars.animationLoop ? d.setProps(a, "jumpEnd") : d.currentSlide === d.last && 0 === d.animatingTo && d.vars.animationLoop && d.setProps(a, "jumpStart")), d.animating = !1, d.currentSlide = d.animatingTo, d.vars.after(d)
        }, d.animateSlides = function() {
            !d.animating && q && d.flexAnimate(d.getTarget("next"))
        }, d.pause = function() {
            clearInterval(d.animatedSlides), d.animatedSlides = null, d.playing = !1, d.vars.pausePlay && p.pausePlay.update("play"), d.syncExists && p.sync("pause")
        }, d.play = function() {
            d.playing && clearInterval(d.animatedSlides), d.animatedSlides = d.animatedSlides || setInterval(d.animateSlides, d.vars.slideshowSpeed), d.started = d.playing = !0, d.vars.pausePlay && p.pausePlay.update("pause"), d.syncExists && p.sync("play")
        }, d.stop = function() {
            d.pause(), d.stopped = !0
        }, d.canAdvance = function(a, b) {
            var c = o ? d.pagingCount - 1 : d.last;
            return b ? !0 : o && d.currentItem === d.count - 1 && 0 === a && "prev" === d.direction ? !0 : o && 0 === d.currentItem && a === d.pagingCount - 1 && "next" !== d.direction ? !1 : a !== d.currentSlide || o ? d.vars.animationLoop ? !0 : d.atEnd && 0 === d.currentSlide && a === c && "next" !== d.direction ? !1 : d.atEnd && d.currentSlide === c && 0 === a && "next" === d.direction ? !1 : !0 : !1
        }, d.getTarget = function(a) {
            return d.direction = a, "next" === a ? d.currentSlide === d.last ? 0 : d.currentSlide + 1 : 0 === d.currentSlide ? d.last : d.currentSlide - 1
        }, d.setProps = function(a, b, c) {
            var e = function() {
                var c = a ? a : (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo,
                    e = function() {
                        if (m) return "setTouch" === b ? a : l && d.animatingTo === d.last ? 0 : l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : d.animatingTo === d.last ? d.limit : c;
                        switch (b) {
                            case "setTotal":
                                return l ? (d.count - 1 - d.currentSlide + d.cloneOffset) * a : (d.currentSlide + d.cloneOffset) * a;
                            case "setTouch":
                                return l ? a : a;
                            case "jumpEnd":
                                return l ? a : d.count * a;
                            case "jumpStart":
                                return l ? d.count * a : a;
                            default:
                                return a
                        }
                    }();
                return -1 * e + "px"
            }();
            d.transitions && (e = k ? "translate3d(0," + e + ",0)" : "translate3d(" + e + ",0,0)", c = void 0 !== c ? c / 1e3 + "s" : "0s", d.container.css("-" + d.pfx + "-transition-duration", c), d.container.css("transition-duration", c)), d.args[d.prop] = e, (d.transitions || void 0 === c) && d.container.css(d.args), d.container.css("transform", e)
        }, d.setup = function(b) {
            if (n) d.slides.css({
                width: "100%",
                "float": "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === b && (g ? d.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + d.vars.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(d.currentSlide).css({
                opacity: 1,
                zIndex: 2
            }) : d.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(d.currentSlide).css({
                zIndex: 2
            }).animate({
                opacity: 1
            }, d.vars.animationSpeed, d.vars.easing)), d.vars.smoothHeight && p.smoothHeight();
            else {
                var c, f;
                "init" === b && (d.viewport = a('<div class="' + e + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(d).append(d.container), d.cloneCount = 0, d.cloneOffset = 0, l && (f = a.makeArray(d.slides).reverse(), d.slides = a(f), d.container.empty().append(d.slides))), d.vars.animationLoop && !m && (d.cloneCount = 2, d.cloneOffset = 1, "init" !== b && d.container.find(".clone").remove(), p.uniqueID(d.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).appendTo(d.container), p.uniqueID(d.slides.last().clone().addClass("clone").attr("aria-hidden", "true")).prependTo(d.container)), d.newSlides = a(d.vars.selector, d), c = l ? d.count - 1 - d.currentSlide + d.cloneOffset : d.currentSlide + d.cloneOffset, k && !m ? (d.container.height(200 * (d.count + d.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                    d.newSlides.css({
                        display: "block"
                    }), d.doMath(), d.viewport.height(d.h), d.setProps(c * d.h, "init")
                }, "init" === b ? 100 : 0)) : (d.container.width(200 * (d.count + d.cloneCount) + "%"), d.setProps(c * d.computedW, "init"), setTimeout(function() {
                    d.doMath(), d.newSlides.css({
                        width: d.computedW,
                        "float": "left",
                        display: "block"
                    }), d.vars.smoothHeight && p.smoothHeight()
                }, "init" === b ? 100 : 0))
            }
            m || d.slides.removeClass(e + "active-slide").eq(d.currentSlide).addClass(e + "active-slide"), d.vars.init(d)
        }, d.doMath = function() {
            var a = d.slides.first(),
                b = d.vars.itemMargin,
                c = d.vars.minItems,
                e = d.vars.maxItems;
            d.w = void 0 === d.viewport ? d.width() : d.viewport.width(), d.h = a.height(), d.boxPadding = a.outerWidth() - a.width(), m ? (d.itemT = d.vars.itemWidth + b, d.minW = c ? c * d.itemT : d.w, d.maxW = e ? e * d.itemT - b : d.w, d.itemW = d.minW > d.w ? (d.w - b * (c - 1)) / c : d.maxW < d.w ? (d.w - b * (e - 1)) / e : d.vars.itemWidth > d.w ? d.w : d.vars.itemWidth, d.visible = Math.floor(d.w / d.itemW), d.move = d.vars.move > 0 && d.vars.move < d.visible ? d.vars.move : d.visible, d.pagingCount = Math.ceil((d.count - d.visible) / d.move + 1), d.last = d.pagingCount - 1, d.limit = 1 === d.pagingCount ? 0 : d.vars.itemWidth > d.w ? d.itemW * (d.count - 1) + b * (d.count - 1) : (d.itemW + b) * d.count - d.w - b) : (d.itemW = d.w, d.pagingCount = d.count, d.last = d.count - 1), d.computedW = d.itemW - d.boxPadding
        }, d.update = function(a, b) {
            d.doMath(), m || (a < d.currentSlide ? d.currentSlide += 1 : a <= d.currentSlide && 0 !== a && (d.currentSlide -= 1), d.animatingTo = d.currentSlide), d.vars.controlNav && !d.manualControls && ("add" === b && !m || d.pagingCount > d.controlNav.length ? p.controlNav.update("add") : ("remove" === b && !m || d.pagingCount < d.controlNav.length) && (m && d.currentSlide > d.last && (d.currentSlide -= 1, d.animatingTo -= 1), p.controlNav.update("remove", d.last))), d.vars.directionNav && p.directionNav.update()
        }, d.addSlide = function(b, c) {
            var e = a(b);
            d.count += 1, d.last = d.count - 1, k && l ? void 0 !== c ? d.slides.eq(d.count - c).after(e) : d.container.prepend(e) : void 0 !== c ? d.slides.eq(c).before(e) : d.container.append(e), d.update(c, "add"), d.slides = a(d.vars.selector + ":not(.clone)", d), d.setup(), d.vars.added(d)
        }, d.removeSlide = function(b) {
            var c = isNaN(b) ? d.slides.index(a(b)) : b;
            d.count -= 1, d.last = d.count - 1, isNaN(b) ? a(b, d.slides).remove() : k && l ? d.slides.eq(d.last).remove() : d.slides.eq(b).remove(), d.doMath(), d.update(c, "remove"), d.slides = a(d.vars.selector + ":not(.clone)", d), d.setup(), d.vars.removed(d)
        }, p.init()
    }, a(window).blur(function() {
        focused = !1
    }).focus(function() {
        focused = !0
    }), a.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {},
        init: function() {}
    }, a.fn.flexslider = function(b) {
        if (void 0 === b && (b = {}), "object" == typeof b) return this.each(function() {
            var c = a(this),
                d = b.selector ? b.selector : ".slides > li",
                e = c.find(d);
            1 === e.length && b.allowOneSlide === !0 || 0 === e.length ? (e.fadeIn(400), b.start && b.start(c)) : void 0 === c.data("flexslider") && new a.flexslider(this, b)
        });
        var c = a(this).data("flexslider");
        switch (b) {
            case "play":
                c.play();
                break;
            case "pause":
                c.pause();
                break;
            case "stop":
                c.stop();
                break;
            case "next":
                c.flexAnimate(c.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                c.flexAnimate(c.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof b && c.flexAnimate(b, !0)
        }
    }
}(jQuery);

/*! iScroll v5.1.3 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
var rAF = window.requestAnimationFrame  ||
  window.webkitRequestAnimationFrame  ||
  window.mozRequestAnimationFrame   ||
  window.oRequestAnimationFrame   ||
  window.msRequestAnimationFrame    ||
  function (callback) { window.setTimeout(callback, 1000 / 60); };

var utils = (function () {
  var me = {};

  var _elementStyle = document.createElement('div').style;
  var _vendor = (function () {
    var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
      transform,
      i = 0,
      l = vendors.length;

    for ( ; i < l; i++ ) {
      transform = vendors[i] + 'ransform';
      if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
    }

    return false;
  })();

  function _prefixStyle (style) {
    if ( _vendor === false ) return false;
    if ( _vendor === '' ) return style;
    return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
  }

  me.getTime = Date.now || function getTime () { return new Date().getTime(); };

  me.extend = function (target, obj) {
    for ( var i in obj ) {
      target[i] = obj[i];
    }
  };

  me.addEvent = function (el, type, fn, capture) {
    el.addEventListener(type, fn, !!capture);
  };

  me.removeEvent = function (el, type, fn, capture) {
    el.removeEventListener(type, fn, !!capture);
  };

  me.prefixPointerEvent = function (pointerEvent) {
    return window.MSPointerEvent ? 
      'MSPointer' + pointerEvent.charAt(9).toUpperCase() + pointerEvent.substr(10):
      pointerEvent;
  };

  me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
    var distance = current - start,
      speed = Math.abs(distance) / time,
      destination,
      duration;

    deceleration = deceleration === undefined ? 0.0006 : deceleration;

    destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
    duration = speed / deceleration;

    if ( destination < lowerMargin ) {
      destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
      distance = Math.abs(destination - current);
      duration = distance / speed;
    } else if ( destination > 0 ) {
      destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
      distance = Math.abs(current) + destination;
      duration = distance / speed;
    }

    return {
      destination: Math.round(destination),
      duration: duration
    };
  };

  var _transform = _prefixStyle('transform');

  me.extend(me, {
    hasTransform: _transform !== false,
    hasPerspective: _prefixStyle('perspective') in _elementStyle,
    hasTouch: 'ontouchstart' in window,
    hasPointer: window.PointerEvent || window.MSPointerEvent, // IE10 is prefixed
    hasTransition: _prefixStyle('transition') in _elementStyle
  });

  // This should find all Android browsers lower than build 535.19 (both stock browser and webview)
  me.isBadAndroid = /Android /.test(window.navigator.appVersion) && !(/Chrome\/\d/.test(window.navigator.appVersion));

  me.extend(me.style = {}, {
    transform: _transform,
    transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
    transitionDuration: _prefixStyle('transitionDuration'),
    transitionDelay: _prefixStyle('transitionDelay'),
    transformOrigin: _prefixStyle('transformOrigin')
  });

  me.hasClass = function (e, c) {
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
    return re.test(e.className);
  };

  me.addClass = function (e, c) {
    if ( me.hasClass(e, c) ) {
      return;
    }

    var newclass = e.className.split(' ');
    newclass.push(c);
    e.className = newclass.join(' ');
  };

  me.removeClass = function (e, c) {
    if ( !me.hasClass(e, c) ) {
      return;
    }

    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
    e.className = e.className.replace(re, ' ');
  };

  me.offset = function (el) {
    var left = -el.offsetLeft,
      top = -el.offsetTop;

    // jshint -W084
    while (el = el.offsetParent) {
      left -= el.offsetLeft;
      top -= el.offsetTop;
    }
    // jshint +W084

    return {
      left: left,
      top: top
    };
  };

  me.preventDefaultException = function (el, exceptions) {
    for ( var i in exceptions ) {
      if ( exceptions[i].test(el[i]) ) {
        return true;
      }
    }

    return false;
  };

  me.extend(me.eventType = {}, {
    touchstart: 1,
    touchmove: 1,
    touchend: 1,

    mousedown: 2,
    mousemove: 2,
    mouseup: 2,

    pointerdown: 3,
    pointermove: 3,
    pointerup: 3,

    MSPointerDown: 3,
    MSPointerMove: 3,
    MSPointerUp: 3
  });

  me.extend(me.ease = {}, {
    quadratic: {
      style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      fn: function (k) {
        return k * ( 2 - k );
      }
    },
    circular: {
      style: 'cubic-bezier(0.1, 0.57, 0.1, 1)', // Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
      fn: function (k) {
        return Math.sqrt( 1 - ( --k * k ) );
      }
    },
    back: {
      style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      fn: function (k) {
        var b = 4;
        return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
      }
    },
    bounce: {
      style: '',
      fn: function (k) {
        if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
          return 7.5625 * k * k;
        } else if ( k < ( 2 / 2.75 ) ) {
          return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
        } else if ( k < ( 2.5 / 2.75 ) ) {
          return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
        } else {
          return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
        }
      }
    },
    elastic: {
      style: '',
      fn: function (k) {
        var f = 0.22,
          e = 0.4;

        if ( k === 0 ) { return 0; }
        if ( k == 1 ) { return 1; }

        return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
      }
    }
  });

  me.tap = function (e, eventName) {
    var ev = document.createEvent('Event');
    ev.initEvent(eventName, true, true);
    ev.pageX = e.pageX;
    ev.pageY = e.pageY;
    e.target.dispatchEvent(ev);
  };

  me.click = function (e) {
    var target = e.target,
      ev;

    if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
      ev = document.createEvent('MouseEvents');
      ev.initMouseEvent('click', true, true, e.view, 1,
        target.screenX, target.screenY, target.clientX, target.clientY,
        e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
        0, null);

      ev._constructed = true;
      target.dispatchEvent(ev);
    }
  };

  return me;
})();

function IScroll (el, options) {
  this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
  this.scroller = this.wrapper.children[0];
  this.scrollerStyle = this.scroller.style;   // cache style for better performance

  this.options = {

    resizeScrollbars: true,

    mouseWheelSpeed: 20,

    snapThreshold: 0.334,

// INSERT POINT: OPTIONS 

    startX: 0,
    startY: 0,
    scrollY: true,
    directionLockThreshold: 5,
    momentum: true,

    bounce: true,
    bounceTime: 600,
    bounceEasing: '',

    preventDefault: true,
    preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

    HWCompositing: true,
    useTransition: true,
    useTransform: true
  };

  for ( var i in options ) {
    this.options[i] = options[i];
  }

  // Normalize options
  this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

  this.options.useTransition = utils.hasTransition && this.options.useTransition;
  this.options.useTransform = utils.hasTransform && this.options.useTransform;

  this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
  this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

  // If you want eventPassthrough I have to lock one of the axes
  this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
  this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

  // With eventPassthrough we also need lockDirection mechanism
  this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
  this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

  this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

  this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

  if ( this.options.tap === true ) {
    this.options.tap = 'tap';
  }

  if ( this.options.shrinkScrollbars == 'scale' ) {
    this.options.useTransition = false;
  }

  this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

  if ( this.options.probeType == 3 ) {
    this.options.useTransition = false; }

// INSERT POINT: NORMALIZATION

  // Some defaults  
  this.x = 0;
  this.y = 0;
  this.directionX = 0;
  this.directionY = 0;
  this._events = {};

// INSERT POINT: DEFAULTS

  this._init();
  this.refresh();

  this.scrollTo(this.options.startX, this.options.startY);
  this.enable();
}

IScroll.prototype = {
  version: '5.1.3',

  _init: function () {
    this._initEvents();

    if ( this.options.scrollbars || this.options.indicators ) {
      this._initIndicators();
    }

    if ( this.options.mouseWheel ) {
      this._initWheel();
    }

    if ( this.options.snap ) {
      this._initSnap();
    }

    if ( this.options.keyBindings ) {
      this._initKeys();
    }

// INSERT POINT: _init

  },

  destroy: function () {
    this._initEvents(true);

    this._execEvent('destroy');
  },

  _transitionEnd: function (e) {
    if ( e.target != this.scroller || !this.isInTransition ) {
      return;
    }

    this._transitionTime();
    if ( !this.resetPosition(this.options.bounceTime) ) {
      this.isInTransition = false;
      this._execEvent('scrollEnd');
    }
  },

  _start: function (e) {
    // React to left mouse button only
    if ( utils.eventType[e.type] != 1 ) {
      if ( e.button !== 0 ) {
        return;
      }
    }

    if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
      return;
    }

    if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
      e.preventDefault();
    }

    var point = e.touches ? e.touches[0] : e,
      pos;

    this.initiated  = utils.eventType[e.type];
    this.moved    = false;
    this.distX    = 0;
    this.distY    = 0;
    this.directionX = 0;
    this.directionY = 0;
    this.directionLocked = 0;

    this._transitionTime();

    this.startTime = utils.getTime();

    if ( this.options.useTransition && this.isInTransition ) {
      this.isInTransition = false;
      pos = this.getComputedPosition();
      this._translate(Math.round(pos.x), Math.round(pos.y));
      this._execEvent('scrollEnd');
    } else if ( !this.options.useTransition && this.isAnimating ) {
      this.isAnimating = false;
      this._execEvent('scrollEnd');
    }

    this.startX    = this.x;
    this.startY    = this.y;
    this.absStartX = this.x;
    this.absStartY = this.y;
    this.pointX    = point.pageX;
    this.pointY    = point.pageY;

    this._execEvent('beforeScrollStart');
  },

  _move: function (e) {
    if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
      return;
    }

    if ( this.options.preventDefault ) {  // increases performance on Android? TODO: check!
      e.preventDefault();
    }

    var point   = e.touches ? e.touches[0] : e,
      deltaX    = point.pageX - this.pointX,
      deltaY    = point.pageY - this.pointY,
      timestamp = utils.getTime(),
      newX, newY,
      absDistX, absDistY;

    this.pointX   = point.pageX;
    this.pointY   = point.pageY;

    this.distX    += deltaX;
    this.distY    += deltaY;
    absDistX    = Math.abs(this.distX);
    absDistY    = Math.abs(this.distY);

    // We need to move at least 10 pixels for the scrolling to initiate
    if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
      return;
    }

    // If you are scrolling in one direction lock the other
    if ( !this.directionLocked && !this.options.freeScroll ) {
      if ( absDistX > absDistY + this.options.directionLockThreshold ) {
        this.directionLocked = 'h';   // lock horizontally
      } else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
        this.directionLocked = 'v';   // lock vertically
      } else {
        this.directionLocked = 'n';   // no lock
      }
    }

    if ( this.directionLocked == 'h' ) {
      if ( this.options.eventPassthrough == 'vertical' ) {
        e.preventDefault();
      } else if ( this.options.eventPassthrough == 'horizontal' ) {
        this.initiated = false;
        return;
      }

      deltaY = 0;
    } else if ( this.directionLocked == 'v' ) {
      if ( this.options.eventPassthrough == 'horizontal' ) {
        e.preventDefault();
      } else if ( this.options.eventPassthrough == 'vertical' ) {
        this.initiated = false;
        return;
      }

      deltaX = 0;
    }

    deltaX = this.hasHorizontalScroll ? deltaX : 0;
    deltaY = this.hasVerticalScroll ? deltaY : 0;

    newX = this.x + deltaX;
    newY = this.y + deltaY;

    // Slow down if outside of the boundaries
    if ( newX > 0 || newX < this.maxScrollX ) {
      newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
    }
    if ( newY > 0 || newY < this.maxScrollY ) {
      newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
    }

    this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
    this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

    if ( !this.moved ) {
      this._execEvent('scrollStart');
    }

    this.moved = true;

    this._translate(newX, newY);

/* REPLACE START: _move */
    if ( timestamp - this.startTime > 300 ) {
      this.startTime = timestamp;
      this.startX = this.x;
      this.startY = this.y;

      if ( this.options.probeType == 1 ) {
        this._execEvent('scroll');
      }
    }

    if ( this.options.probeType > 1 ) {
      this._execEvent('scroll');
    }
/* REPLACE END: _move */

  },

  _end: function (e) {
    if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
      return;
    }

    if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
      e.preventDefault();
    }

    var point = e.changedTouches ? e.changedTouches[0] : e,
      momentumX,
      momentumY,
      duration = utils.getTime() - this.startTime,
      newX = Math.round(this.x),
      newY = Math.round(this.y),
      distanceX = Math.abs(newX - this.startX),
      distanceY = Math.abs(newY - this.startY),
      time = 0,
      easing = '';

    this.isInTransition = 0;
    this.initiated = 0;
    this.endTime = utils.getTime();

    // reset if we are outside of the boundaries
    if ( this.resetPosition(this.options.bounceTime) ) {
      return;
    }

    this.scrollTo(newX, newY);  // ensures that the last position is rounded

    // we scrolled less than 10 pixels
    if ( !this.moved ) {
      if ( this.options.tap ) {
        utils.tap(e, this.options.tap);
      }

      if ( this.options.click ) {
        utils.click(e);
      }

      this._execEvent('scrollCancel');
      return;
    }

    if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
      this._execEvent('flick');
      return;
    }

    // start momentum animation if needed
    if ( this.options.momentum && duration < 300 ) {
      momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
      momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
      newX = momentumX.destination;
      newY = momentumY.destination;
      time = Math.max(momentumX.duration, momentumY.duration);
      this.isInTransition = 1;
    }


    if ( this.options.snap ) {
      var snap = this._nearestSnap(newX, newY);
      this.currentPage = snap;
      time = this.options.snapSpeed || Math.max(
          Math.max(
            Math.min(Math.abs(newX - snap.x), 1000),
            Math.min(Math.abs(newY - snap.y), 1000)
          ), 300);
      newX = snap.x;
      newY = snap.y;

      this.directionX = 0;
      this.directionY = 0;
      easing = this.options.bounceEasing;
    }

// INSERT POINT: _end

    if ( newX != this.x || newY != this.y ) {
      // change easing function when scroller goes out of the boundaries
      if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
        easing = utils.ease.quadratic;
      }

      this.scrollTo(newX, newY, time, easing);
      return;
    }

    this._execEvent('scrollEnd');
  },

  _resize: function () {
    var that = this;

    clearTimeout(this.resizeTimeout);

    this.resizeTimeout = setTimeout(function () {
      that.refresh();
    }, this.options.resizePolling);
  },

  resetPosition: function (time) {
    var x = this.x,
      y = this.y;

    time = time || 0;

    if ( !this.hasHorizontalScroll || this.x > 0 ) {
      x = 0;
    } else if ( this.x < this.maxScrollX ) {
      x = this.maxScrollX;
    }

    if ( !this.hasVerticalScroll || this.y > 0 ) {
      y = 0;
    } else if ( this.y < this.maxScrollY ) {
      y = this.maxScrollY;
    }

    if ( x == this.x && y == this.y ) {
      return false;
    }

    this.scrollTo(x, y, time, this.options.bounceEasing);

    return true;
  },

  disable: function () {
    this.enabled = false;
  },

  enable: function () {
    this.enabled = true;
  },

  refresh: function () {
    var rf = this.wrapper.offsetHeight;   // Force reflow

    this.wrapperWidth = this.wrapper.clientWidth;
    this.wrapperHeight  = this.wrapper.clientHeight;

/* REPLACE START: refresh */

    this.scrollerWidth  = this.scroller.offsetWidth;
    this.scrollerHeight = this.scroller.offsetHeight;

    this.maxScrollX   = this.wrapperWidth - this.scrollerWidth;
    this.maxScrollY   = this.wrapperHeight - this.scrollerHeight;

/* REPLACE END: refresh */

    this.hasHorizontalScroll  = this.options.scrollX && this.maxScrollX < 0;
    this.hasVerticalScroll    = this.options.scrollY && this.maxScrollY < 0;

    if ( !this.hasHorizontalScroll ) {
      this.maxScrollX = 0;
      this.scrollerWidth = this.wrapperWidth;
    }

    if ( !this.hasVerticalScroll ) {
      this.maxScrollY = 0;
      this.scrollerHeight = this.wrapperHeight;
    }

    this.endTime = 0;
    this.directionX = 0;
    this.directionY = 0;

    this.wrapperOffset = utils.offset(this.wrapper);

    this._execEvent('refresh');

    this.resetPosition();

// INSERT POINT: _refresh

  },

  on: function (type, fn) {
    if ( !this._events[type] ) {
      this._events[type] = [];
    }

    this._events[type].push(fn);
  },

  off: function (type, fn) {
    if ( !this._events[type] ) {
      return;
    }

    var index = this._events[type].indexOf(fn);

    if ( index > -1 ) {
      this._events[type].splice(index, 1);
    }
  },

  _execEvent: function (type) {
    if ( !this._events[type] ) {
      return;
    }

    var i = 0,
      l = this._events[type].length;

    if ( !l ) {
      return;
    }

    for ( ; i < l; i++ ) {
      this._events[type][i].apply(this, [].slice.call(arguments, 1));
    }
  },

  scrollBy: function (x, y, time, easing) {
    x = this.x + x;
    y = this.y + y;
    time = time || 0;

    this.scrollTo(x, y, time, easing);
  },

  scrollTo: function (x, y, time, easing) {
    easing = easing || utils.ease.circular;

    this.isInTransition = this.options.useTransition && time > 0;

    if ( !time || (this.options.useTransition && easing.style) ) {
      this._transitionTimingFunction(easing.style);
      this._transitionTime(time);
      this._translate(x, y);
    } else {
      this._animate(x, y, time, easing.fn);
    }
  },

  // scrollToElement: function (el, time, offsetX, offsetY, easing) {
  //   el = el.nodeType ? el : this.scroller.querySelector(el);

  //   if ( !el ) {
  //     return;
  //   }

  //   var pos = utils.offset(el);

  //   pos.left -= this.wrapperOffset.left;
  //   pos.top  -= this.wrapperOffset.top;

  //   // if offsetX/Y are true we center the element to the screen
  //   if ( offsetX === true ) {
  //     offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
  //   }
  //   if ( offsetY === true ) {
  //     offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
  //   }

  //   pos.left -= offsetX || 0;
  //   pos.top  -= offsetY || 0;

  //   pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
  //   pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;

  //   time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;

  //   this.scrollTo(pos.left, pos.top, time, easing);
  // },

  _transitionTime: function (time) {
    time = time || 0;

    this.scrollerStyle[utils.style.transitionDuration] = time + 'ms';

    if ( !time && utils.isBadAndroid ) {
      this.scrollerStyle[utils.style.transitionDuration] = '0.001s';
    }


    if ( this.indicators ) {
      for ( var i = this.indicators.length; i--; ) {
        this.indicators[i].transitionTime(time);
      }
    }


// INSERT POINT: _transitionTime

  },

  _transitionTimingFunction: function (easing) {
    this.scrollerStyle[utils.style.transitionTimingFunction] = easing;


    if ( this.indicators ) {
      for ( var i = this.indicators.length; i--; ) {
        this.indicators[i].transitionTimingFunction(easing);
      }
    }


// INSERT POINT: _transitionTimingFunction

  },

  _translate: function (x, y) {
    if ( this.options.useTransform ) {

/* REPLACE START: _translate */

      this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

/* REPLACE END: _translate */

    } else {
      x = Math.round(x);
      y = Math.round(y);
      this.scrollerStyle.left = x + 'px';
      this.scrollerStyle.top = y + 'px';
    }

    this.x = x;
    this.y = y;


  if ( this.indicators ) {
    for ( var i = this.indicators.length; i--; ) {
      this.indicators[i].updatePosition();
    }
  }


// INSERT POINT: _translate

  },

  _initEvents: function (remove) {
    var eventType = remove ? utils.removeEvent : utils.addEvent,
      target = this.options.bindToWrapper ? this.wrapper : window;

    eventType(window, 'orientationchange', this);
    eventType(window, 'resize', this);

    if ( this.options.click ) {
      eventType(this.wrapper, 'click', this, true);
    }

    if ( !this.options.disableMouse ) {
      eventType(this.wrapper, 'mousedown', this);
      eventType(target, 'mousemove', this);
      eventType(target, 'mousecancel', this);
      eventType(target, 'mouseup', this);
    }

    if ( utils.hasPointer && !this.options.disablePointer ) {
      eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
      eventType(target, utils.prefixPointerEvent('pointermove'), this);
      eventType(target, utils.prefixPointerEvent('pointercancel'), this);
      eventType(target, utils.prefixPointerEvent('pointerup'), this);
    }

    if ( utils.hasTouch && !this.options.disableTouch ) {
      eventType(this.wrapper, 'touchstart', this);
      eventType(target, 'touchmove', this);
      eventType(target, 'touchcancel', this);
      eventType(target, 'touchend', this);
    }

    eventType(this.scroller, 'transitionend', this);
    eventType(this.scroller, 'webkitTransitionEnd', this);
    eventType(this.scroller, 'oTransitionEnd', this);
    eventType(this.scroller, 'MSTransitionEnd', this);
  },

  getComputedPosition: function () {
    var matrix = window.getComputedStyle(this.scroller, null),
      x, y;

    if ( this.options.useTransform ) {
      matrix = matrix[utils.style.transform].split(')')[0].split(', ');
      x = +(matrix[12] || matrix[4]);
      y = +(matrix[13] || matrix[5]);
    } else {
      x = +matrix.left.replace(/[^-\d.]/g, '');
      y = +matrix.top.replace(/[^-\d.]/g, '');
    }

    return { x: x, y: y };
  },

  _initIndicators: function () {
    var interactive = this.options.interactiveScrollbars,
      customStyle = typeof this.options.scrollbars != 'string',
      indicators = [],
      indicator;

    var that = this;

    this.indicators = [];

    if ( this.options.scrollbars ) {
      // Vertical scrollbar
      if ( this.options.scrollY ) {
        indicator = {
          el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
          interactive: interactive,
          defaultScrollbars: true,
          customStyle: customStyle,
          resize: this.options.resizeScrollbars,
          shrink: this.options.shrinkScrollbars,
          fade: this.options.fadeScrollbars,
          listenX: false
        };

        this.wrapper.appendChild(indicator.el);
        indicators.push(indicator);
      }

      // Horizontal scrollbar
      if ( this.options.scrollX ) {
        indicator = {
          el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
          interactive: interactive,
          defaultScrollbars: true,
          customStyle: customStyle,
          resize: this.options.resizeScrollbars,
          shrink: this.options.shrinkScrollbars,
          fade: this.options.fadeScrollbars,
          listenY: false
        };

        this.wrapper.appendChild(indicator.el);
        indicators.push(indicator);
      }
    }

    if ( this.options.indicators ) {
      // TODO: check concat compatibility
      indicators = indicators.concat(this.options.indicators);
    }

    for ( var i = indicators.length; i--; ) {
      this.indicators.push( new Indicator(this, indicators[i]) );
    }

    // TODO: check if we can use array.map (wide compatibility and performance issues)
    function _indicatorsMap (fn) {
      for ( var i = that.indicators.length; i--; ) {
        fn.call(that.indicators[i]);
      }
    }

    if ( this.options.fadeScrollbars ) {
      this.on('scrollEnd', function () {
        _indicatorsMap(function () {
          this.fade();
        });
      });

      this.on('scrollCancel', function () {
        _indicatorsMap(function () {
          this.fade();
        });
      });

      this.on('scrollStart', function () {
        _indicatorsMap(function () {
          this.fade(1);
        });
      });

      this.on('beforeScrollStart', function () {
        _indicatorsMap(function () {
          this.fade(1, true);
        });
      });
    }


    this.on('refresh', function () {
      _indicatorsMap(function () {
        this.refresh();
      });
    });

    this.on('destroy', function () {
      _indicatorsMap(function () {
        this.destroy();
      });

      delete this.indicators;
    });
  },

  _initWheel: function () {
    utils.addEvent(this.wrapper, 'wheel', this);
    utils.addEvent(this.wrapper, 'mousewheel', this);
    utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

    this.on('destroy', function () {
      utils.removeEvent(this.wrapper, 'wheel', this);
      utils.removeEvent(this.wrapper, 'mousewheel', this);
      utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
    });
  },

  _wheel: function (e) {
    if ( !this.enabled ) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    var wheelDeltaX, wheelDeltaY,
      newX, newY,
      that = this;

    if ( this.wheelTimeout === undefined ) {
      that._execEvent('scrollStart');
    }

    // Execute the scrollEnd event after 400ms the wheel stopped scrolling
    clearTimeout(this.wheelTimeout);
    this.wheelTimeout = setTimeout(function () {
      that._execEvent('scrollEnd');
      that.wheelTimeout = undefined;
    }, 400);

    if ( 'deltaX' in e ) {
      if (e.deltaMode === 1) {
        wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
        wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
      } else {
        wheelDeltaX = -e.deltaX;
        wheelDeltaY = -e.deltaY;
      }
    } else if ( 'wheelDeltaX' in e ) {
      wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
      wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
    } else if ( 'wheelDelta' in e ) {
      wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
    } else if ( 'detail' in e ) {
      wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
    } else {
      return;
    }

    wheelDeltaX *= this.options.invertWheelDirection;
    wheelDeltaY *= this.options.invertWheelDirection;

    if ( !this.hasVerticalScroll ) {
      wheelDeltaX = wheelDeltaY;
      wheelDeltaY = 0;
    }

    if ( this.options.snap ) {
      newX = this.currentPage.pageX;
      newY = this.currentPage.pageY;

      if ( wheelDeltaX > 0 ) {
        newX--;
      } else if ( wheelDeltaX < 0 ) {
        newX++;
      }

      if ( wheelDeltaY > 0 ) {
        newY--;
      } else if ( wheelDeltaY < 0 ) {
        newY++;
      }

      this.goToPage(newX, newY);

      return;
    }

    newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
    newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

    if ( newX > 0 ) {
      newX = 0;
    } else if ( newX < this.maxScrollX ) {
      newX = this.maxScrollX;
    }

    if ( newY > 0 ) {
      newY = 0;
    } else if ( newY < this.maxScrollY ) {
      newY = this.maxScrollY;
    }

    this.scrollTo(newX, newY, 0);

    if ( this.options.probeType > 1 ) {
      this._execEvent('scroll');
    }

// INSERT POINT: _wheel
  },

  _initSnap: function () {
    this.currentPage = {};

    if ( typeof this.options.snap == 'string' ) {
      this.options.snap = this.scroller.querySelectorAll(this.options.snap);
    }

    this.on('refresh', function () {
      var i = 0, l,
        m = 0, n,
        cx, cy,
        x = 0, y,
        stepX = this.options.snapStepX || this.wrapperWidth,
        stepY = this.options.snapStepY || this.wrapperHeight,
        el;

      this.pages = [];

      if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
        return;
      }

      if ( this.options.snap === true ) {
        cx = Math.round( stepX / 2 );
        cy = Math.round( stepY / 2 );

        while ( x > -this.scrollerWidth ) {
          this.pages[i] = [];
          l = 0;
          y = 0;

          while ( y > -this.scrollerHeight ) {
            this.pages[i][l] = {
              x: Math.max(x, this.maxScrollX),
              y: Math.max(y, this.maxScrollY),
              width: stepX,
              height: stepY,
              cx: x - cx,
              cy: y - cy
            };

            y -= stepY;
            l++;
          }

          x -= stepX;
          i++;
        }
      } else {
        el = this.options.snap;
        l = el.length;
        n = -1;

        for ( ; i < l; i++ ) {
          if ( i === 0 || el[i].offsetLeft <= el[i-1].offsetLeft ) {
            m = 0;
            n++;
          }

          if ( !this.pages[m] ) {
            this.pages[m] = [];
          }

          x = Math.max(-el[i].offsetLeft, this.maxScrollX);
          y = Math.max(-el[i].offsetTop, this.maxScrollY);
          cx = x - Math.round(el[i].offsetWidth / 2);
          cy = y - Math.round(el[i].offsetHeight / 2);

          this.pages[m][n] = {
            x: x,
            y: y,
            width: el[i].offsetWidth,
            height: el[i].offsetHeight,
            cx: cx,
            cy: cy
          };

          if ( x > this.maxScrollX ) {
            m++;
          }
        }
      }

      this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

      // Update snap threshold if needed
      if ( this.options.snapThreshold % 1 === 0 ) {
        this.snapThresholdX = this.options.snapThreshold;
        this.snapThresholdY = this.options.snapThreshold;
      } else {
        this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
        this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
      }
    });

    this.on('flick', function () {
      var time = this.options.snapSpeed || Math.max(
          Math.max(
            Math.min(Math.abs(this.x - this.startX), 1000),
            Math.min(Math.abs(this.y - this.startY), 1000)
          ), 300);

      this.goToPage(
        this.currentPage.pageX + this.directionX,
        this.currentPage.pageY + this.directionY,
        time
      );
    });
  },

  _nearestSnap: function (x, y) {
    if ( !this.pages.length ) {
      return { x: 0, y: 0, pageX: 0, pageY: 0 };
    }

    var i = 0,
      l = this.pages.length,
      m = 0;

    // Check if we exceeded the snap threshold
    if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
      Math.abs(y - this.absStartY) < this.snapThresholdY ) {
      return this.currentPage;
    }

    if ( x > 0 ) {
      x = 0;
    } else if ( x < this.maxScrollX ) {
      x = this.maxScrollX;
    }

    if ( y > 0 ) {
      y = 0;
    } else if ( y < this.maxScrollY ) {
      y = this.maxScrollY;
    }

    for ( ; i < l; i++ ) {
      if ( x >= this.pages[i][0].cx ) {
        x = this.pages[i][0].x;
        break;
      }
    }

    l = this.pages[i].length;

    for ( ; m < l; m++ ) {
      if ( y >= this.pages[0][m].cy ) {
        y = this.pages[0][m].y;
        break;
      }
    }

    if ( i == this.currentPage.pageX ) {
      i += this.directionX;

      if ( i < 0 ) {
        i = 0;
      } else if ( i >= this.pages.length ) {
        i = this.pages.length - 1;
      }

      x = this.pages[i][0].x;
    }

    if ( m == this.currentPage.pageY ) {
      m += this.directionY;

      if ( m < 0 ) {
        m = 0;
      } else if ( m >= this.pages[0].length ) {
        m = this.pages[0].length - 1;
      }

      y = this.pages[0][m].y;
    }

    return {
      x: x,
      y: y,
      pageX: i,
      pageY: m
    };
  },

  goToPage: function (x, y, time, easing) {
    easing = easing || this.options.bounceEasing;

    if ( x >= this.pages.length ) {
      x = this.pages.length - 1;
    } else if ( x < 0 ) {
      x = 0;
    }

    if ( y >= this.pages[x].length ) {
      y = this.pages[x].length - 1;
    } else if ( y < 0 ) {
      y = 0;
    }

    var posX = this.pages[x][y].x,
      posY = this.pages[x][y].y;

    time = time === undefined ? this.options.snapSpeed || Math.max(
      Math.max(
        Math.min(Math.abs(posX - this.x), 1000),
        Math.min(Math.abs(posY - this.y), 1000)
      ), 300) : time;

    this.currentPage = {
      x: posX,
      y: posY,
      pageX: x,
      pageY: y
    };

    this.scrollTo(posX, posY, time, easing);
  },

  next: function (time, easing) {
    var x = this.currentPage.pageX,
      y = this.currentPage.pageY;

    x++;

    if ( x >= this.pages.length && this.hasVerticalScroll ) {
      x = 0;
      y++;
    }

    this.goToPage(x, y, time, easing);
  },

  prev: function (time, easing) {
    var x = this.currentPage.pageX,
      y = this.currentPage.pageY;

    x--;

    if ( x < 0 && this.hasVerticalScroll ) {
      x = 0;
      y--;
    }

    this.goToPage(x, y, time, easing);
  },

  _initKeys: function (e) {
    // default key bindings
    var keys = {
      pageUp: 33,
      pageDown: 34,
      end: 35,
      home: 36,
      left: 37,
      up: 38,
      right: 39,
      down: 40
    };
    var i;

    // if you give me characters I give you keycode
    if ( typeof this.options.keyBindings == 'object' ) {
      for ( i in this.options.keyBindings ) {
        if ( typeof this.options.keyBindings[i] == 'string' ) {
          this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
        }
      }
    } else {
      this.options.keyBindings = {};
    }

    for ( i in keys ) {
      this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
    }

    utils.addEvent(window, 'keydown', this);

    this.on('destroy', function () {
      utils.removeEvent(window, 'keydown', this);
    });
  },

  _key: function (e) {
    if ( !this.enabled ) {
      return;
    }

    var snap = this.options.snap, // we are using this alot, better to cache it
      newX = snap ? this.currentPage.pageX : this.x,
      newY = snap ? this.currentPage.pageY : this.y,
      now = utils.getTime(),
      prevTime = this.keyTime || 0,
      acceleration = 0.250,
      pos;

    if ( this.options.useTransition && this.isInTransition ) {
      pos = this.getComputedPosition();

      this._translate(Math.round(pos.x), Math.round(pos.y));
      this.isInTransition = false;
    }

    this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

    switch ( e.keyCode ) {
      case this.options.keyBindings.pageUp:
        if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
          newX += snap ? 1 : this.wrapperWidth;
        } else {
          newY += snap ? 1 : this.wrapperHeight;
        }
        break;
      case this.options.keyBindings.pageDown:
        if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
          newX -= snap ? 1 : this.wrapperWidth;
        } else {
          newY -= snap ? 1 : this.wrapperHeight;
        }
        break;
      case this.options.keyBindings.end:
        newX = snap ? this.pages.length-1 : this.maxScrollX;
        newY = snap ? this.pages[0].length-1 : this.maxScrollY;
        break;
      case this.options.keyBindings.home:
        newX = 0;
        newY = 0;
        break;
      case this.options.keyBindings.left:
        newX += snap ? -1 : 5 + this.keyAcceleration>>0;
        break;
      case this.options.keyBindings.up:
        newY += snap ? 1 : 5 + this.keyAcceleration>>0;
        break;
      case this.options.keyBindings.right:
        newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
        break;
      case this.options.keyBindings.down:
        newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
        break;
      default:
        return;
    }

    if ( snap ) {
      this.goToPage(newX, newY);
      return;
    }

    if ( newX > 0 ) {
      newX = 0;
      this.keyAcceleration = 0;
    } else if ( newX < this.maxScrollX ) {
      newX = this.maxScrollX;
      this.keyAcceleration = 0;
    }

    if ( newY > 0 ) {
      newY = 0;
      this.keyAcceleration = 0;
    } else if ( newY < this.maxScrollY ) {
      newY = this.maxScrollY;
      this.keyAcceleration = 0;
    }

    this.scrollTo(newX, newY, 0);

    this.keyTime = now;
  },

  _animate: function (destX, destY, duration, easingFn) {
    var that = this,
      startX = this.x,
      startY = this.y,
      startTime = utils.getTime(),
      destTime = startTime + duration;

    function step () {
      var now = utils.getTime(),
        newX, newY,
        easing;

      if ( now >= destTime ) {
        that.isAnimating = false;
        that._translate(destX, destY);
        
        if ( !that.resetPosition(that.options.bounceTime) ) {
          that._execEvent('scrollEnd');
        }

        return;
      }

      now = ( now - startTime ) / duration;
      easing = easingFn(now);
      newX = ( destX - startX ) * easing + startX;
      newY = ( destY - startY ) * easing + startY;
      that._translate(newX, newY);

      if ( that.isAnimating ) {
        rAF(step);
      }

      if ( that.options.probeType == 3 ) {
        that._execEvent('scroll');
      }
    }

    this.isAnimating = true;
    step();
  },

  handleEvent: function (e) {
    switch ( e.type ) {
      case 'touchstart':
      case 'pointerdown':
      case 'MSPointerDown':
      case 'mousedown':
        this._start(e);
        break;
      case 'touchmove':
      case 'pointermove':
      case 'MSPointerMove':
      case 'mousemove':
        this._move(e);
        break;
      case 'touchend':
      case 'pointerup':
      case 'MSPointerUp':
      case 'mouseup':
      case 'touchcancel':
      case 'pointercancel':
      case 'MSPointerCancel':
      case 'mousecancel':
        this._end(e);
        break;
      case 'orientationchange':
      case 'resize':
        this._resize();
        break;
      case 'transitionend':
      case 'webkitTransitionEnd':
      case 'oTransitionEnd':
      case 'MSTransitionEnd':
        this._transitionEnd(e);
        break;
      case 'wheel':
      case 'DOMMouseScroll':
      case 'mousewheel':
        this._wheel(e);
        break;
      case 'keydown':
        this._key(e);
        break;
      case 'click':
        if ( !e._constructed ) {
          e.preventDefault();
          e.stopPropagation();
        }
        break;
    }
  }
};
function createDefaultScrollbar (direction, interactive, type) {
  var scrollbar = document.createElement('div'),
    indicator = document.createElement('div');

  if ( type === true ) {
    scrollbar.style.cssText = 'position:absolute;z-index:9999';
    indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgb(2,142,175);border:1px solid rgb(2,142,175);border-radius:3px';
  }

  indicator.className = 'iScrollIndicator';

  if ( direction == 'h' ) {
    if ( type === true ) {
      scrollbar.style.cssText += ';height:3px;left:2px;right:2px;bottom:6px';
      indicator.style.height = '100%';
    }
    scrollbar.className = 'iScrollHorizontalScrollbar';
  } else {
    if ( type === true ) {
      scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
      indicator.style.width = '100%';
    }
    scrollbar.className = 'iScrollVerticalScrollbar';
  }

  scrollbar.style.cssText += ';overflow:hidden';

  if ( !interactive ) {
    scrollbar.style.pointerEvents = 'none';
  }

  scrollbar.appendChild(indicator);

  return scrollbar;
}

function Indicator (scroller, options) {
  this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
  this.wrapperStyle = this.wrapper.style;
  this.indicator = this.wrapper.children[0];
  this.indicatorStyle = this.indicator.style;
  this.scroller = scroller;

  this.options = {
    listenX: true,
    listenY: true,
    interactive: false,
    resize: true,
    defaultScrollbars: false,
    shrink: false,
    fade: false,
    speedRatioX: 0,
    speedRatioY: 0
  };

  for ( var i in options ) {
    this.options[i] = options[i];
  }

  this.sizeRatioX = 1;
  this.sizeRatioY = 1;
  this.maxPosX = 0;
  this.maxPosY = 0;

  if ( this.options.interactive ) {
    if ( !this.options.disableTouch ) {
      utils.addEvent(this.indicator, 'touchstart', this);
      utils.addEvent(window, 'touchend', this);
    }
    if ( !this.options.disablePointer ) {
      utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
      utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
    }
    if ( !this.options.disableMouse ) {
      utils.addEvent(this.indicator, 'mousedown', this);
      utils.addEvent(window, 'mouseup', this);
    }
  }

  if ( this.options.fade ) {
    this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
    this.wrapperStyle[utils.style.transitionDuration] = utils.isBadAndroid ? '0.001s' : '0ms';
    this.wrapperStyle.opacity = '0';
  }
}

Indicator.prototype = {
  handleEvent: function (e) {
    switch ( e.type ) {
      case 'touchstart':
      case 'pointerdown':
      case 'MSPointerDown':
      case 'mousedown':
        this._start(e);
        break;
      case 'touchmove':
      case 'pointermove':
      case 'MSPointerMove':
      case 'mousemove':
        this._move(e);
        break;
      case 'touchend':
      case 'pointerup':
      case 'MSPointerUp':
      case 'mouseup':
      case 'touchcancel':
      case 'pointercancel':
      case 'MSPointerCancel':
      case 'mousecancel':
        this._end(e);
        break;
    }
  },

  destroy: function () {
    if ( this.options.interactive ) {
      utils.removeEvent(this.indicator, 'touchstart', this);
      utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
      utils.removeEvent(this.indicator, 'mousedown', this);

      utils.removeEvent(window, 'touchmove', this);
      utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
      utils.removeEvent(window, 'mousemove', this);

      utils.removeEvent(window, 'touchend', this);
      utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
      utils.removeEvent(window, 'mouseup', this);
    }

    if ( this.options.defaultScrollbars ) {
      this.wrapper.parentNode.removeChild(this.wrapper);
    }
  },

  _start: function (e) {
    var point = e.touches ? e.touches[0] : e;

    e.preventDefault();
    e.stopPropagation();

    this.transitionTime();

    this.initiated = true;
    this.moved = false;
    this.lastPointX = point.pageX;
    this.lastPointY = point.pageY;

    this.startTime  = utils.getTime();

    if ( !this.options.disableTouch ) {
      utils.addEvent(window, 'touchmove', this);
    }
    if ( !this.options.disablePointer ) {
      utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
    }
    if ( !this.options.disableMouse ) {
      utils.addEvent(window, 'mousemove', this);
    }

    this.scroller._execEvent('beforeScrollStart');
  },

  _move: function (e) {
    var point = e.touches ? e.touches[0] : e,
      deltaX, deltaY,
      newX, newY,
      timestamp = utils.getTime();

    if ( !this.moved ) {
      this.scroller._execEvent('scrollStart');
    }

    this.moved = true;

    deltaX = point.pageX - this.lastPointX;
    this.lastPointX = point.pageX;

    deltaY = point.pageY - this.lastPointY;
    this.lastPointY = point.pageY;

    newX = this.x + deltaX;
    newY = this.y + deltaY;

    this._pos(newX, newY);


    if ( this.scroller.options.probeType == 1 && timestamp - this.startTime > 300 ) {
      this.startTime = timestamp;
      this.scroller._execEvent('scroll');
    } else if ( this.scroller.options.probeType > 1 ) {
      this.scroller._execEvent('scroll');
    }


// INSERT POINT: indicator._move

    e.preventDefault();
    e.stopPropagation();
  },

  _end: function (e) {
    if ( !this.initiated ) {
      return;
    }

    this.initiated = false;

    e.preventDefault();
    e.stopPropagation();

    utils.removeEvent(window, 'touchmove', this);
    utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
    utils.removeEvent(window, 'mousemove', this);

    if ( this.scroller.options.snap ) {
      var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

      var time = this.options.snapSpeed || Math.max(
          Math.max(
            Math.min(Math.abs(this.scroller.x - snap.x), 1000),
            Math.min(Math.abs(this.scroller.y - snap.y), 1000)
          ), 300);

      if ( this.scroller.x != snap.x || this.scroller.y != snap.y ) {
        this.scroller.directionX = 0;
        this.scroller.directionY = 0;
        this.scroller.currentPage = snap;
        this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
      }
    }

    if ( this.moved ) {
      this.scroller._execEvent('scrollEnd');
    }
  },

  transitionTime: function (time) {
    time = time || 0;
    this.indicatorStyle[utils.style.transitionDuration] = time + 'ms';

    if ( !time && utils.isBadAndroid ) {
      this.indicatorStyle[utils.style.transitionDuration] = '0.001s';
    }
  },

  transitionTimingFunction: function (easing) {
    this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
  },

  refresh: function () {
    this.transitionTime();

    if ( this.options.listenX && !this.options.listenY ) {
      this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
    } else if ( this.options.listenY && !this.options.listenX ) {
      this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
    } else {
      this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
    }

    if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
      utils.addClass(this.wrapper, 'iScrollBothScrollbars');
      utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

      if ( this.options.defaultScrollbars && this.options.customStyle ) {
        if ( this.options.listenX ) {
          this.wrapper.style.right = '8px';
        } else {
          this.wrapper.style.bottom = '8px';
        }
      }
    } else {
      utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
      utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

      if ( this.options.defaultScrollbars && this.options.customStyle ) {
        if ( this.options.listenX ) {
          this.wrapper.style.right = '2px';
        } else {
          this.wrapper.style.bottom = '2px';
        }
      }
    }

    var r = this.wrapper.offsetHeight;  // force refresh

    if ( this.options.listenX ) {
      this.wrapperWidth = this.wrapper.clientWidth;
      if ( this.options.resize ) {
        this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
        this.indicatorStyle.width = this.indicatorWidth + 'px';
      } else {
        this.indicatorWidth = this.indicator.clientWidth;
      }

      this.maxPosX = this.wrapperWidth - this.indicatorWidth;

      if ( this.options.shrink == 'clip' ) {
        this.minBoundaryX = -this.indicatorWidth + 8;
        this.maxBoundaryX = this.wrapperWidth - 8;
      } else {
        this.minBoundaryX = 0;
        this.maxBoundaryX = this.maxPosX;
      }

      this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));  
    }

    if ( this.options.listenY ) {
      this.wrapperHeight = this.wrapper.clientHeight;
      if ( this.options.resize ) {
        this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
        this.indicatorStyle.height = this.indicatorHeight + 'px';
      } else {
        this.indicatorHeight = this.indicator.clientHeight;
      }

      this.maxPosY = this.wrapperHeight - this.indicatorHeight;

      if ( this.options.shrink == 'clip' ) {
        this.minBoundaryY = -this.indicatorHeight + 8;
        this.maxBoundaryY = this.wrapperHeight - 8;
      } else {
        this.minBoundaryY = 0;
        this.maxBoundaryY = this.maxPosY;
      }

      this.maxPosY = this.wrapperHeight - this.indicatorHeight;
      this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
    }

    this.updatePosition();
  },

  updatePosition: function () {
    var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
      y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

    if ( !this.options.ignoreBoundaries ) {
      if ( x < this.minBoundaryX ) {
        if ( this.options.shrink == 'scale' ) {
          this.width = Math.max(this.indicatorWidth + x, 8);
          this.indicatorStyle.width = this.width + 'px';
        }
        x = this.minBoundaryX;
      } else if ( x > this.maxBoundaryX ) {
        if ( this.options.shrink == 'scale' ) {
          this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
          this.indicatorStyle.width = this.width + 'px';
          x = this.maxPosX + this.indicatorWidth - this.width;
        } else {
          x = this.maxBoundaryX;
        }
      } else if ( this.options.shrink == 'scale' && this.width != this.indicatorWidth ) {
        this.width = this.indicatorWidth;
        this.indicatorStyle.width = this.width + 'px';
      }

      if ( y < this.minBoundaryY ) {
        if ( this.options.shrink == 'scale' ) {
          this.height = Math.max(this.indicatorHeight + y * 3, 8);
          this.indicatorStyle.height = this.height + 'px';
        }
        y = this.minBoundaryY;
      } else if ( y > this.maxBoundaryY ) {
        if ( this.options.shrink == 'scale' ) {
          this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
          this.indicatorStyle.height = this.height + 'px';
          y = this.maxPosY + this.indicatorHeight - this.height;
        } else {
          y = this.maxBoundaryY;
        }
      } else if ( this.options.shrink == 'scale' && this.height != this.indicatorHeight ) {
        this.height = this.indicatorHeight;
        this.indicatorStyle.height = this.height + 'px';
      }
    }

    this.x = x;
    this.y = y;

    if ( this.scroller.options.useTransform ) {
      this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
    } else {
      this.indicatorStyle.left = x + 'px';
      this.indicatorStyle.top = y + 'px';
    }
  },

  _pos: function (x, y) {
    if ( x < 0 ) {
      x = 0;
    } else if ( x > this.maxPosX ) {
      x = this.maxPosX;
    }

    if ( y < 0 ) {
      y = 0;
    } else if ( y > this.maxPosY ) {
      y = this.maxPosY;
    }

    x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
    y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

    this.scroller.scrollTo(x, y);
  },

  fade: function (val, hold) {
    if ( hold && !this.visible ) {
      return;
    }

    clearTimeout(this.fadeTimeout);
    this.fadeTimeout = null;

    var time = val ? 250 : 500,
      delay = val ? 0 : 300;

    val = val ? '1' : '0';

    this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

    this.fadeTimeout = setTimeout((function (val) {
      this.wrapperStyle.opacity = val;
      this.visible = +val;
    }).bind(this, val), delay);
  }
};

IScroll.utils = utils;

if ( typeof module != 'undefined' && module.exports ) {
  module.exports = IScroll;
} else {
  window.IScroll = IScroll;
}

})(window, document, Math);
/*
 AngularJS v1.2.26
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(W,X,t){'use strict';function C(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.26/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function Pa(b){if(null==b||Ga(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:v(b)||J(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d;if(b)if(P(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(J(b)||Pa(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else if(b.forEach&&b.forEach!==r)b.forEach(a,c);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Zb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Tc(b,
a,c){for(var d=Zb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function $b(b){return function(a,c){b(c,a)}}function hb(){for(var b=ma.length,a;b;){b--;a=ma[b].charCodeAt(0);if(57==a)return ma[b]="A",ma.join("");if(90==a)ma[b]="0";else return ma[b]=String.fromCharCode(a+1),ma.join("")}ma.unshift("0");return ma.join("")}function ac(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function D(b){var a=b.$$hashKey;r(arguments,function(a){a!==b&&r(a,function(a,c){b[c]=a})});ac(b,a);return b}function U(b){return parseInt(b,
10)}function bc(b,a){return D(new (D(function(){},{prototype:b})),a)}function E(){}function Qa(b){return b}function ba(b){return function(){return b}}function x(b){return"undefined"===typeof b}function y(b){return"undefined"!==typeof b}function T(b){return null!=b&&"object"===typeof b}function v(b){return"string"===typeof b}function ib(b){return"number"===typeof b}function ta(b){return"[object Date]"===za.call(b)}function P(b){return"function"===typeof b}function jb(b){return"[object RegExp]"===za.call(b)}
function Ga(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Uc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Vc(b,a,c){var d=[];r(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Ra(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Sa(b,a){var c=Ra(b,a);0<=c&&b.splice(c,1);return a}function Ha(b,a,c,d){if(Ga(b)||b&&b.$evalAsync&&b.$watch)throw Ta("cpws");if(a){if(b===a)throw Ta("cpi");c=c||[];
d=d||[];if(T(b)){var e=Ra(c,b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(J(b))for(var f=a.length=0;f<b.length;f++)e=Ha(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;J(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)e=Ha(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e;ac(a,g)}}else if(a=b)J(b)?a=Ha(b,[],c,d):ta(b)?a=new Date(b.getTime()):jb(b)?(a=RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):T(b)&&(a=Ha(b,{},c,d));
return a}function ha(b,a){if(J(b)){a=a||[];for(var c=0;c<b.length;c++)a[c]=b[c]}else if(T(b))for(c in a=a||{},b)!kb.call(b,c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a||b}function Aa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(J(b)){if(!J(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!Aa(b[d],a[d]))return!1;return!0}}else{if(ta(b))return ta(a)?isNaN(b.getTime())&&isNaN(a.getTime())||b.getTime()===
a.getTime():!1;if(jb(b)&&jb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Ga(b)||Ga(a)||J(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!P(b[d])){if(!Aa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==t&&!P(a[d]))return!1;return!0}return!1}function Bb(b,a){var c=2<arguments.length?Ba.call(arguments,2):[];return!P(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(Ba.call(arguments,
0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Wc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=t:Ga(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function na(b,a){return"undefined"===typeof b?t:JSON.stringify(b,Wc,a?"  ":null)}function cc(b){return v(b)?JSON.parse(b):b}function Ua(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=K(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;
return b}function ia(b){b=w(b).clone();try{b.empty()}catch(a){}var c=w("<div>").append(b).html();try{return 3===b[0].nodeType?K(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+K(b)})}catch(d){return K(c)}}function dc(b){try{return decodeURIComponent(b)}catch(a){}}function ec(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=dc(c[0]),y(d)&&(b=y(c[1])?dc(c[1]):!0,kb.call(a,d)?J(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Cb(b){var a=
[];r(b,function(b,d){J(b)?r(b,function(b){a.push(Ca(d,!0)+(!0===b?"":"="+Ca(b,!0)))}):a.push(Ca(d,!0)+(!0===b?"":"="+Ca(b,!0)))});return a.length?a.join("&"):""}function lb(b){return Ca(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ca(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Xc(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g=["ng:app","ng-app","x-ng-app",
"data-ng-app"],k=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;r(g,function(a){g[a]=!0;c(X.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(r(b.querySelectorAll("."+a),c),r(b.querySelectorAll("."+a+"\\:"),c),r(b.querySelectorAll("["+a+"]"),c))});r(d,function(a){if(!e){var b=k.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):r(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}function fc(b,a){var c=function(){b=w(b);if(b.injector()){var c=b[0]===X?
"document":ia(b);throw Ta("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=gc(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(W&&!d.test(W.name))return c();W.name=W.name.replace(d,"");Va.resumeBootstrap=function(b){r(b,function(b){a.push(b)});c()}}function mb(b,a){a=
a||"_";return b.replace(Yc,function(b,d){return(d?a:"")+b.toLowerCase()})}function Db(b,a,c){if(!b)throw Ta("areq",a||"?",c||"required");return b}function Wa(b,a,c){c&&J(b)&&(b=b[b.length-1]);Db(P(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Da(b,a){if("hasOwnProperty"===b)throw Ta("badname",a);}function hc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&P(b)?Bb(e,b):b}function Eb(b){var a=
b[0];b=b[b.length-1];if(a===b)return w(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return w(c)}function Zc(b){var a=C("$injector"),c=C("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||C;return b.module||(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!f)throw a("nomod",
e);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};g&&l(g);return n}())}}())}
function $c(b){D(b,{bootstrap:fc,copy:Ha,extend:D,equals:Aa,element:w,forEach:r,injector:gc,noop:E,bind:Bb,toJson:na,fromJson:cc,identity:Qa,isUndefined:x,isDefined:y,isString:v,isFunction:P,isObject:T,isNumber:ib,isElement:Uc,isArray:J,version:ad,isDate:ta,lowercase:K,uppercase:Ia,callbacks:{counter:0},$$minErr:C,$$csp:Xa});Ya=Zc(W);try{Ya("ngLocale")}catch(a){Ya("ngLocale",[]).provider("$locale",bd)}Ya("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:cd});a.provider("$compile",
ic).directive({a:dd,input:jc,textarea:jc,form:ed,script:fd,select:gd,style:hd,option:id,ngBind:jd,ngBindHtml:kd,ngBindTemplate:ld,ngClass:md,ngClassEven:nd,ngClassOdd:od,ngCloak:pd,ngController:qd,ngForm:rd,ngHide:sd,ngIf:td,ngInclude:ud,ngInit:vd,ngNonBindable:wd,ngPluralize:xd,ngRepeat:yd,ngShow:zd,ngStyle:Ad,ngSwitch:Bd,ngSwitchWhen:Cd,ngSwitchDefault:Dd,ngOptions:Ed,ngTransclude:Fd,ngModel:Gd,ngList:Hd,ngChange:Id,required:kc,ngRequired:kc,ngValue:Jd}).directive({ngInclude:Kd}).directive(Fb).directive(lc);
a.provider({$anchorScroll:Ld,$animate:Md,$browser:Nd,$cacheFactory:Od,$controller:Pd,$document:Qd,$exceptionHandler:Rd,$filter:mc,$interpolate:Sd,$interval:Td,$http:Ud,$httpBackend:Vd,$location:Wd,$log:Xd,$parse:Yd,$rootScope:Zd,$q:$d,$sce:ae,$sceDelegate:be,$sniffer:ce,$templateCache:de,$timeout:ee,$window:fe,$$rAF:ge,$$asyncCallback:he})}])}function Za(b){return b.replace(ie,function(a,b,d,e){return e?d.toUpperCase():d}).replace(je,"Moz$1")}function Gb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:
[this],m=a,h,l,n,p,q,s;if(!d||null!=b)for(;e.length;)for(h=e.shift(),l=0,n=h.length;l<n;l++)for(p=w(h[l]),m?p.triggerHandler("$destroy"):m=!m,q=0,p=(s=p.children()).length;q<p;q++)e.push(Ea(s[q]));return f.apply(this,arguments)}var f=Ea.fn[b],f=f.$original||f;e.$original=f;Ea.fn[b]=e}function S(b){if(b instanceof S)return b;v(b)&&(b=aa(b));if(!(this instanceof S)){if(v(b)&&"<"!=b.charAt(0))throw Hb("nosel");return new S(b)}if(v(b)){var a=b;b=X;var c;if(c=ke.exec(a))b=[b.createElement(c[1])];else{var d=
b,e;b=d.createDocumentFragment();c=[];if(Ib.test(a)){d=b.appendChild(d.createElement("div"));e=(le.exec(a)||["",""])[1].toLowerCase();e=ea[e]||ea._default;d.innerHTML="<div>&#160;</div>"+e[1]+a.replace(me,"<$1></$2>")+e[2];d.removeChild(d.firstChild);for(a=e[0];a--;)d=d.lastChild;a=0;for(e=d.childNodes.length;a<e;++a)c.push(d.childNodes[a]);d=b.firstChild;d.textContent=""}else c.push(d.createTextNode(a));b.textContent="";b.innerHTML="";b=c}Jb(this,b);w(X.createDocumentFragment()).append(this)}else Jb(this,
b)}function Kb(b){return b.cloneNode(!0)}function Ja(b){Lb(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ja(b[a])}function nc(b,a,c,d){if(y(d))throw Hb("offargs");var e=oa(b,"events");oa(b,"handle")&&(x(a)?r(e,function(a,c){$a(b,c,a);delete e[c]}):r(a.split(" "),function(a){x(c)?($a(b,a,e[a]),delete e[a]):Sa(e[a]||[],c)}))}function Lb(b,a){var c=b.ng339,d=ab[c];d&&(a?delete ab[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),nc(b)),delete ab[c],b.ng339=t))}function oa(b,a,c){var d=
b.ng339,d=ab[d||-1];if(y(c))d||(b.ng339=d=++ne,d=ab[d]={}),d[a]=c;else return d&&d[a]}function Mb(b,a,c){var d=oa(b,"data"),e=y(c),f=!e&&y(a),g=f&&!T(a);d||g||oa(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];D(d,a)}else return d}function Nb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function nb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",aa((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+aa(a)+" "," ")))})}function ob(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=aa(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",aa(c))}}function Jb(b,a){if(a){a=a.nodeName||!y(a.length)||Ga(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function oc(b,a){return pb(b,"$"+(a||"ngController")+"Controller")}function pb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=J(a)?a:[a];b;){for(var d=
0,e=a.length;d<e;d++)if((c=w.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}function pc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ja(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function qc(b,a){var c=qb[a.toLowerCase()];return c&&rc[b.nodeName]&&c}function oe(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||X);if(x(c.defaultPrevented)){var f=
c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var g=ha(a[e||c.type]||[]);r(g,function(a){a.call(b,c)});8>=Q?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ka(b,a){var c=typeof b,d;"function"==c||"object"==c&&null!==b?"function"==typeof(d=
b.$$hashKey)?d=b.$$hashKey():d===t&&(d=b.$$hashKey=(a||hb)()):d=b;return c+":"+d}function bb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function sc(b){var a,c;"function"===typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(pe,""),c=c.match(qe),r(c[1].split(re),function(b){b.replace(se,function(b,c,d){a.push(d)})})),b.$inject=a):J(b)?(c=b.length-1,Wa(b[c],"fn"),a=b.slice(0,c)):Wa(b,"fn",!0);return a}function gc(b){function a(a){return function(b,c){if(T(b))r(b,
$b(a));else return a(b,c)}}function c(a,b){Da(a,"service");if(P(b)||J(b))b=n.instantiate(b);if(!b.$get)throw cb("pget",a);return l[a+k]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,f,k;r(a,function(a){if(!h.get(a)){h.put(a,!0);try{if(v(a))for(c=Ya(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,f=0,k=d.length;f<k;f++){var g=d[f],m=n.get(g[0]);m[g[1]].apply(m,g[2])}else P(a)?b.push(n.invoke(a)):J(a)?b.push(n.invoke(a)):Wa(a,"module")}catch(l){throw J(a)&&(a=
a[a.length-1]),l.message&&(l.stack&&-1==l.stack.indexOf(l.message))&&(l=l.message+"\n"+l.stack),cb("modulerr",a,l.stack||l.message||l);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===g)throw cb("cdep",d+" <- "+m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=g,a[d]=b(d)}catch(e){throw a[d]===g&&delete a[d],e;}finally{m.shift()}}function d(a,b,e){var f=[],k=sc(a),g,m,h;m=0;for(g=k.length;m<g;m++){h=k[m];if("string"!==typeof h)throw cb("itkn",h);f.push(e&&e.hasOwnProperty(h)?
e[h]:c(h))}J(a)&&(a=a[g]);return a.apply(b,f)}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(J(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return T(e)||P(e)?e:c},get:c,annotate:sc,has:function(b){return l.hasOwnProperty(b+k)||a.hasOwnProperty(b)}}}var g={},k="Provider",m=[],h=new bb([],!0),l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,ba(b))}),constant:a(function(a,
b){Da(a,"constant");l[a]=b;p[a]=b}),decorator:function(a,b){var c=n.get(a+k),d=c.$get;c.$get=function(){var a=q.invoke(d,c);return q.invoke(b,null,{$delegate:a})}}}},n=l.$injector=f(l,function(){throw cb("unpr",m.join(" <- "));}),p={},q=p.$injector=f(p,function(a){a=n.get(a+k);return q.invoke(a.$get,a)});r(e(b),function(a){q.invoke(a||E)});return q}function Ld(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;
r(a,function(a){b||"a"!==K(a.nodeName)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function he(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function te(b,a,c,d){function e(a){try{a.apply(null,
Ba.call(arguments,1))}finally{if(s--,0===s)for(;F.length;)try{F.pop()()}catch(b){c.error(b)}}}function f(a,b){(function fa(){r(u,function(a){a()});A=b(fa,a)})()}function g(){z=null;N!=k.url()&&(N=k.url(),r(ca,function(a){a(k.url())}))}var k=this,m=a[0],h=b.location,l=b.history,n=b.setTimeout,p=b.clearTimeout,q={};k.isMock=!1;var s=0,F=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){s++};k.notifyWhenNoOutstandingRequests=function(a){r(u,function(a){a()});0===s?a():F.push(a)};
var u=[],A;k.addPollFn=function(a){x(A)&&f(100,n);u.push(a);return a};var N=h.href,R=a.find("base"),z=null;k.url=function(a,c){h!==b.location&&(h=b.location);l!==b.history&&(l=b.history);if(a){if(N!=a)return N=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),R.attr("href",R.attr("href"))):(z=a,c?h.replace(a):h.href=a),k}else return z||h.href.replace(/%27/g,"'")};var ca=[],L=!1;k.onUrlChange=function(a){if(!L){if(d.history)w(b).on("popstate",g);if(d.hashchange)w(b).on("hashchange",g);
else k.addPollFn(g);L=!0}ca.push(a);return a};k.$$checkUrlChange=g;k.baseHref=function(){var a=R.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var O={},da="",B=k.baseHref();k.cookies=function(a,b){var d,e,f,k;if(a)b===t?m.cookie=escape(a)+"=;path="+B+";expires=Thu, 01 Jan 1970 00:00:00 GMT":v(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+B).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==
da)for(da=m.cookie,d=da.split("; "),O={},f=0;f<d.length;f++)e=d[f],k=e.indexOf("="),0<k&&(a=unescape(e.substring(0,k)),O[a]===t&&(O[a]=unescape(e.substring(k+1))));return O}};k.defer=function(a,b){var c;s++;c=n(function(){delete q[c];e(a)},b||0);q[c]=!0;return c};k.defer.cancel=function(a){return q[a]?(delete q[a],p(a),e(E),!0):!1}}function Nd(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new te(b,d,a,c)}]}function Od(){this.$get=function(){function b(b,d){function e(a){a!=
n&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw C("$cacheFactory")("iid",b);var g=0,k=D({},d,{id:b}),m={},h=d&&d.capacity||Number.MAX_VALUE,l={},n=null,p=null;return a[b]={put:function(a,b){if(h<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!x(b))return a in m||g++,m[a]=b,g>h&&this.remove(p.key),b},get:function(a){if(h<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(h<Number.MAX_VALUE){var b=
l[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);f(b.n,b.p);delete l[a]}delete m[a];g--},removeAll:function(){m={};g=0;l={};n=p=null},destroy:function(){l=k=m=null;delete a[b]},info:function(){return D({},k,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function de(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function ic(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
g=/^(on[a-z]+|formaction)$/;this.directive=function m(a,e){Da(a,"directive");v(a)?(Db(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];r(c[a],function(c,f){try{var g=b.invoke(c);P(g)?g={compile:ba(g)}:!g.compile&&g.link&&(g.compile=ba(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(m){d(m)}});return e}])),c[a].push(e)):r(a,$b(m));
return this};this.aHrefSanitizationWhitelist=function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,n,p,q,s,F,u,A,N,R){function z(a,b,c,d,e){a instanceof
w||(a=w(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=w(b).wrap("<span></span>").parent()[0])});var f=L(a,b,a,c,d,e);ca(a,"ng-scope");return function(b,c,d,e){Db(b,"scope");var g=c?La.clone.call(a):a;r(d,function(a,b){g.data("$"+b+"Controller",a)});d=0;for(var m=g.length;d<m;d++){var h=g[d].nodeType;1!==h&&9!==h||g.eq(d).data("$scope",b)}c&&c(g,b);f&&f(b,g,g,e);return g}}function ca(a,b){try{a.addClass(b)}catch(c){}}function L(a,b,c,d,e,f){function g(a,c,d,e){var f,h,l,q,n,
p,s;f=c.length;var M=Array(f);for(q=0;q<f;q++)M[q]=c[q];p=q=0;for(n=m.length;q<n;p++)h=M[p],c=m[q++],f=m[q++],c?(c.scope?(l=a.$new(),w.data(h,"$scope",l)):l=a,s=c.transcludeOnThisElement?O(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?O(a,b):null,c(f,l,h,d,s)):f&&f(a,h.childNodes,t,e)}for(var m=[],h,l,q,n,p=0;p<a.length;p++)h=new Ob,l=da(a[p],[],h,0===p?d:t,e),(f=l.length?H(l,a[p],h,b,c,null,[],[],f):null)&&f.scope&&ca(h.$$element,"ng-scope"),h=f&&f.terminal||!(q=a[p].childNodes)||!q.length?
null:L(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b),m.push(f,h),n=n||f||h,f=null;return n?g:null}function O(a,b,c){return function(d,e,f){var g=!1;d||(d=a.$new(),g=d.$$transcluded=!0);e=b(d,e,f,c);if(g)e.on("$destroy",function(){d.$destroy()});return e}}function da(a,b,c,d,g){var m=c.$attr,h;switch(a.nodeType){case 1:fa(b,pa(Ma(a).toLowerCase()),"E",d,g);for(var l,q,n,p=a.attributes,s=0,F=p&&p.length;s<F;s++){var A=!1,N=!1;l=p[s];if(!Q||8<=Q||l.specified){h=l.name;q=
aa(l.value);l=pa(h);if(n=U.test(l))h=mb(l.substr(6),"-");var u=l.replace(/(Start|End)$/,"");l===u+"Start"&&(A=h,N=h.substr(0,h.length-5)+"end",h=h.substr(0,h.length-6));l=pa(h.toLowerCase());m[l]=h;if(n||!c.hasOwnProperty(l))c[l]=q,qc(a,l)&&(c[l]=!0);S(a,b,q,l);fa(b,l,"A",d,g,A,N)}}a=a.className;if(v(a)&&""!==a)for(;h=f.exec(a);)l=pa(h[2]),fa(b,l,"C",d,g)&&(c[l]=aa(h[3])),a=a.substr(h.index+h[0].length);break;case 3:K(b,a.nodeValue);break;case 8:try{if(h=e.exec(a.nodeValue))l=pa(h[1]),fa(b,l,"M",
d,g)&&(c[l]=aa(h[2]))}catch(z){}}b.sort(x);return b}function B(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return w(d)}function I(a,b,c){return function(d,e,f,g,h){e=B(e[0],b,c);return a(d,e,f,g,h)}}function H(a,c,d,e,f,g,m,n,p){function F(a,b,c,d){if(a){c&&(a=I(a,c,d));a.require=G.require;a.directiveName=C;if(L===G||G.$$isolateScope)a=
tc(a,{isolateScope:!0});m.push(a)}if(b){c&&(b=I(b,c,d));b.require=G.require;b.directiveName=C;if(L===G||G.$$isolateScope)b=tc(b,{isolateScope:!0});n.push(b)}}function A(a,b,c,d){var e,f="data",g=!1;if(v(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),g=g||"?"==e;e=null;d&&"data"===f&&(e=d[b]);e=e||c[f]("$"+b+"Controller");if(!e&&!g)throw ja("ctreq",b,a);}else J(b)&&(e=[],r(b,function(b){e.push(A(a,b,c,d))}));return e}function N(a,e,f,g,p){function F(a,b){var c;2>arguments.length&&
(b=a,a=t);K&&(c=da);return p(a,b,c)}var u,M,z,O,I,B,da={},rb;u=c===f?d:ha(d,new Ob(w(f),d.$attr));M=u.$$element;if(L){var Na=/^\s*([@=&])(\??)\s*(\w*)\s*$/;B=e.$new(!0);!H||H!==L&&H!==L.$$originalDirective?M.data("$isolateScopeNoTemplate",B):M.data("$isolateScope",B);ca(M,"ng-isolate-scope");r(L.scope,function(a,c){var d=a.match(Na)||[],f=d[3]||c,g="?"==d[2],d=d[1],m,l,n,p;B.$$isolateBindings[c]=d+f;switch(d){case "@":u.$observe(f,function(a){B[c]=a});u.$$observers[f].$$scope=e;u[f]&&(B[c]=b(u[f])(e));
break;case "=":if(g&&!u[f])break;l=q(u[f]);p=l.literal?Aa:function(a,b){return a===b||a!==a&&b!==b};n=l.assign||function(){m=B[c]=l(e);throw ja("nonassign",u[f],L.name);};m=B[c]=l(e);B.$watch(function(){var a=l(e);p(a,B[c])||(p(a,m)?n(e,a=B[c]):B[c]=a);return m=a},null,l.literal);break;case "&":l=q(u[f]);B[c]=function(a){return l(e,a)};break;default:throw ja("iscp",L.name,c,a);}})}rb=p&&F;R&&r(R,function(a){var b={$scope:a===L||a.$$isolateScope?B:e,$element:M,$attrs:u,$transclude:rb},c;I=a.controller;
"@"==I&&(I=u[a.name]);c=s(I,b);da[a.name]=c;K||M.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(z=m.length;g<z;g++)try{O=m[g],O(O.isolateScope?B:e,M,u,O.require&&A(O.directiveName,O.require,M,da),rb)}catch(G){l(G,ia(M))}g=e;L&&(L.template||null===L.templateUrl)&&(g=B);a&&a(g,f.childNodes,t,p);for(g=n.length-1;0<=g;g--)try{O=n[g],O(O.isolateScope?B:e,M,u,O.require&&A(O.directiveName,O.require,M,da),rb)}catch(y){l(y,ia(M))}}p=p||{};for(var u=-Number.MAX_VALUE,
O,R=p.controllerDirectives,L=p.newIsolateScopeDirective,H=p.templateDirective,fa=p.nonTlbTranscludeDirective,x=!1,D=!1,K=p.hasElementTranscludeDirective,Z=d.$$element=w(c),G,C,V,S=e,Q,Fa=0,qa=a.length;Fa<qa;Fa++){G=a[Fa];var U=G.$$start,Y=G.$$end;U&&(Z=B(c,U,Y));V=t;if(u>G.priority)break;if(V=G.scope)O=O||G,G.templateUrl||(db("new/isolated scope",L,G,Z),T(V)&&(L=G));C=G.name;!G.templateUrl&&G.controller&&(V=G.controller,R=R||{},db("'"+C+"' controller",R[C],G,Z),R[C]=G);if(V=G.transclude)x=!0,G.$$tlb||
(db("transclusion",fa,G,Z),fa=G),"element"==V?(K=!0,u=G.priority,V=Z,Z=d.$$element=w(X.createComment(" "+C+": "+d[C]+" ")),c=Z[0],Na(f,Ba.call(V,0),c),S=z(V,e,u,g&&g.name,{nonTlbTranscludeDirective:fa})):(V=w(Kb(c)).contents(),Z.empty(),S=z(V,e));if(G.template)if(D=!0,db("template",H,G,Z),H=G,V=P(G.template)?G.template(Z,d):G.template,V=W(V),G.replace){g=G;V=Ib.test(V)?w(aa(V)):[];c=V[0];if(1!=V.length||1!==c.nodeType)throw ja("tplrt",C,"");Na(f,Z,c);qa={$attr:{}};V=da(c,[],qa);var $=a.splice(Fa+
1,a.length-(Fa+1));L&&y(V);a=a.concat(V).concat($);E(d,qa);qa=a.length}else Z.html(V);if(G.templateUrl)D=!0,db("template",H,G,Z),H=G,G.replace&&(g=G),N=ue(a.splice(Fa,a.length-Fa),Z,d,f,x&&S,m,n,{controllerDirectives:R,newIsolateScopeDirective:L,templateDirective:H,nonTlbTranscludeDirective:fa}),qa=a.length;else if(G.compile)try{Q=G.compile(Z,d,S),P(Q)?F(null,Q,U,Y):Q&&F(Q.pre,Q.post,U,Y)}catch(ve){l(ve,ia(Z))}G.terminal&&(N.terminal=!0,u=Math.max(u,G.priority))}N.scope=O&&!0===O.scope;N.transcludeOnThisElement=
x;N.templateOnThisElement=D;N.transclude=S;p.hasElementTranscludeDirective=K;return N}function y(a){for(var b=0,c=a.length;b<c;b++)a[b]=bc(a[b],{$$isolateScope:!0})}function fa(b,e,f,g,h,q,n){if(e===h)return null;h=null;if(c.hasOwnProperty(e)){var p;e=a.get(e+d);for(var s=0,u=e.length;s<u;s++)try{p=e[s],(g===t||g>p.priority)&&-1!=p.restrict.indexOf(f)&&(q&&(p=bc(p,{$$start:q,$$end:n})),b.push(p),h=p)}catch(F){l(F)}}return h}function E(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=
e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(ca(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function ue(a,b,c,d,e,f,g,h){var m=[],l,q,s=b[0],u=a.shift(),F=D({},u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),N=P(u.templateUrl)?u.templateUrl(b,c):u.templateUrl;
b.empty();n.get(A.getTrustedResourceUrl(N),{cache:p}).success(function(n){var p,A;n=W(n);if(u.replace){n=Ib.test(n)?w(aa(n)):[];p=n[0];if(1!=n.length||1!==p.nodeType)throw ja("tplrt",u.name,N);n={$attr:{}};Na(d,b,p);var z=da(p,[],n);T(u.scope)&&y(z);a=z.concat(a);E(c,n)}else p=s,b.html(n);a.unshift(F);l=H(a,p,c,e,b,u,f,g,h);r(d,function(a,c){a==p&&(d[c]=b[0])});for(q=L(b[0].childNodes,e);m.length;){n=m.shift();A=m.shift();var R=m.shift(),I=m.shift(),z=b[0];if(A!==s){var B=A.className;h.hasElementTranscludeDirective&&
u.replace||(z=Kb(p));Na(R,w(A),z);ca(w(z),B)}A=l.transcludeOnThisElement?O(n,l.transclude,I):I;l(q,n,z,d,A)}m=null}).error(function(a,b,c,d){throw ja("tpload",d.url);});return function(a,b,c,d,e){a=e;m?(m.push(b),m.push(c),m.push(d),m.push(a)):(l.transcludeOnThisElement&&(a=O(b,l.transclude,e)),l(q,b,c,d,a))}}function x(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function db(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ia(d));}function K(a,
c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){var b=a.parent().length;b&&ca(a.parent(),"ng-binding");return function(a,c){var e=c.parent(),f=e.data("$binding")||[];f.push(d);e.data("$binding",f);b||ca(e,"ng-binding");a.$watch(d,function(a){c[0].nodeValue=a})}}})}function C(a,b){if("srcdoc"==b)return A.HTML;var c=Ma(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return A.RESOURCE_URL}function S(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===
Ma(a))throw ja("selmulti",ia(a));c.push({priority:100,compile:function(){return{pre:function(c,d,m){d=m.$$observers||(m.$$observers={});if(g.test(e))throw ja("nodomevents");if(f=b(m[e],!0,C(a,e)))m[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(m.$$observers&&m.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?m.$updateClass(a,b):m.$set(e,a)})}}}})}}function Na(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,m;if(a)for(g=0,m=a.length;g<m;g++)if(a[g]==d){a[g++]=c;m=g+e-1;for(var h=a.length;g<
h;g++,m++)m<h?a[g]=a[m]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);c[w.expando]=d[w.expando];d=1;for(e=b.length;d<e;d++)f=b[d],w(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function tc(a,b){return D(function(){return a.apply(null,arguments)},a,b)}var Ob=function(a,b){this.$$element=a;this.$attr=b||{}};Ob.prototype={$normalize:pa,$addClass:function(a){a&&0<a.length&&N.addClass(this.$$element,a)},$removeClass:function(a){a&&0<
a.length&&N.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=uc(a,b),d=uc(b,a);0===c.length?N.removeClass(this.$$element,d):0===d.length?N.addClass(this.$$element,c):N.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=qc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=mb(a,"-"));e=Ma(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=R(b,"src"===a);!1!==c&&(null===b||b===t?this.$$element.removeAttr(d):
this.$$element.attr(d,b));(c=this.$$observers)&&r(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);F.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var qa=b.startSymbol(),Z=b.endSymbol(),W="{{"==qa||"}}"==Z?Qa:function(a){return a.replace(/\{\{/g,qa).replace(/}}/g,Z)},U=/^ngAttr[A-Z]/;return z}]}function pa(b){return Za(b.replace(we,""))}function uc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=
0;a:for(;f<d.length;f++){for(var g=d[f],k=0;k<e.length;k++)if(g==e[k])continue a;c+=(0<c.length?" ":"")+g}return c}function Pd(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){Da(a,"controller");T(a)?D(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,k,m;v(e)&&(g=e.match(a),k=g[1],m=g[3],e=b.hasOwnProperty(k)?b[k]:hc(f.$scope,k,!0)||hc(d,k,!0),Wa(e,k,!0));g=c.instantiate(e,f);if(m){if(!f||"object"!==typeof f.$scope)throw C("$controller")("noscp",
k||e.name,m);f.$scope[m]=g}return g}}]}function Qd(){this.$get=["$window",function(b){return w(b.document)}]}function Rd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function vc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=K(aa(b.substr(0,e)));d=aa(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function wc(b){var a=T(b)?b:t;return function(c){a||(a=vc(b));return c?a[K(c)]||null:a}}function xc(b,a,c){if(P(c))return c(b,
a);r(c,function(c){b=c(b,a)});return b}function Ud(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){v(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=cc(d)));return d}],transformRequest:[function(a){return T(a)&&"[object File]"!==za.call(a)&&"[object Blob]"!==za.call(a)?na(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ha(d),put:ha(d),patch:ha(d)},xsrfCookieName:"XSRF-TOKEN",
xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,p){function q(a){function b(a){var d=D({},a,{data:xc(a.data,a.headers,c.transformResponse)});return 200<=a.status&&300>a.status?d:n.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=D({},a.headers),d,f,b=D({},b.common,b[K(a.method)]);
a:for(d in b){a=K(d);for(f in c)if(K(f)===a)continue a;c[d]=b[d]}(function(a){var b;r(a,function(c,d){P(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(c);return c}(a);D(c,a);c.headers=d;c.method=Ia(c.method);var f=[function(a){d=a.headers;var c=xc(a.data,wc(d),a.transformRequest);x(c)&&r(d,function(a,b){"content-type"===K(b)&&delete d[b]});x(a.withCredentials)&&!x(e.withCredentials)&&(a.withCredentials=e.withCredentials);return s(a,c,d).then(b,b)},t],g=n.when(c);for(r(A,function(a){(a.request||a.requestError)&&
f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var m=f.shift(),g=g.then(a,m)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,c)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,c)});return g};return g}function s(c,f,g){function h(a,b,c,e){I&&(200<=a&&300>a?I.put(w,[a,b,vc(c),e]):I.remove(w));p(b,a,c,e);d.$$phase||d.$apply()}function p(a,b,d,e){b=Math.max(b,0);(200<=
b&&300>b?A.resolve:A.reject)({data:a,status:b,headers:wc(d),config:c,statusText:e})}function s(){var a=Ra(q.pendingRequests,c);-1!==a&&q.pendingRequests.splice(a,1)}var A=n.defer(),r=A.promise,I,H,w=F(c.url,c.params);q.pendingRequests.push(c);r.then(s,s);!c.cache&&!e.cache||(!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method)||(I=T(c.cache)?c.cache:T(e.cache)?e.cache:u);if(I)if(H=I.get(w),y(H)){if(H&&P(H.then))return H.then(s,s),H;J(H)?p(H[1],H[0],ha(H[2]),H[3]):p(H,200,{},"OK")}else I.put(w,r);x(H)&&
((H=Pb(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:t)&&(g[c.xsrfHeaderName||e.xsrfHeaderName]=H),a(c.method,w,f,h,g,c.timeout,c.withCredentials,c.responseType));return r}function F(a,b){if(!b)return a;var c=[];Tc(b,function(a,b){null===a||x(a)||(J(a)||(a=[a]),r(a,function(a){T(a)&&(a=ta(a)?a.toISOString():na(a));c.push(Ca(b)+"="+Ca(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var u=c("$http"),A=[];r(f,function(a){A.unshift(v(a)?p.get(a):p.invoke(a))});r(g,
function(a,b){var c=v(a)?p.get(a):p.invoke(a);A.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});q.pendingRequests=[];(function(a){r(arguments,function(a){q[a]=function(b,c){return q(D(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){q[a]=function(b,c,d){return q(D(d||{},{method:a,url:b,data:c}))}})})("post","put");q.defaults=e;return q}]}function xe(b){if(8>=Q&&(!b.match(/^(get|post|head|put|delete|options)$/i)||
!W.XMLHttpRequest))return new W.ActiveXObject("Microsoft.XMLHTTP");if(W.XMLHttpRequest)return new W.XMLHttpRequest;throw C("$httpBackend")("noxhr");}function Vd(){this.$get=["$browser","$window","$document",function(b,a,c){return ye(b,xe,b.defer,a.angular.callbacks,c[0])}]}function ye(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),g=null;f.type="text/javascript";f.src=a;f.async=!0;g=function(a){$a(f,"load",g);$a(f,"error",g);e.body.removeChild(f);f=null;var k=-1,s="unknown";a&&("load"!==
a.type||d[b].called||(a={type:"error"}),s=a.type,k="error"===a.type?404:200);c&&c(k,s)};sb(f,"load",g);sb(f,"error",g);8>=Q&&(f.onreadystatechange=function(){v(f.readyState)&&/loaded|complete/.test(f.readyState)&&(f.onreadystatechange=null,g({type:"load"}))});e.body.appendChild(f);return g}var g=-1;return function(e,m,h,l,n,p,q,s){function F(){A=g;R&&R();z&&z.abort()}function u(a,d,e,f,g){L&&c.cancel(L);R=z=null;0===d&&(d=e?200:"file"==ua(m).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(E)}
var A;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==K(e)){var N="_"+(d.counter++).toString(36);d[N]=function(a){d[N].data=a;d[N].called=!0};var R=f(m.replace("JSON_CALLBACK","angular.callbacks."+N),N,function(a,b){u(l,a,d[N].data,"",b);d[N]=E})}else{var z=a(e);z.open(e,m,!0);r(n,function(a,b){y(a)&&z.setRequestHeader(b,a)});z.onreadystatechange=function(){if(z&&4==z.readyState){var a=null,b=null,c="";A!==g&&(a=z.getAllResponseHeaders(),b="response"in z?z.response:z.responseText);A===g&&
10>Q||(c=z.statusText);u(l,A||z.status,b,a,c)}};q&&(z.withCredentials=!0);if(s)try{z.responseType=s}catch(ca){if("json"!==s)throw ca;}z.send(h||null)}if(0<p)var L=c(F,p);else p&&P(p.then)&&p.then(F)}}function Sd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,h,l){for(var n,p,q=0,s=[],F=f.length,u=!1,A=[];q<F;)-1!=(n=f.indexOf(b,q))&&-1!=(p=f.indexOf(a,
n+g))?(q!=n&&s.push(f.substring(q,n)),s.push(q=c(u=f.substring(n+g,p))),q.exp=u,q=p+k,u=!0):(q!=F&&s.push(f.substring(q)),q=F);(F=s.length)||(s.push(""),F=1);if(l&&1<s.length)throw yc("noconcat",f);if(!h||u)return A.length=F,q=function(a){try{for(var b=0,c=F,g;b<c;b++){if("function"==typeof(g=s[b]))if(g=g(a),g=l?e.getTrusted(l,g):e.valueOf(g),null==g)g="";else switch(typeof g){case "string":break;case "number":g=""+g;break;default:g=na(g)}A[b]=g}return A.join("")}catch(k){a=yc("interr",f,k.toString()),
d(a)}},q.exp=f,q.parts=s,q}var g=b.length,k=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function Td(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,k,m){var h=a.setInterval,l=a.clearInterval,n=c.defer(),p=n.promise,q=0,s=y(m)&&!m;k=y(k)?k:0;p.then(null,null,d);p.$$intervalId=h(function(){n.notify(q++);0<k&&q>=k&&(n.resolve(q),l(p.$$intervalId),delete e[p.$$intervalId]);s||b.$apply()},g);e[p.$$intervalId]=n;return p}var e={};d.cancel=
function(b){return b&&b.$$intervalId in e?(e[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete e[b.$$intervalId],!0):!1};return d}]}function bd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),
SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Qb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=
lb(b[a]);return b.join("/")}function zc(b,a,c){b=ua(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=U(b.port)||ze[b.protocol]||null}function Ac(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=ua(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=ec(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ra(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function eb(b){var a=
b.indexOf("#");return-1==a?b:b.substr(0,a)}function Rb(b){return b.substr(0,eb(b).lastIndexOf("/")+1)}function Bc(b,a){this.$$html5=!0;a=a||"";var c=Rb(b);zc(b,this,b);this.$$parse=function(a){var e=ra(c,a);if(!v(e))throw Sb("ipthprfx",a,c);Ac(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Cb(this.$$search),b=this.$$hash?"#"+lb(this.$$hash):"";this.$$url=Qb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;
if((e=ra(b,d))!==t)return d=e,(e=ra(a,e))!==t?c+(ra("/",e)||e):b+d;if((e=ra(c,d))!==t)return c+e;if(c==d+"/")return c}}function Tb(b,a){var c=Rb(b);zc(b,this,b);this.$$parse=function(d){var e=ra(b,d)||ra(c,d),e="#"==e.charAt(0)?ra(a,e):this.$$html5?e:"";if(!v(e))throw Sb("ihshprfx",d,a);Ac(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?
"#"+lb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(eb(b)==eb(a))return a}}function Ub(b,a){this.$$html5=!0;Tb.apply(this,arguments);var c=Rb(b);this.$$rewrite=function(d){var e;if(b==eb(d))return d;if(e=ra(c,d))return b+a+e;if(c===d+"/")return c};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?"#"+lb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function tb(b){return function(){return this[b]}}
function Cc(b,a){return function(c){if(x(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Wd(){var b="",a=!1;this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return y(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",k.absUrl(),a)}var k,m,h=d.baseHref(),l=d.url(),n;a?(n=l.substring(0,l.indexOf("/",l.indexOf("//")+2))+(h||"/"),m=e.history?Bc:Ub):(n=
eb(l),m=Tb);k=new m(n,"#"+b);k.$$parse(k.$$rewrite(l));var p=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var e=w(a.target);"a"!==K(e[0].nodeName);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href");T(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=ua(g.animVal).href);if(!p.test(g)){if(m===Ub){var h=e.attr("href")||e.attr("xlink:href");if(h&&0>h.indexOf("://"))if(g="#"+b,"/"==h[0])g=n+g+h;else if("#"==h[0])g=n+g+(k.path()||"/")+h;
else{var l=k.path().split("/"),h=h.split("/");2!==l.length||l[1]||(l.length=1);for(var q=0;q<h.length;q++)"."!=h[q]&&(".."==h[q]?l.pop():h[q].length&&l.push(h[q]));g=n+g+l.join("/")}}l=k.$$rewrite(g);g&&(!e.attr("target")&&l&&!a.isDefaultPrevented())&&(a.preventDefault(),l!=d.url()&&(k.$$parse(l),c.$apply(),W.angular["ff-684208-preventDefault"]=!0))}}});k.absUrl()!=l&&d.url(k.absUrl(),!0);d.onUrlChange(function(a){k.absUrl()!=a&&(c.$evalAsync(function(){var b=k.absUrl();k.$$parse(a);c.$broadcast("$locationChangeStart",
a,b).defaultPrevented?(k.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var q=0;c.$watch(function(){var a=d.url(),b=k.$$replace;q&&a==k.absUrl()||(q++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",k.absUrl(),a).defaultPrevented?k.$$parse(a):(d.url(k.absUrl(),b),g(a))}));k.$$replace=!1;return q});return k}]}function Xd(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&
-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||E;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ka(b,
a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw la("isecfld",a);return b}function va(b,a){if(b){if(b.constructor===b)throw la("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw la("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw la("isecdom",a);if(b===Object)throw la("isecobj",a);}return b}function ub(b,a,c,d,e){va(b,d);e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=ka(a.shift(),
d);var k=va(b[f],d);k||(k={},b[f]=k);b=k;b.then&&e.unwrapPromises&&(wa(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===t&&(b.$$v={}),b=b.$$v)}f=ka(a.shift(),d);va(b[f],d);return b[f]=c}function Dc(b,a,c,d,e,f,g){ka(b,f);ka(a,f);ka(c,f);ka(d,f);ka(e,f);return g.unwrapPromises?function(g,m){var h=m&&m.hasOwnProperty(b)?m:g,l;if(null==h)return h;(h=h[b])&&h.then&&(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);if(!a)return h;if(null==h)return t;(h=h[a])&&h.then&&
(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);if(!c)return h;if(null==h)return t;(h=h[c])&&h.then&&(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);if(!d)return h;if(null==h)return t;(h=h[d])&&h.then&&(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);if(!e)return h;if(null==h)return t;(h=h[e])&&h.then&&(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);return h}:function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==
h)return h;h=h[b];if(!a)return h;if(null==h)return t;h=h[a];if(!c)return h;if(null==h)return t;h=h[c];if(!d)return h;if(null==h)return t;h=h[d];return e?null==h?t:h=h[e]:h}}function Ec(b,a,c){if(Vb.hasOwnProperty(b))return Vb[b];var d=b.split("."),e=d.length,f;if(a.csp)f=6>e?Dc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,f){var g=0,k;do k=Dc(d[g++],d[g++],d[g++],d[g++],d[g++],c,a)(b,f),f=t,b=k;while(g<e);return k};else{var g="var p;\n";r(d,function(b,d){ka(b,c);g+="if(s == null) return undefined;\ns="+
(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var g=g+"return s;",k=new Function("s","k","pw",g);k.toString=ba(g);f=a.unwrapPromises?function(a,b){return k(a,b,wa)}:k}"hasOwnProperty"!==b&&(Vb[b]=f);return f}function Yd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=
function(b){return y(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return y(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;wa=function(b){a.logPromiseWarnings&&!Fc.hasOwnProperty(b)&&(Fc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];
e=new Wb(a);e=(new fb(e,c,a)).parse(d);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return E}}}]}function $d(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Ae(function(a){b.$evalAsync(a)},a)}]}function Ae(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var g=[],h,l;return l={resolve:function(a){if(g){var c=g;g=t;h=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],h.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(k(a))},
notify:function(a){if(g){var c=g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,k){var l=e(),F=function(d){try{l.resolve((P(b)?b:c)(d))}catch(e){l.reject(e),a(e)}},u=function(b){try{l.resolve((P(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},A=function(b){try{l.notify((P(k)?k:c)(b))}catch(d){a(d)}};g?g.push([F,u,A]):h.then(F,u,A);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):
d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(k){return b(k,!1)}return g&&P(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&P(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},k=function(c){return{then:function(f,g){var k=e();b(function(){try{k.resolve((P(g)?
g:d)(c))}catch(b){k.reject(b),a(b)}});return k.promise}}};return{defer:e,reject:g,when:function(k,h,l,n){var p=e(),q,s=function(b){try{return(P(h)?h:c)(b)}catch(d){return a(d),g(d)}},F=function(b){try{return(P(l)?l:d)(b)}catch(c){return a(c),g(c)}},u=function(b){try{return(P(n)?n:c)(b)}catch(d){a(d)}};b(function(){f(k).then(function(a){q||(q=!0,p.resolve(f(a).then(s,F,u)))},function(a){q||(q=!0,p.resolve(F(a)))},function(a){q||p.notify(u(a))})});return p.promise},all:function(a){var b=e(),c=0,d=J(a)?
[]:{};r(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function ge(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:
function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Zd(){var b=10,a=C("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,g){function k(){this.$id=hb();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=
[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function m(b){if(p.$$phase)throw a("inprog",p.$$phase);p.$$phase=b}function h(a,b){var c=f(a);Wa(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}k.prototype={constructor:k,$new:function(a){a?(a=new k,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=
function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=hb();this.$$childScopeClass=null},this.$$childScopeClass.prototype=this),a=new this.$$childScopeClass);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=h(a,"watch"),f=this.$$watchers,g={fn:b,last:n,get:e,exp:a,
eq:!!d};c=null;if(!P(b)){var k=h(b||E,"listener");g.fn=function(a,b,c){k(c)}}if("string"==typeof a&&e.constant){var l=g.fn;g.fn=function(a,b,c){l.call(this,a,b,c);Sa(f,g)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){Sa(f,g);c=null}},$watchCollection:function(a,b){var c=this,d,e,g,k=1<b.length,h=0,l=f(a),m=[],p={},n=!0,r=0;return this.$watch(function(){d=l(c);var a,b,f;if(T(d))if(Pa(d))for(e!==m&&(e=m,r=e.length=0,h++),a=d.length,r!==a&&(h++,e.length=r=a),b=0;b<a;b++)f=e[b]!==e[b]&&d[b]!==
d[b],f||e[b]===d[b]||(h++,e[b]=d[b]);else{e!==p&&(e=p={},r=0,h++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?(f=e[b]!==e[b]&&d[b]!==d[b],f||e[b]===d[b]||(h++,e[b]=d[b])):(r++,e[b]=d[b],h++));if(r>a)for(b in h++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(r--,delete e[b])}else e!==d&&(e=d,h++);return h},function(){n?(n=!1,b(d,d,c)):b(d,g,c);if(k)if(T(d))if(Pa(d)){g=Array(d.length);for(var a=0;a<d.length;a++)g[a]=d[a]}else for(a in g={},d)kb.call(d,a)&&(g[a]=d[a]);else g=d})},$digest:function(){var d,
f,k,h,l=this.$$asyncQueue,r=this.$$postDigestQueue,R,z,t=b,L,O=[],w,B,I;m("$digest");g.$$checkUrlChange();c=null;do{z=!1;for(L=this;l.length;){try{I=l.shift(),I.scope.$eval(I.expression)}catch(H){p.$$phase=null,e(H)}c=null}a:do{if(h=L.$$watchers)for(R=h.length;R--;)try{if(d=h[R])if((f=d.get(L))!==(k=d.last)&&!(d.eq?Aa(f,k):"number"===typeof f&&"number"===typeof k&&isNaN(f)&&isNaN(k)))z=!0,c=d,d.last=d.eq?Ha(f,null):f,d.fn(f,k===n?f:k,L),5>t&&(w=4-t,O[w]||(O[w]=[]),B=P(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):
d.exp,B+="; newVal: "+na(f)+"; oldVal: "+na(k),O[w].push(B));else if(d===c){z=!1;break a}}catch(y){p.$$phase=null,e(y)}if(!(h=L.$$childHead||L!==this&&L.$$nextSibling))for(;L!==this&&!(h=L.$$nextSibling);)L=L.$parent}while(L=h);if((z||l.length)&&!t--)throw p.$$phase=null,a("infdig",b,na(O));}while(z||l.length);for(p.$$phase=null;r.length;)try{r.shift()()}catch(v){e(v)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==p&&(r(this.$$listenerCount,
Bb(null,l,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=E,this.$on=
this.$watch=function(){return E})}},$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){p.$$phase||p.$$asyncQueue.length||g.defer(function(){p.$$asyncQueue.length&&p.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=
c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[Ra(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,g=!1,k={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){k.defaultPrevented=!0},defaultPrevented:!1},h=[k].concat(Ba.call(arguments,1)),l,m;do{d=f.$$listeners[a]||c;k.currentScope=f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,h)}catch(p){e(p)}else d.splice(l,
1),l--,m--;if(g)break;f=f.$parent}while(f);return k},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(Ba.call(arguments,1)),k,h;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];k=0;for(h=d.length;k<h;k++)if(d[k])try{d[k].apply(null,g)}catch(l){e(l)}else d.splice(k,1),k--,h--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};
var p=new k;return p}]}function cd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!Q||8<=Q)if(f=ua(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function Be(b){if("self"===b)return b;if(v(b)){if(-1<b.indexOf("***"))throw xa("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(jb(b))return RegExp("^"+b.source+"$");throw xa("imatcher");}function Gc(b){var a=[];y(b)&&r(b,function(b){a.push(Be(b))});return a}function be(){this.SCE_CONTEXTS=ga;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Gc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Gc(b));return a};this.$get=["$injector",function(c){function d(a){var b=
function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw xa("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),g={};g[ga.HTML]=d(f);g[ga.CSS]=d(f);g[ga.URL]=d(f);g[ga.JS]=d(f);g[ga.RESOURCE_URL]=d(g[ga.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw xa("icontext",
a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw xa("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===t||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===ga.RESOURCE_URL){var f=ua(d.toString()),l,n,p=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Pb(f):b[l].exec(f.href)){p=!0;break}if(p)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Pb(f):a[l].exec(f.href)){p=!1;break}if(p)return d;throw xa("insecurl",
d.toString());}if(c===ga.HTML)return e(d);throw xa("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function ae(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw xa("iequirks");var e=ha(ga);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},
e.valueOf=Qa);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,g=e.getTrusted,k=e.trustAs;r(ga,function(a,b){var c=K(b);e[Za("parse_as_"+c)]=function(b){return f(a,b)};e[Za("get_trusted_"+c)]=function(b){return g(a,b)};e[Za("trust_as_"+c)]=function(b){return k(a,b)}});return e}]}function ce(){this.$get=["$window","$document",function(b,a){var c={},d=U((/android (\d+)/.exec(K((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||
{}).userAgent),f=a[0]||{},g=f.documentMode,k,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,h=f.body&&f.body.style,l=!1,n=!1;if(h){for(var p in h)if(l=m.exec(p)){k=l[0];k=k.substr(0,1).toUpperCase()+k.substr(1);break}k||(k="WebkitOpacity"in h&&"webkit");l=!!("transition"in h||k+"Transition"in h);n=!!("animation"in h||k+"Animation"in h);!d||l&&n||(l=v(f.body.style.webkitTransition),n=v(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<
g),hasEvent:function(a){if("input"==a&&9==Q)return!1;if(x(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Xa(),vendorPrefix:k,transitions:l,animations:n,android:d,msie:Q,msieDocumentMode:g}}]}function ee(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,k,m){var h=c.defer(),l=h.promise,n=y(m)&&!m;k=a.defer(function(){try{h.resolve(e())}catch(a){h.reject(a),d(a)}finally{delete f[l.$$timeoutId]}n||b.$apply()},k);l.$$timeoutId=k;f[k]=h;
return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function ua(b,a){var c=b;Q&&(Y.setAttribute("href",c),c=Y.href);Y.setAttribute("href",c);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:
"/"+Y.pathname}}function Pb(b){b=v(b)?ua(b):b;return b.protocol===Hc.protocol&&b.host===Hc.host}function fe(){this.$get=ba(W)}function mc(b){function a(d,e){if(T(d)){var f={};r(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Ic);a("date",Jc);a("filter",Ce);a("json",De);a("limitTo",Ee);a("lowercase",Fe);a("number",Kc);a("orderBy",Lc);a("uppercase",Ge)}function Ce(){return function(b,
a,c){if(!J(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Va.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&kb.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,
b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var k=
b[g];e.check(k)&&d.push(k)}return d}}function Ic(b){var a=b.NUMBER_FORMATS;return function(b,d){x(d)&&(d=a.CURRENCY_SYM);return Mc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Kc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Mc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Mc(b,a,c,d,e){if(null==b||!isFinite(b)||T(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",k="",m=[],h=!1;if(-1!==g.indexOf("e")){var l=g.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&
l[3]>e+1?(g="0",b=0):(k=g,h=!0)}if(h)0<e&&(-1<b&&1>b)&&(k=b.toFixed(e));else{g=(g.split(Nc)[1]||"").length;x(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);0===b&&(f=!1);b=(""+b).split(Nc);g=b[0];b=b[1]||"";var l=0,n=a.lgSize,p=a.gSize;if(g.length>=n+p)for(l=g.length-n,h=0;h<l;h++)0===(l-h)%p&&0!==h&&(k+=c),k+=g.charAt(h);for(h=l;h<g.length;h++)0===(g.length-h)%n&&0!==h&&(k+=c),k+=g.charAt(h);for(;b.length<e;)b+="0";e&&"0"!==e&&(k+=d+b.substr(0,
e))}m.push(f?a.negPre:a.posPre);m.push(k);m.push(f?a.negSuf:a.posSuf);return m.join("")}function Xb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Xb(e,a,d)}}function vb(b,a){return function(c,d){var e=c["get"+b](),f=Ia(a?"SHORT"+b:b);return d[f][e]}}function Jc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,k=b[8]?
a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=U(b[9]+b[10]),g=U(b[9]+b[11]));k.call(a,U(b[1]),U(b[2])-1,U(b[3]));f=U(b[4]||0)-f;g=U(b[5]||0)-g;k=U(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,g,k,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],k,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;v(c)&&(c=He.test(c)?U(c):a(c));ib(c)&&(c=new Date(c));
if(!ta(c))return c;for(;e;)(m=Ie.exec(e))?(g=g.concat(Ba.call(m,1)),e=g.pop()):(g.push(e),e=null);r(g,function(a){k=Je[a];f+=k?k(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function De(){return function(b){return na(b,!0)}}function Ee(){return function(b,a){if(!J(b)&&!v(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):U(a);if(v(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=
b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Lc(b){return function(a,c,d){function e(a,b){return Ua(b)?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(ta(a)&&ta(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Pa(a)||!c)return a;c=J(c)?c:[c];c=Vc(c,function(a){var c=!1,d=a||Qa;if(v(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var g=
d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],k=0;k<a.length;k++)g.push(a[k]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function ya(b){P(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ba(b)}function Oc(b,a,c,d){function e(a,c){c=c?"-"+mb(c,"-"):"";d.setClass(b,(a?wb:xb)+c,(a?xb:wb)+c)}var f=this,g=b.parent().controller("form")||yb,k=0,m=f.$error={},h=[];f.$name=
a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;g.$addControl(f);b.addClass(Oa);e(!0);f.$addControl=function(a){Da(a.$name,"input");h.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(m,function(b,c){f.$setValidity(c,!0,a)});Sa(h,a)};f.$setValidity=function(a,b,c){var d=m[a];if(b)d&&(Sa(d,c),d.length||(k--,k||(e(b),f.$valid=!0,f.$invalid=!1),m[a]=!1,e(!0,a),g.$setValidity(a,!0,f)));else{k||e(b);if(d){if(-1!=Ra(d,c))return}else m[a]=
d=[],k++,e(!1,a),g.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,Oa);d.addClass(b,zb);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.removeClass(b,zb);d.addClass(b,Oa);f.$dirty=!1;f.$pristine=!0;r(h,function(a){a.$setPristine()})}}function sa(b,a,c,d){b.$setValidity(a,c);return c?d:t}function Pc(b,a){var c,d;if(a)for(c=0;c<a.length;++c)if(d=a[c],b[d])return!0;return!1}function Ke(b,a,c,d,e){T(e)&&(b.$$hasNativeValidators=!0,
b.$parsers.push(function(f){if(b.$error[a]||Pc(e,d)||!Pc(e,c))return f;b.$setValidity(a,!1)}))}function Ab(b,a,c,d,e,f){var g=a.prop(Le),k=a[0].placeholder,m={},h=K(a[0].type);d.$$validityState=g;if(!e.android){var l=!1;a.on("compositionstart",function(a){l=!0});a.on("compositionend",function(){l=!1;n()})}var n=function(e){if(!l){var f=a.val();if(Q&&"input"===(e||m).type&&a[0].placeholder!==k)k=a[0].placeholder;else if("password"!==h&&Ua(c.ngTrim||"T")&&(f=aa(f)),e=g&&d.$$hasNativeValidators,d.$viewValue!==
f||""===f&&e)b.$root.$$phase?d.$setViewValue(f):b.$apply(function(){d.$setViewValue(f)})}};if(e.hasEvent("input"))a.on("input",n);else{var p,q=function(){p||(p=f.defer(function(){n();p=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||q()});if(e.hasEvent("paste"))a.on("paste cut",q)}a.on("change",n);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var s=c.ngPattern;s&&((e=s.match(/^\/(.*)\/([gim]*)$/))?(s=RegExp(e[1],e[2]),e=function(a){return sa(d,
"pattern",d.$isEmpty(a)||s.test(a),a)}):e=function(c){var e=b.$eval(s);if(!e||!e.test)throw C("ngPattern")("noregexp",s,e,ia(a));return sa(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var r=U(c.ngMinlength);e=function(a){return sa(d,"minlength",d.$isEmpty(a)||a.length>=r,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var u=U(c.ngMaxlength);e=function(a){return sa(d,"maxlength",d.$isEmpty(a)||a.length<=u,a)};d.$parsers.push(e);
d.$formatters.push(e)}}function Yb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],l=0;l<b.length;l++)if(e==b[l])continue a;c.push(e)}return c}function e(a){if(!J(a)){if(v(a))return a.split(" ");if(T(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,k){function m(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<
b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function h(b){if(!0===a||f.$index%2===a){var h=e(b||[]);if(!l){var q=m(h,1);k.$addClass(q)}else if(!Aa(b,l)){var s=e(l),q=d(h,s),h=d(s,h),h=m(h,-1),q=m(q,1);0===q.length?c.removeClass(g,h):0===h.length?c.addClass(g,q):c.setClass(g,q,h)}}l=ha(b)}var l;f.$watch(k[b],h,!0);k.$observe("class",function(a){h(f.$eval(k[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var h=e(f.$eval(k[b]));g===a?(g=m(h,1),k.$addClass(g)):
(g=m(h,-1),k.$removeClass(g))}})}}}]}var Le="validity",K=function(b){return v(b)?b.toLowerCase():b},kb=Object.prototype.hasOwnProperty,Ia=function(b){return v(b)?b.toUpperCase():b},Q,w,Ea,Ba=[].slice,Me=[].push,za=Object.prototype.toString,Ta=C("ng"),Va=W.angular||(W.angular={}),Ya,Ma,ma=["0","0","0"];Q=U((/msie (\d+)/.exec(K(navigator.userAgent))||[])[1]);isNaN(Q)&&(Q=U((/trident\/.*; rv:(\d+)/.exec(K(navigator.userAgent))||[])[1]));E.$inject=[];Qa.$inject=[];var J=function(){return P(Array.isArray)?
Array.isArray:function(b){return"[object Array]"===za.call(b)}}(),aa=function(){return String.prototype.trim?function(b){return v(b)?b.trim():b}:function(b){return v(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ma=9>Q?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ia(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Xa=function(){if(y(Xa.isActive_))return Xa.isActive_;var b=!(!X.querySelector("[ng-csp]")&&!X.querySelector("[data-ng-csp]"));
if(!b)try{new Function("")}catch(a){b=!0}return Xa.isActive_=b},Yc=/[A-Z]/g,ad={full:"1.2.26",major:1,minor:2,dot:26,codeName:"captivating-disinterest"};S.expando="ng339";var ab=S.cache={},ne=1,sb=W.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},$a=W.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};S._data=function(b){return this.cache[b[this.expando]]||{}};var ie=/([\:\-\_]+(.))/g,
je=/^moz([A-Z])/,Hb=C("jqLite"),ke=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Ib=/<|&#?\w+;/,le=/<([\w:]+)/,me=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ea={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ea.optgroup=ea.option;ea.tbody=ea.tfoot=ea.colgroup=ea.caption=ea.thead;ea.th=
ea.td;var La=S.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),S(W).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?w(this[b]):w(this[this.length+b])},length:0,push:Me,sort:[].sort,splice:[].splice},qb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){qb[K(b)]=b});var rc={};r("input select option textarea button form details".split(" "),
function(b){rc[Ia(b)]=!0});r({data:Mb,removeData:Lb},function(b,a){S[a]=b});r({data:Mb,inheritedData:pb,scope:function(b){return w.data(b,"$scope")||pb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return w.data(b,"$isolateScope")||w.data(b,"$isolateScopeNoTemplate")},controller:oc,injector:function(b){return pb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Nb,css:function(b,a,c){a=Za(a);if(y(c))b.style[a]=c;else{var d;8>=Q&&(d=b.currentStyle&&b.currentStyle[a],
""===d&&(d="auto"));d=d||b.style[a];8>=Q&&(d=""===d?t:d);return d}},attr:function(b,a,c){var d=K(a);if(qb[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||E).specified?d:t;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(x(d))return e?b[e]:"";b[e]=d}var a=[];9>Q?(a[1]=
"innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(x(a)){if("SELECT"===Ma(b)&&b.multiple){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(x(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ja(d[c]);b.innerHTML=a},empty:pc},function(b,a){S.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==pc&&(2==b.length&&b!==Nb&&b!==oc?a:d)===t){if(T(a)){for(e=
0;e<g;e++)if(b===Mb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var k=b(this[f],a,d);e=e?e+k:k}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:Lb,dealoc:Ja,on:function a(c,d,e,f){if(y(f))throw Hb("onargs");var g=oa(c,"events"),k=oa(c,"handle");g||oa(c,"events",g={});k||oa(c,"handle",k=oe(c,g));r(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var l=X.body.contains||X.body.compareDocumentPosition?
function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||k(a,d)})}else sb(c,d,k),g[d]=[];f=g[d]}f.push(e)})},off:nc,one:function(a,c,d){a=w(a);a.on(c,function f(){a.off(c,
d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ja(a);r(new S(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){r(new S(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;r(new S(c),function(c){a.insertBefore(c,
d)})}},wrap:function(a,c){c=w(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ja(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;r(new S(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:ob,removeClass:nb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;x(f)&&(f=!Nb(a,c));(f?ob:nb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;
for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Kb,triggerHandler:function(a,c,d){var e,f;e=c.type||c;var g=(oa(a,"events")||{})[e];g&&(e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopPropagation:E,type:e,target:a},c.type&&(e=D(e,c)),c=ha(g),f=d?[e].concat(d):[e],r(c,function(c){c.apply(a,f)}))}},function(a,c){S.prototype[c]=
function(c,e,f){for(var g,k=0;k<this.length;k++)x(g)?(g=a(this[k],c,e,f),y(g)&&(g=w(g))):Jb(g,a(this[k],c,e,f));return y(g)?g:this};S.prototype.bind=S.prototype.on;S.prototype.unbind=S.prototype.off});bb.prototype={put:function(a,c){this[Ka(a,this.nextUid)]=c},get:function(a){return this[Ka(a,this.nextUid)]},remove:function(a){var c=this[a=Ka(a,this.nextUid)];delete this[a];return c}};var qe=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,re=/,/,se=/^\s*(_?)(\S+?)\1\s*$/,pe=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
cb=C("$injector"),Ne=C("$animate"),Md=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Ne("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,g,k){g?g.after(a):(c&&c[0]||(c=g.parent()),c.append(a));k&&
d(k)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,k){this.enter(a,c,d,k)},addClass:function(a,c,g){c=v(c)?c:J(c)?c.join(" "):"";r(a,function(a){ob(a,c)});g&&d(g)},removeClass:function(a,c,g){c=v(c)?c:J(c)?c.join(" "):"";r(a,function(a){nb(a,c)});g&&d(g)},setClass:function(a,c,g,k){r(a,function(a){ob(a,c);nb(a,g)});k&&d(k)},enabled:E}}]}],ja=C("$compile");ic.$inject=["$provide","$$sanitizeUriProvider"];var we=/^(x[\:\-_]|data[\:\-_])/i,yc=C("$interpolate"),Oe=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
ze={http:80,https:443,ftp:21},Sb=C("$location");Ub.prototype=Tb.prototype=Bc.prototype={$$html5:!1,$$replace:!1,absUrl:tb("$$absUrl"),url:function(a){if(x(a))return this.$$url;a=Oe.exec(a);a[1]&&this.path(decodeURIComponent(a[1]));(a[2]||a[1])&&this.search(a[3]||"");this.hash(a[5]||"");return this},protocol:tb("$$protocol"),host:tb("$$host"),port:tb("$$port"),path:Cc("$$path",function(a){a=a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;
case 1:if(v(a)||ib(a))a=a.toString(),this.$$search=ec(a);else if(T(a))r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Sb("isrcharg");break;default:x(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Cc("$$hash",function(a){return a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};var la=C("$parse"),Fc={},wa,Pe=Function.prototype.call,Qe=Function.prototype.apply,Qc=Function.prototype.bind,gb={"null":function(){return null},
"true":function(){return!0},"false":function(){return!1},undefined:E,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?d+e:d:y(e)?e:t},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":E,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,
c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Re={n:"\n",f:"\f",r:"\r",
t:"\t",v:"\v","'":"'",'"':'"'},Wb=function(a){this.options=a};Wb.prototype={constructor:Wb,lex:function(a){this.text=a;this.index=0;this.ch=t;this.lastCh=":";for(this.tokens=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),
this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{a=this.ch+this.peek();var c=a+this.peek(2),d=gb[this.ch],e=gb[a],f=gb[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},
was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+
this.text.substring(c,d)+"]":" "+d;throw la("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=K(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=
1;this.tokens.push({index:c,text:a,literal:!0,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,k;this.index<this.text.length;){k=this.text.charAt(this.index);if("."===k||this.isIdent(k)||this.isNumber(k))"."===k&&(e=this.index),c+=k;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){k=this.text.charAt(f);if("("===k){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(k))f++;else break}d={index:d,text:c};if(gb.hasOwnProperty(c))d.fn=
gb[c],d.literal=!0,d.constant=!0;else{var m=Ec(c,this.options,this.text);d.fn=D(function(a,c){return m(a,c)},{assign:function(d,e){return ub(d,c,e,a.text,a.options)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Re[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,literal:!0,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var fb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};fb.ZERO=D(function(){return 0},{constant:!0});fb.prototype={constructor:fb,parse:function(a){this.text=
a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);a.literal=!!c.literal;a.constant=!!c.constant}for(var d;c=
this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw la("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw la("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===
e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return D(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return D(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return D(function(e,f){return c(e,f,a,d)},{constant:a.constant&&
d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());
else{var e=function(a,e,k){k=[k];for(var m=0;m<d.length;m++)k.push(d[m](a,e));return c.apply(a,k)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.assignment();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.assignment());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(fb.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Ec(d,this.options,this.text);return D(function(c,d,k){return e(k||a(c,d))},{assign:function(e,g,k){(k=a(e,k))||a.assign(e,k={});return ub(k,d,g,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return D(function(e,f){var g=a(e,f),k=d(e,f),m;ka(k,c.text);if(!g)return t;(g=va(g[k],c.text))&&(g.then&&c.options.unwrapPromises)&&
(m=g,"$$v"in g||(m.$$v=t,m.then(function(a){m.$$v=a})),g=g.$$v);return g},{assign:function(e,f,g){var k=ka(d(e,g),c.text);(g=va(a(e,g),c.text))||a.assign(e,g={});return g[k]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var k=[],m=c?c(f,g):f,h=0;h<d.length;h++)k.push(va(d[h](f,g),e.text));h=a(f,g,m)||E;va(m,e.text);var l=e.text;if(h){if(h.constructor===h)throw la("isecfn",
l);if(h===Pe||h===Qe||Qc&&h===Qc)throw la("isecff",l);}k=h.apply?h.apply(m,k):h(k[0],k[1],k[2],k[3],k[4]);return va(k,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return D(function(c,d){for(var g=[],k=0;k<a.length;k++)g.push(a[k](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return D(function(c,d){for(var e={},m=0;m<a.length;m++){var h=a[m];e[h.key]=h.value(c,d)}return e},{literal:!0,constant:c})}};var Vb={},xa=C("$sce"),ga={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Y=X.createElement("a"),Hc=ua(W.location.href,!0);mc.$inject=["$provide"];Ic.$inject=["$locale"];Kc.$inject=["$locale"];
var Nc=".",Je={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:vb("Month"),MMM:vb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:vb("Day"),EEE:vb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Xb(Math[0<
a?"floor":"ceil"](a/60),2)+Xb(Math.abs(a%60),2))}},Ie=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,He=/^\-?\d+$/;Jc.$inject=["$locale"];var Fe=ba(K),Ge=ba(Ia);Lc.$inject=["$parse"];var dd=ba({restrict:"E",compile:function(a,c){8>=Q&&(c.href||c.name||c.$set("href",""),a.append(X.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===za.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||
a.preventDefault()})}}}),Fb={};r(qb,function(a,c){if("multiple"!=a){var d=pa("ng-"+c);Fb[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(["src","srcset","href"],function(a){var c=pa("ng-"+a);Fb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,k=a;"href"===a&&"[object SVGAnimatedString]"===za.call(e.prop("href"))&&(k="xlinkHref",f.$attr[k]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(k,c),Q&&g&&e.prop(g,f[k])):"href"===
a&&f.$set(k,null)})}}}});var yb={$addControl:E,$removeControl:E,$setValidity:E,$setDirty:E,$setPristine:E};Oc.$inject=["$element","$attrs","$scope","$animate"];var Rc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Oc,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var k=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};sb(e[0],"submit",k);e.on("$destroy",function(){c(function(){$a(e[0],"submit",k)},0,!1)})}var m=e.parent().controller("form"),
h=f.name||f.ngForm;h&&ub(a,h,g,h);if(m)e.on("$destroy",function(){m.$removeControl(g);h&&ub(a,h,t,h);D(g,yb)})}}}}}]},ed=Rc(),rd=Rc(!0),Se=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Te=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Ue=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Sc={text:Ab,number:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Ue.test(a))return e.$setValidity("number",
!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return t});Ke(e,"number",Ve,null,e.$$validityState);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return sa(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return sa(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return sa(e,"number",e.$isEmpty(a)||
ib(a),a)})},url:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);a=function(a){return sa(e,"url",e.$isEmpty(a)||Se.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);a=function(a){return sa(e,"email",e.$isEmpty(a)||Te.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){x(d.name)&&c.attr("name",hb());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};
d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;v(f)||(f=!0);v(g)||(g=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:E,button:E,submit:E,reset:E,file:E},Ve=["badInput"],jc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",
link:function(d,e,f,g){g&&(Sc[K(f.type)]||Sc.text)(d,e,f,g,c,a)}}}],wb="ng-valid",xb="ng-invalid",Oa="ng-pristine",zb="ng-dirty",We=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,f,g){function k(a,c){c=c?"-"+mb(c,"-"):"";g.removeClass(e,(a?xb:wb)+c);g.addClass(e,(a?wb:xb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=
d.name;var m=f(d.ngModel),h=m.assign;if(!h)throw C("ngModel")("nonassign",d.ngModel,ia(e));this.$render=E;this.$isEmpty=function(a){return x(a)||""===a||null===a||a!==a};var l=e.inheritedData("$formController")||yb,n=0,p=this.$error={};e.addClass(Oa);k(!0);this.$setValidity=function(a,c){p[a]!==!c&&(c?(p[a]&&n--,n||(k(!0),this.$valid=!0,this.$invalid=!1)):(k(!1),this.$invalid=!0,this.$valid=!1,n++),p[a]=!c,k(c,a),l.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=
!0;g.removeClass(e,zb);g.addClass(e,Oa)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,g.removeClass(e,Oa),g.addClass(e,zb),l.$setDirty());r(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,h(a,d),r(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var q=this;a.$watch(function(){var c=m(a);if(q.$modelValue!==c){var d=q.$formatters,e=d.length;for(q.$modelValue=c;e--;)c=d[e](c);q.$viewValue!==c&&(q.$viewValue=
c,q.$render())}return c})}],Gd=function(){return{require:["ngModel","^?form"],controller:We,link:function(a,c,d,e){var f=e[0],g=e[1]||yb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})}}},Id=ba({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),kc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",
!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},Hd=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!x(a)){var c=[];a&&r(a.split(f),function(a){a&&c.push(aa(a))});return c}});e.$formatters.push(function(a){return J(a)?a.join(", "):t});e.$isEmpty=function(a){return!a||!a.length}}}},Xe=/^(true|false|\d+)$/,Jd=function(){return{priority:100,
compile:function(a,c){return Xe.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},jd=ya({compile:function(a){a.addClass("ng-binding");return function(a,d,e){d.data("$binding",e.ngBind);a.$watch(e.ngBind,function(a){d.text(a==t?"":a)})}}}),ld=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],
kd=["$sce","$parse",function(a,c){return{compile:function(d){d.addClass("ng-binding");return function(d,f,g){f.data("$binding",g.ngBindHtml);var k=c(g.ngBindHtml);d.$watch(function(){return(k(d)||"").toString()},function(c){f.html(a.getTrustedHtml(k(d))||"")})}}}}],md=Yb("",!0),od=Yb("Odd",0),nd=Yb("Even",1),pd=ya({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),qd=[function(){return{scope:!0,controller:"@",priority:500}}],lc={},Ye={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=pa("ng-"+a);lc[c]=["$parse","$rootScope",function(d,e){return{compile:function(f,g){var k=d(g[c]);return function(c,d){d.on(a,function(d){var f=function(){k(c,{$event:d})};Ye[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var td=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var k,m,h;c.$watch(e.ngIf,function(f){Ua(f)?m||(m=c.$new(),g(m,function(c){c[c.length++]=X.createComment(" end ngIf: "+e.ngIf+
" ");k={clone:c};a.enter(c,d.parent(),d)})):(h&&(h.remove(),h=null),m&&(m.$destroy(),m=null),k&&(h=Eb(k.clone),a.leave(h,function(){h=null}),k=null))})}}}],ud=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Va.noop,compile:function(g,k){var m=k.ngInclude||k.src,h=k.onload||"",l=k.autoscroll;return function(g,k,q,r,F){var u=0,t,w,R,z=function(){w&&(w.remove(),w=null);t&&(t.$destroy(),t=null);
R&&(e.leave(R,function(){w=null}),w=R,R=null)};g.$watch(f.parseAsResourceUrl(m),function(f){var m=function(){!y(l)||l&&!g.$eval(l)||d()},q=++u;f?(a.get(f,{cache:c}).success(function(a){if(q===u){var c=g.$new();r.template=a;a=F(c,function(a){z();e.enter(a,null,k,m)});t=c;R=a;t.$emit("$includeContentLoaded");g.$eval(h)}}).error(function(){q===u&&z()}),g.$emit("$includeContentRequested")):(z(),r.template=null)})}}}}],Kd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",
link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],vd=ya({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),wd=ya({terminal:!0,priority:1E3}),xd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var k=g.count,m=g.$attr.when&&f.attr(g.$attr.when),h=g.offset||0,l=e.$eval(m)||{},n={},p=c.startSymbol(),q=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(g,function(a,c){s.test(c)&&(l[K(c.replace("when","").replace("Minus","-"))]=
f.attr(g.$attr[c]))});r(l,function(a,e){n[e]=c(a.replace(d,p+k+"-"+h+q))});e.$watch(function(){var c=parseFloat(e.$eval(k));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-h));return n[c](e,f,!0)},function(a){f.text(a)})}}}],yd=["$parse","$animate",function(a,c){var d=C("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,g,k,m){var h=g.ngRepeat,l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,p,q,s,t,u,A={$id:Ka};if(!l)throw d("iexp",
h);g=l[1];k=l[2];(l=l[3])?(n=a(l),p=function(a,c,d){u&&(A[u]=a);A[t]=c;A.$index=d;return n(e,A)}):(q=function(a,c){return Ka(c)},s=function(a){return a});l=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",g);t=l[3]||l[1];u=l[2];var y={};e.$watchCollection(k,function(a){var g,k,l=f[0],n,A={},B,I,H,v,E,C,x,J=[];if(Pa(a))C=a,E=p||q;else{E=p||s;C=[];for(H in a)a.hasOwnProperty(H)&&"$"!=H.charAt(0)&&C.push(H);C.sort()}B=C.length;k=J.length=C.length;for(g=0;g<k;g++)if(H=a===
C?g:C[g],v=a[H],n=E(H,v,g),Da(n,"`track by` id"),y.hasOwnProperty(n))x=y[n],delete y[n],A[n]=x,J[g]=x;else{if(A.hasOwnProperty(n))throw r(J,function(a){a&&a.scope&&(y[a.id]=a)}),d("dupes",h,n,na(v));J[g]={id:n};A[n]=!1}for(H in y)y.hasOwnProperty(H)&&(x=y[H],g=Eb(x.clone),c.leave(g),r(g,function(a){a.$$NG_REMOVED=!0}),x.scope.$destroy());g=0;for(k=C.length;g<k;g++){H=a===C?g:C[g];v=a[H];x=J[g];J[g-1]&&(l=J[g-1].clone[J[g-1].clone.length-1]);if(x.scope){I=x.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);
x.clone[0]!=n&&c.move(Eb(x.clone),null,w(l));l=x.clone[x.clone.length-1]}else I=e.$new();I[t]=v;u&&(I[u]=H);I.$index=g;I.$first=0===g;I.$last=g===B-1;I.$middle=!(I.$first||I.$last);I.$odd=!(I.$even=0===(g&1));x.scope||m(I,function(a){a[a.length++]=X.createComment(" end ngRepeat: "+h+" ");c.enter(a,null,w(l));l=a;x.scope=I;x.clone=a;A[x.id]=x})}y=A})}}}],zd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Ua(c)?"removeClass":"addClass"](d,"ng-hide")})}}],sd=["$animate",
function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Ua(c)?"addClass":"removeClass"](d,"ng-hide")})}}],Ad=ya(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Bd=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],k=[],m=[],h=[];c.$watch(e.ngSwitch||e.on,function(d){var n,p;n=0;for(p=m.length;n<p;++n)m[n].remove();n=m.length=0;for(p=
h.length;n<p;++n){var q=k[n];h[n].$destroy();m[n]=q;a.leave(q,function(){m.splice(n,1)})}k.length=0;h.length=0;if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),r(g,function(d){var e=c.$new();h.push(e);d.transclude(e,function(c){var e=d.element;k.push(c);a.enter(c,e.parent(),e)})})})}}}],Cd=ya({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Dd=
ya({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Fd=ya({link:function(a,c,d,e,f){if(!f)throw C("ngTransclude")("orphan",ia(c));f(function(a){c.empty();c.append(a)})}}),fd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Ze=C("ngOptions"),Ed=ba({terminal:!0}),gd=["$compile","$parse",function(a,c){var d=
/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:E};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,h={},l=e,n;m.databound=d.ngModel;m.init=function(a,c,d){l=a;n=d};m.addOption=function(c){Da(c,'"option value"');h[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};
m.removeOption=function(a){this.hasOption(a)&&(delete h[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ka(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};m.hasOption=function(a){return h.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=E})}],link:function(e,g,k,m){function h(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(v.parent()&&v.remove(),c.val(a),""===a&&u.prop("selected",!0)):x(a)&&u?c.val(""):e.renderUnknownOption(a)};
c.on("change",function(){a.$apply(function(){v.parent()&&v.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new bb(d.$viewValue);r(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){Aa(e,d.$viewValue)||(e=ha(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function k(){var a={"":[]},c=[""],d,h,
s,t,v;s=g.$modelValue;t=w(e)||[];var E=n?Zb(t):t,I,M,B;M={};B=!1;if(q)if(h=g.$modelValue,x&&J(h))for(B=new bb([]),d={},v=0;v<h.length;v++)d[m]=h[v],B.put(x(e,d),h[v]);else B=new bb(h);v=B;var D,K;for(B=0;I=E.length,B<I;B++){h=B;if(n){h=E[B];if("$"===h.charAt(0))continue;M[n]=h}M[m]=t[h];d=r(e,M)||"";(h=a[d])||(h=a[d]=[],c.push(d));q?d=y(v.remove(x?x(e,M):u(e,M))):(x?(d={},d[m]=s,d=x(e,d)===x(e,M)):d=s===u(e,M),v=v||d);D=l(e,M);D=y(D)?D:"";h.push({id:x?x(e,M):n?E[B]:B,label:D,selected:d})}q||(F||null===
s?a[""].unshift({id:"",label:"",selected:!v}):v||a[""].unshift({id:"?",label:"",selected:!0}));M=0;for(E=c.length;M<E;M++){d=c[M];h=a[d];z.length<=M?(s={element:C.clone().attr("label",d),label:h.label},t=[s],z.push(t),f.append(s.element)):(t=z[M],s=t[0],s.label!=d&&s.element.attr("label",s.label=d));D=null;B=0;for(I=h.length;B<I;B++)d=h[B],(v=t[B+1])?(D=v.element,v.label!==d.label&&D.text(v.label=d.label),v.id!==d.id&&D.val(v.id=d.id),D[0].selected!==d.selected&&(D.prop("selected",v.selected=d.selected),
Q&&D.prop("selected",v.selected))):(""===d.id&&F?K=F:(K=A.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).text(d.label),t.push({element:K,label:d.label,id:d.id,selected:d.selected}),p.addOption(d.label,K),D?D.after(K):s.element.append(K),D=K);for(B++;t.length>B;)d=t.pop(),p.removeOption(d.label),d.element.remove()}for(;z.length>M;)z.pop()[0].element.remove()}var h;if(!(h=s.match(d)))throw Ze("iexp",s,ia(f));var l=c(h[2]||h[1]),m=h[4]||h[6],n=h[5],r=c(h[3]||""),u=c(h[2]?
h[1]:m),w=c(h[7]),x=h[8]?c(h[8]):null,z=[[{element:f,label:""}]];F&&(a(F)(e),F.removeClass("ng-scope"),F.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=w(e)||[],d={},h,l,p,r,s,v,y;if(q)for(l=[],r=0,v=z.length;r<v;r++)for(a=z[r],p=1,s=a.length;p<s;p++){if((h=a[p].element)[0].selected){h=h.val();n&&(d[n]=h);if(x)for(y=0;y<c.length&&(d[m]=c[y],x(e,d)!=h);y++);else d[m]=c[h];l.push(u(e,d))}}else if(h=f.val(),"?"==h)l=t;else if(""===h)l=null;else if(x)for(y=0;y<c.length;y++){if(d[m]=
c[y],x(e,d)==h){l=u(e,d);break}}else d[m]=c[h],n&&(d[n]=h),l=u(e,d);g.$setViewValue(l);k()})});g.$render=k;e.$watchCollection(w,k);e.$watchCollection(function(){var a={},c=w(e);if(c){for(var d=Array(c.length),f=0,g=c.length;f<g;f++)a[m]=c[f],d[f]=l(e,a);return d}},k);q&&e.$watchCollection(function(){return g.$modelValue},k)}if(m[1]){var p=m[0];m=m[1];var q=k.multiple,s=k.ngOptions,F=!1,u,A=w(X.createElement("option")),C=w(X.createElement("optgroup")),v=A.clone();k=0;for(var z=g.children(),E=z.length;k<
E;k++)if(""===z[k].value){u=F=z.eq(k);break}p.init(m,F,v);q&&(m.$isEmpty=function(a){return!a||0===a.length});s?n(e,g,m):q?l(e,g,m):h(e,g,m,p)}}}}],id=["$interpolate",function(a){var c={addOption:E,removeOption:E};return{restrict:"E",priority:100,compile:function(d,e){if(x(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var h=d.parent(),l=h.data("$selectController")||h.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;f?a.$watch(f,function(a,
c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],hd=ba({restrict:"E",terminal:!0});W.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Ea=W.jQuery)&&Ea.fn.on?(w=Ea,D(Ea.fn,{scope:La.scope,isolateScope:La.isolateScope,controller:La.controller,injector:La.injector,inheritedData:La.inheritedData}),Gb("remove",!0,!0,!1),Gb("empty",!1,!1,!1),Gb("html",!1,!1,!0)):w=S,Va.element=w,
$c(Va),w(X).ready(function(){Xc(X,fc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');


/*
 AngularJS v1.2.26
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(F,e,O){'use strict';e.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){return function(G,s,g){g=g.ngAnimateChildren;e.isString(g)&&0===g.length?s.data("$$ngAnimateChildren",!0):G.$watch(g,function(e){s.data("$$ngAnimateChildren",!!e)})}}).factory("$$animateReflow",["$$rAF","$document",function(e,s){return function(g){return e(function(){g()})}}]).config(["$provide","$animateProvider",function(G,s){function g(e){for(var g=0;g<e.length;g++){var l=e[g];if(l.nodeType==aa)return l}}
function B(l){return e.element(g(l))}var m=e.noop,u=e.forEach,P=s.$$selectors,aa=1,l="$$ngAnimateState",V="$$ngAnimateChildren",J="ng-animate",n={running:!0};G.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document",function(z,F,$,R,E,H,O){function K(a){var b=a.data(l)||{};b.running=!0;a.data(l,b)}function L(a){if(a){var b=[],c={};a=a.substr(1).split(".");($.transitions||$.animations)&&b.push(F.get(P[""]));for(var d=0;d<a.length;d++){var f=
a[d],e=P[f];e&&!c[f]&&(b.push(F.get(e)),c[f]=!0)}return b}}function G(a,b,c){function d(a,b){var c=a[b],d=a["before"+b.charAt(0).toUpperCase()+b.substr(1)];if(c||d)return"leave"==b&&(d=c,c=null),n.push({event:b,fn:c}),h.push({event:b,fn:d}),!0}function f(b,d,e){var f=[];u(b,function(a){a.fn&&f.push(a)});var g=0;u(f,function(b,l){var C=function(){a:{if(d){(d[l]||m)();if(++g<f.length)break a;d=null}e()}};switch(b.event){case "setClass":d.push(b.fn(a,A,k,C));break;case "addClass":d.push(b.fn(a,A||c,
C));break;case "removeClass":d.push(b.fn(a,k||c,C));break;default:d.push(b.fn(a,C))}});d&&0===d.length&&e()}var g=a[0];if(g){var l="setClass"==b,p=l||"addClass"==b||"removeClass"==b,A,k;e.isArray(c)&&(A=c[0],k=c[1],c=A+" "+k);var x=a.attr("class")+" "+c;if(M(x)){var t=m,w=[],h=[],q=m,y=[],n=[],x=(" "+x).replace(/\s+/g,".");u(L(x),function(a){!d(a,b)&&l&&(d(a,"addClass"),d(a,"removeClass"))});return{node:g,event:b,className:c,isClassBased:p,isSetClassOperation:l,before:function(a){t=a;f(h,w,function(){t=
m;a()})},after:function(a){q=a;f(n,y,function(){q=m;a()})},cancel:function(){w&&(u(w,function(a){(a||m)(!0)}),t(!0));y&&(u(y,function(a){(a||m)(!0)}),q(!0))}}}}}function r(a,b,c,d,f,g,n){function p(d){var e="$animate:"+d;q&&(q[e]&&0<q[e].length)&&E(function(){c.triggerHandler(e,{event:a,className:b})})}function A(){p("before")}function m(){p("after")}function x(){p("close");n&&E(function(){n()})}function t(){t.hasBeenRun||(t.hasBeenRun=!0,g())}function w(){if(!w.hasBeenRun){w.hasBeenRun=!0;var d=
c.data(l);d&&(h&&h.isClassBased?k(c,b):(E(function(){var d=c.data(l)||{};r==d.index&&k(c,b,a)}),c.data(l,d)));x()}}var h=G(c,a,b);if(h){b=h.className;var q=e.element._data(h.node),q=q&&q.events;d||(d=f?f.parent():c.parent());var y=c.data(l)||{};f=y.active||{};var z=y.totalActive||0,C=y.last,D;h.isClassBased&&(D=y.running||y.disabled||C&&!C.isClassBased);if(D||N(c,d))t(),A(),m(),w();else{d=!1;if(0<z){D=[];if(h.isClassBased)"setClass"==C.event?(D.push(C),k(c,b)):f[b]&&(v=f[b],v.event==a?d=!0:(D.push(v),
k(c,b)));else if("leave"==a&&f["ng-leave"])d=!0;else{for(var v in f)D.push(f[v]),k(c,v);f={};z=0}0<D.length&&u(D,function(a){a.cancel()})}!h.isClassBased||(h.isSetClassOperation||d)||(d="addClass"==a==c.hasClass(b));if(d)t(),A(),m(),x();else{if("leave"==a)c.one("$destroy",function(a){a=e.element(this);var b=a.data(l);b&&(b=b.active["ng-leave"])&&(b.cancel(),k(a,"ng-leave"))});c.addClass(J);var r=Y++;z++;f[b]=h;c.data(l,{last:h,active:f,index:r,totalActive:z});A();h.before(function(d){var e=c.data(l);
d=d||!e||!e.active[b]||h.isClassBased&&e.active[b].event!=a;t();!0===d?w():(m(),h.after(w))})}}}else t(),A(),m(),w()}function T(a){if(a=g(a))a=e.isFunction(a.getElementsByClassName)?a.getElementsByClassName(J):a.querySelectorAll("."+J),u(a,function(a){a=e.element(a);(a=a.data(l))&&a.active&&u(a.active,function(a){a.cancel()})})}function k(a,b){if(g(a)==g(R))n.disabled||(n.running=!1,n.structural=!1);else if(b){var c=a.data(l)||{},d=!0===b;!d&&(c.active&&c.active[b])&&(c.totalActive--,delete c.active[b]);
if(d||!c.totalActive)a.removeClass(J),a.removeData(l)}}function N(a,b){if(n.disabled)return!0;if(g(a)==g(R))return n.running;var c,d,f;do{if(0===b.length)break;var m=g(b)==g(R),k=m?n:b.data(l)||{};if(k.disabled)return!0;m&&(f=!0);!1!==c&&(m=b.data(V),e.isDefined(m)&&(c=m));d=d||k.running||k.last&&!k.last.isClassBased}while(b=b.parent());return!f||!c&&d}var Y=0;R.data(l,n);H.$$postDigest(function(){H.$$postDigest(function(){n.running=!1})});var Q=s.classNameFilter(),M=Q?function(a){return Q.test(a)}:
function(){return!0};return{enter:function(a,b,c,d){a=e.element(a);b=b&&e.element(b);c=c&&e.element(c);K(a);z.enter(a,b,c);H.$$postDigest(function(){a=B(a);r("enter","ng-enter",a,b,c,m,d)})},leave:function(a,b){a=e.element(a);T(a);K(a);H.$$postDigest(function(){r("leave","ng-leave",B(a),null,null,function(){z.leave(a)},b)})},move:function(a,b,c,d){a=e.element(a);b=b&&e.element(b);c=c&&e.element(c);T(a);K(a);z.move(a,b,c);H.$$postDigest(function(){a=B(a);r("move","ng-move",a,b,c,m,d)})},addClass:function(a,
b,c){a=e.element(a);a=B(a);r("addClass",b,a,null,null,function(){z.addClass(a,b)},c)},removeClass:function(a,b,c){a=e.element(a);a=B(a);r("removeClass",b,a,null,null,function(){z.removeClass(a,b)},c)},setClass:function(a,b,c,d){a=e.element(a);a=B(a);r("setClass",[b,c],a,null,null,function(){z.setClass(a,b,c)},d)},enabled:function(a,b){switch(arguments.length){case 2:if(a)k(b);else{var c=b.data(l)||{};c.disabled=!0;b.data(l,c)}break;case 1:n.disabled=!a;break;default:a=!n.disabled}return!!a}}}]);s.register("",
["$window","$sniffer","$timeout","$$animateReflow",function(l,n,s,B){function E(a,U){S&&S();W.push(U);S=B(function(){u(W,function(a){a()});W=[];S=null;v={}})}function H(a,U){var b=g(a);a=e.element(b);Z.push(a);b=Date.now()+U;b<=da||(s.cancel(ca),da=b,ca=s(function(){G(Z);Z=[]},U,!1))}function G(a){u(a,function(a){(a=a.data(q))&&(a.closeAnimationFn||m)()})}function K(a,b){var c=b?v[b]:null;if(!c){var d=0,e=0,f=0,g=0,m,k,h,q;u(a,function(a){if(a.nodeType==aa){a=l.getComputedStyle(a)||{};h=a[I+P];d=
Math.max(L(h),d);q=a[I+x];m=a[I+t];e=Math.max(L(m),e);k=a[p+t];g=Math.max(L(k),g);var b=L(a[p+P]);0<b&&(b*=parseInt(a[p+w],10)||1);f=Math.max(b,f)}});c={total:0,transitionPropertyStyle:q,transitionDurationStyle:h,transitionDelayStyle:m,transitionDelay:e,transitionDuration:d,animationDelayStyle:k,animationDelay:g,animationDuration:f};b&&(v[b]=c)}return c}function L(a){var b=0;a=e.isString(a)?a.split(/\s*,\s*/):[];u(a,function(a){b=Math.max(parseFloat(a)||0,b)});return b}function J(a){var b=a.parent(),
c=b.data(h);c||(b.data(h,++ba),c=ba);return c+"-"+g(a).getAttribute("class")}function r(a,b,c,d){var e=J(b),f=e+" "+c,l=v[f]?++v[f].total:0,k={};if(0<l){var h=c+"-stagger",k=e+" "+h;(e=!v[k])&&b.addClass(h);k=K(b,k);e&&b.removeClass(h)}d=d||function(a){return a()};b.addClass(c);var h=b.data(q)||{},n=d(function(){return K(b,f)});d=n.transitionDuration;e=n.animationDuration;if(0===d&&0===e)return b.removeClass(c),!1;b.data(q,{running:h.running||0,itemIndex:l,stagger:k,timings:n,closeAnimationFn:m});
a=0<h.running||"setClass"==a;0<d&&T(b,c,a);0<e&&(0<k.animationDelay&&0===k.animationDuration)&&(g(b).style[p]="none 0s");return!0}function T(a,b,c){"ng-enter"!=b&&("ng-move"!=b&&"ng-leave"!=b)&&c?a.addClass(y):g(a).style[I+x]="none"}function k(a,b){var c=I+x,d=g(a);d.style[c]&&0<d.style[c].length&&(d.style[c]="");a.removeClass(y)}function N(a){var b=p;a=g(a);a.style[b]&&0<a.style[b].length&&(a.style[b]="")}function Y(a,b,d,e){function k(a){b.off(x,l);b.removeClass(m);c(b,d);a=g(b);for(var e in s)a.style.removeProperty(s[e])}
function l(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(V));Math.max(a-z,0)>=y&&b>=v&&e()}var h=g(b);a=b.data(q);if(-1!=h.getAttribute("class").indexOf(d)&&a){var m="";u(d.split(" "),function(a,b){m+=(0<b?" ":"")+a+"-active"});var n=a.stagger,p=a.timings,t=a.itemIndex,v=Math.max(p.transitionDuration,p.animationDuration),w=Math.max(p.transitionDelay,p.animationDelay),y=w*D,z=Date.now(),x=A+" "+X,r="",s=[];if(0<p.transitionDuration){var B=
p.transitionPropertyStyle;-1==B.indexOf("all")&&(r+=f+"transition-property: "+B+";",r+=f+"transition-duration: "+p.transitionDurationStyle+";",s.push(f+"transition-property"),s.push(f+"transition-duration"))}0<t&&(0<n.transitionDelay&&0===n.transitionDuration&&(r+=f+"transition-delay: "+Q(p.transitionDelayStyle,n.transitionDelay,t)+"; ",s.push(f+"transition-delay")),0<n.animationDelay&&0===n.animationDuration&&(r+=f+"animation-delay: "+Q(p.animationDelayStyle,n.animationDelay,t)+"; ",s.push(f+"animation-delay")));
0<s.length&&(p=h.getAttribute("style")||"",h.setAttribute("style",p+"; "+r));b.on(x,l);b.addClass(m);a.closeAnimationFn=function(){k();e()};h=(t*(Math.max(n.animationDelay,n.transitionDelay)||0)+(w+v)*C)*D;a.running++;H(b,h);return k}e()}function Q(a,b,c){var d="";u(a.split(","),function(a,e){d+=(0<e?",":"")+(c*b+parseInt(a,10))+"s"});return d}function M(a,b,d,e){if(r(a,b,d,e))return function(a){a&&c(b,d)}}function a(a,b,d,e){if(b.data(q))return Y(a,b,d,e);c(b,d);e()}function b(b,c,d,e){var f=M(b,
c,d);if(f){var g=f;E(c,function(){k(c,d);N(c);g=a(b,c,d,e)});return function(a){(g||m)(a)}}e()}function c(a,b){a.removeClass(b);var c=a.data(q);c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData(q))}function d(a,b){var c="";a=e.isArray(a)?a:a.split(/\s+/);u(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var f="",I,X,p,A;F.ontransitionend===O&&F.onwebkittransitionend!==O?(f="-webkit-",I="WebkitTransition",X="webkitTransitionEnd transitionend"):(I="transition",X="transitionend");
F.onanimationend===O&&F.onwebkitanimationend!==O?(f="-webkit-",p="WebkitAnimation",A="webkitAnimationEnd animationend"):(p="animation",A="animationend");var P="Duration",x="Property",t="Delay",w="IterationCount",h="$$ngAnimateKey",q="$$ngAnimateCSS3Data",y="ng-animate-block-transitions",V=3,C=1.5,D=1E3,v={},ba=0,W=[],S,ca=null,da=0,Z=[];return{enter:function(a,c){return b("enter",a,"ng-enter",c)},leave:function(a,c){return b("leave",a,"ng-leave",c)},move:function(a,c){return b("move",a,"ng-move",
c)},beforeSetClass:function(a,b,c,e){var f=d(c,"-remove")+" "+d(b,"-add"),g=M("setClass",a,f,function(d){var e=a.attr("class");a.removeClass(c);a.addClass(b);d=d();a.attr("class",e);return d});if(g)return E(a,function(){k(a,f);N(a);e()}),g;e()},beforeAddClass:function(a,b,c){var e=M("addClass",a,d(b,"-add"),function(c){a.addClass(b);c=c();a.removeClass(b);return c});if(e)return E(a,function(){k(a,b);N(a);c()}),e;c()},setClass:function(b,c,e,f){e=d(e,"-remove");c=d(c,"-add");return a("setClass",b,
e+" "+c,f)},addClass:function(b,c,e){return a("addClass",b,d(c,"-add"),e)},beforeRemoveClass:function(a,b,c){var e=M("removeClass",a,d(b,"-remove"),function(c){var d=a.attr("class");a.removeClass(b);c=c();a.attr("class",d);return c});if(e)return E(a,function(){k(a,b);N(a);c()}),e;c()},removeClass:function(b,c,e){return a("removeClass",b,d(c,"-remove"),e)}}}])}])})(window,window.angular);


/**
 * @license AngularJS v1.4.0-build.3893+sha.bb5bf7f
 * (c) 2010-2015 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc module
 * @name ngTouch
 * @description
 *
 * # ngTouch
 *
 * The `ngTouch` module provides touch events and other helpers for touch-enabled devices.
 * The implementation is based on jQuery Mobile touch event handling
 * ([jquerymobile.com](http://jquerymobile.com/)).
 *
 *
 * See {@link ngTouch.$swipe `$swipe`} for usage.
 *
 * <div doc-module-components="ngTouch"></div>
 *
 */

// define ngTouch module
/* global -ngTouch */
var ngTouch = angular.module('ngTouch', []);

/* global ngTouch: false */

    /**
     * @ngdoc service
     * @name $swipe
     *
     * @description
     * The `$swipe` service is a service that abstracts the messier details of hold-and-drag swipe
     * behavior, to make implementing swipe-related directives more convenient.
     *
     * Requires the {@link ngTouch `ngTouch`} module to be installed.
     *
     * `$swipe` is used by the `ngSwipeLeft` and `ngSwipeRight` directives in `ngTouch`, and by
     * `ngCarousel` in a separate component.
     *
     * # Usage
     * The `$swipe` service is an object with a single method: `bind`. `bind` takes an element
     * which is to be watched for swipes, and an object with four handler functions. See the
     * documentation for `bind` below.
     */

ngTouch.factory('$swipe', [function() {
  // The total distance in any direction before we make the call on swipe vs. scroll.
  var MOVE_BUFFER_RADIUS = 10;

  var POINTER_EVENTS = {
    'mouse': {
      start: 'mousedown',
      move: 'mousemove',
      end: 'mouseup'
    },
    'touch': {
      start: 'touchstart',
      move: 'touchmove',
      end: 'touchend',
      cancel: 'touchcancel'
    }
  };

  function getCoordinates(event) {
    var touches = event.touches && event.touches.length ? event.touches : [event];
    var e = (event.changedTouches && event.changedTouches[0]) ||
        (event.originalEvent && event.originalEvent.changedTouches &&
            event.originalEvent.changedTouches[0]) ||
        touches[0].originalEvent || touches[0];

    return {
      x: e.clientX,
      y: e.clientY
    };
  }

  function getEvents(pointerTypes, eventType) {
    var res = [];
    angular.forEach(pointerTypes, function(pointerType) {
      var eventName = POINTER_EVENTS[pointerType][eventType];
      if (eventName) {
        res.push(eventName);
      }
    });
    return res.join(' ');
  }

  return {
    /**
     * @ngdoc method
     * @name $swipe#bind
     *
     * @description
     * The main method of `$swipe`. It takes an element to be watched for swipe motions, and an
     * object containing event handlers.
     * The pointer types that should be used can be specified via the optional
     * third argument, which is an array of strings `'mouse'` and `'touch'`. By default,
     * `$swipe` will listen for `mouse` and `touch` events.
     *
     * The four events are `start`, `move`, `end`, and `cancel`. `start`, `move`, and `end`
     * receive as a parameter a coordinates object of the form `{ x: 150, y: 310 }`.
     *
     * `start` is called on either `mousedown` or `touchstart`. After this event, `$swipe` is
     * watching for `touchmove` or `mousemove` events. These events are ignored until the total
     * distance moved in either dimension exceeds a small threshold.
     *
     * Once this threshold is exceeded, either the horizontal or vertical delta is greater.
     * - If the horizontal distance is greater, this is a swipe and `move` and `end` events follow.
     * - If the vertical distance is greater, this is a scroll, and we let the browser take over.
     *   A `cancel` event is sent.
     *
     * `move` is called on `mousemove` and `touchmove` after the above logic has determined that
     * a swipe is in progress.
     *
     * `end` is called when a swipe is successfully completed with a `touchend` or `mouseup`.
     *
     * `cancel` is called either on a `touchcancel` from the browser, or when we begin scrolling
     * as described above.
     *
     */
    bind: function(element, eventHandlers, pointerTypes) {
      // Absolute total movement, used to control swipe vs. scroll.
      var totalX, totalY;
      // Coordinates of the start position.
      var startCoords;
      // Last event's position.
      var lastPos;
      // Whether a swipe is active.
      var active = false;

      pointerTypes = pointerTypes || ['mouse', 'touch'];
      element.on(getEvents(pointerTypes, 'start'), function(event) {
        startCoords = getCoordinates(event);
        active = true;
        totalX = 0;
        totalY = 0;
        lastPos = startCoords;
        eventHandlers['start'] && eventHandlers['start'](startCoords, event);
      });
      var events = getEvents(pointerTypes, 'cancel');
      if (events) {
        element.on(events, function(event) {
          active = false;
          eventHandlers['cancel'] && eventHandlers['cancel'](event);
        });
      }

      element.on(getEvents(pointerTypes, 'move'), function(event) {
        if (!active) return;

        // Android will send a touchcancel if it thinks we're starting to scroll.
        // So when the total distance (+ or - or both) exceeds 10px in either direction,
        // we either:
        // - On totalX > totalY, we send preventDefault() and treat this as a swipe.
        // - On totalY > totalX, we let the browser handle it as a scroll.

        if (!startCoords) return;
        var coords = getCoordinates(event);

        totalX += Math.abs(coords.x - lastPos.x);
        totalY += Math.abs(coords.y - lastPos.y);

        lastPos = coords;

        if (totalX < MOVE_BUFFER_RADIUS && totalY < MOVE_BUFFER_RADIUS) {
          return;
        }

        // One of totalX or totalY has exceeded the buffer, so decide on swipe vs. scroll.
        if (totalY > totalX) {
          // Allow native scrolling to take over.
          active = false;
          eventHandlers['cancel'] && eventHandlers['cancel'](event);
          return;
        } else {
          // Prevent the browser from scrolling.
          event.preventDefault();
          eventHandlers['move'] && eventHandlers['move'](coords, event);
        }
      });

      element.on(getEvents(pointerTypes, 'end'), function(event) {
        if (!active) return;
        active = false;
        eventHandlers['end'] && eventHandlers['end'](getCoordinates(event), event);
      });
    }
  };
}]);

/* global ngTouch: false */

/**
 * @ngdoc directive
 * @name ngClick
 *
 * @description
 * A more powerful replacement for the default ngClick designed to be used on touchscreen
 * devices. Most mobile browsers wait about 300ms after a tap-and-release before sending
 * the click event. This version handles them immediately, and then prevents the
 * following click event from propagating.
 *
 * Requires the {@link ngTouch `ngTouch`} module to be installed.
 *
 * This directive can fall back to using an ordinary click event, and so works on desktop
 * browsers as well as mobile.
 *
 * This directive also sets the CSS class `ng-click-active` while the element is being held
 * down (by a mouse click or touch) so you can restyle the depressed element if you wish.
 *
 * @element ANY
 * @param {expression} ngClick {@link guide/expression Expression} to evaluate
 * upon tap. (Event object is available as `$event`)
 *
 * @example
    <example module="ngClickExample" deps="angular-touch.js">
      <file name="index.html">
        <button ng-click="count = count + 1" ng-init="count=0">
          Increment
        </button>
        count: {{ count }}
      </file>
      <file name="script.js">
        angular.module('ngClickExample', ['ngTouch']);
      </file>
    </example>
 */

ngTouch.config(['$provide', function($provide) {
  $provide.decorator('ngClickDirective', ['$delegate', function($delegate) {
    // drop the default ngClick directive
    $delegate.shift();
    return $delegate;
  }]);
}]);

ngTouch.directive('ngClick', ['$parse', '$timeout', '$rootElement',
    function($parse, $timeout, $rootElement) {
  var TAP_DURATION = 750; // Shorter than 750ms is a tap, longer is a taphold or drag.
  var MOVE_TOLERANCE = 12; // 12px seems to work in most mobile browsers.
  var PREVENT_DURATION = 2500; // 2.5 seconds maximum from preventGhostClick call to click
  var CLICKBUSTER_THRESHOLD = 25; // 25 pixels in any dimension is the limit for busting clicks.

  var ACTIVE_CLASS_NAME = 'ng-click-active';
  var lastPreventedTime;
  var touchCoordinates;
  var lastLabelClickCoordinates;


  // TAP EVENTS AND GHOST CLICKS
  //
  // Why tap events?
  // Mobile browsers detect a tap, then wait a moment (usually ~300ms) to see if you're
  // double-tapping, and then fire a click event.
  //
  // This delay sucks and makes mobile apps feel unresponsive.
  // So we detect touchstart, touchmove, touchcancel and touchend ourselves and determine when
  // the user has tapped on something.
  //
  // What happens when the browser then generates a click event?
  // The browser, of course, also detects the tap and fires a click after a delay. This results in
  // tapping/clicking twice. We do "clickbusting" to prevent it.
  //
  // How does it work?
  // We attach global touchstart and click handlers, that run during the capture (early) phase.
  // So the sequence for a tap is:
  // - global touchstart: Sets an "allowable region" at the point touched.
  // - element's touchstart: Starts a touch
  // (- touchmove or touchcancel ends the touch, no click follows)
  // - element's touchend: Determines if the tap is valid (didn't move too far away, didn't hold
  //   too long) and fires the user's tap handler. The touchend also calls preventGhostClick().
  // - preventGhostClick() removes the allowable region the global touchstart created.
  // - The browser generates a click event.
  // - The global click handler catches the click, and checks whether it was in an allowable region.
  //     - If preventGhostClick was called, the region will have been removed, the click is busted.
  //     - If the region is still there, the click proceeds normally. Therefore clicks on links and
  //       other elements without ngTap on them work normally.
  //
  // This is an ugly, terrible hack!
  // Yeah, tell me about it. The alternatives are using the slow click events, or making our users
  // deal with the ghost clicks, so I consider this the least of evils. Fortunately Angular
  // encapsulates this ugly logic away from the user.
  //
  // Why not just put click handlers on the element?
  // We do that too, just to be sure. If the tap event caused the DOM to change,
  // it is possible another element is now in that position. To take account for these possibly
  // distinct elements, the handlers are global and care only about coordinates.

  // Checks if the coordinates are close enough to be within the region.
  function hit(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) < CLICKBUSTER_THRESHOLD && Math.abs(y1 - y2) < CLICKBUSTER_THRESHOLD;
  }

  // Checks a list of allowable regions against a click location.
  // Returns true if the click should be allowed.
  // Splices out the allowable region from the list after it has been used.
  function checkAllowableRegions(touchCoordinates, x, y) {
    for (var i = 0; i < touchCoordinates.length; i += 2) {
      if (hit(touchCoordinates[i], touchCoordinates[i + 1], x, y)) {
        touchCoordinates.splice(i, i + 2);
        return true; // allowable region
      }
    }
    return false; // No allowable region; bust it.
  }

  // Global click handler that prevents the click if it's in a bustable zone and preventGhostClick
  // was called recently.
  function onClick(event) {
    if (Date.now() - lastPreventedTime > PREVENT_DURATION) {
      return; // Too old.
    }

    var touches = event.touches && event.touches.length ? event.touches : [event];
    var x = touches[0].clientX;
    var y = touches[0].clientY;
    // Work around desktop Webkit quirk where clicking a label will fire two clicks (on the label
    // and on the input element). Depending on the exact browser, this second click we don't want
    // to bust has either (0,0), negative coordinates, or coordinates equal to triggering label
    // click event
    if (x < 1 && y < 1) {
      return; // offscreen
    }
    if (lastLabelClickCoordinates &&
        lastLabelClickCoordinates[0] === x && lastLabelClickCoordinates[1] === y) {
      return; // input click triggered by label click
    }
    // reset label click coordinates on first subsequent click
    if (lastLabelClickCoordinates) {
      lastLabelClickCoordinates = null;
    }
    // remember label click coordinates to prevent click busting of trigger click event on input
    if (event.target.tagName.toLowerCase() === 'label') {
      lastLabelClickCoordinates = [x, y];
    }

    // Look for an allowable region containing this click.
    // If we find one, that means it was created by touchstart and not removed by
    // preventGhostClick, so we don't bust it.
    if (checkAllowableRegions(touchCoordinates, x, y)) {
      return;
    }

    // If we didn't find an allowable region, bust the click.
    event.stopPropagation();
    event.preventDefault();

    // Blur focused form elements
    event.target && event.target.blur();
  }


  // Global touchstart handler that creates an allowable region for a click event.
  // This allowable region can be removed by preventGhostClick if we want to bust it.
  function onTouchStart(event) {
    var touches = event.touches && event.touches.length ? event.touches : [event];
    var x = touches[0].clientX;
    var y = touches[0].clientY;
    touchCoordinates.push(x, y);

    $timeout(function() {
      // Remove the allowable region.
      for (var i = 0; i < touchCoordinates.length; i += 2) {
        if (touchCoordinates[i] == x && touchCoordinates[i + 1] == y) {
          touchCoordinates.splice(i, i + 2);
          return;
        }
      }
    }, PREVENT_DURATION, false);
  }

  // On the first call, attaches some event handlers. Then whenever it gets called, it creates a
  // zone around the touchstart where clicks will get busted.
  function preventGhostClick(x, y) {
    if (!touchCoordinates) {
      $rootElement[0].addEventListener('click', onClick, true);
      $rootElement[0].addEventListener('touchstart', onTouchStart, true);
      touchCoordinates = [];
    }

    lastPreventedTime = Date.now();

    checkAllowableRegions(touchCoordinates, x, y);
  }

  // Actual linking function.
  return function(scope, element, attr) {
    var clickHandler = $parse(attr.ngClick),
        tapping = false,
        tapElement,  // Used to blur the element after a tap.
        startTime,   // Used to check if the tap was held too long.
        touchStartX,
        touchStartY;

    function resetState() {
      tapping = false;
      element.removeClass(ACTIVE_CLASS_NAME);
    }

    element.on('touchstart', function(event) {
      tapping = true;
      tapElement = event.target ? event.target : event.srcElement; // IE uses srcElement.
      // Hack for Safari, which can target text nodes instead of containers.
      if (tapElement.nodeType == 3) {
        tapElement = tapElement.parentNode;
      }

      element.addClass(ACTIVE_CLASS_NAME);

      startTime = Date.now();

      var touches = event.touches && event.touches.length ? event.touches : [event];
      var e = touches[0].originalEvent || touches[0];
      touchStartX = e.clientX;
      touchStartY = e.clientY;
    });

    element.on('touchmove', function(event) {
      resetState();
    });

    element.on('touchcancel', function(event) {
      resetState();
    });

    element.on('touchend', function(event) {
      var diff = Date.now() - startTime;

      var touches = (event.changedTouches && event.changedTouches.length) ? event.changedTouches :
          ((event.touches && event.touches.length) ? event.touches : [event]);
      var e = touches[0].originalEvent || touches[0];
      var x = e.clientX;
      var y = e.clientY;
      var dist = Math.sqrt(Math.pow(x - touchStartX, 2) + Math.pow(y - touchStartY, 2));

      if (tapping && diff < TAP_DURATION && dist < MOVE_TOLERANCE) {
        // Call preventGhostClick so the clickbuster will catch the corresponding click.
        preventGhostClick(x, y);

        // Blur the focused element (the button, probably) before firing the callback.
        // This doesn't work perfectly on Android Chrome, but seems to work elsewhere.
        // I couldn't get anything to work reliably on Android Chrome.
        if (tapElement) {
          tapElement.blur();
        }

        if (!angular.isDefined(attr.disabled) || attr.disabled === false) {
          element.triggerHandler('click', [event]);
        }
      }

      resetState();
    });

    // Hack for iOS Safari's benefit. It goes searching for onclick handlers and is liable to click
    // something else nearby.
    element.onclick = function(event) { };

    // Actual click handler.
    // There are three different kinds of clicks, only two of which reach this point.
    // - On desktop browsers without touch events, their clicks will always come here.
    // - On mobile browsers, the simulated "fast" click will call this.
    // - But the browser's follow-up slow click will be "busted" before it reaches this handler.
    // Therefore it's safe to use this directive on both mobile and desktop.
    element.on('click', function(event, touchend) {
      scope.$apply(function() {
        clickHandler(scope, {$event: (touchend || event)});
      });
    });

    element.on('mousedown', function(event) {
      element.addClass(ACTIVE_CLASS_NAME);
    });

    element.on('mousemove mouseup', function(event) {
      element.removeClass(ACTIVE_CLASS_NAME);
    });

  };
}]);

/* global ngTouch: false */

/**
 * @ngdoc directive
 * @name ngSwipeLeft
 *
 * @description
 * Specify custom behavior when an element is swiped to the left on a touchscreen device.
 * A leftward swipe is a quick, right-to-left slide of the finger.
 * Though ngSwipeLeft is designed for touch-based devices, it will work with a mouse click and drag
 * too.
 *
 * To disable the mouse click and drag functionality, add `ng-swipe-disable-mouse` to
 * the `ng-swipe-left` or `ng-swipe-right` DOM Element.
 *
 * Requires the {@link ngTouch `ngTouch`} module to be installed.
 *
 * @element ANY
 * @param {expression} ngSwipeLeft {@link guide/expression Expression} to evaluate
 * upon left swipe. (Event object is available as `$event`)
 *
 * @example
    <example module="ngSwipeLeftExample" deps="angular-touch.js">
      <file name="index.html">
        <div ng-show="!showActions" ng-swipe-left="showActions = true">
          Some list content, like an email in the inbox
        </div>
        <div ng-show="showActions" ng-swipe-right="showActions = false">
          <button ng-click="reply()">Reply</button>
          <button ng-click="delete()">Delete</button>
        </div>
      </file>
      <file name="script.js">
        angular.module('ngSwipeLeftExample', ['ngTouch']);
      </file>
    </example>
 */

/**
 * @ngdoc directive
 * @name ngSwipeRight
 *
 * @description
 * Specify custom behavior when an element is swiped to the right on a touchscreen device.
 * A rightward swipe is a quick, left-to-right slide of the finger.
 * Though ngSwipeRight is designed for touch-based devices, it will work with a mouse click and drag
 * too.
 *
 * Requires the {@link ngTouch `ngTouch`} module to be installed.
 *
 * @element ANY
 * @param {expression} ngSwipeRight {@link guide/expression Expression} to evaluate
 * upon right swipe. (Event object is available as `$event`)
 *
 * @example
    <example module="ngSwipeRightExample" deps="angular-touch.js">
      <file name="index.html">
        <div ng-show="!showActions" ng-swipe-left="showActions = true">
          Some list content, like an email in the inbox
        </div>
        <div ng-show="showActions" ng-swipe-right="showActions = false">
          <button ng-click="reply()">Reply</button>
          <button ng-click="delete()">Delete</button>
        </div>
      </file>
      <file name="script.js">
        angular.module('ngSwipeRightExample', ['ngTouch']);
      </file>
    </example>
 */

function makeSwipeDirective(directiveName, direction, eventName) {
  ngTouch.directive(directiveName, ['$parse', '$swipe', function($parse, $swipe) {
    // The maximum vertical delta for a swipe should be less than 75px.
    var MAX_VERTICAL_DISTANCE = 75;
    // Vertical distance should not be more than a fraction of the horizontal distance.
    var MAX_VERTICAL_RATIO = 0.3;
    // At least a 30px lateral motion is necessary for a swipe.
    var MIN_HORIZONTAL_DISTANCE = 30;

    return function(scope, element, attr) {
      var swipeHandler = $parse(attr[directiveName]);

      var startCoords, valid;

      function validSwipe(coords) {
        // Check that it's within the coordinates.
        // Absolute vertical distance must be within tolerances.
        // Horizontal distance, we take the current X - the starting X.
        // This is negative for leftward swipes and positive for rightward swipes.
        // After multiplying by the direction (-1 for left, +1 for right), legal swipes
        // (ie. same direction as the directive wants) will have a positive delta and
        // illegal ones a negative delta.
        // Therefore this delta must be positive, and larger than the minimum.
        if (!startCoords) return false;
        var deltaY = Math.abs(coords.y - startCoords.y);
        var deltaX = (coords.x - startCoords.x) * direction;
        return valid && // Short circuit for already-invalidated swipes.
            deltaY < MAX_VERTICAL_DISTANCE &&
            deltaX > 0 &&
            deltaX > MIN_HORIZONTAL_DISTANCE &&
            deltaY / deltaX < MAX_VERTICAL_RATIO;
      }

      var pointerTypes = ['touch'];
      if (!angular.isDefined(attr['ngSwipeDisableMouse'])) {
        pointerTypes.push('mouse');
      }
      $swipe.bind(element, {
        'start': function(coords, event) {
          startCoords = coords;
          valid = true;
        },
        'cancel': function(event) {
          valid = false;
        },
        'end': function(coords, event) {
          if (validSwipe(coords)) {
            scope.$apply(function() {
              element.triggerHandler(eventName);
              swipeHandler(scope, {$event: event});
            });
          }
        }
      }, pointerTypes);
    };
  }]);
}

// Left is negative X-coordinate, right is positive.
makeSwipeDirective('ngSwipeLeft', -1, 'swipeleft');
makeSwipeDirective('ngSwipeRight', 1, 'swiperight');



})(window, window.angular);

/*
 AngularJS v1.2.9
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,h,q){'use strict';function E(a){var e=[];s(e,h.noop).chars(a);return e.join("")}function k(a){var e={};a=a.split(",");var d;for(d=0;d<a.length;d++)e[a[d]]=!0;return e}function F(a,e){function d(a,b,d,g){b=h.lowercase(b);if(t[b])for(;f.last()&&u[f.last()];)c("",f.last());v[b]&&f.last()==b&&c("",b);(g=w[b]||!!g)||f.push(b);var l={};d.replace(G,function(a,b,e,c,d){l[b]=r(e||c||d||"")});e.start&&e.start(b,l,g)}function c(a,b){var c=0,d;if(b=h.lowercase(b))for(c=f.length-1;0<=c&&f[c]!=b;c--);
if(0<=c){for(d=f.length-1;d>=c;d--)e.end&&e.end(f[d]);f.length=c}}var b,g,f=[],l=a;for(f.last=function(){return f[f.length-1]};a;){g=!0;if(f.last()&&x[f.last()])a=a.replace(RegExp("(.*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(b,a){a=a.replace(H,"$1").replace(I,"$1");e.chars&&e.chars(r(a));return""}),c("",f.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",b)===b&&(e.comment&&e.comment(a.substring(4,b)),a=a.substring(b+3),g=!1);else if(y.test(a)){if(b=a.match(y))a=
a.replace(b[0],""),g=!1}else if(J.test(a)){if(b=a.match(z))a=a.substring(b[0].length),b[0].replace(z,c),g=!1}else K.test(a)&&(b=a.match(A))&&(a=a.substring(b[0].length),b[0].replace(A,d),g=!1);g&&(b=a.indexOf("<"),g=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),e.chars&&e.chars(r(g)))}if(a==l)throw L("badparse",a);l=a}c()}function r(a){if(!a)return"";var e=M.exec(a);a=e[1];var d=e[3];if(e=e[2])n.innerHTML=e.replace(/</g,"&lt;"),e="textContent"in n?n.textContent:n.innerText;return a+e+d}function B(a){return a.replace(/&/g,
"&amp;").replace(N,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(a,e){var d=!1,c=h.bind(a,a.push);return{start:function(a,g,f){a=h.lowercase(a);!d&&x[a]&&(d=a);d||!0!==C[a]||(c("<"),c(a),h.forEach(g,function(d,f){var g=h.lowercase(f),k="img"===a&&"src"===g||"background"===g;!0!==O[g]||!0===D[g]&&!e(d,k)||(c(" "),c(f),c('="'),c(B(d)),c('"'))}),c(f?"/>":">"))},end:function(a){a=h.lowercase(a);d||!0!==C[a]||(c("</"),c(a),c(">"));a==d&&(d=!1)},chars:function(a){d||
c(B(a))}}}var L=h.$$minErr("$sanitize"),A=/^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,z=/^<\s*\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,J=/^<\s*\//,H=/\x3c!--(.*?)--\x3e/g,y=/<!DOCTYPE([^>]*?)>/i,I=/<!\[CDATA\[(.*?)]]\x3e/g,N=/([^\#-~| |!])/g,w=k("area,br,col,hr,img,wbr");p=k("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");q=k("rp,rt");var v=h.extend({},q,p),t=h.extend({},p,k("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
u=h.extend({},q,k("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),x=k("script,style"),C=h.extend({},w,t,u,v),D=k("background,cite,href,longdesc,src,usemap"),O=h.extend({},D,k("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),
n=document.createElement("pre"),M=/^(\s*)([\s\S]*?)(\s*)$/;h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(a){return function(e){var d=[];F(e,s(d,function(c,b){return!/^unsafe/.test(a(c,b))}));return d.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var e=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/,d=/^mailto:/;return function(c,b){function g(a){a&&m.push(E(a))}function f(a,c){m.push("<a ");h.isDefined(b)&&
(m.push('target="'),m.push(b),m.push('" '));m.push('href="');m.push(a);m.push('">');g(c);m.push("</a>")}if(!c)return c;for(var l,k=c,m=[],n,p;l=k.match(e);)n=l[0],l[2]==l[3]&&(n="mailto:"+n),p=l.index,g(k.substr(0,p)),f(n,l[0].replace(d,"")),k=k.substring(p+l[0].length);g(k);return a(m.join(""))}}])})(window,window.angular);

// Animation directives

angular.module("animations", ["config"])

    // SHOW-HIDE animation for the sticky menu
    .directive("stickyShowAnimation", [function () {
        return {
            strict: "A",
            scope: {
                show: "=stickyShowAnimation"
            },
            link: function (scope, element) {
                element.css("visibility", "hidden");
                scope.$watch(function () { return element.height(); }, function (height) {
                    element.css("top", -height - 5 + "px");
                });
                scope.$watch("show", function (show) {
                    if (show) {
                        element.css("visibility", "visible");
                        element.velocity("stop").velocity({ top: "0px" }, 700);
                    } else {
                        element.velocity("stop").velocity({ top: -element.height() - 5 + "px" }, { duration: 300, visibility: "hidden" });
                    }
                });
            }
        }
    }])

    // SHOW-HIDE directive for the loading indicatior
    .directive("loader", ["animationConfig", function (animationConfig) {
        return {
            strict: "A",
            scope: {
                loader: "=",
                fade: "@",
                rps: "@"
            },
            link: function (scope, element) {
                element.hide();
                $(element).css("display", "inline-block");
                var rps = scope.rps ? scope.rps : animationConfig.loaderRps;
                var fade = (scope.fade == undefined) ? true : scope.$eval(scope.fade);
                scope.$watch("loader", function (val) {
                    if (val) {
                        $(element).show().velocity("stop");
                        if (fade) {
                            element.velocity({ rotateZ: 0 }, { duration: 0 });
                            element.velocity({ opacity: 1 }, { duration: 300, queue: false }).css("opacity", 1);
                        }
                        element.velocity({ rotateZ: 360 }, { duration: 1000 / rps, easing: "linear", loop: true });
                    } else {
                        if (fade) {
                            element.velocity({ opacity: 0 }, {
                                duration: 1000,
                                queue: false,
                                complete: function() {
                                    element.velocity("stop");
                                }
                            });
                        } else {
                            element.css("opacity", 0);
                            element.velocity("stop");
                        }
                    }
                });
            }
        }
    }])

    // On load fade in image
    // Example: <img data-fading-in-image src="image.jpg">
    .directive("fadingInImage", function () {
        return {
            restrict: "A",
            link: function (scope, element) {
                $(element).hide();
                element.bind("load", function () {
                    $(element).fadeIn();
                });
            }
        }
    });

/*! velocity-ui-angular - v0.3.5 - 2014-08-18
* https://github.com/rosslavery/velocity-ui-angular
* Copyright (c) 2014 Ross Lavery <rosslavery@gmail.com>; License: MIT */
(function(angular) {
  'use strict';

  var Container = (window.jQuery || window.Zepto || window);
  if (!Container.Velocity || !Container.Velocity.Utilities || !Container.Velocity.RegisterUI) {
    throw new Error('Velocity UI Pack: Velocity must be loaded first. Aborting.');
  }

  Container.ngVelocity = angular.module('velocity.ui', ['ngAnimate'])

  .constant('ngVelocityConfig', {
    duration: 300
  })

  .factory('VelocityUtils', ['ngVelocityConfig', "$parse", function (ngVelocityConfig, $parse) {

    return {

      _parseClassList: function(classList) {
        var parsedOptions = {};

        angular.forEach(classList, function(currClass) {
            if (currClass.indexOf('velocity-duration-') > -1) {
                parsedOptions.duration = $parse(currClass.split('velocity-duration-')[1])();
            }
            if (currClass.indexOf('velocity-delay-') > -1) {
                parsedOptions.delay = $parse(currClass.split('velocity-delay-')[1])();
            }
        });

        return parsedOptions;
      },

      _createAngularAnimation: function(animation) {
        var self = this;
        var opp = animation.replace('In', 'Out');

        if (opp.indexOf('Down') > -1) {
          opp = opp.replace('Down', 'Up');
        }
        else if (opp.indexOf('Up') > -1) {
          opp = opp.replace('Up', 'Down');
        }

        return {
          enter: self._createVelocityAnimation(animation),
          leave: self._createVelocityAnimation(opp),
          move: self._createVelocityAnimation(animation),
          beforeAddClass: self._createVelocityClassAnimation(opp),
          removeClass: self._createVelocityClassAnimation(animation)
        };
      },

      _createVelocityAnimation: function(animation) {
        var self = this;

        return function($el, done) {
          var parsedOptions = self._parseClassList($el[0].classList);
          var options = angular.extend(ngVelocityConfig, parsedOptions);
          options.display = $el.css('display') === 'flex' ? 'flex' : 'auto';
            $el.css("opacity", 0);
          Container.Velocity.animate($el, animation, options).then(done);
        };
      },

      _createVelocityClassAnimation: function(animation) {
        var self = this;

        return function ($el, className, done) {
          var parsedOptions = self._parseClassList($el[0].classList);
          var options = angular.extend(ngVelocityConfig, parsedOptions);
          options.display = $el.css('display') === 'flex' ? 'flex' : 'auto';

          if (className === 'ng-hide') {
            Container.Velocity.animate($el, animation, options).then(done);
          }
          else {
            done();
          }
        };
      }

    };

  }]);


  // Convert animation name to class name
  function _getClassName(animation) {
    return '.velocity-' + animation.replace('.', '-');
  }


  // Iterate through the packaged effects to register them as Angular animations
  var className;
  angular.forEach(Container.Velocity.RegisterUI.packagedEffects, function(animationProps, animationName) {

    className = _getClassName(animationName);

    Container.ngVelocity.animation(className, ['VelocityUtils', function(VelocityUtils) {
      return VelocityUtils._createAngularAnimation(animationName);
    }]);

  });


})(angular);

/*

Customized version (changed inline html templates)
Do not update automatically

 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.11.2 - 2014-09-26
 * License: MIT
 */

angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.transition","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.transition",[]).factory("$transition",["$q","$timeout","$rootScope",function(a,b,c){function d(a){for(var b in a)if(void 0!==f.style[b])return a[b]}var e=function(d,f,g){g=g||{};var h=a.defer(),i=e[g.animation?"animationEndEventName":"transitionEndEventName"],j=function(){c.$apply(function(){d.unbind(i,j),h.resolve(d)})};return i&&d.bind(i,j),b(function(){angular.isString(f)?d.addClass(f):angular.isFunction(f)?f(d):angular.isObject(f)&&d.css(f),i||h.resolve(d)}),h.promise.cancel=function(){i&&d.unbind(i,j),h.reject("Transition cancelled")},h.promise},f=document.createElement("trans"),g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},h={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return e.transitionEndEventName=d(g),e.animationEndEventName=d(h),e}]),angular.module("ui.bootstrap.collapse",["ui.bootstrap.transition"]).directive("collapse",["$transition",function(a){return{link:function(b,c,d){function e(b){function d(){j===e&&(j=void 0)}var e=a(c,b);return j&&j.cancel(),j=e,e.then(d,d),e}function f(){k?(k=!1,g()):(c.removeClass("collapse").addClass("collapsing"),e({height:c[0].scrollHeight+"px"}).then(g))}function g(){c.removeClass("collapsing"),c.addClass("collapse in"),c.css({height:"auto"})}function h(){if(k)k=!1,i(),c.css({height:0});else{c.css({height:c[0].scrollHeight+"px"});{c[0].offsetWidth}c.removeClass("collapse in").addClass("collapsing"),e({height:0}).then(i)}}function i(){c.removeClass("collapsing"),c.addClass("collapse")}var j,k=!0;b.$watch(d.collapse,function(a){a?h():f()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",transclude:!0,replace:!1,templateUrl:"template/accordion/accordion.html"}}).directive("accordionGroup",function(){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/accordion/accordion-group.html",scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.$watch("isOpen",function(b){b&&d.closeOthers(a)}),a.toggleOpen=function(){a.isDisabled||(a.isOpen=!a.isOpen)}}}}).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,function(){}))}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(a,b,c,d){a.$watch(function(){return d[c.accordionTransclude]},function(a){a&&(b.html(""),b.append(a))})}}}),angular.module("ui.bootstrap.alert",[]).controller("AlertController",["$scope","$attrs",function(a,b){a.closeable="close"in b}]).directive("alert",function(){return{restrict:"EA",controller:"AlertController",templateUrl:"template/alert/alert.html",transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}),angular.module("ui.bootstrap.bindHtml",[]).directive("bindHtmlUnsafe",function(){return function(a,b,c){b.addClass("ng-binding").data("$binding",c.bindHtmlUnsafe),a.$watch(c.bindHtmlUnsafe,function(a){b.html(a||"")})}}),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).controller("ButtonsController",["buttonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("btnRadio",function(){return{require:["btnRadio","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){var e=d[0],f=d[1];f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.btnRadio)))},b.bind(e.toggleEvent,function(){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.btnRadio)),f.$render()})})}}}).directive("btnCheckbox",function(){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){var d=a.$eval(b);return angular.isDefined(d)?d:c}var h=d[0],i=d[1];i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.bind(h.toggleEvent,function(){a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",["ui.bootstrap.transition"]).controller("CarouselController",["$scope","$timeout","$transition",function(a,b,c){function d(){e();var c=+a.interval;!isNaN(c)&&c>=0&&(g=b(f,c))}function e(){g&&(b.cancel(g),g=null)}function f(){h?(a.next(),d()):a.pause()}var g,h,i=this,j=i.slides=a.slides=[],k=-1;i.currentSlide=null;var l=!1;i.select=a.select=function(e,f){function g(){if(!l){if(i.currentSlide&&angular.isString(f)&&!a.noTransition&&e.$element){e.$element.addClass(f);{e.$element[0].offsetWidth}angular.forEach(j,function(a){angular.extend(a,{direction:"",entering:!1,leaving:!1,active:!1})}),angular.extend(e,{direction:f,active:!0,entering:!0}),angular.extend(i.currentSlide||{},{direction:f,leaving:!0}),a.$currentTransition=c(e.$element,{}),function(b,c){a.$currentTransition.then(function(){h(b,c)},function(){h(b,c)})}(e,i.currentSlide)}else h(e,i.currentSlide);i.currentSlide=e,k=m,d()}}function h(b,c){angular.extend(b,{direction:"",active:!0,leaving:!1,entering:!1}),angular.extend(c||{},{direction:"",active:!1,leaving:!1,entering:!1}),a.$currentTransition=null}var m=j.indexOf(e);void 0===f&&(f=m>k?"next":"prev"),e&&e!==i.currentSlide&&(a.$currentTransition?(a.$currentTransition.cancel(),b(g)):g())},a.$on("$destroy",function(){l=!0}),i.indexOfSlide=function(a){return j.indexOf(a)},a.next=function(){var b=(k+1)%j.length;return a.$currentTransition?void 0:i.select(j[b],"next")},a.prev=function(){var b=0>k-1?j.length-1:k-1;return a.$currentTransition?void 0:i.select(j[b],"prev")},a.isActive=function(a){return i.currentSlide===a},a.$watch("interval",d),a.$on("$destroy",e),a.play=function(){h||(h=!0,d())},a.pause=function(){a.noPause||(h=!1,e())},i.addSlide=function(b,c){b.$element=c,j.push(b),1===j.length||b.active?(i.select(j[j.length-1]),1==j.length&&a.play()):b.active=!1},i.removeSlide=function(a){var b=j.indexOf(a);j.splice(b,1),j.length>0&&a.active?i.select(b>=j.length?j[b-1]:j[b]):k>b&&k--}}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",require:"carousel",templateUrl:"template/carousel/carousel.html",scope:{interval:"=",noTransition:"=",noPause:"="}}}]).directive("slide",function(){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/carousel/slide.html",scope:{active:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)}),a.$watch("active",function(b){b&&d.select(a)})}}}),angular.module("ui.bootstrap.dateparser",[]).service("dateParser",["$locale","orderByFilter",function(a,b){function c(a){var c=[],d=a.split("");return angular.forEach(e,function(b,e){var f=a.indexOf(e);if(f>-1){a=a.split(""),d[f]="("+b.regex+")",a[f]="$";for(var g=f+1,h=f+e.length;h>g;g++)d[g]="",a[g]="$";a=a.join(""),c.push({index:f,apply:b.apply})}}),{regex:new RegExp("^"+d.join("")+"$"),map:b(c,"index")}}function d(a,b,c){return 1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}this.parsers={};var e={yyyy:{regex:"\\d{4}",apply:function(a){this.year=+a}},yy:{regex:"\\d{2}",apply:function(a){this.year=+a+2e3}},y:{regex:"\\d{1,4}",apply:function(a){this.year=+a}},MMMM:{regex:a.DATETIME_FORMATS.MONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.MONTH.indexOf(b)}},MMM:{regex:a.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1}},M:{regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},EEEE:{regex:a.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:a.DATETIME_FORMATS.SHORTDAY.join("|")}};this.parse=function(b,e){if(!angular.isString(b)||!e)return b;e=a.DATETIME_FORMATS[e]||e,this.parsers[e]||(this.parsers[e]=c(e));var f=this.parsers[e],g=f.regex,h=f.map,i=b.match(g);if(i&&i.length){for(var j,k={year:1900,month:0,date:1,hours:0},l=1,m=i.length;m>l;l++){var n=h[l-1];n.apply&&n.apply.call(k,i[l])}return d(k.year,k.month,k.date)&&(j=new Date(k.year,k.month,k.date,k.hours)),j}}}]),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split("-"),j=i[0],k=i[1]||"center";e=d?this.offset(a):this.position(a),f=b.prop("offsetWidth"),g=b.prop("offsetHeight");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case"right":h={top:m[k](),left:l[j]()};break;case"left":h={top:m[k](),left:e.left-f};break;case"bottom":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).constant("datepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null}).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$timeout","$log","dateFilter","datepickerConfig",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","minMode","maxMode","showWeeks","startingDay","yearRange"],function(c,e){i[c]=angular.isDefined(b[c])?8>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):h[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=h[d]?new Date(h[d]):null}),a.datepickerMode=a.datepickerMode||h.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),this.activeDate=angular.isDefined(b.initDate)?a.$parent.$eval(b.initDate):new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$modelValue){var a=new Date(j.$modelValue),b=!isNaN(a);b?this.activeDate=a:f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'),j.$setValidity("date",b)}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$modelValue?new Date(j.$modelValue):null;j.$setValidity("date-disabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$modelValue?new Date(j.$modelValue):null;return{date:a,label:g(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$modelValue?new Date(j.$modelValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var k=function(){e(function(){i.element[0].focus()},0,!1)};a.$on("datepicker.focus",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),b.stopPropagation(),"enter"===c||"space"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate),k()}else!b.ctrlKey||"up"!==c&&"down"!==c?(i.handleKeyDown(c,b),i.refreshView()):(a.toggleMode("up"===c?1:-1),k())}}]).directive("datepicker",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/datepicker.html",scope:{datepickerMode:"=?",dateDisabled:"&"},require:["datepicker","?^ngModel"],controller:"DatepickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}).directive("daypicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/day.html",require:"^datepicker",link:function(b,c,d,e){function f(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?i[b]:29}function g(a,b){var c=new Array(b),d=new Date(a),e=0;for(d.setHours(12);b>e;)c[e++]=new Date(d),d.setDate(d.getDate()+1);return c}function h(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}b.showWeeks=e.showWeeks,e.step={months:1},e.element=c;var i=[31,28,31,30,31,30,31,31,30,31,30,31];e._refreshView=function(){var c=e.activeDate.getFullYear(),d=e.activeDate.getMonth(),f=new Date(c,d,1),i=e.startingDay-f.getDay(),j=i>0?7-i:-i,k=new Date(f);j>0&&k.setDate(-j+1);for(var l=g(k,42),m=0;42>m;m++)l[m]=angular.extend(e.createDateObject(l[m],e.formatDay),{secondary:l[m].getMonth()!==d,uid:b.uniqueId+"-"+m});b.labels=new Array(7);for(var n=0;7>n;n++)b.labels[n]={abbr:a(l[n].date,e.formatDayHeader),full:a(l[n].date,"EEEE")};if(b.title=a(e.activeDate,e.formatDayTitle),b.rows=e.split(l,7),b.showWeeks){b.weekNumbers=[];for(var o=h(b.rows[0][0].date),p=b.rows.length;b.weekNumbers.push(o++)<p;);}},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},e.handleKeyDown=function(a){var b=e.activeDate.getDate();if("left"===a)b-=1;else if("up"===a)b-=7;else if("right"===a)b+=1;else if("down"===a)b+=7;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getMonth()+("pageup"===a?-1:1);e.activeDate.setMonth(c,1),b=Math.min(f(e.activeDate.getFullYear(),e.activeDate.getMonth()),b)}else"home"===a?b=1:"end"===a&&(b=f(e.activeDate.getFullYear(),e.activeDate.getMonth()));e.activeDate.setDate(b)},e.refreshView()}}}]).directive("monthpicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/month.html",require:"^datepicker",link:function(b,c,d,e){e.step={years:1},e.element=c,e._refreshView=function(){for(var c=new Array(12),d=e.activeDate.getFullYear(),f=0;12>f;f++)c[f]=angular.extend(e.createDateObject(new Date(d,f,1),e.formatMonth),{uid:b.uniqueId+"-"+f});b.title=a(e.activeDate,e.formatMonthTitle),b.rows=e.split(c,3)},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},e.handleKeyDown=function(a){var b=e.activeDate.getMonth();if("left"===a)b-=1;else if("up"===a)b-=3;else if("right"===a)b+=1;else if("down"===a)b+=3;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getFullYear()+("pageup"===a?-1:1);e.activeDate.setFullYear(c)}else"home"===a?b=0:"end"===a&&(b=11);e.activeDate.setMonth(b)},e.refreshView()}}}]).directive("yearpicker",["dateFilter",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/year.html",require:"^datepicker",link:function(a,b,c,d){function e(a){return parseInt((a-1)/f,10)*f+1}var f=d.yearRange;d.step={years:f},d.element=b,d._refreshView=function(){for(var b=new Array(f),c=0,g=e(d.activeDate.getFullYear());f>c;c++)b[c]=angular.extend(d.createDateObject(new Date(g+c,0,1),d.formatYear),{uid:a.uniqueId+"-"+c});a.title=[b[0].label,b[f-1].label].join(" - "),a.rows=d.split(b,5)},d.compare=function(a,b){return a.getFullYear()-b.getFullYear()},d.handleKeyDown=function(a){var b=d.activeDate.getFullYear();"left"===a?b-=1:"up"===a?b-=5:"right"===a?b+=1:"down"===a?b+=5:"pageup"===a||"pagedown"===a?b+=("pageup"===a?-1:1)*d.step.years:"home"===a?b=e(d.activeDate.getFullYear()):"end"===a&&(b=e(d.activeDate.getFullYear())+f-1),d.activeDate.setFullYear(b)},d.refreshView()}}}]).constant("datepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0}).directive("datepickerPopup",["$compile","$parse","$document","$position","dateFilter","dateParser","datepickerPopupConfig",function(a,b,c,d,e,f,g){return{restrict:"EA",require:"ngModel",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&"},link:function(h,i,j,k){function l(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function m(a){if(a){if(angular.isDate(a)&&!isNaN(a))return k.$setValidity("date",!0),a;if(angular.isString(a)){var b=f.parse(a,n)||new Date(a);return isNaN(b)?void k.$setValidity("date",!1):(k.$setValidity("date",!0),b)}return void k.$setValidity("date",!1)}return k.$setValidity("date",!0),null}var n,o=angular.isDefined(j.closeOnDateSelection)?h.$parent.$eval(j.closeOnDateSelection):g.closeOnDateSelection,p=angular.isDefined(j.datepickerAppendToBody)?h.$parent.$eval(j.datepickerAppendToBody):g.appendToBody;h.showButtonBar=angular.isDefined(j.showButtonBar)?h.$parent.$eval(j.showButtonBar):g.showButtonBar,h.getText=function(a){return h[a+"Text"]||g[a+"Text"]},j.$observe("datepickerPopup",function(a){n=a||g.datepickerPopup,k.$render()});var q=angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");q.attr({"ng-model":"date","ng-change":"dateSelection()"});var r=angular.element(q.children()[0]);j.datepickerOptions&&angular.forEach(h.$parent.$eval(j.datepickerOptions),function(a,b){r.attr(l(b),a)}),h.watchData={},angular.forEach(["minDate","maxDate","datepickerMode"],function(a){if(j[a]){var c=b(j[a]);if(h.$parent.$watch(c,function(b){h.watchData[a]=b}),r.attr(l(a),"watchData."+a),"datepickerMode"===a){var d=c.assign;h.$watch("watchData."+a,function(a,b){a!==b&&d(h.$parent,a)})}}}),j.dateDisabled&&r.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),k.$parsers.unshift(m),h.dateSelection=function(a){angular.isDefined(a)&&(h.date=a),k.$setViewValue(h.date),k.$render(),o&&(h.isOpen=!1,i[0].focus())},i.bind("input change keyup",function(){h.$apply(function(){h.date=k.$modelValue})}),k.$render=function(){var a=k.$viewValue?e(k.$viewValue,n):"";i.val(a),h.date=m(k.$modelValue)};var s=function(a){h.isOpen&&a.target!==i[0]&&h.$apply(function(){h.isOpen=!1})},t=function(a){h.keydown(a)};i.bind("keydown",t),h.keydown=function(a){27===a.which?(a.preventDefault(),a.stopPropagation(),h.close()):40!==a.which||h.isOpen||(h.isOpen=!0)},h.$watch("isOpen",function(a){a?(h.$broadcast("datepicker.focus"),h.position=p?d.offset(i):d.position(i),h.position.top=h.position.top+i.prop("offsetHeight"),c.bind("click",s)):c.unbind("click",s)}),h.select=function(a){if("today"===a){var b=new Date;angular.isDate(k.$modelValue)?(a=new Date(k.$modelValue),a.setFullYear(b.getFullYear(),b.getMonth(),b.getDate())):a=new Date(b.setHours(0,0,0,0))}h.dateSelection(a)},h.close=function(){h.isOpen=!1,i[0].focus()};var u=a(q)(h);q.remove(),p?c.find("body").append(u):i.after(u),h.$on("$destroy",function(){u.remove(),i.unbind("keydown",t),c.unbind("click",s)})}}}]).directive("datepickerPopupWrap",function(){return{restrict:"EA",replace:!0,transclude:!0,templateUrl:"template/datepicker/popup.html",link:function(a,b){b.bind("click",function(a){a.preventDefault(),a.stopPropagation()})}}}),angular.module("ui.bootstrap.dropdown",[]).constant("dropdownConfig",{openClass:"open"}).service("dropdownService",["$document",function(a){var b=null;this.open=function(e){b||(a.bind("click",c),a.bind("keydown",d)),b&&b!==e&&(b.isOpen=!1),b=e},this.close=function(e){b===e&&(b=null,a.unbind("click",c),a.unbind("keydown",d))};var c=function(a){var c=b.getToggleElement();a&&c&&c[0].contains(a.target)||b.$apply(function(){b.isOpen=!1})},d=function(a){27===a.which&&(b.focusToggleElement(),c())}}]).controller("DropdownController",["$scope","$attrs","$parse","dropdownConfig","dropdownService","$animate",function(a,b,c,d,e,f){var g,h=this,i=a.$new(),j=d.openClass,k=angular.noop,l=b.onToggle?c(b.onToggle):angular.noop;this.init=function(d){h.$element=d,b.isOpen&&(g=c(b.isOpen),k=g.assign,a.$watch(g,function(a){i.isOpen=!!a}))},this.toggle=function(a){return i.isOpen=arguments.length?!!a:!i.isOpen},this.isOpen=function(){return i.isOpen},i.getToggleElement=function(){return h.toggleElement},i.focusToggleElement=function(){h.toggleElement&&h.toggleElement[0].focus()},i.$watch("isOpen",function(b,c){f[b?"addClass":"removeClass"](h.$element,j),b?(i.focusToggleElement(),e.open(i)):e.close(i),k(a,b),angular.isDefined(b)&&b!==c&&l(a,{open:!!b})}),a.$on("$locationChangeSuccess",function(){i.isOpen=!1}),a.$on("$destroy",function(){i.$destroy()})}]).directive("dropdown",function(){return{restrict:"CA",controller:"DropdownController",link:function(a,b,c,d){d.init(b)}}}).directive("dropdownToggle",function(){return{restrict:"CA",require:"?^dropdown",link:function(a,b,c,d){if(d){d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.transition"]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}).directive("modalBackdrop",["$timeout",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/modal/backdrop.html",link:function(b,c,d){b.backdropClass=d.backdropClass||"",b.animate=!1,a(function(){b.animate=!0})}}}]).directive("modalWindow",["$modalStack","$timeout",function(a,b){return{restrict:"EA",scope:{index:"@",animate:"="},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(c,d,e){d.addClass(e.windowClass||""),c.size=e.size,b(function(){c.animate=!0,d[0].querySelectorAll("[autofocus]").length||d[0].focus()}),c.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!=c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))}}}}]).directive("modalTransclude",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory("$modalStack",["$transition","$timeout","$document","$compile","$rootScope","$$stackedMap",function(a,b,c,d,e,f){function g(){for(var a=-1,b=n.keys(),c=0;c<b.length;c++)n.get(b[c]).value.backdrop&&(a=c);return a}function h(a){var b=c.find("body").eq(0),d=n.get(a).value;n.remove(a),j(d.modalDomEl,d.modalScope,300,function(){d.modalScope.$destroy(),b.toggleClass(m,n.length()>0),i()})}function i(){if(k&&-1==g()){var a=l;j(k,l,150,function(){a.$destroy(),a=null}),k=void 0,l=void 0}}function j(c,d,e,f){function g(){g.done||(g.done=!0,c.remove(),f&&f())}d.animate=!1;var h=a.transitionEndEventName;if(h){var i=b(g,e);c.bind(h,function(){b.cancel(i),g(),d.$apply()})}else b(g)}var k,l,m="modal-open",n=f.createNew(),o={};return e.$watch(g,function(a){l&&(l.index=a)}),c.bind("keydown",function(a){var b;27===a.which&&(b=n.top(),b&&b.value.keyboard&&(a.preventDefault(),e.$apply(function(){o.dismiss(b.key,"escape key press")})))}),o.open=function(a,b){n.add(a,{deferred:b.deferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard});var f=c.find("body").eq(0),h=g();if(h>=0&&!k){l=e.$new(!0),l.index=h;var i=angular.element("<div modal-backdrop></div>");i.attr("backdrop-class",b.backdropClass),k=d(i)(l),f.append(k)}var j=angular.element("<div modal-window></div>");j.attr({"template-url":b.windowTemplateUrl,"window-class":b.windowClass,size:b.size,index:n.length()-1,animate:"animate"}).html(b.content);var o=d(j)(b.scope);n.top().value.modalDomEl=o,f.append(o),f.addClass(m)},o.close=function(a,b){var c=n.get(a);c&&(c.value.deferred.resolve(b),h(a))},o.dismiss=function(a,b){var c=n.get(a);c&&(c.value.deferred.reject(b),h(a))},o.dismissAll=function(a){for(var b=this.getTop();b;)this.dismiss(b.key,a),b=this.getTop()},o.getTop=function(){return n.top()},o}]).provider("$modal",function(){var a={options:{backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$http","$templateCache","$controller","$modalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?d.when(a.template):e.get(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl,{cache:f}).then(function(a){return a.data})}function j(a){var c=[];return angular.forEach(a,function(a){(angular.isFunction(a)||angular.isArray(a))&&c.push(d.when(b.invoke(a)))}),c}var k={};return k.open=function(b){var e=d.defer(),f=d.defer(),k={result:e.promise,opened:f.promise,close:function(a){h.close(k,a)},dismiss:function(a){h.dismiss(k,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var l=d.all([i(b)].concat(j(b.resolve)));return l.then(function(a){var d=(b.scope||c).$new();d.$close=k.close,d.$dismiss=k.dismiss;var f,i={},j=1;b.controller&&(i.$scope=d,i.$modalInstance=k,angular.forEach(b.resolve,function(b,c){i[c]=a[j++]}),f=g(b.controller,i),b.controllerAs&&(d[b.controllerAs]=f)),h.open(k,{scope:d,deferred:e,content:a[0],backdrop:b.backdrop,keyboard:b.keyboard,backdropClass:b.backdropClass,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size})},function(a){e.reject(a)}),l.then(function(){f.resolve(!0)},function(){f.reject(!1)}),k},k}]};return a}),angular.module("ui.bootstrap.pagination",[]).controller("PaginationController",["$scope","$attrs","$parse",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(f,g){e=f,this.config=g,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=g.itemsPerPage},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b){a.page!==b&&b>0&&b<=a.totalPages&&(e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+"Text"]||d.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages},a.$watch("totalItems",function(){a.totalPages=d.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})}]).constant("paginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["$parse","paginationConfig",function(a,b){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@"},require:["pagination","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pagination.html",replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,"...",!1);c.unshift(j)}if(b>e){var m=g(e+1,"...",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()
}); var m = i.render; i.render = function () { m(), c.page > 0 && c.page <= c.totalPages && (c.pages = h(c.page, c.totalPages)) }
}}}}]).constant("pagerConfig", { itemsPerPage: 10, previousText: "Â« Previous", nextText: "Next Â»", align: !0 }).directive("pager", ["pagerConfig", function (a) { return { restrict: "EA", scope: { totalItems: "=", previousText: "@", nextText: "@" }, require: ["pager", "?ngModel"], controller: "PaginationController", templateUrl: "template/pagination/pager.html", replace: !0, link: function (b, c, d, e) { var f = e[0], g = e[1]; g && (b.align = angular.isDefined(d.align) ? b.$parent.$eval(d.align) : a.align, f.init(g, a)) } } }]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function () { function a(a) { var b = /[A-Z]/g, c = "-"; return a.replace(b, function (a, b) { return (b ? c : "") + a.toLowerCase() }) } var b = { placement: "top", animation: !0, popupDelay: 0 }, c = { mouseenter: "mouseleave", click: "click", focus: "blur" }, d = {}; this.options = function (a) { angular.extend(d, a) }, this.setTriggers = function (a) { angular.extend(c, a) }, this.$get = ["$window", "$compile", "$timeout", "$parse", "$document", "$position", "$interpolate", function (e, f, g, h, i, j, k) { return function (e, l, m) { function n(a) { var b = a || o.trigger || m, d = c[b] || b; return { show: b, hide: d } } var o = angular.extend({}, b, d), p = a(e), q = k.startSymbol(), r = k.endSymbol(), s = "<div " + p + '-popup title="' + q + "tt_title" + r + '" content="' + q + "tt_content" + r + '" placement="' + q + "tt_placement" + r + '" animation="tt_animation" is-open="tt_isOpen"></div>'; return { restrict: "EA", scope: !0, compile: function () { var a = f(s); return function (b, c, d) { function f() { b.tt_isOpen ? m() : k() } function k() { (!y || b.$eval(d[l + "Enable"])) && (b.tt_popupDelay ? v || (v = g(p, b.tt_popupDelay, !1), v.then(function (a) { a() })) : p()()) } function m() { b.$apply(function () { q() }) } function p() { return v = null, u && (g.cancel(u), u = null), b.tt_content ? (r(), t.css({ top: 0, left: 0, display: "block" }), w ? i.find("body").append(t) : c.after(t), z(), b.tt_isOpen = !0, b.$digest(), z) : angular.noop } function q() { b.tt_isOpen = !1, g.cancel(v), v = null, b.tt_animation ? u || (u = g(s, 500)) : s() } function r() { t && s(), t = a(b, function () { }), b.$digest() } function s() { u = null, t && (t.remove(), t = null) } var t, u, v, w = angular.isDefined(o.appendToBody) ? o.appendToBody : !1, x = n(void 0), y = angular.isDefined(d[l + "Enable"]), z = function () { var a = j.positionElements(c, t, b.tt_placement, w); a.top += "px", a.left += "px", t.css(a) }; b.tt_isOpen = !1, d.$observe(e, function (a) { b.tt_content = a, !a && b.tt_isOpen && q() }), d.$observe(l + "Title", function (a) { b.tt_title = a }), d.$observe(l + "Placement", function (a) { b.tt_placement = angular.isDefined(a) ? a : o.placement }), d.$observe(l + "PopupDelay", function (a) { var c = parseInt(a, 10); b.tt_popupDelay = isNaN(c) ? o.popupDelay : c }); var A = function () { c.unbind(x.show, k), c.unbind(x.hide, m) }; d.$observe(l + "Trigger", function (a) { A(), x = n(a), x.show === x.hide ? c.bind(x.show, f) : (c.bind(x.show, k), c.bind(x.hide, m)) }); var B = b.$eval(d[l + "Animation"]); b.tt_animation = angular.isDefined(B) ? !!B : o.animation, d.$observe(l + "AppendToBody", function (a) { w = angular.isDefined(a) ? h(a)(b) : w }), w && b.$on("$locationChangeSuccess", function () { b.tt_isOpen && q() }), b.$on("$destroy", function () { g.cancel(u), g.cancel(v), A(), s() }) } } } } }] }).directive("tooltipPopup", function () { return { restrict: "EA", replace: !0, scope: { content: "@", placement: "@", animation: "&", isOpen: "&" }, templateUrl: "template/tooltip/tooltip-popup.html" } }).directive("tooltip", ["$tooltip", function (a) { return a("tooltip", "tooltip", "mouseenter") }]).directive("tooltipHtmlUnsafePopup", function () { return { restrict: "EA", replace: !0, scope: { content: "@", placement: "@", animation: "&", isOpen: "&" }, templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html" } }).directive("tooltipHtmlUnsafe", ["$tooltip", function (a) { return a("tooltipHtmlUnsafe", "tooltip", "mouseenter") }]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverPopup", function () { return { restrict: "EA", replace: !0, scope: { title: "@", content: "@", placement: "@", animation: "&", isOpen: "&" }, templateUrl: "template/popover/popover.html" } }).directive("popover", ["$tooltip", function (a) { return a("popover", "popover", "click") }]), angular.module("ui.bootstrap.progressbar", []).constant("progressConfig", { animate: !0, max: 100 }).controller("ProgressController", ["$scope", "$attrs", "progressConfig", function (a, b, c) { var d = this, e = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate; this.bars = [], a.max = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max, this.addBar = function (b, c) { e || c.css({ transition: "none" }), this.bars.push(b), b.$watch("value", function (c) { b.percent = +(100 * c / a.max).toFixed(2) }), b.$on("$destroy", function () { c = null, d.removeBar(b) }) }, this.removeBar = function (a) { this.bars.splice(this.bars.indexOf(a), 1) } }]).directive("progress", function () { return { restrict: "EA", replace: !0, transclude: !0, controller: "ProgressController", require: "progress", scope: {}, templateUrl: "template/progressbar/progress.html" } }).directive("bar", function () { return { restrict: "EA", replace: !0, transclude: !0, require: "^progress", scope: { value: "=", type: "@" }, templateUrl: "template/progressbar/bar.html", link: function (a, b, c, d) { d.addBar(a, b) } } }).directive("progressbar", function () { return { restrict: "EA", replace: !0, transclude: !0, controller: "ProgressController", scope: { value: "=", type: "@" }, templateUrl: "template/progressbar/progressbar.html", link: function (a, b, c, d) { d.addBar(a, angular.element(b.children()[0])) } } }), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", { max: 5, stateOn: null, stateOff: null }).controller("RatingController", ["$scope", "$attrs", "ratingConfig", function (a, b, c) { var d = { $setViewValue: angular.noop }; this.init = function (e) { d = e, d.$render = this.render, this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : c.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : c.stateOff; var f = angular.isDefined(b.ratingStates) ? a.$parent.$eval(b.ratingStates) : new Array(angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max); a.range = this.buildTemplateObjects(f) }, this.buildTemplateObjects = function (a) { for (var b = 0, c = a.length; c > b; b++) a[b] = angular.extend({ index: b }, { stateOn: this.stateOn, stateOff: this.stateOff }, a[b]); return a }, a.rate = function (b) { !a.readonly && b >= 0 && b <= a.range.length && (d.$setViewValue(b), d.$render()) }, a.enter = function (b) { a.readonly || (a.value = b), a.onHover({ value: b }) }, a.reset = function () { a.value = d.$viewValue, a.onLeave() }, a.onKeydown = function (b) { /(37|38|39|40)/.test(b.which) && (b.preventDefault(), b.stopPropagation(), a.rate(a.value + (38 === b.which || 39 === b.which ? 1 : -1))) }, this.render = function () { a.value = d.$viewValue } }]).directive("rating", function () { return { restrict: "EA", require: ["rating", "ngModel"], scope: { readonly: "=?", onHover: "&", onLeave: "&" }, controller: "RatingController", templateUrl: "template/rating/rating.html", replace: !0, link: function (a, b, c, d) { var e = d[0], f = d[1]; f && e.init(f) } } }), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope", function (a) { var b = this, c = b.tabs = a.tabs = []; b.select = function (a) { angular.forEach(c, function (b) { b.active && b !== a && (b.active = !1, b.onDeselect()) }), a.active = !0, a.onSelect() }, b.addTab = function (a) { c.push(a), 1 === c.length ? a.active = !0 : a.active && b.select(a) }, b.removeTab = function (a) { var d = c.indexOf(a); if (a.active && c.length > 1) { var e = d == c.length - 1 ? d - 1 : d + 1; b.select(c[e]) } c.splice(d, 1) } }]).directive("tabset", function () { return { restrict: "EA", transclude: !0, replace: !0, scope: { type: "@" }, controller: "TabsetController", templateUrl: "template/tabs/tabset.html", link: function (a, b, c) { a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1 } } }).directive("tab", ["$parse", function (a) { return { require: "^tabset", restrict: "EA", replace: !0, templateUrl: "template/tabs/tab.html", transclude: !0, scope: { active: "=?", heading: "@", onSelect: "&select", onDeselect: "&deselect" }, controller: function () { }, compile: function (b, c, d) { return function (b, c, e, f) { b.$watch("active", function (a) { a && f.select(b) }), b.disabled = !1, e.disabled && b.$parent.$watch(a(e.disabled), function (a) { b.disabled = !!a }), b.select = function () { b.disabled || (b.active = !0) }, f.addTab(b), b.$on("$destroy", function () { f.removeTab(b) }), b.$transcludeFn = d } } } }]).directive("tabHeadingTransclude", [function () { return { restrict: "A", require: "^tab", link: function (a, b) { a.$watch("headingElement", function (a) { a && (b.html(""), b.append(a)) }) } } }]).directive("tabContentTransclude", function () { function a(a) { return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase()) } return { restrict: "A", require: "^tabset", link: function (b, c, d) { var e = b.$eval(d.tabContentTransclude); e.$transcludeFn(e.$parent, function (b) { angular.forEach(b, function (b) { a(b) ? e.headingElement = b : c.append(b) }) }) } } }), angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", { hourStep: 1, minuteStep: 1, showMeridian: !0, meridians: null, readonlyInput: !1, mousewheel: !0 }).controller("TimepickerController", ["$scope", "$attrs", "$parse", "$log", "$locale", "timepickerConfig", function (a, b, c, d, e, f) { function g() { var b = parseInt(a.hours, 10), c = a.showMeridian ? b > 0 && 13 > b : b >= 0 && 24 > b; return c ? (a.showMeridian && (12 === b && (b = 0), a.meridian === p[1] && (b += 12)), b) : void 0 } function h() { var b = parseInt(a.minutes, 10); return b >= 0 && 60 > b ? b : void 0 } function i(a) { return angular.isDefined(a) && a.toString().length < 2 ? "0" + a : a } function j(a) { k(), o.$setViewValue(new Date(n)), l(a) } function k() { o.$setValidity("time", !0), a.invalidHours = !1, a.invalidMinutes = !1 } function l(b) { var c = n.getHours(), d = n.getMinutes(); a.showMeridian && (c = 0 === c || 12 === c ? 12 : c % 12), a.hours = "h" === b ? c : i(c), a.minutes = "m" === b ? d : i(d), a.meridian = n.getHours() < 12 ? p[0] : p[1] } function m(a) { var b = new Date(n.getTime() + 6e4 * a); n.setHours(b.getHours(), b.getMinutes()), j() } var n = new Date, o = { $setViewValue: angular.noop }, p = angular.isDefined(b.meridians) ? a.$parent.$eval(b.meridians) : f.meridians || e.DATETIME_FORMATS.AMPMS; this.init = function (c, d) { o = c, o.$render = this.render; var e = d.eq(0), g = d.eq(1), h = angular.isDefined(b.mousewheel) ? a.$parent.$eval(b.mousewheel) : f.mousewheel; h && this.setupMousewheelEvents(e, g), a.readonlyInput = angular.isDefined(b.readonlyInput) ? a.$parent.$eval(b.readonlyInput) : f.readonlyInput, this.setupInputEvents(e, g) }; var q = f.hourStep; b.hourStep && a.$parent.$watch(c(b.hourStep), function (a) { q = parseInt(a, 10) }); var r = f.minuteStep; b.minuteStep && a.$parent.$watch(c(b.minuteStep), function (a) { r = parseInt(a, 10) }), a.showMeridian = f.showMeridian, b.showMeridian && a.$parent.$watch(c(b.showMeridian), function (b) { if (a.showMeridian = !!b, o.$error.time) { var c = g(), d = h(); angular.isDefined(c) && angular.isDefined(d) && (n.setHours(c), j()) } else l() }), this.setupMousewheelEvents = function (b, c) { var d = function (a) { a.originalEvent && (a = a.originalEvent); var b = a.wheelDelta ? a.wheelDelta : -a.deltaY; return a.detail || b > 0 }; b.bind("mousewheel wheel", function (b) { a.$apply(d(b) ? a.incrementHours() : a.decrementHours()), b.preventDefault() }), c.bind("mousewheel wheel", function (b) { a.$apply(d(b) ? a.incrementMinutes() : a.decrementMinutes()), b.preventDefault() }) }, this.setupInputEvents = function (b, c) { if (a.readonlyInput) return a.updateHours = angular.noop, void (a.updateMinutes = angular.noop); var d = function (b, c) { o.$setViewValue(null), o.$setValidity("time", !1), angular.isDefined(b) && (a.invalidHours = b), angular.isDefined(c) && (a.invalidMinutes = c) }; a.updateHours = function () { var a = g(); angular.isDefined(a) ? (n.setHours(a), j("h")) : d(!0) }, b.bind("blur", function () { !a.invalidHours && a.hours < 10 && a.$apply(function () { a.hours = i(a.hours) }) }), a.updateMinutes = function () { var a = h(); angular.isDefined(a) ? (n.setMinutes(a), j("m")) : d(void 0, !0) }, c.bind("blur", function () { !a.invalidMinutes && a.minutes < 10 && a.$apply(function () { a.minutes = i(a.minutes) }) }) }, this.render = function () { var a = o.$modelValue ? new Date(o.$modelValue) : null; isNaN(a) ? (o.$setValidity("time", !1), d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (a && (n = a), k(), l()) }, a.incrementHours = function () { m(60 * q) }, a.decrementHours = function () { m(60 * -q) }, a.incrementMinutes = function () { m(r) }, a.decrementMinutes = function () { m(-r) }, a.toggleMeridian = function () { m(720 * (n.getHours() < 12 ? 1 : -1)) } }]).directive("timepicker", function () { return { restrict: "EA", require: ["timepicker", "?^ngModel"], controller: "TimepickerController", replace: !0, scope: {}, templateUrl: "template/timepicker/timepicker.html", link: function (a, b, c, d) { var e = d[0], f = d[1]; f && e.init(f, b.find("input")) } } }), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).factory("typeaheadParser", ["$parse", function (a) { var b = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/; return { parse: function (c) { var d = c.match(b); if (!d) throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + c + '".'); return { itemName: d[3], source: a(d[4]), viewMapper: a(d[2] || d[1]), modelMapper: a(d[1]) } } } }]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", function (a, b, c, d, e, f, g) { var h = [9, 13, 27, 38, 40]; return { require: "ngModel", link: function (i, j, k, l) { var m, n = i.$eval(k.typeaheadMinLength) || 1, o = i.$eval(k.typeaheadWaitMs) || 0, p = i.$eval(k.typeaheadEditable) !== !1, q = b(k.typeaheadLoading).assign || angular.noop, r = b(k.typeaheadOnSelect), s = k.typeaheadInputFormatter ? b(k.typeaheadInputFormatter) : void 0, t = k.typeaheadAppendToBody ? i.$eval(k.typeaheadAppendToBody) : !1, u = b(k.ngModel).assign, v = g.parse(k.typeahead), w = i.$new(); i.$on("$destroy", function () { w.$destroy() }); var x = "typeahead-" + w.$id + "-" + Math.floor(1e4 * Math.random()); j.attr({ "aria-autocomplete": "list", "aria-expanded": !1, "aria-owns": x }); var y = angular.element("<div typeahead-popup></div>"); y.attr({ id: x, matches: "matches", active: "activeIdx", select: "select(activeIdx)", query: "query", position: "position" }), angular.isDefined(k.typeaheadTemplateUrl) && y.attr("template-url", k.typeaheadTemplateUrl); var z = function () { w.matches = [], w.activeIdx = -1, j.attr("aria-expanded", !1) }, A = function (a) { return x + "-option-" + a }; w.$watch("activeIdx", function (a) { 0 > a ? j.removeAttr("aria-activedescendant") : j.attr("aria-activedescendant", A(a)) }); var B = function (a) { var b = { $viewValue: a }; q(i, !0), c.when(v.source(i, b)).then(function (c) { var d = a === l.$viewValue; if (d && m) if (c.length > 0) { w.activeIdx = 0, w.matches.length = 0; for (var e = 0; e < c.length; e++) b[v.itemName] = c[e], w.matches.push({ id: A(e), label: v.viewMapper(w, b), model: c[e] }); w.query = a, w.position = t ? f.offset(j) : f.position(j), w.position.top = w.position.top + j.prop("offsetHeight"), j.attr("aria-expanded", !0) } else z(); d && q(i, !1) }, function () { z(), q(i, !1) }) }; z(), w.query = void 0; var C, D = function (a) { C = d(function () { B(a) }, o) }, E = function () { C && d.cancel(C) }; l.$parsers.unshift(function (a) { return m = !0, a && a.length >= n ? o > 0 ? (E(), D(a)) : B(a) : (q(i, !1), E(), z()), p ? a : a ? void l.$setValidity("editable", !1) : (l.$setValidity("editable", !0), a) }), l.$formatters.push(function (a) { var b, c, d = {}; return s ? (d.$model = a, s(i, d)) : (d[v.itemName] = a, b = v.viewMapper(i, d), d[v.itemName] = void 0, c = v.viewMapper(i, d), b !== c ? b : a) }), w.select = function (a) { var b, c, e = {}; e[v.itemName] = c = w.matches[a].model, b = v.modelMapper(i, e), u(i, b), l.$setValidity("editable", !0), r(i, { $item: c, $model: b, $label: v.viewMapper(i, e) }), z(), d(function () { j[0].focus() }, 0, !1) }, j.bind("keydown", function (a) { 0 !== w.matches.length && -1 !== h.indexOf(a.which) && (a.preventDefault(), 40 === a.which ? (w.activeIdx = (w.activeIdx + 1) % w.matches.length, w.$digest()) : 38 === a.which ? (w.activeIdx = (w.activeIdx ? w.activeIdx : w.matches.length) - 1, w.$digest()) : 13 === a.which || 9 === a.which ? w.$apply(function () { w.select(w.activeIdx) }) : 27 === a.which && (a.stopPropagation(), z(), w.$digest())) }), j.bind("blur", function () { m = !1 }); var F = function (a) { j[0] !== a.target && (z(), w.$digest()) }; e.bind("click", F), i.$on("$destroy", function () { e.unbind("click", F) }); var G = a(y)(w); t ? e.find("body").append(G) : j.after(G) } } }]).directive("typeaheadPopup", function () { return { restrict: "EA", scope: { matches: "=", query: "=", active: "=", position: "=", select: "&" }, replace: !0, templateUrl: "template/typeahead/typeahead-popup.html", link: function (a, b, c) { a.templateUrl = c.templateUrl, a.isOpen = function () { return a.matches.length > 0 }, a.isActive = function (b) { return a.active == b }, a.selectActive = function (b) { a.active = b }, a.selectMatch = function (b) { a.select({ activeIdx: b }) } } } }).directive("typeaheadMatch", ["$http", "$templateCache", "$compile", "$parse", function (a, b, c, d) { return { restrict: "EA", scope: { index: "=", match: "=", query: "=" }, link: function (e, f, g) { var h = d(g.templateUrl)(e.$parent) || "template/typeahead/typeahead-match.html"; a.get(h, { cache: b }).success(function (a) { f.replaceWith(c(a.trim())(e)) }) } } }]).filter("typeaheadHighlight", function () { function a(a) { return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1") } return function (b, c) { return c ? ("" + b).replace(new RegExp(a(c), "gi"), "<strong>$&</strong>") : b } }), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function (a) { a.put("template/accordion/accordion-group.html", '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n    <div class="panel-body" ng-transclude></div>\n  </div>\n</div>') }]), angular.module("template/accordion/accordion.html", []).run(["$templateCache", function (a) { a.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>') }]), angular.module("template/alert/alert.html", []).run(["$templateCache", function (a) { a.put("template/alert/alert.html", '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n') }]), angular.module("template/carousel/carousel.html", []).run(["$templateCache", function (a) { a.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n') }]), angular.module("template/carousel/slide.html", []).run(["$templateCache", function (a) { a.put("template/carousel/slide.html", "<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n") }]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function (a) { a.put("template/datepicker/datepicker.html", '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>') }]), angular.module("template/datepicker/day.html", []).run(["$templateCache", function (a) { a.put("template/datepicker/day.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n') }]), angular.module("template/datepicker/month.html", []).run(["$templateCache", function (a) { a.put("template/datepicker/month.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n') }]), angular.module("template/datepicker/popup.html", []).run(["$templateCache", function (a) { a.put("template/datepicker/popup.html", '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n  <li ng-transclude></li>\n <li ng-if="showButtonBar" style="padding:10px 9px 2px">\n   <span class="btn-group">\n      <button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n      <button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n   </span>\n   <button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n  </li>\n</ul>\n') }]), angular.module("template/datepicker/year.html", []).run(["$templateCache", function (a) { a.put("template/datepicker/year.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n') }]), angular.module("template/modal/backdrop.html", []).run(["$templateCache", function (a) { a.put("template/modal/backdrop.html", '<div class="modal-backdrop {{ backdropClass }}"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n') }]), angular.module("template/modal/window.html", []).run(["$templateCache", function (a) { a.put("template/modal/window.html", '<div tabindex="-1" role="dialog" class="modal" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\', opacity: 0}" ng-click="close($event)">\n  <span class="loader loader-white-50px" style="display:none"></span>    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" modal-transclude></div></div>\n</div>') }]), angular.module("template/pagination/pager.html", []).run(["$templateCache", function (a) { a.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>') }]), angular.module("template/pagination/pagination.html", []).run(["$templateCache", function (a) { a.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>') }]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function (a) { a.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n') }]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function (a) { a.put("template/tooltip/tooltip-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n') }]), angular.module("template/popover/popover.html", []).run(["$templateCache", function (a) { a.put("template/popover/popover.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n') }]), angular.module("template/progressbar/bar.html", []).run(["$templateCache", function (a) { a.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>') }]), angular.module("template/progressbar/progress.html", []).run(["$templateCache", function (a) { a.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>') }]), angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function (a) { a.put("template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>') }]), angular.module("template/rating/rating.html", []).run(["$templateCache", function (a) { a.put("template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>') }]), angular.module("template/tabs/tab.html", []).run(["$templateCache", function (a) { a.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n') }]), angular.module("template/tabs/tabset.html", []).run(["$templateCache", function (a) { a.put("template/tabs/tabset.html", '<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n') }]), angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function (a) { a.put("template/timepicker/timepicker.html", '<table>\n  <tbody>\n   <tr class="text-center">\n      <td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n     <td>&nbsp;</td>\n     <td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n     <td ng-show="showMeridian"></td>\n    </tr>\n   <tr>\n      <td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n        <input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n      </td>\n     <td>:</td>\n      <td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n        <input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n     </td>\n     <td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n   </tr>\n   <tr class="text-center">\n      <td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n     <td>&nbsp;</td>\n     <td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n     <td ng-show="showMeridian"></td>\n    </tr>\n </tbody>\n</table>\n') }]), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function (a) {
    a.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]);
/*
Customized version of angular scroll https://github.com/oblador/angular-scroll
Do not update automatically
*/

/**
 * x is a value between 0 and 1, indicating where in the animation you are.
 */
var duScrollDefaultEasing = function (x) {
    'use strict';

    if (x < 0.5) {
        return Math.pow(x * 2, 2) / 2;
    }
    return 1 - Math.pow((1 - x) * 2, 2) / 2;
};
EasingFunctions = {
    // no easing, no acceleration
    linear: function (t) { return t },
    // accelerating from zero velocity
    easeInQuad: function (t) { return t * t },
    // decelerating to zero velocity
    easeOutQuad: function (t) { return t * (2 - t) },
    // acceleration until halfway, then deceleration
    easeInOutQuad: function (t) { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t },
    // accelerating from zero velocity 
    easeInCubic: function (t) { return t * t * t },
    // decelerating to zero velocity 
    easeOutCubic: function (t) { return (--t) * t * t + 1 },
    // acceleration until halfway, then deceleration 
    easeInOutCubic: function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 },
    // accelerating from zero velocity 
    easeInQuart: function (t) { return t * t * t * t },
    // decelerating to zero velocity 
    easeOutQuart: function (t) { return 1 - (--t) * t * t * t },
    // acceleration until halfway, then deceleration
    easeInOutQuart: function (t) { return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t },
    // accelerating from zero velocity
    easeInQuint: function (t) { return t * t * t * t * t },
    // decelerating to zero velocity
    easeOutQuint: function (t) { return 1 + (--t) * t * t * t * t },
    // acceleration until halfway, then deceleration 
    easeInOutQuint: function (t) { return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t }
}
angular.module('duScroll', [
        'duScroll.scrollspy',
        'duScroll.smoothScroll',
        'duScroll.scrollContainer',
        'duScroll.spyContext',
        'duScroll.scrollHelpers'
])
    //Default animation duration for smoothScroll directive
    .value('duScrollDuration', 1000)
    //Scrollspy debounce interval, set to 0 to disable
    .value('duScrollSpyWait', 0)
    //Wether or not multiple scrollspies can be active at once
    .value('duScrollGreedy', false)
    //Default offset for smoothScroll directive
    .value('duScrollOffset', 0)
    //Default easing function for scroll animation
    .value('duScrollEasing', EasingFunctions.easeOutQuint);


angular.module('duScroll.scrollHelpers', ['duScroll.requestAnimation'])
    .run(["$window", "$q", "cancelAnimation", "requestAnimation", "duScrollEasing", "duScrollDuration", "duScrollOffset", function ($window, $q, cancelAnimation, requestAnimation, duScrollEasing, duScrollDuration, duScrollOffset) {
        'use strict';

        var proto = {};

        var isDocument = function (el) {
            return (typeof HTMLDocument !== 'undefined' && el instanceof HTMLDocument) || (el.nodeType && el.nodeType === el.DOCUMENT_NODE);
        };

        var isElement = function (el) {
            return (typeof HTMLElement !== 'undefined' && el instanceof HTMLElement) || (el.nodeType && el.nodeType === el.ELEMENT_NODE);
        };

        var unwrap = function (el) {
            return isElement(el) || isDocument(el) ? el : el[0];
        };

        // proto.duScrollTo = function (left, top, duration, easing) {
        //     var aliasFn;
        //     if (angular.isElement(left)) {
        //         aliasFn = this.duScrollToElement;
        //     } else if (angular.isDefined(duration)) {
        //         aliasFn = this.duScrollToAnimated;
        //     }
        //     if (aliasFn) {
        //         return aliasFn.apply(this, arguments);
        //     }
        //     var el = unwrap(this);
        //     if (isDocument(el)) {
        //         return $window.scrollTo(left, top);
        //     }
        //     el.scrollLeft = left;
        //     el.scrollTop = top;
        // };

        var scrollAnimation, deferred;
        proto.duScrollToAnimated = function (left, top, duration, easing) {
            if (duration && !easing) {
                easing = duScrollEasing;
            }
            var startLeft = this.duScrollLeft(),
                startTop = this.duScrollTop(),
                deltaLeft = Math.round(left - startLeft),
                deltaTop = Math.round(top - startTop);

            var startTime = null;
            var el = this;

            var cancelOnEvents = 'scroll mousedown mousewheel touchmove keydown';
            var cancelScrollAnimation = function ($event) {
                if (!$event || $event.which > 0) {
                    el.unbind(cancelOnEvents, cancelScrollAnimation);
                    cancelAnimation(scrollAnimation);
                    deferred.reject();
                    scrollAnimation = null;
                }
            };

            if (scrollAnimation) {
                cancelScrollAnimation();
            }
            deferred = $q.defer();

            if (duration === 0 || (!deltaLeft && !deltaTop)) {
                if (duration === 0) {
                    el.duScrollTo(left, top);
                }
                deferred.resolve();
                return deferred.promise;
            }

            var animationStep = function (timestamp) {
                if (startTime === null) {
                    startTime = timestamp;
                }

                var progress = timestamp - startTime;
                var percent = (progress >= duration ? 1 : easing(progress / duration));

                el.scrollTo(
                    startLeft + Math.ceil(deltaLeft * percent),
                    startTop + Math.ceil(deltaTop * percent)
                );
                if (percent < 1) {
                    scrollAnimation = requestAnimation(animationStep);
                } else {
                    el.unbind(cancelOnEvents, cancelScrollAnimation);
                    scrollAnimation = null;
                    deferred.resolve();
                }
            };

            //Fix random mobile safari bug when scrolling to top by hitting status bar
            el.duScrollTo(startLeft, startTop);

            el.bind(cancelOnEvents, cancelScrollAnimation);

            scrollAnimation = requestAnimation(animationStep);
            return deferred.promise;
        };

        // proto.duScrollToElement = function (target, offset, duration, easing) {
        //     var el = unwrap(this);
        //     if (!angular.isNumber(offset) || isNaN(offset)) {
        //         offset = duScrollOffset;
        //     }
        //     var top = this.duScrollTop() + unwrap(target).getBoundingClientRect().top - offset;
        //     if (isElement(el)) {
        //         top -= el.getBoundingClientRect().top;
        //     }
        //     return this.duScrollTo(0, top, duration, easing);
        // };

        proto.duScrollLeft = function (value, duration, easing) {
            if (angular.isNumber(value)) {
                return this.duScrollTo(value, this.duScrollTop(), duration, easing);
            }
            var el = unwrap(this);
            if (isDocument(el)) {
                return $window.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft;
            }
            return el.scrollLeft;
        };
        proto.duScrollTop = function (value, duration, easing) {
            if (angular.isNumber(value)) {
                return this.duScrollTo(this.duScrollLeft(), value, duration, easing);
            }
            var el = unwrap(this);
            if (isDocument(el)) {
                return $window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
            }
            return el.scrollTop;
        };

        proto.duScrollToElementAnimated = function (target, offset, duration, easing) {
            return this.duScrollToElement(target, offset, duration || duScrollDuration, easing);
        };

        proto.duScrollTopAnimated = function (top, duration, easing) {
            return this.duScrollTop(top, duration || duScrollDuration, easing);
        };

        proto.duScrollLeftAnimated = function (left, duration, easing) {
            return this.duScrollLeft(left, duration || duScrollDuration, easing);
        };

        angular.forEach(proto, function (fn, key) {
            angular.element.prototype[key] = fn;

            //Remove prefix if not already claimed by jQuery / ui.utils
            var unprefixed = key.replace(/^duScroll/, 'scroll');
            if (angular.isUndefined(angular.element.prototype[unprefixed])) {
                angular.element.prototype[unprefixed] = fn;
            }
        });

    }]);


//Adapted from https://gist.github.com/paulirish/1579671
angular.module('duScroll.polyfill', [])
    .factory('polyfill', ["$window", function ($window) {
        'use strict';

        var vendors = ['webkit', 'moz', 'o', 'ms'];

        return function (fnName, fallback) {
            if ($window[fnName]) {
                return $window[fnName];
            }
            var suffix = fnName.substr(0, 1).toUpperCase() + fnName.substr(1);
            for (var key, i = 0; i < vendors.length; i++) {
                key = vendors[i] + suffix;
                if ($window[key]) {
                    return $window[key];
                }
            }
            return fallback;
        };
    }]);

angular.module('duScroll.requestAnimation', ['duScroll.polyfill'])
    .factory('requestAnimation', ["polyfill", "$timeout", function (polyfill, $timeout) {
        'use strict';

        var lastTime = 0;
        var fallback = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = $timeout(function () {
                callback(currTime + timeToCall);
            },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

        return polyfill('requestAnimationFrame', fallback);
    }])
    .factory('cancelAnimation', ["polyfill", "$timeout", function (polyfill, $timeout) {
        'use strict';

        var fallback = function (promise) {
            $timeout.cancel(promise);
        };

        return polyfill('cancelAnimationFrame', fallback);
    }]);


angular.module('duScroll.spyAPI', ['duScroll.scrollContainerAPI'])
    .factory('spyAPI', ["$rootScope", "$timeout", "$window", "$document", "scrollContainerAPI", "duScrollGreedy", "duScrollSpyWait", function ($rootScope, $timeout, $window, $document, scrollContainerAPI, duScrollGreedy, duScrollSpyWait) {
        'use strict';
        var stickyHeight = 0;
        var activeId = null;
        var setStickyHeight = function (val) {
            stickyHeight = val;
        }

        var getActiveId = function() {
            return activeId;
        }

        var createScrollHandler = function (context) {
            var timer = false,
                queued = false;
            var handler = function () {
                queued = false;
                var container = context.container,
                    containerEl = container[0],
                    containerOffset = 0,
                    bottomReached;

                if (typeof HTMLElement !== 'undefined' && containerEl instanceof HTMLElement || containerEl.nodeType && containerEl.nodeType === containerEl.ELEMENT_NODE) {
                    containerOffset = containerEl.getBoundingClientRect().top;
                    bottomReached = Math.round(containerEl.scrollTop + containerEl.clientHeight) >= containerEl.scrollHeight;
                } else {
                    bottomReached = Math.round($window.pageYOffset + $window.innerHeight) >= $document[0].body.scrollHeight;
                }
                var compareProperty = (bottomReached ? 'bottom' : 'top');

                var i, currentlyActive, toBeActive, spies, spy, pos;
                spies = context.spies;
                currentlyActive = context.currentlyActive;
                toBeActive = undefined;

                for (i = 0; i < spies.length; i++) {
                    spy = spies[i];

                    pos = spy.getTargetPosition();
                    if (!pos) continue;
                    if (pos.top  - stickyHeight - containerOffset < 10 && (duScrollGreedy || pos.top * -1 + containerOffset) < pos.height) {
                        //Find the one closest the viewport top or the page bottom if it's reached
                        if (!toBeActive || toBeActive[compareProperty] < pos[compareProperty]) {
                            toBeActive = {
                                spy: spy
                            };
                            toBeActive[compareProperty] = pos[compareProperty];
                        }
                    }
                }

                if (toBeActive) {
                    toBeActive = toBeActive.spy;
                }
                if (currentlyActive === toBeActive || (duScrollGreedy && !toBeActive)) return;
                if (currentlyActive) {
                    $rootScope.$broadcast('duScrollspy:becameInactive', currentlyActive.$element);
                    activeId = null;
                }
                if (toBeActive) {
                    activeId = toBeActive.targetId;
                    $rootScope.$broadcast('duScrollspy:becameActive', toBeActive.$element);
                }
                context.currentlyActive = toBeActive;
            };

            if (!duScrollSpyWait) {
                return handler;
            }

            //Debounce for potential performance savings
            return function () {
                if (!timer) {
                    handler();
                    timer = $timeout(function () {
                        timer = false;
                        if (queued) {
                            handler();
                        }
                    }, duScrollSpyWait, false);
                } else {
                    queued = true;
                }
            };
        };

        var contexts = {};

        var createContext = function ($scope) {
            var id = $scope.$id;
            var context = {
                spies: []
            };

            context.handler = createScrollHandler(context);
            contexts[id] = context;

            $scope.$on('$destroy', function () {
                destroyContext($scope);
            });

            return id;
        };

        var destroyContext = function ($scope) {
            var id = $scope.$id;
            var context = contexts[id],
                container = context.container;
            if (container) {
                container.off('scroll', context.handler);
            }
            delete contexts[id];
        };

        var defaultContextId = createContext($rootScope);

        var getContextForScope = function (scope) {
            if (contexts[scope.$id]) {
                return contexts[scope.$id];
            }
            if (scope.$parent) {
                return getContextForScope(scope.$parent);
            }
            return contexts[defaultContextId];
        };

        var getContextForSpy = function (spy) {
            var context, contextId, scope = spy.$scope;
            if (scope) {
                return getContextForScope(scope);
            }
            //No scope, most likely destroyed
            for (contextId in contexts) {
                context = contexts[contextId];
                if (context.spies.indexOf(spy) !== -1) {
                    return context;
                }
            }
        };

        var isElementInDocument = function (element) {
            while (element.parentNode) {
                element = element.parentNode;
                if (element === document) {
                    return true;
                }
            }
            return false;
        };

        var addSpy = function (spy) {
            var context = getContextForSpy(spy);
            if (!context) return;
            context.spies.push(spy);
            if (!context.container || !isElementInDocument(context.container)) {
                if (context.container) {
                    context.container.off('scroll', context.handler);
                }
                context.container = scrollContainerAPI.getContainer(spy.$scope);
                context.container.on('scroll', context.handler).triggerHandler('scroll');
            }
        };

        var removeSpy = function (spy) {
            var context = getContextForSpy(spy);
            if (spy === context.currentlyActive) {
                context.currentlyActive = null;
            }
            var i = context.spies.indexOf(spy);
            if (i !== -1) {
                context.spies.splice(i, 1);
            }
            spy.$element = null;
        };

        return {
            getActiveId: getActiveId,
            setStickyHeight: setStickyHeight,
            addSpy: addSpy,
            removeSpy: removeSpy,
            createContext: createContext,
            destroyContext: destroyContext,
            getContextForScope: getContextForScope
        };
    }]);


angular.module('duScroll.scrollContainerAPI', [])
    .factory('scrollContainerAPI', ["$document", function ($document) {
        'use strict';

        var containers = {};

        var setContainer = function (scope, element) {
            var id = scope.$id;
            containers[id] = element;
            return id;
        };

        var getContainerId = function (scope) {
            if (containers[scope.$id]) {
                return scope.$id;
            }
            if (scope.$parent) {
                return getContainerId(scope.$parent);
            }
            return;
        };

        var getContainer = function (scope) {
            var id = getContainerId(scope);
            return id ? containers[id] : $document;
        };

        var removeContainer = function (scope) {
            var id = getContainerId(scope);
            if (id) {
                delete containers[id];
            }
        };

        return {
            getContainerId: getContainerId,
            getContainer: getContainer,
            setContainer: setContainer,
            removeContainer: removeContainer
        };
    }]);


angular.module('duScroll.smoothScroll', ['duScroll.scrollHelpers', 'duScroll.scrollContainerAPI'])
    .directive('duSmoothScroll', ["duScrollDuration", "duScrollOffset", "scrollContainerAPI", "spyAPI", "$timeout", function (duScrollDuration, duScrollOffset, scrollContainerAPI, spyAPI, $timeout) {
        'use strict';

        return {
            scope: {
                stickyHeight: "@offset",
                duActiveId: "=?"
            },
            link: function ($scope, $element, $attr) {
                $element.on('click', function (e) {
                    if (!$attr.href || $attr.href.indexOf('#') === -1) return;

                    var target = document.getElementById($attr.href.replace(/.*(?=#[^\s]+$)/, '').substring(1));
                    if (!target || !target.getBoundingClientRect) return;

                    if (e.stopPropagation) e.stopPropagation();
                    if (e.preventDefault) e.preventDefault();

                    var offset = ($attr.offset ? parseInt($attr.offset, 10) : duScrollOffset);
                    var duration = $attr.duration ? parseInt($attr.duration, 10) : duScrollDuration;
                    var container = scrollContainerAPI.getContainer($scope);

                    // container.duScrollToElement(
                    //     angular.element(target),
                    //     isNaN(offset) ? 0 : offset,
                    //     isNaN(duration) ? 0 : duration
                    // );


                });

                $scope.$watch(function() { return spyAPI.getActiveId(); }, function(activeId) {
                    $scope.duActiveId = activeId;
                });

                $scope.$watch(function() {
                    return $scope.stickyHeight;
                }, function(val) {
                    spyAPI.setStickyHeight(val);
                });
            }
        };
    }]);


angular.module('duScroll.spyContext', ['duScroll.spyAPI'])
    .directive('duSpyContext', ["spyAPI", function (spyAPI) {
        'use strict';

        return {
            restrict: 'A',
            scope: true,
            compile: function compile(tElement, tAttrs, transclude) {
                return {
                    pre: function preLink($scope, iElement, iAttrs, controller) {
                        spyAPI.createContext($scope);
                    }
                };
            }
        };
    }]);


angular.module('duScroll.scrollContainer', ['duScroll.scrollContainerAPI'])
    .directive('duScrollContainer', ["scrollContainerAPI", function (scrollContainerAPI) {
        'use strict';

        return {
            restrict: 'A',
            scope: true,
            compile: function compile(tElement, tAttrs, transclude) {
                return {
                    pre: function preLink($scope, iElement, iAttrs, controller) {
                        iAttrs.$observe('duScrollContainer', function (element) {
                            if (angular.isString(element)) {
                                element = document.getElementById(element);
                            }

                            element = (angular.isElement(element) ? angular.element(element) : iElement);
                            scrollContainerAPI.setContainer($scope, element);
                            $scope.$on('$destroy', function () {
                                scrollContainerAPI.removeContainer($scope);
                            });
                        });
                    }
                };
            }
        };
    }]);


angular.module('duScroll.scrollspy', ['duScroll.spyAPI'])
    .directive('duScrollspy', ["spyAPI", "duScrollOffset", "$timeout", "$rootScope", function (spyAPI, duScrollOffset, $timeout, $rootScope) {
        'use strict';

        var Spy = function (targetElementOrId, $scope, $element, offset) {
            if (angular.isElement(targetElementOrId)) {
                this.target = targetElementOrId;
            } else if (angular.isString(targetElementOrId)) {
                this.targetId = targetElementOrId;
            }
            this.$scope = $scope;
            this.$element = $element;
            this.offset = offset;
        };

        Spy.prototype.getTargetElement = function () {
            if (!this.target && this.targetId) {
                this.target = document.getElementById(this.targetId);
            }
            return this.target;
        };

        Spy.prototype.getTargetPosition = function () {
            var target = this.getTargetElement();
            if (target) {
                return target.getBoundingClientRect();
            }
        };

        Spy.prototype.flushTargetCache = function () {
            if (this.targetId) {
                this.target = undefined;
            }
        };

        return {
            link: function ($scope, $element, $attr) {
                var href = $attr.ngHref || $attr.href;
                var targetId;

                if (href && href.indexOf('#') !== -1) {
                    targetId = href.replace(/.*(?=#[^\s]+$)/, '').substring(1);
                } else if ($attr.duScrollspy) {
                    targetId = $attr.duScrollspy;
                }
                if (!targetId) return;

                // Run this in the next execution loop so that the scroll context has a chance
                // to initialize
                $timeout(function () {
                    var spy = new Spy(targetId, $scope, $element, -($attr.offset ? parseInt($attr.offset, 10) : duScrollOffset));
                    spyAPI.addSpy(spy);

                    $scope.$on('$destroy', function () {
                        spyAPI.removeSpy(spy);
                    });
                    $scope.$on('$locationChangeSuccess', spy.flushTargetCache.bind(spy));
                    $rootScope.$on('$stateChangeSuccess', spy.flushTargetCache.bind(spy));
                }, 0, false);
            }
        };
    }]);
