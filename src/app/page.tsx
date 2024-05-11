import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Página Inicial",
}

export default function MainPage(){
  return(
      <nav id="navbar">
        <header className="w-screen px-4 py-5 flex items-center">
          <div className="flex align-text-top">
              <ul>
                <a className="font-sans font-semibold absolute inset-y-4 right-48 h-8 w-19 border-2 rounded-md hover:transition-all hover:bg-cyan-950 " href="https://www.linkedin.com/in/joao-ignacio-castro-franco-634873232/" target="_blank">LinkedIn</a>
              </ul>
          </div>
              <div className="flex align-text-top">
                <div className="font-sans absolute right-24 inset-y-4 h-8 w-19 border-2 rounded-md hover:transition-all hover:bg-red-950">
                      <Link className="font-semibold" href="/skills">Skills</Link>
                  </div>
              </div>
                <div className="flex align-text-top">
                  <div className="font-sans absolute inset-y-4 h-8 w-25 left-3/4 border-2 rounded-md hover:transition-all hover:bg-green-900">
                      <Link className="font-semibold" href="/projects">Projetos</Link>
                  </div>
                </div>
        </header>
          <div className="flex items-center justify-center h-screen">
            <h1 className="font-sans w-96">Olá, me chamo João Ignacio Castro Franco, estou na última fase do curso de Análise e Desenvolvimento de Sistemas. 
            Procuro uma oportunidade na área de desenvolvimento, para mostrar meu aprendizado até o momento, fique a vontade neste site e me conheça um pouco mais!
            Este site foi desenvolvido em NextJS no front-end. <br />
              <div className="font-sans flex items-center justify-center p-1 space-x-5">
                <Link className="border-2 rounded-md hover:transition-all hover:bg-red-950" href="/skills">Clique aqui para minhas habilidades</Link> 
                <Link className="border-2 rounded-md hover:transition-all hover:bg-green-900" href="/projects">Ou se preferir ver meus projetos pessoais, clique aqui</Link>
              </div>
            </h1>
          </div>
      </nav>
  )
}