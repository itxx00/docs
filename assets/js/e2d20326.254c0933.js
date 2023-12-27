"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[497],{1840:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var r=t(5893),i=t(3905);const c={layout:"post",title:"HIVE\u4e2d\u5e38\u89c1\u7684\u5c0f\u6587\u4ef6\u5408\u5e76\u65b9\u6cd5",description:"hive\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u5e94\u5c3d\u91cf\u907f\u514d\u4ea7\u751f\u5c0f\u6587\u4ef6",categories:["bigdata"],tags:["hive"]},l=void 0,a={permalink:"/notes/blog/2019/09/02/hive-small-file",editUrl:"https://github.com/itxx00/notes/tree/main/blog/2019-09-02-hive-small-file.md",source:"@site/blog/2019-09-02-hive-small-file.md",title:"HIVE\u4e2d\u5e38\u89c1\u7684\u5c0f\u6587\u4ef6\u5408\u5e76\u65b9\u6cd5",description:"hive\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u5e94\u5c3d\u91cf\u907f\u514d\u4ea7\u751f\u5c0f\u6587\u4ef6",date:"2019-09-02T00:00:00.000Z",formattedDate:"2019\u5e749\u67082\u65e5",tags:[{label:"hive",permalink:"/notes/blog/tags/hive"}],readingTime:.755,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"HIVE\u4e2d\u5e38\u89c1\u7684\u5c0f\u6587\u4ef6\u5408\u5e76\u65b9\u6cd5",description:"hive\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u5e94\u5c3d\u91cf\u907f\u514d\u4ea7\u751f\u5c0f\u6587\u4ef6",categories:["bigdata"],tags:["hive"]},unlisted:!1,prevItem:{title:"shell style guide",permalink:"/notes/blog/2020/01/03/shell-standards"},nextItem:{title:"\u7cfb\u7edf\u4e2d\u7684\u968f\u673a\u6570\u548c\u71b5\u503c",permalink:"/notes/blog/2019/05/12/random-and-entropy-in-centos7"}},s={authorsImageUrls:[]},o=[{value:"hive\u7684\u6587\u4ef6\u4ea7\u751f\u8fc7\u7a0b",id:"hive\u7684\u6587\u4ef6\u4ea7\u751f\u8fc7\u7a0b",level:2},{value:"\u5c0f\u6587\u4ef6\u592a\u591a\u7684\u5f71\u54cd",id:"\u5c0f\u6587\u4ef6\u592a\u591a\u7684\u5f71\u54cd",level:2},{value:"\u4e3a\u4ec0\u4e48\u4f1a\u4ea7\u751f\u5c0f\u6587\u4ef6",id:"\u4e3a\u4ec0\u4e48\u4f1a\u4ea7\u751f\u5c0f\u6587\u4ef6",level:2},{value:"\u5982\u4f55\u5904\u7406\u5c0f\u6587\u4ef6",id:"\u5982\u4f55\u5904\u7406\u5c0f\u6587\u4ef6",level:2},{value:"case 1",id:"case-1",level:3},{value:"case 2",id:"case-2",level:3},{value:"case 3",id:"case-3",level:3},{value:"case 4",id:"case-4",level:3},{value:"case 5",id:"case-5",level:3}];function d(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u4ecb\u7ecdhive\u5c0f\u6587\u4ef6\u5e38\u89c1\u5904\u7406\u65b9\u6cd5"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"hive\u7684\u6587\u4ef6\u4ea7\u751f\u8fc7\u7a0b",children:"hive\u7684\u6587\u4ef6\u4ea7\u751f\u8fc7\u7a0b"}),"\n",(0,r.jsx)(n.h2,{id:"\u5c0f\u6587\u4ef6\u592a\u591a\u7684\u5f71\u54cd",children:"\u5c0f\u6587\u4ef6\u592a\u591a\u7684\u5f71\u54cd"}),"\n",(0,r.jsx)(n.h2,{id:"\u4e3a\u4ec0\u4e48\u4f1a\u4ea7\u751f\u5c0f\u6587\u4ef6",children:"\u4e3a\u4ec0\u4e48\u4f1a\u4ea7\u751f\u5c0f\u6587\u4ef6"}),"\n",(0,r.jsx)(n.h2,{id:"\u5982\u4f55\u5904\u7406\u5c0f\u6587\u4ef6",children:"\u5982\u4f55\u5904\u7406\u5c0f\u6587\u4ef6"}),"\n",(0,r.jsx)(n.h3,{id:"case-1",children:"case 1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"INSERT OVERWRITE TABLE tb1\n    SELECT * FROM tb2\nORDER BY 1;\nALTER TABLE tb2 RENAME TO b_tb2;\nALTER TABLE tb1 RENAME TO tb2;\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"case-2",children:"case 2"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"INSERT TABLE tb1\nSELECT c1, c2 FROM (\n    SELECT c1, c2\n    FROM tb2\n    WHERE xxx\n      AND xxx\n) t\nORDER BY c1, c2;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"case-3",children:"case 3"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"SELECT c1\nFROM  (\n    xxx\n) t\nGROUP BY x;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"case-4",children:"case 4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"INSERT OVERWRITE TABLE tb1\nSELECT\n    xxx\nFROM\n    xxx\n    WHERE\n        xxx) t\ndistribute by rand();\n"})}),"\n",(0,r.jsx)(n.h3,{id:"case-5",children:"case 5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"INSERT TABLE tb1\nSELECT c1,c2\nFROM tb2\nWHERE xxx\nsort by c1;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3905:(e,n,t)=>{t.d(n,{ah:()=>o});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),o=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),p=o(t),u=i,b=p["".concat(s,".").concat(u)]||p[u]||d[u]||c;return t?r.createElement(b,l(l({ref:n},h),{},{components:t})):r.createElement(b,l({ref:n},h))}));h.displayName="MDXCreateElement"}}]);