import Image from "next/image";
import Link from "next/link";

const ContactList = () => {
  return (
    <div className="w-full h-screen bg-gray-400 overflow-hidden relative">
      <Image
        alt=""
        src={"/alt_image.jpg"}
        height={1024}
        width={1024}
        className="w-full h-screen object-cover object-bottom brightness-75"
      ></Image>
      <div className="absolute top-48 right-24 aspect-square w-[400px] z-20 bg-base-50 p-8 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-medium">Fill the Forms!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, earum?
            Quas, voluptatum!
          </p>
        </div>
        <form action="" className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              className="w-full bg-base-100 px-4 py-2.5 placeholder:text-gray-500"
              placeholder="Your Email/Another Contact"
            />
          </div>
          <div>
            <textarea
              name=""
              id=""
              className="w-full h-40 bg-base-100 px-4 py-2.5 placeholder:text-gray-500"
              placeholder="Write your brief or anything that will send to us"
            ></textarea>
          </div>
          <button className="w-fit border-2 border-white px-8 py-2.5 rounded-full text-white font-medium bg-black">
            Send Your Message
          </button>
        </form>
      </div>
      <div className="absolute top-48 left-[72px]">
        <h1 className="text-white text-6xl font-medium tracking-[0.08em]">
          {"Let's Get in Touch"}
        </h1>
        <p className="text-white mt-4 max-w-xl tracking-[0.02em]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
          provident unde distinctio nihil dolores qui! Ea.
        </p>
        <div className="mt-12 text-white flex gap-16 items-start">
          <div className="">
            <h2 className="font-medium text-lg">Social Media</h2>
            <ul className="mt-3 flex flex-col gap-1">
              <li>
                <Link href={""} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                  <span className="-mt-0.5 hover:underline hover:underline-offset-8">
                    Instagram
                  </span>
                </Link>
              </li>
              <li>
                <Link href={""} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                  <span className="-mt-0.5 hover:underline hover:underline-offset-8">
                    Tiktok
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-medium text-lg">{"E-Commerce"}</h2>
            <ul className="mt-3 flex flex-col gap-1">
              <li>
                <Link href={""} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                  <span className="-mt-0.5 hover:underline hover:underline-offset-8">
                    Shopee
                  </span>
                </Link>
              </li>
              <li>
                <Link href={""} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                  <span className="-mt-0.5 hover:underline hover:underline-offset-8">
                    Tiktok Shop
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-[72px]">
        <Link
          href={""}
          className="text-white flex items-center gap-2 border-b py-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
          </svg>
          <span className="text-lg tracking-[0.08em]">
            Bandung, West Java, Indonesia
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ContactList;
