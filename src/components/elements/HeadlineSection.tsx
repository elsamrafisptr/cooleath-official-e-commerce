import Image from "next/image";
import React from "react";

const HeadlineSection = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-gray-400">
            <Image
                alt=""
                src={"/alt_image.jpg"}
                height={1024}
                width={1024}
                className="h-screen w-full object-cover object-bottom"
            ></Image>
            {children}
        </div>
    );
};

export default HeadlineSection;
