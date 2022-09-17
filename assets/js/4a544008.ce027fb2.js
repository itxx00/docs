"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9167],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},b=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),b=p(n),u=r,m=b["".concat(o,".").concat(u)]||b[u]||s[u]||l;return n?a.createElement(m,i(i({ref:e},d),{},{components:n})):a.createElement(m,i({ref:e},d))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=b;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5568:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={layout:"post",title:"\u4f7f\u7528libvirt\u548ctc\u5b9e\u73b0vm\u5e26\u5bbd\u63a7\u5236",description:"",categories:["virt"],tags:["libvirt","tc","bandwidth"]},i=void 0,c={permalink:"/notes/blog/2013/03/01/libvirt-tc-bandwidth-control",editUrl:"https://github.com/itxx00/notes/tree/main/blog/2013-03-01-libvirt-tc-bandwidth-control.md",source:"@site/blog/2013-03-01-libvirt-tc-bandwidth-control.md",title:"\u4f7f\u7528libvirt\u548ctc\u5b9e\u73b0vm\u5e26\u5bbd\u63a7\u5236",description:"",date:"2013-03-01T00:00:00.000Z",formattedDate:"2013\u5e743\u67081\u65e5",tags:[{label:"libvirt",permalink:"/notes/blog/tags/libvirt"},{label:"tc",permalink:"/notes/blog/tags/tc"},{label:"bandwidth",permalink:"/notes/blog/tags/bandwidth"}],readingTime:3.53,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"\u4f7f\u7528libvirt\u548ctc\u5b9e\u73b0vm\u5e26\u5bbd\u63a7\u5236",description:"",categories:["virt"],tags:["libvirt","tc","bandwidth"]},prevItem:{title:"Ovirt\u4e2d\u7684stateless\u5b9e\u73b0\u673a\u5236\u5206\u6790",permalink:"/notes/blog/2013/03/14/ovirt-stateless"},nextItem:{title:"\u6d45\u6790qcow2\u955c\u50cf\u6587\u4ef6\u7684\u5feb\u7167\u5408\u5e76",permalink:"/notes/blog/2012/11/23/libvirt-snapshot-blockcommit-blockpull"}},o={authorsImageUrls:[]},p=[{value:"cbq\u961f\u5217\u793a\u4f8b",id:"cbq\u961f\u5217\u793a\u4f8b",level:2},{value:"1.\u5efa\u7acbcbq\u961f\u5217",id:"1\u5efa\u7acbcbq\u961f\u5217",level:3},{value:"2.\u5efa\u7acb\u5e26\u5bbd\u9650\u5236\u5206\u7c7b",id:"2\u5efa\u7acb\u5e26\u5bbd\u9650\u5236\u5206\u7c7b",level:3},{value:"3.\u5efa\u7acb\u8fc7\u6ee4\u5668",id:"3\u5efa\u7acb\u8fc7\u6ee4\u5668",level:3},{value:"htb\u961f\u5217\u793a\u4f8b",id:"htb\u961f\u5217\u793a\u4f8b",level:2},{value:"libvirt\u4e2d\u7684\u5e26\u5bbd\u63a7\u5236",id:"libvirt\u4e2d\u7684\u5e26\u5bbd\u63a7\u5236",level:2}],d={toc:p};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728kvm\u865a\u62df\u673a\u7ba1\u7406\u7684\u8fc7\u7a0b\u5f53\u4e2d\uff0c\u5bf9\u865a\u62df\u673a\u5e26\u5bbd\u8fdb\u884c\u826f\u597d\u7684\u63a7\u5236\u662f\u5341\u5206\u91cd\u8981\u7684\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,r.kt)("p",null,"linux\u7cfb\u7edf\u5f53\u4e2d\u5bf9\u7f51\u7edc\u5e26\u5bbd\u7684\u63a7\u5236\u4e00\u822c\u90fd\u662f\u4f7f\u7528tc\u547d\u4ee4\u5b9e\u73b0\uff0ctc\u5373\u662ftraffic control\u7684\u7f29\u5199\uff0c\u5728",(0,r.kt)("a",{parentName:"p",href:"http://linux-ip.net/articles/Traffic-Control-HOWTO/"},"\u8fd9\u91cc"),"\u53ef\u4ee5\u627e\u5230\u6709\u5173tc\u547d\u4ee4\u7684\u5185\u5bb9\u3002"),(0,r.kt)("p",null,"\u5f53\u7136\u4f60\u53ef\u4ee5\u624b\u52a8\u4f7f\u7528tc\u547d\u4ee4\u6765\u5904\u7406\u8fd9\u4e9b\u4e8b\u60c5\uff0c\u6bd4\u5982\u4f7f\u7528cbq\u961f\u5217\uff0chtb\u961f\u5217\u7b49\uff0c\u90fd\u662f\u53ef\u4ee5\u5b9e\u73b0\u7684\uff0c\u7f51\u4e0a\u627e\u627e\u5e94\u8be5\u6709\u5f88\u591a\u5173\u4e8e\u8fd9\u65b9\u9762\u7684\u8d44\u6599\uff0c"),(0,r.kt)("h2",{id:"cbq\u961f\u5217\u793a\u4f8b"},"cbq\u961f\u5217\u793a\u4f8b"),(0,r.kt)("p",null,"\u6bd4\u5982\u4e0b\u9762\u5c31\u662f\u4f7f\u7528cbq\u961f\u5217\u9650\u5236src ip\u4e3a192.168.1.102\u53d1\u9001\u6570\u636e\u5305\u7684\u901f\u7387:"),(0,r.kt)("h3",{id:"1\u5efa\u7acbcbq\u961f\u5217"},"1.\u5efa\u7acbcbq\u961f\u5217"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tc qdisc add dev eth0 root handle 1: cbq avpkt 1000 bandwidth 100mbit\n")),(0,r.kt)("h3",{id:"2\u5efa\u7acb\u5e26\u5bbd\u9650\u5236\u5206\u7c7b"},"2.\u5efa\u7acb\u5e26\u5bbd\u9650\u5236\u5206\u7c7b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tc class add dev eth0 parent 1: classid 1:1 cbq rate 60mbit allot 1500 prio 5 bounded isolated\ntc class add dev eth0 parent 1: classid 1:2 cbq rate 70mbit allot 1500 prio 5 bounded isolated\ntc class add dev eth0 parent 1: classid 1:3 cbq rate 80mbit allot 1500 prio 5 bounded isolated\n")),(0,r.kt)("h3",{id:"3\u5efa\u7acb\u8fc7\u6ee4\u5668"},"3.\u5efa\u7acb\u8fc7\u6ee4\u5668"),(0,r.kt)("p",null,"\u7ed1\u5b9a\u6307\u5b9a\u5e26\u5bbd\u9650\u5236\u7c7b\u578b\u81f3\u6307\u5b9a\u865a\u62df\u673aip:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tc filter add dev eth0 parent 1: protocol ip prio 16 u32 match ip src 192.168.1.102 flowid 1:2\n")),(0,r.kt)("h2",{id:"htb\u961f\u5217\u793a\u4f8b"},"htb\u961f\u5217\u793a\u4f8b"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u6bcd\u673a\u4e0a\u7ed9vm\u5bf9\u5e94\u7684\u865a\u62df\u7f51\u5361\u589e\u52a0tc\u89c4\u5219\uff0c\u4f7f\u7528htb\u961f\u5217\uff0c\u4e00\u4e2a\u53ef\u7528\u7684\u811a\u672c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# add interface bandwidth limit\n# usage: tc_add iface in_kbps out_kbps\ntc_add() {\n    local iface=$1\n    local in_bw=$2\n    local out_bw=$3\n    local in_average="${in_bw}kbps"\n    local in_peak="${in_bw}kbps"\n    local out_average="${out_bw}kbps"\n    local out_peak="${out_bw}kbps"\n    local burst="2kb"\n    local mtu=1500\n    local r2q=$((in_bw*1000/mtu-1))\n    local tc="/sbin/tc"\n    [ $r2q -lt 1 ] && r2q=1\n    if [ $in_bw != 0 ]; then\n        $tc qdisc add dev $iface root handle 1: htb default 2 r2q $r2q\n        $tc class add dev $iface parent 1: classid 1:1 htb rate $in_average \\\n            ceil $in_peak burst $burst cburst $burst\n        $tc class add dev $iface parent 1:1 classid 1:2 htb rate $in_average \\\n            ceil $in_peak burst $burst cburst $burst\n        $tc qdisc add dev $iface parent 1:2 handle 2: sfq perturb 10\n        $tc filter add dev $iface parent 1:0 protocol ip handle 1 fw flowid 1\n    fi\n    if [ $out_bw != 0 ]; then\n        $tc qdisc add dev $iface ingress\n        $tc filter add dev $iface parent ffff: protocol ip u32 match ip src \\\n            0.0.0.0/0 police rate $out_average burst ${out_bw}kb mtu 64kb drop \\\n            flowid :1\n    fi\n}\n\n# clean up interface bandwidth limit\n# usage: tc_del iface\ntc_del() {\n    local iface=$1\n    local tc="/sbin/tc"\n    $tc qdisc del dev $iface root &>>/dev/null\n    sleep 0.1\n    $tc qdisc del dev $iface ingress &>>/dev/null\n}\n\n')),(0,r.kt)("h2",{id:"libvirt\u4e2d\u7684\u5e26\u5bbd\u63a7\u5236"},"libvirt\u4e2d\u7684\u5e26\u5bbd\u63a7\u5236"),(0,r.kt)("p",null,"\u6211\u6bd4\u8f83\u63a8\u8350\u7684\u65b9\u6cd5\u8fd8\u662f\u76f4\u63a5\u4f7f\u7528libvirt\uff0clibvirt \u4e2d\u5df2\u7ecf\u96c6\u6210\u4e86\u5e26\u5bbd\u63a7\u5236\u7684\u529f\u80fd\uff0c\u4e0b\u9762\u662f\u5173\u4e8e\u5e26\u5bbd\u63a7\u5236\u90e8\u5206\u7684xml\u63cf\u8ff0:"),(0,r.kt)("p",null,"\u4f7f\u7528\u65b9\u6cd5\uff1a\u5728\u7f51\u5361interface\u4e2d\u52a0\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<bandwidth>\n<inbound average='1000' peak='5000' burst='1024'/>\n<outbound average='128' peak='256' burst='256'/>\n</bandwidth>\n")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u5173\u4e8e\u5404\u9879\u53c2\u6570\u7684\u89e3\u91ca\uff0c\u83b7\u53d6\u6700\u65b0\u7684\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"http://www.libvirt.org/"},"libvirt\u6587\u6863"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"mandatory attribute:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"average: It specifies average bit rate on interface being shaped."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"optional attributes:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"peak: which specifies maximum rate at which interface can send data,"),(0,r.kt)("li",{parentName:"ul"},"burst: amount of bytes that can be burst at peak speed.")))),(0,r.kt)("p",null,"Accepted values: integer numbers."),(0,r.kt)("p",null,"units:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"average: kilobytes per second"),(0,r.kt)("li",{parentName:"ul"},"peak: kilobytes per second"),(0,r.kt)("li",{parentName:"ul"},"burst: kilobytes.")))}s.isMDXComponent=!0}}]);