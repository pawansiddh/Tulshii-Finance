(()=>{
if(window.__TULSHII_SIDEBAR_OWNER_R3__)return;
window.__TULSHII_SIDEBAR_OWNER_R3__=true;
// Compatibility marker for older health checks only. R3 is the sole visible brand owner.
window.__PAWANRO_SIDEBAR_OWNER_R2__=true;
document.documentElement.dataset.pvSidebarShell='tulshii-r3';
const q=(s,r=document)=>r.querySelector(s),qa=(s,r=document)=>[...r.querySelectorAll(s)],norm=v=>String(v??'').replace(/\s+/g,' ').trim();
const II_SVG=`<svg viewBox="0 0 42 46" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><linearGradient id="tg" x1="0" x2="1"><stop offset="0" stop-color="#A6BFA1"/><stop offset="1" stop-color="#8DAE59"/></linearGradient><linearGradient id="tt" x1="0" x2="1"><stop offset="0" stop-color="#5C8F8B"/><stop offset="1" stop-color="#447674"/></linearGradient></defs><circle cx="11" cy="7" r="5" fill="url(#tg)"/><circle cx="31" cy="7" r="5" fill="url(#tt)"/><path d="M6 16c0-3 2.2-5 5-5s5 2 5 5v21H6V16Z" fill="url(#tg)"/><path d="M26 16c0-3 2.2-5 5-5s5 2 5 5v21H26V16Z" fill="url(#tt)"/><path d="M15 17.5 21 24l6-6.5v7L21 31l-6-6.5v-7Z" fill="#F7F8F6"/></svg>`;
const css=document.createElement('style');css.id='tulshii-sidebar-r3-style';css.textContent=`
:root{--pv-bh:var(--pv-sidebar-head-h,var(--pv-th,64px))!important}
#pvOfflineSyncStatus{display:none!important;visibility:hidden!important}
.sidebar{overflow-x:hidden!important;padding-top:0!important}
.sidebar .brand{box-sizing:border-box!important;width:var(--pv-w,226px)!important;max-width:var(--pv-w,226px)!important;height:var(--pv-sidebar-head-h,var(--pv-th,64px))!important;min-height:var(--pv-sidebar-head-h,var(--pv-th,64px))!important;padding:0 10px!important;margin:0!important;left:0!important;right:auto!important;top:0!important;transform:none!important;border:0!important;outline:0!important;box-shadow:none!important;background:var(--sidebar,#123f2b)!important;display:flex!important;align-items:center!important;justify-content:flex-start!important;overflow:hidden!important;position:fixed!important;z-index:190!important}
.sidebar .brand::before,.sidebar .brand::after{display:none!important;content:none!important}
.sidebar .brand>hr,.sidebar .brand>.divider,.sidebar .brand>.separator,.sidebar .brand>.pv-sep,.sidebar .brand>small,.sidebar .pv-brand-actions{display:none!important}
.tulshii-brand-full{display:flex!important;align-items:center!important;min-width:0!important;height:44px!important;white-space:nowrap!important;color:#fff!important;line-height:1!important}
.tulshii-word{display:flex!important;align-items:center!important;height:42px!important;flex:0 0 auto!important}
.tulshii-text{font:500 22px/1 Arial,Helvetica,sans-serif!important;letter-spacing:.055em!important;color:#fff!important;margin-right:1px!important}
.tulshii-ii-wrap{position:relative!important;width:34px!important;height:43px!important;display:inline-flex!important;align-items:flex-start!important;justify-content:center!important;flex:0 0 34px!important;margin-left:-1px!important}
.tulshii-ii-wrap svg{width:31px!important;height:34px!important;display:block!important;margin-top:1px!important;overflow:visible!important}
.tulshii-com{position:absolute!important;left:50%!important;bottom:0!important;transform:translateX(-50%)!important;color:#fff!important;font:500 8px/1 Georgia,'Times New Roman',serif!important;letter-spacing:.02em!important}
.tulshii-finance{display:inline-flex!important;align-items:center!important;margin-left:7px!important;color:#fff!important;flex:0 0 auto!important}
.tulshii-bar{font:400 13px/1 Inter,system-ui,sans-serif!important;opacity:.72!important;margin-right:5px!important}
.tulshii-product{font:800 8.5px/1 Inter,system-ui,sans-serif!important;letter-spacing:.08em!important}
.tulshii-brand-mini{display:none!important;width:44px!important;height:48px!important;align-items:center!important;justify-content:center!important;flex:0 0 44px!important}
.tulshii-brand-mini svg{display:block!important;width:34px!important;height:38px!important}
body.pv-rail .sidebar{width:var(--pv-r,58px)!important;max-width:var(--pv-r,58px)!important;overflow:hidden!important}
body.pv-rail .sidebar .brand,.sidebar[data-pv-brand-collapsed="1"] .brand{width:var(--pv-r,58px)!important;max-width:var(--pv-r,58px)!important;height:var(--pv-sidebar-head-h,var(--pv-th,64px))!important;min-height:var(--pv-sidebar-head-h,var(--pv-th,64px))!important;padding:0!important;left:0!important;top:0!important;justify-content:center!important;overflow:hidden!important}
body.pv-rail .sidebar .tulshii-brand-full,.sidebar[data-pv-brand-collapsed="1"] .tulshii-brand-full{display:none!important}
body.pv-rail .sidebar .tulshii-brand-mini,.sidebar[data-pv-brand-collapsed="1"] .tulshii-brand-mini{display:flex!important;visibility:visible!important;opacity:1!important}
#pvSide{top:var(--pv-sidebar-head-h,var(--pv-th,64px))!important}
.sidebar [data-pv-obsolete-brand]{display:none!important}
.sidebar .pv-util-label{display:inline!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}
.sidebar[data-pv-brand-collapsed="1"] .pv-util-label{display:none!important}
`;document.head.appendChild(css);
function side(){return q('.sidebar')||q('[data-sidebar]')}
function syncHeaderHeight(){const top=q('.topbar');const h=Math.round(top?.getBoundingClientRect().height||64);document.documentElement.style.setProperty('--pv-sidebar-head-h',h+'px');document.documentElement.style.setProperty('--pv-bh',h+'px');return h}
function build(s){const b=q('.brand,.sidebar-brand,.brand-row',s);if(!b)return false;b.classList.add('brand');b.removeAttribute('style');b.replaceChildren();const full=document.createElement('div');full.className='tulshii-brand-full';full.innerHTML=`<span class="tulshii-word"><span class="tulshii-text">TULSH</span><span class="tulshii-ii-wrap">${II_SVG}<span class="tulshii-com">.com</span></span></span><span class="tulshii-finance"><span class="tulshii-bar">|</span><span class="tulshii-product">FINANCE</span></span>`;const mini=document.createElement('span');mini.className='tulshii-brand-mini';mini.setAttribute('aria-label','Tulshii');mini.innerHTML=II_SVG;b.append(full,mini);b.title='TULSHII.com | FINANCE';b.setAttribute('aria-label','TULSHII.com | FINANCE');return true}
function clean(s){const sr=s.getBoundingClientRect();qa('*',s).forEach(el=>{if(el.closest('.brand')||el.closest('button,a,input,select'))return;const t=norm(el.textContent).toUpperCase(),r=el.getBoundingClientRect(),top=r.top-sr.top;if((t==='PAWANRO FINANCE'||t==='PAVENRO FINANCE'||t==='PAWANRO'||t==='PAVENRO')||((t==='$'||t==='|'||t==='FINANCE')&&top<100)||(top>=0&&top<70&&r.height>0&&r.height<=3&&r.width>=28)){el.dataset.pvObsoleteBrand='1';el.style.setProperty('display','none','important')}});qa('#pvSide [data-pv-brand-slot="1"],#pvSide .pv-brand-render,.pv-brand-render[data-pv-brand-slot],#pvPawanroWordmark,.pv-brand-mini,.pv-brand-finance',s).forEach(el=>{if(el.closest('.tulshii-brand-full,.tulshii-brand-mini'))return;el.dataset.pvObsoleteBrand='1';el.style.setProperty('display','none','important')});q('#pvOfflineSyncStatus')?.remove()}
function refresh(force=false){syncHeaderHeight();const s=side();if(!s)return;const collapsed=document.body.classList.contains('pv-rail')||s.getBoundingClientRect().width<100;s.dataset.pvBrandCollapsed=collapsed?'1':'0';if(force||!q('.tulshii-brand-full',s)||!q('.tulshii-brand-mini',s))build(s);clean(s)}
function start(){refresh(true)}
document.addEventListener('click',()=>setTimeout(()=>refresh(false),40),true);window.addEventListener('resize',()=>refresh(false));window.addEventListener('pavenro:ready',()=>refresh(true));window.addEventListener('pavenro:local-write',()=>setTimeout(()=>refresh(false),40));start();const s=side();if(s&&'ResizeObserver'in window)new ResizeObserver(()=>refresh(false)).observe(s);const t=q('.topbar');if(t&&'ResizeObserver'in window)new ResizeObserver(()=>refresh(false)).observe(t);window.TulshiiSidebar={refresh:()=>refresh(true),version:'r3'};window.PawanroSidebarShell=window.TulshiiSidebar;
})();