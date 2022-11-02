import BaseLayout from "../layouts/BaseLayout";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

const Products = () => {
    const { data } = useProducts();

    return (
        <BaseLayout>
            <div className="product-grid">
                {!data && (
                    <>
                        <ProductCard skeleton />
                        <ProductCard skeleton />
                        <ProductCard skeleton />
                        <ProductCard skeleton />
                        <ProductCard skeleton />
                        <ProductCard skeleton />
                        <ProductCard skeleton />
                        <ProductCard skeleton />
                    </>
                )}

                {data &&
                    data.map((product: any) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
        </BaseLayout>
    );
};

export default Products;
