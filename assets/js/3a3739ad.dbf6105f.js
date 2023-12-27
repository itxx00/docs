"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9295],{9191:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var i=r(5893),s=r(3905);const t={layout:"post",title:"shell\u811a\u672ccoding style\u603b\u7ed3",description:"",categories:["shell"],tags:["bash","coding_style"]},c=void 0,l={permalink:"/notes/blog/2014/05/23/bash-shell-coding-style",editUrl:"https://github.com/itxx00/notes/tree/main/blog/2014-05-23-bash-shell-coding-style.md",source:"@site/blog/2014-05-23-bash-shell-coding-style.md",title:"shell\u811a\u672ccoding style\u603b\u7ed3",description:"",date:"2014-05-23T00:00:00.000Z",formattedDate:"2014\u5e745\u670823\u65e5",tags:[{label:"bash",permalink:"/notes/blog/tags/bash"},{label:"coding_style",permalink:"/notes/blog/tags/coding-style"}],readingTime:4.88,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"shell\u811a\u672ccoding style\u603b\u7ed3",description:"",categories:["shell"],tags:["bash","coding_style"]},unlisted:!1,prevItem:{title:"NGINX\u6027\u80fd\u8c03\u4f18\u7b80\u8981",permalink:"/notes/blog/2014/10/19/nginx-perf-tun"},nextItem:{title:"Systemd\u57fa\u672c\u4f7f\u7528\u4ecb\u7ecd",permalink:"/notes/blog/2014/04/08/systemd-basic-usage"}},o={authorsImageUrls:[]},d=[];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u8fd9\u91cc\u603b\u7ed3\u4e86\u4e2a\u4eba\u6bd4\u8f83\u63a8\u5d07\u7684shell\u811a\u672ccoding style\uff0c\u7f16\u5199\u51fa\u65b9\u4fbf\u9605\u8bfb\u548c\u7ef4\u62a4\u7684\u811a\u672c\u662f\u8fd0\u7ef4\u4eba\u5458\u7684\u57fa\u672c\u64cd\u5b88\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"1.\u5173\u4e8e\u7f29\u8fdb\uff1a \u4e00\u4e2atab\u5b9a\u4e49\u4e3a4\u4e2a\u7a7a\u683c\uff1b\n\u5173\u4e8e\u8fd9\u4e2a\u7f29\u8fdb\u8ddd\u79bb\u8c8c\u4f3c\u6709\u592a\u591a\u7684\u7684\u8bf4\u6cd5\u4e86\uff0c\u6709\u7684\u4f1a\u75288\u4e2a\u7a7a\u683c\uff0c\u6709\u7684\u75282\u4e2a\u7a7a\u683c\uff0c\u8fd8\u6709\u7684\u75284\u4e2a\u7a7a\u683c\uff1b\u4e0d\u8fc7\u6700\u7ec8\u53d6\u51b3\u4e8e\u56e2\u961f\u98ce\u683c\u3002\u4f46\u662f\u8bb0\u4f4f\uff0c\u6b63\u786e\u7684\u505a\u6cd5\u662f\u9879\u76ee\u3001\u6587\u4ef6\u3001\u6210\u5458\u95f4\u5168\u90e8\u7edf\u4e00\uff0c\u5343\u4e07\u4e0d\u8981\u51fa\u73b0\u4e00\u4e2a\u9879\u76ee\u5185\u5404\u79cd\u7f29\u8fdb\uff0ctab\u548c\u7a7a\u683c\u6df7\u7528\uff0c\u751a\u81f3\u4e00\u4e2a\u6587\u4ef6\u4e2d\u7684\u7f29\u8fdb\u90fd\u4e0d\u7edf\u4e00\u7684\u60c5\u51b5\u3002\u5728vim\u4e2d\u8bbe\u7f6e\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"set ts=4\nset sw=4\nset expandtab\n"})}),"\n",(0,i.jsx)(n.p,{children:"2.\u5c3d\u91cf\u7f29\u77ed\u5355\u884c\u7684\u957f\u5ea6\uff0c\u6700\u597d\u4e0d\u8d85\u8fc772\u5b57\u7b26\uff08\u6ce8\u610f\uff1a\u8fd9\u4e2a\u9650\u5236\u56e0\u5386\u53f2\u539f\u56e0\u5bfc\u81f4\uff0c\u4e3a\u4e86\u517c\u5bb9\u90a3\u4e9b\u8001\u7684\u7ec8\u7aef\u8bbe\u5907\u800c\u8003\u8651\uff0c\u5b9e\u9645\u4e0a\u73b0\u5728\u5df2\u7ecf\u4e0d\u9002\u7528\u4e86\uff0c\u5355\u884c\u4ee3\u7801\u53ef\u4ee5\u66f4\u957f\uff0c\u53ea\u8981\u4e0d\u8981\u8d85\u8fc7\u5927\u591a\u6570\u5c4f\u5e55\u7684\u8f93\u51fa\u5bbd\u5ea6\u5c31\u597d\uff09"}),"\n",(0,i.jsx)(n.p,{children:"bad:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"thisisaverylongline || thisisanotherlongline\n"})}),"\n",(0,i.jsx)(n.p,{children:"good:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"thisisaverylongline ||\n    thisisanotherlongline\n"})}),"\n",(0,i.jsx)(n.p,{children:"3.\u6ce8\u91ca\u5c3d\u91cf\u4fdd\u6301\u6e05\u6670\u7684\u5c42\u6b21,#\u53f7\u4e0e\u6ce8\u91ca\u6587\u672c\u95f4\u4fdd\u6301\u4e00\u4e2a\u7a7a\u683c\u4ee5\u793a\u548c\u4ee3\u7801\u7684\u533a\u5206"}),"\n",(0,i.jsx)(n.p,{children:"bad:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"#this is a comment\n#this is a code line\n"})}),"\n",(0,i.jsx)(n.p,{children:"good:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# this is a comment\n#this is code line\n"})}),"\n",(0,i.jsx)(n.p,{children:"4.\u5b9a\u4e49\u51fd\u6570\u53ef\u4ee5\u4e0d\u7528\u5199function\u5173\u952e\u5b57\uff0c\u51fd\u6570\u540d\u5b57\u5c3d\u91cf\u77ed\u5c0f\u65e0\u6b67\u4e49\uff0c\u5c3d\u91cf\u4f20\u9012\u8fd4\u56de\u503c"}),"\n",(0,i.jsx)(n.p,{children:"bad:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"function  cmd1\n"})}),"\n",(0,i.jsx)(n.p,{children:"good:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cmd_start() {\n   dosomethinghere\n   return 0\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"5.\u5168\u5c40\u53d8\u91cf\u7528\u5927\u5199\uff0c\u5c40\u90e8\u53d8\u91cf\u7528\u5c0f\u5199\uff0c\u51fd\u6570\u5185\u5c3d\u91cf\u4e0d\u8981\u4f7f\u7528\u5168\u5c40\u53d8\u91cf\uff0c\u4ee5\u514d\u6df7\u6dc6\u5bfc\u81f4\u53d8\u91cf\u8986\u76d6,\u6ce8\u610f\u5c3d\u91cf\u4f7f\u7528\u5c0f\u5199\u8868\u793a\u53d8\u91cf"}),"\n",(0,i.jsx)(n.p,{children:"bad:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"foo() {\n    a=2\n    echo $a\n}\na=1\necho $a\n"})}),"\n",(0,i.jsx)(n.p,{children:"good:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"foo(){\n    local a\n    a=2\n    echo $a\n}\nA=1\necho $A\n"})}),"\n",(0,i.jsx)(n.p,{children:"6.\u4f7f\u7528\u5185\u5efa\u7684[] \u3001[[]] \u8fdb\u884c\u6761\u4ef6\u6d4b\u8bd5\uff0c\u907f\u514d\u4f7f\u7528test\u547d\u4ee4"}),"\n",(0,i.jsx)(n.p,{children:"bad:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"test -f filename\n"})}),"\n",(0,i.jsx)(n.p,{children:"good:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[ -f filename ]\n[[ -n $string ]]\n"})}),"\n",(0,i.jsx)(n.p,{children:"7.\u4f7f\u7528$(())\u8fdb\u884c\u666e\u901a\u8fd0\u7b97\uff0c\u5c3d\u91cf\u907f\u514d\u4f7f\u7528expr\u6216\u5176\u4ed6\u5916\u90e8\u547d\u4ee4 $[]\u4e5f\u53ef\u7528\u4e8e\u8ba1\u7b97"}),"\n",(0,i.jsx)(n.p,{children:"bad:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"num=$(expr 1 + 1)\n"})}),"\n",(0,i.jsx)(n.p,{children:"good:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"num=$((1+1))\nnum=$[1+2]\n"})}),"\n",(0,i.jsx)(n.p,{children:"8.\u7ba1\u9053\u7b26\u5de6\u53f3\u90fd\u5e94\u52a0\u7a7a\u683c\uff0c\u91cd\u5b9a\u5411\u7b26\u7a7a\u683c\u52a0\u5de6\u4e0d\u52a0\u53f3"}),"\n",(0,i.jsx)(n.p,{children:"bad:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"find /data -name tmp*|xargs rm -fr\ncat a>b\n"})}),"\n",(0,i.jsx)(n.p,{children:"good:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"find /data -name tmp* | xargs rm -fr\ncat a >b\n"})}),"\n",(0,i.jsxs)(n.p,{children:["9.\u5f53",(0,i.jsx)(n.code,{children:"source"}),"\u547d\u4ee4\u5c5e\u4e8e\u5916\u90e8\u547d\u4ee4\u7684\u65f6\u5019\uff0c\u6211\u4eec\u5e94\u5c3d\u91cf\u4f7f\u7528",(0,i.jsx)(n.code,{children:"."}),"   \uff0c\u5f53\u89c6\u529b\u4e0d\u597d\u6015\u5199\u9519\u770b\u9519\u7684\u65f6\u5019\uff0c\u5e94\u5c3d\u91cf\u4e0d\u7528",(0,i.jsx)(n.code,{children:"."}),"\u800c\u7528",(0,i.jsx)(n.code,{children:"source"}),"\uff0c\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\u6211\u4eec\u53d1\u73b0",(0,i.jsx)(n.code,{children:"."}),"\u53f7\u6781\u96be\u8fa8\u8ba4\uff0c\u8fd9\u91cc\u63a8\u8350\u4f7f\u7528source\u547d\u4ee4\uff0c\u66f4\u65b9\u4fbf\u7ef4\u62a4\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"bad:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:". func_file\n"})}),"\n",(0,i.jsx)(n.p,{children:"good:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"source func_file\n"})}),"\n",(0,i.jsx)(n.p,{children:"10.if \u548c then \u4e4b\u95f4\u4f7f\u7528\u5206\u53f7+\u7a7a\u683c\u5206\u9694\uff0c\u4e0d\u8981\u7528\u6362\u884c\uff0c\u4e66\u5199\u4e0a\u548cc style\u7c7b\u4f3c\uff1a"}),"\n",(0,i.jsx)(n.p,{children:"bad:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"grep string logfile\nif [ $? -ne 0 ]\nthen\n  dosomething\nfi\n\nwhile 1\ndo\n  do something here\ndone\n"})}),"\n",(0,i.jsx)(n.p,{children:"good:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"if grep string logfile; then\n    dosomething\nfi\n\nwhile 1; do\n   do something here\ndone\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6ce8\u610f;\u548cthen\u95f4\u6709\u4e00\u4e2a\u7a7a\u683c\u7684\u8ddd\u79bb"}),"\n",(0,i.jsx)(n.p,{children:"11.\u5982\u679cgrep\u80fd\u76f4\u63a5\u5904\u7406\u6587\u4ef6\u8f93\u5165\u90a3\u5c31\u4e0d\u8981\u548ccat\u8fde\u7528; \u5982\u679cwc\u80fd\u76f4\u63a5\u4ece\u6587\u4ef6\u7edf\u8ba1\u5c31\u4e0d\u8981\u548ccat\u8fde\u7528; \u5982\u679cgrep\u80fd\u7edf\u8ba1\u884c\u6570\u5c31\u4e0d\u8981\u548cwc\u8fde\u7528"}),"\n",(0,i.jsx)(n.p,{children:"bad:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cat file | grep tring\ncat file.list | wc -l\ngrep avi av.list | wc -l\n"})}),"\n",(0,i.jsx)(n.p,{children:"good:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"grep tring file\nwc -l file.list\ngrep -c avi av.list\n"})}),"\n",(0,i.jsx)(n.p,{children:"12.\u5982\u679cawk\u7684\u65f6\u5019\u9700\u8981\u641c\u7d22\u6070\u597dawk\u53c8\u80fd\u641c\u7d22\uff0c\u90a3\u4e48\u5c31\u4e0d\u8981\u518d\u548cgrep\u8fde\u7528"}),"\n",(0,i.jsx)(n.p,{children:"bad:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"dosomething | grep tring | awk '{print $1}'\n"})}),"\n",(0,i.jsx)(n.p,{children:"good:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"dosomething | awk '/tring/' '{print $1}'\n"})}),"\n",(0,i.jsx)(n.p,{children:"13\u3001\u5c3d\u91cf\u7f16\u5199\u517c\u5bb9\u65e7\u7248\u672cshell\u98ce\u683c\u4e14\u542b\u4e49\u6e05\u6670\u7684\u4ee3\u7801\uff0c\u4e0d\u63a8\u8350\u4e0d\u517c\u5bb9\u5199\u6cd5\u6216\u8005\u4e0d\u65b9\u4fbf\u4ed6\u4eba\u7ef4\u62a4\u7684\u4ee3\u7801"}),"\n",(0,i.jsx)(n.p,{children:"bad:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"do_some_thing |& do_another_thing\ndo_some_thing &>> some_where\n"})}),"\n",(0,i.jsx)(n.p,{children:"good:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"do_some_thing 2>&1 | do_another_thing\ndo_some_thing >some_where 2>&1\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"\u6ce8\u610f"})})," : \u4ee5\u4e0a\u4ec5\u4ee3\u8868\u4e2a\u4eba\u4e60\u60ef\u548c\u7406\u89e3\uff0c\u5e76\u4e0d\u80fd\u9002\u7528\u4e8e\u6240\u6709\u4eba\uff0c\u9002\u5408\u7684\u624d\u662f\u6700\u597d\u7684\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u62d3\u5c55\u9605\u8bfb\u6587\u6863\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"http://kodango.me/simple-bash-programming-skills",children:"http://kodango.me/simple-bash-programming-skills"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"http://kodango.me/simple-bash-programming-skills-2",children:"http://kodango.me/simple-bash-programming-skills-2"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"http://www.commandlinefu.com/commands/browse",children:"http://www.commandlinefu.com/commands/browse"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"http://wiki.bash-hackers.org/scripting/style",children:"http://wiki.bash-hackers.org/scripting/style"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.ah)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3905:(e,n,r)=>{r.d(n,{ah:()=>d});var i=r(7294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,i,s=function(e,n){if(null==e)return{};var r,i,s={},t=Object.keys(e);for(i=0;i<t.length;i++)r=t[i],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)r=t[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=i.createContext({}),d=function(e){var n=i.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},a=i.forwardRef((function(e,n){var r=e.components,s=e.mdxType,t=e.originalType,o=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),p=d(r),j=s,x=p["".concat(o,".").concat(j)]||p[j]||h[j]||t;return r?i.createElement(x,c(c({ref:n},a),{},{components:r})):i.createElement(x,c({ref:n},a))}));a.displayName="MDXCreateElement"}}]);