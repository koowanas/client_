(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),o=n(4),s=n.n(o),a=(n(10),n(5)),l=(n(11),[{_id:"1",text:"Ahsan's Twitch",link:"https://twitch.tv/codewithahsan"},{_id:"2",text:"Get a job",link:"https://rozee.pk"},{_id:"3",text:"Ahsan's Twitch",link:"https://twitch.tv/codewithahsan"},{_id:"4",text:"Get a job",link:"https://rozee.pk"},{_id:"5",text:"Ahsan's Twitch",link:"https://twitch.tv/codewithahsan"},{_id:"6",text:"Get a job",link:"https://rozee.pk"},{_id:"7",text:"Ahsan's Twitch",link:"https://twitch.tv/codewithahsan"},{_id:"8",text:"Get a job",link:"https://rozee.pk"},{_id:"9",text:"Ahsan's Twitch",link:"https://twitch.tv/codewithahsan"},{_id:"10",text:"Get a job",link:"https://rozee.pk"}]),r=n(3),h=(n(12),n(0)),d=function(t){var e=t.note,n=t.onNoteUpdate;return Object(h.jsxs)("div",{className:"note",children:[Object(h.jsx)("div",{onBlur:function(t){var i=t.currentTarget.textContent;if(i!==e.text){console.log("note text changed");var c=Object(r.a)(Object(r.a)({},e),{},{text:i||""});n(c)}},contentEditable:!0,suppressContentEditableWarning:!0,className:"note__text",children:e.text}),Object(h.jsx)("div",{className:"note__link",children:Object(h.jsx)("a",{href:e.link,children:e.link})})]})};var p=function(){var t=Object(i.useState)([]),e=Object(a.a)(t,2),n=e[0],c=e[1];Object(i.useEffect)((function(){var t=localStorage.getItem("my-note");if(t){var e=JSON.parse(t);c(e)}else c(l)}),[]),Object(i.useEffect)((function(){console.log("saving localStorage");var t=JSON.stringify(n);localStorage.setItem("my-notes",t)}),[n]),console.log("rerendering"),console.log(n);var o=function(t){console.log("alue updated in the app component"),console.log(t);var e=n.map((function(e){return e._id===t._id?t:e}));c(e)};return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{children:"Notes Application"}),Object(h.jsx)("div",{className:"notes-list",children:n.map((function(t,e){return Object(h.jsx)(d,{note:t,onNoteUpdate:o},e)}))})]})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),i(t),c(t),o(t),s(t)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),j()}],[[14,1,2]]]);
//# sourceMappingURL=main.1a163863.chunk.js.map