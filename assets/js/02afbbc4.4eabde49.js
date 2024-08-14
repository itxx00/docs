"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8288],{7738:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=r(5893),o=r(3905);const t={sidebar_position:6},s="\u5faa\u73af",c={id:"shell-basic/syntax-loop",title:"\u5faa\u73af",description:"bash\u4e5f\u652f\u6301\u591a\u79cd\u5faa\u73af\u63a7\u5236\uff0c\u6bd4\u5982while\u3001for\u3001until\uff0c\u4f7f\u7528\u597d\u8fd9\u4e9b\u5faa\u73af\u7ed3\u6784\u662f\u975e\u5e38\u6709\u5fc5\u8981\u7684\u3002\u6709\u4e2a\u6545\u4e8b\u662f\u8fd9\u6837\u7684\uff1a",source:"@site/docs/01-shell-basic/06-syntax-loop.md",sourceDirName:"01-shell-basic",slug:"/shell-basic/syntax-loop",permalink:"/notes/docs/shell-basic/syntax-loop",draft:!1,unlisted:!1,editUrl:"https://github.com/itxx00/notes/tree/main/docs/01-shell-basic/06-syntax-loop.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u5206\u652f\u4e0e\u6761\u4ef6",permalink:"/notes/docs/shell-basic/syntax-switch"},next:{title:"\u8f93\u5165\u8f93\u51fa\u4e0e\u7ba1\u9053",permalink:"/notes/docs/shell-basic/syntax-io"}},l={},d=[{value:"for\u5faa\u73af",id:"for\u5faa\u73af",level:2},{value:"while\u5faa\u73af",id:"while\u5faa\u73af",level:2},{value:"until\u5faa\u73af",id:"until\u5faa\u73af",level:2}];function a(e){const n={code:"code",del:"del",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u5faa\u73af",children:"\u5faa\u73af"}),"\n",(0,i.jsxs)(n.p,{children:["bash\u4e5f\u652f\u6301\u591a\u79cd\u5faa\u73af\u63a7\u5236\uff0c\u6bd4\u5982",(0,i.jsx)(n.code,{children:"while"}),"\u3001",(0,i.jsx)(n.code,{children:"for"}),"\u3001",(0,i.jsx)(n.code,{children:"until"}),"\uff0c\u4f7f\u7528\u597d\u8fd9\u4e9b\u5faa\u73af\u7ed3\u6784\u662f\u975e\u5e38\u6709\u5fc5\u8981\u7684\u3002\u6709\u4e2a\u6545\u4e8b\u662f\u8fd9\u6837\u7684\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u8001\u603b\ud83d\udcde\u79d8\u4e66\uff1a\u8fd9\u51e0\u5929\u6211\u5e26\u4f60\u53bb\u5317\u4eac\u8d70\u8d70\uff0c\u4f60\u51c6\u5907\u4e0b\n\u79d8\u4e66\ud83d\udcde\u8001\u516c\uff1a\u8fd9\u51e0\u5929\u6211\u8981\u53bb\u5317\u4eac\u5f00\u4f1a\uff0c\u4f60\u81ea\u5df1\u7167\u987e\u81ea\u5df1\n\u8001\u516c\ud83d\udcde\u60c5\u4eba\uff1a\u8fd9\u51e0\u5929\u6211\u8001\u5a46\u51fa\u5dee\uff0c\u6211\u4eec\u4e5f\u51fa\u6765\u73a9\u5427\n\u60c5\u4eba\ud83d\udcde\u5c0f\u5b69\uff1a\u8fd9\u51e0\u5929\u4e0d\u7528\u4e0a\u8bfe\uff0c\u6211\u6709\u4e8b\u60c5\n\u5c0f\u5b69\ud83d\udcde\u7237\u7237\uff1a\u8fd9\u51e0\u5929\u8001\u5e08\u6709\u4e8b\u4e0d\u7528\u4e0a\u8bfe\uff0c\u4f60\u966a\u6211\u73a9\u5427\n\u7237\u7237\ud83d\udcde\u79d8\u4e66\uff1a\u8fd9\u51e0\u5929\u6211\u8981\u966a\u5b59\u5b50\u73a9\uff0c\u4e0d\u80fd\u53bb\u5317\u4eac\u4e86\n\u79d8\u4e66\ud83d\udcde\u8001\u516c\uff1a\u8fd9\u51e0\u5929\u8001\u603b\u6709\u6025\u4e8b\uff0c\u6211\u4e0d\u53bb\u5317\u4eac\u5f00\u4f1a\u4e86\n\u8001\u516c\ud83d\udcde\u60c5\u4eba\uff1a\u8fd9\u51e0\u5929\u4e0d\u80fd\u51fa\u6765\u73a9\uff0c\u6211\u8001\u5a46\u4e0d\u53bb\u5317\u4eac\u4e86\n\u60c5\u4eba\ud83d\udcde\u5c0f\u5b69\uff1a\u8fd9\u51e0\u5929\u7ee7\u7eed\u6b63\u5e38\u4e0a\u8bfe\n\u5c0f\u5b69\ud83d\udcde\u7237\u7237\uff1a\u8fd9\u51e0\u5929\u8fd8\u662f\u8981\u4e0a\u8bfe\uff0c\u6211\u4e0d\u80fd\u966a\u4f60\u73a9\u4e86\n\u7237\u7237\ud83d\udcde\u79d8\u4e66\uff1a\u8fd9\u51e0\u5929\u8fd8\u662f\u5e26\u4f60\u53bb\u5317\u4eac\u8d70\u8d70\u7684\uff0c\u4f60\u51c6\u5907\u4e0b...\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8db3\u4ee5\u89c1\u5f97\u638c\u63e1\u597d\u5faa\u73af\u7ed3\u6784\u7684\u91cd\u8981\u6027\uff0c\u6015\u7ffb\u8f66\u5c31\u8d76\u7d27\u8ddf\u7740\u8001\u53f8\u673a\u64cd\u7ec3\u8d77\u6765\u5427\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"for\u5faa\u73af",children:"for\u5faa\u73af"}),"\n",(0,i.jsx)(n.p,{children:"\u57fa\u672c\u7ed3\u6784\u662f\u8fd9\u6837\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"for name [in items ... ] ; do commands; done"})}),"\n",(0,i.jsxs)(n.p,{children:["for\u4f1a\u5faa\u73af\u5217\u8868\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\uff0c\u5e76\u91cd\u590d\u6267\u884c\u540e\u9762\u7684commands\uff0c\u6bcf\u6b21\u5faa\u73af\u5217\u8868\u4e2d\u7684\u4e00\u4e2a\u5143\u7d20\u4f1a\u88ab\u8d4b\u503c\u7ed9name\uff0c\u5176\u4e2d\u5217\u8868\u5143\u7d20\u662f\u53ef\u9009\u7684\uff0c\u5982\u679c\u6ca1\u6709\u7684\u8bdd\u5c31\u9ed8\u8ba4\u5faa\u73af",(0,i.jsx)(n.code,{children:"$@"}),"\u4e5f\u5c31\u662f\u4f4d\u7f6e\u53c2\u6570\u4e2d\u7684\u5185\u5bb9\u3002\u4e0b\u9762\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nfor food in "$@"; do\n    [[ $food =~ [\ud83d\udeac|\ud83c\udf77] ]] && {\n        echo "ignore $food"\n        continue\n    }\n    [[ $food =~ \ud83d\udc8a ]] && {\n        echo "game over $food"\n        break\n    }\n    echo "I want $food"\ndone\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u770b\u4e00\u4e0b\u6267\u884c\u6548\u679c\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"for",src:r(8114).Z+"",width:"821",height:"187"})}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230for\u5faa\u73af\u7684\u6267\u884c\u6d41\u7a0b\uff0c\u5e76\u4e14\u5728for\u5faa\u73af\u4e2d\u53ef\u4ee5\u4f7f\u7528",(0,i.jsx)(n.code,{children:"continue"}),"\u6765\u8df3\u8fc7\u5f53\u524d\u5faa\u73af\u7ee7\u7eed\u4e0b\u4e00\u4e2a\u5143\u7d20\u7684\u5faa\u73af\uff0c\u4f7f\u7528",(0,i.jsx)(n.code,{children:"break"}),"\u6765\u63d0\u524d\u7ec8\u6b62\u6574\u4e2a\u5faa\u73af\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"while\u5faa\u73af",children:"while\u5faa\u73af"}),"\n",(0,i.jsx)(n.p,{children:"\u57fa\u672c\u7ed3\u6784\u662f\u8fd9\u6837\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"while condition; do commands; done"})}),"\n",(0,i.jsx)(n.p,{children:"\u5f53\u6761\u4ef6\u6210\u7acb\uff0cwhile\u5faa\u73af\u4f1a\u6301\u7eed\u6267\u884ccommands\uff0c\u76f4\u5230\u6761\u4ef6\u4e0d\u6210\u7acb\u5373\u7ec8\u6b62\u3002\u770b\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash\n\nnum=0\nwhile [[ $num -ne 10 ]]; do\n    num=$((num+1))\n    [[ $num = 4 ]] && continue\n    [[ $num -gt 8 ]] && break\n    echo $num\ndone\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230while\u5faa\u73af\u4f1a\u5148\u5bf9\u6307\u5b9a\u6761\u4ef6\u8fdb\u884c\u6d4b\u8bd5\uff0c\u5f53\u6761\u4ef6\u6210\u7acb\u65f6\u5c31\u4f1a\u4e0d\u505c\u6b47\u7684\u6267\u884c\u5185\u90e8\u7684\u4ee3\u7801\u5757\uff0c\u548cfor\u5faa\u73af\u4e00\u6837\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7continue\u8df3\u8fc7\u5f53\u524d\u5faa\u73af\u8fdb\u5165\u4e0b\u4e00\u5faa\u73af\uff0c\u901a\u8fc7break\u63d0\u524d\u7ec8\u6b62\u5faa\u73af\u3002while\u5faa\u73af\u901a\u5e38\u4f1a\u548c",(0,i.jsx)(n.code,{children:"read"}),"\u8fde\u7528\u7528\u4e8e\u9010\u884c\u8bfb\u53d6\u6587\u672c\u5185\u5bb9\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash\n\nwhile read -r line; do\n    user=$(awk -F':' '{print $1}' <<<$line)\n    uid=$(awk -F':' '{print $3}' <<<$line)\n    [[ $uid = 0 ]] && echo \"$user niubi\"\ndone\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u770b\u4e0b\u6267\u884c\u7ed3\u679c\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"for",src:r(8439).Z+"",width:"919",height:"143"})}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\u5f53\u811a\u672c\u4e2dwhile\u5faa\u73af\u4f53\u6ca1\u6709\u4e3a\u5176\u6307\u5b9a\u8f93\u5165\u6765\u6e90\u65f6\uff0c\u9ed8\u8ba4\u4f1a\u63a5\u53d7\u6807\u51c6\u8f93\u51fa\u4f5c\u4e3a\u8f93\u5165\uff0c\u56e0\u6b64\u6211\u4eec\u901a\u8fc7\u7ba1\u9053\u5c06passwd\u6587\u4ef6\u5185\u5bb9\u8f93\u5165\u7ed9\u4e86\u811a\u672c\uff0c\u5e76\u5f97\u5230\u4e86\u4ee4\u4eba",(0,i.jsx)(n.del,{children:"\u6ee1\u610f"}),"\u5403\u60ca\u7684\u7ed3\u679c\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"until\u5faa\u73af",children:"until\u5faa\u73af"}),"\n",(0,i.jsx)(n.p,{children:"\u548cwhile\u5faa\u73af\u7c7b\u4f3c\uff0c\u57fa\u672c\u7ed3\u6784\u662f\u8fd9\u6837\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"until condition; do commands; done"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e0ewhile\u4e0d\u4e00\u6837\u7684\u662f\u5f53\u6761\u4ef6\u4e0d\u6210\u7acb\uff0cuntil\u5faa\u73af\u4f1a\u6301\u7eed\u6267\u884ccommands\uff0c\u76f4\u5230\u6761\u4ef6\u6210\u7acb\u5373\u7ec8\u6b62\u3002\u7b80\u5355\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash\n\nnum=0\nuntil [[ $num -eq 10 ]]; do\n    num=$((num+1))\n    [[ $num = 4 ]] && continue\n    [[ $num -gt 8 ]] && break\n    echo $num\ndone\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u90a3\u4e48\u5c0f\u95ee\u9898\u6765\u4e86\uff0c\u5206\u522b\u4f7f\u7528",(0,i.jsx)(n.code,{children:"for"}),"/",(0,i.jsx)(n.code,{children:"while"}),"/",(0,i.jsx)(n.code,{children:"until"}),"\u5982\u4f55\u5199\u4e00\u4e2a\u7b80\u77ed\u7684\u6b7b\u5faa\u73af\uff1f\ud83d\ude08"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u8001\u53f8\u673a\u63d0\u793a\uff1a"})," \u8bf7\u52ff\u5728\u751f\u4ea7\u73af\u5883\u8c03\u8bd5\u4ee3\u7801\uff01\u9053\u8def\u5343\u4e07\u6761\uff0c\u5b89\u5168\u7b2c\u4e00\u6761\uff0c\u9a7e\u9a76\u4e0d\u89c4\u8303\uff0c\u4eb2\u4eba\u4e24\u884c\u6cea\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,o.ah)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},3905:(e,n,r)=>{r.d(n,{ah:()=>d});var i=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,i,o=function(e,n){if(null==e)return{};var r,i,o={},t=Object.keys(e);for(i=0;i<t.length;i++)r=t[i],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)r=t[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=i.createContext({}),d=function(e){var n=i.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},a={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var r=e.components,o=e.mdxType,t=e.originalType,l=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),p=d(r),u=o,m=p["".concat(l,".").concat(u)]||p[u]||a[u]||t;return r?i.createElement(m,s(s({ref:n},h),{},{components:r})):i.createElement(m,s({ref:n},h))}));h.displayName="MDXCreateElement"},8114:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/for-47b97dd0ab7deee6a63e97383b6f2dbd.png"},8439:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/while-2a96253671c1649b3e735c64a2d9e234.png"}}]);