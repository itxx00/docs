"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5830],{2842:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=o(5893),n=o(3905);const i={layout:"post",title:"libvirt\u4e2dstorage pool\u7684\u7ba1\u7406",description:"build storage pool with libvirt",categories:["virt"],tags:["libvirt","storage pool"],redirect_from:["/2012/07/13/"]},l=void 0,s={permalink:"/notes/blog/2012/07/13/libvirt-storage-pool",editUrl:"https://github.com/itxx00/notes/tree/main/blog/2012-07-13-libvirt-storage-pool.md",source:"@site/blog/2012-07-13-libvirt-storage-pool.md",title:"libvirt\u4e2dstorage pool\u7684\u7ba1\u7406",description:"build storage pool with libvirt",date:"2012-07-13T00:00:00.000Z",formattedDate:"2012\u5e747\u670813\u65e5",tags:[{label:"libvirt",permalink:"/notes/blog/tags/libvirt"},{label:"storage pool",permalink:"/notes/blog/tags/storage-pool"}],readingTime:2.255,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"libvirt\u4e2dstorage pool\u7684\u7ba1\u7406",description:"build storage pool with libvirt",categories:["virt"],tags:["libvirt","storage pool"],redirect_from:["/2012/07/13/"]},unlisted:!1,prevItem:{title:"metasploit\u5b66\u4e60\u7b14\u8bb0",permalink:"/notes/blog/2012/11/12/msf-study-note"},nextItem:{title:"\u5982\u4f55\u8ba9ThinkPad\u81ea\u5b9a\u4e49\u98ce\u6247\u8f6c\u901f",permalink:"/notes/blog/2012/05/21/thinkpad-fan-speed-control"}},a={authorsImageUrls:[]},p=[];function c(e){const t={blockquote:"blockquote",code:"code",p:"p",pre:"pre",...(0,n.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u7b80\u5355\u6f14\u793a\u5982\u4f55\u5728libvirt\u4e2d\u521b\u5efastorage pool"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"libvirt\u63d0\u4f9b\u4e86\u5b58\u50a8\u7ba1\u7406\u7684\u529f\u80fd\uff0c\u53ef\u4ee5\u7ba1\u7406\u7684\u5b58\u50a8\u7c7b\u578b\u6709 \u76ee\u5f55  lvm\u903b\u8f91\u5377 \u78c1\u76d8 iscsi\u5b58\u50a8  scsi\u5b58\u50a8  mpath netfs\u7b49\uff0c\u8fd9\u91cc\u4ee5\u6700\u57fa\u672c\u7684\u76ee\u5f55\u7c7b\u578b\u4e3a\u4f8b"}),"\n",(0,r.jsx)(t.p,{children:"\u57fa\u672c\u6982\u5ff5\uff1a"}),"\n",(0,r.jsx)(t.p,{children:"\u5728libvirt\u91cc\u4fdd\u5b58\u865a\u62df\u673a\u78c1\u76d8\u955c\u50cf\u7684\u76ee\u5f55\u6216\u8bbe\u5907\u79f0\u4f5c\u5b58\u50a8\u6c60  \u5373pool  \uff0c\u6bcf\u4e2a\u865a\u62df\u673a\u6240\u4f7f\u7528\u7684\u865a\u62df\u78c1\u76d8\u955c\u50cf\u79f0\u4f5c\u5377 \u5373vol \uff0cvol\u662f\u5b58\u50a8\u5728pool\u91cc\u9762\u7684\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u884c\u7684virsh\u5de5\u5177\u6765\u7ba1\u7406\uff0cpool\u6709\u4e24\u79cd\u57fa\u672c\u72b6\u6001\uff1a\u6d3b\u52a8\u548c\u975e\u6d3b\u52a8\uff0c\u67e5\u770b\u5f53\u524d\u5b58\u50a8\u6c60\u7684\u72b6\u6001"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"virsh # pool-list --all \nName State Autostart \n-----------------------------------------\ndefault inactive yes \ndisk active yes\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u65b0\u5efa\u4e00\u4e2a\u57fa\u4e8e\u76ee\u5f55\u7684\u5b58\u50a8\u6c60bigpool \u5b58\u50a8\u8def\u5f84\u4e3a /bigpool"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"virsh # pool-define-as bigpool dir - - - - /bigpool\nPool bigpool defined\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u8fd9\u65f6\u5019pool\u4ec5\u4ec5\u662f\u5b9a\u4e49\u51fa\u6765\u4e86\uff0c\u53ef\u4ee5\u7528pool-list --all\u67e5\u770b\u5230\u3002\u4f46\u662f\u76f8\u5e94\u7684\u76ee\u5f55\u662f\u4e0d\u5b58\u5728\u7684\uff0c\u63a5\u7740\u9700\u8981\u5efa\u7acb\u8fd9\u4e2apool"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"virsh # pool-build bigpool\nPool bigpool built\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u8fd9\u4e2a\u65f6\u5019\u624d\u662f\u771f\u6b63\u7684\u5efa\u7acb\u8d77\u8fd9\u4e2apool\uff0clibvirt\u4f1a\u81ea\u52a8\u521b\u5efa/bigpool\u76ee\u5f55\uff0c\u5e76\u8bbe\u7f6e\u76f8\u5e94\u7684\u6743\u9650\uff0c\u5982\u679c\u4f60\u6709\u7528selinux\u4f5c\u4e3alibvirt\u7684\u5b89\u5168\u63aa\u65bd\u7684\u8bdd\u5b83\u8fd8\u80fd\u81ea\u52a8\u8bbe\u7f6e\u4e0a\u4e0b\u6587"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"# ls -Zld /bigpool/\ndrwx------ 2 ? root root 4096 Jul 13 12:54 /bigpool/\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u6211\u8fd9\u91cc\u7531\u4e8e\u6ca1\u6709\u4f7f\u7528selinux\u6240\u4ee5\u6ca1\u6709\u4e0a\u4e0b\u6587\u7684"}),"\n",(0,r.jsx)(t.p,{children:"pool\u521b\u5efa\u597d\u4e4b\u540e\u5c31\u53ef\u4ee5\u542f\u52a8\u4e86"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"virsh # pool-start bigpool\nPool bigpool started\n\nvirsh # pool-list --all \nName State Autostart \n-----------------------------------------\nbigpool active no \ndefault inactive yes \ndisk active yes\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u8fd8\u53ef\u4ee5\u8bbe\u7f6epool\u4e3a\u81ea\u52a8\u542f\u52a8"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"virsh # pool-autostart bigpool\nPool bigpool marked as autostarted\n\nvirsh # pool-list --all \nName State Autostart \n-----------------------------------------\nbigpool active yes \ndefault inactive yes \ndisk active yes\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u57fa\u4e8e\u76ee\u5f55\u7684\u4e00\u4e2a\u5b58\u50a8\u6c60\u5c31\u8fd9\u6837\u5efa\u7acb\u5b8c\u6210\u4e86\uff0c\u662f\u4e0d\u662f\u5f88\u7b80\u5355\uff1f"})]})}function d(e={}){const{wrapper:t}={...(0,n.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},3905:(e,t,o)=>{o.d(t,{ah:()=>p});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var a=r.createContext({}),p=function(e){var t=r.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),b=p(o),u=n,g=b["".concat(a,".").concat(u)]||b[u]||c[u]||i;return o?r.createElement(g,l(l({ref:t},d),{},{components:o})):r.createElement(g,l({ref:t},d))}));d.displayName="MDXCreateElement"}}]);