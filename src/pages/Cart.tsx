import BaseLayout from "../layouts/BaseLayout";
import { Link } from "wouter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import useCart from "../hooks/useCart";

const Cart = () => {
    const { cartProducts, cartPrice, cartTotal, addToCart, removeFromCart } =
        useCart();

    return (
        <BaseLayout>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Amount</th>
                        <th>Unit Price</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cartProducts.map((product) => (
                        <tr>
                            <td>
                                <button
                                    className="remove-product-btn"
                                    onClick={() => removeFromCart(product.id)}
                                >
                                    <FontAwesomeIcon icon={faClose} />
                                </button>
                                {product.title}
                            </td>
                            <td className="text-center">{product.amount}</td>
                            <td>${product.price}</td>
                            <td>${product.price * product.amount}</td>
                        </tr>
                    ))}

                    {cartProducts.length === 0 && (
                        <tr>
                            <td className="empty-row" colSpan={4}>
                                Cart is empty.
                                <Link href="/">Let's go shopping.</Link>
                            </td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <Link href="/">
                                <FontAwesomeIcon icon={faArrowLeft} /> Back to
                                store
                            </Link>
                        </td>
                        <td></td>
                        <td>{cartTotal} Items</td>
                        <td>${cartPrice}</td>
                    </tr>
                </tfoot>
            </table>
        </BaseLayout>
    );
};

export default Cart;
