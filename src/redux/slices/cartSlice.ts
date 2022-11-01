import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types";

interface CartProductType extends ProductType {
    amount: number;
}

export interface CartState {
    items: { [productId: number]: CartProductType };
}

const initialState: CartState = {
    items: {},
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<ProductType>) => {
            const productId = action.payload.id;
            const match = state.items[productId];

            if (match) {
                state.items[productId].amount += 1;
            } else {
                const _payload: CartProductType = {
                    ...action.payload,
                    amount: 1,
                };
                state.items[productId] = _payload;
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            const productId = action.payload;
            const match = state.items[productId];

            if (match) {
                if (match.amount > 1) match.amount -= 1;
                else {
                    delete state.items[productId];
                }
            }
        },
    },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
