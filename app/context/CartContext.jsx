"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  /* -------------------------------
     FETCH CART FROM SUPABASE
  ------------------------------- */

  const fetchCart = async () => {
    const { data: userData } = await supabase.auth.getUser();

    if (!userData.user) return;

    const { data, error } = await supabase
      .from("cart")
      .select("*")
      .eq("user_id", userData.user.id);

    if (!error) setCart(data);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  /* -------------------------------
     ADD TO CART
  ------------------------------- */

  const addToCart = async (item) => {
    const { data: userData } = await supabase.auth.getUser();

    if (!userData.user) {
      alert("Please login first");
      return;
    }

    const { error } = await supabase.from("cart").insert([
      {
        user_id: userData.user.id,
        name: item.name,
        price: item.price,
        image: item.image,
        color: item.color,
        size: item.size,
        qty: item.qty,
      },
    ]);

    if (!error) fetchCart();
  };

  /* -------------------------------
     INCREASE QTY
  ------------------------------- */

  const increaseQty = async (id, qty) => {
    await supabase
      .from("cart")
      .update({ qty: qty + 1 })
      .eq("id", id);

    fetchCart();
  };

  /* -------------------------------
     DECREASE QTY
  ------------------------------- */

  const decreaseQty = async (id, qty) => {
    if (qty <= 1) return;

    await supabase
      .from("cart")
      .update({ qty: qty - 1 })
      .eq("id", id);

    fetchCart();
  };

  /* -------------------------------
     REMOVE ITEM
  ------------------------------- */

  const removeItem = async (id) => {
    await supabase
      .from("cart")
      .delete()
      .eq("id", id);

    fetchCart();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
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