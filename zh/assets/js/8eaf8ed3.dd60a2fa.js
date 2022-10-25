"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[84359],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=i(n),g=l,d=m["".concat(p,".").concat(g)]||m[g]||c[g]||r;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var i=2;i<r;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65836:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return c}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),o=["components"],u={title:"Outputs \u548c ClusterOutputs"},p=void 0,i={unversionedId:"integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs",id:"integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs",title:"Outputs \u548c ClusterOutputs",description:"\u6709\u5173\u914d\u7f6e Output \u548c ClusterOutput \u7684\u5b8c\u6574\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Banzai Cloud Logging Operator \u6587\u6863\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs.md",sourceDirName:"integrations-in-rancher/logging/custom-resource-configuration",slug:"/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs",permalink:"/zh/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022/10/25",frontMatter:{title:"Outputs \u548c ClusterOutputs"},sidebar:"tutorialSidebar",previous:{title:"Flows \u548c ClusterFlows",permalink:"/zh/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows"},next:{title:"\u76d1\u63a7\u548c\u544a\u8b66",permalink:"/zh/pages-for-subheaders/monitoring-and-alerting"}},s={},c=[{value:"Outputs",id:"outputs",level:2},{value:"ClusterOutputs",id:"clusteroutputs",level:2},{value:"YAML \u793a\u4f8b",id:"yaml-\u793a\u4f8b",level:2},{value:"ClusterOutput \u8bbe\u4e3a ElasticSearch",id:"clusteroutput-\u8bbe\u4e3a-elasticsearch",level:3},{value:"Output \u8bbe\u4e3a Splunk",id:"output-\u8bbe\u4e3a-splunk",level:3},{value:"Output \u8bbe\u4e3a Syslog",id:"output-\u8bbe\u4e3a-syslog",level:3},{value:"\u4e0d\u652f\u6301\u7684 Output",id:"\u4e0d\u652f\u6301\u7684-output",level:3}],m={toc:c};function g(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6709\u5173\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput")," \u7684\u5b8c\u6574\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/output/"},"Banzai Cloud Logging Operator \u6587\u6863"),"\u3002"),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Output")," \u8d44\u6e90\u5b9a\u4e49\u4e86\u4f60\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," \u53ef\u4ee5\u53d1\u9001\u65e5\u5fd7\u6d88\u606f\u7684\u4f4d\u7f6e\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," \u662f Logging ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," \u7684\u6700\u540e\u9636\u6bb5\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Output")," \u662f\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\uff0c\u6362\u8a00\u4e4b\uff0c\u53ea\u6709\u540c\u4e00\u547d\u540d\u7a7a\u95f4\u5185\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow")," \u53ef\u4ee5\u8bbf\u95ee\u5b83\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u8fd9\u4e9b\u5b9a\u4e49\u4e2d\u4f7f\u7528\u5bc6\u6587\uff0c\u4f46\u8fd9\u4e9b\u5bc6\u6587\u4e5f\u5fc5\u987b\u4f4d\u4e8e\u540c\u4e00\u547d\u540d\u7a7a\u95f4\u4e2d\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728 Rancher UI \u4e2d\u586b\u5199\u8868\u5355\u6765\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"Output"),"\u3002"),(0,r.kt)("p",null,"\u6709\u5173 ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," \u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/crds/v1beta1/output_types/"},"OutputSpec"),"\u3002"),(0,r.kt)("p",null,"Rancher UI \u63d0\u4f9b\u4e86\u7528\u4e8e\u914d\u7f6e\u4ee5\u4e0b\u7c7b\u578b ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," \u7684\u8868\u5355\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Amazon ElasticSearch"),(0,r.kt)("li",{parentName:"ul"},"Azure Storage"),(0,r.kt)("li",{parentName:"ul"},"Cloudwatch"),(0,r.kt)("li",{parentName:"ul"},"Datadog"),(0,r.kt)("li",{parentName:"ul"},"Elasticsearch"),(0,r.kt)("li",{parentName:"ul"},"File"),(0,r.kt)("li",{parentName:"ul"},"Fluentd"),(0,r.kt)("li",{parentName:"ul"},"GCS"),(0,r.kt)("li",{parentName:"ul"},"Kafka"),(0,r.kt)("li",{parentName:"ul"},"Kinesis Stream"),(0,r.kt)("li",{parentName:"ul"},"LogDNA"),(0,r.kt)("li",{parentName:"ul"},"LogZ"),(0,r.kt)("li",{parentName:"ul"},"Loki"),(0,r.kt)("li",{parentName:"ul"},"New Relic"),(0,r.kt)("li",{parentName:"ul"},"Splunk"),(0,r.kt)("li",{parentName:"ul"},"SumoLogic"),(0,r.kt)("li",{parentName:"ul"},"Syslog")),(0,r.kt)("p",null,"Rancher UI \u63d0\u4f9b\u4e86\u7528\u4e8e\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," \u7c7b\u578b\u3001\u76ee\u6807\u548c\u8bbf\u95ee\u51ed\u8bc1\uff08\u5982\u679c\u9002\u7528\uff09\u7684\u8868\u5355\u3002"),(0,r.kt)("p",null,"\u6709\u5173 Logging Operator \u652f\u6301\u7684\u65e5\u5fd7\u63d2\u4ef6\u914d\u7f6e\u793a\u4f8b\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/plugins/outputs/"},"Logging Operator \u6587\u6863"),"\u3002"),(0,r.kt)("h2",{id:"clusteroutputs"},"ClusterOutputs"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput")," \u5b9a\u4e49\u4e86\u4e00\u4e2a\u6ca1\u6709\u547d\u540d\u7a7a\u95f4\u9650\u5236\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Output"),"\u3002\u53ea\u6709\u5728\u4e0e Logging Operator \u90e8\u7f72\u5728\u540c\u4e00\u547d\u540d\u7a7a\u95f4\u4e2d\u65f6\uff0c\u5b83\u624d\u80fd\u751f\u6548\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728 Rancher UI \u4e2d\u586b\u5199\u8868\u5355\u6765\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),"\u3002"),(0,r.kt)("p",null,"\u6709\u5173 ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput")," \u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/crds/v1beta1/clusteroutput_types/"},"ClusterOutput"),"\u3002"),(0,r.kt)("h2",{id:"yaml-\u793a\u4f8b"},"YAML \u793a\u4f8b"),(0,r.kt)("p",null,"\u5b89\u88c5 Logging \u540e\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u793a\u4f8b\u6765\u6784\u5efa\u4f60\u81ea\u5df1\u7684 Logging \u6d41\u6c34\u7ebf\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#clusteroutput-%E8%AE%BE%E4%B8%BA-elasticsearch"},"ClusterOutput \u8bbe\u4e3a ElasticSearch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#output-%E8%AE%BE%E4%B8%BA-splunk"},"Output \u8bbe\u4e3a Splunk")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#output-%E8%AE%BE%E4%B8%BA-syslog"},"Output \u8bbe\u4e3a Syslog")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E4%B8%8D%E6%94%AF%E6%8C%81%E7%9A%84-output"},"\u4e0d\u652f\u6301\u7684 Output"))),(0,r.kt)("h3",{id:"clusteroutput-\u8bbe\u4e3a-elasticsearch"},"ClusterOutput \u8bbe\u4e3a ElasticSearch"),(0,r.kt)("p",null,"\u5047\u8bbe\u4f60\u60f3\u5c06\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u65e5\u5fd7\u53d1\u9001\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"elasticsearch")," \u96c6\u7fa4\u3002\u9996\u5148\uff0c\u521b\u5efa\u4e00\u4e2a\u96c6\u7fa4 ",(0,r.kt)("inlineCode",{parentName:"p"},"Output"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterOutput\nmetadata:\n    name: "example-es"\n    namespace: "cattle-logging-system"\nspec:\n    elasticsearch:\n      host: elasticsearch.example.com\n      port: 9200\n      scheme: http\n')),(0,r.kt)("p",null,"\u5728\u4e0e Operator \u76f8\u540c\u7684\u547d\u540d\u7a7a\u95f4\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-logging-system"),"\uff09\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u8fd9\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),"\uff08\u6ca1\u6709 elasticsearch \u914d\u7f6e\uff09\u3002\u6bcf\u6b21\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput")," \u65f6\uff0c\u6211\u4eec\u90fd\u5fc5\u987b\u5c06\u5176\u653e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-logging-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u3002"),(0,r.kt)("p",null,"\u914d\u7f6e\u65e5\u5fd7\u7684\u76ee\u7684\u4f4d\u7f6e\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5c1d\u8bd5\u5c06\u6240\u6709\u65e5\u5fd7\u90fd\u914d\u7f6e\u5230\u8be5 ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterFlow\nmetadata:\n    name: "all-logs"\n    namespace: "cattle-logging-system"\nspec:\n  globalOutputRefs:\n    - "example-es"\n')),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u5e94\u8be5\u80fd\u770b\u5230\u914d\u7f6e\u7684\u5305\u542b\u65e5\u5fd7\u7684\u7d22\u5f15\u3002"),(0,r.kt)("h3",{id:"output-\u8bbe\u4e3a-splunk"},"Output \u8bbe\u4e3a Splunk"),(0,r.kt)("p",null,"\u6709\u65f6\u5019\uff0c\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u56e2\u961f\u53ef\u80fd\u53ea\u60f3\u5c06\u67d0\u4e2a\u547d\u540d\u7a7a\u95f4\u7684\u65e5\u5fd7\u53d1\u9001\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"splunk")," \u670d\u52a1\u5668\u3002\u5bf9\u4e8e\u8fd9\u79cd\u60c5\u51b5\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u547d\u540d\u7a7a\u95f4\u8303\u56f4\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow"),"\u3002"),(0,r.kt)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u5148\u8bbe\u7f6e\u8be5\u56e2\u961f\u7684\u5e94\u7528\u7a0b\u5e8f ",(0,r.kt)("inlineCode",{parentName:"p"},"coolapp"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: devteam\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: coolapp\n  namespace: devteam\n  labels:\n    app: coolapp\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: coolapp\n  template:\n    metadata:\n      labels:\n        app: coolapp\n    spec:\n      containers:\n        - name: generator\n          image: paynejacob/loggenerator:latest\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"coolapp")," \u8fd0\u884c\u65f6\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u4e0e\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput")," \u65f6\u7c7b\u4f3c\u7684\u8def\u5f84\u3002\u4f46\u662f\uff0c\u6211\u4eec\u4e0d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),"\uff0c\u800c\u662f\u5728\u5e94\u7528\u7a0b\u5e8f\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"Output"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: Output\nmetadata:\n  name: "devteam-splunk"\n  namespace: "devteam"\nspec:\n  splunkHec:\n    hec_host: splunk.example.com\n    hec_port: 8088\n    protocol: http\n')),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u518d\u6b21\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," \u63d0\u4f9b\u4e00\u4e9b\u65e5\u5fd7\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: Flow\nmetadata:\n  name: "devteam-logs"\n  namespace: "devteam"\nspec:\n  localOutputRefs:\n    - "devteam-splunk"\n')),(0,r.kt)("h3",{id:"output-\u8bbe\u4e3a-syslog"},"Output \u8bbe\u4e3a Syslog"),(0,r.kt)("p",null,"\u5047\u8bbe\u4f60\u60f3\u5c06\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u65e5\u5fd7\u53d1\u9001\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"syslog")," \u670d\u52a1\u5668\u3002\u9996\u5148\uff0c\u6211\u4eec\u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterOutput\nmetadata:\n  name: "example-syslog"\n  namespace: "cattle-logging-system"\nspec:\n  syslog:\n    buffer:\n      timekey: 30s\n      timekey_use_utc: true\n      timekey_wait: 10s\n      flush_interval: 5s\n    format:\n      type: json\n      app_name_field: test\n    host: syslog.example.com\n    insecure: true\n    port: 514\n    transport: tcp\n')),(0,r.kt)("p",null,"\u914d\u7f6e\u65e5\u5fd7\u7684\u76ee\u7684\u4f4d\u7f6e\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5c1d\u8bd5\u5c06\u6240\u6709\u65e5\u5fd7\u90fd\u914d\u7f6e\u5230\u8be5 ",(0,r.kt)("inlineCode",{parentName:"p"},"Output"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterFlow\nmetadata:\n  name: "all-logs"\n  namespace: cattle-logging-system\nspec:\n  globalOutputRefs:\n    - "example-syslog"\n')),(0,r.kt)("h3",{id:"\u4e0d\u652f\u6301\u7684-output"},"\u4e0d\u652f\u6301\u7684 Output"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u6700\u540e\u4e00\u4e2a\u793a\u4f8b\uff0c\u6211\u4eec\u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," \u6765\u5c06\u65e5\u5fd7\u5199\u5165\u5230\u4e0d\u662f\u5f00\u7bb1\u5373\u7528\u7684\u76ee\u6807\u4f4d\u7f6e\uff1a"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Syslog \u6ce8\u610f\u4e8b\u9879\uff1a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"Syslog")," \u662f\u53d7\u652f\u6301\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Output"),"\u3002\u4f46\u662f\uff0c\u6b64\u793a\u4f8b\u4ecd\u63d0\u4f9b\u4e86\u4e0d\u53d7\u652f\u6301\u7684\u63d2\u4ef6\u6982\u8ff0\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\nmetadata:\n  name: syslog-config\n  namespace: cattle-logging-system\ntype: Opaque\nstringData:\n  fluent-bit.conf: |\n    [INPUT]\n        Name              forward\n        Port              24224\n\n    [OUTPUT]\n        Name              syslog\n        InstanceName      syslog-output\n        Match             *\n        Addr              syslog.example.com\n        Port              514\n        Cluster           ranchers\n\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: fluentbit-syslog-forwarder\n  namespace: cattle-logging-system\n  labels:\n    output: syslog\nspec:\n  selector:\n    matchLabels:\n      output: syslog\n  template:\n    metadata:\n      labels:\n        output: syslog\n    spec:\n      containers:\n      - name: fluentbit\n        image: paynejacob/fluent-bit-out-syslog:latest\n        ports:\n          - containerPort: 24224\n        volumeMounts:\n          - mountPath: "/fluent-bit/etc/"\n            name: configuration\n      volumes:\n      - name: configuration\n        secret:\n          secretName: syslog-config\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: syslog-forwarder\n  namespace: cattle-logging-system\nspec:\n  selector:\n    output: syslog\n  ports:\n    - protocol: TCP\n      port: 24224\n      targetPort: 24224\n---\napiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterFlow\nmetadata:\n  name: all-logs\n  namespace: cattle-logging-system\nspec:\n  globalOutputRefs:\n    - syslog\n---\napiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterOutput\nmetadata:\n  name: syslog\n  namespace: cattle-logging-system\nspec:\n  forward:\n    servers:\n      - host: "syslog-forwarder.cattle-logging-system"\n    require_ack_response: false\n    ignore_network_errors_at_startup: false\n')),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u5206\u89e3\u8fd9\u91cc\u7684\u5185\u5bb9\u3002\u9996\u5148\uff0c\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u5bb9\u5668 Deployment\uff0c\u8be5\u5bb9\u5668\u5177\u6709\u989d\u5916\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"syslog")," \u63d2\u4ef6\u5e76\u652f\u6301\u8f6c\u53d1\u81ea\u53e6\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"fluentd")," \u7684\u65e5\u5fd7\u3002\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u914d\u7f6e\u4e3a Deployment \u8f6c\u53d1\u5668\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Output"),"\u3002\u7136\u540e\uff0cDeployment ",(0,r.kt)("inlineCode",{parentName:"p"},"fluentd")," \u4f1a\u5c06\u6240\u6709\u65e5\u5fd7\u8f6c\u53d1\u5230\u914d\u7f6e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"syslog")," \u76ee\u6807\u3002"))}g.isMDXComponent=!0}}]);