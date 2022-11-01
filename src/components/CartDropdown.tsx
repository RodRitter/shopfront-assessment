import React from "react";
import { Link } from "wouter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useCart from "../hooks/useCart";

const CartDropdown = () => {
    const { cartProducts, cartPrice, cartTotal, addToCart, removeFromCart } =
        useCart();
    return (
        <Link href="/cart" className="cart-dropdown flex">
            <span className="cart-dropdown-label">
                <FontAwesomeIcon icon={faCartShopping} />
            </span>
            <div className="cart-dropdown-total">{cartTotal}</div>
        </Link>
    );
};

export default CartDropdown;
