import React from 'react';
import { allSkills, skillLevels } from "@/src/data";

// import '../styles/skillsRadar.css';

export const SkillsCard: React.FC = () => {
  return (
    <div className="skillsCard">

      <div className="logosContainer">
        {allSkills.map((skill) => (
          <div key={skill.name} className="skillLogo">
              <img src={skill.logo} alt={skill.name} width={40} height={40} className="skillImg" />
              <p className='skillName'>{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Leyenda */}
      <div className="levelLegend">
        <div className="legend-title">Nivel de Dominio</div>
        <div className="legend-items">
          <div className="legend-item">
            <div className="legend-dot" style={{ backgroundColor: skillLevels.ADVANCED.color }} />
            <span className="legend-label">{skillLevels.ADVANCED.label}</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot" style={{ backgroundColor: skillLevels.INTERMEDIATE.color }} />
            <span className="legend-label">{skillLevels.INTERMEDIATE.label}</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot" style={{ backgroundColor: skillLevels.LEARNING.color }} />
            <span className="legend-label">{skillLevels.LEARNING.label}</span>
          </div>
        </div>
      </div>
    </div>
  );
};