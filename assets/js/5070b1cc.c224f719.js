"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4652],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(t),c=r,_=p["".concat(i,".").concat(c)]||p[c]||m[c]||o;return t?a.createElement(_,l(l({ref:n},d),{},{components:t})):a.createElement(_,l({ref:n},d))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5630:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const o={layout:"post",title:"\u4e2d\u6807\u9e92\u9e9f\u7cfb\u7edfansible\u6267\u884cyum\u6a21\u5757\u62a5\u9519\u7684\u95ee\u9898\u5206\u6790",description:"",categories:["shell"],tags:["bash"]},l=void 0,s={permalink:"/notes/blog/2021/03/22/neokylin-ansible-yum-module-not-work",editUrl:"https://github.com/itxx00/notes/tree/main/blog/2021-03-22-neokylin-ansible-yum-module-not-work.md",source:"@site/blog/2021-03-22-neokylin-ansible-yum-module-not-work.md",title:"\u4e2d\u6807\u9e92\u9e9f\u7cfb\u7edfansible\u6267\u884cyum\u6a21\u5757\u62a5\u9519\u7684\u95ee\u9898\u5206\u6790",description:"",date:"2021-03-22T00:00:00.000Z",formattedDate:"2021 M03 22",tags:[{label:"bash",permalink:"/notes/blog/tags/bash"}],readingTime:8.26,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"\u4e2d\u6807\u9e92\u9e9f\u7cfb\u7edfansible\u6267\u884cyum\u6a21\u5757\u62a5\u9519\u7684\u95ee\u9898\u5206\u6790",description:"",categories:["shell"],tags:["bash"]},prevItem:{title:"\u4f7f\u7528dozzle\u901a\u8fc7web\u754c\u9762\u5b9e\u65f6\u67e5\u770bdocker\u65e5\u5fd7",permalink:"/notes/blog/2021/06/08/dozzle-realtime-docker-log-view"},nextItem:{title:"bashrc\u4e0eprofile\u7684\u52a0\u8f7d\u987a\u5e8f",permalink:"/notes/blog/2021/02/24/bash-rc-profile-exec-order"}},i={authorsImageUrls:[]},u=[{value:"\u95ee\u9898\u73b0\u8c61",id:"\u95ee\u9898\u73b0\u8c61",level:2},{value:"\u95ee\u9898\u5206\u6790",id:"\u95ee\u9898\u5206\u6790",level:2},{value:"\u9a8c\u8bc1\u7ed3\u8bba",id:"\u9a8c\u8bc1\u7ed3\u8bba",level:2}],d={toc:u};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728\u4f7f\u7528\u4e2d\u6807\u9e92\u9e9fV7Update6\u7248\u672c\u65f6\uff0c\u9047\u5230\u4e86\u4e00\u4e2aansible\u6267\u884c\u62a5\u9519\u7684\u95ee\u9898")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,r.kt)("h2",{id:"\u95ee\u9898\u73b0\u8c61"},"\u95ee\u9898\u73b0\u8c61"),(0,r.kt)("p",null,"\u5728\u4e2d\u6807\u9e92\u9e9f\uff08neokylin\uff09\u7cfb\u7edf\u4e2d\u90e8\u7f72\u67d0\u670d\u52a1\uff0c\u4f7f\u7528\u5230\u4e86ansible\uff0c\u4f46\u662f\u6267\u884c\u65f6\u53d1\u73b0\u6709yum\u6a21\u5757\u7684task\u62a5\u9519\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'TASK [common : Install basic rpms] **************************************************************************\nfatal: [node01]: FAILED! => {"changed": false, "msg": ["Could not detect which major revision of yum is in use, which is required to determine module backend.", "You can manually specify use_backend to tell the module whether to use the yum (yum3) or dnf (yum4) backend})"]}\n')),(0,r.kt)("p",null,"\u62a5\u9519\u4e3ayum\u6a21\u5757\u65e0\u6cd5\u5224\u65ad\u51fa\u7cfb\u7edf\u7684yum\u7248\u672c\uff0c\u63d0\u793a\u9700\u8981\u624b\u5de5\u6267\u884cyum\u7684use_backend\u53c2\u6570\u3002\u540c\u6837\u7684task\u5728\u539f\u751fRHEL7\u7cfb\u7edf\u6267\u884c\u6ca1\u6709\u9047\u5230\u4efb\u4f55\u95ee\u9898\uff0c\u770b\u6837\u5b50\u8c03\u5165\u4e86\u4e2d\u6807\u9e92\u9e9f\u7684\u67d0\u4e2a\u5751\u91cc\u3002"),(0,r.kt)("h2",{id:"\u95ee\u9898\u5206\u6790"},"\u95ee\u9898\u5206\u6790"),(0,r.kt)("p",null,"\u6839\u636e\u62a5\u9519\uff0c\u5f88\u660e\u786e\u662f\u56e0\u4e3aansible\u65e0\u6cd5\u81ea\u52a8\u5224\u65ad\u51fa\u7cfb\u7edf\u4f7f\u7528\u7684yum\u7248\u672c\u5bfc\u81f4\uff0c\u6211\u4eec\u77e5\u9053\u5f53ansible\u4e2dyum\u6a21\u5757\u4e0d\u6307\u5b9ause_backend\u53c2\u6570\u65f6\uff0c\u5c06\u5c1d\u8bd5\u81ea\u52a8\u5224\u65ad\uff0c\u800cansible\u7684setup\u6a21\u5757\u53ef\u4ee5\u83b7\u53d6\u5bf9\u5e94\u7684\u5fc5\u8981\u4fe1\u606f\uff0c\n\u5176\u4e2d\u4e00\u4e2a\u53d8\u91cfansible_pkg_mgr\u53ca\u5bf9\u5e94yum\u540e\u7aef\u6a21\u5757\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u6267\u884csetup\u6a21\u5757\u8f93\u51faansible_pkg_mgr\u53d8\u91cf\u6765\u9a8c\u8bc1\u4e0b\u6211\u4eec\u7684\u5224\u65ad\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# ansible -i hosts node01 -m setup -a "filter=ansible_pkg_mgr"\nnode01 | SUCCESS => {\n    "ansible_facts": {\n        "discovered_interpreter_python": "/usr/bin/python"\n    },\n    "changed": false\n}\n')),(0,r.kt)("p",null,"\u679c\u7136\u6ca1\u6709\u529e\u6cd5\u83b7\u53d6\u5230ansible_pkg_mgr\u53d8\u91cf\uff0c\u5148\u770b\u4e0b\u7cfb\u7edf\u7248\u672c\u4fe1\u606f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"~]# cat /etc/neokylin-release\nNeoKylin Linux Advanced Server release V7Update6 (Chromium)\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u6839\u636e\u62a5\u9519\u63d0\u793a\u4fe1\u606f\u627e\u5230ansible\u76f8\u5173\u4ee3\u7801\uff0c\u5728yum.py\u4e2d\uff0c\u76f8\u5173\u4ee3\u7801\u5982\u4e0b\uff1a\nansible/plugins/action/yum.py"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'        if module not in ["yum", "yum4", "dnf"]:\n            facts = self._execute_module(module_name="setup", module_args=dict(filter="ansible_pkg_mgr", gather_subset="!all"), task_vars=task_vars)\n            display.debug("Facts %s" % facts)\n            module = facts.get("ansible_facts", {}).get("ansible_pkg_mgr", "auto")\n            if (not self._task.delegate_to or self._task.delegate_facts) and module != \'auto\':\n                result[\'ansible_facts\'] = {\'pkg_mgr\': module}\n\n        if module != "auto":\n\n            if module == "yum4":\n                module = "dnf"\n\n            if module not in self._shared_loader_obj.module_loader:\n                result.update({\'failed\': True, \'msg\': "Could not find a yum module backend for %s." % module})\n            else:\n                # run either the yum (yum3) or dnf (yum4) backend module\n                new_module_args = self._task.args.copy()\n                if \'use_backend\' in new_module_args:\n                    del new_module_args[\'use_backend\']\n\n                display.vvvv("Running %s as the backend for the yum action plugin" % module)\n                result.update(self._execute_module(module_name=module, module_args=new_module_args, task_vars=task_vars, wrap_async=self._task.async_val))\n                # Now fall through to cleanup\n        else:\n            result.update(\n                {\n                    \'failed\': True,\n                    \'msg\': ("Could not detect which major revision of yum is in use, which is required to determine module backend.",\n                            "You can manually specify use_backend to tell the module whether to use the yum (yum3) or dnf (yum4) backend})"),\n                }\n            )\n            # Now fall through to cleanup\n\n')),(0,r.kt)("p",null,"\u5982\u4ee3\u7801\u6240\u793a\uff0c\u5f53\u6267\u884cyum\u672a\u6307\u5b9ause_backend\u53c2\u6570\u65f6\uff0cansible\u4f1a\u6267\u884csetup\u6a21\u5757\u5e76\u6839\u636eansible_pkg_mgr\u6765\u81ea\u52a8\u5224\u65adyum\u7684\u7248\u672c\uff0c\u83b7\u53d6\u4e0d\u5230\u5219\u4f1a\u62a5\u9519\uff0c\u7ee7\u7eed\u770b\u4e0b\u8be5\u53c2\u6570\u7684\u83b7\u53d6\u8fc7\u7a0b\uff0c\u627e\u5230pkg_mgr.py\uff0c\u5173\u952e\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,"ansible/module_utils/facts/system/pkg_mgr.py"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    def collect(self, module=None, collected_facts=None):\n        facts_dict = {}\n        collected_facts = collected_facts or {}\n\n        pkg_mgr_name = 'unknown'\n        for pkg in PKG_MGRS:\n            if os.path.exists(pkg['path']):\n                pkg_mgr_name = pkg['name']\n\n        # Handle distro family defaults when more than one package manager is\n        # installed or available to the distro, the ansible_fact entry should be\n        # the default package manager officially supported by the distro.\n        if collected_facts['ansible_os_family'] == \"RedHat\":\n            pkg_mgr_name = self._check_rh_versions(pkg_mgr_name, collected_facts)\n... ...\n\n def _check_rh_versions(self, pkg_mgr_name, collected_facts):\n        if collected_facts['ansible_distribution'] == 'Fedora':\n            if os.path.exists('/run/ostree-booted'):\n                return \"atomic_container\"\n            try:\n                if int(collected_facts['ansible_distribution_major_version']) < 23:\n                    for yum in [pkg_mgr for pkg_mgr in PKG_MGRS if pkg_mgr['name'] == 'yum']:\n                        if os.path.exists(yum['path']):\n                            pkg_mgr_name = 'yum'\n                            break\n                else:\n                    for dnf in [pkg_mgr for pkg_mgr in PKG_MGRS if pkg_mgr['name'] == 'dnf']:\n                        if os.path.exists(dnf['path']):\n                            pkg_mgr_name = 'dnf'\n                            break\n            except ValueError:\n                # If there's some new magical Fedora version in the future,\n                # just default to dnf\n                pkg_mgr_name = 'dnf'\n        elif collected_facts['ansible_distribution'] == 'Amazon':\n            pkg_mgr_name = 'yum'\n        else:\n            # If it's not one of the above and it's Red Hat family of distros, assume\n            # RHEL or a clone. For versions of RHEL < 8 that Ansible supports, the\n            # vendor supported official package manager is 'yum' and in RHEL 8+\n            # (as far as we know at the time of this writing) it is 'dnf'.\n            # If anyone wants to force a non-official package manager then they\n            # can define a provider to either the package or yum action plugins.\n            if int(collected_facts['ansible_distribution_major_version']) < 8:\n                pkg_mgr_name = 'yum'\n            else:\n                pkg_mgr_name = 'dnf'\n        return pkg_mgr_name\n\n")),(0,r.kt)("p",null,"\u4ee5\u4e0a\u4ee3\u7801\u53ef\u4ee5\u770b\u5230\u5f53\u5224\u65ad\u7cfb\u7edf\u4e3a\u7ea2\u5e3d\u7cfb\uff0c\u5219\u4f1a\u7ee7\u7eed\u5224\u65ad\u7cfb\u7edf\u7248\u672c\u4fe1\u606f\uff0c\u5f53\u4e3b\u7248\u672c\u53f7<8\u5219\u4f7f\u7528yum\uff0c\u5426\u5219\u4f7f\u7528dnf\uff0c\u8fd9\u91cc\u6211\u4eec\u521d\u6b65\u5224\u65ad\u4e3a\u9e92\u9e9f\u5bf9\u7cfb\u7edf\u505a\u4e86\u67d0\u4e9b\u4fee\u6539\u5bfc\u81f4\u65e0\u6cd5\u83b7\u53d6\u5230\u4e3b\u7248\u672c\u53f7\u3002\u5148\u6267\u884csetup\u83b7\u53d6\u53d1\u884c\u7248\u4ee3\u53f7\u9a8c\u8bc1\u4e0b\u662f\u5426\u6267\u884c\u4e86\u4e0a\u8ff0\u903b\u8f91\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# ansible -i hosts node01 -m setup -a "filter=ansible_distribution"\nnode01 | SUCCESS => {\n    "ansible_facts": {\n        "ansible_distribution": "RedHat",\n        "discovered_interpreter_python": "/usr/bin/python"\n    },\n    "changed": false\n}\n\n# ansible -i hosts node01 -m setup -a "filter=ansible_distribution_major_version"\nnode01 | SUCCESS => {\n    "ansible_facts": {\n        "ansible_distribution_major_version": "V7Update6",\n        "discovered_interpreter_python": "/usr/bin/python"\n    },\n    "changed": false\n}\n')),(0,r.kt)("p",null,"\u901a\u8fc7setup\u6a21\u5757\u7684\u8f93\u51fa\u7ed3\u679c\u53ef\u770b\u5230\u7cfb\u7edf\u662f\u5224\u65ad\u4e3aredhat\u53d1\u884c\u7248\uff0c\u4f46\u662f\u901a\u8fc7ansible_distribution_major_version\u83b7\u53d6\u5230\u7684\u53d1\u884c\u7248\u4e3b\u7248\u672c\u53f7\u4e3aV7Update6,\n\u800c\u548c\u4e0a\u9762\u5224\u65adyum\u7248\u672c\u7684\u4ee3\u7801\u5173\u8054\u8d77\u6765\u770b\u5c31\u4f1a\u53d1\u73b0\u95ee\u9898\u6240\u5728\uff0cint(collected_facts","['ansible_distribution_major_version']",") < 8 \u4e2d\uff0cansible_distribution_major_version \u53d8\u91cf\u5728\u5176\u521d\u59cb\u5316\u7684\u4ee3\u7801\u4e2d\u5bf9\u5e94\u4e3a\u4e3adistribution_version.split('.')","[:2][0]","\u7684\u53d6\u503c\uff0c\u800c\u5f53\u7cfb\u7edf\u4e2d\u83b7\u53d6\u5230\u7684\u503c\u662fV7Update6\u65f6\uff0c\u8be5\u663e\u7136\u65e0\u6cd5\u6ee1\u8db3\u8f6c\u6362\u4e3aint\u7684\u8981\u6c42\u3002\u63a5\u4e0b\u6765\u770b\u4e0bV7Update6\u8fd9\u4e2a\u5173\u952e\u5b57\u7684\u5b9a\u4e49\u4f4d\u7f6e\uff0c\u6839\u636e\u7ecf\u9a8c\u7cfb\u7edf\u7248\u672c\u76f8\u5173\u4fe1\u606f\u5e94\u8be5\u5728/etc/os-release\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'~]# cat /etc/os-release\nNAME="NeoKylin Linux Advanced Server"\nVERSION="V7Update6 (Chromium)"\nID="neokylin"\nID_LIKE="fedora"\nVARIANT="Server"\nVARIANT_ID="server"\nVERSION_ID="V7Update6"\nPRETTY_NAME="NeoKylin Linux Advanced Server V7Update6 (Chromium)"\nANSI_COLOR="0;31"\nCPE_NAME="cpe:/o:neokylin:enterprise_linux:V7Update6:GA:server"\nHOME_URL="https://www.cs2c.com.cn/"\nBUG_REPORT_URL="https://bugzilla.cs2c.com.cn/"\n\nNEOKYLIN_BUGZILLA_PRODUCT="NeoKylin Linux Advanced Server 7"\nNEOKYLIN_BUGZILLA_PRODUCT_VERSION=V7Update6\nNEOKYLIN_SUPPORT_PRODUCT="NeoKylin Linux Advanced Server"\nNEOKYLIN_SUPPORT_PRODUCT_VERSION="V7Update6"\n')),(0,r.kt)("p",null,"\u8fd9\u91cc\u679c\u7136\u53ef\u4ee5\u770b\u5230VERSION_ID\u7684\u503c\u88ab\u5b9a\u4e49\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"V7Update6"),"\uff0c\u800c\u7cfb\u7edf\u539f\u751f\u53d1\u884c\u7248\u4e2d\u8be5\u503c\u662f7\uff0c\u6211\u4eec\u6765\u770b\u4e0bos-release\u4e2d\u5bf9VERSION_ID\u53c2\u6570\u7684\u8bf4\u660e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'man os-release\n... ...\n\n       VERSION_ID=\n           A lower-case string (mostly numeric, no spaces or other characters outside of 0-9, a-z, ".",\n           "_" and "-") identifying the operating system version, excluding any OS name information or\n           release code name, and suitable for processing by scripts or usage in generated filenames. This\n           field is optional. Example: "VERSION_ID=17" or "VERSION_ID=11.04".\n... ...\n')),(0,r.kt)("p",null,"\u6839\u636eman\u6587\u6863\u4e2d\u7684\u63cf\u8ff0\uff0cVERSION",(0,r.kt)("em",{parentName:"p"},"ID\u53d6\u503c\u8303\u56f4\u4e3a\u5168\u5c0f\u5199\uff0c\u901a\u5e38\u4e3a\u6570\u503c\u578b\uff0c\u4e0d\u5e94\u6709\u7a7a\u683c\u6216\u5176\u4ed6\u7279\u6b8a\u5b57\u7b26\uff0c\u53ef\u5305\u542b\u7684\u5b57\u7b26\u4e3a0-9a-z."),"-,\u90a3\u4e48\u8fd9\u91cc\u53ef\u4ee5\u770b\u5230\u4e24\u4e2a\u95ee\u9898\uff0c\n\u7b2c\u4e00\u4e2a\u95ee\u9898\u662fkylin\u7684VERSION_ID\u4e0d\u7b26\u5408\u6b64\u63cf\u8ff0\uff0c\u5305\u542b\u4e86\u5927\u5199\u5b57\u7b26\uff0c\u7b2c\u4e8c\u4e2a\u95ee\u9898\u662fVERSION_ID\u53ef\u4ee5\u5305\u542ba-z\u5b57\u6bcd\uff0c\u4f46\u662f\u901a\u5e38\u662f\u6570\u503c\u598217,11.04\u7b49\u3002\n\u4f46\u7531\u4e8e\u5e38\u89c1\u53d1\u884c\u7248\u90fd\u5c06\u6b64\u5904\u5904\u7406\u4e3a\u6570\u503c\u578b\uff0c\u5c31\u5bfc\u81f4ansible\u6309\u7167\u6b64\u7ea6\u5b9a\u4fd7\u6210\u56fa\u5316\u4e86\u5176\u83b7\u53d6\u7cfb\u7edf\u7248\u672c\u7684\u65b9\u6cd5\uff0c\u5e76\u8bd5\u56fe\u5c06\u4e00\u4e2a\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3aint\uff0c\u4e0d\u80fd\u6ee1\u8db3\u5f53VERSION_ID\u5305\u542b\u4e86\u5b57\u6bcd\u7684\u60c5\u51b5\u3002"),(0,r.kt)("h2",{id:"\u9a8c\u8bc1\u7ed3\u8bba"},"\u9a8c\u8bc1\u7ed3\u8bba"),(0,r.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u5224\u65ad\u770b\u5230VERSION_ID\u662f\u5bfc\u81f4\u8be5\u95ee\u9898\u73b0\u8c61\u7684\u5173\u952e\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u5c1d\u8bd5\u4fee\u6539\u4e00\u4e0b\u8be5\u53c2\u6570\u503c\uff0c\u518d\u6267\u884csetup\u770b\u770b\u662f\u5426\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# grep VERSION_ID /etc/os-release\nVERSION_ID="7"\n')),(0,r.kt)("p",null,"\u8fd9\u91cc\u6211\u628aVERSION_ID\u4fee\u6539\u6210\u4e86\u6570\u5b577\uff0c\u518d\u6267\u884csetup\u89c2\u5bdfansible_pkg_mgr\u53d8\u91cf\u662f\u5426\u80fd\u83b7\u53d6\u5230\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# ansible -i hosts node01 -m setup -a "filter=ansible_pkg_mgr"\nnode01 | SUCCESS => {\n    "ansible_facts": {\n        "ansible_pkg_mgr": "yum",\n        "discovered_interpreter_python": "/usr/bin/python"\n    },\n    "changed": false\n}\n')),(0,r.kt)("p",null,'\u53ef\u4ee5\u770b\u5230\uff0c\u4fee\u6539os-release\u4e2dVERSION_ID\u4e3a\u7eaf\u6570\u503c\u540e\uff0csetup\u5c31\u53ef\u4ee5\u6b63\u5e38\u5224\u65ad\u5230\u7cfb\u7edf\u7248\u672c\uff0c\u8fdb\u800c\u53ef\u4ee5\u83b7\u53d6\u5230\u6b63\u786e\u7684yum\u7248\u672c\u4e86\u3002\n\u901a\u8fc7\u4ee5\u4e0a\u53ef\u4ee5\u770b\u5230\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u5373\u4fbf\u662f\u4e00\u4e9b\u4e0d\u8d77\u773c\u7684\u7ec6\u679d\u672b\u8282\uff0c\u5904\u7406\u4e0d\u5f53\u4e5f\u53ef\u80fd\u5f15\u53d1"\u8fde\u9501\u53cd\u5e94"\u3002'))}m.isMDXComponent=!0}}]);