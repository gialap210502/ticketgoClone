import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        order: {
            isFetching: false,
            error: false,
            success: false
        }
    },
    reducers: {
        orderStart: (state) => {
            state.order.isFetching = true;
        },
        orderSuccess: (state) => {
            state.order.isFetching = false;
            state.order.error = false;
            state.order.success = true;
        },
        orderFail: (state) => {
            state.order.isFetching = false;
            state.order.error = true;
            state.order.success = false;
        }
    }
})

export const {
    orderStart,
    orderFail,
    orderSuccess
} = orderSlice.actions;

export default orderSlice.reducer;