"use client";

import { useEffect, useRef } from "react";

const NODE_COUNT = 22;
const MAX_DIST = 180;
const SPEED = 0.15;
const NODE_R = 1.8;

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

function initNodes(w: number, h: number): Node[] {
  return Array.from({ length: NODE_COUNT }, () => {
    const angle = Math.random() * Math.PI * 2;
    return {
      x: w * (0.42 + Math.random() * 0.56),
      y: Math.random() * h,
      vx: Math.cos(angle) * SPEED,
      vy: Math.sin(angle) * SPEED,
    };
  });
}

function xFade(x: number, w: number): number {
  return Math.max(0, Math.min(1, (x - w * 0.38) / (w * 0.24)));
}

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Capture non-null references for use inside nested function declarations
    const cvs: HTMLCanvasElement = canvas;
    const context: CanvasRenderingContext2D = ctx;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    let raf = 0;

    function resize() {
      w = cvs.offsetWidth;
      h = cvs.offsetHeight;
      cvs.width = w;
      cvs.height = h;
      if (nodes.length === 0) {
        nodes = initNodes(w, h);
      } else {
        for (const n of nodes) {
          n.x = Math.max(w * 0.38, Math.min(w, n.x));
          n.y = Math.max(0, Math.min(h, n.y));
        }
      }
    }

    function tick() {
      context.clearRect(0, 0, w, h);

      if (!reduced) {
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < w * 0.38) { n.x = w * 0.38; n.vx = Math.abs(n.vx); }
          if (n.x > w)         { n.x = w;         n.vx = -Math.abs(n.vx); }
          if (n.y < 0)         { n.y = 0;          n.vy = Math.abs(n.vy); }
          if (n.y > h)         { n.y = h;          n.vy = -Math.abs(n.vy); }
        }
      }

      const dark = document.documentElement.classList.contains("dark");
      const [r, g, b] = dark ? [255, 255, 255] : [0, 0, 0];
      const base = dark ? 0.06 : 0.04;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d >= MAX_DIST) continue;
          const f = Math.min(xFade(nodes[i].x, w), xFade(nodes[j].x, w));
          const a = base * (1 - d / MAX_DIST) * f;
          if (a < 0.003) continue;
          context.strokeStyle = `rgba(${r},${g},${b},${a})`;
          context.lineWidth = 0.9;
          context.beginPath();
          context.moveTo(nodes[i].x, nodes[i].y);
          context.lineTo(nodes[j].x, nodes[j].y);
          context.stroke();
        }
      }

      for (const n of nodes) {
        const a = base * 1.8 * xFade(n.x, w);
        if (a < 0.003) continue;
        context.fillStyle = `rgba(${r},${g},${b},${a})`;
        context.beginPath();
        context.arc(n.x, n.y, NODE_R, 0, Math.PI * 2);
        context.fill();
      }

      raf = requestAnimationFrame(tick);
    }

    resize();
    raf = requestAnimationFrame(tick);

    const ro = new ResizeObserver(resize);
    ro.observe(cvs);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
