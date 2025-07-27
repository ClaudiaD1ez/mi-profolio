import React from 'react';
import { filterSkillsByCategory } from '../../utils/skillsUtils';
import { allSkills, categories  } from "@/src/data";

// import '../styles/skillsRadar.css';

interface CategoryFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  selectedCategory,
  onCategoryChange
}) => {
  return (
    <div className="category-filters">
      <div className="filters-grid">
        {categories.map((category) => {
          const skillCount = filterSkillsByCategory(allSkills, category).length;
          
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
              <span className="filter-count">
                {skillCount}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};