import { RootState } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { ProductType } from "../types";
import { add, remove } from "../redux/slices/cartSlice";

const useCart = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state: RootState) => state.cart.items);

    return {
        cartProducts: Object.values(products),
        addToCart: (item: ProductType) => dispatch(add(item)),
        removeFromCart: (itemId: number) => dispatch(remove(itemId)),
    };
};

export default useCart;
