// import { Skill, skillLevels } from '../data/skillsData';
import { Skill, skillLevels } from "@/src/data";

export const getLevelLabel = (level: number): string => {
  if (level >= skillLevels.ADVANCED.min) return skillLevels.ADVANCED.label;
  if (level >= skillLevels.INTERMEDIATE.min) return skillLevels.INTERMEDIATE.label;
  return skillLevels.LEARNING.label;
};

export const getLevelColor = (level: number): string => {
  if (level >= skillLevels.ADVANCED.min) return skillLevels.ADVANCED.color;
  if (level >= skillLevels.INTERMEDIATE.min) return skillLevels.INTERMEDIATE.color;
  return skillLevels.LEARNING.color;
};

export const filterSkillsByCategory = (skills: Skill[], category: string): Skill[] => {
  return skills.filter(skill => skill.category === category);
};

export const addAnglesToSkills = (skills: Skill[]) => {
  return skills.map((skill, index) => ({
    ...skill,
    angle: (360 / skills.length) * index
  }));
};

export const normalizeLevel = (level: number): number => {
  if (level >= skillLevels.ADVANCED.min) return 100;
  if (level >= skillLevels.INTERMEDIATE.min) return 66;
  return 33;
};