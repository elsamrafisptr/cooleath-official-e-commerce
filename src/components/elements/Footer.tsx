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
          <div className="px-5 md:px-[72px] pt-16 pb-8 md:grid md:grid-cols-12 flex flex-col items-center bg-base-100">
            <div className="md:col-span-3 flex flex-col mb-8 md:mb-0">
              <h1>Logo</h1>
            </div>
            <div className="col-span-6 col-start-7 md:grid md:grid-cols-3 flex flex-col items-center text-center md:text-left md:items-start gap-6">
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href={"/about"} className="hover:underline hover:underline-offset-4">About Us</Link>
                </li>
                <li>
                  <Link href={"/showroom"} className="hover:underline hover:underline-offset-4">Showroom</Link>
                </li>
                <li>
                  <Link href={"/contact"} className="hover:underline hover:underline-offset-4">Contact</Link>
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
                <li>
                  <Link
                    href={"https://tiktok.com/cooleath.official"}
                    target="_blank"
                    className="hover:underline hover:underline-offset-4"
                  >
                    Tiktok
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li className="hover:underline hover:underline-offset-4">Privacy Policy</li>
                <li className="hover:underline hover:underline-offset-4">Terms of Use</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:px-[72px] pb-16 flex flex-col md:flex-row items-center justify-between bg-base-100">
            <h1>Copyright Cooleath Official, All Rights Reserved</h1>
          </div>
        </>
      )}
    </>
  );
};

export default Footer;
