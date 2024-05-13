import { Metadata } from "next";
import Link from "next/link";
import _quadro from "../../../public/components/_quadroProjects";

export const metadata: Metadata = {
    title: "Projetos",
}

export default function ProjectsPage(){
    return(
        <nav>
            <Link
                className="relative px-4 mt-8 w-48 border rounded-full hover:bg-gray-500 hover:text-white hover:transition-shadow hover:shadow-lg"
                href='/'
                >
                    Voltar
                </Link>
                <div className="flex justify-center mt-16">
                    <span className="absolute">Conheça um pouco mais sobre meus projetos pessoais</span>
                </div>
                <div className="">
                    <_quadro />
                </div>
        </nav>
    )
}
