'use client';

import { useEffect, useRef } from 'react';

const SERVICES = [
  { label: 'Web\nDevelopment',  color: '#4c7dff', icon: 'code'    },
  { label: 'Cloud\nSolutions',  color: '#00bfff', icon: 'cloud'   },
  { label: 'AI &\nAutomation',  color: '#a259ff', icon: 'brain'   },
  { label: 'IT\nSupport',       color: '#00c896', icon: 'headset' },
  { label: 'Digital\nMarketing',color: '#ff7a1a', icon: 'chart'   },
];

// Draw simple icon shapes on canvas
function drawIcon(ctx, type, cx, cy, size, color) {
  ctx.strokeStyle = '#fff';
  ctx.fillStyle   = '#fff';
  ctx.lineWidth   = size * 0.18;
  ctx.lineCap     = 'round';
  ctx.lineJoin    = 'round';
  const s = size * 0.42;

  if (type === 'code') {
    // </> brackets
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.6, cy - s * 0.5);
    ctx.lineTo(cx - s * 1.0, cy);
    ctx.lineTo(cx - s * 0.6, cy + s * 0.5);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx + s * 0.6, cy - s * 0.5);
    ctx.lineTo(cx + s * 1.0, cy);
    ctx.lineTo(cx + s * 0.6, cy + s * 0.5);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx - s * 0.3, cy + s * 0.7);
    ctx.lineTo(cx + s * 0.3, cy - s * 0.7);
    ctx.stroke();
  } else if (type === 'cloud') {
    ctx.beginPath();
    ctx.arc(cx - s * 0.3, cy + s * 0.1, s * 0.42, Math.PI * 0.5, Math.PI * 1.5);
    ctx.arc(cx, cy - s * 0.2, s * 0.52, Math.PI, 0);
    ctx.arc(cx + s * 0.4, cy + s * 0.1, s * 0.38, Math.PI * 1.5, Math.PI * 0.5);
    ctx.closePath();
    ctx.lineWidth = size * 0.14;
    ctx.stroke();
    // upload arrow
    ctx.beginPath();
    ctx.moveTo(cx, cy + s * 0.65);
    ctx.lineTo(cx, cy + s * 0.1);
    ctx.moveTo(cx - s * 0.3, cy + s * 0.38);
    ctx.lineTo(cx, cy + s * 0.1);
    ctx.lineTo(cx + s * 0.3, cy + s * 0.38);
    ctx.stroke();
  } else if (type === 'brain') {
    // simple star-like AI dot
    ctx.lineWidth = size * 0.14;
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 3) {
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(a) * s * 0.9, cy + Math.sin(a) * s * 0.9);
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(cx, cy, s * 0.3, 0, Math.PI * 2);
    ctx.fill();
  } else if (type === 'headset') {
    ctx.lineWidth = size * 0.14;
    // arc
    ctx.beginPath();
    ctx.arc(cx, cy + s * 0.1, s * 0.72, Math.PI, 0, false);
    ctx.stroke();
    // left cup
    ctx.beginPath();
    ctx.arc(cx - s * 0.72, cy + s * 0.3, s * 0.28, Math.PI * 1.3, Math.PI * 0.7, true);
    ctx.stroke();
    // right cup
    ctx.beginPath();
    ctx.arc(cx + s * 0.72, cy + s * 0.3, s * 0.28, Math.PI * 0.3, Math.PI * 1.7, false);
    ctx.stroke();
  } else if (type === 'chart') {
    // bar chart
    ctx.lineWidth = size * 0.12;
    const bars = [0.4, 0.75, 0.55, 1.0];
    const bw = s * 0.4;
    const bx = cx - s * 0.72;
    bars.forEach((h, i) => {
      const bh = s * 1.1 * h;
      const x  = bx + i * (bw + s * 0.14);
      const y  = cy + s * 0.5;
      ctx.fillStyle = '#fff';
      ctx.globalAlpha = 0.6 + 0.4 * h;
      ctx.fillRect(x, y - bh, bw, bh);
    });
    ctx.globalAlpha = 1;
  }
}

export default function GlobeOrbit() {
  const canvasRef = useRef(null);
  const frameRef  = useRef(null);
  const angleRef  = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const SIZE = 480;
    const dpr  = window.devicePixelRatio || 1;
    canvas.width  = SIZE * dpr;
    canvas.height = SIZE * dpr;
    canvas.style.width  = `${SIZE}px`;
    canvas.style.height = `${SIZE}px`;
    ctx.scale(dpr, dpr);

    const cx = SIZE / 2;
    const cy = SIZE / 2;
    const R  = 115;   // globe radius
    const OR = 188;   // orbit ellipse horizontal radius

    // ── lat/lon grid ─────────────────────────────────────────────────
    function drawLatLine(lat, tilt, az) {
      const cosL = Math.cos(lat);
      const sinL = Math.sin(lat);
      const y0   = sinL * R * Math.cos(tilt);
      const ry   = cosL * R * Math.sin(tilt);
      const rx   = cosL * R;
      ctx.beginPath();
      for (let a = 0; a <= Math.PI * 2 + 0.01; a += 0.05) {
        const x = rx * Math.cos(a + az);
        const y = y0 + ry * Math.sin(a + az);
        a === 0 ? ctx.moveTo(cx + x, cy + y) : ctx.lineTo(cx + x, cy + y);
      }
    }
    function drawLonLine(lon, az, tilt) {
      ctx.beginPath();
      for (let a = -Math.PI / 2; a <= Math.PI / 2 + 0.01; a += 0.04) {
        const x = R * Math.cos(a) * Math.cos(lon + az);
        const y = R * Math.cos(a) * Math.sin(lon + az) * Math.sin(tilt) + R * Math.sin(a) * Math.cos(tilt);
        a === -Math.PI / 2 ? ctx.moveTo(cx + x, cy + y) : ctx.lineTo(cx + x, cy + y);
      }
    }

    function draw() {
      ctx.clearRect(0, 0, SIZE, SIZE);
      const az   = angleRef.current;
      const tilt = 0.4;

      // ── Outer glow (works on white bg) ───────────────────────────
      const outerGlow = ctx.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 1.5);
      outerGlow.addColorStop(0,   'rgba(30,100,255,0.22)');
      outerGlow.addColorStop(0.5, 'rgba(30,100,255,0.08)');
      outerGlow.addColorStop(1,   'rgba(30,100,255,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = outerGlow;
      ctx.fill();

      // ── Globe sphere ──────────────────────────────────────────────
      const globe = ctx.createRadialGradient(cx - 32, cy - 30, R * 0.05, cx, cy, R);
      globe.addColorStop(0,    '#5aabff');
      globe.addColorStop(0.35, '#1a6eee');
      globe.addColorStop(0.72, '#0a3dbf');
      globe.addColorStop(1,    '#041a7a');
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = globe;
      ctx.fill();

      // ── Grid lines ────────────────────────────────────────────────
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.clip();
      ctx.strokeStyle = 'rgba(130,195,255,0.30)';
      ctx.lineWidth   = 0.9;
      for (let lat = -Math.PI / 2; lat <= Math.PI / 2 + 0.01; lat += Math.PI / 6) {
        drawLatLine(lat, tilt, az); ctx.stroke();
      }
      for (let lon = 0; lon < Math.PI * 2; lon += Math.PI / 6) {
        drawLonLine(lon, az, tilt); ctx.stroke();
      }
      // bright equator
      ctx.strokeStyle = 'rgba(150,220,255,0.6)';
      ctx.lineWidth   = 1.2;
      drawLatLine(0, tilt, az); ctx.stroke();
      ctx.restore();

      // ── Specular highlight ────────────────────────────────────────
      const spec = ctx.createRadialGradient(cx - 36, cy - 34, 0, cx - 20, cy - 20, R * 0.78);
      spec.addColorStop(0,   'rgba(255,255,255,0.28)');
      spec.addColorStop(0.5, 'rgba(255,255,255,0.06)');
      spec.addColorStop(1,   'rgba(255,255,255,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = spec;
      ctx.fill();

      // ── Globe rim ─────────────────────────────────────────────────
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(100,180,255,0.5)';
      ctx.lineWidth   = 1.5;
      ctx.stroke();

      // ── Atmosphere ring ───────────────────────────────────────────
      const atm = ctx.createRadialGradient(cx, cy, R, cx, cy, R * 1.14);
      atm.addColorStop(0,   'rgba(60,130,255,0.25)');
      atm.addColorStop(1,   'rgba(60,130,255,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.14, 0, Math.PI * 2);
      ctx.fillStyle = atm;
      ctx.fill();

      // ── Orbital ellipse ring ──────────────────────────────────────
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-0.28);
      ctx.scale(1, 0.30);
      ctx.beginPath();
      ctx.ellipse(0, 0, OR + 10, OR + 10, 0, 0, Math.PI * 2);
      const rg = ctx.createLinearGradient(-(OR + 10), 0, OR + 10, 0);
      rg.addColorStop(0,    'rgba(100,180,255,0)');
      rg.addColorStop(0.28, 'rgba(100,180,255,0.65)');
      rg.addColorStop(0.72, 'rgba(100,180,255,0.65)');
      rg.addColorStop(1,    'rgba(100,180,255,0)');
      ctx.strokeStyle = rg;
      ctx.lineWidth   = 3 / 0.30;
      ctx.stroke();
      ctx.restore();

      // ── Orbit dots ────────────────────────────────────────────────
      for (let d = 0; d < 28; d++) {
        const a  = (d / 28) * Math.PI * 2 + az * 0.55;
        const ox = cx + OR * Math.cos(a);
        const oy = cy + OR * Math.sin(a) * 0.34;
        ctx.beginPath();
        ctx.arc(ox, oy, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100,200,255,${0.3 + 0.4 * ((Math.sin(a) + 1) / 2)})`;
        ctx.fill();
      }

      // ── Service cards ─────────────────────────────────────────────
      const count = SERVICES.length;

      // Sort by depth (y-position) so closer cards render on top
      const order = SERVICES.map((svc, idx) => {
        const a  = (idx / count) * Math.PI * 2 + az * 0.38;
        const oy = cy + OR * Math.sin(a) * 0.34;
        return { svc, idx, a, oy };
      }).sort((a, b) => a.oy - b.oy);

      order.forEach(({ svc, a, oy }) => {
        const ox    = cx + OR * Math.cos(a);
        const sinA  = Math.sin(a) * 0.34; // -0.34 … +0.34
        const depth = 0.72 + 0.28 * ((sinA + 0.34) / 0.68); // 0.72 → 1.0

        const cw = 112 * depth;
        const ch =  70 * depth;
        const cr =  12 * depth;
        const x0 = ox - cw / 2;
        const y0 = oy - ch / 2;

        ctx.save();
        ctx.globalAlpha = 0.70 + 0.30 * depth;

        // shadow
        ctx.shadowColor   = 'rgba(0,40,120,0.28)';
        ctx.shadowBlur    = 16 * depth;
        ctx.shadowOffsetY = 4 * depth;

        // card bg
        roundRect(ctx, x0, y0, cw, ch, cr);
        const bg = ctx.createLinearGradient(x0, y0, x0, y0 + ch);
        bg.addColorStop(0, 'rgba(8,18,52,0.94)');
        bg.addColorStop(1, 'rgba(4,10,38,0.90)');
        ctx.fillStyle = bg;
        ctx.fill();

        ctx.shadowColor = 'transparent';
        ctx.shadowBlur  = 0;

        // card border with accent colour
        roundRect(ctx, x0, y0, cw, ch, cr);
        ctx.strokeStyle = svc.color + '88';
        ctx.lineWidth   = 1.4 * depth;
        ctx.stroke();

        // top accent line
        ctx.beginPath();
        ctx.moveTo(x0 + cr, y0);
        ctx.lineTo(x0 + cw - cr, y0);
        ctx.strokeStyle = svc.color + 'cc';
        ctx.lineWidth   = 2 * depth;
        ctx.stroke();

        // icon circle
        const iR = 15 * depth;
        const ix = x0 + 20 * depth;
        const iy = y0 + ch / 2;
        ctx.beginPath();
        ctx.arc(ix, iy, iR, 0, Math.PI * 2);
        const ig = ctx.createRadialGradient(ix - iR * 0.3, iy - iR * 0.3, 0, ix, iy, iR);
        ig.addColorStop(0, svc.color + 'ee');
        ig.addColorStop(1, svc.color + '44');
        ctx.fillStyle = ig;
        ctx.fill();

        // icon shape
        ctx.save();
        ctx.beginPath();
        ctx.arc(ix, iy, iR, 0, Math.PI * 2);
        ctx.clip();
        drawIcon(ctx, svc.icon, ix, iy, iR * 1.4, svc.color);
        ctx.restore();

        // text
        const lines = svc.label.split('\n');
        const tx    = ix + iR + 7 * depth;
        const fs    = (10.8 * depth).toFixed(1);
        ctx.font      = `700 ${fs}px system-ui, -apple-system, sans-serif`;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        lines.forEach((line, li) => {
          const lineY = iy + (li - (lines.length - 1) / 2) * 14 * depth;
          // subtle text shadow
          ctx.fillStyle = 'rgba(0,0,0,0.4)';
          ctx.fillText(line, tx + 0.6, lineY + 0.8);
          ctx.fillStyle = '#e8f2ff';
          ctx.fillText(line, tx, lineY);
        });

        ctx.restore();

        // connector line globe → card
        ctx.save();
        ctx.globalAlpha = 0.14 + 0.10 * depth;
        const edgeX = cx + R * Math.cos(a);
        const edgeY = cy + R * Math.sin(a) * 0.34;
        const nearX = x0 + (Math.cos(a) < 0 ? cw : 0);
        ctx.strokeStyle = svc.color;
        ctx.lineWidth   = 1;
        ctx.setLineDash([3, 5]);
        ctx.beginPath();
        ctx.moveTo(edgeX, edgeY);
        ctx.lineTo(nearX, oy);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      });

      // ── Base glow platform ────────────────────────────────────────
      const base = ctx.createRadialGradient(cx, cy + R + 14, 2, cx, cy + R + 14, 72);
      base.addColorStop(0,   'rgba(0,120,255,0.45)');
      base.addColorStop(0.5, 'rgba(0,80,220,0.15)');
      base.addColorStop(1,   'rgba(0,80,220,0)');
      ctx.beginPath();
      ctx.ellipse(cx, cy + R + 14, 72, 16, 0, 0, Math.PI * 2);
      ctx.fillStyle = base;
      ctx.fill();

      angleRef.current += 0.0038;
      frameRef.current  = requestAnimationFrame(draw);
    }

    frameRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <div className="globe-wrap" aria-hidden="true">
      <canvas ref={canvasRef} className="globe-canvas" />
    </div>
  );
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y,     x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x,     y + h, x,     y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x,     y,     x + r, y);
  ctx.closePath();
}
