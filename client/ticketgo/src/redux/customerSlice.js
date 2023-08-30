import { createSlice } from '@reduxjs/toolkit';

const customerSlice = createSlice({
    name: 'customer',
    initialState: [],
    reducers: {
        addCustomer: (state, action) => {
            state.push(action.payload);
        },
        removeAllCustomers: () => [],
    },
});

export const { addCustomer, removeAllCustomers } = customerSlice.actions;

export default customerSlice.reducer;