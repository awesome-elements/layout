let e,t,n=!1;const l={},s=e=>"object"==(e=typeof e)||"function"===e,o=(e,t,...n)=>{let l=null,o=!1,c=!1;const i=[],a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!s(l))&&(l+=""),o&&c?i[i.length-1].t+=l:i.push(o?r(null,l):l),c=o)};a(n);const u=r(e,null);return u.l=t,i.length>0&&(u.o=i),u},r=(e,t)=>({i:0,u:e,t,h:null,o:null,l:null}),c={},i=e=>E(e).m,a=new WeakMap,u=e=>"sc-"+e.$,f=(e,t,n,l,o,r)=>{if(n!==l){let c=U(e,t);t.toLowerCase();{const i=s(l);if((c||i&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{const s=null==l?"":l;"list"===t?c=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!c||4&r||o)&&!i&&e.setAttribute(t,l=!0===l?"":l)}}},d=(e,t,n,s)=>{const o=11===t.h.nodeType&&t.h.host?t.h.host:t.h,r=e&&e.l||l,c=t.l||l;for(s in r)s in c||f(o,s,r[s],void 0,n,t.i);for(s in c)f(o,s,r[s],c[s],n,t.i)},h=(t,n,l)=>{const s=n.o[l];let o,r,c=0;if(o=s.h=D.createElement(s.u),d(null,s,!1),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),s.o)for(c=0;c<s.o.length;++c)r=h(t,s,c),r&&o.appendChild(r);return o},m=(e,n,l,s,o,r)=>{let c,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);o<=r;++o)s[o]&&(c=h(null,l,o),c&&(s[o].h=c,i.insertBefore(c,n)))},$=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.h.remove()},p=(e,t)=>e.u===t.u,y=(e,t)=>{const n=t.h=e.h,l=e.o,s=t.o;"slot"===t.u||d(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,r=0,c=t.length-1,i=t[0],a=t[c],u=l.length-1,f=l[0],d=l[u];for(;o<=c&&r<=u;)null==i?i=t[++o]:null==a?a=t[--c]:null==f?f=l[++r]:null==d?d=l[--u]:p(i,f)?(y(i,f),i=t[++o],f=l[++r]):p(a,d)?(y(a,d),a=t[--c],d=l[--u]):p(i,d)?(y(i,d),e.insertBefore(i.h,a.h.nextSibling),i=t[++o],d=l[--u]):p(a,f)?(y(a,f),e.insertBefore(a.h,i.h),a=t[--c],f=l[++r]):(s=h(t&&t[r],n,r),f=l[++r],s&&i.h.parentNode.insertBefore(s,i.h));o>c?m(e,null==l[u+1]?null:l[u+1].h,n,l,r,u):r>u&&$(t,o,c)})(n,l,t,s):null!==s?m(n,null,t,s,0,s.length-1):null!==l&&$(l,0,l.length-1)},b=(e,t)=>{t&&!e.p&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.p=t)))},w=(e,t)=>{if(e.i|=16,!(4&e.i))return b(e,e.S),X((()=>S(e,t)));e.i|=512},S=(e,t)=>{const n=e.g;let l;return l=C(n,t?"componentWillLoad":"componentWillUpdate"),M(l,(()=>g(e,n,t)))},g=async(e,t,n)=>{const l=e.m,s=l["s-rc"];n&&(e=>{const t=e.j,n=e.m,l=t.i,s=((e,t)=>{let n=u(t);const l=R.get(n);if(e=11===e.nodeType?e:D,l)if("string"==typeof l){let t,s=a.get(e=e.head||e);s||a.set(e,s=new Set),s.has(n)||(t=D.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e);j(e,t),s&&(s.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>k(e);0===t.length?n():(Promise.all(t).then(n),e.i|=4,t.length=0)}},j=(n,l)=>{try{l=l.render(),n.i&=-17,n.i|=2,((n,l)=>{const s=n.m,i=n.j,a=n.k||r(null,null),u=(e=>e&&e.u===c)(l)?l:o(null,null,l);t=s.tagName,i.v&&(u.l=u.l||{},i.v.map((([e,t])=>u.l[t]=s[e]))),u.u=null,u.i|=4,n.k=u,u.h=a.h=s.shadowRoot||s,e=s["s-sc"],y(a,u)})(n,l)}catch(e){A(e,n.m)}return null},k=e=>{const t=e.m,n=e.g,l=e.S;64&e.i||(e.i|=64,O(t),C(n,"componentDidLoad"),e.C(t),l||v()),e.M(t),e.p&&(e.p(),e.p=void 0),512&e.i&&Q((()=>w(e,!1))),e.i&=-517},v=()=>{O(D.documentElement),Q((()=>(e=>{const t=V.ce("appload",{detail:{namespace:"awesome-elements"}});return e.dispatchEvent(t),t})(q)))},C=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){A(e)}},M=(e,t)=>e&&e.then?e.then(t):t(),O=e=>e.classList.add("hydrated"),P=(e,t,n)=>{if(t.O){e.watchers&&(t.P=e.watchers);const l=Object.entries(t.O),o=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return((e,t)=>E(this).L.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=E(e),r=o.m,c=o.L.get(t),i=o.i,a=o.g;if(n=((e,t)=>null==e||s(e)?e:2&t?parseFloat(e):1&t?e+"":e)(n,l.O[t][0]),(!(8&i)||void 0===c)&&n!==c&&(!Number.isNaN(c)||!Number.isNaN(n))&&(o.L.set(t,n),a)){if(l.P&&128&i){const e=l.P[t];e&&e.map((e=>{try{a[e](n,c,t)}catch(e){A(e,r)}}))}2==(18&i)&&w(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=E(this);return n.W.then((()=>n.g[e](...t)))}})})),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){V.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))l=this[t],delete this[t];else if(o.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==l)return;this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.v.push([e,s]),s}))}}return e},L=e=>{C(e,"connectedCallback")},W=(e,t={})=>{const n=[],l=t.exclude||[],s=q.customElements,o=D.head,r=o.querySelector("meta[charset]"),c=D.createElement("style"),i=[];let a,f=!0;Object.assign(V,t),V.N=new URL(t.resourcesUrl||"./",D.baseURI).href,e.map((e=>{e[1].map((t=>{const o={i:t[0],$:t[1],O:t[2],T:t[3]};o.O=t[2],o.v=[],o.P={};const r=o.$,c=class extends HTMLElement{constructor(e){super(e),T(e=this,o),1&o.i&&e.attachShadow({mode:"open"})}connectedCallback(){a&&(clearTimeout(a),a=null),f?i.push(this):V.jmp((()=>(e=>{if(0==(1&V.i)){const t=E(e),n=t.j,l=()=>{};if(1&t.i)L(t.g);else{t.i|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){b(t,t.S=n);break}}n.O&&Object.entries(n.O).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.i)){{if(t.i|=32,(s=H(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.P=s.watchers,P(s,n,2),s.isProxied=!0);const e=()=>{};t.i|=8;try{new s(t)}catch(e){A(e)}t.i&=-9,t.i|=128,e(),L(t.g)}if(s.style){let e=s.style;const t=u(n);if(!R.has(t)){const l=()=>{};((e,t,n)=>{let l=R.get(e);z&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=t:l.replaceSync(t)):l=t,R.set(e,l)})(t,e,!!(1&n.i)),l()}}}const o=t.S,r=()=>w(t,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,t,n)}l()}})(this)))}disconnectedCallback(){V.jmp((()=>(()=>{0==(1&V.i)&&C(E(this).g,"disconnectedCallback")})()))}componentOnReady(){return E(this).U}};o.A=e[0],l.includes(r)||s.get(r)||(n.push(r),s.define(r,P(c,o,1)))}))})),c.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),o.insertBefore(c,r?r.nextSibling:o.firstChild),f=!1,i.length?i.map((e=>e.connectedCallback())):V.jmp((()=>a=setTimeout(v,30)))},x=new WeakMap,E=e=>x.get(e),N=(e,t)=>x.set(t.g=e,t),T=(e,t)=>{const n={i:0,m:e,j:t,L:new Map};return n.W=new Promise((e=>n.M=e)),n.U=new Promise((e=>n.C=e)),e["s-p"]=[],e["s-rc"]=[],x.set(e,n)},U=(e,t)=>t in e,A=(e,t)=>(0,console.error)(e,t),F=new Map,H=e=>{const t=e.$.replace(/-/g,"_"),n=e.A,l=F.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(F.set(n,e),e[t])),A)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},R=new Map,q="undefined"!=typeof window?window:{},D=q.document||{head:{}},V={i:0,N:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},_=e=>Promise.resolve(e),z=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),B=[],G=[],I=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&V.i?Q(K):V.raf(K))},J=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){A(e)}e.length=0},K=()=>{J(B),J(G),(n=B.length>0)&&V.raf(K)},Q=e=>_().then(e),X=I(G,!0);export{c as H,W as b,i as g,o as h,_ as p,N as r}