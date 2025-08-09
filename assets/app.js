
let OFFLINE_DEMO = true; // start in demo mode
function $(s){return document.querySelector(s)}
function toast(html){const t=$("#toast");t.innerHTML=html;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),5000)}
function toggleDemo(){OFFLINE_DEMO=!OFFLINE_DEMO; $("#demoFlag").textContent=OFFLINE_DEMO?"ON":"OFF"; $("#status").textContent=OFFLINE_DEMO?"Offline Demo Mode — actions are simulated.":"Live Mode"}
function simulate(label){toast("Simulated: "+label);}
window.addEventListener("DOMContentLoaded",()=>{
  $("#btnDemo")?.addEventListener("click",toggleDemo);
  $("#btnMint")?.addEventListener("click",()=>simulate("Mint"));
  $("#btnTransfer")?.addEventListener("click",()=>simulate("Transfer"));
  $("#btnBurn")?.addEventListener("click",()=>simulate("Burn"));
  document.querySelectorAll("[data-doc-hash]").forEach(btn=>btn.addEventListener("click",()=>simulate("Record document hash")));
});
