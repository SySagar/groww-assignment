import React, { useEffect, useState } from 'react';
import IndividualItem from './IndividualItem';
import style from './cart.module.css';
import { useCartStore } from '@/app/store/cartStore';
import { RectangleSkeleton } from '../Standard/Skeleton/Skeleton';
import { useLoadingStore } from '@/app/store/loadingStore';
import { cartEmptyText, additionCartEmptyText } from '@/app/lib/constants';

export default function CartList() {
  
  const {loading} = useLoadingStore();
  const {products} = useCartStore();
  
  return (
    <div className={style.CartList}>
      {
        loading ? (<div className={style.loadingSkeleton}>
          {
            Array(4).fill(null).map((_,i) => (
              <div key={i} className={style.skeleton}>
                <RectangleSkeleton width="100%" height="80px" />
              </div>
            ))
          }
        </div>) :
        (
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
        ) 
      }
    </div>
  )
}
