import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Projetos",
}

export default function ProjectsPage(){
    return(
        <nav>
            <header
                className="absolute font-sans rounded-md bg-red-500"
            />
                <div className="flex justify-center mt-16">
                    <h3 className="font-sans absolute">Conheça um pouco mais sobre meus projetos pessoais</h3>
                </div>
        </nav>
    )
}
