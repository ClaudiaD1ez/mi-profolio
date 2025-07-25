import { dataAboutGoals, dataAboutExperience, dataSlider } from "@/data";
import "../components/styles/aboutMe.css"
import { Calendar, MapPin } from 'lucide-react';
import Title from "./shared/title";

interface ExperienceProps {
  isDark: boolean;
}

const AboutMe = () => {
    return(
        <section id="experience" className="experienceSection">
            <div className="container">
                <div className="experienceContainer">
                    <Title title="Experiencia Profesional" subtitle="Trabajos recientes" />

                    <div className="cradsContainer">
                        {dataAboutExperience.map((exp, index) => (
                            <div className="cardExperience" key={exp.id}>
                                <div className="imgCard">
                                    <img src={exp.logo} alt={exp.company} className="companyImg" />
                                </div>

                                {/* Content */}
                                <div className="infocard">
                                    <div className="topInfo">
                                        <div className="cardTitle">
                                            <h3 className="position">
                                                {exp.position}
                                            </h3>
                                            <p className="company">
                                                {exp.company}
                                            </p>
                                        </div>
                                        <div className="extraInfo">
                                            <div className="period">
                                                <Calendar size={16} className="animate-pulse" />
                                                <span className="text">{exp.period}</span>
                                            </div>
                                            <div className="location">
                                                <MapPin size={16} className="animate-pulse" />
                                                <span className="text">{exp.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="description">
                                        {exp.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="technologies">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="tech"> {tech} </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;