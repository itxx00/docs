"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9552],{2495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(5893),o=n(3905);const i={layout:"post",title:"python\u811a\u672c\u89e3\u538bgbk\u7f16\u7801zip",description:"",categories:["shell"],tags:["bash","python"]},a=void 0,p={permalink:"/notes/blog/2020/03/27/unzip-gbk-with-python",editUrl:"https://github.com/itxx00/notes/tree/main/blog/2020-03-27-unzip-gbk-with-python.md",source:"@site/blog/2020-03-27-unzip-gbk-with-python.md",title:"python\u811a\u672c\u89e3\u538bgbk\u7f16\u7801zip",description:"",date:"2020-03-27T00:00:00.000Z",formattedDate:"2020\u5e743\u670827\u65e5",tags:[{label:"bash",permalink:"/notes/blog/tags/bash"},{label:"python",permalink:"/notes/blog/tags/python"}],readingTime:.455,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"python\u811a\u672c\u89e3\u538bgbk\u7f16\u7801zip",description:"",categories:["shell"],tags:["bash","python"]},unlisted:!1,prevItem:{title:"\u4f7f\u7528rpmrebuild\u4fee\u6539rpm\u5305\u5185\u5bb9",permalink:"/notes/blog/2020/04/07/change-rpm-file-using-rpmrebuild"},nextItem:{title:"CentOS8\u5b89\u88c5\u540egrub\u83dc\u5355\u589e\u52a0windows\u5165\u53e3",permalink:"/notes/blog/2020/03/12/centos8-bootmenu-add-windows"}},s={authorsImageUrls:[]},c=[];function l(e){const t={blockquote:"blockquote",code:"code",p:"p",pre:"pre",...(0,o.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u7f16\u7801\u95ee\u9898\u5f88\u70e6\u4eba"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"gbk\u7f16\u7801\u7684zip\u5728linux\u4e0b\u89e3\u538b\u51fa\u6765\u6587\u4ef6\u540d\u4f1a\u4e71\u7801\uff0c\u53ef\u4ee5\u7528\u4e0b\u9762\u811a\u672c\u89e3\u538b\u8fc7\u7a0b\u4e2d\u8f6c\u6362\u4e0b"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'#!/usr/bin/env python2\n# coding: utf-8\n\nimport os\nimport sys\nimport zipfile\n\nf = zipfile.ZipFile(sys.argv[1],"r");\nfor n in f.namelist():\n    try:\n        u = n.decode("gbk")\n    except:\n        u = n\n    p = os.path.dirname(u)\n    if not p:\n        continue\n    if not os.path.exists(p):\n        os.makedirs(p)\n    d = file.read(n)\n    if os.path.exists(u):\n        continue\n    with open(u, "w") as o:\n        o.write(data)\n'})})]})}function u(e={}){const{wrapper:t}={...(0,o.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>c});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),b=c(n),f=o,d=b["".concat(s,".").concat(f)]||b[f]||l[f]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));u.displayName="MDXCreateElement"}}]);