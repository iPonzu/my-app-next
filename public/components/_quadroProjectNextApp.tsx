import Image from "next/image";

interface _quadroProjectNextAppProps {}

const _quadroProjectNextApp: React.FC<_quadroProjectNextAppProps> = () => {
  return (
    <div id="nextAppImage">
      <a
        href="https://github.com/iPonzu/nextapp"
        title="RepositoryImageNextApp"
        target="_blank"
        >
            <Image
                src="/images/nextappPrint.png"
                alt="RepositoryImageNextApp"
                width={400}
                height={50}
            />
            </a>
        </div>
    );
}

export default _quadroProjectNextApp;