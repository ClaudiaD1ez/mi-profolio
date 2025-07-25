import { dataServices } from "@/data";
import Title from "./shared/title";
import Image from "next/image";
import "../components/styles/services.css"

const Services = () => {
    return(
        <div className="servicesSection" id="services">
            <div className="container">
                <Title title="Servicios" subtitle="Que ofrezco" />
                <div className="servicesContainer">
                    {dataServices.map((services) => (
                        <div key={services.id} className="servicesCard">
                            <h4 className="servidesTitle">
                                <Image src={services.url} alt="Image" width={40} height={40} className=""/>
                                {services.title}
                            </h4>
                            <p>{services.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;