"use client";
import React, { useEffect, useRef } from "react";
import style from "./cart.module.css";
import APIMethods from "@/app/lib/api";
import { useCartStore } from "@/app/store/cartStore";
import Address from "@components/Address/Address";
import CartList from "@components/cart/CartList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const { products, paymentMethods, setProducts } = useCartStore();
  const mounted = useRef(true);
  const orderDetails = async () => {
    try {
      const response = await APIMethods.cart.orderDetails();
      setProducts(response.data.products);
        
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!mounted.current) {

      orderDetails();
    }
    mounted.current = false;
  }, []);

  const handleRefresh = () => {
    orderDetails();
  }

  return (
    <div className={style.cartContainer}>
      <div className={style.cartHeader}>
        <p className={style.title}>My Cart
        <span className={style.subtitle}>
          ({products.length} {products.length > 1 ? "items" : "item"})
        </span>
        </p>
        <div className={style.refreshWrapper}>
        <button onClick={handleRefresh} className={style.button2}>
        <FontAwesomeIcon icon={faRotateRight} />
        <div>
          refresh
        </div>
          </button>
        </div>
      </div>

      <div className={style.address}>
        <Address />
      </div>

      <div className={style.cartList}>
        <CartList />
      </div>


    </div>
  );
}
