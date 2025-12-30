(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();let d;const c=document.getElementById("option"),l=document.getElementById("gallery"),a=document.getElementById("button"),u="/src/assets/langdiem2025";async function f(){const o="/data.json";try{const t=await fetch(o);if(!t.ok)throw new Error(`Response status: ${t.status}`);return await t.json()}catch(t){console.error(t.message)}}d=await f();console.log(d);function m(o){let t="";function n(s,e,r){return`<div class="gradient-ultra gradient-smooth duration-300 ease-in-out cursor-pointer flex items-center gap-2 p-3 rounded-lg">
          <img
            class="w-20 h-20 rounded-full"
            src=${e}
            alt=${r}
          />
          <h2 class="text-lg">${s}</h2>
        </div>`}for(let s=0;s<o.length;s++)t+=n(o[s].name,o[s].avatar,o[s].alt);c.innerHTML=t}function g(o){return new Promise(t=>{const n=new Image;n.onload=()=>t(!0),n.onerror=()=>t(!1),n.src=o})}function h(o){c.classList.add("hidden"),a.classList.remove("hidden"),l.classList.remove("hidden");const t=o.target.closest(".gradient-ultra");if(!t||!c.contains(t))return;const n=t.querySelector("img").alt;if(!n)return;console.log(n);async function s(){let e=0,r="";for(;;){const i=`${u}/${n}/${n}${e}.png`;if(!await g(i))break;r+=`
      <div class="mb-4 w-full">
        <img src="${i}" alt="" />
      </div>
    `,e++}l.innerHTML=r}s()}m(d);c.addEventListener("click",h);a.addEventListener("click",()=>{c.classList.remove("hidden"),a.classList.add("hidden"),l.classList.add("hidden")});
