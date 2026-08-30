(()=>{
if(window.__TULSHII_SIDEBAR_OWNER_R4__)return;
window.__TULSHII_SIDEBAR_OWNER_R4__=true;
window.__TULSHII_SIDEBAR_OWNER_R3__=true;
// Compatibility marker: prevents superseded PAWANRO sidebar owners from mounting.
window.__PAWANRO_SIDEBAR_OWNER_R2__=true;
document.documentElement.dataset.pvSidebarShell='tulshii-r4';
const q=(s,r=document)=>r.querySelector(s),qa=(s,r=document)=>[...r.querySelectorAll(s)],norm=v=>String(v??'').replace(/\s+/g,' ').trim();
const CODES=['INR','USD','EUR','GBP','AED','CNY','JPY','RUB','CAD','AUD','SGD','CHF','SAR','NZD','ZAR','KRW','BRL','MXN'];
const SYMBOL={INR:'₹',USD:'$',EUR:'€',GBP:'£',AED:'AED',CNY:'¥',JPY:'¥',RUB:'₽',CAD:'C$',AUD:'A$',SGD:'S$',CHF:'CHF',SAR:'SAR',NZD:'NZ$',ZAR:'R',KRW:'₩',BRL:'R$',MXN:'MX$'};
const II_SVG=`<svg viewBox="0 0 36 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="10" cy="6" r="4.6" fill="#A8BA64"/><circle cx="26" cy="6" r="4.6" fill="#5E8B89"/><path d="M6 15.2c0-2.9 1.8-4.8 4-4.8s4 1.9 4 4.8V36H6V15.2Z" fill="#A8BA64"/><path d="M22 15.2c0-2.9 1.8-4.8 4-4.8s4 1.9 4 4.8V36h-8V15.2Z" fill="#5E8B89"/><path d="M13.2 17.2 18 22.5l4.8-5.3v6.1L18 28.5l-4.8-5.2v-6.1Z" fill="#F5F8F5"/></svg>`;
const css=document.createElement('style');css.id='tulshii-sidebar-r4-style';css.textContent=`
:root{--pv-bh:var(--pv-sidebar-head-h,var(--pv-th,64px))!important}
#pvOfflineSyncStatus{display:none!important;visibility:hidden!important}
.sidebar{overflow-x:hidden!important;padding-top:0!important}
.sidebar .brand{box-sizing:border-box!important;width:var(--pv-w,249px)!important;max-width:var(--pv-w,249px)!important;height:var(--pv-sidebar-head-h,var(--pv-th,64px))!important;min-height:var(--pv-sidebar-head-h,var(--pv-th,64px))!important;padding:0 12px!important;margin:0!important;left:0!important;right:auto!important;top:0!important;transform:none!important;border:0!important;outline:0!important;box-shadow:none!important;background:var(--sidebar,#123f2b)!important;display:flex!important;align-items:center!important;justify-content:flex-start!important;overflow:hidden!important;position:fixed!important;z-index:190!important}
.sidebar .brand::before,.sidebar .brand::after{display:none!important;content:none!important}
.sidebar .brand>hr,.sidebar .brand>.divider,.sidebar .brand>.separator,.sidebar .brand>.pv-sep,.sidebar .brand>small,.sidebar .pv-brand-actions,.sidebar .pv-brand-menu,.sidebar [data-pv-brand-action]{display:none!important}
.sidebar .brand>:not(.tulshii-brand-full):not(.tulshii-brand-mini){display:none!important}
.tulshii-brand-full{display:flex!important;align-items:center!important;min-width:0!important;height:50px!important;white-space:nowrap!important;color:#fff!important;line-height:1!important;letter-spacing:0!important}
.tulshii-word{display:inline-flex!important;align-items:center!important;height:46px!important;flex:0 0 auto!important}
.tulshii-text{font:500 20px/1 Arial,Helvetica,sans-serif!important;letter-spacing:.075em!important;color:#fff!important;margin:0!important;text-shadow:none!important}
.tulshii-ii-wrap{position:relative!important;width:29px!important;height:44px!important;display:inline-flex!important;align-items:flex-start!important;justify-content:center!important;flex:0 0 29px!important;margin-left:-1px!important}
.tulshii-ii-wrap svg{width:27px!important;height:33px!important;display:block!important;margin-top:1px!important;overflow:visible!important}
.tulshii-com{position:absolute!important;left:50%!important;bottom:1px!important;transform:translateX(-50%)!important;color:rgba(255,255,255,.92)!important;font:500 7.5px/1 Georgia,'Times New Roman',serif!important;letter-spacing:.015em!important}
.tulshii-finance{display:inline-flex!important;align-items:center!important;margin-left:7px!important;color:#fff!important;flex:0 0 auto!important;height:28px!important}
.tulshii-bar{display:inline-block!important;width:1px!important;height:17px!important;background:rgba(255,255,255,.38)!important;font-size:0!important;margin:0 7px 0 0!important}
.tulshii-product{font:800 8.5px/1 Inter,system-ui,sans-serif!important;letter-spacing:.09em!important;color:#fff!important}
.tulshii-currency{display:inline-grid!important;place-items:center!important;min-width:23px!important;height:23px!important;box-sizing:border-box!important;margin-left:8px!important;padding:0 5px!important;border:1px solid rgba(255,255,255,.16)!important;border-radius:8px!important;background:rgba(255,255,255,.09)!important;color:#fff!important;font:800 11px/1 Inter,system-ui,sans-serif!important;letter-spacing:0!important;box-shadow:none!important}
.tulshii-currency[data-long="1"]{font-size:8px!important;padding:0 4px!important}
.tulshii-brand-mini{display:none!important;width:44px!important;height:48px!important;align-items:center!important;justify-content:center!important;flex:0 0 44px!important}
.tulshii-brand-mini svg{display:block!important;width:30px!important;height:37px!important;overflow:visible!important}
.tulshii-rail-currency{display:none!important}
body.pv-rail .sidebar{width:var(--pv-r,58px)!important;max-width:var(--pv-r,58px)!important;overflow:hidden!important}
body.pv-rail .sidebar .brand,.sidebar[data-pv-brand-collapsed="1"] .brand{width:var(--pv-r,58px)!important;max-width:var(--pv-r,58px)!important;height:var(--pv-sidebar-head-h,var(--pv-th,64px))!important;min-height:var(--pv-sidebar-head-h,var(--pv-th,64px))!important;padding:0!important;left:0!important;top:0!important;justify-content:center!important;overflow:hidden!important}
body.pv-rail .sidebar .tulshii-brand-full,.sidebar[data-pv-brand-collapsed="1"] .tulshii-brand-full{display:none!important}
body.pv-rail .sidebar .tulshii-brand-mini,.sidebar[data-pv-brand-collapsed="1"] .tulshii-brand-mini{display:flex!important;visibility:visible!important;opacity:1!important}
#pvSide{top:var(--pv-sidebar-head-h,var(--pv-th,64px))!important}
body.pv-rail #pvSide,.sidebar[data-pv-brand-collapsed="1"] #pvSide{padding-top:34px!important;box-sizing:border-box!important}
body.pv-rail #pvSide>.tulshii-rail-currency,.sidebar[data-pv-brand-collapsed="1"] #pvSide>.tulshii-rail-currency{display:grid!important;position:absolute!important;left:0!important;top:5px!important;width:var(--pv-r,58px)!important;height:24px!important;place-items:center!important;color:rgba(255,255,255,.96)!important;font:800 12px/1 Inter,system-ui,sans-serif!important;letter-spacing:0!important;pointer-events:none!important;z-index:4!important}
body.pv-rail #pvSide>.tulshii-rail-currency[data-long="1"],.sidebar[data-pv-brand-collapsed="1"] #pvSide>.tulshii-rail-currency[data-long="1"]{font-size:8px!important}
.sidebar [data-pv-obsolete-brand]{display:none!important}
.sidebar .pv-util-label{display:inline!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}
.sidebar[data-pv-brand-collapsed="1"] .pv-util-label{display:none!important}
`;document.head.appendChild(css);
function side(){return q('.sidebar')||q('[data-sidebar]')}
function currencySelect(){return qa('.topbar select').find(s=>qa('option',s).some(o=>CODES.includes(String(o.value||o.textContent||'').trim().toUpperCase())||CODES.some(c=>new RegExp(`\\b${c}\\b`,'i').test(o.textContent||''))))}
function currencyCode(){const s=currencySelect();const raw=`${s?.value||''} ${s?.selectedOptions?.[0]?.textContent||''}`.toUpperCase();return CODES.find(c=>new RegExp(`\\b${c}\\b`).test(raw))||'INR'}
function currencySymbol(){const c=currencyCode();return{code:c,symbol:SYMBOL[c]||c}}
function syncHeaderHeight(){const top=q('.topbar');const h=Math.round(top?.getBoundingClientRect().height||64);document.documentElement.style.setProperty('--pv-sidebar-head-h',h+'px');document.documentElement.style.setProperty('--pv-bh',h+'px');return h}
function build(s){const b=q('.brand,.sidebar-brand,.brand-row',s);if(!b)return false;b.classList.add('brand');b.removeAttribute('style');b.replaceChildren();const full=document.createElement('div');full.className='tulshii-brand-full';full.innerHTML=`<span class="tulshii-word"><span class="tulshii-text">TULSH</span><span class="tulshii-ii-wrap">${II_SVG}<span class="tulshii-com">.com</span></span></span><span class="tulshii-finance"><span class="tulshii-bar">|</span><span class="tulshii-product">FINANCE</span></span><span class="tulshii-currency" aria-label="Selected currency"></span>`;const mini=document.createElement('span');mini.className='tulshii-brand-mini';mini.setAttribute('aria-label','Tulshii');mini.innerHTML=II_SVG;b.append(full,mini);b.title='TULSHII.com | FINANCE';b.setAttribute('aria-label','TULSHII.com | FINANCE');return true}
function railCurrency(s){const host=q('#pvSide',s)||q('#pvSide')||s;let el=q('.tulshii-rail-currency',host);if(!el){el=document.createElement('div');el.className='tulshii-rail-currency';el.setAttribute('aria-label','Selected currency');host.prepend(el)}return el}
function syncCurrency(s=side()){if(!s)return;const x=currencySymbol(),full=q('.tulshii-currency',s),rail=railCurrency(s);for(const el of [full,rail])if(el){el.textContent=x.symbol;el.title=x.code;el.dataset.long=x.symbol.length>1?'1':'0';el.dataset.currency=x.code}document.documentElement.dataset.tulshiiCurrency=x.code}
function clean(s){const sr=s.getBoundingClientRect();qa('*',s).forEach(el=>{if(el.closest('.tulshii-brand-full,.tulshii-brand-mini,.tulshii-rail-currency')||el.closest('button,a,input,select'))return;const t=norm(el.textContent).toUpperCase(),r=el.getBoundingClientRect(),top=r.top-sr.top;if((t==='PAWANRO FINANCE'||t==='PAVENRO FINANCE'||t==='PAWANRO'||t==='PAVENRO')||((t==='|'||t==='FINANCE')&&top<100)||(top>=0&&top<70&&r.height>0&&r.height<=3&&r.width>=28)){el.dataset.pvObsoleteBrand='1';el.style.setProperty('display','none','important')}});qa('#pvSide [data-pv-brand-slot="1"],#pvSide .pv-brand-render,.pv-brand-render[data-pv-brand-slot],#pvPawanroWordmark,.pv-brand-mini,.pv-brand-finance',s).forEach(el=>{if(el.closest('.tulshii-brand-full,.tulshii-brand-mini'))return;el.dataset.pvObsoleteBrand='1';el.style.setProperty('display','none','important')});q('#pvOfflineSyncStatus')?.remove()}
function refresh(force=false){syncHeaderHeight();const s=side();if(!s)return;const collapsed=document.body.classList.contains('pv-rail')||s.getBoundingClientRect().width<100;s.dataset.pvBrandCollapsed=collapsed?'1':'0';if(force||!q('.tulshii-brand-full',s)||!q('.tulshii-brand-mini',s))build(s);clean(s);syncCurrency(s)}
function start(){refresh(true)}
document.addEventListener('change',e=>{if(e.target?.matches?.('.topbar select'))setTimeout(()=>syncCurrency(),0)},true);
document.addEventListener('click',()=>setTimeout(()=>refresh(false),50),true);
window.addEventListener('resize',()=>refresh(false));window.addEventListener('pavenro:ready',()=>refresh(true));window.addEventListener('pavenro:local-write',()=>setTimeout(()=>refresh(false),50));
start();const s=side();if(s&&'ResizeObserver'in window)new ResizeObserver(()=>refresh(false)).observe(s);const t=q('.topbar');if(t&&'ResizeObserver'in window)new ResizeObserver(()=>refresh(false)).observe(t);setInterval(()=>syncCurrency(),1800);window.TulshiiSidebar={refresh:()=>refresh(true),syncCurrency:()=>syncCurrency(),version:'r4'};window.PawanroSidebarShell=window.TulshiiSidebar;
})();