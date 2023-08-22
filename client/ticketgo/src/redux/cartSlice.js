// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItemToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.find(item => item.productName === newItem.productName && item.price === newItem.price);

            if (existingItem) {
                // Nếu sản phẩm đã tồn tại trong giỏ hàng, cập nhật số lượng
                existingItem.quantity += newItem.quantity;
            } else {
                // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới
                state.push(newItem);
            }
        },
        updateCartItem: (state, action) => {
            const { index, updatedItem } = action.payload;

            if (updatedItem.quantity === 0) {
                // Nếu số lượng là 0, xóa sản phẩm khỏi giỏ hàng
                state.splice(index, 1);
            } else {
                state[index] = updatedItem;
            }
        },
        removeItemFromCart: (state, action) => {
            const { productName, price } = action.payload;
            return state.filter(item => item.productName !== productName || item.price !== price);
        },
    },
});

export const { addItemToCart, removeItemFromCart, updateCartItem } = cartSlice.actions;

export default cartSlice.reducer;
