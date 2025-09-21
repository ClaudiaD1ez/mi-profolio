"use client";

import React, { useEffect, useRef } from 'react';

const InteractiveBubblesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const bubblesRef = useRef<Bubble[]>([]);

  // Configuración de burbujas
  const BUBBLE_COUNT = 15;
  const colors = [
    'rgba(30, 64, 175, 0.4)',    // azul muy oscuro
    'rgba(59, 130, 246, 0.4)',   // azul claro
    'rgba(147, 197, 253, 0.3)',  // azul muy claro
    'rgba(29, 78, 216, 0.4)',    // azul oscuro
    'rgba(96, 165, 250, 0.3)',   // azul suave
    'rgba(37, 99, 235, 0.4)',    // azul medio
    'rgba(191, 219, 254, 0.3)',  // azul pastel
    'rgba(14, 45, 134, 0.4)',    // azul profundo
    'rgba(99, 102, 241, 0.4)'    // azul violáceo
  ];

  // Clase Burbuja
  class Bubble {
    canvas: HTMLCanvasElement;
    x: number;
    y: number;
    radius: number;
    originalRadius: number;
    vx: number;
    vy: number;
    color: string;

    constructor(canvas: HTMLCanvasElement) {
      this.canvas = canvas;
      this.x = 0;
      this.y = 0;
      this.radius = 0;
      this.originalRadius = 0;
      this.reset();
      this.vx = (Math.random() - 0.5) * 3; // Movimiento aleatorio mucho más rápido
      this.vy = (Math.random() - 0.5) * 3; // Movimiento aleatorio mucho más rápido
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    reset() {
      this.x = Math.random() * this.canvas.width;
      this.y = Math.random() * this.canvas.height;
      this.radius = Math.random() * 180 + 120; // Burbujas gigantes (120-300px) - casi el doble
      this.originalRadius = this.radius;
    }

    update(mouse: { x: number; y: number }) {
      // Movimiento base aleatorio
      this.x += this.vx;
      this.y += this.vy;

      // Rebote en los bordes
      if (this.x < -this.radius || this.x > this.canvas.width + this.radius) {
        this.vx *= -1;
      }
      if (this.y < -this.radius || this.y > this.canvas.height + this.radius) {
        this.vy *= -1;
      }

      // Mantener dentro de los límites
      this.x = Math.max(-this.radius, Math.min(this.canvas.width + this.radius, this.x));
      this.y = Math.max(-this.radius, Math.min(this.canvas.height + this.radius, this.y));

      // Interacción con el ratón
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 150;

      if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance;
        const pushX = (dx / distance) * force * -2;
        const pushY = (dy / distance) * force * -2;
        
        this.x += pushX;
        this.y += pushY;
        
        // Eliminamos el efecto de escala - solo movimiento
      }
    }

    draw(ctx: CanvasRenderingContext2D) {
      // Crear gradiente radial para efecto más difuminado
      const gradient = ctx.createRadialGradient(
        this.x, this.y, 0,
        this.x, this.y, this.radius
      );
      
      gradient.addColorStop(0, this.color);
      gradient.addColorStop(0.4, this.color.replace(/0\.[34]/, '0.2')); // Transición más suave
      gradient.addColorStop(0.7, this.color.replace(/0\.[34]/, '0.1')); // Más difuminado
      gradient.addColorStop(0.9, this.color.replace(/0\.[34]/, '0.05')); // Muy difuminado
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Inicializar burbujas
  const initBubbles = (canvas: HTMLCanvasElement) => {
    bubblesRef.current = [];
    for (let i = 0; i < BUBBLE_COUNT; i++) {
      bubblesRef.current.push(new Bubble(canvas));
    }
  };

  // Loop de animación
  const animate = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    bubblesRef.current.forEach(bubble => {
      bubble.update(mouseRef.current);
      bubble.draw(ctx);
    });

    animationFrameRef.current = requestAnimationFrame(() => animate(ctx, canvas));
  };

  // Manejo del resize
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Reinicializar burbujas con nuevas dimensiones
    initBubbles(canvas);
  };

  // Manejo del movimiento del ratón - detectar movimiento en toda la ventana
  const handleMouseMove = (e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Configurar canvas
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Inicializar
    initBubbles(canvas);
    animate(ctx, canvas);

    // Event listeners - detectar movimiento en toda la ventana, no solo el canvas
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove); // Cambio: window en lugar de canvas

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove); // Cambio: window
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none' // Volver a none ya que detectamos en window
      }}
    />
  );
};

export default InteractiveBubblesBackground;