import { Route } from "wouter";
import Products from "./containers/Products";
import Cart from "./containers/Cart";

function Routes() {
    return (
        <>
            <Route path="/" component={Products} />
            <Route path="/cart" component={Cart} />
        </>
    );
}

export default Routes;
