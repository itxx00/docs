"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3767],{6411:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>i});var t=s(5893),r=s(3905);const c={layout:"post",title:"\u4f7f\u7528fpm2\u6765\u7ba1\u7406ssh\u5bc6\u7801",description:"",categories:["shell","system"],tags:["fpm2"]},o=void 0,a={permalink:"/notes/blog/2013/11/12/use-fpm2-to-manage-password",editUrl:"https://github.com/itxx00/notes/tree/main/blog/2013-11-12-use-fpm2-to-manage-password.md",source:"@site/blog/2013-11-12-use-fpm2-to-manage-password.md",title:"\u4f7f\u7528fpm2\u6765\u7ba1\u7406ssh\u5bc6\u7801",description:"",date:"2013-11-12T00:00:00.000Z",formattedDate:"2013\u5e7411\u670812\u65e5",tags:[{label:"fpm2",permalink:"/notes/blog/tags/fpm-2"}],readingTime:4.06,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"\u4f7f\u7528fpm2\u6765\u7ba1\u7406ssh\u5bc6\u7801",description:"",categories:["shell","system"],tags:["fpm2"]},unlisted:!1,prevItem:{title:"Systemd\u57fa\u672c\u4f7f\u7528\u4ecb\u7ecd",permalink:"/notes/blog/2014/04/08/systemd-basic-usage"},nextItem:{title:"CentOS\u4e2d\u53cc\u7f51\u5361\u9759\u6001\u8def\u7531\u914d\u7f6e",permalink:"/notes/blog/2013/11/11/centos-multi-network-interface-route"}},l={authorsImageUrls:[]},i=[];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",p:"p",...(0,r.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u4e0d\u77e5\u9053\u6709\u6ca1\u6709\u7ae5\u978b\u9700\u8981\u7ba1\u7406\u4e00\u5806ssh\u53e3\u4ee4\uff0c5\u4e2a\u4ee5\u5185\u9760\u8111\u5b50\u8bb0\u53ef\u80fd\u662f\u4e2a\u597d\u529e\u6cd5\uff0c\u4f46\u662f\u5982\u679c10\u4e2a100\u4e2a\u7684\u65f6\u5019\u6050\u6015\u8111\u5b50\u8bb0\u6709\u70b9\u4e0d\u592a\u591f\u7528\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0d\u77e5\u9053\u6709\u6ca1\u6709\u7ae5\u978b\u9700\u8981\u7ba1\u7406\u4e00\u5806ssh\u53e3\u4ee4\uff0c5\u4e2a\u4ee5\u5185\u9760\u8111\u5b50\u8bb0\u53ef\u80fd\u662f\u4e2a\u597d\u529e\u6cd5\uff0c\u4f46\u662f\u5982\u679c10\u4e2a100\u4e2a\u7684\u65f6\u5019\u6050\u6015\u8111\u5b50\u8bb0\u6709\u70b9\u4e0d\u592a\u591f\u7528\uff0c\n\u8fd9\u4e2a\u65f6\u5019\u5c31\u9700\u8981\u501f\u52a9\u5916\u90e8\u5de5\u5177\u6765\u8fdb\u884c\u7ba1\u7406\uff0c\u5f53\u7136\u4f60\u53ef\u4ee5\u81ea\u5df1\u5199\u4e2a\u7b80\u5355\u7684\u811a\u672c\uff0c\u628assh\u8d26\u53f7\u5bc6\u7801\u5199\u5165\u4e00\u4e2alist\u91cc\u9762\uff0c\n\u4eba\u61d2\u4e14\u4e3a\u4e86\u7701\u4e8b\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u73b0\u6210\u7684\u5de5\u5177\uff0c\u4e0b\u9762\u5c31\u63a8\u8350\u4e00\u4e2a\u56fe\u5f62\u754c\u9762\u7684\u5c0f\u5de5\u5177\u7ed9\u9700\u8981\u7684\u7ae5\u978b\uff1afpm2\nfpm2\u5168\u540dFigaro's Paaword Manager 2\uff0c\u662f\u4e00\u4e2a\u5f00\u6e90\u8f6f\u4ef6\uff0c\u4f7f\u7528GNU General Public License Version 2 \u534f\u8bae\uff0c\u8fd9\u91cc\u662f",(0,t.jsx)(n.a,{href:"http://als.regnet.cz/fpm2/",children:"\u5b98\u65b9\u5730\u5740"}),"\uff0c\u5b83\u8fd8\u6709android\u7248\u672c\u7684\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5728fedora\u91cc\u9762\u53ef\u4ee5\u76f4\u63a5yum\u5b89\u88c5\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"yum install fpm2"})}),"\n",(0,t.jsx)(n.p,{children:"\u5b89\u88c5\u5b8c\u6210\u540e\u7b2c\u4e00\u6b21\u8fd0\u884c\u9700\u8981\u4f60\u8f93\u5165\u4e00\u4e2a\u5bc6\u7801\uff0c\u4eca\u540e\u6bcf\u6b21\u542f\u52a8fpm2\u7684\u65f6\u5019\u5c31\u7528\u8fd9\u4e2a\u5bc6\u7801\uff0c\u9ed8\u8ba4\u5982\u679c\u5bc6\u7801\u8f93\u5165\u9519\u8bef\u6b21\u6570\u8d85\u8fc73\u6b21\uff0c\u5219\u4f60\u61c2\u7684\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6253\u5f00fpm2\u540e\uff0c\u4e00\u770b\u5c31\u660e\u767d\u5982\u4f55\u4f7f\u7528\uff0c\u5b83\u652f\u6301ssh/web\u4ee5\u53ca\u81ea\u5b9a\u4e49\u7684\u5bc6\u7801\u7ba1\u7406\uff0c\u53ef\u4ee5\u5bf9\u7ba1\u7406\u7684\u670d\u52a1\u5668\u8fdb\u884c\u5206\u7c7b\uff0c\u5341\u5206\u65b9\u4fbf\u3002\u5176\u4eae\u70b9\u662f\u4f60\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u8981\u8bbe\u7f6elauncher\uff0c\u9ed8\u8ba4\u53cc\u51fb\u5efa\u7acb\u597d\u7684\u53e3\u4ee4\u5c31\u4f1a\u81ea\u52a8\u6267\u884clauncher\u5b9a\u4e49\u7684\u547d\u4ee4\uff1b"}),"\n",(0,t.jsxs)(n.p,{children:["launcher\u91cc\u9762\u5c06\u4fdd\u5b58\u7684\u8d26\u53f7\u5bc6\u7801\u548cIP/URL\u5b9a\u4e49\u4e3a\u53c2\u6570\uff0c",(0,t.jsx)(n.code,{children:"$a ip/url"}),"  \uff0c",(0,t.jsx)(n.code,{children:"$u  username"}),"  \uff0c ",(0,t.jsx)(n.code,{children:"$p  password"}),"\uff0c \u6709\u4e86\u8fd9\u4e9b\u53d8\u91cf\u540e\u81ea\u5b9a\u4e49launcher\u5c31\u5f88\u65b9\u4fbf\u4e86\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f46\u662f\u5176\u9ed8\u8ba4\u7684ssh\u7684launcher\u662f\u4e0d\u652f\u6301\u76f4\u63a5\u53cc\u51fblist\u91cc\u9762\u7684\u9879\u76ee\u5c31\u767b\u9646\u8fdb\u670d\u52a1\u5668\u7684\uff0c\u8fd9\u4e2a\u65f6\u5019\u9700\u8981\u53e6\u5916\u4e00\u4e2a\u5c0f\u5de5\u5177sshpass\uff0c\u5b83\u7684\u7528\u5904\u662f\u767b\u9646ssh\u7684\u65f6\u5019\u53ef\u4ee5\u628a\u5bc6\u7801\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9ssh\u5ba2\u6237\u7aef\uff0c\u800c\u4e0d\u9700\u8981\u4ea4\u4e92\u5f0f\u8f93\u5165\u5bc6\u7801\uff0c\u8fd9\u4e2a\u5de5\u5177\u4ee3\u7801\u6258\u7ba1\u5728sf\uff0cfedora\u91cc\u4e5f\u53ef\u4ee5yum\u5b89\u88c5\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"yum install sshpass"})}),"\n",(0,t.jsx)(n.p,{children:"\u5149\u6709\u8fd9\u4e24\u4e2a\u5de5\u5177\u8fd8\u4e0d\u591f\uff0c\u4e0b\u9762\u662f\u5c06\u4e24\u4e2a\u5de5\u5177\u5b8c\u7f8e\u7ed3\u5408\u8d77\u6765\u7684\u5173\u952e\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"\u5728fpm2\u7684settings\u9009\u9879\u5361\u4e0b\u6709launcher\u8bbe\u7f6e\u9879\uff0c\u6253\u5f00\u4e4b\u540e\u4f60\u4f1a\u53d1\u73b0\u9ed8\u8ba4\u7684ssh launcher\uff0c\u4e0b\u9762\u662f\u6211\u81ea\u5b9a\u4e49\u7684ssh\u7684\u52a0\u8f7d\u5668\u547d\u4ee4\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"\u914d\u7f6elauncher"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"gnome-terminal -e 'sh -c \"'\"sshpass -p '\"'$p'\"' ssh  -p 22 $u@$a;sudo -s\"'\"'"})}),"\n",(0,t.jsx)(n.p,{children:"\u7279\u522b\u6ce8\u610f\u91cc\u9762\u7684\u5355\u53cc\u5f15\u53f7\u7684\u5199\u6cd5\uff0c\u4e0d\u7136\u5982\u679c\u4f60\u7684\u5bc6\u7801\u91cc\u6709\u50cf%&$\u4e4b\u7c7b\u7684\u7279\u6b8a\u7b26\u53f7\u65f6\u662f\u4f1a\u51fa\u95ee\u9898\u7684\uff0c"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"gnome-terminal -e 'xxxxx'"})," \u8fd9\u91cc\u662f\u5355\u5f15\u53f7"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'sh -c "\'" xxxxx "\'"'})," \u8fd9\u91cc\u662f\u4e24\u5bf9\u53cc\u5f15\u53f7\u4e2d\u5305\u542b\u7684\u5355\u5f15\u53f7"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"sshpass -p '\"' xxx '\"'"})," \u8fd9\u91cc\u662f\u4e24\u5bf9\u5355\u5f15\u53f7\u5305\u542b\u7684\u53cc\u5f15\u53f7"]}),"\n",(0,t.jsx)(n.p,{children:"ssh\u547d\u4ee4\u540e\u9762\u52a0\u4e2asudo -s\u7684\u4f5c\u7528\u662f\u5f53\u9000\u51fassh\u8fde\u63a5\u65f6\u4e0d\u4f1a\u7acb\u5373\u5173\u95ed\u5f53\u524d\u7684terminal\u7ec8\u7aef"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u8fd9\u4e2alauncher\u53ef\u4ee5\u901a\u6740\u6240\u6709\u7279\u6b8a\u5b57\u7b26\u7684\u5bc6\u7801\uff0c\u5728\u8fd0\u884cfpm2+sshpass\u7684\u7ec4\u5408\u524d\u8bf7\u81ea\u5df1\u4f7f\u7528\u5f53\u524d\u8fd0\u884cfpm2\u7684\u8d26\u6237\u767b\u9646ssh\u4e00\u4e0b\u8fdc\u7a0b\u670d\u52a1\u5668\u5c06\u670d\u52a1\u5668\u7684publickey\u53d6\u56de\u6765\uff0c\u6ca1\u6709key\u7684\u60c5\u51b5\u4e0bsshpass\u65e0\u6cd5\u5de5\u4f5c\u7684\u3002\u81f3\u5c11\u6211\u9047\u5230\u7684\u662f\u8fd9\u6837\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,r.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},3905:(e,n,s)=>{s.d(n,{ah:()=>i});var t=s(7294);function r(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function c(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function o(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?c(Object(s),!0).forEach((function(n){r(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function a(e,n){if(null==e)return{};var s,t,r=function(e,n){if(null==e)return{};var s,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)s=c[t],n.indexOf(s)>=0||(r[s]=e[s]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)s=c[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var l=t.createContext({}),i=function(e){var n=t.useContext(l),s=n;return e&&(s="function"==typeof e?e(n):o(o({},n),e)),s},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var s=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),d=i(s),u=r,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||c;return s?t.createElement(m,o(o({ref:n},h),{},{components:s})):t.createElement(m,o({ref:n},h))}));h.displayName="MDXCreateElement"}}]);