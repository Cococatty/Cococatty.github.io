(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"tJ/O":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return P}));var n=a("dI71"),i=a("q1tI"),r=a.n(i),o=a("Bl7J"),p=a("SgMy"),d=a("1oc3"),s=a("e+E3"),c=a("Wbzz"),l=a("vOnD"),m=a("5hye"),g=l.b.nav.withConfig({displayName:"Pagination__PaginationWrapper",componentId:"j8ijrk-0"})(["display:flex;flex-wrap:wrap;justify-content:center;align-items:center;margin-top:4em;justify-content:space-between;width:80%;max-width:770px;padding:25px 0;margin:0px auto;@media (max-width:780px){width:90%;padding:25px 0;}"]),u=Object(l.b)(c.Link).withConfig({displayName:"Pagination__PageBtn",componentId:"j8ijrk-1"})(["border-radius:3px;background-color:",";border:1px solid ",";color:",";padding:8px 20px;min-width:130px;&:hover{background-color:",";color:",";border:1px solid ",";}@media (max-width:564px){margin-top:10px;width:100%;}"],m.a.primary,m.a.primary,m.a.textLightest,m.a.textLightest,m.a.primary,m.a.primary),x=Object(l.b)(u).withConfig({displayName:"Pagination__PreviousBtn",componentId:"j8ijrk-2"})(["order:1;@media (max-width:564px){order:2;}"]),h=Object(l.b)(u).withConfig({displayName:"Pagination__NextBtn",componentId:"j8ijrk-3"})(["order:3;"]),w=l.b.span.withConfig({displayName:"Pagination__Spacer",componentId:"j8ijrk-4"})(["display:block;min-width:130px;&.previous{order:1;}&.next{order:3;}@media (max-width:564px){display:none;&.previous{order:2;}&.next{order:3;}}"]),b=l.b.span.withConfig({displayName:"Pagination__PageInfo",componentId:"j8ijrk-5"})(["order:2;padding:1em 0;@media (max-width:564px){order:1;}"]),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.currentPage,a=e.nbPages,n=2===t?"/":"/pages/"+(t-1);return r.a.createElement(g,null,1!==t?r.a.createElement(x,{to:n},"‹ Newer posts"):r.a.createElement(w,{className:"previous"}),r.a.createElement(b,null,"Page ",t," of ",a),t<a?r.a.createElement(h,{to:"/pages/"+(t+1)},"Older posts ›"):r.a.createElement(w,{className:"next"}))},t}(r.a.Component),f=a("EYWl"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.title,a=e.description,n=this.props.data.posts.edges,i=this.props.pageContext;return r.a.createElement(o.a,{location:this.props.location},r.a.createElement(f.a,null),r.a.createElement(d.a,{title:t,subTitle:a}),r.a.createElement(p.a,null,r.a.createElement(s.a,{posts:n})),r.a.createElement(y,{nbPages:i.nbPages,currentPage:i.currentPage}))},t}(r.a.Component),P=(t.default=j,"4260621706")}}]);
//# sourceMappingURL=component---src-templates-blog-list-template-js-1be1993d01834db6a67b.js.map