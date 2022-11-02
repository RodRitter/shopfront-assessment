import { RootState } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { ProductType } from "../lib/types";
import { add, remove } from "../redux/slices/cartSlice";

const useCart = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state: RootState) => state.cart.items);

    const getCartPriceTotal = () => {
        return Object.values(products)
            .map((product) => product.price * product.amount)
            .reduce((total, price) => total + price, 0)
            .toFixed(2);
    };

    const getCartTotal = () => {
        return Object.values(products)
            .map((product) => product.amount)
            .reduce((total, amount) => total + amount, 0);
    };

    return {
        cartPrice: getCartPriceTotal(),
        cartTotal: getCartTotal(),
        cartProducts: Object.values(products),
        addToCart: (item: ProductType) => dispatch(add(item)),
        removeFromCart: (itemId: number) => dispatch(remove(itemId)),
    };
};

export default useCart;
