'use client'

import React, { useState } from 'react';

import { filterSkillsByCategory } from '../utils/skillsUtils';
import { SkillsCard } from '../components/ui/skillsCard';
import { CategoryFilters } from '../components/ui/CategoryFilters';
import { RadarChart } from '../components/ui/RadarChart';
import { allSkills } from '../data';

import '../styles/skills.css';
import Title from './shared/title';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('Frontend Core');

  const filteredSkills = filterSkillsByCategory(allSkills, selectedCategory);

  return (
    <section className="skills-radar-section" id='skills'>
      <div className='container'>
        <div className="skills-radar-container">
          <Title title="Skills" subtitle="Herramientas y tecnologías" />

          <div className="skills-radar-grid">
            {/* Columna Izquierda - Card con todos los logos */}
            <SkillsCard />

            {/* Columna Derecha - Selectores y Radar */}
            <div className="radar-controls-container">
              {/* Filtros */}
              <CategoryFilters 
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />

              {/* Radar Chart */}
              <RadarChart skills={filteredSkills} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;