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
    <div className="filtersContainer">
      {categories.map((category) => {
        const skillCount = filterSkillsByCategory(allSkills, category).length;
        
        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`filterButton ${selectedCategory === category ? 'active' : ''}`}
          >
            {category}
            <span className="filterCount">
              {skillCount}
            </span>
          </button>
        );
      })}
    </div>
  );
};