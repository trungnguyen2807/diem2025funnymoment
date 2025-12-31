(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();let d;const c=document.getElementById("option"),l=document.getElementById("gallery"),a=document.getElementById("button"),u="/diem2025funnymoment/langdiem2025";async function m(){const s="/diem2025funnymoment/data.json";try{const t=await fetch(s);if(!t.ok)throw new Error(`Response status: ${t.status}`);return await t.json()}catch(t){console.error(t.message)}}d=await m();console.log(d);function f(s){let t="";function r(o,e,n){return`<div class="gradient-ultra gradient-smooth duration-300 ease-in-out cursor-pointer flex items-center gap-2 p-3 rounded-lg">
          <img
            class="w-20 h-20 rounded-full"
            src=${e}
            alt=${n}
          />
          <h2 class="text-lg">${o}</h2>
        </div>`}for(let o=0;o<s.length;o++)t+=r(s[o].name,s[o].avatar,s[o].alt);c.innerHTML=t}function g(s){return new Promise(t=>{const r=new Image;r.onload=()=>t(!0),r.onerror=()=>t(!1),r.src=s})}function h(s){c.classList.add("hidden"),a.classList.remove("hidden"),l.classList.remove("hidden");const t=s.target.closest(".gradient-ultra");if(!t||!c.contains(t))return;const r=t.querySelector("img").alt;if(!r)return;console.log(r);async function o(){let e=0,n="";for(;;){const i=`${u}/${r}/${r}${e}.png`;if(!await g(i))break;n+=`
      <div class="mb-4 w-full">
        <img src="${i}" alt="" />
      </div>
    `,e++}l.innerHTML=n}o()}f(d);c.addEventListener("click",h);a.addEventListener("click",()=>{c.classList.remove("hidden"),a.classList.add("hidden"),l.classList.add("hidden")});
