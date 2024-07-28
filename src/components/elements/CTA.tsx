import Image from "next/image";
import Link from "next/link";

const CTA = () => {
    return (
        <div className="bg-base-100 px-5 py-16 md:px-[72px]">
            <div className="w-full bg-base-50 md:grid md:grid-cols-12 md:gap-12">
                <div className="col-span-3 hidden aspect-square h-full md:block">
                    <Image
                        alt=""
                        src={"/image1.jpeg"}
                        width={1024}
                        height={1024}
                        className="aspect-square object-cover object-center"
                    />
                </div>
                <div className="col-span-9 flex flex-col gap-6 px-6 py-10 md:justify-between md:px-0">
                    <div className="flex flex-col items-center justify-center gap-6 text-center md:items-start md:justify-start md:gap-4 md:text-left">
                        <h1 className="text-5xl font-medium leading-none tracking-[0.08em] md:leading-tight">
                            Send Us Inquiry
                        </h1>
                        <p className="max-w-xl tracking-[0.02em]">
                            If you want more information, or want to collaborate or customize your personal fashion
                            items, you can send us your email or your contact.
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 md:justify-start">
                        <Link
                            href={"/contact"}
                            className="rounded-full border-2 border-white bg-black px-6 py-2 text-sm text-white md:px-8 md:py-2.5 md:text-lg md:font-medium"
                        >
                            Send Now
                        </Link>
                        <Link
                            href={"/about"}
                            className="rounded-full border-2 border-black px-6 py-2 text-sm text-black md:px-8 md:py-2.5 md:text-lg md:font-medium"
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
