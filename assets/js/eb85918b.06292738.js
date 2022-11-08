"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8973],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={layout:"post",title:"mac\u4e0a\u4f7f\u7528docker\u4ea4\u53c9\u9759\u6001\u7f16\u8bd1jq\u548cfio",authors:"itxx00",description:"\u63cf\u8ff0",categories:["shell"],tags:["bash"]},a=void 0,l={permalink:"/notes/blog/2022/11/08/static-build-jq-fio",editUrl:"https://github.com/itxx00/notes/tree/main/blog/2022-11-08-static-build-jq-fio.md",source:"@site/blog/2022-11-08-static-build-jq-fio.md",title:"mac\u4e0a\u4f7f\u7528docker\u4ea4\u53c9\u9759\u6001\u7f16\u8bd1jq\u548cfio",description:"\u63cf\u8ff0",date:"2022-11-08T00:00:00.000Z",formattedDate:"2022\u5e7411\u67088\u65e5",tags:[{label:"bash",permalink:"/notes/blog/tags/bash"}],readingTime:1.55,hasTruncateMarker:!1,authors:[{name:"\u8001\u53f8\u673a",title:"Maintainer of this proj",url:"https://github.com/itxx00",imageURL:"https://github.com/itxx00.png",key:"itxx00"}],frontMatter:{layout:"post",title:"mac\u4e0a\u4f7f\u7528docker\u4ea4\u53c9\u9759\u6001\u7f16\u8bd1jq\u548cfio",authors:"itxx00",description:"\u63cf\u8ff0",categories:["shell"],tags:["bash"]},nextItem:{title:"pre-commit basic usage",permalink:"/notes/blog/2022/04/20/pre-commit-basic"}},c={authorsImageUrls:[void 0]},u=[{value:"\u601d\u8def",id:"\u601d\u8def",level:2},{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:2}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u601d\u8def"},"\u601d\u8def"),(0,i.kt)("p",null,"\u4e3a\u4e86\u5f97\u5230\u9759\u6001\u7f16\u8bd1\u7684jq\u548cfio\u7a0b\u5e8f\u4e8c\u8fdb\u5236,\u540c\u65f6\u53c8\u9700\u8981x86_64\u548caarch64\u7684\u7248\u672c,\u53ef\u4ee5\u5229\u7528docker\u7684buildx\u5b9e\u73b0\u4ea4\u53c9\u7f16\u8bd1"),(0,i.kt)("h2",{id:"\u6b65\u9aa4"},"\u6b65\u9aa4"),(0,i.kt)("p",null,"\u7f16\u8bd1fio"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir fio && cd fio\nvi Dockerfile\n")),(0,i.kt)("p",null,"Dockerfile \u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"FROM ubuntu as build\nWORKDIR /opt\nARG VER=fio-3.33\nRUN if [  -e /etc/apt/sources.list ];then sed -ri 's/[a-zA-Z0-9.]+(debian.org|ubuntu.com)/mirrors.volces.com/g' /etc/apt/sources.list; fi && \\\n    export DEBIAN_FRONTEND=noninteractive && \\\n    apt-get update && \\\n    apt-get install -y git gcc make cmake libaio1 libaio-dev zlib1g zlib1g-dev\nRUN git clone https://github.com/axboe/fio.git && \\\n    cd fio  && \\\n    git checkout ${VER}\nRUN cd fio  && \\\n    ./configure --build-static\nRUN cd fio && make && make install  && \\\n    strip `which fio` && cp `which fio` /fio-$(dpkg --print-architecture)\n\nFROM scratch AS bin\nCOPY --from=build /fio-* /\n")),(0,i.kt)("p",null,"\u6267\u884c\u7f16\u8bd1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker buildx build . --platform linux/amd64 --target bin --output .\ndocker buildx build . --platform linux/arm64 --target bin --output .\n")),(0,i.kt)("p",null,"\u7f16\u8bd1\u6210\u529f\u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u5f97\u5230\u53ef\u6267\u884c\u7a0b\u5e8ffio-amd64\u548cfio-arm64\u4e24\u4e2a\u6587\u4ef6."),(0,i.kt)("p",null,"jq\u7f16\u8bd1\u6b65\u9aa4\u7c7b\u4f3c,dockerfile\u5982\u4e0b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"FROM ubuntu as build\nWORKDIR /opt\nARG VER=jq-1.6\nRUN if [  -e /etc/apt/sources.list ];then sed -ri 's/[a-zA-Z0-9.]+(debian.org|ubuntu.com)/mirrors.volces.com/g' /etc/apt/sources.list; fi && \\\n    export DEBIAN_FRONTEND=noninteractive && \\\n    apt-get update && \\\n    apt-get install -y build-essential libtool git gcc make cmake autotools-dev autoconf\nRUN git clone https://github.com/stedolan/jq.git && \\\n    cd jq  && \\\n    git checkout ${VER} && git submodule update --init\nRUN cd jq  && \\\n    autoreconf -fi && \\\n    ./configure --disable-maintainer-mode --disable-valgrind --with-oniguruma=builtin --enable-all-static --prefix=/usr/local\nRUN cd jq && LDFLAGS=-all-static make -j4 && make install  && \\\n    strip /usr/local/bin/jq && cp /usr/local/bin/jq /jq-$(dpkg --print-architecture)\n\nFROM scratch AS bin\nCOPY --from=build /jq-* /\n")))}p.isMDXComponent=!0}}]);