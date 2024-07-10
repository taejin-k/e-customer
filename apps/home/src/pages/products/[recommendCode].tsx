import { useRouter } from 'next/router';

const Products = () => {
  const router = useRouter();
  const { recommendCode } = router.query;

  return <div>ProductsPage</div>;
};

export default Products;
