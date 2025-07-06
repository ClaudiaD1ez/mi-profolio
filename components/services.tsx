import { dataServices } from "@/data";
import Title from "./shared/title";
import { Check } from "lucide-react";

const Services = () => {
    return(
        <div className="p-6 md:px-12 md:py-24 max-w-5xl mx-auto" id="services">
            <Title title="Servicios" subtitle="Que ofrezco" />
            <div className="grid md:grid-cols-3 gap-5 mt-7">
                {dataServices.map((services) => (
                    <div key={services.id} className="rounded-xl border-slate-400 border-2 p-6 dark:bg-slate-800 h-fit">
                        <h4 className="mb-4 text-xl flex gap-2">
                            {services.icon}
                            {services.title}
                        </h4>
                        <ol>
                            {services.features.map((feature, index) => (
                                <li key={index} className="flex gap-3 mb-3">
                                    <Check size={20}/>
                                    {feature.name}
                                </li>
                            ))}
                        </ol>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;