import { Filters, ProductsContainer, PaginationContainer } from "../components";
import { customFetch } from "../utils";

const ulr = "/products";

export const loader = async ({ request }) => {
  const response = await customFetch(ulr);
  const products = response.data.data;
  const meta = response.data.meta;

  return { products, meta };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
