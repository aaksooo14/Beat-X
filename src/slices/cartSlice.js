import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const itemExists = state.find(item => item.id === action.payload.id);
            if (itemExists) {
                itemExists.quantity += 1; // Increment quantity if item exists
            } else {
                state.push({ ...action.payload, quantity: 1 }); // Add new item
            }
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload.id); // Remove item
        },
        // eslint-disable-next-line no-unused-vars
        clearCart: (state) => {
            return []; // Clear cart
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
