"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[79445],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return b}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,u=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),b=o,k=d["".concat(a,".").concat(b)]||d[b]||s[b]||u;return n?r.createElement(k,c(c({ref:t},l),{},{components:n})):r.createElement(k,c({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=n.length,c=new Array(u);c[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<u;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72788:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return b},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var r=n(87462),o=n(63366),u=(n(67294),n(3905)),c=["components"],i={title:"Worker \u8282\u70b9\u548c\u901a\u7528\u7ec4\u4ef6\u6545\u969c\u6392\u9664"},a=void 0,p={unversionedId:"troubleshooting/kubernetes-components/troubleshooting-worker-nodes-and-generic-components",id:"troubleshooting/kubernetes-components/troubleshooting-worker-nodes-and-generic-components",title:"Worker \u8282\u70b9\u548c\u901a\u7528\u7ec4\u4ef6\u6545\u969c\u6392\u9664",description:"\u672c\u6587\u5305\u62ec\u4e86\u8fd0\u884c\u5728\u6240\u6709\u89d2\u8272\u8282\u70b9\u4e0a\u7684\u7ec4\u4ef6\uff0c\u56e0\u6b64\u9002\u7528\u4e8e\u6bcf\u4e2a\u8282\u70b9\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/troubleshooting/kubernetes-components/troubleshooting-worker-nodes-and-generic-components.md",sourceDirName:"troubleshooting/kubernetes-components",slug:"/troubleshooting/kubernetes-components/troubleshooting-worker-nodes-and-generic-components",permalink:"/zh/troubleshooting/kubernetes-components/troubleshooting-worker-nodes-and-generic-components",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/troubleshooting/kubernetes-components/troubleshooting-worker-nodes-and-generic-components.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022/9/23",frontMatter:{title:"Worker \u8282\u70b9\u548c\u901a\u7528\u7ec4\u4ef6\u6545\u969c\u6392\u9664"},sidebar:"tutorialSidebar",previous:{title:"nginx-proxy \u6545\u969c\u6392\u9664",permalink:"/zh/troubleshooting/kubernetes-components/troubleshooting-nginx-proxy"},next:{title:"Kubernetes \u8d44\u6e90",permalink:"/zh/troubleshooting/other-troubleshooting-tips/kubernetes-resources"}},l={},s=[],d={toc:s};function b(e){var t=e.components,n=(0,o.Z)(e,c);return(0,u.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"\u672c\u6587\u5305\u62ec\u4e86\u8fd0\u884c\u5728\u6240\u6709\u89d2\u8272\u8282\u70b9\u4e0a\u7684\u7ec4\u4ef6\uff0c\u56e0\u6b64\u9002\u7528\u4e8e\u6bcf\u4e2a\u8282\u70b9\u3002"),(0,u.kt)("h1",{id:"\u68c0\u67e5\u5bb9\u5668\u662f\u5426\u6b63\u5728\u8fd0\u884c"},"\u68c0\u67e5\u5bb9\u5668\u662f\u5426\u6b63\u5728\u8fd0\u884c"),(0,u.kt)("p",null,"\u5177\u6709 ",(0,u.kt)("inlineCode",{parentName:"p"},"worker")," \u89d2\u8272\u7684\u8282\u70b9\u4e0a\u542f\u52a8\u4e86\u4e24\u4e2a\u5bb9\u5668\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"kubelet"),(0,u.kt)("li",{parentName:"ul"},"kube-proxy")),(0,u.kt)("p",null,"\u5bb9\u5668\u7684\u72b6\u6001\u5e94\u8be5\u662f ",(0,u.kt)("inlineCode",{parentName:"p"},"Up"),"\u3002",(0,u.kt)("inlineCode",{parentName:"p"},"Up")," \u540e\u9762\u663e\u793a\u7684\u65f6\u95f4\u6307\u7684\u662f\u5bb9\u5668\u8fd0\u884c\u7684\u65f6\u95f4\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"docker ps -a -f=name='kubelet|kube-proxy'\n")),(0,u.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'CONTAINER ID        IMAGE                                COMMAND                  CREATED             STATUS              PORTS               NAMES\n158d0dcc33a5        rancher/hyperkube:v1.11.5-rancher1   "/opt/rke-tools/en..."   3 hours ago         Up 3 hours                              kube-proxy\na30717ecfb55        rancher/hyperkube:v1.11.5-rancher1   "/opt/rke-tools/en..."   3 hours ago         Up 3 hours                              kubelet\n')),(0,u.kt)("h1",{id:"\u5bb9\u5668\u65e5\u5fd7\u8bb0\u5f55"},"\u5bb9\u5668\u65e5\u5fd7\u8bb0\u5f55"),(0,u.kt)("p",null,"\u5bb9\u5668\u7684\u65e5\u5fd7\u8bb0\u5f55\u53ef\u80fd\u5305\u542b\u95ee\u9898\u7684\u4fe1\u606f\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"docker logs kubelet\ndocker logs kube-proxy\n")))}b.isMDXComponent=!0}}]);