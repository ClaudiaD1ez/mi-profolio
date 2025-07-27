import React, { useState } from 'react';
import { Skill } from "@/src/data";
import { useRadarChart } from '../../hooks/useRadarChart';
import { getLevelLabel } from '../../utils/skillsUtils';

// import '../styles/skillsRadar.css';

interface RadarChartProps {
  skills: Skill[];
}

export const RadarChart: React.FC<RadarChartProps> = ({ skills }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const { canvasRef, skillsWithAngles } = useRadarChart({ 
    skills, 
    hoveredSkill 
  });

  return (
    <div className="radar-chart-container">
      <div style={{ position: 'relative' }}>
        <canvas
          ref={canvasRef}
          width={550}
          height={550}
          className="radar-canvas"
        />
        
        {/* Tooltip */}
        {hoveredSkill && (
          <div className="radar-tooltip">
            <div className="tooltip-name">
              {skillsWithAngles.find(s => s.name === hoveredSkill)?.name}
            </div>
            <div className="tooltip-level">
              {getLevelLabel(skillsWithAngles.find(s => s.name === hoveredSkill)?.level || 0)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};