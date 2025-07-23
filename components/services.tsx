import { dataServices } from "@/data";
import Title from "./shared/title";
import { Check } from "lucide-react";
import Image from "next/image";
import "../components/styles/services.css"

const Services = () => {
    return(
        <div className="servicesSection p-6 md:px-12 md:py-24 max-w-5xl mx-auto" id="services">
            <div className="container">
                <Title title="Servicios" subtitle="Que ofrezco" />
                <div className="servicesContainer">
                    {dataServices.map((services) => (
                        <div key={services.id} className="servicesCard">
                            <h4 className="servidesTitle">
                                <Image src={services.url} alt="Image" width={40} height={40} className=""/>
                                {services.title}
                            </h4>
                            <ol>
                                {services.features.map((feature, index) => (
                                    <li key={index} className="puntos">
                                        <Check size={14}/>
                                        {feature.name}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;