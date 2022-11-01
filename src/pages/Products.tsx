import BaseLayout from "../layouts/BaseLayout";
import useProducts from "../hooks/useProducts";
import ProductGrid from "../containers/ProductGrid";

const Products = () => {
    const { data } = useProducts();

    return (
        <BaseLayout>
            <ProductGrid>
                {data &&
                    data.map((product: any) => (
                        <div key={product.id}>{product.title}</div>
                    ))}
            </ProductGrid>
        </BaseLayout>
    );
};

export default Products;
