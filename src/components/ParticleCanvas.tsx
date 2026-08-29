import React, { useEffect, useRef } from 'react';

export const ParticleCanvas: React.FC<{ isStartScreen?: boolean }> = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Create subtle twinkling stars/audio dust particles
    const particleCount = Math.floor((width * height) / 14000); // adaptive density
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      alpha: number;
      targetAlpha: number;
      twinkleSpeed: number;
      color: string;
      vx: number;
      vy: number;
    }> = [];

    const colors = [
      'rgba(255, 255, 255, ',
      'rgba(186, 230, 253, ', // soft cyan tint
      'rgba(203, 213, 225, ', // soft slate tint
      'rgba(148, 163, 184, '  // deep muted slate
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.1 + 0.3, // Slightly more defined yet delicate
        alpha: Math.random() * 0.55 + 0.15, // Balanced opacity
        targetAlpha: Math.random() * 0.65 + 0.2,
        twinkleSpeed: Math.random() * 0.006 + 0.003,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw starry particles
      particles.forEach((p) => {
        // Twinkle logic
        if (Math.abs(p.alpha - p.targetAlpha) < 0.01) {
          p.targetAlpha = Math.random() * 0.8 + 0.1;
        } else {
          p.alpha += (p.targetAlpha - p.alpha) * p.twinkleSpeed;
        }

        // Slight drift
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowBlur = p.radius > 1 ? 4 : 0;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-[#08090f] overflow-hidden">
      {/* Deep Obsidian Midnight Backdrop with subtle radial ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b12] via-[#07080e] to-[#05060a]" />

      {/* Star Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />

      {/* Pure Cool Cyan & Deep Midnight Spotlights (No warm/amber/red tones) */}
      <div className="absolute -top-32 right-1/4 w-[700px] h-[700px] bg-cyan-950/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-slate-900/30 rounded-full blur-[160px] pointer-events-none" />
    </div>
  );
};

