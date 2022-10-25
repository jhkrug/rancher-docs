"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[61178],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},48997:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=["components"],i={title:"Adding Users to Projects"},c=void 0,l={unversionedId:"how-to-guides/new-user-guides/add-users-to-projects",id:"how-to-guides/new-user-guides/add-users-to-projects",title:"Adding Users to Projects",description:"If you want to provide a user with access and permissions to specific projects and resources within a cluster, assign the user a project membership.",source:"@site/docs/how-to-guides/new-user-guides/add-users-to-projects.md",sourceDirName:"how-to-guides/new-user-guides",slug:"/how-to-guides/new-user-guides/add-users-to-projects",permalink:"/how-to-guides/new-user-guides/add-users-to-projects",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/add-users-to-projects.md",tags:[],version:"current",lastUpdatedAt:1666730461,formattedLastUpdatedAt:"10/25/2022",frontMatter:{title:"Adding Users to Projects"},sidebar:"tutorialSidebar",previous:{title:"Restoring a Cluster from Backup",permalink:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"},next:{title:"Namespaces",permalink:"/how-to-guides/new-user-guides/manage-namespaces"}},p={},d=[{value:"Adding Members to a New Project",id:"adding-members-to-a-new-project",level:3},{value:"Adding Members to an Existing Project",id:"adding-members-to-an-existing-project",level:3}],m={toc:d};function u(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you want to provide a user with access and permissions to ",(0,o.kt)("em",{parentName:"p"},"specific")," projects and resources within a cluster, assign the user a project membership."),(0,o.kt)("p",null,"You can add members to a project as it is created, or add them to an existing project."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Want to provide a user with access to ",(0,o.kt)("em",{parentName:"p"},"all")," projects within a cluster? See ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"Adding Cluster Members")," instead."))),(0,o.kt)("h3",{id:"adding-members-to-a-new-project"},"Adding Members to a New Project"),(0,o.kt)("p",null,"You can add members to a project as you create it (recommended if possible). For details on creating a new project, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces"},"cluster administration section.")),(0,o.kt)("h3",{id:"adding-members-to-an-existing-project"},"Adding Members to an Existing Project"),(0,o.kt)("p",null,"Following project creation, you can add users as project members so that they can access its resources."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Clusters")," page, go to the cluster where you want to add members to a project and click ",(0,o.kt)("strong",{parentName:"p"},"Explore"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Cluster > Projects/Namespaces"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the project where you want to add members and click ",(0,o.kt)("strong",{parentName:"p"},"\u22ee > Edit Config"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Members")," tab, click ",(0,o.kt)("strong",{parentName:"p"},"Add"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Search for the user or group that you want to add to the project."),(0,o.kt)("p",{parentName:"li"},"If external authentication is configured:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Rancher returns users from your external authentication source as you type.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A drop-down allows you to add groups instead of individual users. The dropdown only lists groups that you, the logged in user, are included in."))),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are logged in as a local user, external users do not display in your search results.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Assign the user or group ",(0,o.kt)("strong",{parentName:"p"},"Project")," roles."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"What are Project Roles?")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notes:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Users assigned the ",(0,o.kt)("inlineCode",{parentName:"p"},"Owner")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Member")," role for a project automatically inherit the ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace creation")," role. However, this role is a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole"},"Kubernetes ClusterRole"),", meaning its scope extends to all projects in the cluster. Therefore, users explicitly assigned the ",(0,o.kt)("inlineCode",{parentName:"p"},"Owner")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Member")," role for a project can create or delete namespaces in other projects they're assigned to, even with only the ",(0,o.kt)("inlineCode",{parentName:"p"},"Read Only")," role assigned.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"By default, the Rancher role of ",(0,o.kt)("inlineCode",{parentName:"p"},"project-member")," inherits from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Kubernetes-edit")," role, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"project-owner")," role inherits from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Kubernetes-admin")," role. As such, both ",(0,o.kt)("inlineCode",{parentName:"p"},"project-member")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"project-owner")," roles will allow for namespace management, including the ability to create and delete namespaces.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For ",(0,o.kt)("inlineCode",{parentName:"p"},"Custom")," roles, you can modify the list of individual roles available for assignment."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To add roles to the list, ",(0,o.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles"},"Add a Custom Role"),"."),(0,o.kt)("li",{parentName:"ul"},"To remove roles from the list, ",(0,o.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles"},"Lock/Unlock Roles"),".")))))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The chosen users are added to the project."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To revoke project membership, select the user and click ",(0,o.kt)("strong",{parentName:"li"},"Delete"),". This action deletes membership, not the user."),(0,o.kt)("li",{parentName:"ul"},"To modify a user's roles in the project, delete them from the project, and then re-add them with modified roles.")))}u.isMDXComponent=!0}}]);