(this["webpackJsonpnanotracker-react"]=this["webpackJsonpnanotracker-react"]||[]).push([[0],{211:function(e,t,n){},212:function(e,t,n){},362:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(47),i=n.n(o),s=(n(211),n(212),n(21)),l=n(32),u=n.n(l),j=n(83),d=n(22),h=n(364),b=n(365),f=n(366),p=n(198),O=n(376),v=n(377),x=n(378),k=n(372),g=n(367),w=n(374),y=n(375),m=n(193),C=n(195),H=n(371),S=n(196),W=n(197),B=n(105),M=n(82),E=n(9),I=[],L=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(0),i=Object(d.a)(o,2),l=i[0],L=i[1],T=Object(r.useState)(50),K=Object(d.a)(T,2),P=K[0],U=K[1],A=Object(r.useState)(50),F=Object(d.a)(A,2),N=F[0],R=F[1],z=Object(r.useState)(!1),D=Object(d.a)(z,2),J=D[0],$=D[1],_=Object(r.useState)(1e4),q=Object(d.a)(_,2),G=q[0],Q=q[1],V=Object(r.useState)([]),X=Object(d.a)(V,2),Y=X[0],Z=X[1];function ee(){U(window.innerHeight-200)}Object(r.useEffect)((function(){c(I),ee()})),window.addEventListener("resize",ee);var te,ne,ae,re,ce=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(e){return e},ie=[],se=function(){ce("https://api.nanopool.org/v1/eth/balance_hashrate/0x9a024dca12158e8ba0b45bb9d4ae1b1324c38861").then(function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.data;case 2:return te=e.sent,e.next=5,te.balance;case 5:return ne=e.sent,e.next=8,te.hashrate;case 8:ae=e.sent;case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ce("https://api.nanopool.org/v1/eth/reportedhashrates/0x9a024dca12158e8ba0b45bb9d4ae1b1324c38861").then(function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:re=t.data,ie=[],n=Object(s.a)(re);try{for(n.s();!(a=n.n()).done;)r=a.value,ie.push(r.hashrate)}catch(c){n.e(c)}finally{n.f()}Z(ie);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ce("https://api.nanopool.org/v1/eth/reportedhashrate/0x9a024dca12158e8ba0b45bb9d4ae1b1324c38861").then(function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.data;case 2:n=e.sent,console.log(n),a=(ae+n)/2,I.push({name:ae,cHash:ae,rHash:n,aHash:a}),R(ne),(r=I.map(oe)).length>6&&(I.shift(),c(r)),c(r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},le=function(e){var t=1e3*e.target.value;Q(t),clearInterval(a),console.log(t),L(0),a=setInterval(se,t),L(1)};return Object(E.jsxs)(h.a,{fluid:!0,children:[Object(E.jsx)(b.a,{children:Object(E.jsxs)(f.a,{className:"text-center",children:["Current Miner Balance =",N,"ETH | ",.1-N," ETH until deposit |"," ",Math.round(1e3*N),"% there",Object(E.jsx)(g.a,{value:1e3*N})]})}),Object(E.jsx)(b.a,{children:Object(E.jsx)(f.a,{className:"text-center",children:"Worker HashRates"})}),Object(E.jsxs)(g.a,{multi:!0,children:[Object(E.jsxs)(g.a,{bar:!0,striped:!0,color:"info",value:Y[0],children:["Beasty ",Y[0]," M/H "]}),Object(E.jsxs)(g.a,{bar:!0,striped:!0,color:"success",value:Y[1],children:["Laptop ",Y[1]," M/H "]}),Object(E.jsxs)(g.a,{bar:!0,striped:!0,value:Y[2],children:["MiniBoi ",Y[2]," M/H "]}),Object(E.jsxs)(g.a,{bar:!0,striped:!0,color:"warning",value:Y[3],children:["Ol' Miney ",Y[3]," M/H"]}),Object(E.jsxs)(g.a,{bar:!0,striped:!0,color:"danger",value:Y[4],children:["Ryzern ",Y[4]," M/H"]})]}),Object(E.jsx)(w.a,{width:"100%",height:P,children:Object(E.jsxs)(y.a,{data:n,margin:{top:5,right:20,bottom:5,left:0},children:[Object(E.jsx)(m.a,{type:"monotone",dataKey:"Beasty",stroke:"#60BCB7",strokeWidth:5,fill:"#82ca9d"}),Object(E.jsx)(C.a,{type:"monotone",dataKey:"cHash",stroke:"#60BCB7",strokeWidth:5,fill:"#82ca9d"}),Object(E.jsx)(m.a,{type:"monotone",dataKey:"rHash",stroke:"#8E5EA2",strokeWidth:5}),Object(E.jsx)(m.a,{type:"monotone",dataKey:"aHash",stroke:"#262335",strokeWidth:3}),Object(E.jsx)(H.a,{stroke:"#ccc",strokeDasharray:"5 5"}),Object(E.jsx)(S.a,{dataKey:"name"}),Object(E.jsx)(W.a,{type:"number"}),Object(E.jsx)(B.a,{}),Object(E.jsx)(M.a,{})]})}),Object(E.jsxs)(b.a,{children:[Object(E.jsx)(p.a,{onClick:function(){l||(console.log("clicked"),a=setInterval(se,G),L(1))},children:"Start Updates"}),Object(E.jsx)(p.a,{onClick:function(){console.log("clicked pause"),l&&(console.log("pause"),clearInterval(a),L(0))},children:"Pause Updates"}),Object(E.jsxs)(O.a,{direction:"up",isOpen:J,toggle:function(){return $(!J)},children:[Object(E.jsxs)(v.a,{caret:!0,children:[G/1e3,"Seconds"]}),Object(E.jsxs)(x.a,{children:[Object(E.jsx)(k.a,{value:2,onClick:function(e){return le(e)},children:"2"}),Object(E.jsx)(k.a,{value:3,onClick:function(e){return le(e)},children:"3"}),Object(E.jsx)(k.a,{value:4,onClick:function(e){return le(e)},children:"4"}),Object(E.jsx)(k.a,{value:5,onClick:function(e){return le(e)},children:"5"}),Object(E.jsx)(k.a,{value:10,onClick:function(e){return le(e)},children:"10"}),Object(E.jsx)(k.a,{value:20,onClick:function(e){return le(e)},children:"20"}),Object(E.jsx)(k.a,{value:25,onClick:function(e){return le(e)},children:"25"}),Object(E.jsx)(k.a,{value:30,onClick:function(e){return le(e)},children:"30"}),Object(E.jsx)(k.a,{value:35,onClick:function(e){return le(e)},children:"35"}),Object(E.jsx)(k.a,{value:40,onClick:function(e){return le(e)},children:"40"}),Object(E.jsx)(k.a,{value:45,onClick:function(e){return le(e)},children:"45"}),Object(E.jsx)(k.a,{value:50,onClick:function(e){return le(e)},children:"50"}),Object(E.jsx)(k.a,{value:55,onClick:function(e){return le(e)},children:"55"}),Object(E.jsx)(k.a,{value:60,onClick:function(e){return le(e)},children:"60"})]})]})]})]})};n(361);var T=function(){return Object(E.jsx)(h.a,{fluid:!0,children:Object(E.jsx)(b.a,{children:Object(E.jsx)(f.a,{children:Object(E.jsx)(L,{})})})})},K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,379)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};i.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(T,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/nano-tracker-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/nano-tracker-react","/service-worker.js");K?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):P(t,e)}))}}(),U()}},[[362,1,2]]]);
//# sourceMappingURL=main.6ce9975c.chunk.js.map