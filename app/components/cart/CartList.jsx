import React, { useEffect, useState } from 'react';
import IndividualItem from './IndividualItem';
import style from './cart.module.css';
import { useCartStore } from '@/app/store/cartStore';
import { cartEmptyText, additionCartEmptyText } from '@/app/lib/constants';

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
          <div className={style.emptyCart}>
            <img src="/empty.png" width={250} height={200} alt="" />
            <p style={{fontSize:'22px',fontWeight:'400'}}>{cartEmptyText}</p>
            <p style={{fontSize:'12px',fontWeight:'400'}}>{additionCartEmptyText}</p>
          </div>
        </>
        )
      }
    </div>
  )
}
