import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: []
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            console.log(action.payload,"<<<<<<<<<<<<<<<PAYLOAD CART");
            const { MenuId, quantity } = action.payload
            state.menus.push({ MenuId, quantity })
        }
    }
})
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer