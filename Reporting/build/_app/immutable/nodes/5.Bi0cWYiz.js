import{s as qt,d as m,i as _,a as xe,b,c as p,h as Rt,e as D,f as ze,g as Ge,j as $,k as F,l as it,m as Ut,o as Tt,n as Et,p as Ht,q as Qe,r as Dt,t as Ft,u as jt}from"../chunks/scheduler.B518CZJ5.js";import{S as It,i as Ct,d as k,t as y,a as d,c as He,m as h,b as q,e as R,g as De}from"../chunks/index.d-bnrsfj.js";import{D as ct,e as Mt,s as St,Q as Fe,p as Lt,a as mt,r as lt,C as Nt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.7TmwxNJy.js";import{w as At}from"../chunks/entry.LDP-7niD.js";import{h as G,p as Ot}from"../chunks/button.DG0D4CRz.js";import{D as _t,G as ft,B as et,Q as je,a as ht,b as Ve,L as Xe}from"../chunks/LineChart.ZIF9AfA0.js";import{p as Pt}from"../chunks/stores.CzYDpESO.js";function Qt(u){let r,o=g.title+"",t;return{c(){r=F("h1"),t=jt(o),this.h()},l(i){r=D(i,"H1",{class:!0});var c=Dt(r);t=Ft(c,o),c.forEach(m),this.h()},h(){b(r,"class","title")},m(i,c){_(i,r,c),xe(r,t)},p:Qe,d(i){i&&m(r)}}}function Gt(u){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:Qe,p:Qe,d:Qe}}function Vt(u){let r,o,t,i,c;return document.title=r=g.title,{c(){o=$(),t=F("meta"),i=$(),c=F("meta"),this.h()},l(n){o=p(n),t=D(n,"META",{property:!0,content:!0}),i=p(n),c=D(n,"META",{name:!0,content:!0}),this.h()},h(){var n,f;b(t,"property","og:title"),b(t,"content",((n=g.og)==null?void 0:n.title)??g.title),b(c,"name","twitter:title"),b(c,"content",((f=g.og)==null?void 0:f.title)??g.title)},m(n,f){_(n,o,f),_(n,t,f),_(n,i,f),_(n,c,f)},p(n,f){f&0&&r!==(r=g.title)&&(document.title=r)},d(n){n&&(m(o),m(t),m(i),m(c))}}}function Bt(u){var c,n;let r,o,t=(g.description||((c=g.og)==null?void 0:c.description))&&Kt(),i=((n=g.og)==null?void 0:n.image)&&Yt();return{c(){t&&t.c(),r=$(),i&&i.c(),o=ze()},l(f){t&&t.l(f),r=p(f),i&&i.l(f),o=ze()},m(f,U){t&&t.m(f,U),_(f,r,U),i&&i.m(f,U),_(f,o,U)},p(f,U){var s,H;(g.description||(s=g.og)!=null&&s.description)&&t.p(f,U),(H=g.og)!=null&&H.image&&i.p(f,U)},d(f){f&&(m(r),m(o)),t&&t.d(f),i&&i.d(f)}}}function Kt(u){let r,o,t,i,c;return{c(){r=F("meta"),o=$(),t=F("meta"),i=$(),c=F("meta"),this.h()},l(n){r=D(n,"META",{name:!0,content:!0}),o=p(n),t=D(n,"META",{property:!0,content:!0}),i=p(n),c=D(n,"META",{name:!0,content:!0}),this.h()},h(){var n,f,U;b(r,"name","description"),b(r,"content",g.description??((n=g.og)==null?void 0:n.description)),b(t,"property","og:description"),b(t,"content",((f=g.og)==null?void 0:f.description)??g.description),b(c,"name","twitter:description"),b(c,"content",((U=g.og)==null?void 0:U.description)??g.description)},m(n,f){_(n,r,f),_(n,o,f),_(n,t,f),_(n,i,f),_(n,c,f)},p:Qe,d(n){n&&(m(r),m(o),m(t),m(i),m(c))}}}function Yt(u){let r,o,t;return{c(){r=F("meta"),o=$(),t=F("meta"),this.h()},l(i){r=D(i,"META",{property:!0,content:!0}),o=p(i),t=D(i,"META",{name:!0,content:!0}),this.h()},h(){var i,c;b(r,"property","og:image"),b(r,"content",mt((i=g.og)==null?void 0:i.image)),b(t,"name","twitter:image"),b(t,"content",mt((c=g.og)==null?void 0:c.image))},m(i,c){_(i,r,c),_(i,o,c),_(i,t,c)},p:Qe,d(i){i&&(m(r),m(o),m(t))}}}function dt(u){let r,o;return r=new je({props:{queryID:"filters",queryResult:u[0]}}),{c(){R(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,i){h(r,t,i),o=!0},p(t,i){const c={};i[0]&1&&(c.queryResult=t[0]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){y(r.$$.fragment,t),o=!1},d(t){k(r,t)}}}function yt(u){let r,o;return r=new je({props:{queryID:"countries",queryResult:u[1]}}),{c(){R(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,i){h(r,t,i),o=!0},p(t,i){const c={};i[0]&2&&(c.queryResult=t[1]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){y(r.$$.fragment,t),o=!1},d(t){k(r,t)}}}function Xt(u){let r,o;return r=new ht({props:{value:"%",valueLabel:"All Countries"}}),{c(){R(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,i){h(r,t,i),o=!0},p:Qe,i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){y(r.$$.fragment,t),o=!1},d(t){k(r,t)}}}function pt(u){let r,o;return r=new je({props:{queryID:"years",queryResult:u[2]}}),{c(){R(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,i){h(r,t,i),o=!0},p(t,i){const c={};i[0]&4&&(c.queryResult=t[2]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){y(r.$$.fragment,t),o=!1},d(t){k(r,t)}}}function xt(u){let r,o;return r=new ht({props:{value:"%",valueLabel:"All Years"}}),{c(){R(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,i){h(r,t,i),o=!0},p:Qe,i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){y(r.$$.fragment,t),o=!1},d(t){k(r,t)}}}function $t(u){let r,o;return r=new je({props:{queryID:"kpis",queryResult:u[3]}}),{c(){R(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,i){h(r,t,i),o=!0},p(t,i){const c={};i[0]&8&&(c.queryResult=t[3]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){y(r.$$.fragment,t),o=!1},d(t){k(r,t)}}}function zt(u){let r,o,t,i,c,n,f,U,s,H,T,j,E,I;return r=new Ve({props:{data:u[3],value:"revenue",fmt:"usd0",title:"Total Revenue"}}),t=new Ve({props:{data:u[3],value:"orders",fmt:"num0",title:"Orders"}}),c=new Ve({props:{data:u[3],value:"aov",fmt:"usd2",title:"AOV"}}),f=new Ve({props:{data:u[3],value:"units",fmt:"num0",title:"Units Sold"}}),s=new Ve({props:{data:u[3],value:"unique_customers",fmt:"num0",title:"Unique Customers"}}),T=new Ve({props:{data:u[3],value:"items_per_order",fmt:"num2",title:"Avg Items / Order"}}),E=new Ve({props:{data:u[3],value:"revenue_per_customer",fmt:"usd2",title:"Revenue / Customer"}}),{c(){R(r.$$.fragment),o=$(),R(t.$$.fragment),i=$(),R(c.$$.fragment),n=$(),R(f.$$.fragment),U=$(),R(s.$$.fragment),H=$(),R(T.$$.fragment),j=$(),R(E.$$.fragment)},l(l){q(r.$$.fragment,l),o=p(l),q(t.$$.fragment,l),i=p(l),q(c.$$.fragment,l),n=p(l),q(f.$$.fragment,l),U=p(l),q(s.$$.fragment,l),H=p(l),q(T.$$.fragment,l),j=p(l),q(E.$$.fragment,l)},m(l,w){h(r,l,w),_(l,o,w),h(t,l,w),_(l,i,w),h(c,l,w),_(l,n,w),h(f,l,w),_(l,U,w),h(s,l,w),_(l,H,w),h(T,l,w),_(l,j,w),h(E,l,w),I=!0},p(l,w){const z={};w[0]&8&&(z.data=l[3]),r.$set(z);const J={};w[0]&8&&(J.data=l[3]),t.$set(J);const B={};w[0]&8&&(B.data=l[3]),c.$set(B);const re={};w[0]&8&&(re.data=l[3]),f.$set(re);const K={};w[0]&8&&(K.data=l[3]),s.$set(K);const qe={};w[0]&8&&(qe.data=l[3]),T.$set(qe);const pe={};w[0]&8&&(pe.data=l[3]),E.$set(pe)},i(l){I||(d(r.$$.fragment,l),d(t.$$.fragment,l),d(c.$$.fragment,l),d(f.$$.fragment,l),d(s.$$.fragment,l),d(T.$$.fragment,l),d(E.$$.fragment,l),I=!0)},o(l){y(r.$$.fragment,l),y(t.$$.fragment,l),y(c.$$.fragment,l),y(f.$$.fragment,l),y(s.$$.fragment,l),y(T.$$.fragment,l),y(E.$$.fragment,l),I=!1},d(l){l&&(m(o),m(i),m(n),m(U),m(H),m(j)),k(r,l),k(t,l),k(c,l),k(f,l),k(s,l),k(T,l),k(E,l)}}}function vt(u){let r,o;return r=new je({props:{queryID:"monthly",queryResult:u[4]}}),{c(){R(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,i){h(r,t,i),o=!0},p(t,i){const c={};i[0]&16&&(c.queryResult=t[4]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){y(r.$$.fragment,t),o=!1},d(t){k(r,t)}}}function Jt(u){let r,o,t,i,c,n,f,U;return r=new Xe({props:{data:u[4],title:"Revenue",x:"month",y:"revenue"}}),t=new Xe({props:{data:u[4],title:"Orders",x:"month",y:"orders"}}),c=new Xe({props:{data:u[4],title:"AOV",x:"month",y:"aov"}}),f=new Xe({props:{data:u[4],title:"Unique Customers",x:"month",y:"unique_customers"}}),{c(){R(r.$$.fragment),o=$(),R(t.$$.fragment),i=$(),R(c.$$.fragment),n=$(),R(f.$$.fragment)},l(s){q(r.$$.fragment,s),o=p(s),q(t.$$.fragment,s),i=p(s),q(c.$$.fragment,s),n=p(s),q(f.$$.fragment,s)},m(s,H){h(r,s,H),_(s,o,H),h(t,s,H),_(s,i,H),h(c,s,H),_(s,n,H),h(f,s,H),U=!0},p(s,H){const T={};H[0]&16&&(T.data=s[4]),r.$set(T);const j={};H[0]&16&&(j.data=s[4]),t.$set(j);const E={};H[0]&16&&(E.data=s[4]),c.$set(E);const I={};H[0]&16&&(I.data=s[4]),f.$set(I)},i(s){U||(d(r.$$.fragment,s),d(t.$$.fragment,s),d(c.$$.fragment,s),d(f.$$.fragment,s),U=!0)},o(s){y(r.$$.fragment,s),y(t.$$.fragment,s),y(c.$$.fragment,s),y(f.$$.fragment,s),U=!1},d(s){s&&(m(o),m(i),m(n)),k(r,s),k(t,s),k(c,s),k(f,s)}}}function bt(u){let r,o;return r=new je({props:{queryID:"revenue_by_country",queryResult:u[5]}}),{c(){R(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,i){h(r,t,i),o=!0},p(t,i){const c={};i[0]&32&&(c.queryResult=t[5]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){y(r.$$.fragment,t),o=!1},d(t){k(r,t)}}}function wt(u){let r,o;return r=new je({props:{queryID:"top_customers",queryResult:u[6]}}),{c(){R(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,i){h(r,t,i),o=!0},p(t,i){const c={};i[0]&64&&(c.queryResult=t[6]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){y(r.$$.fragment,t),o=!1},d(t){k(r,t)}}}function gt(u){let r,o;return r=new je({props:{queryID:"new_vs_returning",queryResult:u[7]}}),{c(){R(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,i){h(r,t,i),o=!0},p(t,i){const c={};i[0]&128&&(c.queryResult=t[7]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){y(r.$$.fragment,t),o=!1},d(t){k(r,t)}}}function kt(u){let r,o;return r=new je({props:{queryID:"top_products",queryResult:u[8]}}),{c(){R(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,i){h(r,t,i),o=!0},p(t,i){const c={};i[0]&256&&(c.queryResult=t[8]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){y(r.$$.fragment,t),o=!1},d(t){k(r,t)}}}function Wt(u){let r,o,t,i,c,n,f='This dashboard is powered by your dbt <strong class="markdown">gold</strong> models in Postgres:',U,s,H='<li class="markdown"><code class="markdown">ecomm.fct_order</code></li> <li class="markdown"><code class="markdown">ecomm.dim_customer</code></li>',T,j,E,I,l,w,z,J,B,re,K,qe='<a href="#executive-summary">Executive Summary</a>',pe,Z,Y,$e,Re,Ie,oe,ve='<a href="#trends-monthly">Trends (Monthly)</a>',ue,ie,ce,Ce,Ue,me,V,Me='<a href="#geography">Geography</a>',Se,be,le,_e,ne,we,ae,Be='<a href="#customers">Customers</a>',Le,ee,X,ge,ke,fe,Ne,se,de,W,Ke='<a href="#products-using-product_id">Products (using product_id)</a>',Ae,he,x,ye,te,Oe,Te,Pe,v=typeof g<"u"&&g.title&&g.hide_title!==!0&&Qt();function Je(e,a){return typeof g<"u"&&g.title?Vt:Gt}let Ye=Je()(u),Ee=typeof g=="object"&&Bt(),C=u[0]&&dt(u),M=u[1]&&yt(u);I=new _t({props:{data:u[1],name:"country",value:"country",$$slots:{default:[Xt]},$$scope:{ctx:u}}});let S=u[2]&&pt(u);z=new _t({props:{data:u[2],name:"year",value:"year",$$slots:{default:[xt]},$$scope:{ctx:u}}});let L=u[3]&&$t(u);Y=new ft({props:{cols:"3",$$slots:{default:[zt]},$$scope:{ctx:u}}});let N=u[4]&&vt(u);ce=new ft({props:{cols:"2",$$slots:{default:[Jt]},$$scope:{ctx:u}}});let A=u[5]&&bt(u);le=new et({props:{data:u[5],title:"Revenue by Country",x:"country",y:"revenue"}});let O=u[6]&&wt(u);X=new ct({props:{data:u[6],rows:"25"}});let P=u[7]&&gt(u);fe=new et({props:{data:u[7],title:"New vs Returning (Revenue)",x:"month",y:"revenue",series:"customer_type"}});let Q=u[8]&&kt(u);return x=new et({props:{data:u[8],title:"Top Products by Revenue",x:"product_id",y:"revenue"}}),te=new ct({props:{data:u[8],rows:"25"}}),{c(){v&&v.c(),r=$(),Ye.c(),o=F("meta"),t=F("meta"),Ee&&Ee.c(),i=ze(),c=$(),n=F("p"),n.innerHTML=f,U=$(),s=F("ul"),s.innerHTML=H,T=$(),C&&C.c(),j=$(),M&&M.c(),E=$(),R(I.$$.fragment),l=$(),S&&S.c(),w=$(),R(z.$$.fragment),J=$(),B=F("hr"),re=$(),K=F("h2"),K.innerHTML=qe,pe=$(),L&&L.c(),Z=$(),R(Y.$$.fragment),$e=$(),Re=F("hr"),Ie=$(),oe=F("h2"),oe.innerHTML=ve,ue=$(),N&&N.c(),ie=$(),R(ce.$$.fragment),Ce=$(),Ue=F("hr"),me=$(),V=F("h2"),V.innerHTML=Me,Se=$(),A&&A.c(),be=$(),R(le.$$.fragment),_e=$(),ne=F("hr"),we=$(),ae=F("h2"),ae.innerHTML=Be,Le=$(),O&&O.c(),ee=$(),R(X.$$.fragment),ge=$(),P&&P.c(),ke=$(),R(fe.$$.fragment),Ne=$(),se=F("hr"),de=$(),W=F("h2"),W.innerHTML=Ke,Ae=$(),Q&&Q.c(),he=$(),R(x.$$.fragment),ye=$(),R(te.$$.fragment),Oe=$(),Te=F("hr"),this.h()},l(e){v&&v.l(e),r=p(e);const a=Rt("svelte-2igo1p",document.head);Ye.l(a),o=D(a,"META",{name:!0,content:!0}),t=D(a,"META",{name:!0,content:!0}),Ee&&Ee.l(a),i=ze(),a.forEach(m),c=p(e),n=D(e,"P",{class:!0,"data-svelte-h":!0}),Ge(n)!=="svelte-1n56fcd"&&(n.innerHTML=f),U=p(e),s=D(e,"UL",{class:!0,"data-svelte-h":!0}),Ge(s)!=="svelte-1k3k0n1"&&(s.innerHTML=H),T=p(e),C&&C.l(e),j=p(e),M&&M.l(e),E=p(e),q(I.$$.fragment,e),l=p(e),S&&S.l(e),w=p(e),q(z.$$.fragment,e),J=p(e),B=D(e,"HR",{class:!0}),re=p(e),K=D(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ge(K)!=="svelte-1aty7f8"&&(K.innerHTML=qe),pe=p(e),L&&L.l(e),Z=p(e),q(Y.$$.fragment,e),$e=p(e),Re=D(e,"HR",{class:!0}),Ie=p(e),oe=D(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ge(oe)!=="svelte-cqae6c"&&(oe.innerHTML=ve),ue=p(e),N&&N.l(e),ie=p(e),q(ce.$$.fragment,e),Ce=p(e),Ue=D(e,"HR",{class:!0}),me=p(e),V=D(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ge(V)!=="svelte-11bcr16"&&(V.innerHTML=Me),Se=p(e),A&&A.l(e),be=p(e),q(le.$$.fragment,e),_e=p(e),ne=D(e,"HR",{class:!0}),we=p(e),ae=D(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ge(ae)!=="svelte-or7ff"&&(ae.innerHTML=Be),Le=p(e),O&&O.l(e),ee=p(e),q(X.$$.fragment,e),ge=p(e),P&&P.l(e),ke=p(e),q(fe.$$.fragment,e),Ne=p(e),se=D(e,"HR",{class:!0}),de=p(e),W=D(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ge(W)!=="svelte-1ygonxy"&&(W.innerHTML=Ke),Ae=p(e),Q&&Q.l(e),he=p(e),q(x.$$.fragment,e),ye=p(e),q(te.$$.fragment,e),Oe=p(e),Te=D(e,"HR",{class:!0}),this.h()},h(){b(o,"name","twitter:card"),b(o,"content","summary_large_image"),b(t,"name","twitter:site"),b(t,"content","@evidence_dev"),b(n,"class","markdown"),b(s,"class","markdown"),b(B,"class","markdown"),b(K,"class","markdown"),b(K,"id","executive-summary"),b(Re,"class","markdown"),b(oe,"class","markdown"),b(oe,"id","trends-monthly"),b(Ue,"class","markdown"),b(V,"class","markdown"),b(V,"id","geography"),b(ne,"class","markdown"),b(ae,"class","markdown"),b(ae,"id","customers"),b(se,"class","markdown"),b(W,"class","markdown"),b(W,"id","products-using-product_id"),b(Te,"class","markdown")},m(e,a){v&&v.m(e,a),_(e,r,a),Ye.m(document.head,null),xe(document.head,o),xe(document.head,t),Ee&&Ee.m(document.head,null),xe(document.head,i),_(e,c,a),_(e,n,a),_(e,U,a),_(e,s,a),_(e,T,a),C&&C.m(e,a),_(e,j,a),M&&M.m(e,a),_(e,E,a),h(I,e,a),_(e,l,a),S&&S.m(e,a),_(e,w,a),h(z,e,a),_(e,J,a),_(e,B,a),_(e,re,a),_(e,K,a),_(e,pe,a),L&&L.m(e,a),_(e,Z,a),h(Y,e,a),_(e,$e,a),_(e,Re,a),_(e,Ie,a),_(e,oe,a),_(e,ue,a),N&&N.m(e,a),_(e,ie,a),h(ce,e,a),_(e,Ce,a),_(e,Ue,a),_(e,me,a),_(e,V,a),_(e,Se,a),A&&A.m(e,a),_(e,be,a),h(le,e,a),_(e,_e,a),_(e,ne,a),_(e,we,a),_(e,ae,a),_(e,Le,a),O&&O.m(e,a),_(e,ee,a),h(X,e,a),_(e,ge,a),P&&P.m(e,a),_(e,ke,a),h(fe,e,a),_(e,Ne,a),_(e,se,a),_(e,de,a),_(e,W,a),_(e,Ae,a),Q&&Q.m(e,a),_(e,he,a),h(x,e,a),_(e,ye,a),h(te,e,a),_(e,Oe,a),_(e,Te,a),Pe=!0},p(e,a){typeof g<"u"&&g.title&&g.hide_title!==!0&&v.p(e,a),Ye.p(e,a),typeof g=="object"&&Ee.p(e,a),e[0]?C?(C.p(e,a),a[0]&1&&d(C,1)):(C=dt(e),C.c(),d(C,1),C.m(j.parentNode,j)):C&&(De(),y(C,1,1,()=>{C=null}),He()),e[1]?M?(M.p(e,a),a[0]&2&&d(M,1)):(M=yt(e),M.c(),d(M,1),M.m(E.parentNode,E)):M&&(De(),y(M,1,1,()=>{M=null}),He());const We={};a[0]&2&&(We.data=e[1]),a[2]&16&&(We.$$scope={dirty:a,ctx:e}),I.$set(We),e[2]?S?(S.p(e,a),a[0]&4&&d(S,1)):(S=pt(e),S.c(),d(S,1),S.m(w.parentNode,w)):S&&(De(),y(S,1,1,()=>{S=null}),He());const Ze={};a[0]&4&&(Ze.data=e[2]),a[2]&16&&(Ze.$$scope={dirty:a,ctx:e}),z.$set(Ze),e[3]?L?(L.p(e,a),a[0]&8&&d(L,1)):(L=$t(e),L.c(),d(L,1),L.m(Z.parentNode,Z)):L&&(De(),y(L,1,1,()=>{L=null}),He());const tt={};a[0]&8|a[2]&16&&(tt.$$scope={dirty:a,ctx:e}),Y.$set(tt),e[4]?N?(N.p(e,a),a[0]&16&&d(N,1)):(N=vt(e),N.c(),d(N,1),N.m(ie.parentNode,ie)):N&&(De(),y(N,1,1,()=>{N=null}),He());const rt={};a[0]&16|a[2]&16&&(rt.$$scope={dirty:a,ctx:e}),ce.$set(rt),e[5]?A?(A.p(e,a),a[0]&32&&d(A,1)):(A=bt(e),A.c(),d(A,1),A.m(be.parentNode,be)):A&&(De(),y(A,1,1,()=>{A=null}),He());const ot={};a[0]&32&&(ot.data=e[5]),le.$set(ot),e[6]?O?(O.p(e,a),a[0]&64&&d(O,1)):(O=wt(e),O.c(),d(O,1),O.m(ee.parentNode,ee)):O&&(De(),y(O,1,1,()=>{O=null}),He());const nt={};a[0]&64&&(nt.data=e[6]),X.$set(nt),e[7]?P?(P.p(e,a),a[0]&128&&d(P,1)):(P=gt(e),P.c(),d(P,1),P.m(ke.parentNode,ke)):P&&(De(),y(P,1,1,()=>{P=null}),He());const at={};a[0]&128&&(at.data=e[7]),fe.$set(at),e[8]?Q?(Q.p(e,a),a[0]&256&&d(Q,1)):(Q=kt(e),Q.c(),d(Q,1),Q.m(he.parentNode,he)):Q&&(De(),y(Q,1,1,()=>{Q=null}),He());const st={};a[0]&256&&(st.data=e[8]),x.$set(st);const ut={};a[0]&256&&(ut.data=e[8]),te.$set(ut)},i(e){Pe||(d(C),d(M),d(I.$$.fragment,e),d(S),d(z.$$.fragment,e),d(L),d(Y.$$.fragment,e),d(N),d(ce.$$.fragment,e),d(A),d(le.$$.fragment,e),d(O),d(X.$$.fragment,e),d(P),d(fe.$$.fragment,e),d(Q),d(x.$$.fragment,e),d(te.$$.fragment,e),Pe=!0)},o(e){y(C),y(M),y(I.$$.fragment,e),y(S),y(z.$$.fragment,e),y(L),y(Y.$$.fragment,e),y(N),y(ce.$$.fragment,e),y(A),y(le.$$.fragment,e),y(O),y(X.$$.fragment,e),y(P),y(fe.$$.fragment,e),y(Q),y(x.$$.fragment,e),y(te.$$.fragment,e),Pe=!1},d(e){e&&(m(r),m(c),m(n),m(U),m(s),m(T),m(j),m(E),m(l),m(w),m(J),m(B),m(re),m(K),m(pe),m(Z),m($e),m(Re),m(Ie),m(oe),m(ue),m(ie),m(Ce),m(Ue),m(me),m(V),m(Se),m(be),m(_e),m(ne),m(we),m(ae),m(Le),m(ee),m(ge),m(ke),m(Ne),m(se),m(de),m(W),m(Ae),m(he),m(ye),m(Oe),m(Te)),v&&v.d(e),Ye.d(e),m(o),m(t),Ee&&Ee.d(e),m(i),C&&C.d(e),M&&M.d(e),k(I,e),S&&S.d(e),k(z,e),L&&L.d(e),k(Y,e),N&&N.d(e),k(ce,e),A&&A.d(e),k(le,e),O&&O.d(e),k(X,e),P&&P.d(e),k(fe,e),Q&&Q.d(e),k(x,e),k(te,e)}}}const g={title:"Ecommerce KPI Dashboard (Monthly)"};function Zt(u,r,o){let t,i;it(u,Pt,v=>o(48,t=v)),it(u,lt,v=>o(53,i=v));let{data:c}=r,{data:n={},customFormattingSettings:f,__db:U,inputs:s}=c;Ut(lt,i="7a9463a3ba127b500379369022fbbdb2",i);let H=Mt(At(s));Tt(H.subscribe(v=>o(11,s=v))),Et(Nt,{getCustomFormats:()=>f.customFormats||[]});const T=(v,Je)=>Ot(U.query,v,{query_name:Je});St(T),t.params,Ht(()=>!0);let j={initialData:void 0,initialError:void 0},E=G`select
  min(date_trunc('month', order_date)::date) as min_month,
  max(date_trunc('month', order_date)::date) as max_month
from ecomm.fct_order`,I=`select
  min(date_trunc('month', order_date)::date) as min_month,
  max(date_trunc('month', order_date)::date) as max_month
from ecomm.fct_order`;n.filters_data&&(n.filters_data instanceof Error?j.initialError=n.filters_data:j.initialData=n.filters_data,n.filters_columns&&(j.knownColumns=n.filters_columns));let l,w=!1;const z=Fe.createReactive({callback:v=>{o(0,l=v)},execFn:T},{id:"filters",...j});z(I,{noResolve:E,...j}),globalThis[Symbol.for("filters")]={get value(){return l}};let J={initialData:void 0,initialError:void 0},B=G`select distinct
  coalesce(country,'Unknown') as country
from ecomm.dim_customer
order by 1`,re=`select distinct
  coalesce(country,'Unknown') as country
from ecomm.dim_customer
order by 1`;n.countries_data&&(n.countries_data instanceof Error?J.initialError=n.countries_data:J.initialData=n.countries_data,n.countries_columns&&(J.knownColumns=n.countries_columns));let K,qe=!1;const pe=Fe.createReactive({callback:v=>{o(1,K=v)},execFn:T},{id:"countries",...J});pe(re,{noResolve:B,...J}),globalThis[Symbol.for("countries")]={get value(){return K}};let Z={initialData:void 0,initialError:void 0},Y=G`select distinct
  date_part('year', order_date)::int as year
from ecomm.fct_order
order by 1`,$e=`select distinct
  date_part('year', order_date)::int as year
from ecomm.fct_order
order by 1`;n.years_data&&(n.years_data instanceof Error?Z.initialError=n.years_data:Z.initialData=n.years_data,n.years_columns&&(Z.knownColumns=n.years_columns));let Re,Ie=!1;const oe=Fe.createReactive({callback:v=>{o(2,Re=v)},execFn:T},{id:"years",...Z});oe($e,{noResolve:Y,...Z}),globalThis[Symbol.for("years")]={get value(){return Re}};let ve={initialData:void 0,initialError:void 0},ue=G`with base as (
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
from base`,ie=`with base as (
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
from base`;n.kpis_data&&(n.kpis_data instanceof Error?ve.initialError=n.kpis_data:ve.initialData=n.kpis_data,n.kpis_columns&&(ve.knownColumns=n.kpis_columns));let ce,Ce=!1;const Ue=Fe.createReactive({callback:v=>{o(3,ce=v)},execFn:T},{id:"kpis",...ve});Ue(ie,{noResolve:ue,...ve}),globalThis[Symbol.for("kpis")]={get value(){return ce}};let me={initialData:void 0,initialError:void 0},V=G`with base as (
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
order by 1`;n.monthly_data&&(n.monthly_data instanceof Error?me.initialError=n.monthly_data:me.initialData=n.monthly_data,n.monthly_columns&&(me.knownColumns=n.monthly_columns));let Se,be=!1;const le=Fe.createReactive({callback:v=>{o(4,Se=v)},execFn:T},{id:"monthly",...me});le(Me,{noResolve:V,...me}),globalThis[Symbol.for("monthly")]={get value(){return Se}};let _e={initialData:void 0,initialError:void 0},ne=G`select
  coalesce(c.country,'Unknown') as country,
  sum(o.total_amount) as revenue,
  count(*) as orders,
  (sum(o.total_amount) / nullif(count(*),0)) as aov
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where date_part('year', o.order_date) :: text like '${s.year.value}'
group by 1
order by revenue desc`,we=`select
  coalesce(c.country,'Unknown') as country,
  sum(o.total_amount) as revenue,
  count(*) as orders,
  (sum(o.total_amount) / nullif(count(*),0)) as aov
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where date_part('year', o.order_date) :: text like '${s.year.value}'
group by 1
order by revenue desc`;n.revenue_by_country_data&&(n.revenue_by_country_data instanceof Error?_e.initialError=n.revenue_by_country_data:_e.initialData=n.revenue_by_country_data,n.revenue_by_country_columns&&(_e.knownColumns=n.revenue_by_country_columns));let ae,Be=!1;const Le=Fe.createReactive({callback:v=>{o(5,ae=v)},execFn:T},{id:"revenue_by_country",..._e});Le(we,{noResolve:ne,..._e}),globalThis[Symbol.for("revenue_by_country")]={get value(){return ae}};let ee={initialData:void 0,initialError:void 0},X=G`select
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
limit 25`,ge=`select
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
limit 25`;n.top_customers_data&&(n.top_customers_data instanceof Error?ee.initialError=n.top_customers_data:ee.initialData=n.top_customers_data,n.top_customers_columns&&(ee.knownColumns=n.top_customers_columns));let ke,fe=!1;const Ne=Fe.createReactive({callback:v=>{o(6,ke=v)},execFn:T},{id:"top_customers",...ee});Ne(ge,{noResolve:X,...ee}),globalThis[Symbol.for("top_customers")]={get value(){return ke}};let se={initialData:void 0,initialError:void 0},de=G`with first_order as (
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
order by 1,2`;n.new_vs_returning_data&&(n.new_vs_returning_data instanceof Error?se.initialError=n.new_vs_returning_data:se.initialData=n.new_vs_returning_data,n.new_vs_returning_columns&&(se.knownColumns=n.new_vs_returning_columns));let Ke,Ae=!1;const he=Fe.createReactive({callback:v=>{o(7,Ke=v)},execFn:T},{id:"new_vs_returning",...se});he(W,{noResolve:de,...se}),globalThis[Symbol.for("new_vs_returning")]={get value(){return Ke}};let x={initialData:void 0,initialError:void 0},ye=G`select
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
limit 25`;n.top_products_data&&(n.top_products_data instanceof Error?x.initialError=n.top_products_data:x.initialData=n.top_products_data,n.top_products_columns&&(x.knownColumns=n.top_products_columns));let Oe,Te=!1;const Pe=Fe.createReactive({callback:v=>{o(8,Oe=v)},execFn:T},{id:"top_products",...x});return Pe(te,{noResolve:ye,...x}),globalThis[Symbol.for("top_products")]={get value(){return Oe}},u.$$set=v=>{"data"in v&&o(9,c=v.data)},u.$$.update=()=>{u.$$.dirty[0]&512&&o(10,{data:n={},customFormattingSettings:f,__db:U}=c,n),u.$$.dirty[0]&1024&&Lt.set(Object.keys(n).length>0),u.$$.dirty[1]&131072&&t.params,u.$$.dirty[0]&61440&&(E||!w?E||(z(I,{noResolve:E,...j}),o(15,w=!0)):z(I,{noResolve:E})),u.$$.dirty[0]&983040&&(B||!qe?B||(pe(re,{noResolve:B,...J}),o(19,qe=!0)):pe(re,{noResolve:B})),u.$$.dirty[0]&15728640&&(Y||!Ie?Y||(oe($e,{noResolve:Y,...Z}),o(23,Ie=!0)):oe($e,{noResolve:Y})),u.$$.dirty[0]&2048&&o(25,ue=G`with base as (
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
from base`),u.$$.dirty[0]&2048&&o(26,ie=`with base as (
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
from base`),u.$$.dirty[0]&251658240&&(ue||!Ce?ue||(Ue(ie,{noResolve:ue,...ve}),o(27,Ce=!0)):Ue(ie,{noResolve:ue})),u.$$.dirty[0]&2048&&o(29,V=G`with base as (
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
order by 1`),u.$$.dirty[0]&1879048192|u.$$.dirty[1]&1&&(V||!be?V||(le(Me,{noResolve:V,...me}),o(31,be=!0)):le(Me,{noResolve:V})),u.$$.dirty[0]&2048&&o(33,ne=G`select
  coalesce(c.country,'Unknown') as country,
  sum(o.total_amount) as revenue,
  count(*) as orders,
  (sum(o.total_amount) / nullif(count(*),0)) as aov
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where date_part('year', o.order_date) :: text like '${s.year.value}'
group by 1
order by revenue desc`),u.$$.dirty[0]&2048&&o(34,we=`select
  coalesce(c.country,'Unknown') as country,
  sum(o.total_amount) as revenue,
  count(*) as orders,
  (sum(o.total_amount) / nullif(count(*),0)) as aov
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where date_part('year', o.order_date) :: text like '${s.year.value}'
group by 1
order by revenue desc`),u.$$.dirty[1]&30&&(ne||!Be?ne||(Le(we,{noResolve:ne,..._e}),o(35,Be=!0)):Le(we,{noResolve:ne})),u.$$.dirty[0]&2048&&o(37,X=G`select
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
limit 25`),u.$$.dirty[0]&2048&&o(38,ge=`select
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
limit 25`),u.$$.dirty[1]&480&&(X||!fe?X||(Ne(ge,{noResolve:X,...ee}),o(39,fe=!0)):Ne(ge,{noResolve:X})),u.$$.dirty[0]&2048&&o(41,de=G`with first_order as (
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
order by 1,2`),u.$$.dirty[1]&7680&&(de||!Ae?de||(he(W,{noResolve:de,...se}),o(43,Ae=!0)):he(W,{noResolve:de})),u.$$.dirty[0]&2048&&o(45,ye=G`select
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
limit 25`),u.$$.dirty[1]&122880&&(ye||!Te?ye||(Pe(te,{noResolve:ye,...x}),o(47,Te=!0)):Pe(te,{noResolve:ye}))},o(13,E=G`select
  min(date_trunc('month', order_date)::date) as min_month,
  max(date_trunc('month', order_date)::date) as max_month
from ecomm.fct_order`),o(14,I=`select
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
order by 1`),o(22,$e=`select distinct
  date_part('year', order_date)::int as year
from ecomm.fct_order
order by 1`),[l,K,Re,ce,Se,ae,ke,Ke,Oe,c,n,s,j,E,I,w,J,B,re,qe,Z,Y,$e,Ie,ve,ue,ie,Ce,me,V,Me,be,_e,ne,we,Be,ee,X,ge,fe,se,de,W,Ae,x,ye,te,Te,t]}class ir extends It{constructor(r){super(),Ct(this,r,Zt,Wt,qt,{data:9},null,[-1,-1,-1])}}export{ir as component};
