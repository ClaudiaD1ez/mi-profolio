"use client";

import dynamic from "next/dynamic";
import Title from "./shared/title";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/services.scss";

const Slider = dynamic(() => import("react-slick"), { ssr: false });  // <-- cambio aquí

import { dataServices } from "@/src/data";

const Services = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "40px",  // ajusta el espacio visible a izquierda y derecha de la slide
        arrows: true,
        responsive: [
            {
            breakpoint: 1024,
            settings: { slidesToShow: 2, centerPadding: "30px" },
            },
            {
            breakpoint: 767,
            settings: { slidesToShow: 1, centerPadding: "20px" },
            },
        ],
    };

    return (
        <div className="servicesSection" id="services">
            <div className="container">
                <Title title="Servicios" subtitle="Que ofrezco" />
                <div className="servicesContainer">
                    <Slider {...settings}>
                        {dataServices.map((services) => (
                            <div key={services.id} className="servicesCard">
                                <h4 className="servidesTitle">
                                    <Image
                                        src={services.url}
                                        alt={services.title} // alt descriptivo
                                        width={40}
                                        height={40}
                                        className=""
                                    />
                                    {services.title}
                                </h4>
                                <p>{services.name}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Services;