import React, { useState } from 'react';
import { Skill } from "@/src/data";
import { useRadarChart } from '../../hooks/useRadarChart';
import { getLevelLabel } from '../../utils/skillsUtils';
import { useTheme } from 'next-themes';

// import '../styles/skillsRadar.css';

interface RadarChartProps {
  skills: Skill[];
}

export const RadarChart: React.FC<RadarChartProps> = ({ skills }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();
  const labelColor = resolvedTheme === 'dark' ? '#F2F2F2' : '#252D59';

  const { canvasRef, skillsWithAngles } = useRadarChart({
    skills,
    hoveredSkill,
    labelColor
  });

  return (
    <div className="radarchartContainer">
      <div style={{ position: 'relative' }}>
        <canvas
          ref={canvasRef}
          width={550}
          height={550}
          className="radar-canvas"
        />
      </div>
    </div>
  );
};