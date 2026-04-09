"use client";

import { useEffect, useRef } from "react";

const CONFIG = {
  SPEED_X: 0.15,
  SPEED_Y: 0.15,
  MAX_LENGTH: 120,
  RED_STEP: 0.02,
  GREEN_STEP: 0.015,
  BLUE_STEP: 0.025,
  SPREAD_LIMIT: 20,
};

export function NeonRibbonBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const points: Array<{
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
      color: string;
    }> = [];

    const mouse = {
      x: window.innerWidth * 0.75,
      y: window.innerHeight * 0.45,
    };
    const prevMouse = { x: mouse.x, y: mouse.y };
    const colorState = { red: 0, green: 255, blue: 255, size: 0 };
    let animationFrame = 0;
    let frame = 0;

    for (let i = 0; i < 18; i += 1) {
      const size = Math.abs(Math.sin(i * 0.4) * 10) + 1;
      points.push({
        x: mouse.x + Math.sin(i * 0.5) * 28,
        y: mouse.y + Math.cos(i * 0.7) * 28,
        dx: Math.sin(i * 0.4) * 0.5,
        dy: Math.cos(i * 0.5) * 0.5,
        size,
        color: `rgb(${Math.floor(Math.sin(i * 0.45) * 128 + 128)}, ${Math.floor(
          Math.sin(i * 0.6) * 128 + 128
        )}, ${Math.floor(Math.sin(i * 0.75) * 128 + 128)})`,
      });
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function spreadPoint(point: typeof points[number]) {
      point.x += point.dx;
      point.y += point.dy;
    }

    function drawLines() {
      const total = points.length;
      if (total < 3) return;

      let p0, p1, p2;

      for (let i = total - 1; i > 1; i -= 1) {
        p0 = points[i];
        p1 = points[i - 1];
        p2 = points[i - 2];

        ctx.beginPath();
        ctx.strokeStyle = p0.color;
        ctx.lineWidth = p0.size;
        ctx.globalAlpha = i / total;

        ctx.moveTo((p1.x + p0.x) / 2, (p1.y + p0.y) / 2);
        ctx.quadraticCurveTo(p1.x, p1.y, (p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
        ctx.stroke();

        spreadPoint(p0);
      }

      if (points[0]) {
        spreadPoint(points[0]);
      }

      if (points[points.length - 1]) {
        spreadPoint(points[points.length - 1]);
      }
    }

    function draw() {
      const mouseX = mouse.x;
      const mouseY = mouse.y;
      const px = prevMouse.x;
      const py = prevMouse.y;

      let dx = (mouseX - px) * CONFIG.SPEED_X;
      let dy = (mouseY - py) * CONFIG.SPEED_Y;
      const limit = CONFIG.SPREAD_LIMIT;

      if (Math.abs(dx) < 0.15 && Math.abs(dy) < 0.15) {
        const idleDrift = 0.45;
        dx = Math.sin(frame * 0.016) * idleDrift;
        dy = Math.cos(frame * 0.014) * idleDrift;
      }

      if (dx < -limit) dx = -limit;
      if (dx > limit) dx = limit;
      if (dy < -limit) dy = -limit;
      if (dy > limit) dy = limit;

      prevMouse.x = mouseX;
      prevMouse.y = mouseY;
      frame += 1;

      colorState.size += 0.125;
      colorState.red += CONFIG.RED_STEP;
      colorState.green += CONFIG.GREEN_STEP;
      colorState.blue += CONFIG.BLUE_STEP;

      const size = Math.abs(Math.sin(colorState.size) * 10) + 1;
      const r = Math.floor(Math.sin(colorState.red) * 128 + 128);
      const g = Math.floor(Math.sin(colorState.green) * 128 + 128);
      const b = Math.floor(Math.sin(colorState.blue) * 128 + 128);

      points.push({
        x: mouseX,
        y: mouseY,
        dx,
        dy,
        size,
        color: `rgb(${r}, ${g}, ${b})`,
      });

      if (points.length > CONFIG.MAX_LENGTH) {
        points.shift();
      }

      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "lighter";
      drawLines();
      drawLines();
      drawLines();

      animationFrame = requestAnimationFrame(draw);
    }

    function handleMouseMove(event: MouseEvent) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    }

    function handleTouchMove(event: TouchEvent) {
      event.preventDefault();
      if (!event.touches || !event.touches[0]) return;
      mouse.x = event.touches[0].clientX;
      mouse.y = event.touches[0].clientY;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="neon-ribbon-background">
      <canvas ref={canvasRef} className="neon-ribbon-canvas" aria-hidden="true" />
    </div>
  );
}
