'use client';
import React from 'react';
import style from './summary.module.css'
import { useCartStore } from '@/app/store/cartStore';
import { shippingCost, currencySymbol } from '@/app/lib/constants';
import { discountValue } from '@/app/utils/discountValue';

export default function Summary() {

    const {products} = useCartStore();
    const itemCount = products.length;
    const priceTotal = products.reduce((acc, curr) => {
        return acc + curr.price;
    }, 0);

  return (
    <div className={style.summaryContainer}>
    <p className={style.title}>Order Summary</p>
  <table>
    <tbody>
      <tr>
        <th>Subtotal ({itemCount})</th>
        <td className={style.valuePrice}>{currencySymbol}{priceTotal.toFixed(2)}</td>
      </tr>
      <tr>
        <th>Shipping (fixed price)</th>
        <td class={style.valueAddition}>{currencySymbol} {shippingCost}</td>
      </tr>
      <tr>
        <th>Tax (5% GST)</th>
        <td class={style.valueAddition}>{currencySymbol} {discountValue(priceTotal).toFixed(2)}</td>
      </tr>
    </tbody>
  </table>
  
  <div className={style.divider}></div>

    <table>

  <tbody>
    <tr className={style.total}>
        <th className={style.totalTitle}>Total Amount</th>
        <td className={style.totalPrice}>{currencySymbol} {(priceTotal + shippingCost + discountValue(priceTotal)).toFixed(2)}</td>
      </tr>
    </tbody>
    </table>


</div>
  )
}
