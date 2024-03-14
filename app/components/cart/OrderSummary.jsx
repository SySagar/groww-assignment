'use client';
import React from 'react';
import Cart from './Cart';
import { useCartStore } from '@/app/store/cartStore';
import { useRouter } from 'next/navigation';
import style from './cart.module.css';

export default function OrderSummary() {

    const router = useRouter()
    const { products } = useCartStore();
    const handlePayments = () => {
        router.push('/payments', { scroll: false })
      }
    

  return (
    <div className={style.summaryContainer}>
      <div>
        <Cart />
      </div>
      
      <div className={style.placeOrder}>
      <button onClick={handlePayments} className={
        products.length>0 ? style.button : style.disabledButton
      } style={{width:'200px'}}>
        Place Order
      </button>
    </div>
    </div>
  )
}
