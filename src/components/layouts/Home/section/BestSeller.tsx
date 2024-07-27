"use client";

import Carousel from "@/components/elements/Carousel";
import ProductCard from "@/components/elements/ProductCard";
import useIsMobile from "@/hooks/useIsMobile";
import productData from "@/lib/content/productData";

const BestSeller = () => {
  const isMobile = useIsMobile();
  return (
    <div className="px-5 md:px-[72px] py-16 text-left md:text-center flex bg-base-100 flex-col gap-12">
      <h1 className="text-7xl md:text-8xl font-medium">Best Seller</h1>
      {!isMobile ? (
        <div className="md:px-0 flex gap-8 md:gap-12 justify-start md:justify-center overflow-hidden">
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
