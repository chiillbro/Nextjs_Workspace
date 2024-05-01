import { notFound } from "next/navigation";

export const metadata = {
  title: "Product",
};
const ReviewDetails = ({
  params,
}: {
  params: {
    productId: string;
    reviewsId: string;
  };
}) => {
  if (parseInt(params.reviewsId) > 500) {
    notFound();
  }
  return (
    <h2>
      Viewing review of {params.reviewsId} for {params.productId}
    </h2>
  );
};

export default ReviewDetails;
