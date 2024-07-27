import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="px-5 md:px-[72px] py-16 bg-base-100">
      <div className="w-full bg-base-50 md:grid md:grid-cols-12 md:gap-12">
        <div className="hidden md:block aspect-square h-full col-span-3">
          <Image
            alt=""
            src={"/image1.jpeg"}
            width={1024}
            height={1024}
            className="object-cover object-center aspect-square"
          />
        </div>
        <div className="px-6 md:px-0 py-10 flex flex-col md:justify-between gap-6 col-span-9">
          <div className="flex flex-col gap-6 md:gap-4 md:text-left text-center md:items-start items-center md:justify-start justify-center">
            <h1 className="font-medium text-5xl tracking-[0.08em] leading-none md:leading-tight">
              Send Us Inquiry
            </h1>
            <p className="max-w-xl tracking-[0.02em]">
              If you want more information, or want to collaborate or customize
              your personal fashion items, you can send us your email or your
              contact.
            </p>
          </div>
          <div className="flex items-center gap-2 md:justify-start justify-center">
            <Link
              href={"/contact"}
              className="px-6 md:px-8 py-2 md:py-2.5 bg-black text-white md:font-medium text-sm md:text-lg border-2 border-white rounded-full"
            >
              Send Now
            </Link>
            <Link
              href={"/about"}
              className="border-2 border-black px-6 md:px-8 py-2 md:py-2.5 rounded-full text-black text-sm md:text-lg md:font-medium"
            >
              More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
