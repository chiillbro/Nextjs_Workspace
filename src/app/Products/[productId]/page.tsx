import { Metadata } from "next";

type props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${params.productId}`);
    }, 100);
  });
  return {
    title: `iphone ${title}`,
  };
};

const ProductDetails = ({ params }: props) => {
  return <h2>Viewing details about {params.productId}</h2>;
};

export default ProductDetails;
