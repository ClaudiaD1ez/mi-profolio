import { dataPortfolio } from "@/data";
import Title from "./shared/title";
import { ArrowRight, Github, Play } from "lucide-react";

import "../components/styles/portfolio.css"
import "../components/styles/buttons.css"

const Portfolio = () => {
    return(
        <section id="projects" className="proyectSection">
            <div className="container">
                <div className="proyectContainer">
                    <Title title="Experiencia Profesional" subtitle="Proyectos Destacados" />

                    <div className="cardsContainer">
                        {dataPortfolio.map((project, index) => (
                            <div key={index} className="cardProyect" >
                                {/* Image Container */}
                                <div className="cardImg">
                                    <div className="overlay-darken"></div>
                                    <img src={project.image} alt={project.title} className="img" />
                                    
                                    <div className=""></div>
                                    
                                    <div className="manchetaCategory">
                                        <span className="text"> {project.category} </span>
                                    </div>

                                    <div className="manchetaYear">
                                        <span className="text"> {project.year} </span>
                                    </div>

                                </div>

                                {/* Content */}
                                <div className="cardInfo">
                                    <h3 className="title"> {project.title} </h3>
                                </div>

                                <div className="hoverSection">
                                    <p className="description"> {project.description} </p>

                                    <div className="hoverButtons">
                                        <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="button btn-demo button-primary">
                                            <Play size={18} />
                                            <span>Ver Demo</span>
                                        </a>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="button btn-code button-primary">
                                            <Github size={18} />
                                            <span>Ver Código</span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="moreContainer">
                        <p className="text"> ¿Interesado en ver más proyectos o colaborar? </p>
                        <button className="btnMore"> Ver Todos los Proyectos </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;