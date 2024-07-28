import Image from "next/image";
import Link from "next/link";

const NewArrivals = () => {
    return (
        <div className="flex flex-col gap-6 bg-base-100 px-5 py-16 md:gap-12 md:px-[72px]">
            <div className="flex flex-col items-start justify-between md:flex-row">
                <h1 className="text-7xl font-medium tracking-[.08em] md:text-8xl">New Arrivals</h1>
                <p className="mt-6 text-left md:max-w-lg md:text-right">
                    Cooleath Official Pleated Bag (noun) Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, ipsa quia. Voluptatem.
                </p>
            </div>
            <div className="grid grid-cols-12 grid-rows-2 gap-4 md:gap-8">
                <div className="relative col-span-12 row-span-2 aspect-[5/4] bg-gray-300 md:col-span-6">
                    <Image
                        alt=""
                        src={"/image1.jpeg"}
                        width={1024}
                        height={1024}
                        className="aspect-[5/4] object-cover object-center md:h-[505.19px]"
                    />
                    <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 md:bottom-10 md:left-10">
                        <h1 className="rounded-full border-2 border-white bg-black px-6 py-2 text-sm text-white md:px-8 md:py-2.5 md:text-lg md:font-medium">
                            Cooleath Pleated Bag
                        </h1>
                        <Link
                            href={"/showroom"}
                            className="rounded-full border-2 border-white px-6 py-2 text-sm text-white md:px-8 md:py-2.5 md:text-lg md:font-medium"
                        >
                            Shop Now
                        </Link>
                    </div>
                    <div className="absolute bottom-0 z-10 h-1/4 w-full bg-gradient-to-t from-black opacity-60"></div>
                </div>
                <div className="relative col-span-6 row-span-1 aspect-[5/4] bg-gray-300 md:col-span-3">
                    <Image
                        alt=""
                        src={"/image2.jpeg"}
                        width={1024}
                        height={1024}
                        className="aspect-[5/4] object-cover object-center"
                    />
                </div>
                <div className="col-span-6 row-span-1 aspect-[5/4] bg-gray-300 md:col-span-3 md:col-start-10">
                    <Image
                        alt=""
                        src={"/image3.jpeg"}
                        width={1024}
                        height={1024}
                        className="aspect-[5/4] object-cover object-center"
                    />
                </div>
                <div className="col-span-6 row-span-1 aspect-[5/4] bg-gray-300 md:col-span-3">
                    <Image
                        alt=""
                        src={"/image4.jpeg"}
                        width={1024}
                        height={1024}
                        className="aspect-[5/4] object-cover object-bottom"
                    />
                </div>
                <div className="relative col-span-6 row-span-1 aspect-[5/4] bg-black md:col-span-3 md:col-start-10 md:row-start-2">
                    <Image
                        alt=""
                        src={"/alt_image.jpg"}
                        width={1024}
                        height={1024}
                        className="aspect-[5/4] object-cover object-bottom brightness-50"
                    />
                    <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-lg font-medium text-gray-300 md:text-left">
                        + More Image
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;
