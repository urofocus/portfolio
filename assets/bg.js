/* Minimal background: a faint dot grid with a slow wave, and a soft light that follows the cursor.
   Without a cursor (phones, or when idle) the light drifts on its own. */
(function () {
  var cv = document.getElementById('fx');
  if (!cv) return;
  var ctx = cv.getContext('2d');
  if (!ctx) return;

  var calm = window.matchMedia('(prefers-reduced-motion: reduce)');
  var gap = 30, W = 0, H = 0, dpr = 1;
  var c1 = [131, 145, 171], c2 = [58, 91, 255];
  var px = -9999, py = -9999, lx = 0, ly = 0, lastMove = -99999, frame = 0;

  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function rgb(h) {
    h = (h || '').trim().replace('#', '');
    if (h.length === 3) h = h.replace(/./g, '$&$&');
    var n = parseInt(h, 16);
    return isNaN(n) ? null : [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function readCols() {
    var s = getComputedStyle(document.documentElement);
    c1 = rgb(s.getPropertyValue('--fx-a')) || c1;
    c2 = rgb(s.getPropertyValue('--fx-b')) || c2;
  }

  function draw(ms) {
    var t = ms * 0.001;
    // light target: the cursor, or a slow drifting path when idle
    var idle = ms - lastMove > 3000;
    var tx = idle ? W * (0.5 + 0.32 * Math.sin(t * 0.35)) : px;
    var ty = idle ? H * (0.45 + 0.28 * Math.cos(t * 0.27)) : py;
    lx += (tx - lx) * 0.08; ly += (ty - ly) * 0.08;

    ctx.clearRect(0, 0, W, H);

    // soft glow under the light
    var g = ctx.createRadialGradient(lx, ly, 0, lx, ly, 260);
    g.addColorStop(0, 'rgba(' + c2[0] + ',' + c2[1] + ',' + c2[2] + ',0.10)');
    g.addColorStop(1, 'rgba(' + c2[0] + ',' + c2[1] + ',' + c2[2] + ',0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

    var nx = Math.ceil(W / gap) + 1, ny = Math.ceil(H / gap) + 1;
    for (var i = 0; i < nx; i++) {
      for (var j = 0; j < ny; j++) {
        var x = i * gap + gap / 2, y = j * gap + gap / 2;
        var wave = Math.sin(i * 0.33 + t * 0.9) * Math.cos(j * 0.29 - t * 0.7);
        var d = Math.sqrt((x - lx) * (x - lx) + (y - ly) * (y - ly));
        var boost = Math.max(0, 1 - d / 170); boost *= boost;
        var a = 0.15 + 0.09 * wave + boost * 0.75;
        var r = 1.1 + 0.4 * wave + boost * 2.2;
        var rr = Math.round(c1[0] + (c2[0] - c1[0]) * boost);
        var gg = Math.round(c1[1] + (c2[1] - c1[1]) * boost);
        var bb = Math.round(c1[2] + (c2[2] - c1[2]) * boost);
        ctx.fillStyle = 'rgba(' + rr + ',' + gg + ',' + bb + ',' + a.toFixed(3) + ')';
        ctx.beginPath(); ctx.arc(x, y, Math.max(0.5, r), 0, 6.2832); ctx.fill();
      }
    }
  }

  function loop(ms) {
    if (frame++ % 90 === 0) readCols();
    draw(ms);
    if (!calm.matches) requestAnimationFrame(loop);
  }

  size(); readCols();
  window.addEventListener('resize', function () { size(); draw(performance.now()); });
  window.addEventListener('pointermove', function (e) {
    px = e.clientX; py = e.clientY; lastMove = performance.now();
  }, { passive: true });
  if (calm.matches) { lastMove = -99999; draw(1500); } else { requestAnimationFrame(loop); }
})();
