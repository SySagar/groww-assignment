"use client";
import React, { useEffect, useRef } from "react";
import style from "./cart.module.css";
import APIMethods from "@/app/lib/api";
import { useCartStore } from "@/app/store/cartStore";
import { useLoadingStore } from "@/app/store/loadingStore";
import { useStepStore } from "@/app/store/stepStore";
import useToast from "@/app/hooks/useToast";
import Address from "@components/Address/Address";
import CartList from "@components/cart/CartList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const { products, paymentMethods, setProducts } = useCartStore();
  const { showError } = useToast();
  const { loading, setLoading } = useLoadingStore();
  const { setNextStep } = useStepStore();
  const mounted = useRef(true);
  const orderDetails = async () => {
    try {
      setLoading(true);
      const response = await APIMethods.cart.orderDetails();
      setProducts(response.data.products);
    } catch (error) {
      showError("Error fetching order details");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!mounted.current) {
      orderDetails();
      setNextStep(1);
    }
    mounted.current = false;
  }, []);

  const handleRefresh = () => {
    orderDetails();
  };

  return (
    <div className={style.cartContainer}>
      <div className={style.cartHeader}>
        <p className={style.title}>
          My Cart
          <span className={style.subtitle}>
            ({products.length} {products.length > 1 ? "items" : "item"})
          </span>
        </p>
        <div className={style.refreshWrapper}>
          <button onClick={handleRefresh} className={style.button2}>
            <FontAwesomeIcon icon={faRotateRight} />
            <div>refresh</div>
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
