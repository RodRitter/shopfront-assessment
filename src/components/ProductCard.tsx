import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { ProductType } from "../types";
import useCart from "../hooks/useCart";

type ProductCardType = {
    product?: ProductType;
    skeleton?: boolean;
};

const ProductCard = ({ product, skeleton }: ProductCardType) => {
    const { addToCart } = useCart();

    if (!skeleton && product) {
        return (
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
        );
    }

    return <section className="product-card-skeleton" />;
};

export default ProductCard;
