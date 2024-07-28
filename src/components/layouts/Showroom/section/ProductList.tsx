import ProductCard from "@/components/elements/ProductCard";
import productData from "@/lib/content/productData";

const ProductList = () => {
    return (
        <div className="flex flex-col gap-12 bg-base-100 px-5 py-16 md:px-[72px]">
            <h1 className="text-7xl font-medium md:text-8xl">Product Showroom</h1>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
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
            <span className="py-8 text-center text-lg tracking-[0.02em]">More Products Coming Soon...</span>
        </div>
    );
};

export default ProductList;
