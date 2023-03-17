"use strict";(self.webpackChunkboilerplate_react_typescript=self.webpackChunkboilerplate_react_typescript||[]).push([[276],{9276:function(n,r,t){t.r(r),t.d(r,{default:function(){return F}});var e=t(2791),i=t(6151),a=t(7462),o=t(3366),c=t(8182),s=t(4419),u=t(6934),p=t(1402),d=t(5527),f=t(5878),l=t(1217);function m(n){return(0,l.Z)("MuiCard",n)}(0,f.Z)("MuiCard",["root"]);var x=t(184),v=["className","raised"],g=(0,u.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(n,r){return r.root}})((function(){return{overflow:"hidden"}})),h=e.forwardRef((function(n,r){var t=(0,p.Z)({props:n,name:"MuiCard"}),e=t.className,i=t.raised,u=void 0!==i&&i,d=(0,o.Z)(t,v),f=(0,a.Z)({},t,{raised:u}),l=function(n){var r=n.classes;return(0,s.Z)({root:["root"]},m,r)}(f);return(0,x.jsx)(g,(0,a.Z)({className:(0,c.Z)(l.root,e),elevation:u?8:void 0,ref:r,ownerState:f},d))}));function w(n){return(0,l.Z)("MuiCardActions",n)}(0,f.Z)("MuiCardActions",["root","spacing"]);var b=["disableSpacing","className"],Z=(0,u.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(n,r){var t=n.ownerState;return[r.root,!t.disableSpacing&&r.spacing]}})((function(n){var r=n.ownerState;return(0,a.Z)({display:"flex",alignItems:"center",padding:8},!r.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),S=e.forwardRef((function(n,r){var t=(0,p.Z)({props:n,name:"MuiCardActions"}),e=t.disableSpacing,i=void 0!==e&&e,u=t.className,d=(0,o.Z)(t,b),f=(0,a.Z)({},t,{disableSpacing:i}),l=function(n){var r=n.classes,t={root:["root",!n.disableSpacing&&"spacing"]};return(0,s.Z)(t,w,r)}(f);return(0,x.jsx)(Z,(0,a.Z)({className:(0,c.Z)(l.root,u),ownerState:f,ref:r},d))}));function M(n){return(0,l.Z)("MuiCardContent",n)}(0,f.Z)("MuiCardContent",["root"]);var k=["className","component"],j=(0,u.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(n,r){return r.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),N=e.forwardRef((function(n,r){var t=(0,p.Z)({props:n,name:"MuiCardContent"}),e=t.className,i=t.component,u=void 0===i?"div":i,d=(0,o.Z)(t,k),f=(0,a.Z)({},t,{component:u}),l=function(n){var r=n.classes;return(0,s.Z)({root:["root"]},M,r)}(f);return(0,x.jsx)(j,(0,a.Z)({as:u,className:(0,c.Z)(l.root,e),ownerState:f,ref:r},d))})),y=t(3433),W=t(4942),C=t(1184),G=t(8519),B=t(3967);var H=e.createContext();function D(n){return(0,l.Z)("MuiGrid",n)}var R=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],z=(0,f.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,y.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,y.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,y.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,y.Z)(R.map((function(n){return"grid-xs-".concat(n)}))),(0,y.Z)(R.map((function(n){return"grid-sm-".concat(n)}))),(0,y.Z)(R.map((function(n){return"grid-md-".concat(n)}))),(0,y.Z)(R.map((function(n){return"grid-lg-".concat(n)}))),(0,y.Z)(R.map((function(n){return"grid-xl-".concat(n)}))))),A=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function L(n){var r=parseFloat(n);return"".concat(r).concat(String(n).replace(String(r),"")||"px")}function P(n){var r=n.breakpoints,t=n.values,e="";Object.keys(t).forEach((function(n){""===e&&0!==t[n]&&(e=n)}));var i=Object.keys(r).sort((function(n,t){return r[n]-r[t]}));return i.slice(0,i.indexOf(e))}var _=(0,u.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,r){var t=n.ownerState,e=t.container,i=t.direction,a=t.item,o=t.spacing,c=t.wrap,s=t.zeroMinWidth,u=t.breakpoints,p=[];e&&(p=function(n,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[t["spacing-xs-".concat(String(n))]];var e=[];return r.forEach((function(r){var i=n[r];Number(i)>0&&e.push(t["spacing-".concat(r,"-").concat(String(i))])})),e}(o,u,r));var d=[];return u.forEach((function(n){var e=t[n];e&&d.push(r["grid-".concat(n,"-").concat(String(e))])})),[r.root,e&&r.container,a&&r.item,s&&r.zeroMinWidth].concat((0,y.Z)(p),["row"!==i&&r["direction-xs-".concat(String(i))],"wrap"!==c&&r["wrap-xs-".concat(String(c))]],d)}})((function(n){var r=n.ownerState;return(0,a.Z)({boxSizing:"border-box"},r.container&&{display:"flex",flexWrap:"wrap",width:"100%"},r.item&&{margin:0},r.zeroMinWidth&&{minWidth:0},"wrap"!==r.wrap&&{flexWrap:r.wrap})}),(function(n){var r=n.theme,t=n.ownerState,e=(0,C.P$)({values:t.direction,breakpoints:r.breakpoints.values});return(0,C.k9)({theme:r},e,(function(n){var r={flexDirection:n};return 0===n.indexOf("column")&&(r["& > .".concat(z.item)]={maxWidth:"none"}),r}))}),(function(n){var r=n.theme,t=n.ownerState,e=t.container,i=t.rowSpacing,a={};if(e&&0!==i){var o,c=(0,C.P$)({values:i,breakpoints:r.breakpoints.values});"object"===typeof c&&(o=P({breakpoints:r.breakpoints.values,values:c})),a=(0,C.k9)({theme:r},c,(function(n,t){var e,i=r.spacing(n);return"0px"!==i?(0,W.Z)({marginTop:"-".concat(L(i))},"& > .".concat(z.item),{paddingTop:L(i)}):null!=(e=o)&&e.includes(t)?{}:(0,W.Z)({marginTop:0},"& > .".concat(z.item),{paddingTop:0})}))}return a}),(function(n){var r=n.theme,t=n.ownerState,e=t.container,i=t.columnSpacing,a={};if(e&&0!==i){var o,c=(0,C.P$)({values:i,breakpoints:r.breakpoints.values});"object"===typeof c&&(o=P({breakpoints:r.breakpoints.values,values:c})),a=(0,C.k9)({theme:r},c,(function(n,t){var e,i=r.spacing(n);return"0px"!==i?(0,W.Z)({width:"calc(100% + ".concat(L(i),")"),marginLeft:"-".concat(L(i))},"& > .".concat(z.item),{paddingLeft:L(i)}):null!=(e=o)&&e.includes(t)?{}:(0,W.Z)({width:"100%",marginLeft:0},"& > .".concat(z.item),{paddingLeft:0})}))}return a}),(function(n){var r,t=n.theme,e=n.ownerState;return t.breakpoints.keys.reduce((function(n,i){var o={};if(e[i]&&(r=e[i]),!r)return n;if(!0===r)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=(0,C.P$)({values:e.columns,breakpoints:t.breakpoints.values}),s="object"===typeof c?c[i]:c;if(void 0===s||null===s)return n;var u="".concat(Math.round(r/s*1e8)/1e6,"%"),p={};if(e.container&&e.item&&0!==e.columnSpacing){var d=t.spacing(e.columnSpacing);if("0px"!==d){var f="calc(".concat(u," + ").concat(L(d),")");p={flexBasis:f,maxWidth:f}}}o=(0,a.Z)({flexBasis:u,flexGrow:0,maxWidth:u},p)}return 0===t.breakpoints.values[i]?Object.assign(n,o):n[t.breakpoints.up(i)]=o,n}),{})}));var E=function(n){var r=n.classes,t=n.container,e=n.direction,i=n.item,a=n.spacing,o=n.wrap,c=n.zeroMinWidth,u=n.breakpoints,p=[];t&&(p=function(n,r){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];var t=[];return r.forEach((function(r){var e=n[r];if(Number(e)>0){var i="spacing-".concat(r,"-").concat(String(e));t.push(i)}})),t}(a,u));var d=[];u.forEach((function(r){var t=n[r];t&&d.push("grid-".concat(r,"-").concat(String(t)))}));var f={root:["root",t&&"container",i&&"item",c&&"zeroMinWidth"].concat((0,y.Z)(p),["row"!==e&&"direction-xs-".concat(String(e)),"wrap"!==o&&"wrap-xs-".concat(String(o))],d)};return(0,s.Z)(f,D,r)},q=e.forwardRef((function(n,r){var t=(0,p.Z)({props:n,name:"MuiGrid"}),i=(0,B.Z)().breakpoints,s=(0,G.Z)(t),u=s.className,d=s.columns,f=s.columnSpacing,l=s.component,m=void 0===l?"div":l,v=s.container,g=void 0!==v&&v,h=s.direction,w=void 0===h?"row":h,b=s.item,Z=void 0!==b&&b,S=s.rowSpacing,M=s.spacing,k=void 0===M?0:M,j=s.wrap,N=void 0===j?"wrap":j,y=s.zeroMinWidth,W=void 0!==y&&y,C=(0,o.Z)(s,A),D=S||k,R=f||k,z=e.useContext(H),L=g?d||12:z,P={},q=(0,a.Z)({},C);i.keys.forEach((function(n){null!=C[n]&&(P[n]=C[n],delete q[n])}));var I=(0,a.Z)({},s,{columns:L,container:g,direction:w,item:Z,rowSpacing:D,columnSpacing:R,wrap:N,zeroMinWidth:W,spacing:k},P,{breakpoints:i.keys}),O=E(I);return(0,x.jsx)(H.Provider,{value:L,children:(0,x.jsx)(_,(0,a.Z)({ownerState:I,className:(0,c.Z)(O.root,u),as:m,ref:r},q))})})),I=q,O=t(4554),V=t(890),Y=t(1614),T=t(1087),$=[{id:1,title:"\u0427\u0438\u043b\u0438\u043c Seafood",image:"https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",description:"\u0420\u042b\u0411\u0410, \u041c\u041e\u0420\u0415\u041f\u0420\u041e\u0414\u0423\u041a\u0422\u042b. \u041f\u0440\u043e\u0435\u043a\u0442-\u043f\u0440\u0438\u0432\u0435\u0442 \u0441 \u0414\u0430\u043b\u044c\u043d\u0435\u0433\u043e \u0412\u043e\u0441\u0442\u043e\u043a\u0430. \u0421\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043b\u0435\u043d \u0441 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u0431\u0435\u043b\u043a\u043e\u0432. \u0425\u0430\u0440\u0438\u0437\u043c\u0430\u0442\u0438\u0447\u0435\u043d, \u043a\u0430\u043a \u043c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043a\u0440\u0435\u0432\u0435\u0442\u043a\u0430. \u0412\u044b\u0437\u044b\u0432\u0430\u0435\u0442 \u043f\u0440\u0438\u0432\u044b\u043a\u0430\u043d\u0438\u0435 \u043a \u0433\u0440\u0435\u0431\u0435\u0448\u043a\u0443, \u043a\u0440\u0430\u0431\u0443 \u0438 \u0432\u043e\u043d\u0433\u043e\u043b\u0435. \u041a\u043e\u0440\u043c\u0438\u043c, \u043f\u043e\u0438\u043c, \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c. \u0418\u0437 \u042f\u043f\u043e\u043d\u0441\u043a\u043e\u0433\u043e \u043c\u043e\u0440\u044f \u043f\u0440\u044f\u043c\u043e \u0432 \u0432\u0430\u0448\u0438 \u0442\u0430\u0440\u0435\u043b\u043a\u0438!"},{id:2,title:"Lorem Ipsum",image:"https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",description:"\u0420\u042b\u0411\u0410, \u041c\u041e\u0420\u0415\u041f\u0420\u041e\u0414\u0423\u041a\u0422\u042b. \u041f\u0440\u043e\u0435\u043a\u0442-\u043f\u0440\u0438\u0432\u0435\u0442 \u0441 \u0414\u0430\u043b\u044c\u043d\u0435\u0433\u043e \u0412\u043e\u0441\u0442\u043e\u043a\u0430. \u0421\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043b\u0435\u043d \u0441 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u0431\u0435\u043b\u043a\u043e\u0432. \u0425\u0430\u0440\u0438\u0437\u043c\u0430\u0442\u0438\u0447\u0435\u043d, \u043a\u0430\u043a \u043c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043a\u0440\u0435\u0432\u0435\u0442\u043a\u0430. \u0412\u044b\u0437\u044b\u0432\u0430\u0435\u0442 \u043f\u0440\u0438\u0432\u044b\u043a\u0430\u043d\u0438\u0435 \u043a \u0433\u0440\u0435\u0431\u0435\u0448\u043a\u0443, \u043a\u0440\u0430\u0431\u0443 \u0438 \u0432\u043e\u043d\u0433\u043e\u043b\u0435. \u041a\u043e\u0440\u043c\u0438\u043c, \u043f\u043e\u0438\u043c, \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c. \u0418\u0437 \u042f\u043f\u043e\u043d\u0441\u043a\u043e\u0433\u043e \u043c\u043e\u0440\u044f \u043f\u0440\u044f\u043c\u043e \u0432 \u0432\u0430\u0448\u0438 \u0442\u0430\u0440\u0435\u043b\u043a\u0438!"},{id:3,title:"Lorem Ipsum",image:"https://images.unsplash.com/photo-1494346480775-936a9f0d0877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1116&q=80",description:"\u0420\u042b\u0411\u0410, \u041c\u041e\u0420\u0415\u041f\u0420\u041e\u0414\u0423\u041a\u0422\u042b. \u041f\u0440\u043e\u0435\u043a\u0442-\u043f\u0440\u0438\u0432\u0435\u0442 \u0441 \u0414\u0430\u043b\u044c\u043d\u0435\u0433\u043e \u0412\u043e\u0441\u0442\u043e\u043a\u0430. \u0421\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043b\u0435\u043d \u0441 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u0431\u0435\u043b\u043a\u043e\u0432. \u0425\u0430\u0440\u0438\u0437\u043c\u0430\u0442\u0438\u0447\u0435\u043d, \u043a\u0430\u043a \u043c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043a\u0440\u0435\u0432\u0435\u0442\u043a\u0430. \u0412\u044b\u0437\u044b\u0432\u0430\u0435\u0442 \u043f\u0440\u0438\u0432\u044b\u043a\u0430\u043d\u0438\u0435 \u043a \u0433\u0440\u0435\u0431\u0435\u0448\u043a\u0443, \u043a\u0440\u0430\u0431\u0443 \u0438 \u0432\u043e\u043d\u0433\u043e\u043b\u0435. \u041a\u043e\u0440\u043c\u0438\u043c, \u043f\u043e\u0438\u043c, \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c. \u0418\u0437 \u042f\u043f\u043e\u043d\u0441\u043a\u043e\u0433\u043e \u043c\u043e\u0440\u044f \u043f\u0440\u044f\u043c\u043e \u0432 \u0432\u0430\u0448\u0438 \u0442\u0430\u0440\u0435\u043b\u043a\u0438!"},{id:4,title:"Lorem Ipsum",image:"https://images.unsplash.com/photo-1521917441209-e886f0404a7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",description:"\u0420\u042b\u0411\u0410, \u041c\u041e\u0420\u0415\u041f\u0420\u041e\u0414\u0423\u041a\u0422\u042b. \u041f\u0440\u043e\u0435\u043a\u0442-\u043f\u0440\u0438\u0432\u0435\u0442 \u0441 \u0414\u0430\u043b\u044c\u043d\u0435\u0433\u043e \u0412\u043e\u0441\u0442\u043e\u043a\u0430. \u0421\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043b\u0435\u043d \u0441 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u0431\u0435\u043b\u043a\u043e\u0432. \u0425\u0430\u0440\u0438\u0437\u043c\u0430\u0442\u0438\u0447\u0435\u043d, \u043a\u0430\u043a \u043c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043a\u0440\u0435\u0432\u0435\u0442\u043a\u0430. \u0412\u044b\u0437\u044b\u0432\u0430\u0435\u0442 \u043f\u0440\u0438\u0432\u044b\u043a\u0430\u043d\u0438\u0435 \u043a \u0433\u0440\u0435\u0431\u0435\u0448\u043a\u0443, \u043a\u0440\u0430\u0431\u0443 \u0438 \u0432\u043e\u043d\u0433\u043e\u043b\u0435. \u041a\u043e\u0440\u043c\u0438\u043c, \u043f\u043e\u0438\u043c, \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c. \u0418\u0437 \u042f\u043f\u043e\u043d\u0441\u043a\u043e\u0433\u043e \u043c\u043e\u0440\u044f \u043f\u0440\u044f\u043c\u043e \u0432 \u0432\u0430\u0448\u0438 \u0442\u0430\u0440\u0435\u043b\u043a\u0438!"},{id:5,title:"Lorem Ipsum",image:"https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",description:"\u0420\u042b\u0411\u0410, \u041c\u041e\u0420\u0415\u041f\u0420\u041e\u0414\u0423\u041a\u0422\u042b. \u041f\u0440\u043e\u0435\u043a\u0442-\u043f\u0440\u0438\u0432\u0435\u0442 \u0441 \u0414\u0430\u043b\u044c\u043d\u0435\u0433\u043e \u0412\u043e\u0441\u0442\u043e\u043a\u0430. \u0421\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043b\u0435\u043d \u0441 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u0431\u0435\u043b\u043a\u043e\u0432. \u0425\u0430\u0440\u0438\u0437\u043c\u0430\u0442\u0438\u0447\u0435\u043d, \u043a\u0430\u043a \u043c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043a\u0440\u0435\u0432\u0435\u0442\u043a\u0430. \u0412\u044b\u0437\u044b\u0432\u0430\u0435\u0442 \u043f\u0440\u0438\u0432\u044b\u043a\u0430\u043d\u0438\u0435 \u043a \u0433\u0440\u0435\u0431\u0435\u0448\u043a\u0443, \u043a\u0440\u0430\u0431\u0443 \u0438 \u0432\u043e\u043d\u0433\u043e\u043b\u0435. \u041a\u043e\u0440\u043c\u0438\u043c, \u043f\u043e\u0438\u043c, \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c. \u0418\u0437 \u042f\u043f\u043e\u043d\u0441\u043a\u043e\u0433\u043e \u043c\u043e\u0440\u044f \u043f\u0440\u044f\u043c\u043e \u0432 \u0432\u0430\u0448\u0438 \u0442\u0430\u0440\u0435\u043b\u043a\u0438!"}];function F(){return(0,x.jsxs)(O.Z,{className:"homepage",children:[(0,x.jsx)(O.Z,{sx:{bgcolor:"background.paper",mt:"48px",mb:"48px"},children:(0,x.jsx)(Y.Z,{maxWidth:"md",children:(0,x.jsx)(V.Z,{variant:"h5",align:"center",color:"text.secondary",paragraph:!0,children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u043d\u0430\u0448 \u0444\u0443\u0434\u043a\u043e\u0440\u0442! \u041c\u044b \u0440\u0430\u0434\u044b \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0432\u0430\u043c \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0432\u043a\u0443\u0441\u043d\u044b\u0445 \u0431\u043b\u044e\u0434, \u0440\u0430\u0437\u043d\u044b\u0445 \u043a\u0443\u0445\u043e\u043d\u044c \u0438 \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0432\u043a\u0443\u0441. \u041d\u0430\u0448\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0448\u0435\u0444-\u043f\u043e\u0432\u0430\u0440\u043e\u0432 \u0442\u0449\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043e\u0442\u0431\u0438\u0440\u0430\u0435\u0442 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u0438 \u0433\u043e\u0442\u043e\u0432\u0438\u0442 \u043a\u0430\u0436\u0434\u043e\u0435 \u0431\u043b\u044e\u0434\u043e \u0441 \u043b\u044e\u0431\u043e\u0432\u044c\u044e. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0441\u043b\u0430\u0436\u0434\u0430\u0442\u044c\u0441\u044f \u0432\u043a\u0443\u0441\u043e\u043c \u0443 \u043d\u0430\u0441 \u043d\u0430 \u043c\u0435\u0441\u0442\u0435 \u0438\u043b\u0438 \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0441 \u0441\u043e\u0431\u043e\u0439."})})}),(0,x.jsx)(Y.Z,{sx:{mt:"64px",mb:"48px",px:"0px !important"},maxWidth:"xl",children:(0,x.jsx)(I,{container:!0,spacing:4,children:$.map((function(n){return(0,x.jsx)(I,{item:!0,xs:12,sm:12,md:6,children:(0,x.jsxs)(h,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,x.jsx)(T.rU,{className:"homepage__image-wrapper",to:"".concat("/react-final","/"),children:(0,x.jsx)("img",{className:"homepage__image",src:n.image,alt:n.title})})," ",(0,x.jsxs)(N,{sx:{flexGrow:1},children:[(0,x.jsx)(V.Z,{gutterBottom:!0,variant:"h5",component:"h2",children:n.title}),(0,x.jsx)(V.Z,{children:n.description})]}),(0,x.jsx)(S,{children:(0,x.jsx)(i.Z,{size:"large",children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c"})})]})},n.id)}))})})]})}}}]);
//# sourceMappingURL=276.577bf507.chunk.js.map