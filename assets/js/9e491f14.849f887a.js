"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9951],{4124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var l=n(5893),r=n(3905);const s={sidebar_position:4},c="\u8fd0\u7b97\u4e0e\u6d4b\u8bd5",i={id:"shell-basic/syntax-calc",title:"\u8fd0\u7b97\u4e0e\u6d4b\u8bd5",description:"bash\u4e2d\u539f\u751f\u652f\u6301\u6574\u6570\u7684\u7b97\u672f\u8fd0\u7b97\uff0c\u6d6e\u70b9\u6570\u7684\u8ba1\u7b97\u9700\u8981\u901a\u8fc7\u5916\u90e8\u547d\u4ee4\u624d\u80fd\u5b8c\u6210\uff0c\u53e6\u5916\u4e5f\u80fd\u8fdb\u884c\u5173\u7cfb\u8fd0\u7b97\u3001\u903b\u8f91\u8fd0\u7b97\u7b49\u3002",source:"@site/docs/01-shell-basic/04-syntax-calc.md",sourceDirName:"01-shell-basic",slug:"/shell-basic/syntax-calc",permalink:"/notes/docs/shell-basic/syntax-calc",draft:!1,unlisted:!1,editUrl:"https://github.com/itxx00/notes/tree/main/docs/01-shell-basic/04-syntax-calc.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u53d8\u91cf\u4e0e\u6570\u636e",permalink:"/notes/docs/shell-basic/syntax-vars"},next:{title:"\u5206\u652f\u4e0e\u6761\u4ef6",permalink:"/notes/docs/shell-basic/syntax-switch"}},d={},h=[{value:"\u8fd0\u7b97",id:"\u8fd0\u7b97",level:2},{value:"\u7b97\u672f\u8fd0\u7b97",id:"\u7b97\u672f\u8fd0\u7b97",level:3},{value:"\u8fdb\u5236\u8f6c\u6362",id:"\u8fdb\u5236\u8f6c\u6362",level:3},{value:"\u903b\u8f91\u8fd0\u7b97",id:"\u903b\u8f91\u8fd0\u7b97",level:3},{value:"\u5173\u7cfb\u8fd0\u7b97",id:"\u5173\u7cfb\u8fd0\u7b97",level:3},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:2}];function x(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.ah)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"\u8fd0\u7b97\u4e0e\u6d4b\u8bd5",children:"\u8fd0\u7b97\u4e0e\u6d4b\u8bd5"}),"\n",(0,l.jsx)(t.p,{children:"bash\u4e2d\u539f\u751f\u652f\u6301\u6574\u6570\u7684\u7b97\u672f\u8fd0\u7b97\uff0c\u6d6e\u70b9\u6570\u7684\u8ba1\u7b97\u9700\u8981\u901a\u8fc7\u5916\u90e8\u547d\u4ee4\u624d\u80fd\u5b8c\u6210\uff0c\u53e6\u5916\u4e5f\u80fd\u8fdb\u884c\u5173\u7cfb\u8fd0\u7b97\u3001\u903b\u8f91\u8fd0\u7b97\u7b49\u3002"}),"\n",(0,l.jsx)(t.h2,{id:"\u8fd0\u7b97",children:"\u8fd0\u7b97"}),"\n",(0,l.jsx)(t.p,{children:"\u7b97\u672f\u8fd0\u7b97\u652f\u6301\u52a0\u51cf\u4e58\u9664\u7b49\uff0c\u4e0b\u9762\u770b\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(t.h3,{id:"\u7b97\u672f\u8fd0\u7b97",children:"\u7b97\u672f\u8fd0\u7b97"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"# \u52a0\necho $((1+2))\n# \u51cf\necho $((1-2))\n# \u4e58\necho $((1*2))\n# \u9664\necho $((1/2))\n# \u5e42\necho $((2**3))\n# \u4f59\u6570\necho $((-7%4))\n# \u540e\u7f6e\u81ea\u52a0\necho $((a++))\n# \u524d\u7f6e\u81ea\u51cf\necho $((--a))\n# \u4e09\u5143\u64cd\u4f5c\n((c = a<=1 ? 0 : 100))\n"})}),"\n",(0,l.jsx)(t.h3,{id:"\u8fdb\u5236\u8f6c\u6362",children:"\u8fdb\u5236\u8f6c\u6362"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"# \u5404\u79cd\u8fdb\u5236\u8f6c10\u8fdb\u5236, echo $((base#number)), \u4f8b\u5982\uff1a\necho $((2#11))  #3\necho $((8#12)) #10\necho $((012))  #\u6216\u80050\u5f00\u5934\u4e5f\u8868\u793a8\u8fdb\u5236\necho $((16#a)) #10\necho $((0xa)) #\u6216\u80050x\u5f00\u5934\u4e5f\u8868\u793a16\u8fdb\u5236\n"})}),"\n",(0,l.jsx)(t.h3,{id:"\u903b\u8f91\u8fd0\u7b97",children:"\u903b\u8f91\u8fd0\u7b97"}),"\n",(0,l.jsxs)(t.p,{children:["bash\u4e2d\u903b\u8f91\u8fd0\u7b97\u7b26\u662f",(0,l.jsx)(t.code,{children:"&&"})," \u3001",(0,l.jsx)(t.code,{children:"||"})," \u548c ",(0,l.jsx)(t.code,{children:"!"}),"\uff0c\u5206\u522b\u8868\u793a",(0,l.jsx)(t.code,{children:"\u4e0e"}),"\u3001",(0,l.jsx)(t.code,{children:"\u6216"})," \u548c ",(0,l.jsx)(t.code,{children:"\u975e"}),"\uff0c\u903b\u8f91\u8fd0\u7b97\u7b26\u8fde\u63a5\u4e24\u4e2a\u547d\u4ee4\uff0c\u901a\u8fc7\u5bf9\u4e24\u4e2a\u547d\u4ee4\u7684\u8fd4\u56de\u503c\u8fdb\u884c\u8ba1\u7b97\u5e76\u5f97\u5230\u903b\u8f91\u7ed3\u679c\u3002\u4e0b\u9762\u770b\u793a\u4f8b\uff0c\u901a\u8fc7\u8fd4\u56de\u503c\u6765\u89c2\u5bdf\u903b\u8f91\u8fd0\u7b97\u7ed3\u679c\uff0c\u6ce8\u610f\u8fd4\u56de\u503c0\u8868\u793a\u6210\u529f\uff0c\u975e0\u8868\u793a\u5931\u8d25\uff1a"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"true && true ; echo $?  #\u8f93\u51fa0\ntrue && false ; echo $? #\u8f93\u51fa1\nfalse && false ; echo $?  #\u8f93\u51fa1\ntrue || true ; echo $?  #\u8f93\u51fa0\ntrue || false ; echo $?  #\u8f93\u51fa0\nfalse || true ; echo $?  #\u8f93\u51fa0\nfalse || false ; echo $?  #\u8f93\u51fa1\n! true ; echo $?  #\u8f93\u51fa1\n\uff01false ; echo $?  #\u8f93\u51fa0\n"})}),"\n",(0,l.jsx)(t.h3,{id:"\u5173\u7cfb\u8fd0\u7b97",children:"\u5173\u7cfb\u8fd0\u7b97"}),"\n",(0,l.jsxs)(t.p,{children:["\u5173\u7cfb\u8fd0\u7b97\u7528\u6765\u6bd4\u8f83\u6574\u6570\u7684\u5927\u5c0f\uff0c\u5173\u7cfb\u8fd0\u7b97\u5199\u6cd5\u662f",(0,l.jsx)(t.code,{children:"[[ \u6570\u5b571 \u8fd0\u7b97\u7b26 \u6570\u5b572 ]]"})," \uff0c\u4e0b\u8868\u662f\u5173\u7cfb\u8fd0\u7b97\u7b26\uff1a"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"\u8fd0\u7b97\u7b26"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u4f5c\u7528"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"\u8fd0\u7b97\u7b26"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u4f5c\u7528"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"\u8fd0\u7b97\u7b26"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u4f5c\u7528"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"-gt"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5927\u4e8e"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"-lt"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5c0f\u4e8e"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"-eq"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u7b49\u4e8e"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"-ge"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5927\u4e8e\u7b49\u4e8e"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"-le"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5c0f\u4e8e\u7b49\u4e8e"}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"-ne"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u4e0d\u7b49\u4e8e"})]})]})]}),"\n",(0,l.jsx)(t.p,{children:"\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8fd4\u56de\u503c\u6765\u89c2\u5bdf\u8fd0\u7b97\u7ed3\u679c\uff0c\u4e0b\u9762\u770b\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"[[ 1 -gt 2 ]] ; echo $?  #\u8f93\u51fa1\n[[ 1 -ge 2 ]] ; echo $?  #\u8f93\u51fa1\n[[ 1 -lt 2 ]] ; echo $?  #\u8f93\u51fa0\n[[ 1 -le 2 ]] ; echo $?  #\u8f93\u51fa0\n[[ 1 -eq 2 ]] ; echo $?  #\u8f93\u51fa1\n[[ 1 -ne 2 ]] ; echo $?  #\u8f93\u51fa0\n"})}),"\n",(0,l.jsx)(t.h2,{id:"\u6d4b\u8bd5",children:"\u6d4b\u8bd5"}),"\n",(0,l.jsxs)(t.p,{children:["\u9664\u4e86\u4ee5\u4e0a\u5bf9\u4e8e\u6574\u6570\u7684\u5173\u7cfb\u8fd0\u7b97\u5916\uff0c\u8fd8\u652f\u6301\u5f88\u591a\u5176\u4ed6\u7c7b\u578b\u7684\u6d4b\u8bd5\uff0c\u4f8b\u5982\u6d4b\u8bd5\u53d8\u91cf\u3001\u6587\u4ef6\u7b49\uff0c\u6d4b\u8bd5\u7684\u5199\u6cd5\u4e5f\u662f",(0,l.jsx)(t.code,{children:"[[ \u6d4b\u8bd5\u7b26 \u5bf9\u8c61 ]]"}),"\u5e38\u7528\u7684\u6d4b\u8bd5\u89c1\u4e0b\u8868\uff1a"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u6d4b\u8bd5\u7b26"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"\u4f5c\u7528"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-e"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u6587\u4ef6\u662f\u5426\u5b58\u5728"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-s"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u6587\u4ef6\u5927\u5c0f\u662f\u5426\u5927\u4e8e0\u5b57\u8282"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-d"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f\u5426\u76ee\u5f55"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-b"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f\u5426\u5757\u6587\u4ef6"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-f"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f\u5426\u666e\u901a\u6587\u4ef6"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-L"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f\u5426\u8f6f\u94fe\u63a5"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-r"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f\u5426\u53ef\u8bfb"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-w"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f\u5426\u53ef\u5199"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f\u5426\u53ef\u6267\u884c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-n"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5b57\u7b26\u4e32\u6709\u503c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-z"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5b57\u7b26\u4e32\u4e3a\u7a7a"})]})]})]}),"\n",(0,l.jsxs)(t.p,{children:["\u66f4\u591a\u7684\u6d4b\u8bd5\u65b9\u6cd5\u53ef\u4ee5\u67e5\u9605",(0,l.jsx)(t.code,{children:"man test"}),"\u6765\u4e86\u89e3\u5230\u3002\u4e0b\u9762\u770b\u793a\u4f8b\uff1a"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"var1=1\nvar2=''\n[[ -n $var1 ]] ; echo $? #\u8f93\u51fa0\n[[ -z $var1 ]] ; echo $? #\u8f93\u51fa1\n[[ -z $var2 ]] ; echo $? #\u8f93\u51fa0\n[[ -x /bin/bash ]] ; echo $? #\u8f93\u51fa0\n[[ -b /bin/bash ]] ; echo $? #\u8f93\u51fa1\n"})})]})}function a(e={}){const{wrapper:t}={...(0,r.ah)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>h});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},s=Object.keys(e);for(l=0;l<s.length;l++)n=s[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)n=s[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=l.createContext({}),h=function(e){var t=l.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},x={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},a=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,a=i(e,["components","mdxType","originalType","parentName"]),o=h(n),j=r,g=o["".concat(d,".").concat(j)]||o[j]||x[j]||s;return n?l.createElement(g,c(c({ref:t},a),{},{components:n})):l.createElement(g,c({ref:t},a))}));a.displayName="MDXCreateElement"}}]);