"use client";

import React, { useState } from "react";
import { ProductProps } from "@/lib/content/productData";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils";

interface CarouselProps {
  products: ProductProps[];
}

const Carousel: React.FC<CarouselProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[472px] overflow-hidden">
      <div
        className="absolute gap-8 flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 256}px)`,
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            className=" flex justify-start items-start gap-8" // 32px gap
          >
            <ProductCard {...product} />
          </div>
        ))}
      </div>
      {currentIndex !== 0 && (
        <button
          className={cn(
            "absolute h-fit left-0 rounded-full border-2 transition duration-150 border-white top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </button>
      )}

      <button
        className="absolute right-0 top-1/2 rounded-full border-2 border-white transform -translate-y-1/2 bg-gray-800 text-white p-2"
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
