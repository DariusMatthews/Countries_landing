(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{27:function(t,e,a){t.exports=a.p+"static/media/light-mode-moon.6f1f85f3.svg"},28:function(t,e,a){t.exports=a.p+"static/media/dark-mode-moon.399b1420.svg"},31:function(t,e,a){t.exports=a.p+"static/media/search-glass.c6a0effb.svg"},32:function(t,e,a){t.exports=a.p+"static/media/down-btn.2c0862a6.svg"},33:function(t,e,a){t.exports=a.p+"static/media/arrow-left.713fe29d.svg"},34:function(t,e,a){t.exports=a(64)},39:function(t,e,a){},64:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),i=a(2),s=(a(39),a(6)),o=a(9),_=a(27),m=a.n(_),u=a(28),d=a.n(u);function g(t){var e=t.toggle,a=t.onClick;return r.a.createElement("div",{className:e?"header header--light":"header header--dark"},r.a.createElement(s.b,{className:e?"header__link header__link--light":"header__link header__link--dark",to:"".concat("/Countries_landing","/")},r.a.createElement("h1",{className:"header__title"},"Where in The World?")),r.a.createElement("button",{className:e?"btn btn--light":"btn btn--dark",onClick:a},r.a.createElement("img",{className:e?"btn__img":"btn__img btn__img--dark",src:e?d.a:m.a,alt:"Moon"}),e?"Dark Mode":"Light Mode"))}var p=a(8),b=a.n(p),y=a(11),f=a.n(y);function h(t){var e=t.countries,a=t.toggle;return r.a.createElement("div",{className:"main__cardSection"},e.map((function(t){return r.a.createElement("div",{key:t.alpha3Code,className:a?"card card--light":"card card--dark"},r.a.createElement(s.b,{to:"".concat("/Countries_landing","/country/").concat(t.alpha3Code)},r.a.createElement("img",{className:"card__img",src:t.flag,alt:t.name})),r.a.createElement(s.b,{className:a?"card__link card__link--light":"card__link card__link--dark",to:"".concat("/Countries_landing","/country/").concat(t.alpha3Code)},r.a.createElement("h2",{className:"card__title"},t.name)),r.a.createElement("ul",{className:"card__list"},r.a.createElement("li",{className:a?"card__listItem card__listItem--light":"card__listItem card__listItem--dark"},r.a.createElement("span",{className:"card__description"},"Population:"),t.population),r.a.createElement("li",{className:a?"card__listItem card__listItem--light":"card__listItem card__listItem--dark"},r.a.createElement("span",{className:"card__description"},"Region:"),t.region),r.a.createElement("li",{className:a?"card__listItem card__listItem--light":"card__listItem card__listItem--dark"},r.a.createElement("span",{className:"card__description"},"Capital:"),t.capital)))})))}function E(t){for(var e=t.countriesPerPage,a=t.totalCountries,n=t.paginate,c=t.toggle,l=[],i=1;i<=Math.ceil(a/e);i++)l.push(i);return r.a.createElement("div",{className:"pagination"},r.a.createElement("ul",{className:"pagination__list"},l.map((function(t){return r.a.createElement("li",{key:t,className:c?"pagination__item pagination__item--light":"pagination__item pagination__item--dark"},r.a.createElement("button",{className:c?"pagination__link pagination__link--light":"pagination__link pagination__link--dark",onClick:function(){return n(t)}},t))}))))}var k=a(31),N=a.n(k),v=a(32),I=a.n(v);function O(t){var e=t.toggle,a=Object(n.useState)(""),c=Object(i.a)(a,2),l=c[0],s=c[1],o=Object(n.useState)(""),_=Object(i.a)(o,2),m=_[0],u=_[1],d=Object(n.useState)(""),g=Object(i.a)(d,2),p=g[0],y=g[1],k=Object(n.useState)(""),v=Object(i.a)(k,2),O=v[0],j=v[1],C=Object(n.useState)([]),x=Object(i.a)(C,2),T=x[0],w=x[1],S=Object(n.useState)(!1),B=Object(i.a)(S,2),A=B[0],P=B[1],D=Object(n.useState)(1),L=Object(i.a)(D,2),R=L[0],M=L[1];Object(n.useEffect)((function(){!function(){var t,e;b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.awrap(f()("https://restcountries.eu/rest/v2/all"));case 2:t=a.sent,e=t.data,w(e);case 5:case"end":return a.stop()}}))}()}),[]),Object(n.useEffect)((function(){!function(){var t,e;b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.awrap(f()("https://restcountries.eu/rest/v2/name/".concat(p)));case 2:t=a.sent,e=t.data,w(e);case 5:case"end":return a.stop()}}))}()}),[p]),Object(n.useEffect)((function(){!function(){var t,e;b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.awrap(f()("https://restcountries.eu/rest/v2/region/".concat(O)));case 2:t=a.sent,e=t.data,w(e);case 5:case"end":return a.stop()}}))}()}),[O]);var J=24*R,W=J-24,F=T.slice(W,J);return r.a.createElement("div",{className:"main"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),0===l.length?u("Please enter country name"):(u(""),y(l)),console.log(m)},className:e?"form form--light":"form form--dark"},r.a.createElement("input",{placeholder:"Search for a country...",onChange:function(t){var e=t.target.value;s(e)},type:"text",className:e?"form__input form__input--light":"form__input form__input--dark"}),r.a.createElement("button",{type:"submit",className:e?"form__btn btn btn--light":"form__btn btn btn--dark"},r.a.createElement("img",{className:e?"form__img form__img--light":"form__img form__img--dark",src:N.a,alt:"search"}))),r.a.createElement("p",{className:"main__errorText"},m),r.a.createElement("ul",{className:e?"list list--light":"list list--dark"},r.a.createElement("li",{className:e?"list__item list__item--title list__item--title-light list__item--light":"list__item list__item--title list__item--title-dark list__item--dark"},r.a.createElement("button",{className:e?"list__btn btn btn--light":"list__btn btn btn--dark",onClick:function(){return P(!A)}},"Filter by Region",r.a.createElement("img",{className:e?"list__img list__img--light":"list__img list__img--dark",src:I.a,alt:"Down"}))),A&&["Africa","Americas","Asia","Europe","Oceania"].map((function(t){return r.a.createElement("li",{className:e?"list__item list__item--light":"list__item list__item--dark"},r.a.createElement("button",{className:e?"btn btn--light":"btn btn--dark",onClick:function(){return j(t)}},t))}))),r.a.createElement(h,{countries:F,toggle:e}),r.a.createElement(E,{countriesPerPage:24,totalCountries:T.length,paginate:function(t){M(t),document.body.scrollTop=0,document.documentElement.scrollTop=0},toggle:e}))}var j=a(33),C=a.n(j);function x(t){var e=t.match,a=t.toggle,c=Object(n.useState)("https://restcountries.eu/rest/v2/alpha/".concat(e.params.alpha3code)),l=Object(i.a)(c,2),o=l[0],_=l[1],m=Object(n.useState)({}),u=Object(i.a)(m,2),d=u[0],g=u[1],p=Object(n.useState)([]),y=Object(i.a)(p,2),h=y[0],E=y[1];Object(n.useEffect)((function(){!function(){var t,e;b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.awrap(f()(o));case 2:t=a.sent,e=t.data,g(e);case 5:case"end":return a.stop()}}))}()}),[o]),Object(n.useEffect)((function(){var t=d.borders;E(t)}),[d]);var k=d.languages,N=d.currencies;return r.a.createElement("div",{className:"country"},r.a.createElement(s.b,{className:"country__backLink",to:"".concat("/Countries_landing","/")},r.a.createElement("div",{className:a?"country__backBtn country__backBtn--light":"country__backBtn country__backBtn--dark"},r.a.createElement("img",{src:C.a,alt:"back arrow",className:a?"country__arrow country__arrow--light":"country__arrow country__arrow--dark"}),r.a.createElement("span",{className:a?"country__btnText country__btnText--light":"country__btnText country__btnText--dark"},"Back"))),r.a.createElement("img",{src:d.flag,alt:d.name,className:"country__flag"}),r.a.createElement("h1",{className:a?"country__title country__title--light":"country__title country__title--dark"},d.name),r.a.createElement("ul",{className:"country__list country__list--left"},r.a.createElement("li",{className:a?"country__listItem country__listItem--light":"country__listItem country__listItem--dark"},r.a.createElement("span",{className:"country__subTitle"},"Native Name:"),d.nativeName),r.a.createElement("li",{className:a?"country__listItem country__listItem--light":"country__listItem country__listItem--dark"},r.a.createElement("span",{className:"country__subTitle"},"Population:"),d.population),r.a.createElement("li",{className:a?"country__listItem country__listItem--light":"country__listItem country__listItem--dark"},r.a.createElement("span",{className:"country__subTitle"},"Region:"),d.region),r.a.createElement("li",{className:a?"country__listItem country__listItem--light":"country__listItem country__listItem--dark"},r.a.createElement("span",{className:"country__subTitle"},"Sub Region:"),d.subRegion),r.a.createElement("li",{className:a?"country__listItem country__listItem--light":"country__listItem country__listItem--dark"},r.a.createElement("span",{className:"country__subTitle"},"Capital:"),d.capital)),r.a.createElement("ul",{className:"country__list country__list--right"},r.a.createElement("li",{className:a?"country__listItem country__listItem--light":"country__listItem country__listItem--dark"},r.a.createElement("span",{className:"country__subTitle"},"Top Level Domain:"),d.topLevelDomain),r.a.createElement("li",{className:a?"country__listItem country__listItem--light":"country__listItem country__listItem--dark"},r.a.createElement("span",{className:"country__subTitle"},"Currencies:"),void 0!==N&&N.map((function(t,e){return N.length===e+1?t.name:"".concat(t.name,", ")}))),r.a.createElement("li",{className:a?"country__listItem country__listItem--light":"country__listItem country__listItem--dark"},r.a.createElement("span",{className:"country__subTitle"},"Languages:"),void 0!==k&&k.map((function(t,e){return k.length===e+1?t.name:"".concat(t.name,", ")})))),r.a.createElement("h2",{className:a?"country__borderTitle country__borderTitle--light":"country__borderTitle country__borderTitle--dark"},"Border Countries:"),r.a.createElement("div",{className:"country__borders"},void 0!==h&&h.map((function(t){return r.a.createElement(s.b,{key:t,to:"".concat("/Countries_landing","/country/").concat(t)},r.a.createElement("button",{onClick:function(){return _("https://restcountries.eu/rest/v2/alpha/".concat(t))},className:a?"country__borderBtn country__borderBtn--light":"country__borderBtn country__borderBtn--dark"},t))}))))}var T=function(){var t=Object(n.useState)(!0),e=Object(i.a)(t,2),a=e[0],c=e[1];return r.a.createElement(s.a,null,r.a.createElement("div",{className:a?"App App--light":"App App--dark"},r.a.createElement(g,{toggle:a,onClick:function(){return c(!a)}}),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"".concat("/Countries_landing","/"),render:function(t){return r.a.createElement(O,Object.assign({},t,{toggle:a}))}}),r.a.createElement(o.a,{path:"".concat("/Countries_landing","/country/:alpha3code"),render:function(t){return r.a.createElement(x,Object.assign({},t,{toggle:a}))}}))))};l.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.c999e78d.chunk.js.map