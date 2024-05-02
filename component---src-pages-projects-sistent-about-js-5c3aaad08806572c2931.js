"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[6010],{88083:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(67294);const a=[{id:0,link:"/projects/sistent/about",text:"About Sistent"},{id:1,link:"/projects/sistent/identity/color",text:"Colors"},{id:2,link:"/projects/sistent/identity/color/guidance",text:"Colors"},{id:3,link:"/projects/sistent/identity/color/code",text:"Colors"},{id:4,link:"/projects/sistent/identity/spacing",text:"Spacing"},{id:5,link:"/projects/sistent/identity/spacing/guidance",text:"Spacing"},{id:6,link:"/projects/sistent/identity/spacing/code",text:"Spacing"},{id:7,link:"/projects/sistent/identity/typography",text:"Typography"},{id:8,link:"/projects/sistent/identity/typography/guidance",text:"Typography"},{id:9,link:"/projects/sistent/identity/typography/code",text:"Typography"},{id:10,link:"/projects/sistent/components/button",text:"Button"},{id:10,link:"/projects/sistent/components/button/guidance",text:"Button"},{id:11,link:"/projects/sistent/components/button/code",text:"Button"},{id:12,link:"/projects/sistent/components/text-input",text:"Text Input"},{id:13,link:"/projects/sistent/components/text-input/guidance",text:"Text Input"},{id:14,link:"/projects/sistent/components/text-input/code",text:"Text Input"}];var s=n(63689);var o=n(85313).default.div.withConfig({displayName:"paginationstyle__TocPaginationWrapper",componentId:"sc-isbsjw-0"})(["\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 3rem 2rem 4rem 2rem;\n\n  @media screen and (max-width: 540px) {\n    margin: 0 0 2rem 0;\n    flex-flow: row wrap;\n    gap: 0.3rem;\n  }\n"]);var l=()=>{var e,t;const{0:n,1:l}=(0,i.useState)(0);return(0,i.useEffect)((()=>{const e=window.location.pathname,t=a.findIndex((t=>t.link===e));l(t)}),[]),i.createElement(o,null,n>0?i.createElement(s.default,{secondary:!0,url:null===(e=a[n-1])||void 0===e?void 0:e.link},"← Previous"):null,n<a.length-1?i.createElement(s.default,{primary:!0,url:null===(t=a[n+1])||void 0===t?void 0:t.link},"Next →"):null)}},70722:function(e,t,n){var i=n(67294),a=n(71082);const s=n(85313).default.div.withConfig({displayName:"intra-page__JoinCommunityWrapper",componentId:"sc-42m33g-0"})(["\n  @media screen and (min-width: 751px) and (max-width: 1279px) {\n    display: none;\n  }\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    padding-right: 2rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    .list {\n      color: #000000;\n    }\n    .active {\n      font-weight: 5000;\n      color: #000000;\n    }\n\n    ul {\n      list-style: none;\n      top: 3rem;\n      li {\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n      }\n    }\n    @media only screen and (min-width: 1280px) and (max-width: 1350px) {\n      padding-right: 0rem;\n      margin-right: 0rem;\n    }\n    @media only screen and (max-width: 950px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn {\n    width: 10rem;\n  }\n"]);t.Z=function(e){let{contents:t}=e;const{0:n,1:o}=(0,i.useState)(null);return(0,i.useEffect)((()=>{const e=window.location.pathname;o(e)}),[]),i.createElement(s,null,i.createElement("div",{className:"intra-page"},i.createElement("ul",null,t.map((e=>i.createElement("li",{key:e.id,className:"list"},i.createElement(a.Link,{to:""+n+e.link,key:e.id,activeClassName:"active"},e.text)))))))}},10513:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var i=n(67294),a=n(37242),s=n(56678),o=n(25661),l=n(70722),r=n(88083);const c=[{id:0,link:"#About Sistent",text:"About Sistent"}];var d=()=>i.createElement(s.Z,null,i.createElement("div",{className:"page-header-section"},i.createElement("h1",null,"About Sistent")),i.createElement(o.Z,null),i.createElement("div",{className:"page-section"},i.createElement(a.W2,null,i.createElement("div",{className:"content"},i.createElement("a",{id:"About Sistent"},i.createElement("h2",null,"About Sistent")),i.createElement("p",null,"We have several different React apps that heavily uses the Material UI v4 and v5 libraries, and this discrepancies led up to setting up the Sistent Design System."),i.createElement("p",null,i.createElement("b",null,"We want to be able to have the source of truth of what Layer5.io and Meshery looks like.")),i.createElement("p",null,"'Sistent' is a play on word to ensure that we have a consistent theme, components, design tokens, etc across all of the apps that will be using this library. Sistent is a design system that uses the ",i.createElement("b",null,"MUI v5 components")," and a ",i.createElement("b",null,"custom theme provider "),"instead of using the default theme from MUI v5."),i.createElement("p",null,"If you’re interested in joining, please let us know, and we can help you get started on contributing to the Sistent Design System.")),i.createElement(r.Z,null)),i.createElement(l.Z,{contents:c})));var p=()=>i.createElement(d,null)}}]);
//# sourceMappingURL=component---src-pages-projects-sistent-about-js-5c3aaad08806572c2931.js.map