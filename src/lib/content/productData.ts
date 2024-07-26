type ProductProps = {
  productName: string;
  productPrice: number;
  imageGallery: string[];
  variants?: variantProps[];
};

type variantProps = {
  name: string;
  attributes: {
    color: string;
    stock: number;
  };
};

const productData: ProductProps[] = [
  {
    productName: "Maroon Pleated Bag",
    productPrice: 119931,
    imageGallery: ["/image1.jpeg"],
    variants: [
      {
        name: "Maroon",
        attributes: {
          color: "bg-red-800",
          stock: 5,
        },
      },
    ],
  },
  {
    productName: "Coffee Pleated Bag",
    productPrice: 119931,
    imageGallery: ["/image2.jpeg"],
    variants: [
      {
        name: "Coffee",
        attributes: {
          color: "bg-orange-900",
          stock: 5,
        },
      },
    ],
  },
  {
    productName: "Black Pleated Bag",
    productPrice: 119931,
    imageGallery: ["/image3.jpeg"],
    variants: [
      {
        name: "Black",
        attributes: {
          color: "bg-black",
          stock: 5,
        },
      },
    ],
  },
];

export type { ProductProps, variantProps };
export default productData;
