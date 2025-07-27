import { dataRRSS } from "@/src/data";
import Link from "next/link";
import "../styles/franja.css"
import Image from "next/image";

const Franja = () => {
    return(
        <div className="franjaSection" id="franja">
            <div className="franjaContainer">
                {dataRRSS.map((data) => (
                    <div key={data.id} className="social">
                        <Link href={data.link}>
                            <Image src={data.url} alt="Image" width={40} height={40} className="franjaImg"/>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Franja;