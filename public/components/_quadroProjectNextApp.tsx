import React from "react";
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
                width={500}
                height={100}
            />
            </a>
        </div>
    );
}

export default _quadroProjectNextApp;