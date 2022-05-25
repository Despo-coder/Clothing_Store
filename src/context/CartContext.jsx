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

const clearCartItem = (cartItems, cartItemToClear) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToClear.id
  );
  if (existingCartItem) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
  }
};

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  isCartOpen: false,
  setIsCartOpen: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  carttotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setIsCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [carttotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (product) => {
    setIsCartItems(addCartItem(cartItems, product));
  };
  const removeItemFromCart = (cartItemToRemove) => {
    setIsCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setIsCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    cartItems,
    cartCount,
    carttotal,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    setCartCount,
    setCartTotal,
    clearItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
