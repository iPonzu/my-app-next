import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import csLogo from "..images/csLogo.png";

export const metadata: Metadata = {
    title: "My Projects",
}

export default function Page(){
    return(
        <>
            <header id="headerProject">
                <nav id="navproject">
                    <Image 
                        src={csLogo}
                        alt="cs"
                        width={100}

                    />
                </nav>
            </header>
        </>
    )
}