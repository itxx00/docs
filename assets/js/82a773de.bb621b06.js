"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2717],{3905:(e,l,t)=>{t.d(l,{Zo:()=>p,kt:()=>g});var n=t(7294);function a(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function s(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?s(Object(t),!0).forEach((function(l){a(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function o(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var h=n.createContext({}),i=function(e){var l=n.useContext(h),t=l;return e&&(t="function"==typeof e?e(l):r(r({},l),e)),t},p=function(e){var l=i(e.components);return n.createElement(h.Provider,{value:l},e.children)},u={inlineCode:"code",wrapper:function(e){var l=e.children;return n.createElement(n.Fragment,{},l)}},b=n.forwardRef((function(e,l){var t=e.components,a=e.mdxType,s=e.originalType,h=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=i(t),g=a,c=b["".concat(h,".").concat(g)]||b[g]||u[g]||s;return t?n.createElement(c,r(r({ref:l},p),{},{components:t})):n.createElement(c,r({ref:l},p))}));function g(e,l){var t=arguments,a=l&&l.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=b;var o={};for(var h in l)hasOwnProperty.call(l,h)&&(o[h]=l[h]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var i=2;i<s;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},1901:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>h,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var n=t(7462),a=(t(7294),t(3905));const s={layout:"post",title:"\u4e3aBash\u589e\u52a0\u547d\u4ee4\u6267\u884c\u65e5\u5fd7",description:"descripts a method for adding history logging on bash shell",categories:["shell"],tags:["bash","hitory logging"],redirect_from:["/2011/02/17/"]},r=void 0,o={permalink:"/notes/blog/2011/02/17/bash-history-logging",editUrl:"https://github.com/itxx00/notes/tree/main/blog/2011-02-17-bash-history-logging.md",source:"@site/blog/2011-02-17-bash-history-logging.md",title:"\u4e3aBash\u589e\u52a0\u547d\u4ee4\u6267\u884c\u65e5\u5fd7",description:"descripts a method for adding history logging on bash shell",date:"2011-02-17T00:00:00.000Z",formattedDate:"2011\u5e742\u670817\u65e5",tags:[{label:"bash",permalink:"/notes/blog/tags/bash"},{label:"hitory logging",permalink:"/notes/blog/tags/hitory-logging"}],readingTime:13.585,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"\u4e3aBash\u589e\u52a0\u547d\u4ee4\u6267\u884c\u65e5\u5fd7",description:"descripts a method for adding history logging on bash shell",categories:["shell"],tags:["bash","hitory logging"],redirect_from:["/2011/02/17/"]},prevItem:{title:"\u4f7f\u7528wpa-supplicant\u914d\u7f6e\u65e0\u7ebf\u7f51\u7edc",permalink:"/notes/blog/2011/05/05/centos-wpa-supplicant-wireless"}},h={authorsImageUrls:[]},i=[{value:"\u4e00\uff1abash\u4e3a\u4f55\u9700\u8981logging",id:"\u4e00bash\u4e3a\u4f55\u9700\u8981logging",level:2},{value:"\u4e8c\uff1a\u52a0\u56fabash_history",id:"\u4e8c\u52a0\u56fabash_history",level:2},{value:"\u7b2c1\u6b65",id:"\u7b2c1\u6b65",level:3},{value:"\u7b2c2\u6b65",id:"\u7b2c2\u6b65",level:3},{value:"\u7b2c3\u6b65",id:"\u7b2c3\u6b65",level:3},{value:"\u4e09\uff1a\u653b\u7834logging\u673a\u5236",id:"\u4e09\u653b\u7834logging\u673a\u5236",level:2},{value:"\u56db\uff1aHacking bash-\u4f7f\u7528syslog\u65e5\u5fd7\u63a5\u53e3",id:"\u56dbhacking-bash-\u4f7f\u7528syslog\u65e5\u5fd7\u63a5\u53e3",level:2},{value:"\u4e94\uff1a\u603b\u7ed3",id:"\u4e94\u603b\u7ed3",level:2},{value:"\u516d\uff1a\u53c2\u8003\u8d44\u6599",id:"\u516d\u53c2\u8003\u8d44\u6599",level:2}],p={toc:i};function u(e){let{components:l,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u5c06\u4fee\u6539bash\u7684\u6e90\u7801\u6765\u5b9e\u73b0\u201d\u65e0\u654c\u201dlogging\u673a\u5236\uff0c\u4e5f\u5c06\u770b\u5230\u201d\u65e0\u654c\u201d\u5e76\u4e0d\u662f\u771f\u6b63\u7684\u65e0\u654c\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,a.kt)("h2",{id:"\u4e00bash\u4e3a\u4f55\u9700\u8981logging"},"\u4e00\uff1abash\u4e3a\u4f55\u9700\u8981logging"),(0,a.kt)("p",null,"Bash\u582a\u79f0*nix\u4e16\u754c\u4f7f\u7528\u6700\u5e7f\u6cdb\u7684shell\uff0c\u5176\u7279\u6027\u4e4b\u4e00\u662f\u5386\u53f2\u547d\u4ee4(history)\u673a\u5236\u3002\u6b64\u673a\u5236\u4e3b\u8981\u7528\u4e8e\u4e3a\u7528\u6237\u63d0\u4f9b\u65b9\u4fbf\uff0d\uff0d\u5c11\u6572\u51e0\u4e0b\u952e\u76d8\uff0c\u63d0\u9ad8\u5de5\u4f5c\u6548\u7387\u3002\u7136\u800c\uff0c\u88ab\u5e7f\u6cdb\u8ba8\u8bba\u7684\u662fbash_history\u53ef\u4ee5\u7528\u4f5clogging\u673a\u5236\u4ee5\u6b64\u6765\u76d1\u63a7\u7528\u6237\u7684\u6d3b\u52a8\u3002\u6b64\u6587\u5c06\u5bf9\u4e0a\u8ff0\u95ee\u9898\u8fdb\u884c\u8ba8\u8bba\u5e76\u89e3\u91ca\u4e3a\u5565logging\u673a\u5236\u5728\u5c11\u6570\u4eba\u9762\u524d\u4f1a\u5931\u6548\u3002\u6211\u4eec\u5c06\u89c1\u5230\u5404\u79cd\u7528\u4e8e\u4fdd\u62a4history\u6587\u4ef6\u7684\u9632\u5fa1\u63aa\u65bd\u662f\u5982\u4f55\u4e0d\u8d39\u5439\u7070\u4e4b\u529b\u6216\u7a0d\u5fae\u8d39\u70b9\u529b\u5c31\u88ab\u7a81\u7834\u7684\u3002\u968f\u7740\u8ba8\u8bba\u7684\u8ddf\u8fdb\uff0c\u7a81\u7834\u7684\u9650\u5236\u4e5f\u5c06\u53d8\u5f97\u66f4\u4e25\uff0c\u4f46\u8fd9\u5e76\u4e0d\u4ee3\u8868\u7a81\u7834\u8d77\u6765\u5c31\u66f4\u56f0\u96be\uff0c\u4e0e\u4e4b\u76f8\u53cd\u5927\u90e8\u5206\u65b9\u6cd5\u90fd\u662f\u53ef\u4ee5\u4e0d\u8d39\u8111\u5b50\u7684\u3002\u6700\u540e\uff0c\u6211\u4eec\u5c06\u4fee\u6539bash\u7684\u6e90\u7801\u6765\u5b9e\u73b0\u201d\u65e0\u654c\u201dlogging\u673a\u5236\uff0c\u4e5f\u5c06\u770b\u5230\u201d\u65e0\u654c\u201d\u5e76\u4e0d\u662f\u771f\u6b63\u7684\u65e0\u654c\u3002"),(0,a.kt)("h2",{id:"\u4e8c\u52a0\u56fabash_history"},"\u4e8c\uff1a\u52a0\u56fabash_history"),(0,a.kt)("p",null,"\u5047\u8bbe\u4f60\u6240\u7ba1\u7406\u7684\u7cfb\u7edf\u63d0\u4f9bshell\u767b\u5f55\u529f\u80fd\uff0c\u4f60\u7684\u7528\u6237\u5f53\u4e2d\u6709\u4e2a\u522b\u53ca\u5176\u8ba8\u4eba\u538c\u7684\u5bb6\u4f19\uff0c\u4e8e\u662f\u4f60\u60f3\u76d1\u63a7\u4ed6\u7684\u6d3b\u52a8\uff0c\u56e0\u4e3a\u4f60\u975e\u5e38\u6000\u7591\u4ed6\u534a\u591c\u4e09\u66f4\u4f7f\u7528\u4f60\u6240\u8d1f\u8d23\u4fdd\u62a4\u7684CPU\u548c\u7cfb\u7edf\u8d44\u6e90\u4f5c\u6076\u610f\u884c\u4e3a\uff08\u6216\u662f\u5176\u4ed6\u7684\uff0c\u4f8b\u5982\u4e0b\u6bdb\u7247\u7b49\uff09\u3002\u6211\u4eec\u6682\u4e14\u53eb\u4ed6\u5c0f\u660e\uff08\u6b64\u5904\u539f\u6587\u4e3aBob\uff0cBob\u4e00\u540d\u5728\u56fd\u5916\u7ecf\u5e38\u7528\u6765\u6307\u4ee3\u574f\u86cb\uff09\u3002"),(0,a.kt)("p",null,"\u56e0\u4e3a\u6240\u6709\u7528\u6237\u90fd\u662f\u4f7f\u7528bash\u4f5c\u4e3a\u9ed8\u8ba4shell\uff0c\u4f60\u5f00\u59cb\u7740\u624b\u4fee\u6539bash\u7684\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,a.kt)("h3",{id:"\u7b2c1\u6b65"},"\u7b2c1\u6b65"),(0,a.kt)("p",null,"\u4f7fbash\u5386\u53f2\u8bb0\u5f55\u6587\u4ef6\u548c\u76f8\u5173\u6587\u4ef6\u65e0\u6cd5\u88ab\u5220\u9664\u6216\u4fee\u6539\u3002"),(0,a.kt)("p",null,"\u5c0f\u660e\u6240\u505a\u7684\u7b2c\u4e00\u4ef6\u4e8b\u5e94\u8be5\u662f\u5efa\u7acbhistory\u5230/dev/null\u7684\u94fe\u63a5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"bob$ rm ~/.bash_history\nbob$ ln -s /dev/null ~/.bash_history\n")),(0,a.kt)("p",null,"\u8fd9\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u5386\u53f2\u8bb0\u5f55\u6587\u4ef6\u4e3a\u53ea\u80fd\u88ab\u8ffd\u52a0\u6765\u8fdb\u884c\u963b\u6b62\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u6539\u53d8\u5176\u5c5e\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# chattr +a /home/bob/.bash_history\n")),(0,a.kt)("p",null,"\u8fd9\u662f\u4f7f\u7528\u6587\u4ef6\u7cfb\u7edf\u9644\u52a0\u5c5e\u6027\u6765\u6307\u5b9a\u6587\u4ef6\u53ea\u80fd\u88ab\u8ffd\u52a0\uff0c\u5927\u591a\u6570\u6587\u4ef6\u7cfb\u7edf\u652f\u6301\u6b64\u529f\u80fd(\u4f8b\u5982ext2/3,XFS,JFS)\u3002\u5728FreeBSD\u4e0a\u53ef\u4ee5\u6267\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# sappnd /home/bob/.bash_history\n")),(0,a.kt)("p",null,"\u4f60\u8fd8\u5e94\u4fee\u6539shell\u542f\u52a8\u76f8\u5173\u7684\u5176\u4ed6\u6587\u4ef6\u7684\u8fd9\u4e2a\u5c5e\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# chattr +a /home/bob/.bash_profile\n# chattr +a /home/bob/.bash_login\n# chattr +a /home/bob/.profile\n# chattr +a /home/bob/.bash_logout\n# chattr +a /home/bob/.bashrc\n")),(0,a.kt)("p",null,"\u524d\u4e09\u4e2a\u6587\u4ef6\u5728\u4ea4\u4e92\u5f0fbash shell\uff08\u6216\u975e\u4ea4\u4e92\u5f0fsehll\u4f7f\u7528\u2013login\u9009\u9879\uff09\u8c03\u7528\u65f6\u88ab\u8bfb\u53d6(\u5728\u8bfb\u5b8c\u5168\u5c40\u914d\u7f6e\u6587\u4ef6/etc/profile\u540e)\u3002.bashrc\u6587\u4ef6\u53ea\u5728\u5f53non-login\u4ea4\u4e92\u5f0fshell\u8c03\u7528\u65f6\u88ab\u8bfb\u53d6\u3002\u8fd9\u610f\u5473\u7740\u5f53\u5c0f\u660e\u5df2\u767b\u8fdb\u7cfb\u7edf\u540e\uff0c\u7528\u4ee5\u4e0b\u65b9\u6cd5\u81ea\u5df1\u8c03\u7528\u4e00\u4e2a\u65b0shell\u65f6:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bob$ bash")),(0,a.kt)("p",null,"\u6b64\u65f6\u53ea\u6709.bashrc\u6587\u4ef6\u88ab\u8bfb\u53d6\uff0c\u800c\u4e0a\u9762\u6240\u5217\u7684\u524d\u4e09\u4e2a\u914d\u7f6e\u6587\u4ef6\u4e0d\u4f1a\u518d\u6b21\u88ab\u8bfb\u53d6\u4e86\u3002"),(0,a.kt)("p",null,"\u505a\u4e86\u4ee5\u4e0a\u5c5e\u6027\u7684\u4fee\u6539\u540e\u518d\u6765\u505a\u66f4\u8fdb\u4e00\u6b65\u7684\u201d\u52a0\u56fa\u201d\uff0c\u4e00\u4e2a\u6240\u8c13\u7684\u4fdd\u62a4\u63aa\u65bd\u3002"),(0,a.kt)("h3",{id:"\u7b2c2\u6b65"},"\u7b2c2\u6b65"),(0,a.kt)("p",null,"\u914d\u7f6e .bash*\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u6240\u6709\u7684\u914d\u7f6e\u5c06\u9488\u5bf9.bashrc\u6587\u4ef6\uff0c\u56e0\u4e3a\u5176\u4ed6\u4e09\u4e2a\u914d\u7f6e\u6587\u4ef6\u672c\u8eab\u4f1a\u8c03\u7528.bashrc\uff0c\u4e5f\u5c31\u662f\u8bf4.bashrc\u65e0\u8bba\u5982\u4f55\u90fd\u4f1a\u88ab\u8bfb\u53d6 (\u4e0d\u7ba1\u7528\u6237\u662f\u5426\u521a\u767b\u5f55\u6216\u662f\u767b\u5f55\u540e\u624b\u5de5\u8c03\u7528bash shell)\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\uff0c\u6240\u6709\u4fee\u6539\u90fd\u9488\u5bf9.bashrc\u7684\u597d\u5904\u662f\u53ef\u4ee5\u9632\u6b62\u5c0f\u660e\u767b\u5f55\u540e\u624b\u5de5\u8c03\u7528\u65b0\u7684bash shell\u6765\u8df3\u8fc7\u4ec5\u5728.bash_profile,.bash_login,.profile\u4e09\u4e2a\u914d\u7f6e\u6587\u4ef6\u4e2d\u751f\u6548\u7684\u914d\u7f6e\u9009\u9879\uff0c\u53e6\u4e00\u597d\u5904\u662f\u8fd9\u4e09\u4e2a\u6587\u4ef6\u672c\u8eab\u90fd\u4f1a\u8c03\u7528.bashrc\uff0c\u6240\u4ee5\u5728\u9996\u6b21\u767b\u5f55\u7cfb\u7edf\u65f6.bashrc\u5f53\u4e2d\u7684\u914d\u7f6e\u4e5f\u4f1a\u751f\u6548\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# cat >> /home/bob/.bashrc << EOF\n> shopt -s histappend\n> readonly PROMPT_COMMAND=\u201dhistory -a\u201d\n> EOF\n")),(0,a.kt)("p",null,"\u6b64\u5904histappend\u9009\u9879\u7684\u4f5c\u7528\u662f\u8ba9bash\u9644\u52a0\u4e0a\u6700\u540e\u4e00\u884c$HISTSIZE\u7ed9$HISTFILE\u6587\u4ef6\uff08\u4e00\u822c\u662f~/.bash_history\u6587\u4ef6\uff09\uff0c\u4e0d\u7ba1\u4ea4\u4e92\u5f0fshell\u4f55\u65f6\u9000\u51fa\u3002\u9ed8\u8ba4\u7684\uff0cbash\u6bcf\u6b21\u5747\u4f1a\u8986\u76d6$HISTFILE\u4ee5\u4fdd\u8bc1\u53ea\u6709\u4e00\u4e2asession\u88ab\u4fdd\u5b58\u4ee5\u6b64\u6765\u8282\u7ea6\u7a7a\u95f4\u3002"),(0,a.kt)("p",null,"\u73af\u5883\u53d8\u91cfPROMPT_COMMAND\u4f1a\u4fdd\u5b58\u4e00\u6761\u5c06\u88ab\u4f18\u5148\u6267\u884c\u7684\u547d\u4ee4\uff0c\u610f\u601d\u662f\u8bf4\u201dhistory -a\u201d\u547d\u4ee4\u5c06\u5728\u7528\u6237\u6267\u884c\u547d\u4ee4\u524d\u88ab\u4f18\u5148\u6267\u884c\uff0c\u8fd9\u5c06\u4fdd\u8bc1\u4e0d\u7ba1\u5f53\u524d\u547d\u4ee4\u524d\u4e00\u6761\u662f\u6267\u884c\u7684\u4ec0\u4e48\uff0c\u5b83\u5c06\u7acb\u5373\u88ab\u8ffd\u52a0\u8fdb$HISTFILE\uff0c\u800c\u4e0d\u7528\u7b49\u5f85\u6574\u4e2a\u4f1a\u8bdd\u7ed3\u675f\u518d\u5c06\u5386\u53f2\u547d\u4ee4\u4ece\u5185\u5b58\u8bb0\u5f55\u81f3\u786c\u76d8\u3002"),(0,a.kt)("p",null,"\u6b64\u5904\u7684readonly\u4f5c\u7528\u662f\u4f7f\u53d8\u91cf\u4e0d\u53ef\u4fee\u6539\u4ee5\u9632\u6b62\u88ab\u5c0f\u660e\u8986\u76d6\u6389\u6216\u662f\u76f4\u63a5\u5c4f\u853d\u6389\u3002"),(0,a.kt)("p",null,"\u6700\u540e\u8981\u5b8c\u6210\u7684\u6b65\u9aa4\u662f\u4f7f\u6240\u6709\u4e0ebash_history\u76f8\u5173\u7684\u73af\u5883\u53d8\u91cf\u90fd\u53d8\u4e3areadonly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"readonly HISTFILE\nreadonly HISTFILESIZE\nreadonly HISTSIZE\nreadonly HISTCMD\nreadonly HISTCONTROL\nreadonly HISTIGNORE\n")),(0,a.kt)("h3",{id:"\u7b2c3\u6b65"},"\u7b2c3\u6b65"),(0,a.kt)("p",null,"\u7981\u6389\u7cfb\u7edf\u4e2d\u6240\u6709\u5176\u4ed6shell\uff0c\u4e00\u822c\u5305\u62eccsh,tcsh,ksh\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# chmod 750 csh\n# chmod 750 tcsh\n# chmod 750 ksh\n")),(0,a.kt)("p",null,"\u8fd9\u5c06\u963b\u6b62\u5c0f\u660e\u628abash shell\u5207\u6362\u6210\u5176\u4ed6shell\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u673a\u654f\u70b9\u7684\u7ba1\u7406\u5458\u4f1a\u62b1\u6028\u4e0a\u9762\u7684\u90fd\u662fshit\uff01"),(0,a.kt)("p",null,"\u8fd8\u6709\u4e00\u4e2ashell\u9003\u51fa\u4e86\u6211\u4eec\u7684\u638c\u63a7\uff01\u5728\u4f60\u770b\u5b8c\u4ee5\u4e0a\u53d9\u8ff0\u8df3\u5165\u6d6e\u60f3\u8054\u7fe9\u4e4b\u524d\uff0c\u8ba9\u6211\u4eec\u6765\u641e\u6e05\u4e00\u4e9b\u4e8b\u60c5\u3002"),(0,a.kt)("p",null,"\u5f88\u4e45\u5f88\u4e45\u4ee5\u524d\u2026 \uff08\u4f60\u61c2\u7684\uff09\uff0c\u539f\u672c\u53ea\u6709\u4e00\u4e2aBourne shell \u6216\u8005\u53ebsh\uff0c\u73b0\u5982\u4eca\uff0c/bin/sh\u5b9e\u9645\u4e0a\u662f/bin/bash\u7684\u4e00\u4e2a\u94fe\u63a5\u3002Bash\u5728\u88ab\u8c03\u7528\u65f6\u68c0\u67e5\u5b83\u662f\u4ee5\u54ea\u4e2a\u540d\u5b57\u88ab\u8c03\u7528\u7684\u5e76\u4ee5\u6b64\u6765\u5224\u65ad\u662f\u4e0d\u662f\u8c03\u7528sh\uff0c\u5b83\u8bd5\u56fe\u6a21\u4eff\u5386\u53f2\u7248\u672c\u7684sh\u7684\u884c\u4e3a\u5e76\u548cPOSIX\u6807\u51c6\u4fdd\u6301\u4e00\u81f4\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4ee5\u4ea4\u4e92\u5f0flogin shell\u6216\u975e\u4ea4\u4e92\u5f0fshell\u5e26\u4e0a\u2013login\u9009\u9879\u542f\u52a8\uff0c\u5b83\u624d\u8bfb\u53d6/etc/profile\u548c~/.profile\u6765\u521d\u59cb\u5316\u914d\u7f6e\u3002\u5982\u679c\u4ee5\u4ea4\u4e92\u5f0fshell\u88ab\u8c03\u7528\uff0c\u5219\u8bd5\u56fe\u89e3\u91ca$ENV\u53d8\u91cf\uff0c\u5f53$ENV\u975e\u7a7a\u5219\u4f7f\u7528\u5b83\u7684\u503c\u5f53\u4f5c\u9ed8\u8ba4\u914d\u7f6e\u5e76\u6267\u884c\u3002\u6211\u4eec\u5c06\u5728\u672c\u6587\u7684\u4e0b\u4e00\u8282\u8ba8\u8bba\u5982\u4f55\u5229\u7528\u8fd9\u70b9\u6765\u79d2\u6740bash\u7684\u6240\u6709\u8bbe\u7f6e\u3002"),(0,a.kt)("h2",{id:"\u4e09\u653b\u7834logging\u673a\u5236"},"\u4e09\uff1a\u653b\u7834logging\u673a\u5236"),(0,a.kt)("p",null,"\u73b0\u5728\u662f\u65f6\u5019\u7ad9\u5728\u5c0f\u660e\u7684\u89d2\u5ea6\u6765\u770b\u4e0b\u6240\u6709\u95ee\u9898\u4e86\u3002\u6211\u4eec\u5c06\u9a8c\u8bc1\u4e0a\u9762\u7684\u9632\u5fa1\u662f\u5982\u4f55\u4e00\u6b65\u6b65\u88ab\u653b\u7834\u7684\u3002\u5728\u5b9e\u8df5\u4e2d\u7684\u53ef\u80fd\u6027\u662f\u65e0\u7a77\u8fdb\u7684\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u6240\u63d0\u53ca\u7684\u7a81\u7834bash_history logging\u673a\u5236\u7684\u6280\u5de7\u53ea\u662f\u4e5d\u725b\u4e00\u6bdb\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65b9\u6cd51\uff1a\u4f7f\u7528Bourne shell \u2013/bin/sh\u9003\u8131\u672f")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ /bin/sh")),(0,a.kt)("p",null,"\u8c03\u7528sh\u4f1a\u5bfc\u81f4bash\u6a21\u4eff\u5982\u524d\u6240\u8ff0\u7684\u5386\u53f2\u7248\u672csh\u800c\u4e0d\u4f1a\u8bfb\u53d6\u4e0ebash\u76f4\u63a5\u76f8\u5173\u7684\u4efb\u4f55\u914d\u7f6e\u6587\u4ef6\u3002\u56e0\u6b64\uff0c\u5c0f\u660e\u73b0\u5728\u80fd\u591f\u907f\u5f00$HISTFILE\u53d8\u91cf\u4e86\uff0c"),(0,a.kt)("p",null,"\u56e0\u4e3a\u5b83\u5df2\u4e0d\u518d\u662freadonly\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ unset HISTFILE")),(0,a.kt)("p",null,"\u8fd9\u4f1a\u4f7f\u5f97logging\u673a\u5236\u5728\u5f53\u524d\u4f1a\u8bdd\u4e2d\u76f4\u63a5\u840e\u6389\uff0c\u56e0\u4e3a\u6b64\u53d8\u91cf\u63a7\u5236\u7684\u5386\u53f2\u547d\u4ee4\u8bb0\u5f55\u6587\u4ef6\u5c06\u4f1a\u662f\u7a7a\u7684\u3002"),(0,a.kt)("p",null,"\u6ce8\uff1a\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528/bin/rbash\uff08\u5982\u679c\u7cfb\u7edf\u91cc\u5b58\u5728\u7684\u8bdd\uff09\u6765\u5b9e\u73b0\u76f8\u540c\u6548\u679c\uff0c\u5b83\u4f1a\u6a21\u4eff\u53d7\u9650\u7248\u672c\u7684bash\uff0c\u548csh\u4e00\u6837\u4e5f\u662f\u4e00\u4e2abash\u7684\u94fe\u63a5\uff0c\u4f46\u662f\u4f7f\u7528\u8d77\u6765\u786e\u5b9e\u6709\u4e9b\u8ba9\u4eba\u86cb\u75bc\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65b9\u6cd52\uff1a\u8ba9bash\u4e0d\u52a0\u8f7d.bashrc\u914d\u7f6e\u6587\u4ef6")),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u5b9e\u73b0\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ /bin/bash \u2013norc")),(0,a.kt)("p",null,"\u8fd9\u6837\u5373\u53ef\u7981\u6b62bash\u8bfb\u53d6.bashrc\u4ece\u800c\u88ab\u8bbe\u7f6e\u6210readonly\u7684\u53d8\u91cf\u53d8\u6210\u4e86writeable\uff0c\u7136\u540e\u50cf\u4e0b\u9762\u8fd9\u6837\u505a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ HISTFILE=")),(0,a.kt)("p",null,"\u4f1a\u6e05\u7a7a$HISTFILE\u53d8\u91cf\u2014>\u65e0\u5386\u53f2\u8bb0\u5f55\u3002"),(0,a.kt)("h2",{id:"\u56dbhacking-bash-\u4f7f\u7528syslog\u65e5\u5fd7\u63a5\u53e3"},"\u56db\uff1aHacking bash-\u4f7f\u7528syslog\u65e5\u5fd7\u63a5\u53e3"),(0,a.kt)("p",null,"\u4ece\u4ee5\u4e0a\u6211\u4eec\u5f88\u6e05\u695a\u5730\u5f97\u51fa\u7ed3\u8bba\uff0d\uff0d\u4f20\u7edf\u7684\u52a0\u56fabash_history\u7684\u65b9\u6cd5\u5b9e\u9645\u4e0a\u90fd\u662f\u626f\u6de1\u3002\u7136\u800c\u6211\u4eec\u5374\u53ef\u4ee5\u66f4\u5411\u524d\u4e00\u6b65\u7684hack bash\u672c\u8eab\u6765\u51cf\u5c11logging\u673a\u5236\u7684\u8106\u5f31\u6027\u5e76\u63d0\u9ad8\u5176\u9690\u79d8\u6027\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\u5373\u4fbf\u5982\u6b64\u4e5f\u662f\u53ef\u4ee5\u88ab\u653b\u7834\u7684\u3002\u7531\u4e8ebash\u4e0e\u5185\u6838\u7684\u5dee\u8ddd\u5bfc\u81f4\u5b83\u5e76\u4e0d\u662f\u8db3\u591f\u7684\u5065\u58ee\u6765\u4f5c\u4e3a\u4e00\u4e2alogging\u8bbe\u5907\uff0c\u5373\u4fbf\u662fhack\u4e86\u5b83\u7684\u6838\u5fc3\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\u7684\u60f3\u6cd5\u662f\u4fee\u6539bash\u6e90\u7801\u4f7f\u7528\u6237\u952e\u5165\u7684\u6240\u6709\u6307\u4ee4\u5168\u90e8\u53d1\u9001\u7ed9syslog\uff0c\u7531syslog\u5c06\u65e5\u5fd7\u8bb0\u5f55\u5230/var/log\u76ee\u5f55\u4e0b\u3002\u6211\u4eec\u5c06\u63d0\u4f9b\u4e00\u4e2a\u5feb\u901f\u800c\u4e14\u5f88\u9ec4\u5f88\u66b4\u529b\u7684\u65b9\u6cd5\u6765\u5b9e\u73b0\u8fd9\u4e00\u76ee\u6807\uff0d\uff0d\u8fd9\u91cc\uff0c\u54ea\u4e2a\u7528\u6237\u952e\u5165\u7684\u54ea\u6761\u6307\u4ee4\u5c06\u6ca1\u6709\u5dee\u522b\u7684\u88ab\u5bf9\u5f85\uff0c\u800c\u8fd9\u4e5f\u662f\u53ef\u4ee5\u88ab\u5b9e\u73b0\u7684\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u7684\u63a5\u53e3\u7684\u6700\u4f73\u653e\u7f6e\u70b9\u662fparse.y\u6587\u4ef6\uff0c\u5b83\u7531bash\u7684yacc\u8bed\u6cd5\u7ec4\u6210\u3002\u5f53\u4e00\u6761\u6307\u4ee4\u5728shell\u4e2d\u88ab\u4e0b\u8fbe\u65f6bash\u89e3\u91ca\u5668\u5c06\u8fc5\u901f\u88ab\u8c03\u7528\u3002\u56e0\u6b64\uff0c\u5c06syslog\u94a9\u5b50\u653e\u7f6e\u5728\u89e3\u91ca\u5668\u521a\u597d\u5b8c\u6210\u5b83\u7684\u5de5\u4f5c\u524d\u4e00\u70b9\u70b9\uff0c\u8c8c\u4f3c\u662f\u4e2a\u597d\u529e\u6cd5\u3002\u9700\u8981\u4fee\u6539\u7684\u4ec5\u4ec5\u662f\u589e\u52a0\u4e24\u884c\u4ee3\u7801\uff1a\u5305\u542b\u8fdbsyslog.h\u548c\u8bbe\u7f6esyslog\u8c03\u7528\u3002\u6211\u4eec\u4f7f\u7528\u4e86bash-3.2\u7684\u6e90\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"[ithilgore@fitz]$diff -E -b -c ~/bash-3.2/parse.y ~/hacked_bash/parse.y\n*** ../../bash-3.2/bash-3.2/parse.y Tue Sep 19 13:37:21 2006\n\u2014 parse.y Sat Jul 12 18:32:26 2008\n***************\n*** 19,24 ****\n\u2014 19,25 \u2014-\nFoundation, 59 Temple Place, Suite 330, Boston, MA 02111 USA. */\n%{\n + #include #include \u201cconfig.h\u201d\n #include \u201cbashtypes.h\u201d \n *************** *** 1979,1984 **** \u2014 1980,1986 \u2014\n - shell_input_line_len = i;\n /* == strlen (shell_input_line) */\n set_line_mbstate ();\n + syslog(LOG_LOCAL0 | LOG_CRIT, \u201c%s\u201d, shell_input_line);\n #if defined (HISTORY) if (remember_on_history && shell_input_line && shell_input_line[0])\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u8c03\u7528\u4ea7\u751f\u4e86\u4e00\u6761\u65e5\u5fd7\u6d88\u606f\uff0c\u6b64\u6d88\u606f\u5c06\u88absyslog\u6839\u636eLOG_CRIT\u7ea7\u522b\u9001\u5230local0\u7684\u8bbe\u5907\u4e0a\u3002\u8981\u8ba9\u8fd9\u4e2a\u4e1c\u4e1c\u751f\u6548\u5219\u8fd8\u5fc5\u987b\u8981\u5728/etc/syslog.conf\u914d\u7f6e\u6587\u4ef6\u4e2d\u52a0\u5165\u4e00\u6761\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"local0.crit /var/log/hist.log")),(0,a.kt)("p",null,"\u81f3\u6b64\u7528\u6237\u4e0b\u8fbe\u7684\u6bcf\u6761\u6307\u4ee4\u90fd\u5c06\u8eba\u5728/var/log/hist.log\u91cc\uff0c\u8fd9\u4e2a\u65e5\u5fd7\u6587\u4ef6\u4e00\u822c\u60c5\u51b5\u4e0b\u65e5\u6709root\u7528\u6237\u6709\u8bfb\u6743\u9650\u3002"),(0,a.kt)("p",null,"\u8981\u6ce8\u610f\u7684\u662f\u4e0a\u9762\u6240\u63d0\u5230\u7684hack\u5e76\u4e0d\u533a\u5206\u662f\u5426\u4e3a\u4e0d\u540c\u7528\u6237\u7684\u8f93\u5165\u3002\u8981\u5b9e\u73b0\u7684\u8bdd\u8fd8\u6709\u66f4\u591a\u7684\u4e8b\u60c5\u9700\u8981\u505a\u7684\u3002\u7531\u4e8e\u6240\u6709\u7684\u547d\u4ee4\u90fd\u88ab\u8bb0\u5f55\u4e0b\u6765\uff0c\u90a3\u4e48\u7531shell\u811a\u672c\u6267\u884c\u6216\u542f\u52a8bash\u65f6\u7684\u914d\u7f6e\u6587\u4ef6\u6267\u884c\u6240\u4ea7\u751f\u7684\u5783\u573e\u4fe1\u606f\u4e5f\u662f\u4f1a\u88ab\u8bb0\u5f55\u4e0b\u6765\u7684\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\u552f\u4e00\u5269\u4e0b\u7684\u95ee\u9898\u662f\u201d\u4e0a\u9762\u7684hack\u8981\u600e\u6837\u624d\u80fd\u88ab\u653b\u7834\uff1f\u201d\u5176\u5b9e\u8fd9\u76f8\u5f53\u6ef4\u7b80\u5355\uff1a"),(0,a.kt)("p",null,"\u2014->\u7f16\u8bd1\u6216\u4e0a\u4f20\u4e00\u4e2a\u4f60\u81ea\u5df1\u7684\u5e72\u51c0\u7684bash\u6216\u5176\u4ed6shell\u5373\u53ef\u641e\u5b9a\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e\u4e0a\u9762\u7684hack\u662f\u5728\u7279\u5b9a\u7248\u672c\u7684\u57fa\u7840\u4e0a\u7684\u6240\u4ee5\u4f60\u7f16\u8bd1\u6216\u4e0a\u4f20\u7684\u5e72\u51c0bash\u53ef\u80fd\u5728\u4ed6\u7684\u7cfb\u7edf\u4e0a\u4f1a\u8fd0\u884c\u5931\u8d25\u3002"),(0,a.kt)("h2",{id:"\u4e94\u603b\u7ed3"},"\u4e94\uff1a\u603b\u7ed3"),(0,a.kt)("p",null,"Bash \u53ea\u662f\u4e00\u4e2ashell\uff0c\u5e76\u4e0d\u662f\u4e00\u4e2alogging\u8bbe\u5907\uff0c\u800cbash_history\u53ea\u662f\u7528\u6765\u4e3a\u7528\u6237\u63d0\u4f9b\u70b9\u65b9\u4fbf\u5c11\u6572\u51e0\u4e0b\u952e\u76d8\u800c\u5df2\u3002\u6beb\u4e0d\u88c5\u903c\u7684\u8bf4\u4e00\u53e5\u6240\u6709\u4f7f\u7528\u5b83\u6765\u5f53\u76d1\u63a7\u8bbe\u5907\u7684\u505a\u6cd5\u90fd\u662f\u767d\u642d\u3002\u5982\u679c\u4f60\u662f\u4e2a\u8f83\u771f\u7684\u7cfb\u7edf\u7ba1\u7406\u5458\u4e14\u786e\u5b9e\u9700\u8981\u76d1\u63a7\u7528\u6237\u7684\u6d3b\u52a8\uff0c\u90a3\u5c31\u5199\u4e2a\u5185\u6838\u6a21\u5757\u8bb0\u5f55\u6240\u6709\u7528\u6237\u7684\u952e\u76d8\u8bb0\u5f55\uff0c\u5e76\u6839\u636euid\u6216\u5176\u4ed6\u53c2\u6570\u8fdb\u884c\u8fc7\u6ee4\u3002\u8fd9\u4e2a\u65b9\u6cd5\u5c06\u4f1a\u975e\u5e38\u7ba1\u7528\u5e76\u4e14\u5f88\u96be\u88ab\u653b\u7834\uff08\u53ea\u662f\u5f88\u96be\u4e0d\u662f\u6ca1\u90a3\u53ef\u80fd\uff09\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\u5df2\u7ecf\u6709Linux\u5305\u62ecFreeBSD\u4e0b\u7684\u5ba1\u8ba1\u6846\u67b6\u53ef\u4f9b\u9009\u62e9\u3002\u5728FreeBSD\u5e73\u53f0\uff0c\u7531Robert Watson\u548cTrustedBSD\u9879\u76ee\u5f00\u53d1\u7684\u5ba1\u8ba1\u6846\u67b6\u662f\u9009\u62e9\u4e4b\u4e00\u3002\u5728linux\u5e73\u53f0\uff0c\u7531\u6765\u81ea\u7ea2\u5e3d\u7684Steve Grubb\u5f00\u53d1\u7684Linux Auditing System\u4e5f\u662f\u4e00\u4e2a\u9009\u62e9\uff1a",(0,a.kt)("a",{parentName:"p",href:"http://people.redhat.com/sgrubb/audit/"},"http://people.redhat.com/sgrubb/audit/")),(0,a.kt)("h2",{id:"\u516d\u53c2\u8003\u8d44\u6599"},"\u516d\uff1a\u53c2\u8003\u8d44\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"[1]"," bash & syslog man pages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"[2]"," bash-3.2 source code -",(0,a.kt)("a",{parentName:"p",href:"http://ftp.gnu.org/gnu/bash/bash-3.2.tar.gz"},"http://ftp.gnu.org/gnu/bash/bash-3.2.tar.gz")))))}u.isMDXComponent=!0}}]);