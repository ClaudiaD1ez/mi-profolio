import { dataPortfolio } from "@/src/data";
import Title from "./shared/title";
import { ArrowRight, Github, Play } from "lucide-react";

import "../styles/portfolio.css"
import "../styles/buttons.css"

const Portfolio = () => {
    return(
        <section id="projects" className="proyectSection">
            <div className="container">
                <div className="proyectContainer">
                    <Title title="Experiencia Profesional" subtitle="Proyectos Destacados" />

                    <div className="cardsContainer">
                        {dataPortfolio.map((project, index) => (
                            <div className="cardProyect" key={project.id} style={{ backgroundImage: `url(${project.image})` }}>
                                <div className="overlay-darken"></div>
                                <div className="backgroundFilter"></div>

                                {/* Título fijo abajo */}
                                <div className="cardTitleOverlay">
                                    <h3 className="title">{project.title}</h3>
                                </div>

                                {/* Hover content */}
                                <div className="hoverSection">
                                    <div className="hoverContainer">
                                    <div className="manchetaCategory">
                                        <span className="text">{project.category}</span>
                                    </div>

                                    <div className="manchetaYear">
                                        <span className="text">{project.year}</span>
                                    </div>

                                    <p className="description">{project.description}</p>

                                    <div className="hoverButtons">
                                        <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="button button-secondary btn-demo">
                                        <Play size={18} />
                                        <span>Ver Demo</span>
                                        </a>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="button button-secondary btn-code">
                                        <Github size={18} />
                                        <span>Ver Código</span>
                                        </a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="moreContainer">
                        <p className="text"> ¿Interesado en ver más proyectos o colaborar? </p>
                        <button className="button button-primary btnMore"> Ver Todos los Proyectos </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;