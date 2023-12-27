"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[588],{6205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var r=n(5893),s=n(3905);const o={layout:"post",title:"CentOS7\u7cfb\u7edf\u5b89\u88c5ansible awx\u8bb0\u5f55",description:"\u8bb0\u5f55awx\u7684\u5b89\u88c5\u6d4b\u8bd5\u8fc7\u7a0b\u4ee5\u53ca\u9700\u8981\u6ce8\u610f\u7684\u70b9",categories:["system"],tags:["system","shell"]},l=void 0,a={permalink:"/notes/blog/2017/12/20/centos7-install-ansible-awx",editUrl:"https://github.com/itxx00/notes/tree/main/blog/2017-12-20-centos7-install-ansible-awx.md",source:"@site/blog/2017-12-20-centos7-install-ansible-awx.md",title:"CentOS7\u7cfb\u7edf\u5b89\u88c5ansible awx\u8bb0\u5f55",description:"\u8bb0\u5f55awx\u7684\u5b89\u88c5\u6d4b\u8bd5\u8fc7\u7a0b\u4ee5\u53ca\u9700\u8981\u6ce8\u610f\u7684\u70b9",date:"2017-12-20T00:00:00.000Z",formattedDate:"2017\u5e7412\u670820\u65e5",tags:[{label:"system",permalink:"/notes/blog/tags/system"},{label:"shell",permalink:"/notes/blog/tags/shell"}],readingTime:1.495,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"CentOS7\u7cfb\u7edf\u5b89\u88c5ansible awx\u8bb0\u5f55",description:"\u8bb0\u5f55awx\u7684\u5b89\u88c5\u6d4b\u8bd5\u8fc7\u7a0b\u4ee5\u53ca\u9700\u8981\u6ce8\u610f\u7684\u70b9",categories:["system"],tags:["system","shell"]},unlisted:!1,prevItem:{title:"\u7cfb\u7edf\u4e2d\u7684\u968f\u673a\u6570\u548c\u71b5\u503c",permalink:"/notes/blog/2019/05/12/random-and-entropy-in-centos7"},nextItem:{title:"\u5f88\u8be1\u5f02\u7684\u670d\u52a1\u65e5\u5fd7\u65e0\u6cd5\u5207\u5272\u95ee\u9898\u5206\u6790",permalink:"/notes/blog/2017/10/19/bash-nohup-log-truncate"}},c={authorsImageUrls:[]},i=[{value:"\u5173\u4e8eawx",id:"\u5173\u4e8eawx",level:2},{value:"\u5b89\u88c5\u8fc7\u7a0b",id:"\u5b89\u88c5\u8fc7\u7a0b",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u8bb0\u5f55awx\u7684\u5b89\u88c5\u6d4b\u8bd5\u8fc7\u7a0b\u4ee5\u53ca\u9700\u8981\u6ce8\u610f\u7684\u70b9"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u5173\u4e8eawx",children:"\u5173\u4e8eawx"}),"\n",(0,r.jsxs)(t.p,{children:["awx(",(0,r.jsx)(t.a,{href:"https://github.com/ansible/awx)%E6%98%AFansible",children:"https://github.com/ansible/awx)\u662fansible"})," tower\u7684\u5f00\u6e90\u7248\u672c\uff0c\u4f5c\u4e3atower\u7684upstream\u5bf9\u5916\u5f00\u6e90\uff0c\n\u9879\u76ee\u4ece2013\u5e74\u5f00\u59cb\u7ef4\u62a4\uff0c2017\u5e74\u7531redhat\u5bf9\u5916\u5f00\u6e90\uff0c\u76ee\u524d\u7ef4\u62a4\u5f97\u6bd4\u8f83\u6d3b\u8dc3\u3002\u7531\u4e8e\u5b98\u65b9\u7684install guide\u5199\u5f97\u6709\u70b9\u6742\u4e0d\u662f\u5f88\u76f4\u89c2\uff0c\n\u5bfc\u81f4\u60f3\u8981\u5b89\u88c5\u4e2a\u7b80\u5355\u7684\u6d4b\u8bd5\u73af\u5883\u4f53\u9a8c\u4e00\u4e0b\u529f\u80fd\u90fd\u8981\u6298\u817e\u534a\u5929\uff0c\u8fd9\u91cc\u63d0\u4f9b\u4e00\u4e2a\u7b80\u5355\u7248\u672c\u7684\u5b89\u88c5\u6d41\u7a0b\u65b9\u4fbf\u5feb\u901f\u4f53\u9a8c\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"\u5b89\u88c5\u8fc7\u7a0b",children:"\u5b89\u88c5\u8fc7\u7a0b"}),"\n",(0,r.jsx)(t.p,{children:"\u5b89\u88c5\u8f6f\u4ef6\u5305"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"yum -y install epel-release\nsystemctl disable firewalld\nsystemctl stop firewalld\nsed -i 's/SELINUX=enforcing/SELINUX=disabled/g' /etc/selinux/config\nsetenforce 0\nyum -y install git gettext ansible docker nodejs npm gcc-c++ bzip2 python-docker-py\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u542f\u52a8\u670d\u52a1"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"systemctl start docker\nsystemctl enable docker\n"})}),"\n",(0,r.jsx)(t.p,{children:"clone awx\u4ee3\u7801"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"git clone https://github.com/ansible/awx.git\ncd awx/installer/\n# \u6ce8\u610f\u4fee\u6539\u4e00\u4e0bpostgres_data_dir\u5230\u5176\u4ed6\u76ee\u5f55\u6bd4\u5982/data/pgdocker\nvi inventory\nansible-playbook -i inventory install.yml\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u68c0\u67e5\u65e5\u5fd7"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"docker logs -f awx_task\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u4ee5\u4e0a\u662f\u5b89\u88c5\u8fc7\u7a0b\uff0c\u56e0\u4e3a\u672c\u5730\u73af\u5883\u8bbf\u95ee\u5916\u7f51\u8981\u7ecf\u8fc7\u4ee3\u7406\uff0c\u8fd9\u91cc\u8bb0\u5f55\u4e00\u4e0b\u914d\u7f6edocker\u901a\u8fc7\u4ee3\u7406\u8bbf\u95ee\u5916\u7f51\u7684\u65b9\u5f0f\uff0c\u5426\u5219pull image\u4f1a\u6709\u95ee\u9898\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'mkdir /etc/systemd/system/docker.service.d/\ncat > /etc/systemd/system/docker.service.d/http-proxy.conf <<EOF\n[Service]\nEnvironment="HTTP_PROXY=proxy.test.dev:8080" "HTTPS_PROXY=proxy.test.dev:8080" "NO_PROXY=localhost,127.0.0.1,172.1.0.2"\nEOF\n\nsystemctl daemon-reload\nsystemctl restart docker\nsystemctl show --property=Environment docker\n'})}),"\n",(0,r.jsx)(t.p,{children:"\u53c2\u8003\u6587\u6863\uff1a"}),"\n",(0,r.jsxs)(t.p,{children:["[1] ",(0,r.jsx)(t.a,{href:"http://khmel.org/?p=1245",children:"http://khmel.org/?p=1245"})]}),"\n",(0,r.jsxs)(t.p,{children:["[2] ",(0,r.jsx)(t.a,{href:"https://docs.docker.com/engine/admin/systemd/#httphttps-proxy",children:"https://docs.docker.com/engine/admin/systemd/#httphttps-proxy"})]})]})}function p(e={}){const{wrapper:t}={...(0,s.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>i});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),h=i(n),m=s,u=h["".concat(c,".").concat(m)]||h[m]||d[m]||o;return n?r.createElement(u,l(l({ref:t},p),{},{components:n})):r.createElement(u,l({ref:t},p))}));p.displayName="MDXCreateElement"}}]);