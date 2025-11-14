(()=>{var a=console.log.bind(window,"%cLOG:","color: white; background-color: red;");function h(e){let t=document.createElement("div");t.className="country-card",t.addEventListener("click",()=>{C(e)});let o=e.population?e.population.toLocaleString():"N/A",n=e.region||"N/A",i=e.capital?e.capital[0]:"N/A";return t.innerHTML=`
  <img src="${e.flags.png}" alt="Flag of ${e.name.common}" class="country-flag" />
  <div class="country-info">
    <div class="country-name">${e.name.common}</div>
    <div class="country-detail"><strong>Population:</strong> ${o}</div>
    <div class="country-detail"><strong>Region:</strong> ${n}</div>
    <div class="country-detail"><strong>Capital:</strong> ${i}</div>
  </div>
  `,t}function c(e){let t=document.getElementById("content"),o=document.getElementById("resultsCount");if(o.textContent=`${e.length} ${e.length===1?"country":"countries"}`,e.length===0){t.innerHTML="<div class='no-results'>No countries found. Try a different query.</div>";return}let n=document.createElement("div");n.className="countries-grid",e.forEach(i=>{n.appendChild(h(i))}),t.innerHTML="",t.appendChild(n)}function C(e){a("Country clicked:",e.name.common);let t=document.getElementById("modal"),o=document.getElementById("modalBody"),n=document.getElementById("closeModal"),i=e.population?e.population.toLocaleString():"N/A",d=e.capital?e.capital.join(", "):"N/A",l=e.languages?Object.values(e.languages).join(", "):"N/A",g=e.currencies?Object.values(e.currencies).map(s=>s.name).join(", "):"N/A",m=e.region||"N/A",v=e.subregion||"N/A",f=e.area?e.area.toLocaleString()+" km\xB2":"N/A";o.innerHTML=`
                <img src="${e.flags.png}" alt="${e.name.common} flag" class="modal-flag">
                <div class="modal-info">
                    <h2 class="modal-title">${e.name.common}</h2>
                    <div class="modal-detail"><strong>Official Name:</strong> ${e.name.official}</div>
                    <div class="modal-detail"><strong>Capital:</strong> ${d}</div>
                    <div class="modal-detail"><strong>Region:</strong> ${m}</div>
                    <div class="modal-detail"><strong>Subregion:</strong> ${v}</div>
                    <div class="modal-detail"><strong>Population:</strong> ${i}</div>
                    <div class="modal-detail"><strong>Area:</strong> ${f}</div>
                    <div class="modal-detail"><strong>Languages:</strong> ${l}</div>
                    <div class="modal-detail"><strong>Currencies:</strong> ${g}</div>
                </div>
            `,t.classList.add("active"),n.addEventListener("click",()=>{t.classList.remove("active")}),t.addEventListener("click",s=>{s.target===t&&t.classList.remove("active")}),document.addEventListener("keydown",s=>{s.key==="Escape"&&t.classList.remove("active")})}async function p(){try{let t=await fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,region,subregion,flags,languages,currencies,area");if(!t.ok)throw new Error("Failed to fetch countries.");return await t.json()}catch(e){throw new Error("Failed to fetch countries: "+e.message)}}function u(e,t,o){let n=t.value.toLowerCase(),i=o.value;a("Search input changed:",n),a("Region filter changed:",i);let d=e.filter(l=>{let g=l.name.common.toLowerCase().includes(n),m=i==="all"||l.region===i;return g&&m});c(d)}a("Hello, Restcountries!");var r=[];window.addEventListener("DOMContentLoaded",async()=>{a("DOM fully loaded and parsed");let e=document.getElementById("searchInput"),t=document.getElementById("regionFilter");e.addEventListener("input",()=>{u(r,e,t)}),t.addEventListener("change",()=>{u(r,e,t)});try{r=await p(),a("Fetched countries:",r)}catch(o){a("Error fetching countries:",o);let n=document.getElementById("content");n.innerHTML="<div class='error'>Error fetching countries. Please try again later.</div>";return}c(r)});})();
