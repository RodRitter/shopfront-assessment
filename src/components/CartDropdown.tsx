import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useCart from "../hooks/useCart";

const CartDropdown = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const { cartTotal } = useCart();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (cartTotal > 0 && isMounted) {
            // Animate
            setIsAnimating(true);
        }
    }, [cartTotal]);

    return (
        <Link href="/cart" className="cart-dropdown flex">
            <span className="cart-dropdown-label">
                <div
                    className={`cart-dropdown-anim-box ${
                        isAnimating && "animating"
                    }`}
                    onAnimationEnd={() => setIsAnimating(false)}
                />
                <FontAwesomeIcon icon={faCartShopping} />
            </span>
            <div className="cart-dropdown-total">{cartTotal}</div>
        </Link>
    );
};

export default CartDropdown;
