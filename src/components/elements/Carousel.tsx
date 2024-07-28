"use client";

import React, { useEffect, useState } from "react";
import { ProductProps } from "@/lib/content/productData";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils";

interface CarouselProps {
    products: ProductProps[];
}

const Carousel: React.FC<CarouselProps> = ({ products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    //   }, 3000); // Change slide every 3 seconds

    //   return () => clearInterval(interval);
    // }, [products.length]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative h-[472px] w-full overflow-hidden">
            <div
                className="absolute flex gap-8 transition-transform duration-1000 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 256}px)`,
                }}
            >
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="flex items-start justify-start gap-8" // 32px gap
                    >
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>
            {currentIndex !== 0 && (
                <button
                    className={cn(
                        "absolute left-0 top-1/2 h-fit -translate-y-1/2 transform rounded-full border-2 border-white bg-gray-800 p-2 text-white transition duration-150",
                    )}
                    onClick={prevSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                </button>
            )}

            <button
                className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full border-2 border-white bg-gray-800 p-2 text-white"
                onClick={nextSlide}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </button>
        </div>
    );
};

export default Carousel;
