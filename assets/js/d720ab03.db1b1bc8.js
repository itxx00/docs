"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9444],{245:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=t(5893),a=t(3905);const c={layout:"post",title:"\u94f6\u6cb3\u9e92\u9e9fv10 aarch64\u673a\u5668\u6784\u5efapercona-xtrabackup-80 rpm\u5305",description:"\u5982\u4f55\u81ea\u5df1\u6784\u5efaaarch64 xtrabackup rpm",categories:["shell"],tags:["bash"]},o=void 0,l={permalink:"/notes/blog/2021/07/21/kylin-v10-aarch64-build-percona-xtrabackup-80-rpm",editUrl:"https://github.com/itxx00/notes/tree/main/blog/2021-07-21-kylin-v10-aarch64-build-percona-xtrabackup-80-rpm.md",source:"@site/blog/2021-07-21-kylin-v10-aarch64-build-percona-xtrabackup-80-rpm.md",title:"\u94f6\u6cb3\u9e92\u9e9fv10 aarch64\u673a\u5668\u6784\u5efapercona-xtrabackup-80 rpm\u5305",description:"\u5982\u4f55\u81ea\u5df1\u6784\u5efaaarch64 xtrabackup rpm",date:"2021-07-21T00:00:00.000Z",formattedDate:"2021\u5e747\u670821\u65e5",tags:[{label:"bash",permalink:"/notes/blog/tags/bash"}],readingTime:.335,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"\u94f6\u6cb3\u9e92\u9e9fv10 aarch64\u673a\u5668\u6784\u5efapercona-xtrabackup-80 rpm\u5305",description:"\u5982\u4f55\u81ea\u5df1\u6784\u5efaaarch64 xtrabackup rpm",categories:["shell"],tags:["bash"]},unlisted:!1,prevItem:{title:"CVM\u4f7f\u7528ISO\u955c\u50cf\u5b89\u88c5\u94f6\u6cb3\u9e92\u9e9fv10 arm\u7cfb\u7edf",permalink:"/notes/blog/2021/12/16/cvm-kylin-v10-iso-install"},nextItem:{title:"UOS arm64\u673a\u5668build percona-xtrabackup-80 deb\u5305",permalink:"/notes/blog/2021/07/21/uos-arm64-build-percona-xtrabackup-80"}},i={authorsImageUrls:[]},p=[{value:"1 \u73af\u5883\u51c6\u5907",id:"1-\u73af\u5883\u51c6\u5907",level:2},{value:"2 \u83b7\u53d6\u6700\u65b0SRPM\u5305",id:"2-\u83b7\u53d6\u6700\u65b0srpm\u5305",level:2},{value:"3 BUILD RPM",id:"3-build-rpm",level:2},{value:"OVER",id:"over",level:2}];function s(e){const r={code:"code",h2:"h2",pre:"pre",...(0,a.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"1-\u73af\u5883\u51c6\u5907",children:"1 \u73af\u5883\u51c6\u5907"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"\nyum install cmake3 openssl-devel libaio libaio-devel automake autoconf bison libtool ncurses-devel \\\n    libgcrypt-devel libev-devel libcurl-devel zlib-devel vim-common readline-devel python-sphinx rpm-build\n"})}),"\n",(0,n.jsx)(r.h2,{id:"2-\u83b7\u53d6\u6700\u65b0srpm\u5305",children:"2 \u83b7\u53d6\u6700\u65b0SRPM\u5305"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"# \u67e5\u770b\u9700\u8981\u4e0b\u8f7d\u7684\u7248\u672c\nhttps://repo.percona.com/yum/release/8/SRPMS/\n#\u5982\uff1a\nwget https://repo.percona.com/yum/release/8/SRPMS/percona-xtrabackup-80-8.0.25-17.1.generic.src.rpm\n"})}),"\n",(0,n.jsx)(r.h2,{id:"3-build-rpm",children:"3 BUILD RPM"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"rpm -ivh percona-xtrabackup-80-8.0.25-17.1.generic.src.rpm\ncd ~/rpmbuild\nrpmbuild -bb --nodebuginfo SPECS/percona-xtrabackup.spec\n"})}),"\n",(0,n.jsx)(r.h2,{id:"over",children:"OVER"})]})}function u(e={}){const{wrapper:r}={...(0,a.ah)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},3905:(e,r,t)=>{t.d(r,{ah:()=>p});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(t),d=a,m=b["".concat(i,".").concat(d)]||b[d]||s[d]||c;return t?n.createElement(m,o(o({ref:r},u),{},{components:t})):n.createElement(m,o({ref:r},u))}));u.displayName="MDXCreateElement"}}]);