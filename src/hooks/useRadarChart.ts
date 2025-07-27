import { useEffect, useRef, useState } from 'react';
import { Skill } from "@/src/data";
import { addAnglesToSkills, normalizeLevel, getLevelColor } from '../utils/skillsUtils';

interface UseRadarChartProps {
  skills: Skill[];
  hoveredSkill: string | null;
}

export const useRadarChart = ({ skills, hoveredSkill }: UseRadarChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [skillsWithAngles, setSkillsWithAngles] = useState<(Skill & { angle: number })[]>([]);

  useEffect(() => {
    const skillsWithAnglesData = addAnglesToSkills(skills);
    setSkillsWithAngles(skillsWithAnglesData);
  }, [skills]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadius = Math.min(centerX, centerY) - 80;

    // Limpiar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar círculos de referencia con etiquetas de nivel
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.15)';
    ctx.lineWidth = 1;
    ctx.fillStyle = 'rgba(148, 163, 184, 0.4)';
    ctx.font = '10px system-ui';
    ctx.textAlign = 'center';
    
    const levels = ['Aprendiendo', 'Intermedio', 'Avanzado'];
    for (let i = 1; i <= 3; i++) {
      const radius = (maxRadius * i) / 3;
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();
      
      // Etiqueta de nivel
      ctx.fillText(levels[i-1], centerX + radius + 15, centerY + 3);
    }

    // Dibujar líneas de los ejes
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
    ctx.lineWidth = 1;
    skillsWithAngles.forEach((skill) => {
      const angle = (skill.angle * Math.PI) / 180;
      const endX = centerX + Math.cos(angle - Math.PI/2) * maxRadius;
      const endY = centerY + Math.sin(angle - Math.PI/2) * maxRadius;
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    });

    if (skillsWithAngles.length > 0) {
      // Dibujar el polígono de habilidades
      ctx.beginPath();
      skillsWithAngles.forEach((skill, index) => {
        const angle = (skill.angle * Math.PI) / 180;
        const normalizedLevel = normalizeLevel(skill.level);
        const radius = (normalizedLevel / 100) * maxRadius;
        const x = centerX + Math.cos(angle - Math.PI/2) * radius;
        const y = centerY + Math.sin(angle - Math.PI/2) * radius;
        
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.closePath();
      
      // Relleno con gradiente
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
      gradient.addColorStop(0, 'rgba(249, 115, 22, 0.4)');
      gradient.addColorStop(0.7, 'rgba(249, 115, 22, 0.2)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0.1)');
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Borde del polígono con gradiente
      const borderGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      borderGradient.addColorStop(0, '#f97316');
      borderGradient.addColorStop(1, '#3b82f6');
      ctx.strokeStyle = borderGradient;
      ctx.lineWidth = 3;
      ctx.stroke();

      // Dibujar puntos y etiquetas
      skillsWithAngles.forEach((skill) => {
        const angle = (skill.angle * Math.PI) / 180;
        const normalizedLevel = normalizeLevel(skill.level);
        const radius = (normalizedLevel / 100) * maxRadius;
        const x = centerX + Math.cos(angle - Math.PI/2) * radius;
        const y = centerY + Math.sin(angle - Math.PI/2) * radius;
        
        // Punto con color basado en nivel
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = getLevelColor(skill.level);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Etiqueta con nombre
        const labelRadius = maxRadius + 30;
        const labelX = centerX + Math.cos(angle - Math.PI/2) * labelRadius;
        const labelY = centerY + Math.sin(angle - Math.PI/2) * labelRadius;
        
        // Nombre
        ctx.fillStyle = '#1e293b';
        ctx.font = 'bold 11px system-ui';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(skill.name, labelX, labelY);
      });
    }
  }, [skillsWithAngles, hoveredSkill]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Detectar hover sobre skills
    const centerX = 200;
    const centerY = 200;
    const maxRadius = 120;
    
    let hoveredSkillName = null;
    skillsWithAngles.forEach((skill) => {
      const angle = (skill.angle * Math.PI) / 180;
      const normalizedLevel = normalizeLevel(skill.level);
      const radius = (normalizedLevel / 100) * maxRadius;
      const skillX = centerX + Math.cos(angle - Math.PI/2) * radius;
      const skillY = centerY + Math.sin(angle - Math.PI/2) * radius;
      
      const distance = Math.sqrt((x - skillX) ** 2 + (y - skillY) ** 2);
      if (distance < 12) {
        hoveredSkillName = skill.name;
      }
    });
    
    return hoveredSkillName;
  };

  return {
    canvasRef,
    skillsWithAngles,
    handleMouseMove
  };
};