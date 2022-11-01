import BaseLayout from "../layouts/BaseLayout";
import useProducts from "../hooks/useProducts";

const Products: React.FC = () => {
    const { status, data, error, isFetching } = useProducts();

    return (
        <BaseLayout>
            {data.map((product: any) => (
                <div key={product.id}>{product.title}</div>
            ))}
        </BaseLayout>
    );
};

export default Products;
