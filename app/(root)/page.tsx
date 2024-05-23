import ProductList from "@/components/shared/product/product-list";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import { Metadata } from "next";
import { getLatestProducts } from "@/lib/actions/product.actions";
export const metadata: Metadata = {
  title: `${APP_NAME} - ${APP_DESCRIPTION}`,
};
export default async function Home() {
  const latestProducts = await getLatestProducts();
  return (
    <div>
      <ProductList title="Newest Arrivals" data={latestProducts} />
    </div>
  );
}
