import Image from "next/image";
import React from "react";

interface _linkedinLogoProps {}

const _linkedinLogo: React.FC<_linkedinLogoProps> = () =>{
    return(
        <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
            alt="LinkedinLogo"
            width={40}
            height={40}
        />
    )
}

export default _linkedinLogo