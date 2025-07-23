import { dataAboutGoals, dataAboutExperience, dataSlider } from "@/data";
import Title from "./shared/title";
import { Button } from "./ui/button";
import { Container, Phone } from "lucide-react";
import Image from "next/image";
import "../components/styles/aboutMe.css"

const AboutMe = () => {
    return(
         <div className="aboutSection" id="about-me">
            <div className="container">
                <Title title="Sobre mi" subtitle="Conoceme" />
                <div className="aboutContainer">

                    <div className="goalsContainer">
                        <div className="goalsCards">
                            {dataAboutGoals.map((data) => (
                                <div key={data.id} className="card">
                                    {data.icon}
                                    <p className="my-2">{data.name}</p>
                                    <p className="text-gray-400">{data.description}</p>
                                </div>
                            ))}
                        </div>
                        
                        <Button>
                            <Phone className="aboutBtn"/> Hablamos
                        </Button>
                    </div>

                    <div className="experienceContainer">
                        <div className="experiences">
                            {dataAboutExperience.map((data) => (
                                <div key={data.id} className="experienceItem">

                                    <div className="lineRoute">
                                        <span className="dot" />
                                        <span className="line" />
                                    </div>

                                    <div className="content">
                                        <p className="title">{data.name}</p>
                                        <p className="text">{data.description}</p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;