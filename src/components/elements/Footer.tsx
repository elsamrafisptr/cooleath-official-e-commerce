"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
    const pathname = usePathname();
    const disabledRoute = ["/auth/register", "/auth/login", "/dashboard"];

    return (
        <>
            {!disabledRoute.includes(pathname) && (
                <>
                    <div className="flex flex-col items-center bg-base-100 px-5 pb-8 pt-16 md:grid md:grid-cols-12 md:px-[72px]">
                        <div className="mb-8 flex flex-col md:col-span-3 md:mb-0">
                            <h1>Logo</h1>
                        </div>
                        <div className="col-span-6 col-start-7 flex flex-col items-center gap-6 text-center md:grid md:grid-cols-3 md:items-start md:text-left">
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <Link href={"/about"} className="hover:underline hover:underline-offset-4">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/showroom"} className="hover:underline hover:underline-offset-4">
                                        Showroom
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/contact"} className="hover:underline hover:underline-offset-4">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <Link
                                        href={"https://instagram.com/cooleath.official"}
                                        target="_blank"
                                        className="hover:underline hover:underline-offset-4"
                                    >
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={"https://shopee.id/cooleath.official"}
                                        target="_blank"
                                        className="hover:underline hover:underline-offset-4"
                                    >
                                        Shopee
                                    </Link>
                                </li>
                            </ul>
                            <ul className="flex flex-col gap-2">
                                <li className="hover:underline hover:underline-offset-4">Privacy Policy</li>
                                <li className="hover:underline hover:underline-offset-4">Terms of Use</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-center justify-between bg-base-100 pb-16 md:flex-row md:px-[72px]">
                        <h1>Copyright Cooleath Official, All Rights Reserved</h1>
                    </div>
                </>
            )}
        </>
    );
};

export default Footer;
