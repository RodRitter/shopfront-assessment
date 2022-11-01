import BaseLayout from "../layouts/BaseLayout";
import useProducts from "../hooks/useProducts";
import useCart from "../hooks/useCart";

const Products: React.FC = () => {
    const { status, data, error, isFetching } = useProducts();
    const { cartProducts, addToCart, removeFromCart } = useCart();

    return (
        <BaseLayout>
            {data &&
                data.map((product: any) => (
                    <div key={product.id} onClick={() => addToCart(product)}>
                        {product.title}
                    </div>
                ))}
            <h2>Cart</h2>
            {cartProducts &&
                cartProducts.map((product) => (
                    <div key={product.id}>
                        {product.title} ({product.amount})
                        <button onClick={() => removeFromCart(product.id)}>
                            Remove
                        </button>
                    </div>
                ))}
        </BaseLayout>
    );
};

export default Products;
