import React from "react";
import { Link } from "wouter";
import CartDropdown from "../components/CartDropdown";

const Header = () => {
    return (
        <header className="main-header flex-all">
            <Link href="/">
                <h1 className="brand">DVT Storefront</h1>
            </Link>
            <CartDropdown />
        </header>
    );
};

export default Header;
