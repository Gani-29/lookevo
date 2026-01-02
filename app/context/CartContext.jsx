"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      price: 799,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      size: "Large",
      color: "White",
      qty: 1,
    },
    {
      id: 2,
      name: "Checkered Shirt",
      price: 799,
      originalPrice: 999,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
      size: "Medium",
      color: "Red",
      qty: 1,
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      price: 799,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
      size: "Large",
      color: "Blue",
      qty: 1,
    },
  ]);

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        increaseQty,
        decreaseQty,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
