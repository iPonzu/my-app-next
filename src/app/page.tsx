import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Página Inicial",
}

export default function Main(){
  return(
    <main>
      <header>
        <h1 className="font-sans text-center text-red-900 font-bold underline">Olá, mundo!</h1>
      </header>
    </main>
  )
}