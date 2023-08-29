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
        <header className="w-screen px-4 py-5 flex items-center">
          <div className="flex align-text-top">
              <ul>
                <a className="font-sans absolute inset-y-4 right-48 h-8 w-16 border-2 rounded-md hover:transition-all hover:bg-cyan-950 " href="https://www.linkedin.com/in/joao-ignacio-castro-franco-634873232/" target="_blank">LinkedIn</a>
                <a href=""></a>
              </ul>
          </div>
              <div className="flex align-text-top">
                <div className="font-sans absolute right-24 inset-y-4 h-8 w-16 border-2 rounded-md hover:transition-all hover:bg-red-950">
                      <Link className="block font-sans 12px" href="/skills">My Skills</Link>
                  </div>
              </div>
                <div className="flex align-text-top">
                  <div className="font-sans absolute inset-y-4 h-8 w-30 left-3/4 border-2 rounded-md hover:transition-all hover:bg-green-900">
                      <Link className="font-sans 12px" href="/projects">My Projects</Link>
                  </div>
                </div>
        </header>
          <div className="flex items-center justify-center h-screen">
            <h1 className="font-sans">Hi! I'm João Franco, welcome to my first website <br />
              This website was made with Next.js and TailwindCSS, to show about me and my projects and skills. <br />
              I'm current a Dev. student at Senac Joinville, and I'm looking for a job as a Back-end Developer. <br />
              Let me show you my skills and projects! <br />
              <div className="font-sans flex items-center justify-center p-1 space-x-5">
                <Link className="border-2 rounded-md hover:transition-all hover:bg-red-950" href="/skills">Click me to visit My Skills</Link> 
                <Link className="border-2 rounded-md hover:transition-all hover:bg-green-900" href="/projects">If you prefer projects, click me</Link>
              </div>
            </h1>
          </div>
      </nav>
    </main>
  )
}