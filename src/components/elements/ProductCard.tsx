"use client";

import { useState } from "react";
import { ProductProps } from "@/lib/content/productData";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/services/generateCurrencyFormat";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ProductCard = (props: ProductProps) => {
    const { productName, productPrice, imageGallery, variants } = props;
    const pathname = usePathname();
    return (
        <div className="flex w-fit flex-col gap-6">
            <div
                className={cn(
                    "relative aspect-[4/5] bg-gray-300 md:w-[300px]",
                    pathname === "/showroom" ? "w-full" : "w-56",
                )}
            >
                <Image
                    alt=""
                    src={imageGallery[0]}
                    height={1024}
                    width={1024}
                    className="aspect-[4/5] object-cover object-center"
                />
                <div className="absolute right-4 top-4">
                    <FavoriteButton />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h1 className="text-left text-xl font-bold tracking-[0.02em] md:text-2xl">{productName}</h1>
                    <h2 className="text-left text-xl font-medium md:text-2xl">{formatCurrency(productPrice, "USD")}</h2>
                </div>
                <div className="flex items-center justify-between text-left">
                    <div className="flex items-center gap-1">
                        {variants?.map((item, index) => {
                            return (
                                <div key={index} className={cn("h-4 w-4 rounded-full", item.attributes.color)}></div>
                            );
                        })}
                    </div>
                    <p className="font-medium">{variants![0].attributes.stock} pcs</p>
                </div>
            </div>
            <Link
                href={
                    "https://shopee.co.id/product/942455453/27755451363?d_id=b40c4&uls_trackid=50cbs8r5024m&utm_content=XZ57Yhk4fP5JxKne9Yjg6XgdMMR"
                }
                target="_blank"
                className="rounded-full bg-black px-6 py-2 text-center text-white"
            >
                Checkout
            </Link>
        </div>
    );
};

const FavoriteButton = () => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    return (
        <button
            onClick={() => {
                setIsFavorite(!isFavorite);
            }}
        >
            {!isFavorite ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="#ffffff" viewBox="0 0 256 256">
                    <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path>
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    fill="#000000"
                    viewBox="0 0 256 256"
                    className={cn("transition duration-300", isFavorite && "fill-rose-200")}
                >
                    <path d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"></path>
                </svg>
            )}
        </button>
    );
};

export default ProductCard;
