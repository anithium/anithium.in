"use client";

import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; vx: number; vy: number; radius: number; phase: number; alpha: number };

export default function AmbientWorld() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false };
    let width = 0;
    let height = 0;
    let animation = 0;
    let particles: Particle[] = [];

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.7);
      width = window.innerWidth;
      height = document.documentElement.scrollHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = "100%";
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.min(190, Math.max(70, Math.floor((width * height) / 11500)));
      particles = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        radius: Math.random() * 1.35 + 0.25,
        phase: Math.random() * Math.PI * 2,
        alpha: 0.18 + Math.random() * 0.55,
      }));
    };

    const onPointer = (event: PointerEvent) => {
      pointer.targetX = event.clientX;
      pointer.targetY = event.clientY + window.scrollY;
      pointer.active = true;
    };
    const draw = () => {
      context.clearRect(0, 0, width, height);
      pointer.x += (pointer.targetX - pointer.x) * 0.14;
      pointer.y += (pointer.targetY - pointer.y) * 0.14;
      const scroll = window.scrollY;
      const glow = context.createRadialGradient(width * 0.72, scroll + height * 0.2, 0, width * 0.72, scroll + height * 0.2, Math.max(width, 600) * 0.65);
      glow.addColorStop(0, "rgba(135,155,190,0.075)");
      glow.addColorStop(0.48, "rgba(80,105,145,0.025)");
      glow.addColorStop(1, "rgba(8,10,16,0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      if (pointer.active) {
        const cursorGlow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 250);
        cursorGlow.addColorStop(0, "rgba(160,190,245,0.12)");
        cursorGlow.addColorStop(0.4, "rgba(112,139,205,0.045)");
        cursorGlow.addColorStop(1, "rgba(90,110,160,0)");
        context.fillStyle = cursorGlow;
        context.fillRect(pointer.x - 250, pointer.y - 250, 500, 500);
      }

      particles.forEach((particle, index) => {
        if (!reducedMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.phase += 0.009;
          if (particle.x < -10) particle.x = width + 10;
          if (particle.x > width + 10) particle.x = -10;
          if (particle.y < -10) particle.y = height + 10;
          if (particle.y > height + 10) particle.y = -10;
        }
        const pulse = 0.65 + Math.sin(particle.phase) * 0.35;
        const dx = particle.x - pointer.x;
        const dy = particle.y - pointer.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const influence = distance < 190 ? (1 - distance / 190) : 0;
        const px = particle.x + (distance ? (dx / distance) * influence * 10 : 0);
        const py = particle.y + (distance ? (dy / distance) * influence * 10 : 0);

        context.beginPath();
        context.arc(px, py, particle.radius * (1 + influence * 1.8), 0, Math.PI * 2);
        context.fillStyle = `rgba(210,224,255,${particle.alpha * pulse + influence * 0.55})`;
        context.fill();

        if (index % 3 === 0) {
          for (let next = index + 1; next < Math.min(index + 9, particles.length); next += 1) {
            const other = particles[next];
            const ox = px - other.x;
            const oy = py - other.y;
            const gap = Math.sqrt(ox * ox + oy * oy);
            if (gap < 105) {
              context.beginPath();
              context.moveTo(px, py);
              context.lineTo(other.x, other.y);
              context.strokeStyle = `rgba(160,185,220,${(1 - gap / 105) * 0.075})`;
              context.lineWidth = 0.6;
              context.stroke();
            }
          }
        }
      });
      if (!reducedMotion) animation = window.requestAnimationFrame(draw);
    };

    resize();
    if (reducedMotion) {
      draw();
    } else {
      animation = window.requestAnimationFrame(draw);
      window.addEventListener("pointermove", onPointer, { passive: true });
      window.addEventListener("resize", resize);
    }
    const observer = new ResizeObserver(() => {
      if (Math.abs(document.documentElement.scrollHeight - height) > 80) resize();
    });
    observer.observe(document.body);

    return () => {
      window.cancelAnimationFrame(animation);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="ambient-world pointer-events-none" />;
}
