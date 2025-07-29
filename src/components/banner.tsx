import Link from "next/link";
import Image from "next/image";
import Conatiner from "./shared/container";
import { Mail, Paperclip } from "lucide-react";

import "../styles/banner.scss"
import "../styles/buttons.scss"

const Banner = () => {

    return(
        <div className="banner-central" id="home">
            <div className="container bannerContainer">
                <div className="infoTop">
                    <div className="mainInfo">
                        <h3 className="hello">Frontend Developer</h3>
                        <h1 className="name">Claudia Díez</h1>
                        <div className="btnsContainer">
                            <Link className="button button-primary" href="#contact">
                                <Mail className="mr-2" /> Contacta conmigo
                            </Link>

                            <Link className="button button-contrast" href="/cv-claudia.pdf" target="_blank">
                                <Paperclip className="mr-2" /> Descarga mi cv
                            </Link>
                        </div>
                    </div>
                    <div className="imgContainer">
                        <Image src="/img/portada-img.png" alt="Profile pic" className="img-portada" width={300} height={430}/>
                    </div>
                </div> 

                <section className="linea-franja"><div className="linea"></div></section>

                <div className="infoBottom">
                    <div className="about">
                        <h2>Sobre mi</h2>
                        <p>claudia.diezsan@gmail.com</p>
                    </div>
                    <p className="presentation">Desarrolladora front-end apasionada por crear <span>experiencias digitales</span>. 
                        Me especializo en <span>React, TypeScript y diseño responsive</span> transformando ideas en aplicaciones web modernas, 
                        intuitivas y escalables.</p>
                </div>
                
            </div>
        </div>
    );
}

export default Banner;