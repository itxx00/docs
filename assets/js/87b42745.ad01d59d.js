"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8623],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={layout:"post",title:"\u7cfb\u7edf\u4e2d\u7684\u968f\u673a\u6570\u548c\u71b5\u503c",description:"\u7b80\u5355\u603b\u7ed3\u4e00\u4e0b\u7cfb\u7edf\u4e2d\u7684\u968f\u673a\u6570\u4ee5\u53ca\u76f8\u5173\u95ee\u9898",categories:["os"],tags:["centos7","random","entropy"]},l=void 0,i={permalink:"/notes/blog/2019/05/12/random-and-entropy-in-centos7",editUrl:"https://github.com/itxx00/notes/tree/main/blog/2019-05-12-random-and-entropy-in-centos7.md",source:"@site/blog/2019-05-12-random-and-entropy-in-centos7.md",title:"\u7cfb\u7edf\u4e2d\u7684\u968f\u673a\u6570\u548c\u71b5\u503c",description:"\u7b80\u5355\u603b\u7ed3\u4e00\u4e0b\u7cfb\u7edf\u4e2d\u7684\u968f\u673a\u6570\u4ee5\u53ca\u76f8\u5173\u95ee\u9898",date:"2019-05-12T00:00:00.000Z",formattedDate:"2019\u5e745\u670812\u65e5",tags:[{label:"centos7",permalink:"/notes/blog/tags/centos-7"},{label:"random",permalink:"/notes/blog/tags/random"},{label:"entropy",permalink:"/notes/blog/tags/entropy"}],readingTime:.56,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"\u7cfb\u7edf\u4e2d\u7684\u968f\u673a\u6570\u548c\u71b5\u503c",description:"\u7b80\u5355\u603b\u7ed3\u4e00\u4e0b\u7cfb\u7edf\u4e2d\u7684\u968f\u673a\u6570\u4ee5\u53ca\u76f8\u5173\u95ee\u9898",categories:["os"],tags:["centos7","random","entropy"]},prevItem:{title:"HIVE\u4e2d\u5e38\u89c1\u7684\u5c0f\u6587\u4ef6\u5408\u5e76\u65b9\u6cd5",permalink:"/notes/blog/2019/09/02/hive-small-file"},nextItem:{title:"CentOS7\u7cfb\u7edf\u5b89\u88c5ansible awx\u8bb0\u5f55",permalink:"/notes/blog/2017/12/20/centos7-install-ansible-awx"}},c={authorsImageUrls:[]},s=[{value:"1 \u4ec0\u4e48\u662f\u968f\u673a\u6570\uff1f",id:"1-\u4ec0\u4e48\u662f\u968f\u673a\u6570",level:2},{value:"2 \u968f\u673a\u6570\u6709\u4ec0\u4e48\u7528\uff1f",id:"2-\u968f\u673a\u6570\u6709\u4ec0\u4e48\u7528",level:2},{value:"3 \u5982\u4f55\u83b7\u5f97\u968f\u673a\u6570\uff1f",id:"3-\u5982\u4f55\u83b7\u5f97\u968f\u673a\u6570",level:2},{value:"4 \u4f1a\u6709\u54ea\u4e9b\u95ee\u9898\uff1f",id:"4-\u4f1a\u6709\u54ea\u4e9b\u95ee\u9898",level:2},{value:"haveged \u548c rng-tools",id:"haveged-\u548c-rng-tools",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u8bd5\u7740\u603b\u7ed3\u7cfb\u7edf\u4e2d\u7684\u968f\u673a\u6570\u524d\u524d\u540e\u540e\u4ee5\u53ca\u7ba1\u7406\u4e2d\u9700\u8981\u6ce8\u610f\u7684\u95ee\u9898 ","[\u5148\u6b20\u7740]")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,o.kt)("h2",{id:"1-\u4ec0\u4e48\u662f\u968f\u673a\u6570"},"1 \u4ec0\u4e48\u662f\u968f\u673a\u6570\uff1f"),(0,o.kt)("p",null,"\u968f\u673a\u6570\u5c31\u662f\u65e0\u6cd5\u9884\u6d4b\u7684\u6570"),(0,o.kt)("h2",{id:"2-\u968f\u673a\u6570\u6709\u4ec0\u4e48\u7528"},"2 \u968f\u673a\u6570\u6709\u4ec0\u4e48\u7528\uff1f"),(0,o.kt)("p",null,"\u968f\u673a\u662f\u4e3a\u4e86\u5b89\u5168"),(0,o.kt)("h2",{id:"3-\u5982\u4f55\u83b7\u5f97\u968f\u673a\u6570"},"3 \u5982\u4f55\u83b7\u5f97\u968f\u673a\u6570\uff1f"),(0,o.kt)("p",null,"/dev/random\n/dev/urandom\n/proc/sys/kernel/random/entropy_avail"),(0,o.kt)("h2",{id:"4-\u4f1a\u6709\u54ea\u4e9b\u95ee\u9898"},"4 \u4f1a\u6709\u54ea\u4e9b\u95ee\u9898\uff1f"),(0,o.kt)("p",null,"1 \u968f\u673a\u6570\u6570\u4ea7\u751f\u901f\u5ea6\u6162\n2 \u5f71\u54cd\u4e0a\u5c42\u5e94\u7528"),(0,o.kt)("h2",{id:"haveged-\u548c-rng-tools"},"haveged \u548c rng-tools"))}u.isMDXComponent=!0}}]);