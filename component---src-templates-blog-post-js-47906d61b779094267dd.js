(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EYWl:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("TJpk"),i=n.n(o),l=n("Wbzz"),c=n("tHN7");t.a=function(e){var t=e.isBlogPost,n=e.path,a=void 0===n?"":n,o=e.lang,s=void 0===o?"en":o,p=Object(c.a)(),d=p.siteTitle,u=p.siteUrl,m=p.siteCover,g=p.siteDescription,h=(p.twitterUsername,e.title?e.title+" | "+d:d+" - "+g),f=u.endsWith("/")?u.substring(0,u.length-1):u,b=""+f+(e.imageShare||e.cover||Object(l.withPrefix)(m)),x=e.description||g;return r.a.createElement(i.a,{title:h},r.a.createElement("html",{lang:s}),r.a.createElement("meta",{name:"description",content:x}),r.a.createElement("link",{rel:"canonical",href:f+Object(l.withPrefix)(a)}),r.a.createElement("meta",{property:"og:url",content:f+Object(l.withPrefix)(a)}),r.a.createElement("meta",{property:"og:type",content:t?"article":"website"}),r.a.createElement("meta",{property:"og:title",content:h}),r.a.createElement("meta",{property:"og:description",content:x}),r.a.createElement("meta",{property:"og:image",content:b}))}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},KE4F:function(e,t,n){"use strict";var a=n("dI71"),r=n("q1tI"),o=n.n(r),i=n("vOnD"),l=n("b9pq"),c=n("5hye"),s=i.default.div.withConfig({displayName:"Translations__TranslationContainer",componentId:"kzuojb-0"})(["border-radius:5px;padding:10px;margin-top:10px;background-color:",";border:1px solid ",";"],c.a.lightYellow,c.a.grey700),p=i.default.span.withConfig({displayName:"Translations__InfoText",componentId:"kzuojb-1"})(["color:",";"],c.a.grey900),d=i.default.a.withConfig({displayName:"Translations__TranslationLink",componentId:"kzuojb-2"})(["color:",";text-decoration:underline;"],c.a.grey900),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.translations;return o.a.createElement(s,null,o.a.createElement(p,null,"This article also exists in: "),e.map((function(t,n){return o.a.createElement(r.Fragment,{key:"translation-"+n},o.a.createElement(d,{href:t.link},t.language),n<e.length-1?", ":"")})))},t}(o.a.Component),m=function(e){var t=i.default.time.withConfig({displayName:"Time__TimeContainer",componentId:"sc-1u6vd0l-0"})(["color:",";"],c.a.postMetadata),n=e.date,a=new Date(n),r=a.toLocaleDateString("en-GB",{year:"numeric",month:"2-digit",day:"numeric"}).split("/").reverse().join("-"),l=a.toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"});return o.a.createElement(t,{datetime:r},l)},g=(n("LObP"),n("SgMy"),i.default.header.withConfig({displayName:"ContentHeader__Header",componentId:"sc-1qtxhip-0"})(["margin-bottom:2rem;color:",";font-size:0.9em;"],c.a.textLight)),h=i.default.header.withConfig({displayName:"ContentHeader__InlineHeader",componentId:"sc-1qtxhip-1"})(["margin-bottom:2rem;color:",";font-size:2em;"],c.a.textLight),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.date,a=e.tags,i=e.translations;return o.a.createElement(g,null,o.a.createElement(h,null,t),o.a.createElement("br",null),n&&o.a.createElement(m,{date:n}),o.a.createElement("br",null),n&&Array.isArray(a)&&a.length>0&&"TAGS"," ",Array.isArray(a)&&a.length>0&&o.a.createElement(r.Fragment,null,o.a.createElement(l.a,{tags:a})),i&&o.a.createElement(u,{translations:i}))},t}(o.a.Component),b=n("X8hv"),x=n.n(b),y=i.default.div.withConfig({displayName:"Content__ContentBody",componentId:"p0bolz-0"})(["line-height:1.6;& > h2{padding-top:3rem;margin-top:3rem;border-top:1px solid #ececec;}& > h3{padding-top:3rem;}& > p{margin:1em 0 0 0;}& a{box-shadow:0 2px 0 0 ",";&:hover{filter:brightness(150%);box-shadow:none;}&.anchor,&.gatsby-resp-image-link{box-shadow:none;}}h1 .anchor svg,h2 .anchor svg,h3 .anchor svg,h4 .anchor svg,h5 .anchor svg,h6 .anchor svg{visibility:hidden;margin-left:-16px;}h1:hover .anchor svg,h2:hover .anchor svg,h3:hover .anchor svg,h4:hover .anchor svg,h5:hover .anchor svg,h6:hover .anchor svg,h1 .anchor:focus svg,h2 .anchor:focus svg,h3 .anchor:focus svg,h4 .anchor:focus svg,h5 .anchor:focus svg,h6 .anchor:focus svg{visibility:visible;}& > blockquote{box-sizing:border-box;background-color:#f7f7f7;border-left:5px solid rgb(244,213,36);margin:30px 0px;padding:5px 20px;border-radius:0 8px 8px 0;}& > blockquote p{margin:0.8em 0;font-style:italic;}& .gatsby-highlight{border-radius:5px;font-size:15px;line-height:1.7;border-radius:10px;overflow:auto;tab-size:1.5em;margin:1.5em -1.5em;@media (max-width:500px){border-radius:0;margin-left:-25px;margin-right:-25px;}}& .gatsby-highlight > pre{border:0;margin:0;padding:1;}& .gatsby-highlight pre[class*='language-']{float:left;min-width:100%;}& .gatsby-highlight-code-line{background-color:",";display:block;margin-right:-1em;margin-left:-1em;padding-right:1em;padding-left:0.75em;border-left:0.25em solid ",";}& h1 > code.language-text,& h2 > code.language-text,& h3 > code.language-text,& h4 > code.language-text,& h5 > code.language-text,& h6 > code.language-text,& a > code.language-text,& p > code.language-text,& li > code.language-text,& em > code.language-text,& strong > code.language-text{background:",";color:#222222cc;padding:0 3px;font-size:0.94em;border-radius:0.3rem;word-wrap:break-word;}& code{word-wrap:break-word;}& table{margin-top:1em;border-collapse:collapse;border-radius:0.5em;overflow:hidden;& th,& td{padding:0.5em;background:#f7f7f7;border-bottom:2px solid ",";}}"],c.a.links,c.a.highlight_code_linebg,c.a.highlight_code_bg,c.a.highlight_code_oneline,c.a.white),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.content,a=e.date,r=e.tags,i=e.translations;return o.a.createElement("section",null,(t||r||a||i)&&o.a.createElement(f,{title:t,date:a,tags:r,translations:i}),o.a.createElement(y,null,o.a.createElement(x.a,null,n)))},t}(o.a.Component);t.a=v},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||r(e)||o(e)||i()}},SdDl:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAFxSURBVEhL7ZTBTgIxEIb/KSssCCFyNPHAxfgMJnIx0YMnX8CX4Dl8DB/Ai2djfA5NTDSeFBLABdnWmdntKkETYjec+JLSaSn9ttNZ6OGg7fADGVAWFriZfHCrLX/3X0zeK/oEc+65eUQa9ywapykwzdeUQCH20qjrtIm8kPAqavGYxZDTl4CKVcAbzp8JzeMZt0+NVVIFkluD0VWExpnV02vqAzFeWjt02H8donORcPvgeKBzXo6qg9lxoEh+EJ5yLS7ZxI0IZhfo3g9018ejNuwLzzUzha4ZchY4R6YVqs3FEtgxodNPYCdZ3ZoG8HZZg9nOJJbvt3me6j1PbirBFV6IneVBB0ifsu2iPQf7znN8QrlTNyXUT7iyeXVyZ0CS/gAW3mORawXnsZfGvVQzML6ugOSkgVJBq9ojIp8+iQuIQHXutjguQSos/XP9hr4+ko34+8FCWTjxX2hqS5QKK4mFMqXCyuKy2YjXxka8JoAvLbx+GjBwQ8sAAAAASUVORK5CYII="},SksO:function(e,t){function n(t,a){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,a)}e.exports=n},TWmU:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAH/SURBVDhPXZJPaxNhEMZ/u2mSTTXZQCDxUDxojRcrQi/xIvRQCl7EiyAeCr1IQfDPTargodIvIP0CHqwoepAWtCcRLVTWWg8VBW0pFU+h1jap2bj7Ou9sItGB2efdmXeeeWZ2nTfXZ4xfG+Lik20+PJxn6/YpMIaB6W9Ujx9g7pzPkfMjFE/fh8ESxAa1KE4w5SbYMXfm8CiPwhKr0yf5aB6wm/LYK5QIXkzwKbjG88mb3Hj1C/w+cITM1gvZ2LG8uhLbWMedZj5rms02gSSKpIjJSsaRXINd0gzRpuxLpDwryrdEoaQlP1zxFIONPZBeZO1DItWRWTN69Sz3aiErC2v0r39FOoj0KaoLc1xe9Xm/EbL87CUU+8lk84T1OuTSEBrGhws02obHa0KcdnC+vA5MZf4pZxYzvHu7yc+7VYx09qeWqI1fYGniEKws49zZln1FfL5SZmzRsP5d3l2HtJeTtRqiVkvkCSEHJw2FisiWQJ8sIRLddixPzvttqDfJVQfY3/mR5BuyR09cP4agceykSqbA0VvGftVuILkkIN2V2NbFdvH20GOhLhMyqQQ75mqx8CpaV+IuuTUJKpleTLAVcelEXt2ee81VBbbeoqrpvCtKcSxB++/1ojTY3PmtnkwilzUXS+mgjGyLLZm1LqHklfBvl/8wFLD4z8jwB8/2wZPdL2EwAAAAAElFTkSuQmCC"},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}},X8hv:function(e,t,n){var a=n("sXyB"),r=n("RIqP"),o=n("lSNA"),i=n("8OQS");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=n("q1tI"),p=n("7ljp"),d=p.useMDXComponents,u=p.mdx,m=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,o=e.children,l=i(e,["scope","components","children"]),p=d(n),g=m(t),h=s.useMemo((function(){if(!o)return null;var e=c({React:s,mdx:u},g),t=Object.keys(e),n=t.map((function(t){return e[t]}));return a(Function,["_fn"].concat(r(t),[""+o])).apply(void 0,[{}].concat(r(n)))}),[o,t]);return s.createElement(h,c({components:p},l))}},ZhPi:function(e,t,n){var a=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},b9pq:function(e,t,n){"use strict";var a=n("dI71"),r=n("q1tI"),o=n.n(r),i=n("Wbzz"),l=n("vOnD"),c=n("5hye"),s=l.default.div.withConfig({displayName:"TagList__ListContainer",componentId:"tgjq80-0"})(["display:inline;color:",";"],c.a.postMetadata),p=Object(l.default)(i.Link).withConfig({displayName:"TagList__TagListItemLink",componentId:"tgjq80-1"})(["text-transform:uppercase;color:",";&:not(:first-child){margin-left:0.3rem;}&:hover{border-bottom:1px dotted ",";}&:before{content:'#';}"],c.a.postMetadata,c.a.textLight),d=l.default.span.withConfig({displayName:"TagList__TagListItem",componentId:"tgjq80-2"})(["text-transform:uppercase;color:",";&:not(:first-child){margin-left:0.3rem;}&:before{content:'#';}"],c.a.postMetadata),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tags,n=e.noLink;return o.a.createElement(s,null,t.map((function(e,a){return o.a.createElement(r.Fragment,{key:"tag-list-"+a},!n&&o.a.createElement(p,{to:"/tags/"+e},e),n&&o.a.createElement(d,{to:"/tags/"+e},e),a<t.length-1?", ":"")})))},t}(o.a.Component);t.a=u},kSEI:function(e,t,n){"use strict";var a=n("dI71"),r=n("q1tI"),o=n.n(r),i=n("vOnD"),l=n("SdDl"),c=n.n(l),s=n("TWmU"),p=n.n(s),d=i.default.img.withConfig({displayName:"Flag__FlagImage",componentId:"sc-1n11y4w-0"})(["padding-right:0.5rem;padding-bottom:0.2rem;"]),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.language,t="en"===e?p.a:c.a,n="en"===e?"english":"cn";return o.a.createElement(d,{src:t,alt:n,className:"flag"})},t}(o.a.Component);t.a=u},sXyB:function(e,t,n){var a=n("SksO"),r=n("b48C");function o(t,n,i){return r()?e.exports=o=Reflect.construct:e.exports=o=function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&a(o,n.prototype),o},o.apply(null,arguments)}e.exports=o},yZlL:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return L}));var a=n("dI71"),r=n("q1tI"),o=n.n(r),i=n("Bl7J"),l=n("SgMy"),c=n("1oc3"),s=n("vOnD"),p=n("LObP"),d=n("tHN7"),u=n("su/s"),m=n("5hye"),g=s.default.div.withConfig({displayName:"Bio__BioWrapper",componentId:"d7fgaq-0"})(["& .author-image{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;top:-40px;left:50%;margin-left:-40px;width:80px;height:80px;border-radius:100%;overflow:hidden;padding:6px;z-index:2;box-shadow:#ececec 0 0 0 1px;background-color:",";}& .author-image .img{position:relative;display:block;width:100%;height:100%;background-size:cover;background-position:center center;border-radius:100%;}& .author-profile .author-image{position:relative;left:auto;top:auto;width:120px;height:120px;padding:3px;margin:-100px auto 0 auto;box-shadow:none;}"],m.a.backgroundArticle),h=Object(s.default)(p.e).withConfig({displayName:"Bio__BioText",componentId:"d7fgaq-1"})(["& a{box-shadow:0 2px 0 0 ",";}& a:hover{filter:brightness(150%);box-shadow:none;}"],m.a.links),f=function(){var e=Object(d.a)(),t=e.authorAvatar,n=e.authorName,a=e.authorDescription,r=Object(u.a)(t).fixed;return o.a.createElement(g,null,o.a.createElement("figure",{className:"author-image"},o.a.createElement("div",{alt:n,style:{backgroundImage:'url("'+r.src+'")'},className:"img"})),o.a.createElement("section",null,o.a.createElement("h4",null,"About the author"),o.a.createElement(h,{dangerouslySetInnerHTML:{__html:a}})))},b=n("KE4F"),x=s.default.article.withConfig({displayName:"Article__ArticleWrapper",componentId:"jwdbi9-0"})(["padding:0 30px 30px;@media only screen and (max-width:500px){padding:0;}"]),y=s.default.footer.withConfig({displayName:"Article__ArticleFooter",componentId:"jwdbi9-1"})(["position:relative;margin:6rem 0 0;padding:3rem 0 0;border-top:1px solid #ececec;"]),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.post;return console.log("testValue is ",e.testFeature),o.a.createElement(x,null,o.a.createElement(b.a,{title:e.frontmatter.title,content:e.body,date:e.frontmatter.date,tags:e.frontmatter.tags,translations:e.frontmatter.translations}),o.a.createElement(y,null,o.a.createElement(f,null)))},t}(o.a.Component),A=n("Wbzz"),w=n("b9pq"),E=n("kSEI"),I=s.default.aside.withConfig({displayName:"PrevNextPost__PreviewContainer",componentId:"sc-1r1qyep-0"})(["display:flex;flex-wrap:wrap;max-width:770px;width:80%;margin:0px auto 30px auto;top:20px;position:relative;@media (max-width:780px){width:100%;padding:25px;}"]),C=s.default.article.withConfig({displayName:"PrevNextPost__Preview",componentId:"sc-1r1qyep-1"})(["cursor:pointer;flex:1 1 300px;background-color:",";box-shadow:0 0 0 0,0 6px 12px rgba(0,0,0,0.1);margin:20px 20px;border-radius:5px;&:hover{box-shadow:0 0 0 0,0 6px 12px ",";transition:all 0.3s ease;transform:translate3D(0,-1px,0);}@media (min-width:780px){&:first-child{margin-left:0;}&:last-child{margin-right:0;}}"],m.a.backgroundArticle,m.a.grey300),j=(s.default.div.withConfig({displayName:"PrevNextPost__PreviewCover",componentId:"sc-1r1qyep-2"})(["width:auto;height:200px;background:#c5d2d9 no-repeat 50%;background-size:cover;border-radius:5px 5px 0 0;"]),s.default.div.withConfig({displayName:"PrevNextPost__PreviewContent",componentId:"sc-1r1qyep-3"})(["padding:20px;header{padding:0 0 10px 0;}section{padding-bottom:10px;}footer{font-size:0.8em;}"])),k=function(e){var t=[e.previous,e.next].filter((function(e){return e})).map((function(e){return{node:e}})),n=Object(d.a)(),a=n.siteCover,i=n.defaultLang;Object(u.a)(a).fluid;return o.a.createElement(r.Fragment,null,o.a.createElement(I,null,t.map((function(e,t){var n=e.node,a=n.excerpt,r=n.timeToRead,l=e.node.frontmatter,c=l.tags,s=(l.cover,l.featuredImage,l.title),d=l.slug,u=l.language;return o.a.createElement(C,{key:"prev-next-"+t},o.a.createElement(A.Link,{to:"/"+d,"aria-label":"View "+s+" article"},o.a.createElement(j,null,o.a.createElement("header",null,o.a.createElement("h2",null,i!==u&&o.a.createElement(E.a,{language:u}),s)),o.a.createElement("section",null,o.a.createElement("p",null,a)),o.a.createElement("footer",null,o.a.createElement(p.c,{min:r}),Array.isArray(c)&&o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null),o.a.createElement(w.a,{tags:c,noLink:!0}))))))}))))},O=n("EYWl"),P=n("kc3O"),S=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.data.post,t=this.props.pageContext,n=t.previous,a=t.next;return o.a.createElement(i.a,{location:this.props.location},o.a.createElement(O.a,{title:e.frontmatter.title,description:e.excerpt,cover:e.frontmatter.cover&&e.frontmatter.cover.publicURL,imageShare:e.frontmatter.imageShare&&e.frontmatter.imageShare.publicURL,lang:e.frontmatter.language,path:e.frontmatter.slug,isBlogPost:!0}),o.a.createElement(c.a,{heroImg:e.frontmatter.cover&&e.frontmatter.cover.publicURL}),o.a.createElement(l.a,null,o.a.createElement(v,{post:e})),o.a.createElement(l.a,null,o.a.createElement(P.a,{slug:e.frontmatter.slug,title:e.frontmatter.title})),o.a.createElement(l.a,null,o.a.createElement("b",null,"Previous Post"),o.a.createElement(k,{previous:n}),o.a.createElement("b",null,"Next Post"),o.a.createElement(k,{next:a})))},t}(o.a.Component),L=(t.default=S,"436953668")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-47906d61b779094267dd.js.map