import Link from "next/link";
import Image from "next/image";
import Conatiner from "./shared/container";
import { buttonVariants } from "./ui/button";
import { Mail, Paperclip } from "lucide-react";

const Introduction = () => {
    return(
        <Conatiner>
            <div className="text-center flex flex-col items-center" id="home">
                <h3 className="text-xl mb-3">Hello I'm</h3>
                <h1 className="text-4xl font-bold mb-3"> Claudia Díez</h1>
                <h2 className="text-2xl text-gray-400">frontend Developer</h2>
                <div className="flex items-center">
                    <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
                        <Link className={buttonVariants()} href="#contact">
                            <Mail className="mr-2"/> Contacta conmigo
                        </Link>
                        <Link className={buttonVariants({variant: 'secondary'})} href="/cv-claudia.pdf" target="_blank">
                            <Paperclip className="mr-2"/> Descargar cv
                        </Link>
                    </div>
                </div>
                <Image src="/img-portada.webp" alt="Profile pic" className="mt-10" width={300} height={300}/>
            </div>
        </Conatiner>
    );
}

export default Introduction;