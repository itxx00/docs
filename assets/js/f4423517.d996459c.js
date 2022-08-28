"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2036],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=o(n),k=l,m=c["".concat(d,".").concat(k)]||c[k]||u[k]||r;return n?a.createElement(m,p(p({ref:t},s),{},{components:n})):a.createElement(m,p({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var o=2;o<r;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7509:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:3},p="\u53d8\u91cf\u4e0e\u6570\u636e",i={unversionedId:"shell-basic/syntax-vars",id:"shell-basic/syntax-vars",title:"\u53d8\u91cf\u4e0e\u6570\u636e",description:"bash \u811a\u672c\u4f5c\u4e3a\u811a\u672c\u8bed\u8a00\u7684\u4e00\u79cd\u4e5f\u6709\u5176\u7279\u5b9a\u7684\u8bed\u6cd5\u7ed3\u6784\uff0c\u719f\u7ec3\u638c\u63e1\u5e38\u7528\u7684\u57fa\u672c\u8bed\u6cd5\u662f\u7f16\u5199\u811a\u672c\u7684\u57fa\u7840\u3002",source:"@site/docs/01-shell-basic/03-syntax-vars.md",sourceDirName:"01-shell-basic",slug:"/shell-basic/syntax-vars",permalink:"/notes/docs/shell-basic/syntax-vars",draft:!1,editUrl:"https://github.com/itxx00/notes/tree/main/docs/01-shell-basic/03-syntax-vars.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u811a\u672c\u57fa\u672c\u7ed3\u6784",permalink:"/notes/docs/shell-basic/structure"},next:{title:"\u8fd0\u7b97\u4e0e\u6d4b\u8bd5",permalink:"/notes/docs/shell-basic/syntax-calc"}},d={},o=[{value:"\u53d8\u91cf",id:"\u53d8\u91cf",level:2},{value:"\u53d8\u91cf\u540d",id:"\u53d8\u91cf\u540d",level:3},{value:"\u53d8\u91cf\u7c7b\u578b",id:"\u53d8\u91cf\u7c7b\u578b",level:3},{value:"\u53d8\u91cf\u8d4b\u503c",id:"\u53d8\u91cf\u8d4b\u503c",level:3},{value:"\u53d8\u91cf\u5f15\u7528",id:"\u53d8\u91cf\u5f15\u7528",level:3},{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:2},{value:"\u6570\u5b57",id:"\u6570\u5b57",level:3},{value:"\u5b57\u7b26\u4e32",id:"\u5b57\u7b26\u4e32",level:3},{value:"\u6570\u7ec4",id:"\u6570\u7ec4",level:3},{value:"\u5b57\u5178",id:"\u5b57\u5178",level:3},{value:"\u65e5\u671f\u65f6\u95f4",id:"\u65e5\u671f\u65f6\u95f4",level:2}],s={toc:o};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u53d8\u91cf\u4e0e\u6570\u636e"},"\u53d8\u91cf\u4e0e\u6570\u636e"),(0,l.kt)("p",null,"bash \u811a\u672c\u4f5c\u4e3a\u811a\u672c\u8bed\u8a00\u7684\u4e00\u79cd\u4e5f\u6709\u5176\u7279\u5b9a\u7684\u8bed\u6cd5\u7ed3\u6784\uff0c\u719f\u7ec3\u638c\u63e1\u5e38\u7528\u7684\u57fa\u672c\u8bed\u6cd5\u662f\u7f16\u5199\u811a\u672c\u7684\u57fa\u7840\u3002"),(0,l.kt)("h2",{id:"\u53d8\u91cf"},"\u53d8\u91cf"),(0,l.kt)("h3",{id:"\u53d8\u91cf\u540d"},"\u53d8\u91cf\u540d"),(0,l.kt)("p",null,"bash\u4e2d\u53d8\u91cf\u540d\u7531",(0,l.kt)("inlineCode",{parentName:"p"},"a-z")," ",(0,l.kt)("inlineCode",{parentName:"p"},"A-Z")," ",(0,l.kt)("inlineCode",{parentName:"p"},"0-9")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"_")," \u7ec4\u6210\uff0c\u81ea\u5b9a\u4e49\u53d8\u91cf\u4e0d\u80fd\u4ee5\u6570\u5b57\u5f00\u5934\uff0c\u800c\u7eaf\u6570\u5b57\u7684\u53d8\u91cf\u7528\u4e8e\u4f4d\u7f6e\u4f20\u53c2\u3002"),(0,l.kt)("h3",{id:"\u53d8\u91cf\u7c7b\u578b"},"\u53d8\u91cf\u7c7b\u578b"),(0,l.kt)("p",null,"\u53d8\u91cf\u6309\u7167\u4f5c\u7528\u57df\u53ef\u5206\u4e3a\u5168\u5c40\u53d8\u91cf\u548c\u5c40\u90e8\u53d8\u91cf\uff0c\u5c40\u90e8\u53d8\u91cf\u5b58\u5728\u4e8e\u51fd\u6570\u4e2d\uff0c\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," \u5173\u952e\u5b57\u5b9a\u4e49\uff0c\u5982\u679c\u662f\u5728\u51fd\u6570\u5916\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," \u5219\u4f1a\u5f15\u8d77\u8bed\u6cd5\u9519\u8bef\u3002\u9700\u8981\u6ce8\u610f\u5982\u679c\u4e0d\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," \uff0c \u9ed8\u8ba4\u8868\u793a\u5168\u5c40\u53d8\u91cf\uff0c\u5373\u4f7f\u662f\u5728\u51fd\u6570\u91cc\u9762\u5b9a\u4e49\u4e5f\u4e00\u6837\uff0c\u6240\u4ee5\u901a\u5e38\u6211\u5efa\u8bae\u51fd\u6570\u5185\u4e00\u5f8b\u5b9a\u4e49\u5c40\u90e8\u53d8\u91cf\uff0c\u5168\u5c40\u53d8\u91cf\u53ea\u5728\u51fd\u6570\u5916\u5b9a\u4e49\uff0c\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u53d8\u91cf\u51b2\u7a81\u5e26\u6765\u7684\u5404\u79cd\u9ebb\u70e6\uff0c\u7279\u522b\u662fshell\u8fd9\u79cd\u5373\u4f7f\u53d8\u91cf\u51b2\u7a81\u4ed6\u4e5f\u4e0d\u4f1a\u62a5\u9519\u7684\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u5168\u5c40\u53d8\u91cf\u6ee1\u5929\u98de\uff0c\u6307\u4e0d\u5b9a\u5728\u54ea\u4e2a\u5730\u65b9\u53d8\u91cf\u503c\u5c31\u88ab\u83ab\u540d\u5176\u5999\u6539\u5199\uff0c\u5982\u679c\u4e0d\u901a\u8fc7\u5916\u90e8\u5de5\u5177\u68c0\u67e5\uff0c\u9760\u4eba\u8089\u8c03\u8bd5\u53d1\u73b0\u8fd9\u79cd\u9690\u533f\u7684BUG\u5c31\u4f1a\u7279\u522bX\u75bc\u3002"),(0,l.kt)("p",null,"\u53d8\u91cf\u6309\u7167\u5176\u53ef\u8bfb\u5199\u72b6\u6001\u53c8\u53ef\u5206\u4e3a\u53ef\u8bfb\u5199\u53d8\u91cf\u548c\u53ea\u8bfb\u53d8\u91cf\uff0c\u53ea\u8bfb\u53d8\u91cf\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"readonly")," \u5173\u952e\u5b57\u5b9a\u4e49\uff0c\u5f53\u4e00\u4e2a\u53ea\u8bfb\u53d8\u91cf\u88ab\u5c1d\u8bd5\u91cd\u65b0\u8d4b\u503c\u7684\u65f6\u5019\u4f1a\u5f15\u8d77\u62a5\u9519\u3002"),(0,l.kt)("h3",{id:"\u53d8\u91cf\u8d4b\u503c"},"\u53d8\u91cf\u8d4b\u503c"),(0,l.kt)("p",null,"\u5b9a\u4e49\u4e00\u4e2a\u53d8\u91cf\u7684\u65b9\u5f0f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5168\u5c40\u53d8\u91cf\nk1=v1\nfunc_a() {\n    # \u5c40\u90e8\u53d8\u91cf\n    local k1=v1\n}\n\n# \u53ea\u8bfb\u53d8\u91cf\nreadonly k2=v2\n\n# \u4f7f\u7528declare\u663e\u793a\u58f0\u660e\u53d8\u91cf\ndeclare k3=v3\n")),(0,l.kt)("p",null,"\u6ce8\u610f\u7b49\u53f7\u4e24\u8fb9\u6ca1\u6709\u7a7a\u683c\uff0c\u5982\u679c\u4e0d\u5c0f\u5fc3\u591a\u4e86\u7a7a\u683c\u4f1a\u5bfc\u81f4\u7a7a\u683c\u524d\u540e\u5185\u5bb9\u88ab\u5f53\u4f5c\u547d\u4ee4\u76f4\u63a5\u6267\u884c\u3002"),(0,l.kt)("p",null,"\u8981\u53d6\u6d88\u4e00\u4e2a\u53d8\u91cf\u503c\uff0c\u53ef\u4ee5\u4f7f\u7528unset\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"unset k1\n")),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c\u53ea\u8bfb\u53d8\u91cf\u4e00\u7ecf\u5b9a\u4e49\uff0c\u5c31\u65e0\u6cd5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"unset")," \u53d6\u6d88\u3002"),(0,l.kt)("h3",{id:"\u53d8\u91cf\u5f15\u7528"},"\u53d8\u91cf\u5f15\u7528"),(0,l.kt)("p",null,"\u901a\u8fc7\u5728\u53d8\u91cf\u540d\u524d\u9762\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"$"),"\u7b26\u5f15\u7528\u53d8\u91cf\uff0c\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"$k1")," \uff0c\u6216\u8005",(0,l.kt)("inlineCode",{parentName:"p"},"${k1}"),"\uff0c\u901a\u5e38",(0,l.kt)("inlineCode",{parentName:"p"},"{}"),"\u53ef\u4ee5\u7701\u7565\uff0c\u4f46\u662f\u5f53\u63a5\u6536\u4f4d\u7f6e\u4f20\u53c2\u7684\u65f6\u5019\u53c2\u6570\u4e2a\u6570\u8d85\u8fc7\u4e2a\u4f4d\u6570\u53ca\u5927\u4e8e\u7b49\u4e8e10\u4e2a\u7684\u65f6\u5019\uff0c\u5c31\u4e0d\u80fd\u7701\u7565\uff0c\u5fc5\u987b\u4f7f\u7528\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"${12}")," \uff0c\u56e0\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"$12"),"\u4f1a\u88ab\u89e3\u6790\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"$1"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"2"),"\u7684\u7ec4\u5408\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"echo $k1\necho ${k2}\necho $1\necho ${12}\n")),(0,l.kt)("h2",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,l.kt)("p",null,"\u76f8\u6bd4\u5176\u4ed6\u8bed\u8a00\uff0cbash shell\u7684\u6570\u636e\u7c7b\u578b\u5e76\u4e0d\u7b97\u4e30\u5bcc\uff0c\u4f46\u4e5f\u53ef\u4ee5\u63d0\u4f9b\u6570\u5b57\u3001\u5b57\u7b26\u4e32\u3001\u6570\u7ec4\u3001\u5b57\u5178\u7b49\u7c7b\u578b\u3002\u9700\u8981\u6ce8\u610f\u7684\u662fbash\u5e76\u4e0d\u539f\u751f\u652f\u6301\u6d6e\u70b9\u6570\u8fd0\u7b97\uff0c\u53ea\u80fd\u501f\u52a9\u5916\u90e8\u547d\u4ee4\u5b8c\u6210\uff0c\u4e5f\u6ca1\u6709\u4e25\u683c\u610f\u4e49\u7684\u5e03\u5c14\u503c\u7c7b\u578b\uff0c\u5e03\u5c14\u8fd0\u7b97\u7ed3\u679c\u662f\u901a\u8fc7\u8fd4\u56de\u503c\u76840\u548c1\u6765\u8868\u793a\u6216\u8005\u81ea\u5b9a\u4e49\u4f7f\u7528\u6570\u5b57\u3001\u5b57\u7b26\u4e32\u6765\u8868\u793a\u3002"),(0,l.kt)("h3",{id:"\u6570\u5b57"},"\u6570\u5b57"),(0,l.kt)("p",null,"\u4e25\u683c\u6765\u8bb2bash\u4e2d\u7684\u6570\u5b57\u4e5f\u662f\u5b57\u7b26\u4e32\uff0c\u53ea\u662f\u5728\u4f7f\u7528\u65f6\u8fdb\u884c\u4e86\u81ea\u52a8\u8f6c\u6362\u800c\u5df2\u3002\u6570\u5b57\u7684\u503c\u53ef\u4ee5\u662f\u6574\u6570\u6216\u8005\u6d6e\u70b9\u6570\uff0c\u9ed8\u8ba4\u4e3a\u5341\u8fdb\u5236\uff0c\u4e5f\u53ef\u4ee5\u652f\u6301\u5176\u4ed6\u8fdb\u5236\u7684\u6570\u3002bash\u539f\u751f\u652f\u6301\u6574\u6570\uff0c\u4f46\u662f\u5982\u524d\u6240\u8bf4\u4e0d\u539f\u751f\u652f\u6301\u6d6e\u70b9\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"num1=6\nnum2=6.6\n")),(0,l.kt)("h3",{id:"\u5b57\u7b26\u4e32"},"\u5b57\u7b26\u4e32"),(0,l.kt)("p",null,"\u5b57\u7b26\u4e32\u662f\u6700\u5e38\u7528\u7684\u7c7b\u578b\u6ca1\u6709\u4e4b\u4e00\uff0cbash\u53ef\u4ee5\u975e\u5e38\u7075\u6d3b\u7684\u5904\u7406\u5404\u79cd\u5404\u6837\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"str1=string\nstr1='string with multi words'\n")),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5305\u542b\u7a7a\u683c\u7684\u5b57\u7b26\u4e32\u9700\u8981\u4f7f\u7528\u5f15\u53f7\u62ec\u8d77\u6765\uff0c\u5176\u4e2d\u5f15\u53f7\u53c8\u6709\u5355\u5f15\u53f7\u3001\u53cc\u5f15\u53f7\u7684\u5dee\u522b\u3002\u5728\u53cc\u5f15\u53f7\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"$"),"\u5f00\u5934\u7684\u5b57\u7b26\u4e32\u8868\u793a\u4e00\u4e2a\u53d8\u91cf\uff0c\u5728\u5f15\u7528\u7684\u65f6\u5019\u4f1a\u88ab\u89e3\u6790\uff0c\u800c\u5355\u5f15\u53f7\u5219\u4e0d\u4f1a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cm=0\necho '\u795e\u554a\uff0c\u8bf7\u7ed9\u6211\u52a01$cm\u5398\u7c73'\necho \"\u795e\u554a\uff0c\u8bf7\u7ed9\u6211\u52a01$cm\u5398\u7c73\"\n")),(0,l.kt)("p",null,"shell\u4e2d\u6267\u884c\u4ee5\u4e0a\u4e24\u884c\u4f1a\u5f97\u5230\u4e0d\u540c\u7684\u8f93\u51fa\u3002\n\u591a\u884c\u5b57\u7b26\u4e32\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5355\u5f15\u53f7\u6216\u8005\u53cc\u5f15\u53f7\u62ec\u8d77\u6765\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u8f93\u51fa\u7684\u65f6\u5019\u5e26\u5f15\u53f7\u548c\u4e0d\u5e26\u5f15\u53f7\u662f\u6709\u5dee\u522b\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'str1="\na\na b\na b c\n"\necho $str1\necho "$str1"\n')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"str",src:n(4088).Z,width:"1422",height:"208"})),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u5e26\u5f15\u53f7\u7684\u53d8\u91cf\u8f93\u51fa\u4f1a\u5305\u542b\u6362\u884c\u3002"),(0,l.kt)("h3",{id:"\u6570\u7ec4"},"\u6570\u7ec4"),(0,l.kt)("p",null,"\u6570\u7ec4\u53c8\u53eb\u7d22\u5f15\u6570\u7ec4(indexed array)\u3002\u6570\u7ec4\u7684\u4f5c\u7528\u662f\u5c06\u4e00\u4e2a\u7cfb\u5217\u7684\u5143\u7d20\u7ec4\u7ec7\u5230\u4e00\u4e2a\u53d8\u91cf\u4e2d\uff0c\u5143\u7d20\u7684\u7d22\u5f15\u4ece0\u5f00\u59cb\uff0c\u5b9a\u4e49\u6570\u7ec4\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u65b9\u5f0f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e00\u4e2a\u5305\u542b\u591a\u4e2a\u5143\u7d20\u7684\u6570\u7ec4\narr1=(A B C)\narr1[3]=D\narr1[4]=E\n# \u6216\u8005\u663e\u793a\u58f0\u660e\u4e00\u4e2a\u6570\u7ec4\ndeclare -a arr1\n")),(0,l.kt)("p",null,"\u6570\u7ec4\u7684\u503c\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u65b9\u5f0f\u83b7\u53d6\u5230"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6309\u7d22\u5f15\u83b7\u53d6\u5355\u4e2a\u5143\u7d20\n${arr1[2]}\n# \u5168\u90e8\u5143\u7d20\n${arr1[@]}\n# \u83b7\u53d6\u5168\u90e8\u7d22\u5f15\u503c\n${!arr1[@]}\n# \u6570\u7ec4\u957f\u5ea6\n${#arr1[@]}\n")),(0,l.kt)("h3",{id:"\u5b57\u5178"},"\u5b57\u5178"),(0,l.kt)("p",null,"\u5b57\u5178\u672c\u8d28\u662f\u4e00\u4e2a\u5173\u8054\u6570\u7ec4(associative array)\u3002\u4f60\u53ef\u4ee5\u7406\u89e3\u4e3a\u5c06indexed array\u7684index\u503c\u66ff\u6362\u4e3a\u81ea\u5b9a\u4e49\u7684\u503c\u800c\u975e\u9ed8\u8ba4\u7684\u6570\u5b57\u3002\n\u5b9a\u4e49\u4e00\u4e2a\u5b57\u5178\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b57\u5178\u53ea\u80fd\u7528declare -A\u58f0\u660e\ndeclare -A dict1\ndict1=(\n    ['a']=A\n    ['b']=B\n    ['c']=C\n)\ndict1[d]=D\n")),(0,l.kt)("p",null,"\u83b7\u53d6\u5b57\u5178\u7684\u503c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u83b7\u53d6\u6307\u5b9akey\u7684value\necho ${dict1[b]}\n# \u83b7\u53d6\u6240\u6709value\necho ${dict1[@]}\n# \u83b7\u53d6\u6240\u6709key\necho ${!dict1[@]}\n# \u83b7\u53d6\u5b57\u5178\u957f\u5ea6\necho ${#dict1[@]}\n")),(0,l.kt)("h2",{id:"\u65e5\u671f\u65f6\u95f4"},"\u65e5\u671f\u65f6\u95f4"),(0,l.kt)("p",null,"\u4e25\u683c\u6765\u8bb2bash\u4e2d\u5e76\u6ca1\u6709\u65f6\u671f\u65f6\u95f4\u8fd9\u6837\u7684\u5355\u72ec\u7c7b\u578b\uff0c\u4e00\u4e2a\u65e5\u671f\u65f6\u95f4\u7684\u503c\u4e5f\u53ea\u662f\u5e26\u683c\u5f0f\u7684\u5b57\u7b26\u4e32\u800c\u5df2\uff0c\u65e5\u671f\u65f6\u95f4\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"date"),"\u547d\u4ee4\u8fdb\u884c\u83b7\u53d6\uff0c\u652f\u6301\u901a\u8fc7'+FORMAT'\u53c2\u6570\u81ea\u5b9a\u4e49\u683c\u5f0f\uff0c\u4ee5\u4e0b\u6574\u7406\u4e86date\u547d\u4ee4\u7684\u5e38\u7528\u683c\u5f0f\u8868\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u683c\u5f0f\u7b26\u53f7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%Y"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e74"),(0,l.kt)("td",{parentName:"tr",align:null},"2032")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%m"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6708"),(0,l.kt)("td",{parentName:"tr",align:null},"01..12")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e5"),(0,l.kt)("td",{parentName:"tr",align:null},"01")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%H"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65f6"),(0,l.kt)("td",{parentName:"tr",align:null},"00..23")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%M"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206"),(0,l.kt)("td",{parentName:"tr",align:null},"00..59")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%S"),(0,l.kt)("td",{parentName:"tr",align:null},"\u79d2"),(0,l.kt)("td",{parentName:"tr",align:null},"00..60")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%u"),(0,l.kt)("td",{parentName:"tr",align:null},"\u661f\u671f"),(0,l.kt)("td",{parentName:"tr",align:null},"1..7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%z"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65f6\u533a"),(0,l.kt)("td",{parentName:"tr",align:null},"+0800")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%s"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65f6\u95f4\u6233"),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea1970-01-01 00:00:00\u4ee5\u6765\u7684\u79d2\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%F"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ec4\u5408\u683c\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b49\u540c\u4e8e%Y-%m-%d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%T"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ec4\u5408\u683c\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b49\u540c\u4e8e%H:%M:%S")))),(0,l.kt)("p",null,"\u8fd9\u91cc\u4ec5\u662fdate\u547d\u4ee4\u652f\u6301\u5730\u90e8\u5206\u683c\u5f0f\uff0c\u5b8c\u6574\u7684\u683c\u5f0f\u8bf7\u53c2\u7167",(0,l.kt)("inlineCode",{parentName:"p"},"man date"),"\u3002\u4e0b\u9762\u6f14\u793a\u4e00\u4e9b\u9488\u5bf9\u65e5\u671f\u65f6\u95f4\u7684\u57fa\u672c\u683c\u5f0f\u64cd\u4f5c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# 10\u4f4d\u65f6\u95f4\u6233\uff0c\u4f8b\u5982 1661155489\ndate '+%s'\n# 13\u4f4d\u65f6\u95f4\u6233\uff0c\u4f8b\u5982 1661155534689\ndate '+%s%3N'\n# \u683c\u5f0f\u5316\u8f93\u51fa \uff0c\u4f8b\u5982 2022-08-22 16:06:50\ndate '+%F %T'\n# \u6307\u5b9a\u65f6\u95f4\uff0c\u683c\u5f0f\u5316\u6210\u65f6\u95f4\u6233\ndate -d '2032-08-22 16:06:50' '+%s'\n# \u6307\u5b9a\u65f6\u95f4\u6233\uff0c\u683c\u5f0f\u5316\ndate -d '@1976774810' '+%Y%m%d-%H%M%S'\n")))}u.isMDXComponent=!0},4088:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/str-2434c183a6b5428db6160cecc48e8fc9.png"}}]);