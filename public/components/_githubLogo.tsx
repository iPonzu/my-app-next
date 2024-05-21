import Image from "next/image";

interface _githubLogoProps {}

const _githubLogo: React.FC<_githubLogoProps> = () => {
    return(
        <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            alt="GithubLogo"
            width={40}
            height={40}
        />
    )
}


export default _githubLogo