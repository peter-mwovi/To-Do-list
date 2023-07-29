"use strict";(self.webpackChunkwebpack_config=self.webpackChunkwebpack_config||[]).push([[179],{426:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(81),a=t.n(o),r=t(645),s=t.n(r)()(a());s.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: monospace, cursive;\n  background: rgb(207, 245, 230);\n}\n\n.todo-list-container {\n  margin-left: 35%;\n  margin-top: 10%;\n  padding: 20px;\n  width: 30%;\n  background: #fff;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.heading {\n  margin: 20px 0 20px 20px;\n  color: #000;\n}\n\nul {\n  list-style: none;\n  margin-left: 15px;\n  width: 100%;\n}\n\np {\n  margin-left: 20px;\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.task-container {\n  width: 95%;\n  margin: 0 20px 10px 20px;\n  display: flex;\n  justify-content: space-between;\n}\n\ninput {\n  border: none;\n  padding: 5px;\n  width: 95%;\n  font-size: 12px;\n}\n\n#task-input:focus {\n  outline-color: rgb(207, 245, 230);\n  background-color: rgb(227, 237, 255);\n}\n\ninput::placeholder {\n  color: rgb(158, 150, 150);\n}\n\n#add-btn {\n  padding: 3px;\n  background-color: #fff;\n  border: none;\n  cursor: pointer;\n  font-size: 20px;\n}\n\n.task-list {\n  width: 95%;\n  margin-left: 7px;\n  background-color: #fff;\n  border-bottom: 1px solid #929292;\n  display: flex;\n  padding: 5px;\n}\n\n.checked {\n  margin-right: 10px;\n  width: 16px;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.task-index {\n  color: #000;\n  display: flex;\n}\n\n.task-name {\n  width: 290px;\n  margin-right: 44px;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  color: rgb(65, 60, 60);\n  font-size: 16px;\n}\n\n.task-name:focus {\n  background-color: rgb(207, 245, 230);\n}\n\n.three-dot {\n  margin-right: 15px;\n  cursor: pointer;\n  font-size: 18px;\n}\n\n.trash-icon {\n  cursor: pointer;\n  font-size: 22px;\n}\n\n.hide-icon {\n  display: none;\n}\n\n.completed-task {\n  text-decoration: line-through;\n}\n\n#remove-btn {\n  border: none;\n  padding: 10px;\n  background: none;\n  font-family: monospace, cursive;\n  font-size: 20px;\n  font-weight: 400;\n  margin-left: 70px;\n  margin-top: 20px;\n  cursor: pointer;\n  font-style: italic;\n}\n\n#remove-btn:hover {\n  background: rgb(207, 245, 230);\n}",""]);const i=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&s[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},s=[],i=0;i<n.length;i++){var c=n[i],d=o.base?c[0]+o.base:c[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=a(f,o);o.byIndex=i,e.splice(i,0,{identifier:p,updater:m,references:1})}s.push(p)}return s}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var s=0;s<r.length;s++){var i=t(r[s]);e[i].references--}for(var c=o(n,a),d=0;d<r.length;d++){var l=t(r[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},757:(n,e,t)=>{var o=t(379),a=t.n(o),r=t(795),s=t.n(r),i=t(569),c=t.n(i),d=t(565),l=t.n(d),p=t(216),u=t.n(p),f=t(589),m=t.n(f),g=t(426),h={};function v(n){for(let e=0;e<n.length;e+=1)n[e].index=e+1}h.styleTagTransform=m(),h.setAttributes=l(),h.insert=c().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=u(),a()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals;let x=[];window.loadTasksToLocalStorage=()=>{const n=JSON.stringify(x);localStorage.setItem("tasks",n)},document.getElementById("add-btn").addEventListener("click",(()=>{const n=document.getElementById("task-input"),e=n.value.trim();""!==e&&(function(n,e){Array.isArray(e)||(e=[]);const t={index:e.length+1,name:n,completed:!1};e.push(t),localStorage.setItem("tasks",JSON.stringify(e))}(e,x),document.location.reload(),n.value="")}));const b=()=>{const n=document.getElementById("lists");x.length>0&&(x.forEach((e=>{const t=(n=>{const e=document.createElement("li");e.classList.add("task-list");const t=document.createElement("span");t.classList.add("task-index"),t.value=n.index;const o=document.createElement("input");o.type="checkbox",o.classList.add("checked"),o.checked=n.completed;const a=document.createElement("input");a.classList.add("task-name"),a.value=n.name,n.completed&&a.classList.add("completed-task");const r=document.createElement("span");r.classList.add("three-dot"),r.innerHTML="⋮";const s=document.createElement("span");return s.classList.add("trash-icon"),s.classList.add("hide-icon"),s.innerHTML="&#128465;",e.appendChild(t),e.appendChild(o),e.appendChild(a),e.appendChild(r),e.appendChild(s),e})(e);n.appendChild(t)})),document.querySelectorAll(".three-dot").forEach((n=>{n.addEventListener("click",(n=>{const e=n.target.parentNode.getElementsByClassName("trash-icon")[0];e.classList.contains("hide-icon")?(e.classList.remove("hide-icon"),function(n){n.addEventListener("click",(()=>{const e=n.parentNode,t=Number(e.getElementsByClassName("task-index")[0].value);!function(n,e){v(n=n.filter((n=>n.index!==e))),localStorage.setItem("tasks",JSON.stringify(n)),document.location.reload()}(x,t),v(x)}))}(e)):e.classList.add("hide-icon")}))})),document.querySelectorAll(".checked").forEach((n=>{n.addEventListener("click",(n=>{const e=n.target,t=e.parentNode.getElementsByClassName("task-name")[0];e.checked?t.classList.add("completed-task"):t.classList.remove("completed-task")}))})),document.querySelectorAll(".task-name").forEach((n=>{const e=n.parentNode.getElementsByClassName("task-index")[0].value;n.addEventListener("change",(()=>{!function(n,e,t){t[e-1].name=n,localStorage.setItem("tasks",JSON.stringify(t))}(n.value,e,x)}))})))};window.onload=()=>{x=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[],b()}}},n=>{n(n.s=757)}]);