import React from "react";
import Image from "next/image";

interface _quadroNativeStoreProps {}

const _quadroNativeStore: React.FC<_quadroNativeStoreProps> = () => {
  return (
    <div id="nativestoreImage">
      <a 
        href="https://github.com/iPonzu/NativeStore"
        title="RepositoryImageNativeStore"
        target="_blank"
        >
          <Image
            src="/images/nativePrint.png"
            alt="RepositoryImageNativeStore"
            width={500}
            height={100}
          />
      </a>
    </div>
  );
};

export default _quadroNativeStore;