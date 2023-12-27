"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5547],{8560:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var r=a(5893),t=a(3905);const o={layout:"post",title:"HADOOP3.0.0\u7ea0\u5220\u7801\u6d4b\u8bd5",description:"\u63cf\u8ff0",categories:["bigdata"],tags:["hadoop","bigdata"]},d=void 0,s={permalink:"/notes/blog/2017/08/20/hadoop3-ec-test",editUrl:"https://github.com/itxx00/notes/tree/main/blog/2017-08-20-hadoop3-ec-test.md",source:"@site/blog/2017-08-20-hadoop3-ec-test.md",title:"HADOOP3.0.0\u7ea0\u5220\u7801\u6d4b\u8bd5",description:"\u63cf\u8ff0",date:"2017-08-20T00:00:00.000Z",formattedDate:"2017\u5e748\u670820\u65e5",tags:[{label:"hadoop",permalink:"/notes/blog/tags/hadoop"},{label:"bigdata",permalink:"/notes/blog/tags/bigdata"}],readingTime:5.69,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"HADOOP3.0.0\u7ea0\u5220\u7801\u6d4b\u8bd5",description:"\u63cf\u8ff0",categories:["bigdata"],tags:["hadoop","bigdata"]},unlisted:!1,prevItem:{title:"\u5f88\u8be1\u5f02\u7684\u670d\u52a1\u65e5\u5fd7\u65e0\u6cd5\u5207\u5272\u95ee\u9898\u5206\u6790",permalink:"/notes/blog/2017/10/19/bash-nohup-log-truncate"},nextItem:{title:"k8s\u6d4b\u8bd5\u73af\u5883\u90e8\u7f72\u8bb0\u5f55",permalink:"/notes/blog/2017/08/18/deploy-k8s-from-local-repo"}},l={authorsImageUrls:[]},h=[{value:"\u57fa\u7840\u73af\u5883",id:"\u57fa\u7840\u73af\u5883",level:2},{value:"\u6d4b\u8bd5\u96c6\u7fa4\u5b89\u88c5",id:"\u6d4b\u8bd5\u96c6\u7fa4\u5b89\u88c5",level:2},{value:"\u57fa\u7840\u5305\u5b89\u88c5",id:"\u57fa\u7840\u5305\u5b89\u88c5",level:3},{value:"\u914d\u7f6e\u6587\u4ef6\u4fee\u6539",id:"\u914d\u7f6e\u6587\u4ef6\u4fee\u6539",level:3},{value:"\u542f\u52a8HDFS",id:"\u542f\u52a8hdfs",level:2},{value:"\u683c\u5f0f\u5316namenode",id:"\u683c\u5f0f\u5316namenode",level:3},{value:"\u542f\u52a8namenode\u548cdatanode",id:"\u542f\u52a8namenode\u548cdatanode",level:3},{value:"\u6d4b\u8bd5hdfs",id:"\u6d4b\u8bd5hdfs",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u8bb0\u5f55hadoop3.0.0\u7248\u672c\u6d4b\u8bd5\u5b89\u88c5\u8fc7\u7a0b\uff0c\u5bf9hadoop3.0.0\u4e2d\u7ea0\u5220\u7801\u8fdb\u884c\u4e86\u7b80\u5355\u6d4b\u8bd5\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u57fa\u7840\u73af\u5883",children:"\u57fa\u7840\u73af\u5883"}),"\n",(0,r.jsx)(n.p,{children:"HADOOP3.0.0\u7248\u672c\u4e2d\u589e\u52a0\u4e86\u7ea0\u5220\u7801\u6280\u672f\uff0c\u5728\u63d0\u9ad8\u53ef\u7528\u6027\u7684\u540c\u65f6\u8fd8\u80fd\u51cf\u4f4e\u5b58\u50a8\u6210\u672c\uff0c\u76ee\u524d\u5904\u4e8e\u5b9e\u9a8c\u9636\u6bb5\uff0c\u4ee5\u4e0b\u5c06\u6d4b\u8bd5\u73af\u5883\u4e2d\u7684\u642d\u5efa\u6b65\u9aa4\u53ca\u7b80\u5355\u6d4b\u8bd5\u8fc7\u7a0b\u8fdb\u884c\u8bb0\u5f55\u3002\u672c\u6b21\u4ec5\u5bf9hdfs\u8fdb\u884c\u6d4b\u8bd5\uff0c\u56e0\u6b64\u4e0d\u4f1a\u90e8\u7f72\u5176\u4ed6\u670d\u52a1\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u7cfb\u7edf\u73af\u5883\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"kvm\u865a\u62df\u673a\uff0c1\u4e2anamenode\u8282\u70b9\uff0c6\u4e2adatanode\u8282\u70b9\uff0c4core \uff0c8G mem \uff0c 50G disk"}),"\n",(0,r.jsx)(n.p,{children:"hadoop\u7248\u672c\uff1a3.0.0-alpha4"}),"\n",(0,r.jsx)(n.p,{children:"java\u7248\u672c\uff1a 1.8.0_144"}),"\n",(0,r.jsx)(n.h2,{id:"\u6d4b\u8bd5\u96c6\u7fa4\u5b89\u88c5",children:"\u6d4b\u8bd5\u96c6\u7fa4\u5b89\u88c5"}),"\n",(0,r.jsx)(n.h3,{id:"\u57fa\u7840\u5305\u5b89\u88c5",children:"\u57fa\u7840\u5305\u5b89\u88c5"}),"\n",(0,r.jsx)(n.p,{children:"\u4eceapache\u955c\u50cf\u4e0b\u8f7dhadoop-3.0.0-alpha4\uff0c\u5f53\u524d\u6700\u65b0\u7248\u672c\uff0chadoop home\u76ee\u5f55/opt/hadoop\uff0c\u5728namenode\u8282\u70b9\u5c06\u914d\u7f6e\u7b49\u4fee\u6539\u597d\u4e4b\u540e\u62f7\u8d1d\u5230\u6240\u6709datanode\u8282\u70b9\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"tar xf hadoop-3.0.0-alpha4.tar.gz\nmv hadoop-3.0.0-alpha4 /opt/hadoop\nyum -y install jdk --disablerepo=* --enablerepo=local-custom\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u914d\u7f6e\u6587\u4ef6\u4fee\u6539",children:"\u914d\u7f6e\u6587\u4ef6\u4fee\u6539"}),"\n",(0,r.jsx)(n.p,{children:"\u9700\u8981\u4fee\u6539\u7684\u914d\u7f6e\u6587\u4ef6\u6709hadoop-env.sh \u3001core-site.xml\u3001hdfs-site.xml"}),"\n",(0,r.jsxs)(n.p,{children:["\u4fee\u6539",(0,r.jsx)(n.code,{children:"/opt/hadoop/etc/hadoop/hadoop-env.sh"}),"\u4e2d\u4ee5\u4e0b\u53c2\u6570\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'export JAVA_HOME=/usr/java/jdk1.8.0_144\nexport HADOOP_HOME=/opt/hadoop\n# \u6ce8\u610f\u8fd9\u91cc\u914d\u7f6eheapsize\u548c2.7\u7248\u672c\u7684\u5dee\u522b\uff0c2.7\u4e3aHADOOP_HEAPSIZE\nexport HADOOP_HEAPSIZE_MAX=1024\nexport HADOOP_OPTS="$HADOOP_OPTS -Djava.net.preferIPv4Stack=true\u201d\nexport HADOOP_CLIENT_OPTS="-Xmx512m $HADOOP_CLIENT_OPTS\u201d\nexport HADOOP_LOG_DIR=${HADOOP_HOME}/logs\nexport HADOOP_PID_DIR=/tmp\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4fee\u6539",(0,r.jsx)(n.code,{children:"/opt/hadoop/etc/hadoop/hdfs-site.xml"}),"\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<configuration>\n   <property>\n      <name>dfs.blocksize</name>\n      <value>134217728</value>\n    </property>\n   <property>\n      <name>dfs.datanode.data.dir</name>\n      <value>/data/hdfs/data</value>\n      <final>true</final>\n    </property>\n    <property>\n      <name>dfs.namenode.name.dir</name>\n      <value>/data/hdfs/namenode</value>\n      <final>true</final>\n    </property>\n   <property>\n      <name>dfs.namenode.rpc-address</name>\n      <value>192.168.199.26:8020</value>\n    </property>\n</configuration>\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u73af\u5883\u53d8\u91cf\u589e\u52a0\u5230\u5f53\u524d\u7528\u6237bashrc\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# ~/.bashrc\nexport HADOOP_HOME=/opt/hadoop\nexport PATH=$PATH:/opt/hadoop/bin\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u914d\u7f6e\u4fee\u6539\u5b8c\u6210\u540e\u5c06/opt/hadoop\u6574\u4e2a\u76ee\u5f55\u540c\u6b65\u5230\u6240\u6709datanode\u8282\u70b9\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u542f\u52a8hdfs",children:"\u542f\u52a8HDFS"}),"\n",(0,r.jsx)(n.h3,{id:"\u683c\u5f0f\u5316namenode",children:"\u683c\u5f0f\u5316namenode"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"hdfs namenode -format ns1\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u542f\u52a8namenode\u548cdatanode",children:"\u542f\u52a8namenode\u548cdatanode"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u6ce8\u610f3.0.0\u7248\u672c\u7684\u5dee\u522b\uff0c\u57282.7\u4e2d\u542f\u52a8\u811a\u672c\u5982\u4e0b\nhadoop-daemon.sh --config $HADOOP_HOME/etc/hadoop --script hdfs start namenode\nhadoop-daemon.sh --config $HADOOP_HOME/etc/hadoop --script hdfs start datanode\n# \u65b0\u7248\u672c\u4e2d\u5df2\u7ecf\u91cd\u5199\u4e86\u7ba1\u7406\u811a\u672c\uff0c\u7edf\u4e00\u5230hdfs\u547d\u4ee4\u4e2d\uff0c\u542f\u52a8\u65b9\u5f0f\u5982\u4e0b\uff1a\nhdfs --daemon start namenode\nhdfs --daemon start datanode\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u542f\u52a8\u6210\u529f\u4e4b\u540e\u5373\u53ef\u901a\u8fc7",(0,r.jsx)(n.a,{href:"http://192.168.199.26:9870/dfshealth.html#tab-datanode",children:"namenode web ui"}),"\u89c2\u5bdf\u5230\u96c6\u7fa4\u57fa\u672c\u60c5\u51b5\uff0c2.7\u4e2d\u9ed8\u8ba4web ui\u7aef\u53e3\u4e3a50070\uff0c\u800c3.0.0\u4e2d\u4fee\u6539\u4e3a9870\uff0c"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6d4b\u8bd5hdfs",children:"\u6d4b\u8bd5hdfs"}),"\n",(0,r.jsx)(n.p,{children:"\u542f\u52a8\u5b8c\u6210\u4e4b\u540e\u53ef\u4ee5\u901a\u8fc7hdfs\u547d\u4ee4\u6d4b\u8bd5\u670d\u52a1\u662f\u5426\u53ef\u7528\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"hdfs dfs -mkdir hdfs://192.168.199.26:8020/t1/\ndd if=/dev/urandom of=f1 bs=1M count=5000\nhdfs dfs -put f1 hdfs://192.168.199.26:8020/t1/\nhdfs dfs -rm -skipTrash hdfs://192.168.199.26:8020/t1/f1\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\u4f7f\u7528\u7684\u65f6\u5019\u9700\u8981\u5199\u5b8c\u6574\u7684hdfs\u534f\u8bae\u548cnamenode",":port","\uff0c\u6211\u4eec\u53ef\u4ee5\u4fee\u6539\u4e00\u4e0b\u914d\u7f6e\u6587\u4ef6\uff0c\u5c06defaultfs\u4fee\u6539\u4e3ahdfs\u534f\u8bae\uff0c\u65b9\u4fbf\u6d4b\u8bd5\u3002\u540c\u65f6\u6b64\u7248\u672c\u4e2d\u9ed8\u8ba4\u5e76\u672a\u542f\u7528\u7ea0\u5220\u7801\uff0c\u9700\u8981\u624b\u5de5\u914d\u7f6e\u3002\n\u9ed8\u8ba4\u5185\u7f6e\u652f\u6301\u7684policy\u6709 RS-3-2-64k, RS-6-3-64k, RS-10-4-64k, RS-LEGACY-6-3-64k, XOR-2-1-64k\uff0c\u6211\u8fd9\u91cc\u53ea\u51c6\u5907\u4e86\u5c11\u91cf\u8282\u70b9\uff0c\u56e0\u6b64\u53ea\u5bf9\u5176\u4e2d\u4e24\u79cd\u8fdb\u884c\u7b80\u5355\u6d4b\u8bd5\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4fee\u6539",(0,r.jsx)(n.code,{children:"hdfs-site.xml"})," \u589e\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"    <property>\n      <name>dfs.namenode.ec.policies.enabled</name>\n      <value>XOR-2-1-64k,RS-3-2-64k</value>\n    </property>\n    <property>\n      <name>dfs.nameservices</name>\n      <value>ns1</value>\n    </property>\n    <property>\n        <name>dfs.ha.namenodes.ns1</name>\n        <value>nn1</value>\n    </property>\n    <property>\n      <name>dfs.namenode.rpc-address.ns1.nn1</name>\n      <value>192.168.199.26:8020</value>\n    </property>\n    <property>\n        <name>dfs.client.failover.proxy.provider.ns1</name>\n        <value>org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider</value>\n    </property>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4fee\u6539",(0,r.jsx)(n.code,{children:"core-site.xml"}),"\u589e\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<configuration>\n    <property>\n      <name>fs.defaultFS</name>\n      <value>hdfs://ns1</value>\n      <final>true</final>\n    </property>\n</configuration>\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u91cd\u542fnamenode\u8282\u70b9\u540e\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u7ea0\u5220\u7801\u4e86\uff0c\u7ea0\u5220\u7801\u53ef\u4ee5\u9488\u5bf9\u76ee\u5f55\u8fdb\u884c\u8bbe\u7f6e\uff0c\u4e0d\u540c\u7684\u76ee\u5f55\u8bbe\u7f6e\u4e0d\u540c\u7684\u7b56\u7565\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"hdfs ec -setPolicy -policy XOR-2-1-64k -path /t1\nhdfs ec -setPolicy -policy RS-3-2-64k -path /t2\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u51c6\u5907\u4e863\u4e2a\u76ee\u5f55\uff0ct1\u548ct2\u5206\u522b\u8bbe\u7f6e\u4e86\u4e0d\u540c\u7684policy\uff0ct3\u4e0d\u8bbe\u7f6e\uff0c\u5f803\u4e2a\u76ee\u5f55\u4e0a\u4f20\u76f8\u540c\u76845G\u5927\u5c0f\u7684\u6587\u4ef6\uff0c\u6bcf\u6b21\u4e0a\u4f20\u524d\u5747\u6e05\u7a7ahdfs\u4e2d\u6570\u636e\uff0c\u5e76\u6e05\u7a7a\u865a\u62df\u673a\u548c\u7269\u7406\u673a\u7f13\u5b58\uff0c\u7edf\u8ba1\u7684\u8017\u65f6\u548c\u7a7a\u95f4\u5360\u7528\u60c5\u51b5\u5927\u81f4\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"HDFS\u76ee\u5f55"}),(0,r.jsx)(n.th,{children:"\u7ea0\u5220\u7801\u7b56\u7565"}),(0,r.jsx)(n.th,{children:"put\u8017\u65f6"}),(0,r.jsx)(n.th,{children:"\u78c1\u76d8\u5360\u7528kb"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"t1"}),(0,r.jsx)(n.td,{children:"XOR-2-1-64k"}),(0,r.jsx)(n.td,{children:"1m15.559s"}),(0,r.jsx)(n.td,{children:"7740364"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"t2"}),(0,r.jsx)(n.td,{children:"RS-3-2-64k"}),(0,r.jsx)(n.td,{children:"1m13.920s"}),(0,r.jsx)(n.td,{children:"8600436"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"t3"}),(0,r.jsx)(n.td,{children:"\u65e0(\u4e09\u526f\u672c)"}),(0,r.jsx)(n.td,{children:"2m7.705s"}),(0,r.jsx)(n.td,{children:"15480600"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7\u7b80\u5355\u7684\u6d4b\u8bd5\u5bf9\u6bd4\uff0c\u6211\u4eec\u53ef\u4ee5\u5927\u81f4\u4e86\u89e3\u5230\u5728\u7406\u60f3\u72b6\u6001\u4e0b\u7ea0\u5220\u7801\u6280\u672f\u6bd4\u4f20\u7edf\u7684\u4e09\u526f\u672c\u5728\u5199\u5165\u901f\u5ea6\u4e0a\u6709\u63d0\u5347\uff0c\u56e0\u5176\u964d\u4f4e\u4e86\u5bf9\u78c1\u76d8IO\u548c\u5e26\u5bbd\u7684\u6d88\u8017\uff0c\u540c\u65f6\u5360\u7528\u7684\u78c1\u76d8\u7a7a\u95f4\u5c0f\u4e8e\u4e09\u526f\u672c\u65b9\u5f0f\u3002\u5176\u4e2d\u78c1\u76d8\u5360\u7528\u548c\u4e0d\u540c\u7684\u7ea0\u5220\u7801\u7b56\u7565\u7406\u8bba\u503c\u57fa\u672c\u543b\u5408\uff0c \u78c1\u76d8\u7a7a\u95f4\u6d88\u8017\u500d\u6570\u4e3a ",(0,r.jsx)(n.code,{children:"(\u6821\u9a8c\u5757+\u6570\u636e\u5757)/\u6570\u636e\u5757"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6ce8\u610f\u8fd9\u91cc\u7684\u6d4b\u8bd5\u4ec5\u9650\u4e8e\u5bf9HADOOP3.0.0\u4e2d\u7ea0\u5220\u7801\u6709\u4e00\u4e2a\u611f\u6027\u8ba4\u8bc6\uff0c\u6d4b\u8bd5\u65b9\u6cd5\u6709\u5f88\u591a\u4e0d\u4e25\u8c28\u7684\u5730\u65b9\uff0c\u6bd4\u5982put\u6570\u636e\u7684\u8017\u65f6\u5e76\u672a\u8003\u8651\u5404\u79cd\u73af\u5883\u56e0\u7d20\uff0c\u4ec5\u4ec5\u662f\u5728\u4e00\u4e2a\u76f8\u5bf9\u7406\u60f3\u7684\u73af\u5883\u4e0b\u8fdb\u884c\u7b80\u5355\u6d4b\u8bd5\u3002\u5b9e\u9645\u751f\u4ea7\u73af\u5883\u4e2d\u60c5\u51b5\u975e\u5e38\u590d\u6742\uff0c\u9700\u8981\u6743\u8861CPU\u5e26\u5bbd\u78c1\u76d8\uff0c\u751a\u81f3\u673a\u67b6\u4f9b\u7535\u7b49\u5404\u65b9\u9762\u56e0\u7d20\uff0c\u5982\u679c\u9700\u8981\u83b7\u5f97\u4e00\u4efd\u53ef\u9760\u7684\u6027\u80fd\u5bf9\u6bd4\u6570\u636e\u5219\u5fc5\u987b\u4fdd\u969c\u7a33\u5b9a\u8fd0\u884c\u8db3\u591f\u957f\u7684\u65f6\u95f4\uff0c\u901a\u8fc7\u957f\u671f\u89c2\u5bdf\u624d\u80fd\u5f97\u51fa\u5bf9\u751f\u4ea7\u6709\u5b9e\u9645\u6307\u5bfc\u610f\u4e49\u7684\u4fe1\u606f\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u8003\u6587\u6863\uff1a"}),"\n",(0,r.jsxs)(n.p,{children:["[1] ",(0,r.jsx)(n.a,{href:"http://hadoop.apache.org/docs/r3.0.0-alpha4/hadoop-project-dist/hadoop-common/ClusterSetup.html",children:"http://hadoop.apache.org/docs/r3.0.0-alpha4/hadoop-project-dist/hadoop-common/ClusterSetup.html"})]}),"\n",(0,r.jsxs)(n.p,{children:["[2] ",(0,r.jsx)(n.a,{href:"http://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HDFSErasureCoding.html",children:"http://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HDFSErasureCoding.html"})]})]})}function p(e={}){const{wrapper:n}={...(0,t.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},3905:(e,n,a)=>{a.d(n,{ah:()=>h});var r=a(7294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=r.createContext({}),h=function(e){var n=r.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):d(d({},n),e)),a},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),i=h(a),m=t,u=i["".concat(l,".").concat(m)]||i[m]||c[m]||o;return a?r.createElement(u,d(d({ref:n},p),{},{components:a})):r.createElement(u,d({ref:n},p))}));p.displayName="MDXCreateElement"}}]);