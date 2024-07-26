import ProductCard from "@/components/elements/ProductCard";
import productData from "@/lib/content/productData";

const BestSeller = () => {
  return (
    <div className="md:px-[72px] py-16 text-center flex bg-base-100 flex-col gap-12">
      <h1 className="text-8xl font-medium">Best Seller</h1>
      <div className="flex gap-12 justify-center overflow-hidden">
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
    </div>
  );
};

export default BestSeller;
