import { dataSkills } from "@/data";
import Title from "./shared/title";
import { BadgeCheck } from "lucide-react";
import { Progress } from "./ui/progress";
import Image from "next/image";

import "../components/styles/skills.css"

const Skills = () => {
    return(
    <section id="skills" className="skillSection">
      <div className="container">
        <Title title="Skills" subtitle="Tecnologías & Herramientas" />

        <div className="cardContainer">
          {dataSkills.map((category, index) => (
            <div key={index} className="cardSkill">
              <div className="cardTitle">
                <div className="icon">{category.icon}</div>
                <h3 className="title">
                  {category.title}
                </h3>
              </div>

              <div className="cardInfo">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="techContainer">
                      <span className="techName"> {skill.name} </span>
                      <span className="techLevel"> {skill.level} </span>
                    </div>
                    <div className="levelLine">
                      <div className="line" style={{ width: `${skill.level}%` }}> </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
}

export default Skills;