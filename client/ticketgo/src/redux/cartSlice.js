// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItemToCart: (state, action) => {
            state.push(action.payload);
        },
        updateCartItem: (state, action) => {
            const { index, updatedItem } = action.payload;
            state[index] = updatedItem;
        },
        removeItemFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
    },
});

export const { addItemToCart, removeItemFromCart, updateCartItem } = cartSlice.actions;

export default cartSlice.reducer;
