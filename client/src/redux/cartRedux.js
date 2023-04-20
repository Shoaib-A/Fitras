import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const cartSlice = createSlice({
  name: "carts",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      return produce(state, (draftState) => {
        draftState.quantity += 1;
        draftState.products.push(action.payload);
        draftState.total += action.payload.price * action.payload.quantity;
      });
    },
    clearCart: (state) => {
      return produce(state, (draftState) => {
        draftState.quantity = 0;
        draftState.products = [];
        draftState.total = 0;
      });
    },
    increaseQuantity: (state, action) => {
      return produce(state, (draftState) => {
        const product = draftState.products.find(
          (item) => item.id === action.payload.id
        );
        if (product) {
          product.quantity += 1;
          draftState.quantity += 1;
          draftState.total += product.price;
        }
      });
    },
    decreaseQuantity: (state, action) => {
      return produce(state, (draftState) => {
        const product = draftState.products.find(
          (item) => item.id === action.payload.id
        );
        if (product) {
          if (product.quantity > 1) {
            product.quantity -= 1;
            draftState.quantity -= 1;
            draftState.total -= product.price;
          } else if (product.quantity === 1) {
            draftState.products = draftState.products.filter(
              (item) => item.id !== action.payload.id
            );
            draftState.quantity -= 1;
            draftState.total -= product.price;
          }
        }
        // Add this check to prevent the quantity from going below zero
        if (draftState.quantity < 0) {
          draftState.quantity = 0;
        }
      });
    },
    
  },
});

export const {
  addProduct,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;