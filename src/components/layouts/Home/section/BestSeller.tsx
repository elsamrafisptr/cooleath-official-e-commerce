"use client";

import Carousel from "@/components/elements/Carousel";
import ProductCard from "@/components/elements/ProductCard";
import useIsMobile from "@/hooks/useIsMobile";
import productData from "@/lib/content/productData";

const BestSeller = () => {
    const isMobile = useIsMobile();
    return (
        <div className="flex flex-col gap-12 bg-base-100 px-5 py-16 text-left md:px-[72px] md:text-center">
            <h1 className="text-7xl font-medium md:text-8xl">Best Seller</h1>
            {!isMobile ? (
                <div className="flex justify-start gap-8 overflow-hidden md:justify-center md:gap-12 md:px-0">
                    {productData.map((item, index) => {
                        return (
                            <ProductCard
                                productName={item.productName}
                                productPrice={item.productPrice}
                                imageGallery={item.imageGallery}
                                variants={item.variants}
                                key={index}
                            />
                        );
                    })}
                </div>
            ) : (
                <Carousel products={productData} />
            )}
        </div>
    );
};

export default BestSeller;
