"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3008],{3905:(t,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>h});var n=o(7294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function l(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function u(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)o=l[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)o=l[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),m=s(o),h=r,g=m["".concat(p,".").concat(h)]||m[h]||i[h]||l;return o?n.createElement(g,a(a({ref:e},c),{},{components:o})):n.createElement(g,a({ref:e},c))}));function h(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=o.length,a=new Array(l);a[0]=m;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:r,a[1]=u;for(var s=2;s<l;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4836:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>i,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const l={layout:"post",title:"\u5f88\u8be1\u5f02\u7684\u670d\u52a1\u65e5\u5fd7\u65e0\u6cd5\u5207\u5272\u95ee\u9898\u5206\u6790",description:"\u9047\u5230\u67d0\u670d\u52a1\u8fdb\u7a0b\u4ea7\u751f\u7684\u65e5\u5fd7\u59cb\u7ec8\u65e0\u6cd5\u5207\u5272\uff0c\u539f\u6765\u539f\u56e0\u5728\u8fd9\u91cc",categories:["system"],tags:["system","shell"]},a=void 0,u={permalink:"/notes/blog/2017/10/19/bash-nohup-log-truncate",editUrl:"https://github.com/itxx00/notes/tree/main/blog/2017-10-19-bash-nohup-log-truncate.md",source:"@site/blog/2017-10-19-bash-nohup-log-truncate.md",title:"\u5f88\u8be1\u5f02\u7684\u670d\u52a1\u65e5\u5fd7\u65e0\u6cd5\u5207\u5272\u95ee\u9898\u5206\u6790",description:"\u9047\u5230\u67d0\u670d\u52a1\u8fdb\u7a0b\u4ea7\u751f\u7684\u65e5\u5fd7\u59cb\u7ec8\u65e0\u6cd5\u5207\u5272\uff0c\u539f\u6765\u539f\u56e0\u5728\u8fd9\u91cc",date:"2017-10-19T00:00:00.000Z",formattedDate:"2017\u5e7410\u670819\u65e5",tags:[{label:"system",permalink:"/notes/blog/tags/system"},{label:"shell",permalink:"/notes/blog/tags/shell"}],readingTime:3.205,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"\u5f88\u8be1\u5f02\u7684\u670d\u52a1\u65e5\u5fd7\u65e0\u6cd5\u5207\u5272\u95ee\u9898\u5206\u6790",description:"\u9047\u5230\u67d0\u670d\u52a1\u8fdb\u7a0b\u4ea7\u751f\u7684\u65e5\u5fd7\u59cb\u7ec8\u65e0\u6cd5\u5207\u5272\uff0c\u539f\u6765\u539f\u56e0\u5728\u8fd9\u91cc",categories:["system"],tags:["system","shell"]},prevItem:{title:"CentOS7\u7cfb\u7edf\u5b89\u88c5ansible awx\u8bb0\u5f55",permalink:"/notes/blog/2017/12/20/centos7-install-ansible-awx"},nextItem:{title:"HADOOP3.0.0\u7ea0\u5220\u7801\u6d4b\u8bd5",permalink:"/notes/blog/2017/08/20/hadoop3-ec-test"}},p={authorsImageUrls:[]},s=[{value:"\u95ee\u9898\u73b0\u8c61",id:"\u95ee\u9898\u73b0\u8c61",level:2},{value:"\u6a21\u62df",id:"\u6a21\u62df",level:2},{value:"\u89e3\u51b3\u65b9\u6cd5",id:"\u89e3\u51b3\u65b9\u6cd5",level:2}],c={toc:s};function i(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9047\u5230\u67d0\u670d\u52a1\u8fdb\u7a0b\u4ea7\u751f\u7684\u65e5\u5fd7\u59cb\u7ec8\u65e0\u6cd5\u5207\u5272\uff0c\u539f\u6765\u539f\u56e0\u5728\u8fd9\u91cc")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,r.kt)("h2",{id:"\u95ee\u9898\u73b0\u8c61"},"\u95ee\u9898\u73b0\u8c61"),(0,r.kt)("p",null,"\u67d0\u4e1a\u52a1\u673a\u5668\u56e0\u78c1\u76d8\u5bb9\u91cf\u8d85\u8fc7\u9608\u503c\u6536\u5230\u544a\u8b66\uff0c\u5206\u6790\u53d1\u73b0\u662f\u7531\u4e8e\u8be5\u673a\u5668\u4e0a\u67d0\u4e2a\u670d\u52a1\u8fdb\u7a0b\u4ea7\u751f\u7684\u65e5\u5fd7\u6587\u4ef6\u91cf\u592a\u5927\uff0c\u4e14\u65e5\u5fd7\u6587\u4ef6\u672a\u6309\u5468\u671f\u5207\u5272\uff0c\u8fdb\u800c\u5bfc\u81f4\u5386\u53f2\u65e5\u5fd7\u4fe1\u606f\u79ef\u7d2f\u5230\u5355\u4e2a\u65e5\u5fd7\u6587\u4ef6\u4e2d\u3002\n\u672a\u907f\u514d\u6545\u969c\u53d1\u751f\u91c7\u53d6\u4e34\u65f6\u63aa\u65bd\u624b\u5de5\u5207\u5272\u8be5\u65e5\u5fd7\u6587\u4ef6\uff0c\u7531\u4e8e\u8be5\u670d\u52a1\u8fdb\u7a0b\u5e76\u672a\u63d0\u4f9b\u5185\u7f6e\u7684\u65e5\u5fd7\u5207\u5272\uff0c\u56e0\u6b64\u624b\u5de5\u6a21\u62df\u7c7b\u4f3clogrotate\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"copytruncate"),"\u6a21\u5f0f\u5bf9\u65e5\u5fd7\u8fdb\u884c\u5207\u5272\u3002\n\u4f46\u5728\u5c06\u65e5\u5fd7truncate\u4e4b\u540e\uff0c\u5947\u602a\u7684\u4e00\u5e55\u53d1\u751f\u4e86\uff0c\u901a\u8fc7ls\u67e5\u770b\u6587\u4ef6\u5927\u5c0f\u53d1\u73b0\u5e76\u672a\u51cf\u5c11\uff0c\u76f4\u89c9\u5224\u65ad\u8fd9\u53ef\u80fd\u662f\u6587\u4ef6\u53e5\u67c4\u4e00\u76f4\u5904\u4e8e\u6253\u5f00\u72b6\u6001\u4e14\u504f\u79fb\u91cf\u672a\u53d1\u751f\u6539\u53d8\u5bfc\u81f4\u3002\n\u5728\u8fdb\u4e00\u6b65\u68c0\u67e5\u4e86\u8be5\u8fdb\u7a0b\u7684\u542f\u52a8\u65b9\u5f0f\u4e4b\u540e\uff0c\u53d1\u73b0\u8be5\u8fdb\u7a0b\u901a\u8fc7nohup\u542f\u52a8\uff0c\u5e76\u5c06\u6807\u51c6\u8f93\u51fa\u91cd\u5b9a\u5411\u5230\u6301\u7eed\u589e\u5927\u7684\u65e5\u5fd7\u6587\u4ef6\u4e2d\u3002"),(0,r.kt)("h2",{id:"\u6a21\u62df"},"\u6a21\u62df"),(0,r.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u4e0b\u9762\u51e0\u884c\u811a\u672c\u6765\u6a21\u62df\u6b64\u73b0\u8c61\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"#!/bin/bash\nwhile true; do\n    sleep 1\n    head -5000 /dev/urandom\ndone\n")),(0,r.kt)("p",null,"\u811a\u672c\u542f\u52a8\u540e\u4f1a\u6709\u4e00\u4e2a\u5e38\u9a7b\u8fdb\u7a0b\u6bcf\u4e2a1\u79d2\u949f\u8f93\u51fa\u4e00\u5806\u5b57\u7b26\u4e32\u4ee5\u6b64\u6765\u6a21\u62df\u65e5\u5fd7\u6587\u4ef6\u589e\u6da8\uff0c\u6211\u4eec\u6309\u7167\u4ee5\u4e0b\u65b9\u5f0f\u542f\u52a8\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"nohup ./daemon.sh >out.log 2>&1 < /dev/null &\n")),(0,r.kt)("p",null,"\u7b49\u5f85\u4e00\u4f1a\u4e4b\u540e\u6211\u4eec\u89c2\u5bdf\u5230\u65e5\u5fd7\u5df2\u7ecf\u5199\u5165\u4e86"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@localhost t]# ll -h out.log ;du -h out.log \n-rw-r--r-- 1 root root 64M Oct 19 17:41 out.log\n64M   out.log\n")),(0,r.kt)("p",null,"\u63a5\u7740\u5c06\u65e5\u5fd7\u6587\u4ef6\u6e05\u7a7a\uff0c\u518d\u89c2\u5bdf\u6587\u4ef6\u5927\u5c0f\u53d8\u5316"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[root@localhost t]# \n[root@localhost t]# truncate -s0 out.log              \n[root@localhost t]# ll -h out.log ;du -h out.log \n-rw-r--r-- 1 root root 93M Oct 19 17:41 out.log\n4.0M  out.log\n")),(0,r.kt)("p",null,"\u8fd9\u65f6\u53ef\u4ee5\u770b\u5230\uff0c\u867d\u7136\u6587\u4ef6\u88ab\u6e05\u7a7a\u4e86\uff0c\u4f46\u662fls\u770b\u5230\u7684\u5927\u5c0f\u4f9d\u7136\u6ca1\u6709\u53d1\u751f\u53d8\u5316\uff0c\u4e5f\u5c31\u662f\u8bf4\u6587\u4ef6\u4e2d\u4ea7\u751f\u4e86\u5927\u91cf\u7a7a\u6d1e\u3002"),(0,r.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6cd5"},"\u89e3\u51b3\u65b9\u6cd5"),(0,r.kt)("p",null,"\u5c06nohup\u542f\u52a8\u8fdb\u7a0b\u540e\u7684\u8f93\u51fa\u91cd\u5b9a\u5411 ",(0,r.kt)("inlineCode",{parentName:"p"},">")," \u66ff\u6362\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},">>"),"\uff0c \u5373\u6539\u4e3aappend\u6a21\u5f0f\u6765\u5199\u5165\u65e5\u5fd7\uff0c\u8fd9\u65f6\u518dtruncate\u5c31\u4e0d\u4f1a\u51fa\u73b0\u4e0a\u9762\u7684\u95ee\u9898\u4e86\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," nohup ./daemon.sh >>out.log 2>&1  </dev/null &\n \n \n[root@localhost t]# ll -h out.log ;du -h out.log \n-rw-r--r-- 1 root root 48M Oct 19 19:43 out.log\n64M   out.log\n[root@localhost t]# ll -h out.log ;du -h out.log \n-rw-r--r-- 1 root root 77M Oct 19 19:43 out.log\n128M  out.log\n[root@localhost t]# truncate -s0 out.log              \n[root@localhost t]# ll -h out.log ;du -h out.log \n-rw-r--r-- 1 root root 1.3M Oct 19 19:43 out.log\n2.0M  out.log\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\u7559\u4e00\u4e2a\u95ee\u9898\uff1a \u4e3a\u4ec0\u4e48\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"append"),"\u6a21\u5f0f\u5c31\u4e0d\u4f1a\u51fa\u73b0\u8fd9\u4e2a\u95ee\u9898\uff1f"),(0,r.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a"),(0,r.kt)("p",null,"[1]"," ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/bash/manual/bash.html#Redirections"},"https://www.gnu.org/software/bash/manual/bash.html#Redirections")),(0,r.kt)("p",null,"[2]"," ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/coreutils/manual/html_node/nohup-invocation.html"},"https://www.gnu.org/software/coreutils/manual/html_node/nohup-invocation.html")))}i.isMDXComponent=!0}}]);