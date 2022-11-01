import { Route } from "wouter";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function Routes() {
    return (
        <>
            <Route path="/" component={Products} />
            <Route path="/cart" component={Cart} />
        </>
    );
}

export default Routes;
