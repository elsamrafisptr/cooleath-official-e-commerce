import Image from "next/image";
import React from "react";

const HeadlineSection = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="w-full h-screen bg-gray-400 overflow-hidden relative">
      <Image
        alt=""
        src={"/alt_image.jpg"}
        height={1024}
        width={1024}
        className="w-full h-screen object-cover object-bottom"
      ></Image>
      {children}
    </div>
  );
};

export default HeadlineSection;
