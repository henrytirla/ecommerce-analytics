import{s as Je,c as dt,d,u as yt,g as gt,a as ht,b as C,i as k,h as W,j as Ue,m as B,E as rn,r as Xe,v as Ne,w as bt,e as Te,x as tt,q as pe,y as nt,S as Ut,k as q,n as E,H as At,V as Ke,W as st,a9 as jt,t as Lt,aa as un,B as fn,C as mn,D as cn,F as _n}from"../chunks/scheduler.qTKq8TXI.js";import{S as Ze,i as xe,t as h,a as _,g as Se,c as Ce,d as R,m as I,b as P,e as D}from"../chunks/index.Dv-xFzfA.js";import{j as Tt,M as St,N as ln,O as dn,R as Ct,S as on,U as qt,V as yn,W as an,X as Et,Q as Ie,H as Rt,L as It,Y as Pt,Z as gn,_ as hn,$ as bn,J as at,b as ut,a0 as kn,a1 as wn,a2 as vn,a3 as Sn,t as wt,a4 as Cn,D as Ht,e as Tn,a as Mn,p as Fn,r as Gt,c as An}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.DW4uscFs.js";import{w as Ln}from"../chunks/entry.U3LwczPK.js";import{h as Re,p as qn}from"../chunks/button.Dxweg0mA.js";import{g as Wt,b as En,c as Rn,C as In,D as Bt,B as Ft,Q as $e,a as sn}from"../chunks/BarChart.CxuA33X6.js";import{p as Pn}from"../chunks/stores.CMSqonx6.js";function Dn(l){let e,n,t;const i=l[5].default,r=dt(i,l,l[4],null);return{c(){e=B("div"),r&&r.c(),this.h()},l(o){e=W(o,"DIV",{class:!0});var a=Ue(e);r&&r.l(a),a.forEach(d),this.h()},h(){C(e,"class",n="grid "+l[2][l[0]]+" "+l[3][l[1]])},m(o,a){k(o,e,a),r&&r.m(e,null),t=!0},p(o,[a]){r&&r.p&&(!t||a&16)&&yt(r,i,o,o[4],t?ht(i,o[4],a,null):gt(o[4]),null),(!t||a&3&&n!==(n="grid "+o[2][o[0]]+" "+o[3][o[1]]))&&C(e,"class",n)},i(o){t||(_(r,o),t=!0)},o(o){h(r,o),t=!1},d(o){o&&d(e),r&&r.d(o)}}}function On(l,e,n){let{$$slots:t={},$$scope:i}=e,{cols:r=2}=e,{gapSize:o="md"}=e;const a=Object.freeze({1:"grid-cols-1",2:"grid-cols-1 sm:grid-cols-2",3:"grid-cols-1 sm:grid-cols-2 md:grid-cols-3",4:"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",5:"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",6:"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"}),f=Object.freeze({none:"gap-0",sm:"gap-2",md:"gap-4",lg:"gap-8"}),u=Object.freeze({none:0,sm:8,md:16,lg:32});let b=`grid-${Date.now()}-${Math.round(Math.random()*1e3)}`,y=u[o];return rn("gridConfig",{gridId:b,cols:r,gapWidth:y}),l.$$set=v=>{"cols"in v&&n(0,r=v.cols),"gapSize"in v&&n(1,o=v.gapSize),"$$scope"in v&&n(4,i=v.$$scope)},[r,o,a,f,i,t]}class Nt extends Ze{constructor(e){super(),xe(this,e,On,Dn,Je,{cols:0,gapSize:1})}}function Un(l){let e,n;return e=new yn({props:{error:l[3]}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p(t,i){const r={};i&8&&(r.error=t[3]),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function jn(l){let e,n=qt(l[2],l[4])+"",t,i,r,o=l[1]&&zt(l);return{c(){e=B("span"),t=nt(n),i=E(),o&&o.c(),this.h()},l(a){e=W(a,"SPAN",{style:!0});var f=Ue(e);t=tt(f,n),i=q(f),o&&o.l(f),f.forEach(d),this.h()},h(){Ut(e,"color",l[5])},m(a,f){k(a,e,f),Te(e,t),Te(e,i),o&&o.m(e,null),r=!0},p(a,f){(!r||f&20)&&n!==(n=qt(a[2],a[4])+"")&&bt(t,n),a[1]?o?(o.p(a,f),f&2&&_(o,1)):(o=zt(a),o.c(),_(o,1),o.m(e,null)):o&&(Se(),h(o,1,1,()=>{o=null}),Ce()),(!r||f&32)&&Ut(e,"color",a[5])},i(a){r||(_(o),r=!0)},o(a){h(o),r=!1},d(a){a&&d(e),o&&o.d()}}}function Hn(l){let e,n,t,i,r,o="Placeholder: no data currently referenced.";return{c(){e=B("span"),n=nt("["),t=nt(l[0]),i=nt("]"),r=B("span"),r.textContent=o,this.h()},l(a){e=W(a,"SPAN",{class:!0});var f=Ue(e);n=tt(f,"["),t=tt(f,l[0]),i=tt(f,"]"),r=W(f,"SPAN",{class:!0,"data-svelte-h":!0}),pe(r)!=="svelte-ddarzq"&&(r.textContent=o),f.forEach(d),this.h()},h(){C(r,"class","error-msg svelte-1qvl5jp"),C(e,"class","placeholder svelte-1qvl5jp")},m(a,f){k(a,e,f),Te(e,n),Te(e,t),Te(e,i),Te(e,r)},p(a,f){f&1&&bt(t,a[0])},i:Ne,o:Ne,d(a){a&&d(e)}}}function zt(l){let e,n;return e=new an({props:{description:l[1]}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p(t,i){const r={};i&2&&(r.description=t[1]),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Gn(l){let e,n,t,i;const r=[Hn,jn,Un],o=[];function a(f,u){return f[0]?0:f[3]?2:1}return e=a(l),n=o[e]=r[e](l),{c(){n.c(),t=Xe()},l(f){n.l(f),t=Xe()},m(f,u){o[e].m(f,u),k(f,t,u),i=!0},p(f,[u]){let b=e;e=a(f),e===b?o[e].p(f,u):(Se(),h(o[b],1,1,()=>{o[b]=null}),Ce(),n=o[e],n?n.p(f,u):(n=o[e]=r[e](f),n.c()),_(n,1),n.m(t.parentNode,t))},i(f){i||(_(n),i=!0)},o(f){h(n),i=!1},d(f){f&&d(t),o[e].d(f)}}}function Wn(l,e,n){let t,i,r=Ne,o=()=>(r(),r=At(t,j=>n(15,i=j)),t);l.$$.on_destroy.push(()=>r());const{resolveColor:a}=Tt();let{data:f=null}=e,{row:u=0}=e,{column:b=null}=e,{value:y=null}=e,{placeholder:v=null}=e,{description:T=void 0}=e,{fmt:F=void 0}=e,w,L,N,{color:U=void 0}=e,O="",{redNegatives:M=!1}=e,A;return l.$$set=j=>{"data"in j&&n(7,f=j.data),"row"in j&&n(10,u=j.row),"column"in j&&n(8,b=j.column),"value"in j&&n(11,y=j.value),"placeholder"in j&&n(0,v=j.placeholder),"description"in j&&n(1,T=j.description),"fmt"in j&&n(12,F=j.fmt),"color"in j&&n(13,U=j.color),"redNegatives"in j&&n(9,M=j.redNegatives)},l.$$.update=()=>{var j;if(l.$$.dirty&2304&&n(8,b=b??y),l.$$.dirty&21897)try{if(n(3,N=void 0),!v)if(f){if(typeof f=="string")throw Error(`Received: data=${f}, expected: data={${f}}`);if(Array.isArray(f)||n(7,f=[f]),isNaN(u))throw Error("row must be a number (row="+u+")");try{Object.keys(f[u])[0]}catch{throw Error("Row "+u+" does not exist in the dataset")}n(8,b=b??Object.keys(f[u])[0]),St(f,[b]),n(14,A=ln(f,"array"));const K=A.filter(H=>{var V;return H.type==="date"&&!(((V=f[0])==null?void 0:V[H.id])instanceof Date)}).map(H=>H.id);for(let H=0;H<K.length;H++)n(7,f=dn(f,K[H]));n(2,L=f[u][b]),n(14,A=A.filter(H=>H.id===b)),F?n(4,w=Ct(F,(j=A[0].format)==null?void 0:j.valueType)):n(4,w=A[0].format)}else throw Error("No data provided. If you referenced a query result, check that the name is correct.")}catch(K){if(n(3,N=K.message),console.error("\x1B[31m%s\x1B[0m",`Error in Value: ${N}`),on)throw N}l.$$.dirty&2304&&y&&b&&console.warn('Both "value" and "column" were supplied as props to Value. "value" will be ignored.'),l.$$.dirty&8192&&o(n(6,t=a(U))),l.$$.dirty&512&&n(9,M=M==="true"||M===!0),l.$$.dirty&33284&&(M||i)&&(M&&L<0?n(5,O="rgb(220 38 38)"):i&&n(5,O=i))},[v,T,L,N,w,O,t,f,b,M,u,y,F,U,A,i]}class Bn extends Ze{constructor(e){super(),xe(this,e,Wn,Gn,Je,{data:7,row:10,column:8,value:11,placeholder:0,description:1,fmt:12,color:13,redNegatives:9})}}function Nn(l){let e;const n=l[7].default,t=dt(n,l,l[8],null);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,r){t&&t.m(i,r),e=!0},p(i,r){t&&t.p&&(!e||r&256)&&yt(t,n,i,i[8],e?ht(n,i[8],r,null):gt(i[8]),null)},i(i){e||(_(t,i),e=!0)},o(i){h(t,i),e=!1},d(i){t&&t.d(i)}}}function zn(l){let e,n;const t=[l[4],{data:Ie.isQuery(l[11])?Array.from(l[11]):l[11]}];let i={$$slots:{default:[Nn]},$$scope:{ctx:l}};for(let r=0;r<t.length;r+=1)i=Ke(i,t[r]);return e=new Bn({props:i}),{c(){D(e.$$.fragment)},l(r){P(e.$$.fragment,r)},m(r,o){I(e,r,o),n=!0},p(r,o){const a=o&2064?Rt(t,[o&16&&It(r[4]),o&2048&&{data:Ie.isQuery(r[11])?Array.from(r[11]):r[11]}]):{};o&256&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){h(e.$$.fragment,r),n=!1},d(r){R(e,r)}}}function Vt(l){let e,n;return e=new Pt({props:{emptyMessage:l[2],emptySet:l[1],chartType:Xn,isInitial:l[3]}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p(t,i){const r={};i&4&&(r.emptyMessage=t[2]),i&2&&(r.emptySet=t[1]),i&8&&(r.isInitial=t[3]),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Vn(l){let e,n,t=!l[4].placeholder&&Vt(l);return{c(){e=B("span"),t&&t.c(),this.h()},l(i){e=W(i,"SPAN",{slot:!0});var r=Ue(e);t&&t.l(r),r.forEach(d),this.h()},h(){C(e,"slot","empty")},m(i,r){k(i,e,r),t&&t.m(e,null),n=!0},p(i,r){i[4].placeholder?t&&(Se(),h(t,1,1,()=>{t=null}),Ce()):t?(t.p(i,r),r&16&&_(t,1)):(t=Vt(i),t.c(),_(t,1),t.m(e,null))},i(i){n||(_(t),n=!0)},o(i){h(t),n=!1},d(i){i&&d(e),t&&t.d()}}}function Qn(l){let e,n="Loading...";return{c(){e=B("span"),e.textContent=n,this.h()},l(t){e=W(t,"SPAN",{slot:!0,class:!0,"data-svelte-h":!0}),pe(e)!=="svelte-89gxhc"&&(e.textContent=n),this.h()},h(){C(e,"slot","skeleton"),C(e,"class","text-base-content-muted")},m(t,i){k(t,e,i)},p:Ne,d(t){t&&d(e)}}}function Yn(l){let e,n;return e=new Et({props:{data:l[0],$$slots:{skeleton:[Qn],empty:[Vn],default:[zn,({loaded:t})=>({11:t}),({loaded:t})=>t?2048:0]},$$scope:{ctx:l}}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p(t,[i]){const r={};i&1&&(r.data=t[0]),i&2334&&(r.$$scope={dirty:i,ctx:t}),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}let Xn="Value";function pn(l,e,n){let t,{$$slots:i={},$$scope:r}=e,{data:o}=e,{column:a}=e,{agg:f}=e;const u=Ie.isQuery(o)?o.hash:void 0;let b=(o==null?void 0:o.hash)===u,{emptySet:y=void 0}=e,{emptyMessage:v=void 0}=e;return l.$$set=T=>{n(10,e=Ke(Ke({},e),st(T))),"data"in T&&n(0,o=T.data),"column"in T&&n(5,a=T.column),"agg"in T&&n(6,f=T.agg),"emptySet"in T&&n(1,y=T.emptySet),"emptyMessage"in T&&n(2,v=T.emptyMessage),"$$scope"in T&&n(8,r=T.$$scope)},l.$$.update=()=>{l.$$.dirty&97&&f&&n(0,o=o.groupBy(void 0).agg({[f]:{col:a,as:a}})),l.$$.dirty&1&&n(3,b=(o==null?void 0:o.hash)===u),n(4,t=Object.fromEntries(Object.entries(e).filter(([,T])=>T!==void 0)))},e=st(e),[o,y,v,b,t,a,f,i,r]}class kt extends Ze{constructor(e){super(),xe(this,e,pn,Yn,Je,{data:0,column:5,agg:6,emptySet:1,emptyMessage:2})}}function Kn(l){let e;const n=l[6].default,t=dt(n,l,l[7],null);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,r){t&&t.m(i,r),e=!0},p(i,r){t&&t.p&&(!e||r&128)&&yt(t,n,i,i[7],e?ht(n,i[7],r,null):gt(i[7]),null)},i(i){e||(_(t,i),e=!0)},o(i){h(t,i),e=!1},d(i){t&&t.d(i)}}}function Jn(l){let e,n;const t=[l[4],{data:Ie.isQuery(l[10])?Array.from(l[10]):l[10]},{queryID:l[5]}];let i={$$slots:{default:[Kn]},$$scope:{ctx:l}};for(let r=0;r<t.length;r+=1)i=Ke(i,t[r]);return e=new gn({props:i}),{c(){D(e.$$.fragment)},l(r){P(e.$$.fragment,r)},m(r,o){I(e,r,o),n=!0},p(r,o){const a=o&1072?Rt(t,[o&16&&It(r[4]),o&1024&&{data:Ie.isQuery(r[10])?Array.from(r[10]):r[10]},o&32&&{queryID:r[5]}]):{};o&128&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){h(e.$$.fragment,r),n=!1},d(r){R(e,r)}}}function Zn(l){let e,n;return e=new Pt({props:{slot:"empty",emptyMessage:l[2],emptySet:l[1],chartType:l[4].chartType,isInitial:l[3]}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p(t,i){const r={};i&4&&(r.emptyMessage=t[2]),i&2&&(r.emptySet=t[1]),i&16&&(r.chartType=t[4].chartType),i&8&&(r.isInitial=t[3]),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function xn(l){let e,n;return e=new hn({props:{slot:"error",title:er,error:l[10].error.message}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p(t,i){const r={};i&1024&&(r.error=t[10].error.message),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function $n(l){let e,n;return e=new Et({props:{data:l[0],$$slots:{error:[xn,({loaded:t})=>({10:t}),({loaded:t})=>t?1024:0],empty:[Zn],default:[Jn,({loaded:t})=>({10:t}),({loaded:t})=>t?1024:0]},$$scope:{ctx:l}}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p(t,[i]){const r={};i&1&&(r.data=t[0]),i&1182&&(r.$$scope={dirty:i,ctx:t}),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}let er="Sparkline";function tr(l,e,n){let t,{$$slots:i={},$$scope:r}=e,{data:o}=e;const a=Ie.isQuery(o)?o.hash:void 0;let f=(o==null?void 0:o.hash)===a,{emptySet:u=void 0}=e,{emptyMessage:b=void 0}=e,y=o==null?void 0:o.id;return l.$$set=v=>{n(9,e=Ke(Ke({},e),st(v))),"data"in v&&n(0,o=v.data),"emptySet"in v&&n(1,u=v.emptySet),"emptyMessage"in v&&n(2,b=v.emptyMessage),"$$scope"in v&&n(7,r=v.$$scope)},l.$$.update=()=>{l.$$.dirty&1&&n(3,f=(o==null?void 0:o.hash)===a),n(4,t={...Object.fromEntries(Object.entries(e).filter(([,v])=>v!==void 0))})},e=st(e),[o,u,b,f,t,y,i,r]}class nr extends Ze{constructor(e){super(),xe(this,e,tr,$n,Je,{data:0,emptySet:1,emptyMessage:2})}}function rr(l){let e,n,t,i,r,o,a,f,u,b,y,v,T,F=l[23]&&Qt(l);const w=[or,ir],L=[];function N(M,A){return M[22]?0:1}a=N(l),f=L[a]=w[a](l);let U=l[8]&&Yt(l),O=l[7]&&Xt(l);return{c(){e=B("p"),n=nt(l[3]),t=E(),F&&F.c(),r=E(),o=B("div"),f.c(),u=E(),U&&U.c(),y=E(),O&&O.c(),v=Xe(),this.h()},l(M){e=W(M,"P",{class:!0});var A=Ue(e);n=tt(A,l[3]),t=q(A),F&&F.l(A),A.forEach(d),r=q(M),o=W(M,"DIV",{class:!0});var j=Ue(o);f.l(j),u=q(j),U&&U.l(j),j.forEach(d),y=q(M),O&&O.l(M),v=Xe(),this.h()},h(){C(e,"class",i=at("text-sm align-top leading-none",l[19])),C(o,"class",b=at("relative text-xl font-medium mt-1.5",l[20]))},m(M,A){k(M,e,A),Te(e,n),Te(e,t),F&&F.m(e,null),k(M,r,A),k(M,o,A),L[a].m(o,null),Te(o,u),U&&U.m(o,null),k(M,y,A),O&&O.m(M,A),k(M,v,A),T=!0},p(M,A){(!T||A&8)&&bt(n,M[3]),M[23]?F?(F.p(M,A),A&8388608&&_(F,1)):(F=Qt(M),F.c(),_(F,1),F.m(e,null)):F&&(Se(),h(F,1,1,()=>{F=null}),Ce()),(!T||A&524288&&i!==(i=at("text-sm align-top leading-none",M[19])))&&C(e,"class",i);let j=a;a=N(M),a===j?L[a].p(M,A):(Se(),h(L[j],1,1,()=>{L[j]=null}),Ce(),f=L[a],f?f.p(M,A):(f=L[a]=w[a](M),f.c()),_(f,1),f.m(o,u)),M[8]?U?(U.p(M,A),A&256&&_(U,1)):(U=Yt(M),U.c(),_(U,1),U.m(o,null)):U&&(Se(),h(U,1,1,()=>{U=null}),Ce()),(!T||A&1048576&&b!==(b=at("relative text-xl font-medium mt-1.5",M[20])))&&C(o,"class",b),M[7]?O?(O.p(M,A),A&128&&_(O,1)):(O=Xt(M),O.c(),_(O,1),O.m(v.parentNode,v)):O&&(Se(),h(O,1,1,()=>{O=null}),Ce())},i(M){T||(_(F),_(f),_(U),_(O),T=!0)},o(M){h(F),h(f),h(U),h(O),T=!1},d(M){M&&(d(e),d(r),d(o),d(y),d(v)),F&&F.d(),L[a].d(),U&&U.d(),O&&O.d(M)}}}function lr(l){let e,n;return e=new bn({props:{inputType:"BigValue",error:l[24],width:"148",height:"28"}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p(t,i){const r={};i&16777216&&(r.error=t[24]),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Qt(l){let e,n;return e=new an({props:{description:l[23],size:"3"}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p(t,i){const r={};i&8388608&&(r.description=t[23]),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function ir(l){let e,n;return e=new kt({props:{data:l[0],column:l[6],fmt:l[13]}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p(t,i){const r={};i&1&&(r.data=t[0]),i&64&&(r.column=t[6]),i&8192&&(r.fmt=t[13]),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function or(l){let e,n,t,i;return n=new kt({props:{data:l[0],column:l[6],fmt:l[13]}}),{c(){e=B("a"),D(n.$$.fragment),this.h()},l(r){e=W(r,"A",{class:!0,href:!0});var o=Ue(e);P(n.$$.fragment,o),o.forEach(d),this.h()},h(){C(e,"class","hover:bg-base-200"),C(e,"href",t=ut(l[22]))},m(r,o){k(r,e,o),I(n,e,null),i=!0},p(r,o){const a={};o&1&&(a.data=r[0]),o&64&&(a.column=r[6]),o&8192&&(a.fmt=r[13]),n.$set(a),(!i||o&4194304&&t!==(t=ut(r[22])))&&C(e,"href",t)},i(r){i||(_(n.$$.fragment,r),i=!0)},o(r){h(n.$$.fragment,r),i=!1},d(r){r&&d(e),R(n)}}}function Yt(l){let e,n;return e=new nr({props:{height:"15",data:l[0],dateCol:l[8],valueCol:l[6],type:l[9],interactive:"true",color:l[25],valueFmt:l[13]??l[10],dateFmt:l[11],yScale:l[2],connectGroup:l[12]}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p(t,i){const r={};i&1&&(r.data=t[0]),i&256&&(r.dateCol=t[8]),i&64&&(r.valueCol=t[6]),i&512&&(r.type=t[9]),i&33554432&&(r.color=t[25]),i&9216&&(r.valueFmt=t[13]??t[10]),i&2048&&(r.dateFmt=t[11]),i&4&&(r.yScale=t[2]),i&4096&&(r.connectGroup=t[12]),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Xt(l){let e,n,t,i;const r=[sr,ar],o=[];function a(f,u){return f[1]?0:1}return e=a(l),n=o[e]=r[e](l),{c(){n.c(),t=Xe()},l(f){n.l(f),t=Xe()},m(f,u){o[e].m(f,u),k(f,t,u),i=!0},p(f,u){let b=e;e=a(f),e===b?o[e].p(f,u):(Se(),h(o[b],1,1,()=>{o[b]=null}),Ce(),n=o[e],n?n.p(f,u):(n=o[e]=r[e](f),n.c()),_(n,1),n.m(t.parentNode,t))},i(f){i||(_(n),i=!0)},o(f){h(n),i=!1},d(f){f&&d(t),o[e].d(f)}}}function ar(l){let e,n,t,i,r,o,a;const f=[fr,ur],u=[];function b(y,v){return y[22]?0:1}return n=b(l),t=u[n]=f[n](l),{c(){e=B("p"),t.c(),i=E(),r=B("span"),o=nt(l[4]),this.h()},l(y){e=W(y,"P",{class:!0});var v=Ue(e);t.l(v),i=q(v),r=W(v,"SPAN",{});var T=Ue(r);o=tt(T,l[4]),T.forEach(d),v.forEach(d),this.h()},h(){C(e,"class","text-xs font-sans /60 pt-[0.5px]")},m(y,v){k(y,e,v),u[n].m(e,null),Te(e,i),Te(e,r),Te(r,o),a=!0},p(y,v){let T=n;n=b(y),n===T?u[n].p(y,v):(Se(),h(u[T],1,1,()=>{u[T]=null}),Ce(),t=u[n],t?t.p(y,v):(t=u[n]=f[n](y),t.c()),_(t,1),t.m(e,i)),(!a||v&16)&&bt(o,y[4])},i(y){a||(_(t),a=!0)},o(y){h(t),a=!1},d(y){y&&d(e),u[n].d()}}}function sr(l){let e,n,t,i;return n=new kn({props:{data:l[0],column:l[7],fmt:l[14],fontClass:"text-xs",symbolPosition:"left",neutralMin:l[15],neutralMax:l[16],text:l[4],downIsGood:l[5]}}),{c(){e=B("p"),D(n.$$.fragment),this.h()},l(r){e=W(r,"P",{class:!0});var o=Ue(e);P(n.$$.fragment,o),o.forEach(d),this.h()},h(){C(e,"class",t=at("text-xs font-sans mt-1",l[21]))},m(r,o){k(r,e,o),I(n,e,null),i=!0},p(r,o){const a={};o&1&&(a.data=r[0]),o&128&&(a.column=r[7]),o&16384&&(a.fmt=r[14]),o&32768&&(a.neutralMin=r[15]),o&65536&&(a.neutralMax=r[16]),o&16&&(a.text=r[4]),o&32&&(a.downIsGood=r[5]),n.$set(a),(!i||o&2097152&&t!==(t=at("text-xs font-sans mt-1",r[21])))&&C(e,"class",t)},i(r){i||(_(n.$$.fragment,r),i=!0)},o(r){h(n.$$.fragment,r),i=!1},d(r){r&&d(e),R(n)}}}function ur(l){let e,n;return e=new kt({props:{data:l[0],column:l[7],fmt:l[14]}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p(t,i){const r={};i&1&&(r.data=t[0]),i&128&&(r.column=t[7]),i&16384&&(r.fmt=t[14]),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function fr(l){let e,n,t,i;return n=new kt({props:{data:l[0],column:l[7],fmt:l[14]}}),{c(){e=B("a"),D(n.$$.fragment),this.h()},l(r){e=W(r,"A",{class:!0,href:!0});var o=Ue(e);P(n.$$.fragment,o),o.forEach(d),this.h()},h(){C(e,"class","hover:bg-base-200"),C(e,"href",t=ut(l[22]))},m(r,o){k(r,e,o),I(n,e,null),i=!0},p(r,o){const a={};o&1&&(a.data=r[0]),o&128&&(a.column=r[7]),o&16384&&(a.fmt=r[14]),n.$set(a),(!i||o&4194304&&t!==(t=ut(r[22])))&&C(e,"href",t)},i(r){i||(_(n.$$.fragment,r),i=!0)},o(r){h(n.$$.fragment,r),i=!1},d(r){r&&d(e),R(n)}}}function mr(l){let e,n,t,i,r;const o=[lr,rr],a=[];function f(u,b){return u[24].length>0?0:1}return n=f(l),t=a[n]=o[n](l),{c(){e=B("div"),t.c(),this.h()},l(u){e=W(u,"DIV",{class:!0,style:!0});var b=Ue(e);t.l(b),b.forEach(d),this.h()},h(){C(e,"class","inline-block font-sans pt-2 pb-3 pl-0 mr-3 items-center align-top"),C(e,"style",i=`
        min-width: ${l[18]};
        max-width: ${l[17]};
		`)},m(u,b){k(u,e,b),a[n].m(e,null),r=!0},p(u,[b]){let y=n;n=f(u),n===y?a[n].p(u,b):(Se(),h(a[y],1,1,()=>{a[y]=null}),Ce(),t=a[n],t?t.p(u,b):(t=a[n]=o[n](u),t.c()),_(t,1),t.m(e,null)),(!r||b&393216&&i!==(i=`
        min-width: ${u[18]};
        max-width: ${u[17]};
		`))&&C(e,"style",i)},i(u){r||(_(t),r=!0)},o(u){h(t),r=!1},d(u){u&&d(e),a[n].d()}}}function cr(l,e,n){let t;const{resolveColor:i}=Tt();let{data:r}=e,{value:o=null}=e,{comparison:a=null}=e,{comparisonDelta:f=!0}=e,{sparkline:u=null}=e,{sparklineType:b="line"}=e,{sparklineColor:y=void 0}=e,{sparklineValueFmt:v=void 0}=e,{sparklineDateFmt:T=void 0}=e,{sparklineYScale:F=!1}=e,{connectGroup:w=void 0}=e,{fmt:L=void 0}=e,{comparisonFmt:N=void 0}=e,{title:U=null}=e,{comparisonTitle:O=null}=e,{downIsGood:M=!1}=e,{neutralMin:A=0}=e,{neutralMax:j=0}=e,{maxWidth:K="none"}=e,{minWidth:H="18%"}=e,{titleClass:V=void 0}=e,{valueClass:de=void 0}=e,{comparisonClass:Me=void 0}=e,{link:Y=null}=e,{description:ce=void 0}=e,X=[];return l.$$set=S=>{"data"in S&&n(0,r=S.data),"value"in S&&n(6,o=S.value),"comparison"in S&&n(7,a=S.comparison),"comparisonDelta"in S&&n(1,f=S.comparisonDelta),"sparkline"in S&&n(8,u=S.sparkline),"sparklineType"in S&&n(9,b=S.sparklineType),"sparklineColor"in S&&n(26,y=S.sparklineColor),"sparklineValueFmt"in S&&n(10,v=S.sparklineValueFmt),"sparklineDateFmt"in S&&n(11,T=S.sparklineDateFmt),"sparklineYScale"in S&&n(2,F=S.sparklineYScale),"connectGroup"in S&&n(12,w=S.connectGroup),"fmt"in S&&n(13,L=S.fmt),"comparisonFmt"in S&&n(14,N=S.comparisonFmt),"title"in S&&n(3,U=S.title),"comparisonTitle"in S&&n(4,O=S.comparisonTitle),"downIsGood"in S&&n(5,M=S.downIsGood),"neutralMin"in S&&n(15,A=S.neutralMin),"neutralMax"in S&&n(16,j=S.neutralMax),"maxWidth"in S&&n(17,K=S.maxWidth),"minWidth"in S&&n(18,H=S.minWidth),"titleClass"in S&&n(19,V=S.titleClass),"valueClass"in S&&n(20,de=S.valueClass),"comparisonClass"in S&&n(21,Me=S.comparisonClass),"link"in S&&n(22,Y=S.link),"description"in S&&n(23,ce=S.description)},l.$$.update=()=>{if(l.$$.dirty&2&&n(1,f=f==="true"||f===!0),l.$$.dirty&67108864&&n(25,t=i(y)),l.$$.dirty&4&&n(2,F=F==="true"||F===!0),l.$$.dirty&32&&n(5,M=M==="true"||M===!0),l.$$.dirty&16777689)try{Array.isArray(r)||n(0,r=[r]),St(r,[o]);let S=ln(r,"array"),Q=S.find(ue=>ue.id===o);if(n(3,U=U??(Q?Q.title:null)),a!==null){St(r,[a]);let ue=S.find(Fe=>Fe.id===a);n(4,O=O??(ue?ue.title:null))}u!==null&&St(r,[u])}catch(S){if(n(24,X=[...X,S]),on)throw X}},[r,f,F,U,O,M,o,a,u,b,v,T,w,L,N,A,j,K,H,V,de,Me,Y,ce,X,t,y]}let _r=class extends Ze{constructor(e){super(),xe(this,e,cr,mr,Je,{data:0,value:6,comparison:7,comparisonDelta:1,sparkline:8,sparklineType:9,sparklineColor:26,sparklineValueFmt:10,sparklineDateFmt:11,sparklineYScale:2,connectGroup:12,fmt:13,comparisonFmt:14,title:3,comparisonTitle:4,downIsGood:5,neutralMin:15,neutralMax:16,maxWidth:17,minWidth:18,titleClass:19,valueClass:20,comparisonClass:21,link:22,description:23})}};function dr(l){let e;const n=l[6].default,t=dt(n,l,l[7],null);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,r){t&&t.m(i,r),e=!0},p(i,r){t&&t.p&&(!e||r&128)&&yt(t,n,i,i[7],e?ht(n,i[7],r,null):gt(i[7]),null)},i(i){e||(_(t,i),e=!0)},o(i){h(t,i),e=!1},d(i){t&&t.d(i)}}}function yr(l){let e,n;const t=[l[4],{data:Ie.isQuery(l[9])?Array.from(l[9]):l[9]}];let i={$$slots:{default:[dr]},$$scope:{ctx:l}};for(let r=0;r<t.length;r+=1)i=Ke(i,t[r]);return e=new _r({props:i}),{c(){D(e.$$.fragment)},l(r){P(e.$$.fragment,r)},m(r,o){I(e,r,o),n=!0},p(r,o){const a=o&528?Rt(t,[o&16&&It(r[4]),o&512&&{data:Ie.isQuery(r[9])?Array.from(r[9]):r[9]}]):{};o&128&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){h(e.$$.fragment,r),n=!1},d(r){R(e,r)}}}function gr(l){let e,n,t,i;return n=new wn({props:{error:l[9].error.message}}),{c(){e=B("div"),D(n.$$.fragment),this.h()},l(r){e=W(r,"DIV",{slot:!0,class:!0,style:!0});var o=Ue(e);P(n.$$.fragment,o),o.forEach(d),this.h()},h(){C(e,"slot","error"),C(e,"class","inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"),C(e,"style",t=`
				min-width: ${l[5].minWidth};
				max-width: ${l[5].maxWidth};
		`)},m(r,o){k(r,e,o),I(n,e,null),i=!0},p(r,o){const a={};o&512&&(a.error=r[9].error.message),n.$set(a),(!i||o&32&&t!==(t=`
				min-width: ${r[5].minWidth};
				max-width: ${r[5].maxWidth};
		`))&&C(e,"style",t)},i(r){i||(_(n.$$.fragment,r),i=!0)},o(r){h(n.$$.fragment,r),i=!1},d(r){r&&d(e),R(n)}}}function hr(l){let e,n,t,i;return n=new Pt({props:{emptyMessage:l[2],emptySet:l[1],chartType:wr,isInitial:l[3]}}),{c(){e=B("div"),D(n.$$.fragment),this.h()},l(r){e=W(r,"DIV",{slot:!0,class:!0,style:!0});var o=Ue(e);P(n.$$.fragment,o),o.forEach(d),this.h()},h(){C(e,"slot","empty"),C(e,"class","inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"),C(e,"style",t=`
				min-width: ${l[5].minWidth};
				max-width: ${l[5].maxWidth};
		`)},m(r,o){k(r,e,o),I(n,e,null),i=!0},p(r,o){const a={};o&4&&(a.emptyMessage=r[2]),o&2&&(a.emptySet=r[1]),o&8&&(a.isInitial=r[3]),n.$set(a),(!i||o&32&&t!==(t=`
				min-width: ${r[5].minWidth};
				max-width: ${r[5].maxWidth};
		`))&&C(e,"style",t)},i(r){i||(_(n.$$.fragment,r),i=!0)},o(r){h(n.$$.fragment,r),i=!1},d(r){r&&d(e),R(n)}}}function br(l){let e,n,t=(l[5].title??" ")+"",i,r,o,a,f;return o=new kt({props:{column:l[5].value,fmt:l[5].fmt,data:l[9]}}),{c(){e=B("div"),n=B("p"),i=nt(t),r=E(),D(o.$$.fragment),this.h()},l(u){e=W(u,"DIV",{class:!0,style:!0,slot:!0});var b=Ue(e);n=W(b,"P",{class:!0});var y=Ue(n);i=tt(y,t),y.forEach(d),r=q(b),P(o.$$.fragment,b),b.forEach(d),this.h()},h(){C(n,"class","text-sm"),C(e,"class","inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"),C(e,"style",a=`
			min-width: ${l[5].minWidth};
			max-width: ${l[5].maxWidth};
		`),C(e,"slot","skeleton")},m(u,b){k(u,e,b),Te(e,n),Te(n,i),Te(e,r),I(o,e,null),f=!0},p(u,b){(!f||b&32)&&t!==(t=(u[5].title??" ")+"")&&bt(i,t);const y={};b&32&&(y.column=u[5].value),b&32&&(y.fmt=u[5].fmt),b&512&&(y.data=u[9]),o.$set(y),(!f||b&32&&a!==(a=`
			min-width: ${u[5].minWidth};
			max-width: ${u[5].maxWidth};
		`))&&C(e,"style",a)},i(u){f||(_(o.$$.fragment,u),f=!0)},o(u){h(o.$$.fragment,u),f=!1},d(u){u&&d(e),R(o)}}}function kr(l){let e,n;return e=new Et({props:{data:l[0],$$slots:{skeleton:[br,({loaded:t})=>({9:t}),({loaded:t})=>t?512:0],empty:[hr],error:[gr,({loaded:t})=>({9:t}),({loaded:t})=>t?512:0],default:[yr,({loaded:t})=>({9:t}),({loaded:t})=>t?512:0]},$$scope:{ctx:l}}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p(t,[i]){const r={};i&1&&(r.data=t[0]),i&702&&(r.$$scope={dirty:i,ctx:t}),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}let wr="Big Value";function vr(l,e,n){let t,{$$slots:i={},$$scope:r}=e,{data:o}=e;const a=Ie.isQuery(o)?o.hash:void 0;let f=(o==null?void 0:o.hash)===a,{emptySet:u=void 0}=e,{emptyMessage:b=void 0}=e;return l.$$set=y=>{n(5,e=Ke(Ke({},e),st(y))),"data"in y&&n(0,o=y.data),"emptySet"in y&&n(1,u=y.emptySet),"emptyMessage"in y&&n(2,b=y.emptyMessage),"$$scope"in y&&n(7,r=y.$$scope)},l.$$.update=()=>{l.$$.dirty&1&&n(3,f=(o==null?void 0:o.hash)===a),n(4,t=Object.fromEntries(Object.entries(e).filter(([,y])=>y!==void 0)))},e=st(e),[o,u,b,f,t,e,i,r]}class rt extends Ze{constructor(e){super(),xe(this,e,vr,kr,Je,{data:0,emptySet:1,emptyMessage:2})}}function Sr(l,e,n){let t,i,r,o,a,f,u,b,y,v,T,F,w,L,N,U,O=Ne,M=()=>(O(),O=At(t,g=>n(44,U=g)),t),A,j=Ne,K=()=>(j(),j=At(i,g=>n(45,A=g)),i),H;l.$$.on_destroy.push(()=>O()),l.$$.on_destroy.push(()=>j());let V=jt(vn);Lt(l,V,g=>n(46,H=g));let de=jt(Sn);const{resolveColor:Me}=Tt();let{y:Y=void 0}=e;const ce=!!Y;let{y2:X=void 0}=e;const S=!!X;let{series:Q=void 0}=e;const ue=!!Q;let{options:Fe=void 0}=e,{name:Ae=void 0}=e,{lineColor:be=void 0}=e,{lineWidth:J=2}=e,{lineType:We="solid"}=e,{lineOpacity:je=void 0}=e,{markers:ye=!1}=e,{markerShape:ke="circle"}=e,{markerSize:we=8}=e,{labels:p=!1}=e,{labelSize:Pe=11}=e,{labelPosition:te="top"}=e,{labelColor:ze=void 0}=e,{labelFmt:He=void 0}=e,fe;He&&(fe=Ct(He));let{yLabelFmt:Z=void 0}=e,Le;Z&&(Le=Ct(Z));let{y2LabelFmt:qe=void 0}=e,ve;qe&&(ve=Ct(qe));let{y2SeriesType:Ge=void 0}=e,{showAllLabels:me=!1}=e,{handleMissing:ge="gap"}=e,{step:x=!1}=e,{stepPosition:Ve="end"}=e,{seriesOrder:Be=void 0}=e,{seriesLabelFmt:De=void 0}=e;const _e={above:"top",below:"bottom",middle:"inside"},Oe={above:"right",below:"left",middle:"inside"};let he=a?"right":"top";return un(()=>{de.update(g=>{if(a)g.yAxis={...g.yAxis,...N.xAxis},g.xAxis={...g.xAxis,...N.yAxis};else if(g.yAxis[0]={...g.yAxis[0],...N.yAxis},g.xAxis={...g.xAxis,...N.xAxis},X&&(g.yAxis[1]={...g.yAxis[1],show:!0},["line","bar","scatter"].includes(Ge)))for(let Ee=0;Ee<y;Ee++)g.series[b+Ee].type=Ge;return p&&(g.axisPointer={triggerEmphasis:!1}),g})}),l.$$set=g=>{"y"in g&&n(3,Y=g.y),"y2"in g&&n(4,X=g.y2),"series"in g&&n(5,Q=g.series),"options"in g&&n(12,Fe=g.options),"name"in g&&n(6,Ae=g.name),"lineColor"in g&&n(13,be=g.lineColor),"lineWidth"in g&&n(14,J=g.lineWidth),"lineType"in g&&n(15,We=g.lineType),"lineOpacity"in g&&n(16,je=g.lineOpacity),"markers"in g&&n(7,ye=g.markers),"markerShape"in g&&n(17,ke=g.markerShape),"markerSize"in g&&n(18,we=g.markerSize),"labels"in g&&n(8,p=g.labels),"labelSize"in g&&n(19,Pe=g.labelSize),"labelPosition"in g&&n(9,te=g.labelPosition),"labelColor"in g&&n(20,ze=g.labelColor),"labelFmt"in g&&n(21,He=g.labelFmt),"yLabelFmt"in g&&n(22,Z=g.yLabelFmt),"y2LabelFmt"in g&&n(23,qe=g.y2LabelFmt),"y2SeriesType"in g&&n(24,Ge=g.y2SeriesType),"showAllLabels"in g&&n(10,me=g.showAllLabels),"handleMissing"in g&&n(25,ge=g.handleMissing),"step"in g&&n(11,x=g.step),"stepPosition"in g&&n(26,Ve=g.stepPosition),"seriesOrder"in g&&n(27,Be=g.seriesOrder),"seriesLabelFmt"in g&&n(28,De=g.seriesLabelFmt)},l.$$.update=()=>{if(l.$$.dirty[0]&8192&&M(n(1,t=Me(be))),l.$$.dirty[0]&128&&n(7,ye=wt(ye)),l.$$.dirty[0]&256&&n(8,p=wt(p)),l.$$.dirty[0]&1048576&&K(n(0,i=Me(ze))),l.$$.dirty[0]&1024&&n(10,me=wt(me)),l.$$.dirty[0]&2048&&n(11,x=wt(x)),l.$$.dirty[1]&32768&&n(41,r=H.data),l.$$.dirty[1]&32768&&n(40,o=H.x),l.$$.dirty[0]&8|l.$$.dirty[1]&32768&&n(3,Y=ce?Y:H.y),l.$$.dirty[0]&16|l.$$.dirty[1]&32768&&n(4,X=S?X:H.y2),l.$$.dirty[1]&32768&&n(34,a=H.swapXY),l.$$.dirty[1]&32768&&n(43,f=H.yFormat),l.$$.dirty[1]&32768&&n(42,u=H.y2Format),l.$$.dirty[1]&32768&&n(32,b=H.yCount),l.$$.dirty[1]&32768&&n(33,y=H.y2Count),l.$$.dirty[1]&32768&&n(35,v=H.xType),l.$$.dirty[1]&32768&&n(38,T=H.xMismatch),l.$$.dirty[1]&32768&&n(37,F=H.columnSummary),l.$$.dirty[0]&32|l.$$.dirty[1]&32768&&n(5,Q=ue?Q:H.series),l.$$.dirty[0]&104|l.$$.dirty[1]&1600)if(!Q&&typeof Y!="object")n(6,Ae=Ae??Cn(Y,F[Y].title));else try{n(41,r=Wt(r,o,Y,Q))}catch(g){console.warn("Failed to complete data",{e:g}),n(41,r=[])}if(l.$$.dirty[0]&33554472|l.$$.dirty[1]&1536&&ge==="zero")try{n(41,r=Wt(r,o,Y,Q,!0))}catch(g){console.warn("Failed to complete data",{e:g}),n(41,r=[])}l.$$.dirty[0]&512|l.$$.dirty[1]&8&&n(9,te=(a?Oe[te]:_e[te])??he),l.$$.dirty[0]&1712312192|l.$$.dirty[1]&30735&&n(39,w={type:"line",label:{show:p,formatter(g){return g.value[a?0:1]===0?"":qt(g.value[a?0:1],[Le??fe??f,ve??fe??u][En(g.componentIndex,b,y)])},fontSize:Pe,color:A,position:te,padding:3},labelLayout:{hideOverlap:!me},connectNulls:ge==="connect",emphasis:{focus:"series",endLabel:{show:!1},lineStyle:{opacity:1,width:3}},lineStyle:{width:parseInt(J),type:We,opacity:je},itemStyle:{color:U,opacity:je},showSymbol:p||ye,symbol:ke,symbolSize:p&&!ye?0:we,step:x?Ve:!1}),l.$$.dirty[0]&402653304|l.$$.dirty[1]&1992&&n(36,L=Rn(r,o,Y,Q,a,w,Ae,T,F,Be,void 0,void 0,X,De)),l.$$.dirty[1]&32&&de.update(g=>(g.series.push(...L),g.legend.data.push(...L.map(Ee=>Ee.name.toString())),g)),l.$$.dirty[0]&4096&&Fe&&de.update(g=>({...g,...Fe})),l.$$.dirty[1]&16&&(N={yAxis:{boundaryGap:["0%","1%"]},xAxis:{boundaryGap:[v==="time"?"2%":"0%","2%"]}})},[i,t,V,Y,X,Q,Ae,ye,p,te,me,x,Fe,be,J,We,je,ke,we,Pe,ze,He,Z,qe,Ge,ge,Ve,Be,De,fe,Le,ve,b,y,a,v,L,F,T,w,o,r,u,f,U,A,H]}class Cr extends Ze{constructor(e){super(),xe(this,e,Sr,null,Je,{y:3,y2:4,series:5,options:12,name:6,lineColor:13,lineWidth:14,lineType:15,lineOpacity:16,markers:7,markerShape:17,markerSize:18,labels:8,labelSize:19,labelPosition:9,labelColor:20,labelFmt:21,yLabelFmt:22,y2LabelFmt:23,y2SeriesType:24,showAllLabels:10,handleMissing:25,step:11,stepPosition:26,seriesOrder:27,seriesLabelFmt:28},null,[-1,-1])}}function Tr(l){let e,n,t;e=new Cr({props:{lineColor:l[73],lineWidth:l[38],lineOpacity:l[37],lineType:l[36],markers:l[40],markerShape:l[41],markerSize:l[42],handleMissing:l[43],step:l[44],stepPosition:l[45],labels:l[47],labelSize:l[48],labelPosition:l[49],labelColor:l[71],labelFmt:l[50],yLabelFmt:l[51],y2LabelFmt:l[52],showAllLabels:l[53],y2SeriesType:l[8],seriesOrder:l[62],seriesLabelFmt:l[64]}});const i=l[80].default,r=dt(i,l,l[81],null);return{c(){D(e.$$.fragment),n=E(),r&&r.c()},l(o){P(e.$$.fragment,o),n=q(o),r&&r.l(o)},m(o,a){I(e,o,a),k(o,n,a),r&&r.m(o,a),t=!0},p(o,a){const f={};a[2]&2048&&(f.lineColor=o[73]),a[1]&128&&(f.lineWidth=o[38]),a[1]&64&&(f.lineOpacity=o[37]),a[1]&32&&(f.lineType=o[36]),a[1]&512&&(f.markers=o[40]),a[1]&1024&&(f.markerShape=o[41]),a[1]&2048&&(f.markerSize=o[42]),a[1]&4096&&(f.handleMissing=o[43]),a[1]&8192&&(f.step=o[44]),a[1]&16384&&(f.stepPosition=o[45]),a[1]&65536&&(f.labels=o[47]),a[1]&131072&&(f.labelSize=o[48]),a[1]&262144&&(f.labelPosition=o[49]),a[2]&512&&(f.labelColor=o[71]),a[1]&524288&&(f.labelFmt=o[50]),a[1]&1048576&&(f.yLabelFmt=o[51]),a[1]&2097152&&(f.y2LabelFmt=o[52]),a[1]&4194304&&(f.showAllLabels=o[53]),a[0]&256&&(f.y2SeriesType=o[8]),a[2]&1&&(f.seriesOrder=o[62]),a[2]&4&&(f.seriesLabelFmt=o[64]),e.$set(f),r&&r.p&&(!t||a[2]&524288)&&yt(r,i,o,o[81],t?ht(i,o[81],a,null):gt(o[81]),null)},i(o){t||(_(e.$$.fragment,o),_(r,o),t=!0)},o(o){h(e.$$.fragment,o),h(r,o),t=!1},d(o){o&&d(n),R(e,o),r&&r.d(o)}}}function Mr(l){let e,n;return e=new In({props:{data:l[0],x:l[1],y:l[2],y2:l[3],xFmt:l[10],yFmt:l[9],y2Fmt:l[11],series:l[4],xType:l[5],yLog:l[6],yLogBase:l[7],legend:l[14],xAxisTitle:l[15],yAxisTitle:l[16],y2AxisTitle:l[17],xGridlines:l[18],yGridlines:l[19],y2Gridlines:l[20],xAxisLabels:l[21],yAxisLabels:l[22],y2AxisLabels:l[23],xBaseline:l[24],yBaseline:l[25],y2Baseline:l[26],xTickMarks:l[27],yTickMarks:l[28],y2TickMarks:l[29],yAxisColor:l[70],y2AxisColor:l[69],yMin:l[30],yMax:l[31],yScale:l[32],y2Min:l[33],y2Max:l[34],y2Scale:l[35],title:l[12],subtitle:l[13],chartType:"Line Chart",sort:l[46],chartAreaHeight:l[39],colorPalette:l[72],echartsOptions:l[54],seriesOptions:l[55],printEchartsConfig:l[56],emptySet:l[57],emptyMessage:l[58],renderer:l[59],downloadableData:l[60],downloadableImage:l[61],connectGroup:l[63],seriesColors:l[68],leftPadding:l[65],rightPadding:l[66],xLabelWrap:l[67],$$slots:{default:[Tr]},$$scope:{ctx:l}}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p(t,i){const r={};i[0]&1&&(r.data=t[0]),i[0]&2&&(r.x=t[1]),i[0]&4&&(r.y=t[2]),i[0]&8&&(r.y2=t[3]),i[0]&1024&&(r.xFmt=t[10]),i[0]&512&&(r.yFmt=t[9]),i[0]&2048&&(r.y2Fmt=t[11]),i[0]&16&&(r.series=t[4]),i[0]&32&&(r.xType=t[5]),i[0]&64&&(r.yLog=t[6]),i[0]&128&&(r.yLogBase=t[7]),i[0]&16384&&(r.legend=t[14]),i[0]&32768&&(r.xAxisTitle=t[15]),i[0]&65536&&(r.yAxisTitle=t[16]),i[0]&131072&&(r.y2AxisTitle=t[17]),i[0]&262144&&(r.xGridlines=t[18]),i[0]&524288&&(r.yGridlines=t[19]),i[0]&1048576&&(r.y2Gridlines=t[20]),i[0]&2097152&&(r.xAxisLabels=t[21]),i[0]&4194304&&(r.yAxisLabels=t[22]),i[0]&8388608&&(r.y2AxisLabels=t[23]),i[0]&16777216&&(r.xBaseline=t[24]),i[0]&33554432&&(r.yBaseline=t[25]),i[0]&67108864&&(r.y2Baseline=t[26]),i[0]&134217728&&(r.xTickMarks=t[27]),i[0]&268435456&&(r.yTickMarks=t[28]),i[0]&536870912&&(r.y2TickMarks=t[29]),i[2]&256&&(r.yAxisColor=t[70]),i[2]&128&&(r.y2AxisColor=t[69]),i[0]&1073741824&&(r.yMin=t[30]),i[1]&1&&(r.yMax=t[31]),i[1]&2&&(r.yScale=t[32]),i[1]&4&&(r.y2Min=t[33]),i[1]&8&&(r.y2Max=t[34]),i[1]&16&&(r.y2Scale=t[35]),i[0]&4096&&(r.title=t[12]),i[0]&8192&&(r.subtitle=t[13]),i[1]&32768&&(r.sort=t[46]),i[1]&256&&(r.chartAreaHeight=t[39]),i[2]&1024&&(r.colorPalette=t[72]),i[1]&8388608&&(r.echartsOptions=t[54]),i[1]&16777216&&(r.seriesOptions=t[55]),i[1]&33554432&&(r.printEchartsConfig=t[56]),i[1]&67108864&&(r.emptySet=t[57]),i[1]&134217728&&(r.emptyMessage=t[58]),i[1]&268435456&&(r.renderer=t[59]),i[1]&536870912&&(r.downloadableData=t[60]),i[1]&1073741824&&(r.downloadableImage=t[61]),i[2]&2&&(r.connectGroup=t[63]),i[2]&64&&(r.seriesColors=t[68]),i[2]&8&&(r.leftPadding=t[65]),i[2]&16&&(r.rightPadding=t[66]),i[2]&32&&(r.xLabelWrap=t[67]),i[0]&256|i[1]&8355552|i[2]&526853&&(r.$$scope={dirty:i,ctx:t}),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Fr(l,e,n){let t,i,r,o,a,f,{$$slots:u={},$$scope:b}=e;const{resolveColor:y,resolveColorsObject:v,resolveColorPalette:T}=Tt();let{data:F=void 0}=e,{x:w=void 0}=e,{y:L=void 0}=e,{y2:N=void 0}=e,{series:U=void 0}=e,{xType:O=void 0}=e,{yLog:M=void 0}=e,{yLogBase:A=void 0}=e,{y2SeriesType:j=void 0}=e,{yFmt:K=void 0}=e,{xFmt:H=void 0}=e,{y2Fmt:V=void 0}=e,{title:de=void 0}=e,{subtitle:Me=void 0}=e,{legend:Y=void 0}=e,{xAxisTitle:ce=void 0}=e,{yAxisTitle:X=N?"true":void 0}=e,{y2AxisTitle:S=N?"true":void 0}=e,{xGridlines:Q=void 0}=e,{yGridlines:ue=void 0}=e,{y2Gridlines:Fe=void 0}=e,{xAxisLabels:Ae=void 0}=e,{yAxisLabels:be=void 0}=e,{y2AxisLabels:J=void 0}=e,{xBaseline:We=void 0}=e,{yBaseline:je=void 0}=e,{y2Baseline:ye=void 0}=e,{xTickMarks:ke=void 0}=e,{yTickMarks:we=void 0}=e,{y2TickMarks:p=void 0}=e,{yMin:Pe=void 0}=e,{yMax:te=void 0}=e,{yScale:ze=void 0}=e,{y2Min:He=void 0}=e,{y2Max:fe=void 0}=e,{y2Scale:Z=void 0}=e,{lineColor:Le=void 0}=e,{lineType:qe=void 0}=e,{lineOpacity:ve=void 0}=e,{lineWidth:Ge=void 0}=e,{chartAreaHeight:me=void 0}=e,{markers:ge=void 0}=e,{markerShape:x=void 0}=e,{markerSize:Ve=void 0}=e,{handleMissing:Be=void 0}=e,{step:De=void 0}=e,{stepPosition:_e=void 0}=e,{sort:Oe=void 0}=e,{colorPalette:he="default"}=e,{labels:g=void 0}=e,{labelSize:Ee=void 0}=e,{labelPosition:Ye=void 0}=e,{labelColor:G=void 0}=e,{labelFmt:lt=void 0}=e,{yLabelFmt:Mt=void 0}=e,{y2LabelFmt:et=void 0}=e,{showAllLabels:Qe=void 0}=e,{yAxisColor:$=void 0}=e,{y2AxisColor:ee=void 0}=e,{echartsOptions:ne=void 0}=e,{seriesOptions:re=void 0}=e,{printEchartsConfig:le=!1}=e,{emptySet:ie=void 0}=e,{emptyMessage:oe=void 0}=e,{renderer:ae=void 0}=e,{downloadableData:se=void 0}=e,{downloadableImage:s=void 0}=e,{seriesColors:c=void 0}=e,{seriesOrder:it=void 0}=e,{connectGroup:ot=void 0}=e,{seriesLabelFmt:ft=void 0}=e,{leftPadding:mt=void 0}=e,{rightPadding:ct=void 0}=e,{xLabelWrap:_t=void 0}=e;return l.$$set=m=>{"data"in m&&n(0,F=m.data),"x"in m&&n(1,w=m.x),"y"in m&&n(2,L=m.y),"y2"in m&&n(3,N=m.y2),"series"in m&&n(4,U=m.series),"xType"in m&&n(5,O=m.xType),"yLog"in m&&n(6,M=m.yLog),"yLogBase"in m&&n(7,A=m.yLogBase),"y2SeriesType"in m&&n(8,j=m.y2SeriesType),"yFmt"in m&&n(9,K=m.yFmt),"xFmt"in m&&n(10,H=m.xFmt),"y2Fmt"in m&&n(11,V=m.y2Fmt),"title"in m&&n(12,de=m.title),"subtitle"in m&&n(13,Me=m.subtitle),"legend"in m&&n(14,Y=m.legend),"xAxisTitle"in m&&n(15,ce=m.xAxisTitle),"yAxisTitle"in m&&n(16,X=m.yAxisTitle),"y2AxisTitle"in m&&n(17,S=m.y2AxisTitle),"xGridlines"in m&&n(18,Q=m.xGridlines),"yGridlines"in m&&n(19,ue=m.yGridlines),"y2Gridlines"in m&&n(20,Fe=m.y2Gridlines),"xAxisLabels"in m&&n(21,Ae=m.xAxisLabels),"yAxisLabels"in m&&n(22,be=m.yAxisLabels),"y2AxisLabels"in m&&n(23,J=m.y2AxisLabels),"xBaseline"in m&&n(24,We=m.xBaseline),"yBaseline"in m&&n(25,je=m.yBaseline),"y2Baseline"in m&&n(26,ye=m.y2Baseline),"xTickMarks"in m&&n(27,ke=m.xTickMarks),"yTickMarks"in m&&n(28,we=m.yTickMarks),"y2TickMarks"in m&&n(29,p=m.y2TickMarks),"yMin"in m&&n(30,Pe=m.yMin),"yMax"in m&&n(31,te=m.yMax),"yScale"in m&&n(32,ze=m.yScale),"y2Min"in m&&n(33,He=m.y2Min),"y2Max"in m&&n(34,fe=m.y2Max),"y2Scale"in m&&n(35,Z=m.y2Scale),"lineColor"in m&&n(74,Le=m.lineColor),"lineType"in m&&n(36,qe=m.lineType),"lineOpacity"in m&&n(37,ve=m.lineOpacity),"lineWidth"in m&&n(38,Ge=m.lineWidth),"chartAreaHeight"in m&&n(39,me=m.chartAreaHeight),"markers"in m&&n(40,ge=m.markers),"markerShape"in m&&n(41,x=m.markerShape),"markerSize"in m&&n(42,Ve=m.markerSize),"handleMissing"in m&&n(43,Be=m.handleMissing),"step"in m&&n(44,De=m.step),"stepPosition"in m&&n(45,_e=m.stepPosition),"sort"in m&&n(46,Oe=m.sort),"colorPalette"in m&&n(75,he=m.colorPalette),"labels"in m&&n(47,g=m.labels),"labelSize"in m&&n(48,Ee=m.labelSize),"labelPosition"in m&&n(49,Ye=m.labelPosition),"labelColor"in m&&n(76,G=m.labelColor),"labelFmt"in m&&n(50,lt=m.labelFmt),"yLabelFmt"in m&&n(51,Mt=m.yLabelFmt),"y2LabelFmt"in m&&n(52,et=m.y2LabelFmt),"showAllLabels"in m&&n(53,Qe=m.showAllLabels),"yAxisColor"in m&&n(77,$=m.yAxisColor),"y2AxisColor"in m&&n(78,ee=m.y2AxisColor),"echartsOptions"in m&&n(54,ne=m.echartsOptions),"seriesOptions"in m&&n(55,re=m.seriesOptions),"printEchartsConfig"in m&&n(56,le=m.printEchartsConfig),"emptySet"in m&&n(57,ie=m.emptySet),"emptyMessage"in m&&n(58,oe=m.emptyMessage),"renderer"in m&&n(59,ae=m.renderer),"downloadableData"in m&&n(60,se=m.downloadableData),"downloadableImage"in m&&n(61,s=m.downloadableImage),"seriesColors"in m&&n(79,c=m.seriesColors),"seriesOrder"in m&&n(62,it=m.seriesOrder),"connectGroup"in m&&n(63,ot=m.connectGroup),"seriesLabelFmt"in m&&n(64,ft=m.seriesLabelFmt),"leftPadding"in m&&n(65,mt=m.leftPadding),"rightPadding"in m&&n(66,ct=m.rightPadding),"xLabelWrap"in m&&n(67,_t=m.xLabelWrap),"$$scope"in m&&n(81,b=m.$$scope)},l.$$.update=()=>{l.$$.dirty[2]&4096&&n(73,t=y(Le)),l.$$.dirty[2]&8192&&n(72,i=T(he)),l.$$.dirty[2]&16384&&n(71,r=y(G)),l.$$.dirty[2]&32768&&n(70,o=y($)),l.$$.dirty[2]&65536&&n(69,a=y(ee)),l.$$.dirty[2]&131072&&n(68,f=v(c))},[F,w,L,N,U,O,M,A,j,K,H,V,de,Me,Y,ce,X,S,Q,ue,Fe,Ae,be,J,We,je,ye,ke,we,p,Pe,te,ze,He,fe,Z,qe,ve,Ge,me,ge,x,Ve,Be,De,_e,Oe,g,Ee,Ye,lt,Mt,et,Qe,ne,re,le,ie,oe,ae,se,s,it,ot,ft,mt,ct,_t,f,a,o,r,i,t,Le,he,G,$,ee,c,u,b]}class vt extends Ze{constructor(e){super(),xe(this,e,Fr,Mr,Je,{data:0,x:1,y:2,y2:3,series:4,xType:5,yLog:6,yLogBase:7,y2SeriesType:8,yFmt:9,xFmt:10,y2Fmt:11,title:12,subtitle:13,legend:14,xAxisTitle:15,yAxisTitle:16,y2AxisTitle:17,xGridlines:18,yGridlines:19,y2Gridlines:20,xAxisLabels:21,yAxisLabels:22,y2AxisLabels:23,xBaseline:24,yBaseline:25,y2Baseline:26,xTickMarks:27,yTickMarks:28,y2TickMarks:29,yMin:30,yMax:31,yScale:32,y2Min:33,y2Max:34,y2Scale:35,lineColor:74,lineType:36,lineOpacity:37,lineWidth:38,chartAreaHeight:39,markers:40,markerShape:41,markerSize:42,handleMissing:43,step:44,stepPosition:45,sort:46,colorPalette:75,labels:47,labelSize:48,labelPosition:49,labelColor:76,labelFmt:50,yLabelFmt:51,y2LabelFmt:52,showAllLabels:53,yAxisColor:77,y2AxisColor:78,echartsOptions:54,seriesOptions:55,printEchartsConfig:56,emptySet:57,emptyMessage:58,renderer:59,downloadableData:60,downloadableImage:61,seriesColors:79,seriesOrder:62,connectGroup:63,seriesLabelFmt:64,leftPadding:65,rightPadding:66,xLabelWrap:67},null,[-1,-1,-1])}}function Ar(l){let e,n=z.title+"",t;return{c(){e=B("h1"),t=nt(n),this.h()},l(i){e=W(i,"H1",{class:!0});var r=Ue(e);t=tt(r,n),r.forEach(d),this.h()},h(){C(e,"class","title")},m(i,r){k(i,e,r),Te(e,t)},p:Ne,d(i){i&&d(e)}}}function Lr(l){return{c(){this.h()},l(e){this.h()},h(){document.title="Evidence"},m:Ne,p:Ne,d:Ne}}function qr(l){let e,n,t,i,r;return document.title=e=z.title,{c(){n=E(),t=B("meta"),i=E(),r=B("meta"),this.h()},l(o){n=q(o),t=W(o,"META",{property:!0,content:!0}),i=q(o),r=W(o,"META",{name:!0,content:!0}),this.h()},h(){var o,a;C(t,"property","og:title"),C(t,"content",((o=z.og)==null?void 0:o.title)??z.title),C(r,"name","twitter:title"),C(r,"content",((a=z.og)==null?void 0:a.title)??z.title)},m(o,a){k(o,n,a),k(o,t,a),k(o,i,a),k(o,r,a)},p(o,a){a&0&&e!==(e=z.title)&&(document.title=e)},d(o){o&&(d(n),d(t),d(i),d(r))}}}function Er(l){var r,o;let e,n,t=(z.description||((r=z.og)==null?void 0:r.description))&&Rr(),i=((o=z.og)==null?void 0:o.image)&&Ir();return{c(){t&&t.c(),e=E(),i&&i.c(),n=Xe()},l(a){t&&t.l(a),e=q(a),i&&i.l(a),n=Xe()},m(a,f){t&&t.m(a,f),k(a,e,f),i&&i.m(a,f),k(a,n,f)},p(a,f){var u,b;(z.description||(u=z.og)!=null&&u.description)&&t.p(a,f),(b=z.og)!=null&&b.image&&i.p(a,f)},d(a){a&&(d(e),d(n)),t&&t.d(a),i&&i.d(a)}}}function Rr(l){let e,n,t,i,r;return{c(){e=B("meta"),n=E(),t=B("meta"),i=E(),r=B("meta"),this.h()},l(o){e=W(o,"META",{name:!0,content:!0}),n=q(o),t=W(o,"META",{property:!0,content:!0}),i=q(o),r=W(o,"META",{name:!0,content:!0}),this.h()},h(){var o,a,f;C(e,"name","description"),C(e,"content",z.description??((o=z.og)==null?void 0:o.description)),C(t,"property","og:description"),C(t,"content",((a=z.og)==null?void 0:a.description)??z.description),C(r,"name","twitter:description"),C(r,"content",((f=z.og)==null?void 0:f.description)??z.description)},m(o,a){k(o,e,a),k(o,n,a),k(o,t,a),k(o,i,a),k(o,r,a)},p:Ne,d(o){o&&(d(e),d(n),d(t),d(i),d(r))}}}function Ir(l){let e,n,t;return{c(){e=B("meta"),n=E(),t=B("meta"),this.h()},l(i){e=W(i,"META",{property:!0,content:!0}),n=q(i),t=W(i,"META",{name:!0,content:!0}),this.h()},h(){var i,r;C(e,"property","og:image"),C(e,"content",ut((i=z.og)==null?void 0:i.image)),C(t,"name","twitter:image"),C(t,"content",ut((r=z.og)==null?void 0:r.image))},m(i,r){k(i,e,r),k(i,n,r),k(i,t,r)},p:Ne,d(i){i&&(d(e),d(n),d(t))}}}function pt(l){let e,n;return e=new $e({props:{queryID:"filters",queryResult:l[0]}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p(t,i){const r={};i[0]&1&&(r.queryResult=t[0]),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Kt(l){let e,n;return e=new $e({props:{queryID:"countries",queryResult:l[1]}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p(t,i){const r={};i[0]&2&&(r.queryResult=t[1]),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Pr(l){let e,n;return e=new sn({props:{value:"%",valueLabel:"All Countries"}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p:Ne,i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Jt(l){let e,n;return e=new $e({props:{queryID:"years",queryResult:l[2]}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p(t,i){const r={};i[0]&4&&(r.queryResult=t[2]),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Dr(l){let e,n;return e=new sn({props:{value:"%",valueLabel:"All Years"}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p:Ne,i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Zt(l){let e,n;return e=new $e({props:{queryID:"kpis",queryResult:l[3]}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p(t,i){const r={};i[0]&8&&(r.queryResult=t[3]),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Or(l){let e,n,t,i,r,o,a,f,u,b,y,v,T,F;return e=new rt({props:{data:l[3],value:"revenue",fmt:"usd0",title:"Total Revenue"}}),t=new rt({props:{data:l[3],value:"orders",fmt:"num0",title:"Orders"}}),r=new rt({props:{data:l[3],value:"aov",fmt:"usd2",title:"AOV"}}),a=new rt({props:{data:l[3],value:"units",fmt:"num0",title:"Units Sold"}}),u=new rt({props:{data:l[3],value:"unique_customers",fmt:"num0",title:"Unique Customers"}}),y=new rt({props:{data:l[3],value:"items_per_order",fmt:"num2",title:"Avg Items / Order"}}),T=new rt({props:{data:l[3],value:"revenue_per_customer",fmt:"usd2",title:"Revenue / Customer"}}),{c(){D(e.$$.fragment),n=E(),D(t.$$.fragment),i=E(),D(r.$$.fragment),o=E(),D(a.$$.fragment),f=E(),D(u.$$.fragment),b=E(),D(y.$$.fragment),v=E(),D(T.$$.fragment)},l(w){P(e.$$.fragment,w),n=q(w),P(t.$$.fragment,w),i=q(w),P(r.$$.fragment,w),o=q(w),P(a.$$.fragment,w),f=q(w),P(u.$$.fragment,w),b=q(w),P(y.$$.fragment,w),v=q(w),P(T.$$.fragment,w)},m(w,L){I(e,w,L),k(w,n,L),I(t,w,L),k(w,i,L),I(r,w,L),k(w,o,L),I(a,w,L),k(w,f,L),I(u,w,L),k(w,b,L),I(y,w,L),k(w,v,L),I(T,w,L),F=!0},p(w,L){const N={};L[0]&8&&(N.data=w[3]),e.$set(N);const U={};L[0]&8&&(U.data=w[3]),t.$set(U);const O={};L[0]&8&&(O.data=w[3]),r.$set(O);const M={};L[0]&8&&(M.data=w[3]),a.$set(M);const A={};L[0]&8&&(A.data=w[3]),u.$set(A);const j={};L[0]&8&&(j.data=w[3]),y.$set(j);const K={};L[0]&8&&(K.data=w[3]),T.$set(K)},i(w){F||(_(e.$$.fragment,w),_(t.$$.fragment,w),_(r.$$.fragment,w),_(a.$$.fragment,w),_(u.$$.fragment,w),_(y.$$.fragment,w),_(T.$$.fragment,w),F=!0)},o(w){h(e.$$.fragment,w),h(t.$$.fragment,w),h(r.$$.fragment,w),h(a.$$.fragment,w),h(u.$$.fragment,w),h(y.$$.fragment,w),h(T.$$.fragment,w),F=!1},d(w){w&&(d(n),d(i),d(o),d(f),d(b),d(v)),R(e,w),R(t,w),R(r,w),R(a,w),R(u,w),R(y,w),R(T,w)}}}function xt(l){let e,n;return e=new $e({props:{queryID:"monthly",queryResult:l[4]}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p(t,i){const r={};i[0]&16&&(r.queryResult=t[4]),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Ur(l){let e,n,t,i,r,o,a,f;return e=new vt({props:{data:l[4],title:"Revenue",x:"month",y:"revenue"}}),t=new vt({props:{data:l[4],title:"Orders",x:"month",y:"orders"}}),r=new vt({props:{data:l[4],title:"AOV",x:"month",y:"aov"}}),a=new vt({props:{data:l[4],title:"Unique Customers",x:"month",y:"unique_customers"}}),{c(){D(e.$$.fragment),n=E(),D(t.$$.fragment),i=E(),D(r.$$.fragment),o=E(),D(a.$$.fragment)},l(u){P(e.$$.fragment,u),n=q(u),P(t.$$.fragment,u),i=q(u),P(r.$$.fragment,u),o=q(u),P(a.$$.fragment,u)},m(u,b){I(e,u,b),k(u,n,b),I(t,u,b),k(u,i,b),I(r,u,b),k(u,o,b),I(a,u,b),f=!0},p(u,b){const y={};b[0]&16&&(y.data=u[4]),e.$set(y);const v={};b[0]&16&&(v.data=u[4]),t.$set(v);const T={};b[0]&16&&(T.data=u[4]),r.$set(T);const F={};b[0]&16&&(F.data=u[4]),a.$set(F)},i(u){f||(_(e.$$.fragment,u),_(t.$$.fragment,u),_(r.$$.fragment,u),_(a.$$.fragment,u),f=!0)},o(u){h(e.$$.fragment,u),h(t.$$.fragment,u),h(r.$$.fragment,u),h(a.$$.fragment,u),f=!1},d(u){u&&(d(n),d(i),d(o)),R(e,u),R(t,u),R(r,u),R(a,u)}}}function $t(l){let e,n;return e=new $e({props:{queryID:"revenue_by_country",queryResult:l[5]}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p(t,i){const r={};i[0]&32&&(r.queryResult=t[5]),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function en(l){let e,n;return e=new $e({props:{queryID:"top_customers",queryResult:l[6]}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p(t,i){const r={};i[0]&64&&(r.queryResult=t[6]),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function tn(l){let e,n;return e=new $e({props:{queryID:"new_vs_returning",queryResult:l[7]}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p(t,i){const r={};i[0]&128&&(r.queryResult=t[7]),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function nn(l){let e,n;return e=new $e({props:{queryID:"top_products",queryResult:l[8]}}),{c(){D(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){I(e,t,i),n=!0},p(t,i){const r={};i[0]&256&&(r.queryResult=t[8]),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function jr(l){let e,n,t,i,r,o,a='This dashboard is powered by your dbt <strong class="markdown">gold</strong> models in Postgres:',f,u,b='<li class="markdown"><code class="markdown">ecomm.fct_order</code></li> <li class="markdown"><code class="markdown">ecomm.dim_customer</code></li>',y,v,T,F,w,L,N,U,O,M,A,j='<a href="#executive-summary">Executive Summary</a>',K,H,V,de,Me,Y,ce,X='<a href="#trends-monthly">Trends (Monthly)</a>',S,Q,ue,Fe,Ae,be,J,We='<a href="#geography">Geography</a>',je,ye,ke,we,p,Pe,te,ze='<a href="#customers">Customers</a>',He,fe,Z,Le,qe,ve,Ge,me,ge,x,Ve='<a href="#products-using-product_id">Products (using product_id)</a>',Be,De,_e,Oe,he,g,Ee,Ye,G=typeof z<"u"&&z.title&&z.hide_title!==!0&&Ar();function lt(s,c){return typeof z<"u"&&z.title?qr:Lr}let et=lt()(l),Qe=typeof z=="object"&&Er(),$=l[0]&&pt(l),ee=l[1]&&Kt(l);F=new Bt({props:{data:l[1],name:"country",value:"country",$$slots:{default:[Pr]},$$scope:{ctx:l}}});let ne=l[2]&&Jt(l);N=new Bt({props:{data:l[2],name:"year",value:"year",$$slots:{default:[Dr]},$$scope:{ctx:l}}});let re=l[3]&&Zt(l);V=new Nt({props:{cols:"3",$$slots:{default:[Or]},$$scope:{ctx:l}}});let le=l[4]&&xt(l);ue=new Nt({props:{cols:"2",$$slots:{default:[Ur]},$$scope:{ctx:l}}});let ie=l[5]&&$t(l);ke=new Ft({props:{data:l[5],title:"Revenue by Country",x:"country",y:"revenue"}});let oe=l[6]&&en(l);Z=new Ht({props:{data:l[6],rows:"25"}});let ae=l[7]&&tn(l);ve=new Ft({props:{data:l[7],title:"New vs Returning (Revenue)",x:"month",y:"revenue",series:"customer_type"}});let se=l[8]&&nn(l);return _e=new Ft({props:{data:l[8],title:"Top Products by Revenue",x:"product_id",y:"revenue"}}),he=new Ht({props:{data:l[8],rows:"25"}}),{c(){G&&G.c(),e=E(),et.c(),n=B("meta"),t=B("meta"),Qe&&Qe.c(),i=Xe(),r=E(),o=B("p"),o.innerHTML=a,f=E(),u=B("ul"),u.innerHTML=b,y=E(),$&&$.c(),v=E(),ee&&ee.c(),T=E(),D(F.$$.fragment),w=E(),ne&&ne.c(),L=E(),D(N.$$.fragment),U=E(),O=B("hr"),M=E(),A=B("h2"),A.innerHTML=j,K=E(),re&&re.c(),H=E(),D(V.$$.fragment),de=E(),Me=B("hr"),Y=E(),ce=B("h2"),ce.innerHTML=X,S=E(),le&&le.c(),Q=E(),D(ue.$$.fragment),Fe=E(),Ae=B("hr"),be=E(),J=B("h2"),J.innerHTML=We,je=E(),ie&&ie.c(),ye=E(),D(ke.$$.fragment),we=E(),p=B("hr"),Pe=E(),te=B("h2"),te.innerHTML=ze,He=E(),oe&&oe.c(),fe=E(),D(Z.$$.fragment),Le=E(),ae&&ae.c(),qe=E(),D(ve.$$.fragment),Ge=E(),me=B("hr"),ge=E(),x=B("h2"),x.innerHTML=Ve,Be=E(),se&&se.c(),De=E(),D(_e.$$.fragment),Oe=E(),D(he.$$.fragment),g=E(),Ee=B("hr"),this.h()},l(s){G&&G.l(s),e=q(s);const c=fn("svelte-2igo1p",document.head);et.l(c),n=W(c,"META",{name:!0,content:!0}),t=W(c,"META",{name:!0,content:!0}),Qe&&Qe.l(c),i=Xe(),c.forEach(d),r=q(s),o=W(s,"P",{class:!0,"data-svelte-h":!0}),pe(o)!=="svelte-1n56fcd"&&(o.innerHTML=a),f=q(s),u=W(s,"UL",{class:!0,"data-svelte-h":!0}),pe(u)!=="svelte-1k3k0n1"&&(u.innerHTML=b),y=q(s),$&&$.l(s),v=q(s),ee&&ee.l(s),T=q(s),P(F.$$.fragment,s),w=q(s),ne&&ne.l(s),L=q(s),P(N.$$.fragment,s),U=q(s),O=W(s,"HR",{class:!0}),M=q(s),A=W(s,"H2",{class:!0,id:!0,"data-svelte-h":!0}),pe(A)!=="svelte-1aty7f8"&&(A.innerHTML=j),K=q(s),re&&re.l(s),H=q(s),P(V.$$.fragment,s),de=q(s),Me=W(s,"HR",{class:!0}),Y=q(s),ce=W(s,"H2",{class:!0,id:!0,"data-svelte-h":!0}),pe(ce)!=="svelte-cqae6c"&&(ce.innerHTML=X),S=q(s),le&&le.l(s),Q=q(s),P(ue.$$.fragment,s),Fe=q(s),Ae=W(s,"HR",{class:!0}),be=q(s),J=W(s,"H2",{class:!0,id:!0,"data-svelte-h":!0}),pe(J)!=="svelte-11bcr16"&&(J.innerHTML=We),je=q(s),ie&&ie.l(s),ye=q(s),P(ke.$$.fragment,s),we=q(s),p=W(s,"HR",{class:!0}),Pe=q(s),te=W(s,"H2",{class:!0,id:!0,"data-svelte-h":!0}),pe(te)!=="svelte-or7ff"&&(te.innerHTML=ze),He=q(s),oe&&oe.l(s),fe=q(s),P(Z.$$.fragment,s),Le=q(s),ae&&ae.l(s),qe=q(s),P(ve.$$.fragment,s),Ge=q(s),me=W(s,"HR",{class:!0}),ge=q(s),x=W(s,"H2",{class:!0,id:!0,"data-svelte-h":!0}),pe(x)!=="svelte-1ygonxy"&&(x.innerHTML=Ve),Be=q(s),se&&se.l(s),De=q(s),P(_e.$$.fragment,s),Oe=q(s),P(he.$$.fragment,s),g=q(s),Ee=W(s,"HR",{class:!0}),this.h()},h(){C(n,"name","twitter:card"),C(n,"content","summary_large_image"),C(t,"name","twitter:site"),C(t,"content","@evidence_dev"),C(o,"class","markdown"),C(u,"class","markdown"),C(O,"class","markdown"),C(A,"class","markdown"),C(A,"id","executive-summary"),C(Me,"class","markdown"),C(ce,"class","markdown"),C(ce,"id","trends-monthly"),C(Ae,"class","markdown"),C(J,"class","markdown"),C(J,"id","geography"),C(p,"class","markdown"),C(te,"class","markdown"),C(te,"id","customers"),C(me,"class","markdown"),C(x,"class","markdown"),C(x,"id","products-using-product_id"),C(Ee,"class","markdown")},m(s,c){G&&G.m(s,c),k(s,e,c),et.m(document.head,null),Te(document.head,n),Te(document.head,t),Qe&&Qe.m(document.head,null),Te(document.head,i),k(s,r,c),k(s,o,c),k(s,f,c),k(s,u,c),k(s,y,c),$&&$.m(s,c),k(s,v,c),ee&&ee.m(s,c),k(s,T,c),I(F,s,c),k(s,w,c),ne&&ne.m(s,c),k(s,L,c),I(N,s,c),k(s,U,c),k(s,O,c),k(s,M,c),k(s,A,c),k(s,K,c),re&&re.m(s,c),k(s,H,c),I(V,s,c),k(s,de,c),k(s,Me,c),k(s,Y,c),k(s,ce,c),k(s,S,c),le&&le.m(s,c),k(s,Q,c),I(ue,s,c),k(s,Fe,c),k(s,Ae,c),k(s,be,c),k(s,J,c),k(s,je,c),ie&&ie.m(s,c),k(s,ye,c),I(ke,s,c),k(s,we,c),k(s,p,c),k(s,Pe,c),k(s,te,c),k(s,He,c),oe&&oe.m(s,c),k(s,fe,c),I(Z,s,c),k(s,Le,c),ae&&ae.m(s,c),k(s,qe,c),I(ve,s,c),k(s,Ge,c),k(s,me,c),k(s,ge,c),k(s,x,c),k(s,Be,c),se&&se.m(s,c),k(s,De,c),I(_e,s,c),k(s,Oe,c),I(he,s,c),k(s,g,c),k(s,Ee,c),Ye=!0},p(s,c){typeof z<"u"&&z.title&&z.hide_title!==!0&&G.p(s,c),et.p(s,c),typeof z=="object"&&Qe.p(s,c),s[0]?$?($.p(s,c),c[0]&1&&_($,1)):($=pt(s),$.c(),_($,1),$.m(v.parentNode,v)):$&&(Se(),h($,1,1,()=>{$=null}),Ce()),s[1]?ee?(ee.p(s,c),c[0]&2&&_(ee,1)):(ee=Kt(s),ee.c(),_(ee,1),ee.m(T.parentNode,T)):ee&&(Se(),h(ee,1,1,()=>{ee=null}),Ce());const it={};c[0]&2&&(it.data=s[1]),c[2]&16&&(it.$$scope={dirty:c,ctx:s}),F.$set(it),s[2]?ne?(ne.p(s,c),c[0]&4&&_(ne,1)):(ne=Jt(s),ne.c(),_(ne,1),ne.m(L.parentNode,L)):ne&&(Se(),h(ne,1,1,()=>{ne=null}),Ce());const ot={};c[0]&4&&(ot.data=s[2]),c[2]&16&&(ot.$$scope={dirty:c,ctx:s}),N.$set(ot),s[3]?re?(re.p(s,c),c[0]&8&&_(re,1)):(re=Zt(s),re.c(),_(re,1),re.m(H.parentNode,H)):re&&(Se(),h(re,1,1,()=>{re=null}),Ce());const ft={};c[0]&8|c[2]&16&&(ft.$$scope={dirty:c,ctx:s}),V.$set(ft),s[4]?le?(le.p(s,c),c[0]&16&&_(le,1)):(le=xt(s),le.c(),_(le,1),le.m(Q.parentNode,Q)):le&&(Se(),h(le,1,1,()=>{le=null}),Ce());const mt={};c[0]&16|c[2]&16&&(mt.$$scope={dirty:c,ctx:s}),ue.$set(mt),s[5]?ie?(ie.p(s,c),c[0]&32&&_(ie,1)):(ie=$t(s),ie.c(),_(ie,1),ie.m(ye.parentNode,ye)):ie&&(Se(),h(ie,1,1,()=>{ie=null}),Ce());const ct={};c[0]&32&&(ct.data=s[5]),ke.$set(ct),s[6]?oe?(oe.p(s,c),c[0]&64&&_(oe,1)):(oe=en(s),oe.c(),_(oe,1),oe.m(fe.parentNode,fe)):oe&&(Se(),h(oe,1,1,()=>{oe=null}),Ce());const _t={};c[0]&64&&(_t.data=s[6]),Z.$set(_t),s[7]?ae?(ae.p(s,c),c[0]&128&&_(ae,1)):(ae=tn(s),ae.c(),_(ae,1),ae.m(qe.parentNode,qe)):ae&&(Se(),h(ae,1,1,()=>{ae=null}),Ce());const m={};c[0]&128&&(m.data=s[7]),ve.$set(m),s[8]?se?(se.p(s,c),c[0]&256&&_(se,1)):(se=nn(s),se.c(),_(se,1),se.m(De.parentNode,De)):se&&(Se(),h(se,1,1,()=>{se=null}),Ce());const Dt={};c[0]&256&&(Dt.data=s[8]),_e.$set(Dt);const Ot={};c[0]&256&&(Ot.data=s[8]),he.$set(Ot)},i(s){Ye||(_($),_(ee),_(F.$$.fragment,s),_(ne),_(N.$$.fragment,s),_(re),_(V.$$.fragment,s),_(le),_(ue.$$.fragment,s),_(ie),_(ke.$$.fragment,s),_(oe),_(Z.$$.fragment,s),_(ae),_(ve.$$.fragment,s),_(se),_(_e.$$.fragment,s),_(he.$$.fragment,s),Ye=!0)},o(s){h($),h(ee),h(F.$$.fragment,s),h(ne),h(N.$$.fragment,s),h(re),h(V.$$.fragment,s),h(le),h(ue.$$.fragment,s),h(ie),h(ke.$$.fragment,s),h(oe),h(Z.$$.fragment,s),h(ae),h(ve.$$.fragment,s),h(se),h(_e.$$.fragment,s),h(he.$$.fragment,s),Ye=!1},d(s){s&&(d(e),d(r),d(o),d(f),d(u),d(y),d(v),d(T),d(w),d(L),d(U),d(O),d(M),d(A),d(K),d(H),d(de),d(Me),d(Y),d(ce),d(S),d(Q),d(Fe),d(Ae),d(be),d(J),d(je),d(ye),d(we),d(p),d(Pe),d(te),d(He),d(fe),d(Le),d(qe),d(Ge),d(me),d(ge),d(x),d(Be),d(De),d(Oe),d(g),d(Ee)),G&&G.d(s),et.d(s),d(n),d(t),Qe&&Qe.d(s),d(i),$&&$.d(s),ee&&ee.d(s),R(F,s),ne&&ne.d(s),R(N,s),re&&re.d(s),R(V,s),le&&le.d(s),R(ue,s),ie&&ie.d(s),R(ke,s),oe&&oe.d(s),R(Z,s),ae&&ae.d(s),R(ve,s),se&&se.d(s),R(_e,s),R(he,s)}}}const z={title:"Ecommerce KPI Dashboard (Monthly)"};function Hr(l,e,n){let t,i;Lt(l,Pn,G=>n(48,t=G)),Lt(l,Gt,G=>n(53,i=G));let{data:r}=e,{data:o={},customFormattingSettings:a,__db:f,inputs:u}=r;mn(Gt,i="7a9463a3ba127b500379369022fbbdb2",i);let b=Tn(Ln(u));cn(b.subscribe(G=>n(11,u=G))),rn(An,{getCustomFormats:()=>a.customFormats||[]});const y=(G,lt)=>qn(f.query,G,{query_name:lt});Mn(y),t.params,_n(()=>!0);let v={initialData:void 0,initialError:void 0},T=Re`select
  min(date_trunc('month', order_date)::date) as min_month,
  max(date_trunc('month', order_date)::date) as max_month
from ecomm.fct_order`,F=`select
  min(date_trunc('month', order_date)::date) as min_month,
  max(date_trunc('month', order_date)::date) as max_month
from ecomm.fct_order`;o.filters_data&&(o.filters_data instanceof Error?v.initialError=o.filters_data:v.initialData=o.filters_data,o.filters_columns&&(v.knownColumns=o.filters_columns));let w,L=!1;const N=Ie.createReactive({callback:G=>{n(0,w=G)},execFn:y},{id:"filters",...v});N(F,{noResolve:T,...v}),globalThis[Symbol.for("filters")]={get value(){return w}};let U={initialData:void 0,initialError:void 0},O=Re`select distinct
  coalesce(country,'Unknown') as country
from ecomm.dim_customer
order by 1`,M=`select distinct
  coalesce(country,'Unknown') as country
from ecomm.dim_customer
order by 1`;o.countries_data&&(o.countries_data instanceof Error?U.initialError=o.countries_data:U.initialData=o.countries_data,o.countries_columns&&(U.knownColumns=o.countries_columns));let A,j=!1;const K=Ie.createReactive({callback:G=>{n(1,A=G)},execFn:y},{id:"countries",...U});K(M,{noResolve:O,...U}),globalThis[Symbol.for("countries")]={get value(){return A}};let H={initialData:void 0,initialError:void 0},V=Re`select distinct
  date_part('year', order_date)::int as year
from ecomm.fct_order
order by 1`,de=`select distinct
  date_part('year', order_date)::int as year
from ecomm.fct_order
order by 1`;o.years_data&&(o.years_data instanceof Error?H.initialError=o.years_data:H.initialData=o.years_data,o.years_columns&&(H.knownColumns=o.years_columns));let Me,Y=!1;const ce=Ie.createReactive({callback:G=>{n(2,Me=G)},execFn:y},{id:"years",...H});ce(de,{noResolve:V,...H}),globalThis[Symbol.for("years")]={get value(){return Me}};let X={initialData:void 0,initialError:void 0},S=Re`with base as (
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
  where coalesce(c.country,'Unknown') like '${u.country.value}'
    and date_part('year', o.order_date) :: text like '${u.year.value}'
)
select
  sum(total_amount) as revenue,
  count(*) as orders,
  sum(quantity) as units,
  count(distinct customer_id) as unique_customers,
  (sum(total_amount) / nullif(count(*),0)) as aov,
  (sum(quantity)::numeric / nullif(count(*),0)) as items_per_order,
  (sum(total_amount) / nullif(count(distinct customer_id),0)) as revenue_per_customer
from base`,Q=`with base as (
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
  where coalesce(c.country,'Unknown') like '${u.country.value}'
    and date_part('year', o.order_date) :: text like '${u.year.value}'
)
select
  sum(total_amount) as revenue,
  count(*) as orders,
  sum(quantity) as units,
  count(distinct customer_id) as unique_customers,
  (sum(total_amount) / nullif(count(*),0)) as aov,
  (sum(quantity)::numeric / nullif(count(*),0)) as items_per_order,
  (sum(total_amount) / nullif(count(distinct customer_id),0)) as revenue_per_customer
from base`;o.kpis_data&&(o.kpis_data instanceof Error?X.initialError=o.kpis_data:X.initialData=o.kpis_data,o.kpis_columns&&(X.knownColumns=o.kpis_columns));let ue,Fe=!1;const Ae=Ie.createReactive({callback:G=>{n(3,ue=G)},execFn:y},{id:"kpis",...X});Ae(Q,{noResolve:S,...X}),globalThis[Symbol.for("kpis")]={get value(){return ue}};let be={initialData:void 0,initialError:void 0},J=Re`with base as (
  select
    date_trunc('month', o.order_date)::date as month,
    o.customer_id,
    o.quantity,
    o.total_amount,
    coalesce(c.country,'Unknown') as country
  from ecomm.fct_order o
  left join ecomm.dim_customer c
    on o.customer_id = c.customer_id
  where coalesce(c.country,'Unknown') like '${u.country.value}'
    and date_part('year', o.order_date) :: text like '${u.year.value}'
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
order by 1`,We=`with base as (
  select
    date_trunc('month', o.order_date)::date as month,
    o.customer_id,
    o.quantity,
    o.total_amount,
    coalesce(c.country,'Unknown') as country
  from ecomm.fct_order o
  left join ecomm.dim_customer c
    on o.customer_id = c.customer_id
  where coalesce(c.country,'Unknown') like '${u.country.value}'
    and date_part('year', o.order_date) :: text like '${u.year.value}'
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
order by 1`;o.monthly_data&&(o.monthly_data instanceof Error?be.initialError=o.monthly_data:be.initialData=o.monthly_data,o.monthly_columns&&(be.knownColumns=o.monthly_columns));let je,ye=!1;const ke=Ie.createReactive({callback:G=>{n(4,je=G)},execFn:y},{id:"monthly",...be});ke(We,{noResolve:J,...be}),globalThis[Symbol.for("monthly")]={get value(){return je}};let we={initialData:void 0,initialError:void 0},p=Re`select
  coalesce(c.country,'Unknown') as country,
  sum(o.total_amount) as revenue,
  count(*) as orders,
  (sum(o.total_amount) / nullif(count(*),0)) as aov
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where date_part('year', o.order_date) :: text like '${u.year.value}'
group by 1
order by revenue desc`,Pe=`select
  coalesce(c.country,'Unknown') as country,
  sum(o.total_amount) as revenue,
  count(*) as orders,
  (sum(o.total_amount) / nullif(count(*),0)) as aov
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where date_part('year', o.order_date) :: text like '${u.year.value}'
group by 1
order by revenue desc`;o.revenue_by_country_data&&(o.revenue_by_country_data instanceof Error?we.initialError=o.revenue_by_country_data:we.initialData=o.revenue_by_country_data,o.revenue_by_country_columns&&(we.knownColumns=o.revenue_by_country_columns));let te,ze=!1;const He=Ie.createReactive({callback:G=>{n(5,te=G)},execFn:y},{id:"revenue_by_country",...we});He(Pe,{noResolve:p,...we}),globalThis[Symbol.for("revenue_by_country")]={get value(){return te}};let fe={initialData:void 0,initialError:void 0},Z=Re`select
  c.customer_name,
  coalesce(c.country,'Unknown') as country,
  sum(o.total_amount) as revenue,
  count(*) as orders,
  (sum(o.total_amount) / nullif(count(*),0)) as aov
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where coalesce(c.country,'Unknown') like '${u.country.value}'
  and date_part('year', o.order_date) :: text like '${u.year.value}'
group by 1,2
order by revenue desc
limit 25`,Le=`select
  c.customer_name,
  coalesce(c.country,'Unknown') as country,
  sum(o.total_amount) as revenue,
  count(*) as orders,
  (sum(o.total_amount) / nullif(count(*),0)) as aov
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where coalesce(c.country,'Unknown') like '${u.country.value}'
  and date_part('year', o.order_date) :: text like '${u.year.value}'
group by 1,2
order by revenue desc
limit 25`;o.top_customers_data&&(o.top_customers_data instanceof Error?fe.initialError=o.top_customers_data:fe.initialData=o.top_customers_data,o.top_customers_columns&&(fe.knownColumns=o.top_customers_columns));let qe,ve=!1;const Ge=Ie.createReactive({callback:G=>{n(6,qe=G)},execFn:y},{id:"top_customers",...fe});Ge(Le,{noResolve:Z,...fe}),globalThis[Symbol.for("top_customers")]={get value(){return qe}};let me={initialData:void 0,initialError:void 0},ge=Re`with first_order as (
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
  where coalesce(c.country,'Unknown') like '${u.country.value}'
    and date_part('year', o.order_date) :: text like '${u.year.value}'
)
select
  month,
  customer_type,
  sum(total_amount) as revenue,
  count(*) as orders,
  count(distinct customer_id) as customers
from tagged
group by 1,2
order by 1,2`,x=`with first_order as (
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
  where coalesce(c.country,'Unknown') like '${u.country.value}'
    and date_part('year', o.order_date) :: text like '${u.year.value}'
)
select
  month,
  customer_type,
  sum(total_amount) as revenue,
  count(*) as orders,
  count(distinct customer_id) as customers
from tagged
group by 1,2
order by 1,2`;o.new_vs_returning_data&&(o.new_vs_returning_data instanceof Error?me.initialError=o.new_vs_returning_data:me.initialData=o.new_vs_returning_data,o.new_vs_returning_columns&&(me.knownColumns=o.new_vs_returning_columns));let Ve,Be=!1;const De=Ie.createReactive({callback:G=>{n(7,Ve=G)},execFn:y},{id:"new_vs_returning",...me});De(x,{noResolve:ge,...me}),globalThis[Symbol.for("new_vs_returning")]={get value(){return Ve}};let _e={initialData:void 0,initialError:void 0},Oe=Re`select
  o.product_id,
  sum(o.total_amount) as revenue,
  sum(o.quantity) as units,
  (sum(o.total_amount) / nullif(sum(o.quantity),0)) as avg_selling_price
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where coalesce(c.country,'Unknown') like '${u.country.value}'
  and date_part('year', o.order_date) :: text like '${u.year.value}'
group by 1
order by revenue desc
limit 25`,he=`select
  o.product_id,
  sum(o.total_amount) as revenue,
  sum(o.quantity) as units,
  (sum(o.total_amount) / nullif(sum(o.quantity),0)) as avg_selling_price
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where coalesce(c.country,'Unknown') like '${u.country.value}'
  and date_part('year', o.order_date) :: text like '${u.year.value}'
group by 1
order by revenue desc
limit 25`;o.top_products_data&&(o.top_products_data instanceof Error?_e.initialError=o.top_products_data:_e.initialData=o.top_products_data,o.top_products_columns&&(_e.knownColumns=o.top_products_columns));let g,Ee=!1;const Ye=Ie.createReactive({callback:G=>{n(8,g=G)},execFn:y},{id:"top_products",..._e});return Ye(he,{noResolve:Oe,..._e}),globalThis[Symbol.for("top_products")]={get value(){return g}},l.$$set=G=>{"data"in G&&n(9,r=G.data)},l.$$.update=()=>{l.$$.dirty[0]&512&&n(10,{data:o={},customFormattingSettings:a,__db:f}=r,o),l.$$.dirty[0]&1024&&Fn.set(Object.keys(o).length>0),l.$$.dirty[1]&131072&&t.params,l.$$.dirty[0]&61440&&(T||!L?T||(N(F,{noResolve:T,...v}),n(15,L=!0)):N(F,{noResolve:T})),l.$$.dirty[0]&983040&&(O||!j?O||(K(M,{noResolve:O,...U}),n(19,j=!0)):K(M,{noResolve:O})),l.$$.dirty[0]&15728640&&(V||!Y?V||(ce(de,{noResolve:V,...H}),n(23,Y=!0)):ce(de,{noResolve:V})),l.$$.dirty[0]&2048&&n(25,S=Re`with base as (
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
  where coalesce(c.country,'Unknown') like '${u.country.value}'
    and date_part('year', o.order_date) :: text like '${u.year.value}'
)
select
  sum(total_amount) as revenue,
  count(*) as orders,
  sum(quantity) as units,
  count(distinct customer_id) as unique_customers,
  (sum(total_amount) / nullif(count(*),0)) as aov,
  (sum(quantity)::numeric / nullif(count(*),0)) as items_per_order,
  (sum(total_amount) / nullif(count(distinct customer_id),0)) as revenue_per_customer
from base`),l.$$.dirty[0]&2048&&n(26,Q=`with base as (
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
  where coalesce(c.country,'Unknown') like '${u.country.value}'
    and date_part('year', o.order_date) :: text like '${u.year.value}'
)
select
  sum(total_amount) as revenue,
  count(*) as orders,
  sum(quantity) as units,
  count(distinct customer_id) as unique_customers,
  (sum(total_amount) / nullif(count(*),0)) as aov,
  (sum(quantity)::numeric / nullif(count(*),0)) as items_per_order,
  (sum(total_amount) / nullif(count(distinct customer_id),0)) as revenue_per_customer
from base`),l.$$.dirty[0]&251658240&&(S||!Fe?S||(Ae(Q,{noResolve:S,...X}),n(27,Fe=!0)):Ae(Q,{noResolve:S})),l.$$.dirty[0]&2048&&n(29,J=Re`with base as (
  select
    date_trunc('month', o.order_date)::date as month,
    o.customer_id,
    o.quantity,
    o.total_amount,
    coalesce(c.country,'Unknown') as country
  from ecomm.fct_order o
  left join ecomm.dim_customer c
    on o.customer_id = c.customer_id
  where coalesce(c.country,'Unknown') like '${u.country.value}'
    and date_part('year', o.order_date) :: text like '${u.year.value}'
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
order by 1`),l.$$.dirty[0]&2048&&n(30,We=`with base as (
  select
    date_trunc('month', o.order_date)::date as month,
    o.customer_id,
    o.quantity,
    o.total_amount,
    coalesce(c.country,'Unknown') as country
  from ecomm.fct_order o
  left join ecomm.dim_customer c
    on o.customer_id = c.customer_id
  where coalesce(c.country,'Unknown') like '${u.country.value}'
    and date_part('year', o.order_date) :: text like '${u.year.value}'
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
order by 1`),l.$$.dirty[0]&1879048192|l.$$.dirty[1]&1&&(J||!ye?J||(ke(We,{noResolve:J,...be}),n(31,ye=!0)):ke(We,{noResolve:J})),l.$$.dirty[0]&2048&&n(33,p=Re`select
  coalesce(c.country,'Unknown') as country,
  sum(o.total_amount) as revenue,
  count(*) as orders,
  (sum(o.total_amount) / nullif(count(*),0)) as aov
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where date_part('year', o.order_date) :: text like '${u.year.value}'
group by 1
order by revenue desc`),l.$$.dirty[0]&2048&&n(34,Pe=`select
  coalesce(c.country,'Unknown') as country,
  sum(o.total_amount) as revenue,
  count(*) as orders,
  (sum(o.total_amount) / nullif(count(*),0)) as aov
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where date_part('year', o.order_date) :: text like '${u.year.value}'
group by 1
order by revenue desc`),l.$$.dirty[1]&30&&(p||!ze?p||(He(Pe,{noResolve:p,...we}),n(35,ze=!0)):He(Pe,{noResolve:p})),l.$$.dirty[0]&2048&&n(37,Z=Re`select
  c.customer_name,
  coalesce(c.country,'Unknown') as country,
  sum(o.total_amount) as revenue,
  count(*) as orders,
  (sum(o.total_amount) / nullif(count(*),0)) as aov
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where coalesce(c.country,'Unknown') like '${u.country.value}'
  and date_part('year', o.order_date) :: text like '${u.year.value}'
group by 1,2
order by revenue desc
limit 25`),l.$$.dirty[0]&2048&&n(38,Le=`select
  c.customer_name,
  coalesce(c.country,'Unknown') as country,
  sum(o.total_amount) as revenue,
  count(*) as orders,
  (sum(o.total_amount) / nullif(count(*),0)) as aov
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where coalesce(c.country,'Unknown') like '${u.country.value}'
  and date_part('year', o.order_date) :: text like '${u.year.value}'
group by 1,2
order by revenue desc
limit 25`),l.$$.dirty[1]&480&&(Z||!ve?Z||(Ge(Le,{noResolve:Z,...fe}),n(39,ve=!0)):Ge(Le,{noResolve:Z})),l.$$.dirty[0]&2048&&n(41,ge=Re`with first_order as (
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
  where coalesce(c.country,'Unknown') like '${u.country.value}'
    and date_part('year', o.order_date) :: text like '${u.year.value}'
)
select
  month,
  customer_type,
  sum(total_amount) as revenue,
  count(*) as orders,
  count(distinct customer_id) as customers
from tagged
group by 1,2
order by 1,2`),l.$$.dirty[0]&2048&&n(42,x=`with first_order as (
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
  where coalesce(c.country,'Unknown') like '${u.country.value}'
    and date_part('year', o.order_date) :: text like '${u.year.value}'
)
select
  month,
  customer_type,
  sum(total_amount) as revenue,
  count(*) as orders,
  count(distinct customer_id) as customers
from tagged
group by 1,2
order by 1,2`),l.$$.dirty[1]&7680&&(ge||!Be?ge||(De(x,{noResolve:ge,...me}),n(43,Be=!0)):De(x,{noResolve:ge})),l.$$.dirty[0]&2048&&n(45,Oe=Re`select
  o.product_id,
  sum(o.total_amount) as revenue,
  sum(o.quantity) as units,
  (sum(o.total_amount) / nullif(sum(o.quantity),0)) as avg_selling_price
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where coalesce(c.country,'Unknown') like '${u.country.value}'
  and date_part('year', o.order_date) :: text like '${u.year.value}'
group by 1
order by revenue desc
limit 25`),l.$$.dirty[0]&2048&&n(46,he=`select
  o.product_id,
  sum(o.total_amount) as revenue,
  sum(o.quantity) as units,
  (sum(o.total_amount) / nullif(sum(o.quantity),0)) as avg_selling_price
from ecomm.fct_order o
left join ecomm.dim_customer c
  on o.customer_id = c.customer_id
where coalesce(c.country,'Unknown') like '${u.country.value}'
  and date_part('year', o.order_date) :: text like '${u.year.value}'
group by 1
order by revenue desc
limit 25`),l.$$.dirty[1]&122880&&(Oe||!Ee?Oe||(Ye(he,{noResolve:Oe,..._e}),n(47,Ee=!0)):Ye(he,{noResolve:Oe}))},n(13,T=Re`select
  min(date_trunc('month', order_date)::date) as min_month,
  max(date_trunc('month', order_date)::date) as max_month
from ecomm.fct_order`),n(14,F=`select
  min(date_trunc('month', order_date)::date) as min_month,
  max(date_trunc('month', order_date)::date) as max_month
from ecomm.fct_order`),n(17,O=Re`select distinct
  coalesce(country,'Unknown') as country
from ecomm.dim_customer
order by 1`),n(18,M=`select distinct
  coalesce(country,'Unknown') as country
from ecomm.dim_customer
order by 1`),n(21,V=Re`select distinct
  date_part('year', order_date)::int as year
from ecomm.fct_order
order by 1`),n(22,de=`select distinct
  date_part('year', order_date)::int as year
from ecomm.fct_order
order by 1`),[w,A,Me,ue,je,te,qe,Ve,g,r,o,u,v,T,F,L,U,O,M,j,H,V,de,Y,X,S,Q,Fe,be,J,We,ye,we,p,Pe,ze,fe,Z,Le,ve,me,ge,x,Be,_e,Oe,he,Ee,t]}class Xr extends Ze{constructor(e){super(),xe(this,e,Hr,jr,Je,{data:9},null,[-1,-1,-1])}}export{Xr as component};
