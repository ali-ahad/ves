const { CART_ADD_ITEM, CART_REMOVE_ITEM } = require("../constants/cartConstants");

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      // Comparing the ID present in cart
      const existItem = state.cartItems.find(X => X.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartIItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(x => x.product !== action.payload),
      }; 
    default:
      return state;
  }
}
