import ProductCard from "@/components/elements/ProductCard";
import productData from "@/lib/content/productData";

const ProductList = () => {
  return (
    <div className="md:px-[72px] py-16 flex bg-base-100 flex-col gap-12">
      <h1 className="text-8xl font-medium">Our Product Showroom</h1>
      <div className="grid grid-cols-4 gap-12 overflow-hidden">
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
      <span className="py-8 text-lg tracking-[0.02em] text-center">More Products Coming Soon...</span>
    </div>
  );
};

export default ProductList;
