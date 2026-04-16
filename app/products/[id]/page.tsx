"use cache"
import {getFeaturedProducts} from "@/lib/products/product-select";

export const generateStaticParams = async () => {
  const featuredProducts = await getFeaturedProducts();

  return featuredProducts.map((product) => ({
    id: product.id.toString(),
  }));
};

type Props = {
  params: Promise<{ id: string }>;
};
export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  return <div>Product {id}</div>;
}