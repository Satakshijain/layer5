(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[2089],{78705:function(e,n,t){var r=t(15301).w_;e.exports.O=function(e){return r({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm43.4 289.1c7.5 7.5 7.5 19.8 0 27.3-3.8 3.8-8.7 5.6-13.6 5.6s-9.9-1.9-13.7-5.7l-94-94.3c-6.9-7.6-6.7-19.3.6-26.6l95.4-95.7c7.5-7.5 19.7-7.6 27.3 0 7.5 7.5 7.6 19.7 0 27.3l-81.9 81 79.9 81.1z"}}]})(e)}},56409:function(e,n,t){"use strict";t.r(n),t.d(n,{Head:function(){return T},default:function(){return z}});var r=t(67294),a=t(17875),o=t(71082),s=t(98940),l=t(51500),i=t(37242),c=t(33754),m=t(80285),d=t(89725),h=t(85313);var u=h.default.div.withConfig({displayName:"relatedResourcesstyle__RelatedResourcesWrapper",componentId:"sc-1akrh9c-0"})(["\nButton:hover{\n    box-shadow: none;\n}\n    .widgets-title{\n        margin: 1rem 0 2rem 0.5rem;\n        h3{\n            font-size: 1.5rem;\n        }\n    }\n    @media screen and (max-width:500px){\n        .widgets-title{\n            h3{\n                text-align: center;\n            }\n        }\n    }\n\n    .cardCol{\n        padding: 0 1rem;\n    }\n    @media screen and (max-width: 992px) {\n        .cardCol{\n            padding: 0 1rem;\n            margin: auto;\n        }\n    }\n\n    .slick-list{\n        padding-top: 2px;\n        text-align: center;\n    }\n    @media screen and (max-width: 992px) {\n        .slick-list{\n            margin: 0;\t\n        }\n    }\n\n    .slick-arrow{\n        width: 4.8rem;\t\n        height: 5rem;\n    }\t\n    .slick-arrow:before{\t\n        color: ",";\n        font-size: 6rem;\n        display: inline-block;\n        height: 3rem;\n    }\n    .slick-arrow:hover:before{\t\n        color: ",';\n    }\n    .slick-prev:before{\t\n        content: "‹";\t\n        line-height: 0;\n        opacity: 1;\n        color: ',';\n        margin-left: -3rem;\n    }\n    .slick-next:before{\t\n        content: "›";\n        line-height: 0;\n        opacity: 1;\n        margin-left: 2rem;\n        color: ',";\n    }\n    .slick-disabled{\t\n        visibility: hidden;\n    }\n    .slick-dots li button:before {\n        font-size: 0.6rem;\n        color: ",";\n    }\n    .slick-dots li.slick-active button:before {\n        opacity: 1;\n        color: ",";\n    }\n\n    .resource-meta-block{\n        text-align: left;\n    }\n\n    .resource-content-block{\n        height: 10rem;\n\n        .resource-title {\n            text-align: left;\n        }\n    }\n\n    .allResources{\n        height: 22rem;\n    }\n\n    @media screen and (min-width: 1200px) {\n        .resource-content-block {\n            height: 8rem;\n        }\n\n        .allResources{\n            height: 19.5rem;\n        }\n    }\n\n    @media screen and (max-width: 720px) and (min-width: 385px){\n        .resource-content-block{\n            height: 8rem;\n        }\n\n        .allResources{\n            height: 19.5rem;\n        }\n    }\n\n    .allResources_card{\n        display: inline-block;\n        height: inherit;\n        width: inherit;\n        border-radius: 0.5rem;\n        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);\n        transition: box-shadow 0.3s;\n\n        h2{\n            padding: 0.5rem 0;\n        }\n\n        a{\n            height: inherit;\n            width: inherit;\n            font-size: 1.8rem;\n            font-weight: 600;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            svg{\n                margin-left: 0px;\n                padding: 0.5rem 0 0.3rem;\n                font-size: 4rem;\n                transition: all 0.3s;\n            }\n        }\n        &:hover{\n            box-shadow: 0px 2px 15px 4px rgba(0,0,0,0.2);\n            h2{\n                color: ",";\n            }\n            svg{\n                color: ",";\n                margin-left: 3px;\n                transform: scale(1.3);\n            }\n        }\n    }\n"],(e=>e.theme.primaryColor),(e=>e.theme.secondaryColor),(e=>e.theme.primaryColor),(e=>e.theme.primaryColor),(e=>e.theme.secondaryColor),(e=>e.theme.secondaryColor),(e=>e.theme.secondaryColor),(e=>e.theme.secondaryColor)),g=t(48538),p=t(39953);var f=e=>{const{resourceType:n,relatedResources:t,mainHead:a,lastCardHead:s,linkToAllItems:l}=e,c=(0,p.Z)();return r.createElement(u,null,r.createElement("div",{className:"widgets-title"},r.createElement("h3",null,a)),c&&r.createElement(g.Z,{dots:window.innerWidth<992,arrows:window.innerWidth>=992,infinite:!1,speed:"500",slidesToShow:window.innerWidth<=720?1:window.innerWidth<=991?2:3,slidesToScroll:1},"resources"===n?t.map((e=>{let{resource:n}=e;return r.createElement(i.JX,{className:"cardCol",xs:12,key:n.fields.slug},r.createElement(d.Z,{frontmatter:n.frontmatter,fields:n.fields}))})):t.map((e=>r.createElement(i.JX,{className:"cardCol",xs:12,key:e.fields.slug},r.createElement(d.Z,{frontmatter:e.frontmatter,fields:e.fields})))),r.createElement(i.JX,{xs:12,lg:12,className:"allResources"},r.createElement("div",{className:"allResources_card"},r.createElement(o.Link,{to:l},r.createElement("h2",null,s),r.createElement(m.f,null))))))};var x=h.default.div.withConfig({displayName:"resourceSinglestyle__ResourcePageWrapper",componentId:"sc-gfz8rr-0"})(["\n    color: ",";\n    .single-resource-wrapper{\n        margin-bottom: 4rem;\n\n        h3 {\n            text-align: center;\n        }\n    }\n\n    .resource-info-block{\n        margin-top: 3rem;\n        border-bottom: 1px solid ",";\n        padding-bottom: 2rem;\n    }\n    p {\n        color: ",";\n    }\n    li {\n        color: ",";\n    }\n    .backBtn {\n        margin: 3rem auto;\n        font-weight: 600;\n        z-index: 2;\n\n        @media screen and (max-width: 62rem) {\n            display: none;\n        }\n        a{\n            display: flex;\n            color: ",";\n            &:hover{\n                color: ",";\n            }\n\n            h4 {\n                line-height: 1.75rem;\n                margin-left: 0.5rem;\n            }\n            svg {\n                font-size: 1.75rem;\n            }\n        }\n    }\n\n    .tags{\n        display: flex;\n        span{\n            font-size: 1.2rem;\n            align-self: center;\n        }\n        a{\n            color: ",";\n            margin: 0.2rem;\n            display: inline-block;\n            padding: 0.3rem 0.8rem;\n            border-radius: 0.2rem;\n            background: #F0F0F0;\n            transition: all 0.3s linear;\n            &:hover{\n                background: ",";\n                color: ",";\n            }\n        }\n        div{\n            display: inline-flex;\n            flex-wrap: wrap;\n        }\n    }\n    @media screen and (max-width: 360px){\n        .tags{\n            span{\n                position: relative;\n                top: 0.5rem;\n                align-self: flex-start;\n            }\n        }\n    }\n"],(e=>e.theme.text),(e=>e.theme.text),(e=>e.theme.text),(e=>e.theme.text),(e=>e.theme.primaryColor),(e=>e.theme.linkColor),(e=>e.theme.black),(e=>e.theme.secondaryColor),(e=>e.theme.white)),y=t(75472),b=t.n(y),w=t(64721),k=t.n(w);var v=class{constructor(e,n){this.resources=e.filter((e=>e.fields.slug!==n)),this.currentResourceSlug=n,this.maxResources=6,this.category=null,this.tags=[]}setMaxResources(e){return this.maxResources=e,this}setCategory(e){return this.category=e,this}setTags(e){return this.tags=e,this}getResources(){const{category:e,tags:n,resources:t,maxResources:r}=this,a={};if(!1==!!n||0===n.length)return console.error("RelatedResourcesFactory: Tags not provided, use setTags()."),[];if(!1==!!e)return console.error("RelatedResourcesFactory: Category not provided, use setCategory()."),[];const o=e=>e.fields.slug,s=e=>{const n=o(e);Object.prototype.hasOwnProperty.call(a,n)||(a[n]={resource:e,points:0})},l=(e,n)=>{const t=o(e);e.frontmatter.category===n&&(a[t].points+=2)},i=(e,n)=>{const t=o(e);e.frontmatter.tags.forEach((e=>{k()(n,e)&&(a[t].points+=1)}))};for(let m of t)s(m),l(m,e),i(m,n);const c=Object.keys(a).map((e=>a[e]));return b()(c,["points"],["desc"]).splice(0,r)}},E=t(78705),R=t(31173);var C=e=>{let{data:n}=e;const{frontmatter:t,body:a,fields:m}=n.mdx,d=(0,o.useStaticQuery)("2848499768").allMdx.nodes,h=new v(d,m.slug).setMaxResources(6).setCategory(t.category).setTags(t.tags).getResources();return r.createElement(x,null,r.createElement(c.Z,{title:t.title,subtitle:t.subtitle,thumbnail:t.thumbnail}),r.createElement("div",{className:"single-resource-wrapper"},r.createElement(i.W2,null,r.createElement(l.Iv,null,r.createElement(s.MDXRenderer,null,a)),r.createElement(R.Z,{category:"MeshMap"}),r.createElement("div",{className:"backBtn"},r.createElement(o.Link,{to:"/resources"},r.createElement(E.O,null),r.createElement("h4",null,"All Resources"))),r.createElement(f,{resourceType:"resources",relatedResources:h,mainHead:"Related Resources",lastCardHead:"All Resources",linkToAllItems:"/resources"}))))};var z=e=>{let{data:n}=e;return r.createElement(r.Fragment,null,r.createElement(l.ZP,null,r.createElement(C,{data:n})))};const T=e=>{let{data:n}=e;return r.createElement(a.Z,{title:n.mdx.frontmatter.title,image:n.mdx.frontmatter.thumbnail.publicURL,description:n.mdx.frontmatter.description})}}}]);
//# sourceMappingURL=component---src-templates-resource-single-js-87890174092a13089e20.js.map