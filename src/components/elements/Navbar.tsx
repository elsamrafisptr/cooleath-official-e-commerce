"use client";

import useIsMobile from "@/hooks/useIsMobile";
import NavbarItemsData, { NavbarItemsProps } from "@/lib/constant/navbar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

const Navbar = () => {
    const isMobile = useIsMobile();
    const pathname = usePathname();
    const router = useRouter();
    const disabledRoute = ["/auth/register", "/auth/login", "/dashboard"];
    const [isShow, setIsShow] = useState<boolean>(false);
    const [onTop, setOnTop] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [sheetType, setSheetType] = useState<string>("");
    let lastScrollY = 0;

    const handleFavouriteBtn = () => {
        setSheetType("favourite");
    };

    const handleCartBtn = () => {
        setSheetType("cart");
    };

    const handleShow = () => {
        setIsShow((prev) => !prev);
    };

    const controlNavbar = () => {
        if (!isShow) {
            setIsVisible(window.scrollY <= lastScrollY);
        }
        lastScrollY = window.scrollY;
        setOnTop(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isShow]);

    useEffect(() => {
        setIsShow(false);
    }, [pathname]);

    return (
        <>
            {!disabledRoute.includes(pathname) && (
                <Sheet>
                    <div
                        className={cn(
                            "fixed z-50 h-24 w-full px-5 transition duration-500 ease-in-out md:px-[72px]",
                            isShow ? "bg-base-100 text-black" : "text-white",
                            isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
                            onTop !== 0 && "bg-base-100 text-black shadow-md",
                            isShow && onTop !== 0 ? "shadow-none" : "",
                        )}
                        suppressHydrationWarning
                    >
                        <div className="flex h-24 items-center justify-between">
                            <div className="flex items-center gap-16">
                                <Link href={"/"} className="text-2xl font-bold">
                                    {/* <Image
              src={isShow ? "" : ""}
              width={144}
              height={144}
              alt="Arnawa Digital Logo"
            ></Image> */}
                                    Logo
                                </Link>
                                {!isMobile && (
                                    <ul className="flex items-center gap-8">
                                        {NavbarItemsData.map((val, index) => {
                                            return <NavItem key={index} title={val.title} route={val.route} />;
                                        })}
                                    </ul>
                                )}
                            </div>
                            {!isMobile ? (
                                <>
                                    <ul className={cn("flex items-center gap-8")}>
                                        <li>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="28"
                                                height="28"
                                                fill="#000000"
                                                viewBox="0 0 256 256"
                                                className={cn(
                                                    "transition duration-75",
                                                    onTop !== 0 ? "fill-black" : "fill-white",
                                                )}
                                            >
                                                <path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"></path>
                                            </svg>
                                        </li>
                                        {/* <li>
                    <div className="relative">
                      <input type="text"  className="py-2.5 px-6 rounded-full text-black" placeholder="Search"/>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="#000000"
                        viewBox="0 0 256 256"
                        className={cn(
                          "duration-75 transition absolute top-1/2 -translate-y-1/2 right-6",
                        )}
                      >
                        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                      </svg>
                    </div>
                  </li> */}
                                        <li>
                                            <Link
                                                href={"/auth/register"}
                                                className="text-2xl tracking-[0.02em] transition duration-75 hover:underline hover:underline-offset-8 md:text-lg"
                                            >
                                                Register
                                            </Link>
                                        </li>
                                        <li>
                                            {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#000000"
                      viewBox="0 0 256 256"
                      className={cn(
                        "duration-75 transition",
                        onTop !== 0 ? "fill-black" : "fill-white"
                      )}
                    >
                      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
                    </svg> */}
                                            <SheetTrigger onClick={handleFavouriteBtn}>
                                                <span className="text-2xl tracking-[0.02em] transition duration-75 hover:underline hover:underline-offset-8 md:text-lg">
                                                    Favourite
                                                    <span className="font-mono">(0)</span>
                                                </span>
                                            </SheetTrigger>
                                        </li>
                                    </ul>
                                    <SheetContent>
                                        <SheetHeader className="mt-6">
                                            <SheetTitle>
                                                {sheetType === "favourite" ? "Your Favourite Products" : "Your Cart"}
                                            </SheetTitle>
                                            <SheetDescription>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                                                deleniti blanditiis est corporis.
                                            </SheetDescription>
                                        </SheetHeader>

                                        <SheetFooter></SheetFooter>
                                    </SheetContent>
                                </>
                            ) : (
                                <div>
                                    <button
                                        onClick={handleShow}
                                        className="transition duration-300"
                                        suppressHydrationWarning
                                    >
                                        {isShow ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="28"
                                                height="28"
                                                fill="#000000"
                                                viewBox="0 0 256 256"
                                            >
                                                <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="28"
                                                height="28"
                                                fill={onTop === 0 ? "#FFFFFF" : "#000000"}
                                                viewBox="0 0 256 256"
                                                className="transition duration-300"
                                            >
                                                <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path>
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <OpenedHeaderMenu isShow={isShow} />
                </Sheet>
            )}
        </>
    );
};

const NavItem: React.FC<NavbarItemsProps> = ({ title, route }: NavbarItemsProps) => {
    const isMobile = useIsMobile();
    const pathName = usePathname();
    const isActive = pathName === route;

    return (
        <li
            className={cn(
                "w-fit text-2xl transition duration-75 hover:underline hover:underline-offset-8 md:text-lg",
                isMobile
                    ? `font-semibold text-black ${isActive ? "underline underline-offset-8" : ""}`
                    : `font-medium ${isActive ? "underline underline-offset-8" : ""}`,
            )}
        >
            <Link href={route}>{title}</Link>
        </li>
    );
};

const OpenedHeaderMenu = ({ isShow }: { isShow: boolean }) => {
    return (
        <Sheet>
            <div
                className={`fixed w-full transform bg-base-100 pb-12 pt-28 ${
                    isShow ? "translate-y-0 shadow-md" : "-translate-y-full shadow-none"
                } top-0 z-40 transition-transform duration-700 ease-in-out`}
                suppressHydrationWarning
            >
                <ul className="flex flex-col gap-6 px-5 py-6">
                    {NavbarItemsData.map((val, index) => {
                        return <NavItem key={index} title={val.title} route={val.route} />;
                    })}
                </ul>
                <div className="mt-6 flex w-full flex-col gap-2 px-5">
                    <Link
                        href={"/auth/register"}
                        className="flex items-center justify-center rounded-full bg-black py-2 text-center text-2xl font-medium tracking-[0.02em] text-white transition duration-75 md:text-lg"
                    >
                        Register
                    </Link>
                    <SheetTrigger className="w-full">
                        <span className="flex w-full items-center justify-center rounded-full border-2 border-black px-5 py-2 text-2xl font-medium tracking-[0.02em] transition duration-75 md:text-lg">
                            Favourite
                            <span className="font-mono">(0)</span>
                        </span>
                    </SheetTrigger>
                    <SheetContent></SheetContent>
                </div>
            </div>
        </Sheet>
    );
};

export default Navbar;
