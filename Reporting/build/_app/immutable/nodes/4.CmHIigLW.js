import{s as ht,d as m,i as _,a as xe,b as v,c as p,h as qt,e as j,f as ze,g as Ge,j as $,k as I,l as ut,m as Rt,o as Ut,n as Tt,p as Et,q as Pe,r as Ht,t as Dt,u as Ft}from"../chunks/scheduler.B518CZJ5.js";import{S as jt,i as It,d as g,t as y,a as d,c as He,m as k,b as h,e as q,g as De}from"../chunks/index.d-bnrsfj.js";import{D as it,e as Ct,s as Mt,Q as Fe,p as St,a as ct,r as mt,C as Lt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.7TmwxNJy.js";import{w as Nt}from"../chunks/entry.LDP-7niD.js";import{h as G,p as At}from"../chunks/button.DG0D4CRz.js";import{D as lt,G as _t,B as Ze,Q as je,a as kt,b as Ve,L as Xe}from"../chunks/LineChart.ZIF9AfA0.js";import{p as Ot}from"../chunks/stores.CzYDpESO.js";function Pt(u){let r,o=b.title+"",t;return{c(){r=I("h1"),t=Ft(o),this.h()},l(i){r=j(i,"H1",{class:!0});var c=Ht(r);t=Dt(c,o),c.forEach(m),this.h()},h(){v(r,"class","title")},m(i,c){_(i,r,c),xe(r,t)},p:Pe,d(i){i&&m(r)}}}function Qt(u){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:Pe,p:Pe,d:Pe}}function Gt(u){let r,o,t,i,c;return document.title=r=b.title,{c(){o=$(),t=I("meta"),i=$(),c=I("meta"),this.h()},l(n){o=p(n),t=j(n,"META",{property:!0,content:!0}),i=p(n),c=j(n,"META",{name:!0,content:!0}),this.h()},h(){var n,f;v(t,"property","og:title"),v(t,"content",((n=b.og)==null?void 0:n.title)??b.title),v(c,"name","twitter:title"),v(c,"content",((f=b.og)==null?void 0:f.title)??b.title)},m(n,f){_(n,o,f),_(n,t,f),_(n,i,f),_(n,c,f)},p(n,f){f&0&&r!==(r=b.title)&&(document.title=r)},d(n){n&&(m(o),m(t),m(i),m(c))}}}function Vt(u){var c,n;let r,o,t=(b.description||((c=b.og)==null?void 0:c.description))&&Bt(),i=((n=b.og)==null?void 0:n.image)&&Kt();return{c(){t&&t.c(),r=$(),i&&i.c(),o=ze()},l(f){t&&t.l(f),r=p(f),i&&i.l(f),o=ze()},m(f,U){t&&t.m(f,U),_(f,r,U),i&&i.m(f,U),_(f,o,U)},p(f,U){var s,H;(b.description||(s=b.og)!=null&&s.description)&&t.p(f,U),(H=b.og)!=null&&H.image&&i.p(f,U)},d(f){f&&(m(r),m(o)),t&&t.d(f),i&&i.d(f)}}}function Bt(u){let r,o,t,i,c;return{c(){r=I("meta"),o=$(),t=I("meta"),i=$(),c=I("meta"),this.h()},l(n){r=j(n,"META",{name:!0,content:!0}),o=p(n),t=j(n,"META",{property:!0,content:!0}),i=p(n),c=j(n,"META",{name:!0,content:!0}),this.h()},h(){var n,f,U;v(r,"name","description"),v(r,"content",b.description??((n=b.og)==null?void 0:n.description)),v(t,"property","og:description"),v(t,"content",((f=b.og)==null?void 0:f.description)??b.description),v(c,"name","twitter:description"),v(c,"content",((U=b.og)==null?void 0:U.description)??b.description)},m(n,f){_(n,r,f),_(n,o,f),_(n,t,f),_(n,i,f),_(n,c,f)},p:Pe,d(n){n&&(m(r),m(o),m(t),m(i),m(c))}}}function Kt(u){let r,o,t;return{c(){r=I("meta"),o=$(),t=I("meta"),this.h()},l(i){r=j(i,"META",{property:!0,content:!0}),o=p(i),t=j(i,"META",{name:!0,content:!0}),this.h()},h(){var i,c;v(r,"property","og:image"),v(r,"content",ct((i=b.og)==null?void 0:i.image)),v(t,"name","twitter:image"),v(t,"content",ct((c=b.og)==null?void 0:c.image))},m(i,c){_(i,r,c),_(i,o,c),_(i,t,c)},p:Pe,d(i){i&&(m(r),m(o),m(t))}}}function ft(u){let r,o;return r=new je({props:{queryID:"filters",queryResult:u[0]}}),{c(){q(r.$$.fragment)},l(t){h(r.$$.fragment,t)},m(t,i){k(r,t,i),o=!0},p(t,i){const c={};i[0]&1&&(c.queryResult=t[0]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){y(r.$$.fragment,t),o=!1},d(t){g(r,t)}}}function dt(u){let r,o;return r=new je({props:{queryID:"countries",queryResult:u[1]}}),{c(){q(r.$$.fragment)},l(t){h(r.$$.fragment,t)},m(t,i){k(r,t,i),o=!0},p(t,i){const c={};i[0]&2&&(c.queryResult=t[1]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){y(r.$$.fragment,t),o=!1},d(t){g(r,t)}}}function Yt(u){let r,o;return r=new kt({props:{value:"%",valueLabel:"All Countries"}}),{c(){q(r.$$.fragment)},l(t){h(r.$$.fragment,t)},m(t,i){k(r,t,i),o=!0},p:Pe,i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){y(r.$$.fragment,t),o=!1},d(t){g(r,t)}}}function yt(u){let r,o;return r=new je({props:{queryID:"years",queryResult:u[2]}}),{c(){q(r.$$.fragment)},l(t){h(r.$$.fragment,t)},m(t,i){k(r,t,i),o=!0},p(t,i){const c={};i[0]&4&&(c.queryResult=t[2]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){y(r.$$.fragment,t),o=!1},d(t){g(r,t)}}}function Xt(u){let r,o;return r=new kt({props:{value:"%",valueLabel:"All Years"}}),{c(){q(r.$$.fragment)},l(t){h(r.$$.fragment,t)},m(t,i){k(r,t,i),o=!0},p:Pe,i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){y(r.$$.fragment,t),o=!1},d(t){g(r,t)}}}function pt(u){let r,o;return r=new je({props:{queryID:"kpis",queryResult:u[3]}}),{c(){q(r.$$.fragment)},l(t){h(r.$$.fragment,t)},m(t,i){k(r,t,i),o=!0},p(t,i){const c={};i[0]&8&&(c.queryResult=t[3]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){y(r.$$.fragment,t),o=!1},d(t){g(r,t)}}}function xt(u){let r,o,t,i,c,n,f,U,s,H,T,D,E,F;return r=new Ve({props:{data:u[3],value:"revenue",fmt:"usd0",title:"Total Revenue"}}),t=new Ve({props:{data:u[3],value:"orders",fmt:"num0",title:"Orders"}}),c=new Ve({props:{data:u[3],value:"aov",fmt:"usd2",title:"AOV"}}),f=new Ve({props:{data:u[3],value:"units",fmt:"num0",title:"Units Sold"}}),s=new Ve({props:{data:u[3],value:"unique_customers",fmt:"num0",title:"Unique Customers"}}),T=new Ve({props:{data:u[3],value:"items_per_order",fmt:"num2",title:"Avg Items / Order"}}),E=new Ve({props:{data:u[3],value:"revenue_per_customer",fmt:"usd2",title:"Revenue / Customer"}}),{c(){q(r.$$.fragment),o=$(),q(t.$$.fragment),i=$(),q(c.$$.fragment),n=$(),q(f.$$.fragment),U=$(),q(s.$$.fragment),H=$(),q(T.$$.fragment),D=$(),q(E.$$.fragment)},l(l){h(r.$$.fragment,l),o=p(l),h(t.$$.fragment,l),i=p(l),h(c.$$.fragment,l),n=p(l),h(f.$$.fragment,l),U=p(l),h(s.$$.fragment,l),H=p(l),h(T.$$.fragment,l),D=p(l),h(E.$$.fragment,l)},m(l,w){k(r,l,w),_(l,o,w),k(t,l,w),_(l,i,w),k(c,l,w),_(l,n,w),k(f,l,w),_(l,U,w),k(s,l,w),_(l,H,w),k(T,l,w),_(l,D,w),k(E,l,w),F=!0},p(l,w){const z={};w[0]&8&&(z.data=l[3]),r.$set(z);const J={};w[0]&8&&(J.data=l[3]),t.$set(J);const B={};w[0]&8&&(B.data=l[3]),c.$set(B);const re={};w[0]&8&&(re.data=l[3]),f.$set(re);const K={};w[0]&8&&(K.data=l[3]),s.$set(K);const Re={};w[0]&8&&(Re.data=l[3]),T.$set(Re);const $e={};w[0]&8&&($e.data=l[3]),E.$set($e)},i(l){F||(d(r.$$.fragment,l),d(t.$$.fragment,l),d(c.$$.fragment,l),d(f.$$.fragment,l),d(s.$$.fragment,l),d(T.$$.fragment,l),d(E.$$.fragment,l),F=!0)},o(l){y(r.$$.fragment,l),y(t.$$.fragment,l),y(c.$$.fragment,l),y(f.$$.fragment,l),y(s.$$.fragment,l),y(T.$$.fragment,l),y(E.$$.fragment,l),F=!1},d(l){l&&(m(o),m(i),m(n),m(U),m(H),m(D)),g(r,l),g(t,l),g(c,l),g(f,l),g(s,l),g(T,l),g(E,l)}}}function $t(u){let r,o;return r=new je({props:{queryID:"monthly",queryResult:u[4]}}),{c(){q(r.$$.fragment)},l(t){h(r.$$.fragment,t)},m(t,i){k(r,t,i),o=!0},p(t,i){const c={};i[0]&16&&(c.queryResult=t[4]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){y(r.$$.fragment,t),o=!1},d(t){g(r,t)}}}function zt(u){let r,o,t,i,c,n,f,U;return r=new Xe({props:{data:u[4],title:"Revenue",x:"month",y:"revenue"}}),t=new Xe({props:{data:u[4],title:"Orders",x:"month",y:"orders"}}),c=new Xe({props:{data:u[4],title:"AOV",x:"month",y:"aov"}}),f=new Xe({props:{data:u[4],title:"Unique Customers",x:"month",y:"unique_customers"}}),{c(){q(r.$$.fragment),o=$(),q(t.$$.fragment),i=$(),q(c.$$.fragment),n=$(),q(f.$$.fragment)},l(s){h(r.$$.fragment,s),o=p(s),h(t.$$.fragment,s),i=p(s),h(c.$$.fragment,s),n=p(s),h(f.$$.fragment,s)},m(s,H){k(r,s,H),_(s,o,H),k(t,s,H),_(s,i,H),k(c,s,H),_(s,n,H),k(f,s,H),U=!0},p(s,H){const T={};H[0]&16&&(T.data=s[4]),r.$set(T);const D={};H[0]&16&&(D.data=s[4]),t.$set(D);const E={};H[0]&16&&(E.data=s[4]),c.$set(E);const F={};H[0]&16&&(F.data=s[4]),f.$set(F)},i(s){U||(d(r.$$.fragment,s),d(t.$$.fragment,s),d(c.$$.fragment,s),d(f.$$.fragment,s),U=!0)},o(s){y(r.$$.fragment,s),y(t.$$.fragment,s),y(c.$$.fragment,s),y(f.$$.fragment,s),U=!1},d(s){s&&(m(o),m(i),m(n)),g(r,s),g(t,s),g(c,s),g(f,s)}}}function vt(u){let r,o;return r=new je({props:{queryID:"revenue_by_country",queryResult:u[5]}}),{c(){q(r.$$.fragment)},l(t){h(r.$$.fragment,t)},m(t,i){k(r,t,i),o=!0},p(t,i){const c={};i[0]&32&&(c.queryResult=t[5]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){y(r.$$.fragment,t),o=!1},d(t){g(r,t)}}}function wt(u){let r,o;return r=new je({props:{queryID:"top_customers",queryResult:u[6]}}),{c(){q(r.$$.fragment)},l(t){h(r.$$.fragment,t)},m(t,i){k(r,t,i),o=!0},p(t,i){const c={};i[0]&64&&(c.queryResult=t[6]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){y(r.$$.fragment,t),o=!1},d(t){g(r,t)}}}function bt(u){let r,o;return r=new je({props:{queryID:"new_vs_returning",queryResult:u[7]}}),{c(){q(r.$$.fragment)},l(t){h(r.$$.fragment,t)},m(t,i){k(r,t,i),o=!0},p(t,i){const c={};i[0]&128&&(c.queryResult=t[7]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){y(r.$$.fragment,t),o=!1},d(t){g(r,t)}}}function gt(u){let r,o;return r=new je({props:{queryID:"top_products",queryResult:u[8]}}),{c(){q(r.$$.fragment)},l(t){h(r.$$.fragment,t)},m(t,i){k(r,t,i),o=!0},p(t,i){const c={};i[0]&256&&(c.queryResult=t[8]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){y(r.$$.fragment,t),o=!1},d(t){g(r,t)}}}function Jt(u){let r,o,t,i,c,n,f='This dashboard is powered by your dbt <strong class="markdown">gold</strong> models in Postgres:',U,s,H='<li class="markdown"><code class="markdown">ecomm.fct_order</code></li> <li class="markdown"><code class="markdown">ecomm.dim_customer</code></li>',T,D,E,F,l,w,z,J,B,re,K,Re='<a href="#executive-summary">Executive Summary</a>',$e,Z,Y,ve,Ue,Ie,oe,we='<a href="#trends-monthly">Trends (Monthly)</a>',ie,ce,me,Ce,Te,le,V,Me='<a href="#geography">Geography</a>',Se,be,_e,fe,ne,ge,ae,Be='<a href="#customers">Customers</a>',Le,ee,X,ke,he,de,Ne,se,ye,W,Ke='<a href="#products-using-product_id">Products (using product_id)</a>',Ae,qe,x,pe,te,Oe,ue=typeof b<"u"&&b.title&&b.hide_title!==!0&&Pt();function Ye(e,a){return typeof b<"u"&&b.title?Gt:Qt}let Qe=Ye()(u),Ee=typeof b=="object"&&Vt(),C=u[0]&&ft(u),M=u[1]&&dt(u);F=new lt({props:{data:u[1],name:"country",value:"country",$$slots:{default:[Yt]},$$scope:{ctx:u}}});let S=u[2]&&yt(u);z=new lt({props:{data:u[2],name:"year",value:"year",$$slots:{default:[Xt]},$$scope:{ctx:u}}});let L=u[3]&&pt(u);Y=new _t({props:{cols:"3",$$slots:{default:[xt]},$$scope:{ctx:u}}});let N=u[4]&&$t(u);me=new _t({props:{cols:"2",$$slots:{default:[zt]},$$scope:{ctx:u}}});let A=u[5]&&vt(u);_e=new Ze({props:{data:u[5],title:"Revenue by Country",x:"country",y:"revenue"}});let O=u[6]&&wt(u);X=new it({props:{data:u[6],rows:"25"}});let P=u[7]&&bt(u);de=new Ze({props:{data:u[7],title:"New vs Returning (Revenue)",x:"month",y:"revenue",series:"customer_type"}});let Q=u[8]&&gt(u);return x=new Ze({props:{data:u[8],title:"Top Products by Revenue",x:"product_id",y:"revenue"}}),te=new it({props:{data:u[8],rows:"25"}}),{c(){ue&&ue.c(),r=$(),Qe.c(),o=I("meta"),t=I("meta"),Ee&&Ee.c(),i=ze(),c=$(),n=I("p"),n.innerHTML=f,U=$(),s=I("ul"),s.innerHTML=H,T=$(),C&&C.c(),D=$(),M&&M.c(),E=$(),q(F.$$.fragment),l=$(),S&&S.c(),w=$(),q(z.$$.fragment),J=$(),B=I("hr"),re=$(),K=I("h2"),K.innerHTML=Re,$e=$(),L&&L.c(),Z=$(),q(Y.$$.fragment),ve=$(),Ue=I("hr"),Ie=$(),oe=I("h2"),oe.innerHTML=we,ie=$(),N&&N.c(),ce=$(),q(me.$$.fragment),Ce=$(),Te=I("hr"),le=$(),V=I("h2"),V.innerHTML=Me,Se=$(),A&&A.c(),be=$(),q(_e.$$.fragment),fe=$(),ne=I("hr"),ge=$(),ae=I("h2"),ae.innerHTML=Be,Le=$(),O&&O.c(),ee=$(),q(X.$$.fragment),ke=$(),P&&P.c(),he=$(),q(de.$$.fragment),Ne=$(),se=I("hr"),ye=$(),W=I("h2"),W.innerHTML=Ke,Ae=$(),Q&&Q.c(),qe=$(),q(x.$$.fragment),pe=$(),q(te.$$.fragment),this.h()},l(e){ue&&ue.l(e),r=p(e);const a=qt("svelte-2igo1p",document.head);Qe.l(a),o=j(a,"META",{name:!0,content:!0}),t=j(a,"META",{name:!0,content:!0}),Ee&&Ee.l(a),i=ze(),a.forEach(m),c=p(e),n=j(e,"P",{class:!0,"data-svelte-h":!0}),Ge(n)!=="svelte-1n56fcd"&&(n.innerHTML=f),U=p(e),s=j(e,"UL",{class:!0,"data-svelte-h":!0}),Ge(s)!=="svelte-1k3k0n1"&&(s.innerHTML=H),T=p(e),C&&C.l(e),D=p(e),M&&M.l(e),E=p(e),h(F.$$.fragment,e),l=p(e),S&&S.l(e),w=p(e),h(z.$$.fragment,e),J=p(e),B=j(e,"HR",{class:!0}),re=p(e),K=j(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ge(K)!=="svelte-1aty7f8"&&(K.innerHTML=Re),$e=p(e),L&&L.l(e),Z=p(e),h(Y.$$.fragment,e),ve=p(e),Ue=j(e,"HR",{class:!0}),Ie=p(e),oe=j(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ge(oe)!=="svelte-cqae6c"&&(oe.innerHTML=we),ie=p(e),N&&N.l(e),ce=p(e),h(me.$$.fragment,e),Ce=p(e),Te=j(e,"HR",{class:!0}),le=p(e),V=j(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ge(V)!=="svelte-11bcr16"&&(V.innerHTML=Me),Se=p(e),A&&A.l(e),be=p(e),h(_e.$$.fragment,e),fe=p(e),ne=j(e,"HR",{class:!0}),ge=p(e),ae=j(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ge(ae)!=="svelte-or7ff"&&(ae.innerHTML=Be),Le=p(e),O&&O.l(e),ee=p(e),h(X.$$.fragment,e),ke=p(e),P&&P.l(e),he=p(e),h(de.$$.fragment,e),Ne=p(e),se=j(e,"HR",{class:!0}),ye=p(e),W=j(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ge(W)!=="svelte-1ygonxy"&&(W.innerHTML=Ke),Ae=p(e),Q&&Q.l(e),qe=p(e),h(x.$$.fragment,e),pe=p(e),h(te.$$.fragment,e),this.h()},h(){v(o,"name","twitter:card"),v(o,"content","summary_large_image"),v(t,"name","twitter:site"),v(t,"content","@evidence_dev"),v(n,"class","markdown"),v(s,"class","markdown"),v(B,"class","markdown"),v(K,"class","markdown"),v(K,"id","executive-summary"),v(Ue,"class","markdown"),v(oe,"class","markdown"),v(oe,"id","trends-monthly"),v(Te,"class","markdown"),v(V,"class","markdown"),v(V,"id","geography"),v(ne,"class","markdown"),v(ae,"class","markdown"),v(ae,"id","customers"),v(se,"class","markdown"),v(W,"class","markdown"),v(W,"id","products-using-product_id")},m(e,a){ue&&ue.m(e,a),_(e,r,a),Qe.m(document.head,null),xe(document.head,o),xe(document.head,t),Ee&&Ee.m(document.head,null),xe(document.head,i),_(e,c,a),_(e,n,a),_(e,U,a),_(e,s,a),_(e,T,a),C&&C.m(e,a),_(e,D,a),M&&M.m(e,a),_(e,E,a),k(F,e,a),_(e,l,a),S&&S.m(e,a),_(e,w,a),k(z,e,a),_(e,J,a),_(e,B,a),_(e,re,a),_(e,K,a),_(e,$e,a),L&&L.m(e,a),_(e,Z,a),k(Y,e,a),_(e,ve,a),_(e,Ue,a),_(e,Ie,a),_(e,oe,a),_(e,ie,a),N&&N.m(e,a),_(e,ce,a),k(me,e,a),_(e,Ce,a),_(e,Te,a),_(e,le,a),_(e,V,a),_(e,Se,a),A&&A.m(e,a),_(e,be,a),k(_e,e,a),_(e,fe,a),_(e,ne,a),_(e,ge,a),_(e,ae,a),_(e,Le,a),O&&O.m(e,a),_(e,ee,a),k(X,e,a),_(e,ke,a),P&&P.m(e,a),_(e,he,a),k(de,e,a),_(e,Ne,a),_(e,se,a),_(e,ye,a),_(e,W,a),_(e,Ae,a),Q&&Q.m(e,a),_(e,qe,a),k(x,e,a),_(e,pe,a),k(te,e,a),Oe=!0},p(e,a){typeof b<"u"&&b.title&&b.hide_title!==!0&&ue.p(e,a),Qe.p(e,a),typeof b=="object"&&Ee.p(e,a),e[0]?C?(C.p(e,a),a[0]&1&&d(C,1)):(C=ft(e),C.c(),d(C,1),C.m(D.parentNode,D)):C&&(De(),y(C,1,1,()=>{C=null}),He()),e[1]?M?(M.p(e,a),a[0]&2&&d(M,1)):(M=dt(e),M.c(),d(M,1),M.m(E.parentNode,E)):M&&(De(),y(M,1,1,()=>{M=null}),He());const Je={};a[0]&2&&(Je.data=e[1]),a[2]&16&&(Je.$$scope={dirty:a,ctx:e}),F.$set(Je),e[2]?S?(S.p(e,a),a[0]&4&&d(S,1)):(S=yt(e),S.c(),d(S,1),S.m(w.parentNode,w)):S&&(De(),y(S,1,1,()=>{S=null}),He());const We={};a[0]&4&&(We.data=e[2]),a[2]&16&&(We.$$scope={dirty:a,ctx:e}),z.$set(We),e[3]?L?(L.p(e,a),a[0]&8&&d(L,1)):(L=pt(e),L.c(),d(L,1),L.m(Z.parentNode,Z)):L&&(De(),y(L,1,1,()=>{L=null}),He());const et={};a[0]&8|a[2]&16&&(et.$$scope={dirty:a,ctx:e}),Y.$set(et),e[4]?N?(N.p(e,a),a[0]&16&&d(N,1)):(N=$t(e),N.c(),d(N,1),N.m(ce.parentNode,ce)):N&&(De(),y(N,1,1,()=>{N=null}),He());const tt={};a[0]&16|a[2]&16&&(tt.$$scope={dirty:a,ctx:e}),me.$set(tt),e[5]?A?(A.p(e,a),a[0]&32&&d(A,1)):(A=vt(e),A.c(),d(A,1),A.m(be.parentNode,be)):A&&(De(),y(A,1,1,()=>{A=null}),He());const rt={};a[0]&32&&(rt.data=e[5]),_e.$set(rt),e[6]?O?(O.p(e,a),a[0]&64&&d(O,1)):(O=wt(e),O.c(),d(O,1),O.m(ee.parentNode,ee)):O&&(De(),y(O,1,1,()=>{O=null}),He());const ot={};a[0]&64&&(ot.data=e[6]),X.$set(ot),e[7]?P?(P.p(e,a),a[0]&128&&d(P,1)):(P=bt(e),P.c(),d(P,1),P.m(he.parentNode,he)):P&&(De(),y(P,1,1,()=>{P=null}),He());const nt={};a[0]&128&&(nt.data=e[7]),de.$set(nt),e[8]?Q?(Q.p(e,a),a[0]&256&&d(Q,1)):(Q=gt(e),Q.c(),d(Q,1),Q.m(qe.parentNode,qe)):Q&&(De(),y(Q,1,1,()=>{Q=null}),He());const at={};a[0]&256&&(at.data=e[8]),x.$set(at);const st={};a[0]&256&&(st.data=e[8]),te.$set(st)},i(e){Oe||(d(C),d(M),d(F.$$.fragment,e),d(S),d(z.$$.fragment,e),d(L),d(Y.$$.fragment,e),d(N),d(me.$$.fragment,e),d(A),d(_e.$$.fragment,e),d(O),d(X.$$.fragment,e),d(P),d(de.$$.fragment,e),d(Q),d(x.$$.fragment,e),d(te.$$.fragment,e),Oe=!0)},o(e){y(C),y(M),y(F.$$.fragment,e),y(S),y(z.$$.fragment,e),y(L),y(Y.$$.fragment,e),y(N),y(me.$$.fragment,e),y(A),y(_e.$$.fragment,e),y(O),y(X.$$.fragment,e),y(P),y(de.$$.fragment,e),y(Q),y(x.$$.fragment,e),y(te.$$.fragment,e),Oe=!1},d(e){e&&(m(r),m(c),m(n),m(U),m(s),m(T),m(D),m(E),m(l),m(w),m(J),m(B),m(re),m(K),m($e),m(Z),m(ve),m(Ue),m(Ie),m(oe),m(ie),m(ce),m(Ce),m(Te),m(le),m(V),m(Se),m(be),m(fe),m(ne),m(ge),m(ae),m(Le),m(ee),m(ke),m(he),m(Ne),m(se),m(ye),m(W),m(Ae),m(qe),m(pe)),ue&&ue.d(e),Qe.d(e),m(o),m(t),Ee&&Ee.d(e),m(i),C&&C.d(e),M&&M.d(e),g(F,e),S&&S.d(e),g(z,e),L&&L.d(e),g(Y,e),N&&N.d(e),g(me,e),A&&A.d(e),g(_e,e),O&&O.d(e),g(X,e),P&&P.d(e),g(de,e),Q&&Q.d(e),g(x,e),g(te,e)}}}const b={title:"Ecommerce KPI Dashboard (Monthly)"};function Wt(u,r,o){let t,i;ut(u,Ot,R=>o(48,t=R)),ut(u,mt,R=>o(53,i=R));let{data:c}=r,{data:n={},customFormattingSettings:f,__db:U,inputs:s}=c;Rt(mt,i="6666cd76f96956469e7be39d750cc7d9",i);let H=Ct(Nt(s));Ut(H.subscribe(R=>o(11,s=R))),Tt(Lt,{getCustomFormats:()=>f.customFormats||[]});const T=(R,Qe)=>At(U.query,R,{query_name:Qe});Mt(T),t.params,Et(()=>!0);let D={initialData:void 0,initialError:void 0},E=G`select
  min(date_trunc('month', order_date)::date) as min_month,
  max(date_trunc('month', order_date)::date) as max_month
from ecomm.fct_order`,F=`select
  min(date_trunc('month', order_date)::date) as min_month,
  max(date_trunc('month', order_date)::date) as max_month
from ecomm.fct_order`;n.filters_data&&(n.filters_data instanceof Error?D.initialError=n.filters_data:D.initialData=n.filters_data,n.filters_columns&&(D.knownColumns=n.filters_columns));let l,w=!1;const z=Fe.createReactive({callback:R=>{o(0,l=R)},execFn:T},{id:"filters",...D});z(F,{noResolve:E,...D}),globalThis[Symbol.for("filters")]={get value(){return l}};let J={initialData:void 0,initialError:void 0},B=G`select distinct
  coalesce(country,'Unknown') as country
from ecomm.dim_customer
order by 1`,re=`select distinct
  coalesce(country,'Unknown') as country
from ecomm.dim_customer
order by 1`;n.countries_data&&(n.countries_data instanceof Error?J.initialError=n.countries_data:J.initialData=n.countries_data,n.countries_columns&&(J.knownColumns=n.countries_columns));let K,Re=!1;const $e=Fe.createReactive({callback:R=>{o(1,K=R)},execFn:T},{id:"countries",...J});$e(re,{noResolve:B,...J}),globalThis[Symbol.for("countries")]={get value(){return K}};let Z={initialData:void 0,initialError:void 0},Y=G`select distinct
  date_part('year', order_date)::int as year
from ecomm.fct_order
order by 1`,ve=`select distinct
  date_part('year', order_date)::int as year
from ecomm.fct_order
order by 1`;n.years_data&&(n.years_data instanceof Error?Z.initialError=n.years_data:Z.initialData=n.years_data,n.years_columns&&(Z.knownColumns=n.years_columns));let Ue,Ie=!1;const oe=Fe.createReactive({callback:R=>{o(2,Ue=R)},execFn:T},{id:"years",...Z});oe(ve,{noResolve:Y,...Z}),globalThis[Symbol.for("years")]={get value(){return Ue}};let we={initialData:void 0,initialError:void 0},ie=G`with base as (
  select
    o.transaction_id,
    o.customer_id,
    o.order_date,
    o.quantity,
    o.total_amount,
    c.country
  from ecomm.fct_order o
  left join ecomm.dim_customer c
    on o.customer_id = c.customer_id
  where coalesce(c.country,'Unknown') like '${s.country.value}'
    and date_part('year', o.order_date) :: text like '${s.year.value}'
)
select
  sum(total_amount) as revenue,
  count(*) as orders,
  sum(quantity) as units,
  count(distinct customer_id) as unique_customers,
  (sum(total_amount) / nullif(count(*),0)) as aov,
  (sum(quantity)::numeric / nullif(count(*),0)) as items_per_order,
  (sum(total_amount) / nullif(count(distinct customer_id),0)) as revenue_per_customer
from base`,ce=`with base as (
  select
    o.transaction_id,
    o.customer_id,
    o.order_date,
    o.quantity,
    o.total_amount,
    c.country
  from ecomm.fct_order o
  left join ecomm.dim_customer c
    on o.customer_id = c.customer_id
  where coalesce(c.country,'Unknown') like '${s.country.value}'
    and date_part('year', o.order_date) :: text like '${s.year.value}'
)
select
  sum(total_amount) as revenue,
  count(*) as orders,
  sum(quantity) as units,
  count(distinct customer_id) as unique_customers,
  (sum(total_amount) / nullif(count(*),0)) as aov,
  (sum(quantity)::numeric / nullif(count(*),0)) as items_per_order,
  (sum(total_amount) / nullif(count(distinct customer_id),0)) as revenue_per_customer
from base`;n.kpis_data&&(n.kpis_data instanceof Error?we.initialError=n.kpis_data:we.initialData=n.kpis_data,n.kpis_columns&&(we.knownColumns=n.kpis_columns));let me,Ce=!1;const Te=Fe.createReactive({callback:R=>{o(3,me=R)},execFn:T},{id:"kpis",...we});Te(ce,{noResolve:ie,...we}),globalThis[Symbol.for("kpis")]={get value(){return me}};let le={initialData:void 0,initialError:void 0},V=G`with base as (
  select
    date_trunc('month', o.order_date)::date as month,
    o.customer_id,
    o.quantity,
    o.total_amount,
    coalesce(c.country,'Unknown') as country
  from ecomm.fct_order o
  left join ecomm.dim_customer c
    on o.customer_id = c.customer_id
  where coalesce(c.country,'Unknown') like '${s.country.value}'
    and date_part('year', o.order_date) :: text like '${s.year.value}'
)
select
  month,
  sum(total_amount) as revenue,
  count(*) as orders,
  (sum(total_amount) / nullif(count(*),0)) as aov,
  sum(quantity) as units,
  count(distinct customer_id) as unique_customers
from base
group by 1
order by 1`,Me=`with base as (
  select
    date_trunc('month', o.order_date)::date as month,
    o.customer_id,
    o.quantity,
    o.total_amount,
    coalesce(c.country,'Unknown') as country
  from ecomm.fct_order o
  left join ecomm.dim_customer c
    on o.customer_id = c.customer_id
  where coalesce(c.country,'Unknown') like '${s.country.value}'
    and date_part('year', o.order_date) :: text like '${s.year.value}'
)
select
  month,
  sum(total_amount) as revenue,
  count(*) as orders,
  (sum(total_amount) / nullif(count(*),0)) as aov,
  sum(quantity) as units,
  count(distinct customer_id) as unique_customers
from base
group by 1
order by 1`;n.monthly_data&&(n.monthly_data instanceof Error?le.initialError=n.monthly_data:le.initialData=n.monthly_data,n.monthly_columns&&(le.knownColumns=n.monthly_columns));let Se,be=!1;const _e=Fe.createReactive({callback:R=>{o(4,Se=R)},execFn:T},{id:"monthly",...le});_e(Me,{noResolve:V,...le}),globalThis[Symbol.for("monthly")]={get value(){return Se}};let fe={initialData:void 0,initialError:void 0},ne=G`select
  coalesce(c.country,'Unknown') as country,
  sum(o.total_amount) as revenue,
  count(*) as orders,
  (sum(o.total_amount) / nullif(count(*),0)) as aov
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where date_part('year', o.order_date) :: text like '${s.year.value}'
group by 1
order by revenue desc`,ge=`select
  coalesce(c.country,'Unknown') as country,
  sum(o.total_amount) as revenue,
  count(*) as orders,
  (sum(o.total_amount) / nullif(count(*),0)) as aov
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where date_part('year', o.order_date) :: text like '${s.year.value}'
group by 1
order by revenue desc`;n.revenue_by_country_data&&(n.revenue_by_country_data instanceof Error?fe.initialError=n.revenue_by_country_data:fe.initialData=n.revenue_by_country_data,n.revenue_by_country_columns&&(fe.knownColumns=n.revenue_by_country_columns));let ae,Be=!1;const Le=Fe.createReactive({callback:R=>{o(5,ae=R)},execFn:T},{id:"revenue_by_country",...fe});Le(ge,{noResolve:ne,...fe}),globalThis[Symbol.for("revenue_by_country")]={get value(){return ae}};let ee={initialData:void 0,initialError:void 0},X=G`select
  c.customer_name,
  coalesce(c.country,'Unknown') as country,
  sum(o.total_amount) as revenue,
  count(*) as orders,
  (sum(o.total_amount) / nullif(count(*),0)) as aov
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where coalesce(c.country,'Unknown') like '${s.country.value}'
  and date_part('year', o.order_date) :: text like '${s.year.value}'
group by 1,2
order by revenue desc
limit 25`,ke=`select
  c.customer_name,
  coalesce(c.country,'Unknown') as country,
  sum(o.total_amount) as revenue,
  count(*) as orders,
  (sum(o.total_amount) / nullif(count(*),0)) as aov
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where coalesce(c.country,'Unknown') like '${s.country.value}'
  and date_part('year', o.order_date) :: text like '${s.year.value}'
group by 1,2
order by revenue desc
limit 25`;n.top_customers_data&&(n.top_customers_data instanceof Error?ee.initialError=n.top_customers_data:ee.initialData=n.top_customers_data,n.top_customers_columns&&(ee.knownColumns=n.top_customers_columns));let he,de=!1;const Ne=Fe.createReactive({callback:R=>{o(6,he=R)},execFn:T},{id:"top_customers",...ee});Ne(ke,{noResolve:X,...ee}),globalThis[Symbol.for("top_customers")]={get value(){return he}};let se={initialData:void 0,initialError:void 0},ye=G`with first_order as (
  select
    customer_id,
    min(date_trunc('month', order_date)::date) as first_month
  from ecomm.fct_order
  group by 1
), tagged as (
  select
    date_trunc('month', o.order_date)::date as month,
    case when date_trunc('month', o.order_date)::date = f.first_month then 'New' else 'Returning' end as customer_type,
    o.total_amount,
    o.customer_id,
    coalesce(c.country,'Unknown') as country
  from ecomm.fct_order o
  join first_order f using (customer_id)
  left join ecomm.dim_customer c using (customer_id)
  where coalesce(c.country,'Unknown') like '${s.country.value}'
    and date_part('year', o.order_date) :: text like '${s.year.value}'
)
select
  month,
  customer_type,
  sum(total_amount) as revenue,
  count(*) as orders,
  count(distinct customer_id) as customers
from tagged
group by 1,2
order by 1,2`,W=`with first_order as (
  select
    customer_id,
    min(date_trunc('month', order_date)::date) as first_month
  from ecomm.fct_order
  group by 1
), tagged as (
  select
    date_trunc('month', o.order_date)::date as month,
    case when date_trunc('month', o.order_date)::date = f.first_month then 'New' else 'Returning' end as customer_type,
    o.total_amount,
    o.customer_id,
    coalesce(c.country,'Unknown') as country
  from ecomm.fct_order o
  join first_order f using (customer_id)
  left join ecomm.dim_customer c using (customer_id)
  where coalesce(c.country,'Unknown') like '${s.country.value}'
    and date_part('year', o.order_date) :: text like '${s.year.value}'
)
select
  month,
  customer_type,
  sum(total_amount) as revenue,
  count(*) as orders,
  count(distinct customer_id) as customers
from tagged
group by 1,2
order by 1,2`;n.new_vs_returning_data&&(n.new_vs_returning_data instanceof Error?se.initialError=n.new_vs_returning_data:se.initialData=n.new_vs_returning_data,n.new_vs_returning_columns&&(se.knownColumns=n.new_vs_returning_columns));let Ke,Ae=!1;const qe=Fe.createReactive({callback:R=>{o(7,Ke=R)},execFn:T},{id:"new_vs_returning",...se});qe(W,{noResolve:ye,...se}),globalThis[Symbol.for("new_vs_returning")]={get value(){return Ke}};let x={initialData:void 0,initialError:void 0},pe=G`select
  o.product_id,
  sum(o.total_amount) as revenue,
  sum(o.quantity) as units,
  (sum(o.total_amount) / nullif(sum(o.quantity),0)) as avg_selling_price
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where coalesce(c.country,'Unknown') like '${s.country.value}'
  and date_part('year', o.order_date) :: text like '${s.year.value}'
group by 1
order by revenue desc
limit 25`,te=`select
  o.product_id,
  sum(o.total_amount) as revenue,
  sum(o.quantity) as units,
  (sum(o.total_amount) / nullif(sum(o.quantity),0)) as avg_selling_price
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where coalesce(c.country,'Unknown') like '${s.country.value}'
  and date_part('year', o.order_date) :: text like '${s.year.value}'
group by 1
order by revenue desc
limit 25`;n.top_products_data&&(n.top_products_data instanceof Error?x.initialError=n.top_products_data:x.initialData=n.top_products_data,n.top_products_columns&&(x.knownColumns=n.top_products_columns));let Oe,ue=!1;const Ye=Fe.createReactive({callback:R=>{o(8,Oe=R)},execFn:T},{id:"top_products",...x});return Ye(te,{noResolve:pe,...x}),globalThis[Symbol.for("top_products")]={get value(){return Oe}},u.$$set=R=>{"data"in R&&o(9,c=R.data)},u.$$.update=()=>{u.$$.dirty[0]&512&&o(10,{data:n={},customFormattingSettings:f,__db:U}=c,n),u.$$.dirty[0]&1024&&St.set(Object.keys(n).length>0),u.$$.dirty[1]&131072&&t.params,u.$$.dirty[0]&61440&&(E||!w?E||(z(F,{noResolve:E,...D}),o(15,w=!0)):z(F,{noResolve:E})),u.$$.dirty[0]&983040&&(B||!Re?B||($e(re,{noResolve:B,...J}),o(19,Re=!0)):$e(re,{noResolve:B})),u.$$.dirty[0]&15728640&&(Y||!Ie?Y||(oe(ve,{noResolve:Y,...Z}),o(23,Ie=!0)):oe(ve,{noResolve:Y})),u.$$.dirty[0]&2048&&o(25,ie=G`with base as (
  select
    o.transaction_id,
    o.customer_id,
    o.order_date,
    o.quantity,
    o.total_amount,
    c.country
  from ecomm.fct_order o
  left join ecomm.dim_customer c
    on o.customer_id = c.customer_id
  where coalesce(c.country,'Unknown') like '${s.country.value}'
    and date_part('year', o.order_date) :: text like '${s.year.value}'
)
select
  sum(total_amount) as revenue,
  count(*) as orders,
  sum(quantity) as units,
  count(distinct customer_id) as unique_customers,
  (sum(total_amount) / nullif(count(*),0)) as aov,
  (sum(quantity)::numeric / nullif(count(*),0)) as items_per_order,
  (sum(total_amount) / nullif(count(distinct customer_id),0)) as revenue_per_customer
from base`),u.$$.dirty[0]&2048&&o(26,ce=`with base as (
  select
    o.transaction_id,
    o.customer_id,
    o.order_date,
    o.quantity,
    o.total_amount,
    c.country
  from ecomm.fct_order o
  left join ecomm.dim_customer c
    on o.customer_id = c.customer_id
  where coalesce(c.country,'Unknown') like '${s.country.value}'
    and date_part('year', o.order_date) :: text like '${s.year.value}'
)
select
  sum(total_amount) as revenue,
  count(*) as orders,
  sum(quantity) as units,
  count(distinct customer_id) as unique_customers,
  (sum(total_amount) / nullif(count(*),0)) as aov,
  (sum(quantity)::numeric / nullif(count(*),0)) as items_per_order,
  (sum(total_amount) / nullif(count(distinct customer_id),0)) as revenue_per_customer
from base`),u.$$.dirty[0]&251658240&&(ie||!Ce?ie||(Te(ce,{noResolve:ie,...we}),o(27,Ce=!0)):Te(ce,{noResolve:ie})),u.$$.dirty[0]&2048&&o(29,V=G`with base as (
  select
    date_trunc('month', o.order_date)::date as month,
    o.customer_id,
    o.quantity,
    o.total_amount,
    coalesce(c.country,'Unknown') as country
  from ecomm.fct_order o
  left join ecomm.dim_customer c
    on o.customer_id = c.customer_id
  where coalesce(c.country,'Unknown') like '${s.country.value}'
    and date_part('year', o.order_date) :: text like '${s.year.value}'
)
select
  month,
  sum(total_amount) as revenue,
  count(*) as orders,
  (sum(total_amount) / nullif(count(*),0)) as aov,
  sum(quantity) as units,
  count(distinct customer_id) as unique_customers
from base
group by 1
order by 1`),u.$$.dirty[0]&2048&&o(30,Me=`with base as (
  select
    date_trunc('month', o.order_date)::date as month,
    o.customer_id,
    o.quantity,
    o.total_amount,
    coalesce(c.country,'Unknown') as country
  from ecomm.fct_order o
  left join ecomm.dim_customer c
    on o.customer_id = c.customer_id
  where coalesce(c.country,'Unknown') like '${s.country.value}'
    and date_part('year', o.order_date) :: text like '${s.year.value}'
)
select
  month,
  sum(total_amount) as revenue,
  count(*) as orders,
  (sum(total_amount) / nullif(count(*),0)) as aov,
  sum(quantity) as units,
  count(distinct customer_id) as unique_customers
from base
group by 1
order by 1`),u.$$.dirty[0]&1879048192|u.$$.dirty[1]&1&&(V||!be?V||(_e(Me,{noResolve:V,...le}),o(31,be=!0)):_e(Me,{noResolve:V})),u.$$.dirty[0]&2048&&o(33,ne=G`select
  coalesce(c.country,'Unknown') as country,
  sum(o.total_amount) as revenue,
  count(*) as orders,
  (sum(o.total_amount) / nullif(count(*),0)) as aov
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where date_part('year', o.order_date) :: text like '${s.year.value}'
group by 1
order by revenue desc`),u.$$.dirty[0]&2048&&o(34,ge=`select
  coalesce(c.country,'Unknown') as country,
  sum(o.total_amount) as revenue,
  count(*) as orders,
  (sum(o.total_amount) / nullif(count(*),0)) as aov
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where date_part('year', o.order_date) :: text like '${s.year.value}'
group by 1
order by revenue desc`),u.$$.dirty[1]&30&&(ne||!Be?ne||(Le(ge,{noResolve:ne,...fe}),o(35,Be=!0)):Le(ge,{noResolve:ne})),u.$$.dirty[0]&2048&&o(37,X=G`select
  c.customer_name,
  coalesce(c.country,'Unknown') as country,
  sum(o.total_amount) as revenue,
  count(*) as orders,
  (sum(o.total_amount) / nullif(count(*),0)) as aov
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where coalesce(c.country,'Unknown') like '${s.country.value}'
  and date_part('year', o.order_date) :: text like '${s.year.value}'
group by 1,2
order by revenue desc
limit 25`),u.$$.dirty[0]&2048&&o(38,ke=`select
  c.customer_name,
  coalesce(c.country,'Unknown') as country,
  sum(o.total_amount) as revenue,
  count(*) as orders,
  (sum(o.total_amount) / nullif(count(*),0)) as aov
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where coalesce(c.country,'Unknown') like '${s.country.value}'
  and date_part('year', o.order_date) :: text like '${s.year.value}'
group by 1,2
order by revenue desc
limit 25`),u.$$.dirty[1]&480&&(X||!de?X||(Ne(ke,{noResolve:X,...ee}),o(39,de=!0)):Ne(ke,{noResolve:X})),u.$$.dirty[0]&2048&&o(41,ye=G`with first_order as (
  select
    customer_id,
    min(date_trunc('month', order_date)::date) as first_month
  from ecomm.fct_order
  group by 1
), tagged as (
  select
    date_trunc('month', o.order_date)::date as month,
    case when date_trunc('month', o.order_date)::date = f.first_month then 'New' else 'Returning' end as customer_type,
    o.total_amount,
    o.customer_id,
    coalesce(c.country,'Unknown') as country
  from ecomm.fct_order o
  join first_order f using (customer_id)
  left join ecomm.dim_customer c using (customer_id)
  where coalesce(c.country,'Unknown') like '${s.country.value}'
    and date_part('year', o.order_date) :: text like '${s.year.value}'
)
select
  month,
  customer_type,
  sum(total_amount) as revenue,
  count(*) as orders,
  count(distinct customer_id) as customers
from tagged
group by 1,2
order by 1,2`),u.$$.dirty[0]&2048&&o(42,W=`with first_order as (
  select
    customer_id,
    min(date_trunc('month', order_date)::date) as first_month
  from ecomm.fct_order
  group by 1
), tagged as (
  select
    date_trunc('month', o.order_date)::date as month,
    case when date_trunc('month', o.order_date)::date = f.first_month then 'New' else 'Returning' end as customer_type,
    o.total_amount,
    o.customer_id,
    coalesce(c.country,'Unknown') as country
  from ecomm.fct_order o
  join first_order f using (customer_id)
  left join ecomm.dim_customer c using (customer_id)
  where coalesce(c.country,'Unknown') like '${s.country.value}'
    and date_part('year', o.order_date) :: text like '${s.year.value}'
)
select
  month,
  customer_type,
  sum(total_amount) as revenue,
  count(*) as orders,
  count(distinct customer_id) as customers
from tagged
group by 1,2
order by 1,2`),u.$$.dirty[1]&7680&&(ye||!Ae?ye||(qe(W,{noResolve:ye,...se}),o(43,Ae=!0)):qe(W,{noResolve:ye})),u.$$.dirty[0]&2048&&o(45,pe=G`select
  o.product_id,
  sum(o.total_amount) as revenue,
  sum(o.quantity) as units,
  (sum(o.total_amount) / nullif(sum(o.quantity),0)) as avg_selling_price
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where coalesce(c.country,'Unknown') like '${s.country.value}'
  and date_part('year', o.order_date) :: text like '${s.year.value}'
group by 1
order by revenue desc
limit 25`),u.$$.dirty[0]&2048&&o(46,te=`select
  o.product_id,
  sum(o.total_amount) as revenue,
  sum(o.quantity) as units,
  (sum(o.total_amount) / nullif(sum(o.quantity),0)) as avg_selling_price
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where coalesce(c.country,'Unknown') like '${s.country.value}'
  and date_part('year', o.order_date) :: text like '${s.year.value}'
group by 1
order by revenue desc
limit 25`),u.$$.dirty[1]&122880&&(pe||!ue?pe||(Ye(te,{noResolve:pe,...x}),o(47,ue=!0)):Ye(te,{noResolve:pe}))},o(13,E=G`select
  min(date_trunc('month', order_date)::date) as min_month,
  max(date_trunc('month', order_date)::date) as max_month
from ecomm.fct_order`),o(14,F=`select
  min(date_trunc('month', order_date)::date) as min_month,
  max(date_trunc('month', order_date)::date) as max_month
from ecomm.fct_order`),o(17,B=G`select distinct
  coalesce(country,'Unknown') as country
from ecomm.dim_customer
order by 1`),o(18,re=`select distinct
  coalesce(country,'Unknown') as country
from ecomm.dim_customer
order by 1`),o(21,Y=G`select distinct
  date_part('year', order_date)::int as year
from ecomm.fct_order
order by 1`),o(22,ve=`select distinct
  date_part('year', order_date)::int as year
from ecomm.fct_order
order by 1`),[l,K,Ue,me,Se,ae,he,Ke,Oe,c,n,s,D,E,F,w,J,B,re,Re,Z,Y,ve,Ie,we,ie,ce,Ce,le,V,Me,be,fe,ne,ge,Be,ee,X,ke,de,se,ye,W,Ae,x,pe,te,ue,t]}class sr extends jt{constructor(r){super(),It(this,r,Wt,Jt,ht,{data:9},null,[-1,-1,-1])}}export{sr as component};
