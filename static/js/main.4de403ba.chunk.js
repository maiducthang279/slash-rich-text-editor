(this["webpackJsonpslash-rich-text-editor-example"]=this["webpackJsonpslash-rich-text-editor-example"]||[]).push([[0],{10:function(e,t,n){e.exports=n.p+"static/media/example.eb8e7779.png"},12:function(e,t,n){e.exports=n(26)},13:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);n(13);var a=n(0),r=n.n(a),l=n(7),c=n.n(l),u=n(1),i=n(5),o=n(4),s=n(8),d=n.n(s),f=n(11),m="_styles-module__page__1PY8t",v="_styles-module__block__3PFQS",g="_styles-module__selectMenu__17k2C",b="_styles-module__items__GSnNY",p="_styles-module__selected__2tiFr",h="_styles-module__label__3sXmF",O="_styles-module__tag__kR9pS",j=[{id:"page-title",tag:"h1",label:"Page Title"},{id:"heading",tag:"h2",label:"Heading"},{id:"subheading",tag:"h3",label:"Subheading"},{id:"paragraph",tag:"p",label:"Paragraph"}],y=function(e){var t=e.position,n=e.onSelect,l=e.close,c=Object(a.useState)(""),i=Object(u.a)(c,2),o=i[0],s=i[1],d=Object(a.useState)(j),m=Object(u.a)(d,2),v=m[0],y=m[1],E=Object(a.useState)(0),_=Object(u.a)(E,2),k=_[0],S=_[1],x=t.x,w={top:t.y-150>0?t.y-150:t.y+30,left:x};return Object(a.useEffect)((function(){S(0),y(Object(f.a)(j,o,{keys:["tag","label"]}))}),[o]),Object(a.useEffect)((function(){var e=function(e){var t;if("Enter"===e.key)e.preventDefault(),null!==(t=v[k])&&void 0!==t&&t.tag&&n(v[k].tag);else if("Tab"===e.key||"ArrowDown"===e.key){e.preventDefault();var a=k===v.length-1?0:k+1;S(a)}else if("ArrowUp"===e.key){e.preventDefault();var r=0===k?v.length-1:k-1;S(r)}else"Backspace"===e.key?o?s(o.slice(0,-1)):l():e.ctrlKey||e.shiftKey||e.metaKey||s(o+e.key)};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[v,k]),r.a.createElement("div",{className:g,style:w},r.a.createElement("div",{className:b},v.map((function(e,t){return r.a.createElement("div",{className:v.indexOf(e)===k?p:"",key:t,role:"button",tabIndex:0,onClick:function(){return n(e.tag)}},r.a.createElement("p",{className:h},e.label),r.a.createElement("p",{className:O},r.a.createElement("i",null,e.tag)))}))))},E=function(){return Date.now().toString(36)+Math.random().toString(36).substring(2)},_=function(e){var t=document.createRange(),n=window.getSelection();t.selectNodeContents(e),t.collapse(!1),null===n||void 0===n||n.removeAllRanges(),null===n||void 0===n||n.addRange(t),e.focus()},k=function(e){var t=Object(a.useState)(e),n=Object(u.a)(t,2),r=n[0],l=n[1],c=Object(a.useRef)(e);return[r,function(e){return c.current=e instanceof Function?e(c.current):e,l(c.current)},function(){return c.current}]},S=function(e){var t=e.id,n=e.initialHtml,l=e.initialTag,c=e.updatePage,i=e.addBlock,o=e.deleteBlock,s=Object(a.useRef)(null),f=k(""),m=Object(u.a)(f,3),g=m[0],b=m[1],p=m[2],h=Object(a.useState)("p"),O=Object(u.a)(h,2),j=O[0],E=O[1],S=k(""),x=Object(u.a)(S,3),w=x[1],R=x[2],L=k(""),N=Object(u.a)(L,3),C=N[1],D=N[2],T=k(!1),B=Object(u.a)(T,3),F=B[0],P=B[1],K=B[2],A=Object(a.useState)(null),H=Object(u.a)(A,2),I=H[0],J=H[1];Object(a.useEffect)((function(){b(n),E(l)}),[]),Object(a.useEffect)((function(){c({id:t,html:g,tag:j,ref:s.current})}),[g,j]),Object(a.useEffect)((function(){s.current&&(_(s.current),U())}),[j]);var M=function(){var e=function(){var e,t,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a="undefined"!==typeof window.getSelection;if(a){var r=window.getSelection();if(r&&0!==r.rangeCount){var l=r.getRangeAt(0).cloneRange();l.collapse(!!n);var c=l.getClientRects()[0];c&&(e=c.left,t=c.top)}}return{x:e,y:t}}(),t=e.x,n=e.y;P(!0),J({x:t||0,y:n||0}),document.addEventListener("click",U)},U=function e(){w(R()),P(!1),J(null),document.removeEventListener("click",e)};return r.a.createElement(r.a.Fragment,null,F&&I&&r.a.createElement(y,{position:I,onSelect:function(e){E(e),b(R())},close:U}),r.a.createElement(d.a,{id:t,className:v,innerRef:s,html:g,tagName:j,placeholder:"Type '/' for command",onChange:function(e){b(e.target.value)},onKeyDown:function(e){var n=e.key;"/"===n&&w(p()),"Backspace"!==n||p()||(e.preventDefault(),o({id:t,ref:s.current})),"Enter"===n&&(K()?e.preventDefault():"Shift"!==D()?(e.preventDefault(),i({id:t,ref:s.current})):n="Shift"),C(n)},onKeyUp:function(e){"Shift"===e.key&&C(""),"/"===e.key&&M()}}))},x={id:E(),html:"",tag:"p",ref:null},w=function(e){var t=e.value,n=void 0===t?[x]:t,l=e.onChange,c=void 0===l?function(){}:l,s=Object(a.useState)(n),d=Object(u.a)(s,2),f=d[0],v=d[1],g=Object(a.useRef)(null),b=Object(a.useRef)(null),p=Object(a.useRef)(!1),h=Object(a.useRef)(null);Object(a.useLayoutEffect)((function(){var e,t,n=null===(e=f.find((function(e){var t;return e.id===(null===g||void 0===g||null===(t=g.current)||void 0===t?void 0:t.id)})))||void 0===e||null===(t=e.ref)||void 0===t?void 0:t.nextElementSibling,a=b.current;n&&(n.focus(),g.current=null),a&&(a.focus(),_(a),b.current=null),c(f)}),[f]),Object(a.useEffect)((function(){return document.addEventListener("mousedown",O),document.addEventListener("mouseup",j),document.addEventListener("mousemove",y),function(){document.removeEventListener("mousedown",O),document.removeEventListener("mouseup",j),document.removeEventListener("mousemove",y)}}),[]);var O=function(){p.current=!0},j=function(){p.current=!1},y=function(e){p.current&&e.target!==h.current&&(h.current=e.target)},k=Object(a.useCallback)((function(e){g.current=null;var t=f.find((function(t){return t.id===e.id}));if(t){var n=f.indexOf(t),a=Object(o.a)(f);a[n]=Object(i.a)(Object(i.a)({},a[n]),{},{tag:e.tag,html:e.html,ref:e.ref}),v(a)}}),[f]),w=function(e){v((function(t){var n={id:E(),html:"",tag:"p",ref:null},a=t.map((function(e){return e.id})).indexOf(e.id),r=Object(o.a)(t);return r.splice(a+1,0,n),g.current=e,r}))},R=function(e){v((function(t){var n,a=null===e||void 0===e||null===(n=e.ref)||void 0===n?void 0:n.previousElementSibling;if(t.length>1&&a){b.current=a;var r=t.map((function(e){return e.id})).indexOf(e.id),l=Object(o.a)(t);return l.splice(r,1),l}return t}))};return r.a.createElement("div",{className:m},f.map((function(e,t){return r.a.createElement(S,{key:t,id:e.id,initialTag:e.tag,initialHtml:e.html,updatePage:k,addBlock:w,deleteBlock:R})})))},R=(n(25),n(10)),L=n.n(R),N=function(){var e=Object(a.useState)([{id:"default",html:"This is a title",tag:"h1",ref:null},{id:"default1",html:"This is a heading (h2)",tag:"h2",ref:null},{id:"default2",html:"This is a subheading (h3)",tag:"h3",ref:null},{id:"default3",html:"This is a paragraph",tag:"p",ref:null}]),t=Object(u.a)(e,2),n=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"tutorial_container"},r.a.createElement("p",null,"Open context menu by typing '/'"),r.a.createElement("img",{width:200,src:L.a,alt:"example"})),r.a.createElement(w,{value:n,onChange:function(e){return l(e)}}))};c.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.4de403ba.chunk.js.map