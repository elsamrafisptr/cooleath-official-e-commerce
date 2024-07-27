import Image from "next/image";
import Link from "next/link";

const NewArrivals = () => {
  return (
    <div className="px-5 md:px-[72px] py-16 flex flex-col gap-6 md:gap-12 bg-base-100">
      <div className="flex flex-col md:flex-row justify-between items-start">
        <h1 className="text-7xl md:text-8xl font-medium tracking-[.08em]">
          New Arrivals
        </h1>
        <p className="md:max-w-lg text-left md:text-right mt-6">
          Cooleath Official Pleated Bag (noun) Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ipsa quia. Voluptatem.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-4 md:gap-8 grid-rows-2">
        <div className="col-span-12 md:col-span-6 aspect-[5/4] row-span-2 bg-gray-300 relative">
          <Image
            alt=""
            src={"/image1.jpeg"}
            width={1024}
            height={1024}
            className="object-cover object-center aspect-[5/4] md:h-[505.19px]"
          />
          <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 flex items-center gap-3 z-20">
            <h1 className="px-6 md:px-8 py-2 md:py-2.5 bg-black text-white md:font-medium text-sm md:text-lg border-2 border-white rounded-full">
              Cooleath Pleated Bag
            </h1>
            <Link
              href={"/showroom"}
              className="border-2 border-white px-6 md:px-8 py-2 md:py-2.5 rounded-full text-white text-sm md:text-lg md:font-medium"
            >
              Shop Now
            </Link>
          </div>
          <div className="bg-gradient-to-t from-black w-full h-1/4 opacity-60 absolute bottom-0 z-10"></div>
        </div>
        <div className="col-span-6 md:col-span-3 aspect-[5/4] row-span-1 bg-gray-300 relative">
          <Image
            alt=""
            src={"/image2.jpeg"}
            width={1024}
            height={1024}
            className="object-cover object-center aspect-[5/4]"
          />
        </div>
        <div className="col-span-6 md:col-span-3 md:col-start-10 aspect-[5/4] row-span-1 bg-gray-300">
          <Image
            alt=""
            src={"/image3.jpeg"}
            width={1024}
            height={1024}
            className="object-cover object-center aspect-[5/4]"
          />
        </div>
        <div className="col-span-6 md:col-span-3 aspect-[5/4] row-span-1 bg-gray-300">
          <Image
            alt=""
            src={"/image4.jpeg"}
            width={1024}
            height={1024}
            className="object-cover object-bottom aspect-[5/4]"
          />
        </div>
        <div className="col-span-6 md:col-span-3 md:col-start-10 aspect-[5/4] row-span-1 md:row-start-2 bg-black relative">
          <Image
            alt=""
            src={"/alt_image.jpg"}
            width={1024}
            height={1024}
            className="object-cover object-bottom aspect-[5/4] brightness-50"
          />
          <h1 className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-gray-300 font-medium text-lg text-center md:text-left">+ More Image</h1>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
