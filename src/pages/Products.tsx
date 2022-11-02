import BaseLayout from "../layouts/BaseLayout";
import useProducts from "../hooks/useProducts";
import useCart from "../hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
    const { data } = useProducts();
    const { addToCart } = useCart();

    return (
        <BaseLayout>
            <div className="product-grid">
                {data &&
                    data.map((product: any) => (
                        <section className="product-card" key={product.id}>
                            <div className="product-img-wrapper">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <h3 title={product.title}>{product.title}</h3>
                            <h4>${product.price}</h4>
                            <button
                                className="add-to-cart-btn"
                                onClick={() => addToCart(product)}
                            >
                                <FontAwesomeIcon icon={faCartShopping} /> Add
                            </button>
                        </section>
                    ))}
            </div>
        </BaseLayout>
    );
};

export default Products;
