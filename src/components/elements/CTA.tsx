import Image from "next/image";
import React from "react";

const CTA = () => {
  return (
    <div className="px-5 md:px-[72px] py-16 bg-base-100">
      <div className="w-full bg-base-50 grid grid-cols-12 gap-12">
        <div className="aspect-square h-full bg-gray-300 col-span-3">
          <Image alt="" src={"/image1.jpeg"} width={1024} height={1024} className="object-cover object-center aspect-square"/>
        </div>
        <div className="py-10 flex flex-col justify-between col-span-9">
          <div className="flex flex-col gap-4">
            <h1 className="font-medium text-5xl tracking-[0.08em] leading-tight">
              Send Us Inquiry
            </h1>
            <p className="max-w-xl tracking-[0.02em]">
              If you want more information, or want to collaborate or customize
              your personal fashion items, you can send us your email or your contact.
            </p>
          </div>
          <input
            type="text"
            className=" w-80 ring-0 focus:ring-inset bg-base-50  focus:px-4 focus:placeholder:text-white duration-0 placeholder:px-0 focus:ring-white border-b py-1 border-gray-500"
            placeholder="Your Email/Another Contact"
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
