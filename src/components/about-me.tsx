"use client";

import { dataAboutExperience } from "@/src/data";
import { Calendar, MapPin } from 'lucide-react';
import Title from "./shared/title";
import Image from "next/image";
import { verMas } from '@/src/hooks/about-me'

import "../styles/aboutMe.scss"
import { useEffect } from "react";

const AboutMe = () => {

    useEffect(() => {
        verMas();
    }, []);

    return(
        <section id="experience" className="experienceSection">
            <div className="container">
                <div className="experienceContainer">
                    <Title title="Experiencia Profesional" subtitle="Trabajos recientes" />

                    <div className="cardsContainer">
                        {dataAboutExperience.map((exp, index) => (
                            <div className="cardExperience" key={exp.id}>
                                <div className="imgCard">
                                    <img src={exp.logo} alt={exp.company} className="companyImg" />
                                    <div className="topInfo mobile">
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
                                </div>

                                {/* Content */}
                                <div className="infocard">
                                    <div className="topInfo desktop">
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

                                    <div className="btn-vermas">
                                        <p className="text-ver-mas"></p>
                                        <Image src="/img/icons/flecha.png" alt="flecha-ver-mas" className="img-flecha" width={16} height={16}/>
                                    </div>

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