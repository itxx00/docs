"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,f=b["".concat(c,".").concat(m)]||b[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={layout:"post",title:"how to build a static tmux bin",categories:["shell"],tags:["bash"]},i=void 0,l={permalink:"/notes/blog/2021/06/30/build-tmux-static",editUrl:"https://github.com/itxx00/notes/tree/main/blog/2021-06-30-build-tmux-static.md",source:"@site/blog/2021-06-30-build-tmux-static.md",title:"how to build a static tmux bin",description:"* Kramdown table of contents",date:"2021-06-30T00:00:00.000Z",formattedDate:"2021\u5e746\u670830\u65e5",tags:[{label:"bash",permalink:"/notes/blog/tags/bash"}],readingTime:.54,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"how to build a static tmux bin",categories:["shell"],tags:["bash"]},prevItem:{title:"UOS arm64\u673a\u5668build percona-xtrabackup-80 deb\u5305",permalink:"/notes/blog/2021/07/21/uos-arm64-build-percona-xtrabackup-80"},nextItem:{title:"\u4f7f\u7528dozzle\u901a\u8fc7web\u754c\u9762\u5b9e\u65f6\u67e5\u770bdocker\u65e5\u5fd7",permalink:"/notes/blog/2021/06/08/dozzle-realtime-docker-log-view"}},c={authorsImageUrls:[]},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,a.kt)("p",null,"build-tmux-static.sh"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#!/bin/bash\nTARGETDIR=$1\nif [ "$TARGETDIR" = "" ]; then\nTARGETDIR=$(python -c \'import os; print os.path.realpath("local")\')\nfi\nmkdir -p $TARGETDIR\n\nlibevent() {\n  curl -LO https://github.com/libevent/libevent/releases/download/release-2.0.22-stable/libevent-2.0.22-stable.tar.gz\n  tar -zxvf libevent-2.0.22-stable.tar.gz\n  cd libevent-2.0.22-stable\n  ./configure --prefix=$TARGETDIR && make && make install\n  cd ..\n}\n\nncurses() {\n  curl -LO https://ftp.gnu.org/pub/gnu/ncurses/ncurses-6.0.tar.gz\n  tar zxvf ncurses-6.0.tar.gz\n  cd ncurses-6.0\n\n  ./configure --with-termlib --prefix $TARGETDIR \\\n              --with-default-terminfo-dir=/usr/share/terminfo \\\n              --with-terminfo-dirs="/etc/terminfo:/lib/terminfo:/usr/share/terminfo" \\\n              --enable-pc-files \\\n              --with-pkg-config-libdir=$TARGETDIR/lib/pkgconfig \\\n  && make && make install\n  cd ..\n}\n\ntmux() {\n  curl -LO https://github.com/tmux/tmux/releases/download/3.2a/tmux-3.2a.tar.gz\n  tar zxvf tmux-3.2a.tar.gz\n  cd tmux-3.2a\n  PKG_CONFIG_PATH=$TARGETDIR/lib/pkgconfig ./configure --enable-static --prefix=$TARGETDIR && make && make install\n  cd ..\n  cp $TARGETDIR/bin/tmux .\n}\n\nlibevent\nncurses\ntmux\n')))}p.isMDXComponent=!0}}]);