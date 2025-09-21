"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "./shared/title";
import "../styles/proyectos.scss";
import "../styles/buttons.scss";
import { dataPortfolio } from "@/src/data";

const Proyectos = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const inactiveCards = activeProject && !isMobile
    ? dataPortfolio.filter((p) => p.id !== activeProject)
    : dataPortfolio;

  const activeCard = activeProject
    ? dataPortfolio.find((p) => p.id === activeProject)
    : null;

  // Transición correcta para TypeScript
  const transitionSmooth = {
    type: "tween" as const,
    duration: 0.5,
    ease: "linear" as const,
  };

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (!target.closest(".cardProyect") && !target.closest(".projectDetails")) {
      setActiveProject(null);
    }
  };

  const handleCardClick = (projectId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  // Renderizado para desktop (comportamiento original)
  const renderDesktop = () => (
    <>
      {/* Cards superiores */}
      <motion.div 
        className={`cardsContainer ${activeProject ? "centerCards" : ""}`} 
        layout 
        transition={transitionSmooth}
      >
        {inactiveCards.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`card-${project.id}`}
            className={`cardProyect ${activeProject ? "inactive" : ""}`}
            style={{ backgroundImage: `url(${project.image})` }}
            onClick={(e) => handleCardClick(project.id, e)}
            whileHover={{ scale: activeProject ? 1 : 1.02 }}
            animate={{ opacity: activeProject ? 0.6 : 1 }}
            transition={transitionSmooth}
          >
            <div className="cardTitleOverlay">
              <h3 className="title">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Card activa con descripción como bloque */}
      <AnimatePresence>
        {activeCard && (
          <motion.div
            className="activeSection"
            layout
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={transitionSmooth}
          >
            <motion.div className="activeCardWrapper" layout>
              <motion.div
                layoutId={`card-${activeCard.id}`}
                className="cardProyect activeCard"
                style={{ backgroundImage: `url(${activeCard.image})` }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="cardTitleOverlay">
                  <h3 className="title">{activeCard.title}</h3>
                </div>
              </motion.div>

              <motion.div 
                className="projectDetails" 
                layout 
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="modalClose" 
                  onClick={() => setActiveProject(null)}
                >
                  X
                </button>
                <h2>{activeCard.title}</h2>
                <div className="manchetaYear">
                  <span className="text">{activeCard.year}</span>
                </div>
                <p className="description">{activeCard.description}</p>
                <div className="modalButtons">
                  <a 
                    href={activeCard.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button button-secondary btn-demo"
                  >
                    <span>Visitar página</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  // Renderizado para mobile (nuevo comportamiento)
  const renderMobile = () => (
    <div className="mobileCardsContainer">
      {dataPortfolio.map((project) => (
        <div key={project.id} className="mobileCardWrapper">
          <motion.div
            className="cardProyect mobileCard"
            style={{ backgroundImage: `url(${project.image})` }}
            onClick={(e) => handleCardClick(project.id, e)}
            whileHover={{ scale: 1.02 }}
            transition={transitionSmooth}
          >
            <div className="cardTitleOverlay">
              <h3 className="title">{project.title}</h3>
            </div>
          </motion.div>

          <AnimatePresence>
            {activeProject === project.id && (
              <motion.div
                className="projectDetails mobileDetails"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={transitionSmooth}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="modalClose" 
                  onClick={() => setActiveProject(null)}
                >
                  X
                </button>
                <h2>{project.title}</h2>
                <div className="manchetaYear">
                  <span className="text">{project.year}</span>
                </div>
                <p className="description">{project.description}</p>
                <div className="modalButtons">
                  <a 
                    href={project.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button button-secondary btn-demo"
                  >
                    <span>Visitar página</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );

  return (
    <div className="proyectSection" onClick={handleContainerClick}>
      <div className="container">
        <Title title="Experiencia Profesional" subtitle="Trabajos recientes" />
        {isMobile ? renderMobile() : renderDesktop()}
      </div>
    </div>
  );
};

export default Proyectos;