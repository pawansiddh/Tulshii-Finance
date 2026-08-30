(async()=>{
// Cache-safe Tulshii bootstrap. Keep the previous consolidated runtime, but prevent
// the superseded PAWANRO sidebar owner from ever mounting.
window.__PAWANRO_SIDEBAR_OWNER_R2__=true;
const load=src=>new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.async=false;s.onload=()=>resolve();s.onerror=()=>reject(new Error('Failed to load '+src));document.documentElement.appendChild(s)});
try{
 await load('finance-sidebar-owner-r3.js?v=tulshii-finance-brand-r1-20260830');
 document.documentElement.dataset.tulshiiSidebar='r3';
 // Compatibility with the existing consolidated health monitor only.
 document.documentElement.dataset.pvSidebarShell='owner-r2';
 await load('patch-loader-fast-r2.js?v=tulshii-finance-runtime-r1-20260830');
}catch(error){
 console.error('TULSHII Finance bootstrap failed',error);
 document.documentElement.classList.remove('pv-demo2-booting');
}
})();