import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartItemTypes {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    price: number;
    ratings: object;
}

export interface CartState {
    items: CartItemTypes[];
}

const initialState: CartState = {
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<CartItemTypes>) => {
            state.items.push(action.payload);
        },
        remove: (state, action: PayloadAction<number>) => {
            const itemId = action.payload;
            state.items = state.items.filter((item) => item.id !== itemId);
        },
    },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
