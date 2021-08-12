"use strict";(self.webpackChunkamengblog=self.webpackChunkamengblog||[]).push([[4157],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9935:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={sidebar_position:5},u="\u6700\u4f73\u5b9e\u8df5-Todo",c={unversionedId:"react/\u6700\u4f73\u5b9e\u8df5-Todo",id:"react/\u6700\u4f73\u5b9e\u8df5-Todo",isDocsHomePage:!1,title:"\u6700\u4f73\u5b9e\u8df5-Todo",description:"Docusaurus is a static-site-generator (also called Jamstack).",source:"@site/docs\\react\\\u6700\u4f73\u5b9e\u8df5-Todo.md",sourceDirName:"react",slug:"/react/\u6700\u4f73\u5b9e\u8df5-Todo",permalink:"/docs/react/\u6700\u4f73\u5b9e\u8df5-Todo",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/react\\\u6700\u4f73\u5b9e\u8df5-Todo.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Deploy your site",permalink:"/docs/react/deploy-your-site"},next:{title:"Congratulations!",permalink:"/docs/react/congratulations"}},s=[{value:"Build your site",id:"build-your-site",children:[]},{value:"Deploy your site",id:"deploy-your-site",children:[]}],p={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6700\u4f73\u5b9e\u8df5-todo"},"\u6700\u4f73\u5b9e\u8df5-Todo"),(0,a.kt)("p",null,"Docusaurus is a ",(0,a.kt)("strong",{parentName:"p"},"static-site-generator")," (also called ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://jamstack.org/"},"Jamstack")),")."),(0,a.kt)("p",null,"It builds your site as simple ",(0,a.kt)("strong",{parentName:"p"},"static HTML, JavaScript and CSS files"),"."),(0,a.kt)("h2",{id:"build-your-site"},"Build your site"),(0,a.kt)("p",null,"Build your site ",(0,a.kt)("strong",{parentName:"p"},"for production"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,a.kt)("p",null,"The static files are generated in the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder."),(0,a.kt)("h2",{id:"deploy-your-site"},"Deploy your site"),(0,a.kt)("p",null,"Test your production build locally:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run serve\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder is now served at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/"),"."),(0,a.kt)("p",null,"You can now deploy the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder ",(0,a.kt)("strong",{parentName:"p"},"almost anywhere")," easily, ",(0,a.kt)("strong",{parentName:"p"},"for free")," or very small cost (read the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://docusaurus.io/docs/deployment"},"Deployment Guide")),")."))}d.isMDXComponent=!0}}]);