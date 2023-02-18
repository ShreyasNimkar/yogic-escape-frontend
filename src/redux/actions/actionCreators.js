import { actionTypes } from "./types.js";

export const addToCart = (event) => ({
  type: actionTypes.ADD_TO_CART,
  payload: event,
});

export const removeFromCart = (event) => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: event,
});

export const clearCart = () => ({
  type: actionTypes.CLEAR_CART,
});

// devnote : obsolete ??
