 /**
  * 彩蛋解锁检测器
  * 逻辑：每次从 contact.html 回到 index.html 计一次，
  * 累计 3 次后解锁 gallery.html
  */
 (function() {
   var KEY = 'open_easter_visit';
   var UNLOCKED = 'open_gallery_unlocked';
   var page = window.location.pathname.split('/').pop() || 'index.html';
 
   // 判断是否从 contact 页面跳转过来
   var fromContact = sessionStorage.getItem('open_from_contact');
 
   if (page === 'index.html' && fromContact === 'true') {
     // 从 contact 回到首页 → 计一次
     sessionStorage.removeItem('open_from_contact');
     var count = parseInt(localStorage.getItem(KEY) || '0', 10);
     count++;
     localStorage.setItem(KEY, String(count));
     if (count >= 3) {
       localStorage.setItem(UNLOCKED, 'true');
     }
   }
 
   if (page === 'contact.html') {
     // 标记来自 contact
     sessionStorage.setItem('open_from_contact', 'true');
   }
 
   // 在所有页面上显示解锁提示（仅当已解锁）— 5秒后同时缩小并滑到左上角
   if (localStorage.getItem(UNLOCKED) === 'true') {
     (function() {
       var b = document.createElement('div');
       b.id = 'gallery-badge';
       b.innerHTML = '<a href="gallery.html" id="badge-link" style="display:inline-block;padding:6px 16px;background:#1A1A2E;color:#EAEAEA;font-size:0.8rem;border-radius:4px;text-decoration:none;letter-spacing:2px;transition:all 1.2s ease-in-out;">&#9733; 图库已解锁 &#9733;</a>';
       // 初始位置使用top/left（右下角），确保5秒后能平滑过渡到左上角
       b.style.cssText = 'position:fixed;top:auto;left:auto;bottom:16px;right:16px;z-index:999;opacity:0.85;transition:all 1.2s ease-in-out;';
       document.body.appendChild(b);
       // 等布局稳定后测量并改用top/left
       requestAnimationFrame(function() {
         var bw = b.offsetWidth, bh = b.offsetHeight;
         b.style.bottom = ''; b.style.right = '';
         b.style.top = (window.innerHeight - bh - 16) + 'px';
         b.style.left = (window.innerWidth - bw - 16) + 'px';
       });
       setTimeout(function() {
         var link = document.getElementById('badge-link');
         if (link) {
           link.style.fontSize = '6px';
           link.style.padding = '2px 6px';
           link.style.letterSpacing = '1px';
         }
         b.style.top = '8px';
         b.style.left = '8px';
         b.style.opacity = '0.5';
       }, 5000);
     })();
   }
 
   // 首页显示解锁进度（仅当未解锁时）
   if (page === 'index.html' && localStorage.getItem(UNLOCKED) !== 'true') {
     var count = parseInt(localStorage.getItem(KEY) || '0', 10);
     var hint = document.createElement('div');
     hint.id = 'easter-hint';
     hint.style.cssText = 'position:fixed;bottom:16px;left:16px;z-index:999;font-size:0.7rem;color:#636E72;opacity:0.4;letter-spacing:1px;';
     hint.textContent = '联系 · 返回 (' + count + '/3)';
     document.body.appendChild(hint);
   }
 
   // 首页：若已解锁，在瓷砖区添加图库入口
   if (page === 'index.html' && localStorage.getItem(UNLOCKED) === 'true') {
     var tiles = document.querySelector('.home-tiles');
     if (tiles && !document.querySelector('.tile-gallery')) {
       var gal = document.createElement('a');
       gal.href = 'gallery.html';
       gal.className = 'tile tile-gallery';
       gal.innerHTML = '<span class="tile-icon">&#9733;</span><span class="tile-label">图库</span>';
       tiles.appendChild(gal);
     }
   }
 })();
