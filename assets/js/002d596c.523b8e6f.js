"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4371],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=c(n),d=a,k=s["".concat(p,".").concat(d)]||s[d]||u[d]||l;return n?r.createElement(k,i(i({ref:e},m),{},{components:n})):r.createElement(k,i({ref:e},m))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7538:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={layout:"post",title:"\u6b63\u786e\u4f7f\u7528shell\u8fd4\u56de\u503c",description:"about shell exit code",categories:["shell"],tags:["bash","exitcode"]},i=void 0,o={permalink:"/notes/blog/2013/05/17/bash-shell-exit-code",editUrl:"https://github.com/itxx00/notes/tree/main/blog/2013-05-17-bash-shell-exit-code.md",source:"@site/blog/2013-05-17-bash-shell-exit-code.md",title:"\u6b63\u786e\u4f7f\u7528shell\u8fd4\u56de\u503c",description:"about shell exit code",date:"2013-05-17T00:00:00.000Z",formattedDate:"2013\u5e745\u670817\u65e5",tags:[{label:"bash",permalink:"/notes/blog/tags/bash"},{label:"exitcode",permalink:"/notes/blog/tags/exitcode"}],readingTime:2.595,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"\u6b63\u786e\u4f7f\u7528shell\u8fd4\u56de\u503c",description:"about shell exit code",categories:["shell"],tags:["bash","exitcode"]},prevItem:{title:"libvirt\u4e2d\u7684\u7f51\u7edc\u7ba1\u7406\u5b9e\u8df5",permalink:"/notes/blog/2013/10/01/libvirt-basic-usage"},nextItem:{title:"Ovirt\u4e2d\u7684stateless\u5b9e\u73b0\u673a\u5236\u5206\u6790",permalink:"/notes/blog/2013/03/14/ovirt-stateless"}},p={authorsImageUrls:[]},c=[{value:"1.\u5e38\u89c1\u8fd4\u56de\u503c",id:"1\u5e38\u89c1\u8fd4\u56de\u503c",level:2},{value:"2. init\u6807\u51c6\u8fd4\u56de\u503c",id:"2-init\u6807\u51c6\u8fd4\u56de\u503c",level:2},{value:"3. \u5efa\u8bae\u8fd4\u56de\u503c",id:"3-\u5efa\u8bae\u8fd4\u56de\u503c",level:2}],m={toc:c};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7f16\u5199shell\u811a\u672c\u7684\u65f6\u5019\uff0c\u6b63\u786e\u4f7f\u7528\u8fd4\u56de\u503c\u662f\u8fd0\u7ef4\u4eba\u5458\u7684\u57fa\u672c\u64cd\u5b88")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,a.kt)("h2",{id:"1\u5e38\u89c1\u8fd4\u56de\u503c"},"1.\u5e38\u89c1\u8fd4\u56de\u503c"),(0,a.kt)("p",null,"\u4e0b\u8868\u5217\u51fa\u4e86\u5e38\u89c1shell\u547d\u4ee4\u7684\u9000\u51fa\u8fd4\u56de\u503c\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u542b\u4e49"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u793a\u4f8b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5404\u79cd\u5e38\u89c1\u9519\u8bef"),(0,a.kt)("td",{parentName:"tr",align:"center"},'let "var1 = 1/0"'),(0,a.kt)("td",{parentName:"tr",align:null},"shell\u91cc\u9762\u6700\u5e38\u89c1\u7684\u9519\u8bef\u8fd4\u56de\u503c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:"left"},"shell\u5185\u5efa\u529f\u80fd\u4f7f\u7528\u9519\u8bef"),(0,a.kt)("td",{parentName:"tr",align:"center"},"empty_function() {}"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e38\u89c1\u4e8e\u5173\u952e\u5b57\u6216\u8005\u547d\u4ee4\u51fa\u9519")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"126"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u547d\u4ee4\u65e0\u6cd5\u6267\u884c"),(0,a.kt)("td",{parentName:"tr",align:"center"},"/dev/null"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7531\u4e8e\u6743\u9650\u7b49\u5bfc\u81f4\u7684\u547d\u4ee4\u65e0\u6cd5\u6267\u884c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"127"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u547d\u4ee4\u65e0\u6cd5\u627e\u5230"),(0,a.kt)("td",{parentName:"tr",align:"center"},"illegal_command"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e00\u822c\u662fPATH\u73af\u5883\u53d8\u91cf\u4e0d\u5bf9\u7b49")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"128"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9000\u51fa\u8fd4\u56de\u503c\u9519\u8bef"),(0,a.kt)("td",{parentName:"tr",align:"center"},"exit 3.14159"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u503c\u53ea\u80fd\u662f\u6574\u6570\uff0c\u5c0f\u6570\u5c31\u4e0d\u5bf9\u4e86")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"128+n"),(0,a.kt)("td",{parentName:"tr",align:"left"},'\u4fe1\u53f7 "n"+128'),(0,a.kt)("td",{parentName:"tr",align:"center"},"kill -9 $PPID of script"),(0,a.kt)("td",{parentName:"tr",align:null},"$? \u5373\u8fd4\u56de 137 (128 + 9)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"130"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ctrl+c \u9000\u51fa"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Ctl-C"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5176\u5b9ectrl+c\u8fd4\u56de\u7684\u662f2 (130 = 128 + 2)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"255*"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u8d85\u51fa\u53ef\u63a5\u53d7\u7684\u8303\u56f4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"exit  -1"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ea\u80fd\u662f 0 - 255")))),(0,a.kt)("h2",{id:"2-init\u6807\u51c6\u8fd4\u56de\u503c"},"2. init\u6807\u51c6\u8fd4\u56de\u503c"),(0,a.kt)("p",null,"\u4e0b\u8868\u5217\u51fa\u4e86\u5173\u4e8e/etc/init.d/\u76ee\u5f55\u4e0b\u542f\u52a8\u63a7\u5236\u811a\u672c\u7684\u6807\u51c6\u8fd4\u56de\u503c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0    \u7a0b\u5e8f\u5728\u8fd0\u884c\u6216\u8005\u670d\u52a1\u72b6\u6001OK"),(0,a.kt)("li",{parentName:"ul"},"1    \u7a0b\u5e8f\u5df2\u7ecf\u6b7b\u6389\uff0c\u4f46\u662f pid\u6587\u4ef6\u4ecd\u5728 /var/run\u76ee\u5f55\u4e0b\u5b58\u5728"),(0,a.kt)("li",{parentName:"ul"},"2    \u7a0b\u5e8f\u5df2\u7ecf\u6b7b\u6389\uff0c\u4f46\u662flock\u6587\u4ef6\u4ecd\u5728 /var/lock \u76ee\u5f55\u4e0b\u5b58\u5728"),(0,a.kt)("li",{parentName:"ul"},"3    \u7a0b\u5e8f\u6ca1\u6709\u8fd0\u884c"),(0,a.kt)("li",{parentName:"ul"},"4    \u7a0b\u5e8f\u8fd0\u884c\u72b6\u6001\u672a\u77e5"),(0,a.kt)("li",{parentName:"ul"},"5-99    \u4f9bLSB\u6269\u5c55\u7684\u4fdd\u7559\u6bb5"),(0,a.kt)("li",{parentName:"ul"},"100-149    \u4f9b\u7279\u5b9a\u7cfb\u7edf\u53d1\u884c\u7248\u4f7f\u7528\u7684\u4fdd\u7559\u6bb5"),(0,a.kt)("li",{parentName:"ul"},"150-199    \u4f9b\u7279\u5b9a\u7a0b\u5e8f\u4f7f\u7528\u7684\u4fdd\u7559\u6bb5"),(0,a.kt)("li",{parentName:"ul"},"200-254    \u4fdd\u7559\u6bb5")),(0,a.kt)("h2",{id:"3-\u5efa\u8bae\u8fd4\u56de\u503c"},"3. \u5efa\u8bae\u8fd4\u56de\u503c"),(0,a.kt)("p",null,"\u5728\u5199shell\u811a\u672c\u7684\u65f6\u5019\u9700\u8981\u6ce8\u610f\u81ea\u5b9a\u4e49\u7684\u9000\u51fa\u8fd4\u56de\u503c\u6700\u597d\u4e0d\u8981\u4e0e\u4e0a\u9762\u8868\u683c\u4e2d\u6240\u5b9a\u4e49\u7684\u91cd\u590d\uff0c\u5bf9\u4e8e\u7ba1\u7406\u4eba\u5458\u6765\u8bf4\u517b\u6210\u826f\u597d\u7684\u4e60\u60ef\u6709\u52a9\u4e8e\u9047\u5230\u9519\u8bef\u65f6\u4f5c\u51fa\u6b63\u786e\u7684\u5224\u65ad\u3002\n\u6839\u636e\u4e0a\u8868\u81f3\u5c11\u53ef\u4ee5\u5f97\u51fa\uff0c\u5728\u81ea\u5b9a\u4e49\u8fd4\u56de\u503c\u7684\u65f6\u5019\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6700\u597d\u4e0d\u8981\u7528\u7684\uff1a0-4 126-130 255"),(0,a.kt)("li",{parentName:"ul"},"\u5e94\u907f\u514d\u4f7f\u7528\u7684\uff1a5-99"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u968f\u610f\u4f7f\u7528\u7684\uff1a100-125 131-254")),(0,a.kt)("p",null,"\u53c2\u8003\u6587\u6863:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"[1]"," ",(0,a.kt)("a",{parentName:"p",href:"http://tldp.org/LDP/abs/html/exitcodes.html"},"http://tldp.org/LDP/abs/html/exitcodes.html"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"[2]"," ",(0,a.kt)("a",{parentName:"p",href:"http://refspecs.linux-foundation.org/LSB_4.1.0/LSB-Core-generic/LSB-Core-generic/iniscrptact.html"},"http://refspecs.linux-foundation.org/LSB_4.1.0/LSB-Core-generic/LSB-Core-generic/iniscrptact.html")))))}u.isMDXComponent=!0}}]);