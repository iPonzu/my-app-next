import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Skills",
}

export default function SkillsPage(){
    return(
            <nav>    
                <div className="flex justify-center mt-16 ">
                    <h3 className="font-sans absolute">Bem vindo a aba de skills</h3>
                </div>
                <div></div>
            </nav>
    )
}