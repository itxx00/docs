"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6770],{1991:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var s=r(5893),t=r(3905);const c={sidebar_position:1},i="\u5f00\u59cb\u4e4b\u524d",l={id:"shell-basic/basic",title:"\u5f00\u59cb\u4e4b\u524d",description:"\u5047\u5b9a\u4f60\u5df2\u7ecf\u638c\u63e1\u4e86 linux \u7cfb\u7edf\u7684\u57fa\u672c\u4f7f\u7528\uff0c\u638c\u63e1\u4e86\u67d0\u4e00\u79cd\u7f16\u8f91\u5668\u5982vim/emacs/vscode\u7b49\u7684\u57fa\u672c\u4f7f\u7528\uff0c\u5e76\u4e14\u5df2\u7ecf\u5177\u5907\u4e86\u4e00\u4e2a\u5b9e\u9a8c\u73af\u5883\u3002",source:"@site/docs/01-shell-basic/01-basic.md",sourceDirName:"01-shell-basic",slug:"/shell-basic/basic",permalink:"/notes/docs/shell-basic/basic",draft:!1,unlisted:!1,editUrl:"https://github.com/itxx00/notes/tree/main/docs/01-shell-basic/01-basic.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"shell\u7f16\u7801 - \u57fa\u7840\u7bc7",permalink:"/notes/docs/category/shell\u7f16\u7801---\u57fa\u7840\u7bc7"},next:{title:"\u811a\u672c\u57fa\u672c\u7ed3\u6784",permalink:"/notes/docs/shell-basic/structure"}},a={},o=[{value:"\u7b2c\u4e00\u4e2a\u811a\u672c",id:"\u7b2c\u4e00\u4e2a\u811a\u672c",level:2},{value:"\u8ba4\u8bc6\u811a\u672c\u89e3\u91ca\u5668",id:"\u8ba4\u8bc6\u811a\u672c\u89e3\u91ca\u5668",level:2},{value:"\u8ba4\u8bc6\u8fd4\u56de\u503c",id:"\u8ba4\u8bc6\u8fd4\u56de\u503c",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,t.ah)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u5f00\u59cb\u4e4b\u524d",children:"\u5f00\u59cb\u4e4b\u524d"}),"\n",(0,s.jsx)(n.p,{children:"\u5047\u5b9a\u4f60\u5df2\u7ecf\u638c\u63e1\u4e86 linux \u7cfb\u7edf\u7684\u57fa\u672c\u4f7f\u7528\uff0c\u638c\u63e1\u4e86\u67d0\u4e00\u79cd\u7f16\u8f91\u5668\u5982vim/emacs/vscode\u7b49\u7684\u57fa\u672c\u4f7f\u7528\uff0c\u5e76\u4e14\u5df2\u7ecf\u5177\u5907\u4e86\u4e00\u4e2a\u5b9e\u9a8c\u73af\u5883\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u7b2c\u4e00\u4e2a\u811a\u672c",children:"\u7b2c\u4e00\u4e2a\u811a\u672c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vi first-script.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7f16\u8f91\u5982\u4e0b\u5185\u5bb9"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\necho -e "hello bash \\xf0\\x9f\\x98\\x81"\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u4fdd\u5b58\u6267\u884c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"chmod +x first-script.sh\n./first-script.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f60\u5c06\u5f97\u5230\u4e0b\u9762\u7684\u8f93\u51fa"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"first-script",src:r(4824).Z+"",width:"1368",height:"228"})}),"\n",(0,s.jsx)(n.p,{children:"\u81f3\u6b64\u4f60\u5df2\u7ecf\u638c\u63e1\u4e86\u5982\u4f55\u521b\u5efa\u4e00\u4e2a shell \u811a\u672c\u6587\u4ef6\uff0c\u5e76\u4e14\u8d4b\u4e88\u5176\u53ef\u6267\u884c\u6743\u9650\uff0c\u6267\u884c\u5e76\u5f97\u5230\u4e86\u9884\u671f\u7684\u8f93\u51fa\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8ba4\u8bc6\u811a\u672c\u89e3\u91ca\u5668",children:"\u8ba4\u8bc6\u811a\u672c\u89e3\u91ca\u5668"}),"\n",(0,s.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\u9700\u8981\u7b80\u5355\u89e3\u91ca\u4e00\u4e0b\u811a\u672c\u7684\u5185\u5bb9\uff1a"}),"\n",(0,s.jsxs)(n.p,{children:["\u7b2c\u4e00\u884c\u7684 ",(0,s.jsx)(n.code,{children:"#!/bin/bash"})," \u7528\u6765\u6307\u5b9a\u811a\u672c\u7c7b\u578b\u6587\u4ef6\u7684\u89e3\u91ca\u5668\uff0c\u5176\u4f5c\u7528\u5c31\u662f\u5f53\u4e00\u4e2a\u975e\u4e8c\u8fdb\u5236\u6587\u4ef6\u88ab\u8d4b\u4e88\u4e86\u53ef\u6267\u884c\u6743\u9650\u540e\uff0c\u4e00\u65e6\u88ab\u6267\u884c\u4ed6\u5c06\u901a\u8fc7\u4ec0\u4e48\u4e1c\u897f\u6765\u6267\u884c\u6587\u4ef6\u4e2d\u63a5\u4e0b\u6765\u7684\u5185\u5bb9\u3002\u5176\u4e2d",(0,s.jsx)(n.code,{children:"#!"}),"\u662f\u4e00\u4e2a\u56fa\u5b9a\u5199\u6cd5\uff0c\u4f60\u53ef\u4ee5\u5728\u5f88\u591a\u5730\u65b9\u627e\u5230\u5173\u4e8e\u8fd9\u8d27\u7684\u89e3\u91ca\uff0c\u82f1\u6587\u53eb ",(0,s.jsx)(n.code,{children:"sha-bang"})," (#-sharp, !-bang) \u6216\u8005she-bang\uff0c\u559c\u6b22\u8003\u53e4\u7684\u53ef\u4ee5\u5728\u7f51\u4e0a\u5df4\u62c9\u4e0bshabang\u7684\u6765\u5386\uff0c\u603b\u4e4b\u4e0d\u7ba1\u4ed6\u662f\u4ec0\u4e48\u68d2\u8bb0\u4f4f\u5c31\u8fd9\u6837\u5199\u5c31\u5bf9\u4e86\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u540e\u9762\u7684",(0,s.jsx)(n.code,{children:"/bin/bash"}),"\u5c31\u662f\u6307\u5b9a\u8fd9\u4e2a\u6587\u4ef6\u7684\u89e3\u91ca\u5668\u6216\u8005\u53eb\u6267\u884c\u5668\u3002\u9664\u4e86bash\u4ee5\u5916\uff0c\u8fd8\u6709\u5176\u4ed6\u5f88\u591a\u7684shell\u4f8b\u5982dash\u3001zsh\u7b49\uff0c\u4e0d\u540c\u7684shell\u6709\u4e00\u4e9b\u7ec6\u8282\u7684\u8bed\u6cd5\u5dee\u5f02\uff0c\u4f46\u5927\u90e8\u5206\u90fd\u4e00\u6837\uff0c\u4f46bash\u5e94\u8be5\u662f\u6240\u6709\u7cfb\u7edf\u90fd\u5e26\u7684\uff0c\u901a\u5e38shell\u4f5c\u4e3a\u65e5\u5e38\u4f7f\u7528\u7684\u7ec8\u7aef\u4f60\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u559c\u597d\u9009\u62e9\uff0c\u6bd4\u5982\u5f88\u591a\u4eba\u559c\u6b22oh-my-zsh\uff0c\u4f46\u662fshell\u4f5c\u4e3a\u811a\u672c\u5de5\u5177\u6765\u6267\u884c\u7684\u8bdd\u4e3a\u4e86\u83b7\u5f97\u826f\u597d\u7684\u517c\u5bb9\u6027\uff0c\u6211\u901a\u5e38\u5c31\u5efa\u8bae\u811a\u672c\u6587\u4ef6\u91cc\u9762\u7edf\u4e00\u7528bash\u3002\u9664\u4e86shell\u89e3\u91ca\u5668\u4ee5\u5916\uff0c\u8fd9\u4e00\u884c\u8fd8\u53ef\u4ee5\u5199\u6210\u522b\u7684\u4e1c\u897f\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"#!/bin/cat\nhello old driver\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u8fd9\u4e2a\u6587\u4ef6\u5c06\u4f1a\u628a\u8fd9\u4e2a\u6587\u4ef6\u81ea\u8eab\u7684\u5185\u5bb9cat\u51fa\u6765\u3002\u90a3\u4e48\u95ee\u9898\u6765\u4e86\uff0c\u5047\u5982\u6211\u4eec\u6267\u884c\u4e00\u4e2a\u4e0d\u5305\u542b\u7b2c\u4e00\u884c\u89e3\u91ca\u5668\u7684\u6587\u4ef6\u4f1a\u600e\u6837\u5462\uff1f\u52a8\u624b\u8bd5\u8bd5\u770b\u770b\ud83d\ude09"}),"\n",(0,s.jsx)(n.h2,{id:"\u8ba4\u8bc6\u8fd4\u56de\u503c",children:"\u8ba4\u8bc6\u8fd4\u56de\u503c"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728shell\u4e2d\u4efb\u4f55\u547d\u4ee4\u6267\u884c\u7ed3\u675f\u90fd\u4f1a\u6709\u4e00\u4e2a\u8fd4\u56de\u503c\uff0c\u7528\u6765\u8868\u793a\u547d\u4ee4\u662f\u5426\u6267\u884c\u6210\u529f\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a\u7279\u6b8a\u7684\u53d8\u91cf",(0,s.jsx)(n.code,{children:"$?"}),"\u83b7\u53d6\u5230\u8fd4\u56de\u503c\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"retval",src:r(4318).Z+"",width:"1383",height:"195"})}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\u5f53\u6210\u529f\u6267\u884c\u4e00\u4e2adate\u547d\u4ee4\u540e\u8fd4\u56de\u503c\u662f0\uff0c\u5f53\u6267\u884c\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u547d\u4ee4\u540e\u8fd4\u56de\u503c\u662f127\u3002\u5176\u4e2d",(0,s.jsx)(n.code,{children:"0"}),"\u8868\u793a\u6267\u884c\u6210\u529f\uff0c\u5176\u4ed6",(0,s.jsx)(n.code,{children:"\u975e0"}),"\u6570\u503c\u8868\u793a\u5931\u8d25\uff0c\u540e\u9762\u7684\u5185\u5bb9\u4e2d\u6211\u4eec\u7ecf\u5e38\u9700\u8981\u4f7f\u7528\u5230\u8fd4\u56de\u503c\uff0c\u56e0\u6b64\u7406\u89e3\u8fd4\u56de\u503c\u662f\u5b66\u4e60\u5176\u4ed6\u5185\u5bb9\u7684\u57fa\u7840\u3002"]})]})}function d(e={}){const{wrapper:n}={...(0,t.ah)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},3905:(e,n,r)=>{r.d(n,{ah:()=>o});var s=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,s,t=function(e,n){if(null==e)return{};var r,s,t={},c=Object.keys(e);for(s=0;s<c.length;s++)r=c[s],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)r=c[s],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var a=s.createContext({}),o=function(e){var n=s.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},h={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},d=s.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=o(r),b=t,u=p["".concat(a,".").concat(b)]||p[b]||h[b]||c;return r?s.createElement(u,i(i({ref:n},d),{},{components:r})):s.createElement(u,i({ref:n},d))}));d.displayName="MDXCreateElement"},4824:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/first-script-160967605ec7304f0d1d6e3fdc4138cd.png"},4318:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/retval-e5ca5ceeac81524f854d09b9f49ae960.png"}}]);