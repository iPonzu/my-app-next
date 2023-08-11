import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Página Inicial",
}

export default function Page(){
  return(
    <main>
      <nav id="navbar">
        <header className="w-screen px-4 py-5 flex justify-content align-center">
          <ul>
            <a className="font-sans absolute top-0 right-10 h-8 w-20 border-2 rounded-md hover:transition-all hover:bg-cyan-950 " href="https://www.google.com" target="_blank">LinkedIn</a>
            <a href=""></a>
          </ul>
        </header>
          <div className="flex items-center justify-center h-screen">
            <h1 className="font-sans">Hi! I'm João Franco, welcome to my first website <br />
              This website was made with Next.js and TailwindCSS, to show about me and my projects and skills. <br />
            </h1>
          </div>
            <div className="flex flex-col items-center justify-center h-8">
              <div className="text-center">
                <Link className="" href="/skills">My Skills</Link>
              </div>
            </div>
      </nav>
    </main>
  )
}