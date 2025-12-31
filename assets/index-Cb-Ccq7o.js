(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();let u;const l=document.getElementById("option"),a=document.getElementById("gallery"),d=document.getElementById("button");async function m(){const o="/diem2025funnymoment/data.json";try{const t=await fetch(o);if(!t.ok)throw new Error(`Response status: ${t.status}`);return await t.json()}catch(t){console.error(t.message)}}u=await m();function f(o){let t="";function i(n,e,r){return`<div class="gradient-ultra gradient-smooth duration-300 ease-in-out cursor-pointer flex items-center gap-2 p-3 rounded-lg">
          <img
            class="w-20 h-20 rounded-full"
            src=${e}
            alt=${r}
          />
          <h2 class="text-lg">${n}</h2>
        </div>`}for(let n=0;n<o.length;n++)t+=i(o[n].name,o[n].avatar,o[n].alt);l.innerHTML=t}function g(o){const t=o.target.closest(".gradient-ultra");if(!t||!l.contains(t))return;l.classList.add("hidden"),d.classList.remove("hidden"),a.classList.remove("hidden");const i=t.querySelector("img").alt;if(!i)return;console.log(i);async function n(){let e,r="";const c="/diem2025funnymoment/image.json";try{const s=await fetch(c);if(!s.ok)throw new Error(`Response status: ${s.status}`);e=(await s.json())[i]}catch(s){console.error(s.message)}console.log(e);for(let s=0;s<e.length;s++)r+=`
        <div class="mb-4 w-full">
          <img src="${e[s].url}" alt="" />
        </div>
      `;a.innerHTML=r}n()}f(u);l.addEventListener("click",g);d.addEventListener("click",()=>{l.classList.remove("hidden"),d.classList.add("hidden"),a.classList.add("hidden")});
