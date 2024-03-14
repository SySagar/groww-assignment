import React, { useEffect, useState } from 'react';
import IndividualItem from './IndividualItem';
import style from './cart.module.css';
import { useCartStore } from '@/app/store/cartStore';

export default function CartList() {
  
  const {products} = useCartStore();
  return (
    <div className={style.CartList}>
      {
        products.length ? 
        products.map((item) => (
          <IndividualItem key={item.id} item={item} />
        )) : (
          <>
          <div style={{fontWeight:'500',display:'flex',alignItems:'center',justifyContent:'center', height:'200px'}}>
            <p>No items in the cart</p>
          </div>
        </>
        )
      }
    </div>
  )
}
