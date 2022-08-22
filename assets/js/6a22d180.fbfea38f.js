"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3752],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),b=o,m=d["".concat(l,".").concat(b)]||d[b]||u[b]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7974:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={layout:"post",title:"CentOS8\u5b89\u88c5\u540egrub\u83dc\u5355\u589e\u52a0windows\u5165\u53e3",description:"\u9ed8\u8ba4\u5b89\u88c5\u5b8c\u4e0d\u4f1a\u81ea\u52a8\u8bc6\u522b\u5176\u4ed6\u7cfb\u7edf\uff0c\u9700\u8981\u624b\u5de5\u6dfb\u52a0",categories:["os"],tags:["os","centos","grub","centos8"]},s=void 0,i={permalink:"/notes/blog/2020/03/12/centos8-bootmenu-add-windows",editUrl:"https://github.com/itxx00/notes/tree/main/blog/2020-03-12-centos8-bootmenu-add-windows.md",source:"@site/blog/2020-03-12-centos8-bootmenu-add-windows.md",title:"CentOS8\u5b89\u88c5\u540egrub\u83dc\u5355\u589e\u52a0windows\u5165\u53e3",description:"\u9ed8\u8ba4\u5b89\u88c5\u5b8c\u4e0d\u4f1a\u81ea\u52a8\u8bc6\u522b\u5176\u4ed6\u7cfb\u7edf\uff0c\u9700\u8981\u624b\u5de5\u6dfb\u52a0",date:"2020-03-12T00:00:00.000Z",formattedDate:"2020\u5e743\u670812\u65e5",tags:[{label:"os",permalink:"/notes/blog/tags/os"},{label:"centos",permalink:"/notes/blog/tags/centos"},{label:"grub",permalink:"/notes/blog/tags/grub"},{label:"centos8",permalink:"/notes/blog/tags/centos-8"}],readingTime:1.35,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"CentOS8\u5b89\u88c5\u540egrub\u83dc\u5355\u589e\u52a0windows\u5165\u53e3",description:"\u9ed8\u8ba4\u5b89\u88c5\u5b8c\u4e0d\u4f1a\u81ea\u52a8\u8bc6\u522b\u5176\u4ed6\u7cfb\u7edf\uff0c\u9700\u8981\u624b\u5de5\u6dfb\u52a0",categories:["os"],tags:["os","centos","grub","centos8"]},prevItem:{title:"python\u811a\u672c\u89e3\u538bgbk\u7f16\u7801zip",permalink:"/notes/blog/2020/03/27/unzip-gbk-with-python"},nextItem:{title:"shell style guide",permalink:"/notes/blog/2020/01/03/shell-standards"}},l={authorsImageUrls:[]},c=[{value:"1 \u542f\u52a8\u8fdb\u5165centos",id:"1-\u542f\u52a8\u8fdb\u5165centos",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u7535\u8111\u53cc\u7cfb\u7edfcentos+windows\uff0c\u5b89\u88c5\u5b8ccentos8\u4e4b\u540e\u9ed8\u8ba4\u6ca1\u6709\u5f15\u5bfcwindows\u7684\u5165\u53e3\uff0c\u6309\u7167\u4e0b\u9762\u65b9\u6cd5\u624b\u6413\u5373\u53ef\u3002")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,o.kt)("h2",{id:"1-\u542f\u52a8\u8fdb\u5165centos"},"1 \u542f\u52a8\u8fdb\u5165centos"),(0,o.kt)("p",null,"\u67e5\u770b\u78c1\u76d8\u5206\u533a\u4fe1\u606f\uff0c\u5982\u4e0b\uff1a\n",(0,o.kt)("inlineCode",{parentName:"p"},"fdisk -l")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# fdisk -l\nDisk /dev/sda: 238.5 GiB, 256060514304 bytes, 500118192 sectors\nUnits: sectors of 1 * 512 = 512 bytes\nSector size (logical/physical): 512 bytes / 512 bytes\nI/O size (minimum/optimal): 512 bytes / 512 bytes\nDisklabel type: dos\nDisk identifier: 0x297f5cef\n\nDevice     Boot     Start       End   Sectors   Size Id Type\n/dev/sda1  *         2048 250058751 250056704 119.2G  7 HPFS/NTFS/exFAT\n/dev/sda2       250058752 393418751 143360000  68.4G  7 HPFS/NTFS/exFAT\n/dev/sda3       393418752 394442751   1024000   500M 83 Linux\n/dev/sda4       394442752 500117503 105674752  50.4G  5 Extended\n/dev/sda5       394444800 500117503 105672704  50.4G 83 Linux\n")),(0,o.kt)("p",null,"\u901a\u8fc7fdisk\u7ed3\u679c\u770b\u5230windows\u7b2c\u4e00\u4e2apartion\u5728sda1\uff0c\u5bf9\u5e94grub\u7684\u78c1\u76d8\u7d22\u5f15\u7f16\u53f7\u662fhd0,1,\u63a5\u4e0b\u6765\u7f16\u8f91grub\u914d\u7f6e\u6587\u4ef6\uff0c\u81ea\u5b9a\u4e49\u914d\u7f6e\u8def\u5f84\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," vi  /etc/grub.d/40_custom\n")),(0,o.kt)("p",null,"\u914d\u7f6e\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," #!/bin/sh\n exec tail -n +3 $0\n # This file provides an easy way to add custom menu entries.  Simply type the\n # menu entries you want to add after this comment.  Be careful not to change\n # the 'exec tail' line above.\n\n menuentry \"Windows\" {\n         set root=(hd0,1)\n         chainloader +1\n         }\n")),(0,o.kt)("p",null,"\u4fdd\u5b58\u5e76\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u4f7f\u81ea\u5b9a\u4e49\u914d\u7f6e\u751f\u6548\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"grub2-mkconfig --output=/boot/grub2/grub.cfg\n")),(0,o.kt)("p",null,"OVER."))}u.isMDXComponent=!0}}]);