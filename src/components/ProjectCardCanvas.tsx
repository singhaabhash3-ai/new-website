import { useEffect, useRef } from 'react';

interface ProjectCardCanvasProps {
  type: 'neural' | 'database' | 'matrix';
}

export default function ProjectCardCanvas({ type }: ProjectCardCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth || 300);
    let height = (canvas.height = canvas.offsetHeight || 190);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || 300;
      height = canvas.height = canvas.offsetHeight || 190;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes for canvas
    const nodes = Array.from({ length: 18 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 1.5 + 1,
    }));

    let step = 0;

    const render = () => {
      step += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Subtle grid dots
      const gridSize = 20;
      ctx.fillStyle = 'rgba(192, 193, 255, 0.05)';
      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.arc(x, y, 0.75, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (type === 'neural') {
        // Connected graph animation
        ctx.strokeStyle = 'rgba(192, 193, 255, 0.15)';
        ctx.lineWidth = 1;
        nodes.forEach((node, i) => {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;

          ctx.fillStyle = 'rgba(192, 193, 255, 0.4)';
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fill();

          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[j].x - node.x;
            const dy = nodes[j].y - node.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 65) {
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.stroke();
            }
          }
        });
      } else if (type === 'database') {
        // SQL query streams / horizontal pulse bars
        const barCount = 7;
        const barHeight = 8;
        const spacing = 18;
        const startY = height / 2 - (barCount * spacing) / 2;

        for (let i = 0; i < barCount; i++) {
          const y = startY + i * spacing;
          const pulseOffset = Math.sin(step + i * 0.8) * 0.5 + 0.5;
          const barWidth = 60 + pulseOffset * 100;
          ctx.fillStyle = `rgba(123, 208, 255, ${0.1 + pulseOffset * 0.18})`;
          ctx.fillRect(width / 2 - barWidth / 2, y, barWidth, barHeight);

          // Center tick
          ctx.fillStyle = 'rgba(123, 208, 255, 0.5)';
          ctx.fillRect(width / 2 - 2, y, 4, barHeight);
        }
      } else {
        // Matrix / wave mathematical curve
        ctx.strokeStyle = 'rgba(189, 194, 255, 0.35)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let x = 0; x < width; x += 3) {
          const y =
            height / 2 +
            Math.sin(x * 0.04 + step) * 20 +
            Math.cos(x * 0.02 - step) * 15;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Second harmonic
        ctx.strokeStyle = 'rgba(123, 208, 255, 0.2)';
        ctx.beginPath();
        for (let x = 0; x < width; x += 4) {
          const y = height / 2 + Math.sin(x * 0.06 - step * 1.5) * 28;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [type]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
    />
  );
}
