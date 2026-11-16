const menu=document.querySelector('.menu');
function closeMenu(){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','開啟選單');document.querySelector('.site-header').classList.remove('open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'關閉選單':'開啟選單');document.querySelector('.site-header').classList.toggle('open',open);});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
const config=window.EXHIBITION||{};
if(config.lineUrl){try{const url=new URL(config.lineUrl);if(url.protocol==='https:'&&['line.me','lin.ee'].includes(url.hostname)){const a=document.querySelector('#line-link');a.href=url.href;a.target='_blank';a.rel='noopener noreferrer';a.removeAttribute('aria-disabled');a.textContent='加入 LINE 好友 ↗';document.querySelector('#line-note').textContent='點擊前往官方 LINE';}}catch{}}
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#share').addEventListener('click',async()=>{const status=document.querySelector('#share-status');const url=location.href.split('#')[0];try{if(navigator.share){await navigator.share({title:document.title,text:'2026 台北圓山音響展，11/19–11/22，209 房 ZEROSPAN。',url});status.textContent='';}else if(navigator.clipboard){await navigator.clipboard.writeText(url);status.textContent='已複製網站連結。';}else{status.textContent='請使用瀏覽器的分享或加入書籤功能。';}}catch(e){if(e.name!=='AbortError')status.textContent='請使用瀏覽器的分享或加入書籤功能。';}});
const dialog=document.querySelector('.image-dialog');let opener;
document.querySelectorAll('[data-zoom]').forEach(button=>button.addEventListener('click',()=>{opener=button;document.querySelector('#image-title').textContent=button.dataset.title;const img=document.querySelector('#dialog-image');img.src=button.dataset.zoom;img.alt=button.dataset.title;dialog.showModal();document.body.style.overflow='hidden';dialog.scrollTop=0;}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.style.overflow='';opener?.focus();});
