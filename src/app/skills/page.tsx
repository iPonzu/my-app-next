import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Skills",
}

export default function SkillsPage(){
    return(
        <nav>
            <Link
                className="relative px-4 mt-8 w-48 border rounded-full hover:bg-gray-500 hover:text-white hover:transition-shadow hover:shadow-lg"
                href='/'
                >
                    Voltar
                </Link>
            <div className="flex static justify-center mt-16 ">
                <span className="absolute">Bem vindo a aba de skills</span>
            </div> 
            <div className="flex items-center justify-center p-3 space-x-3 h-[25rem]">
                    <h3 className="font-sans w-64">
                        Possuo experiências acadêmicas com versionamento de código, desenvolvimento de aplicações para desktop, e frameworks do NodeJS
                        como React, React-Native e front-end com NextJS.
                    </h3>
                <div className="px-4 py-2 border rounded shadow">
                    <Image 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                        alt="CsLogo"
                        width={100}
                        height={100}
                    />
                </div>
                    <code>C#</code>
                    <div className="px-5 py-2 border rounded shadow">
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                            alt="GitLogo"
                            width={100}
                            height={100}
                            />
                    </div>
                        <code>Git</code>
                    <div className="px-5 py-2 border rounded shadow">
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                            alt="ReactLogo"
                            width={100}
                            height={100}
                        />
                    </div>
                        <code>React</code>
                    <div className="px-5 py-2 border rounded shadow">
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                            alt="NodeLogo"
                            width={100}
                            height={100}
                        />
                    </div>
                        <code>NodeJS</code>
            </div>
        </nav>
    )
}