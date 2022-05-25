import { createContext, useState, useEffect } from 'react';

// 1. Check If cartItems contains the product to add
//2. If Yes, increment the quantity. B.If no, Add to cart
//3. Return new Array with modified CartItems

const addCartItem = (cartItems, product) => {
  //Part 1
  const existingCartItem = cartItems.find(
    (cartitem) => cartitem.id === product.id
  );

  //Part 2
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //Part 2B + 3
  return [...cartItems, { ...product, quantity: 1 }];
};

// const removeCartItem = (cartItems, cartItemToRemove) => {
//   //Part 1
//   const existingCartItem = cartItems.find(
//     (cartitem) => cartitem.id === cartItemToRemove.id
//   );

//   //Part 2
//   if (existingCartItem === 0) {
//     return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
//   }

//   //Part  3
//   return cartItems.map((cartItem) =>
//   cartItem.id === cartItemToRemove.id
//   ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
//   );

// 1. Check If cartItems contains the product to decrement  // find the cart item to remove
//2.  Check if the Quantity is equal to 1, if it is the remove it from the cart
//3.  Return back cartitems with matching cart item with reduced quantity

const removeCartItem = (cartItems, cartItemToRemove) => {
  // 1
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // 2
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  //3
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setIsCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (product) => {
    setIsCartItems(addCartItem(cartItems, product));
  };
  const removeItemFromCart = (cartItemToRemove) => {
    setIsCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const value = {
    isCartOpen,
    cartItems,
    cartCount,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    setCartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
