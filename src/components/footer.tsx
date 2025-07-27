import { Heart , Mail, MapPin, Phone } from "lucide-react";
import "../styles/footer.css"
import { dataRRSS } from "@/src/data";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
    <footer className="footerSection">
      <div className="container">
        <div className="footerContainer">
            <div className="mainInfoFooter">
                {/* Contact Info */}
                <div className="footerInfo">
                    <h3 className="footerTitle">Contacto</h3>
                    <div className="infoContacto">
                        <div className="dato">
                            <Mail size={18} />
                            <p>claudia.diezsan@gmail.com</p>
                        </div>
                        <div className="dato">
                            <Phone size={18} />
                            <p>+34 650 34 75 03</p>
                        </div>
                        <div className="dato">
                            <MapPin size={18} />
                            <p>Madrid, España</p>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footerInfo">
                    <h3 className="footerTitle">Navegación</h3>
                    <div className="footerNav">
                        {['Inicio', 'Experiencia', 'Habilidades', 'Proyectos'].map((link) => (
                            <div key={link}>
                                <a className="footerLinks">
                                    {link}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Social Links */}
                <div className="socialFooter">
                    <h3 className="footerTitle"> Sígueme </h3>
                    <div className="footerIcons">
                        {dataRRSS.map((data) => (
                            <div key={data.id} className="social">
                                <Link href={data.link}>
                                    <Image src={data.url} alt="Image" width={20} height={20} className="footerImg"/>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="finalFooter">
                <p className="derechos"> © 2024 Claudia Díez. Todos los derechos reservados.</p>
                <p className="conAmor"> Hecho con <Heart size={16} className="heart" /> </p>
            </div>
        </div>
      </div>
    </footer>
    )
}

export default Footer;