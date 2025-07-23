import { dataSkills } from "@/data";
import Title from "./shared/title";
import { BadgeCheck } from "lucide-react";
import { Progress } from "./ui/progress";
import Image from "next/image";

import "../components/styles/skills.css"

const Skills = () => {
    return(
        <div className="skillSection" id="skills">
            <div className="container">
                <Title title="Skills" subtitle="Mis skills"/>
                <div className="skillContainer">
                    {dataSkills.map((data) => (
                        <div key={data.name} className="skill my-4">
                            <Image src={data.url} alt="Image" width={40} height={40} className=""/>
                            <p className="flex gap-2 mb-2">{data.name}</p>
                            {/* <p className="text-gray-400 mb-2">{data.subtitle}</p> */}
                            <Progress value={data.value} className="w-[60%]" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;