import React from 'react';
import { currencySymbol, multiplier } from '@/app/lib/constants';
import style from './cart.module.css';

export default function IndividualItem({item}) {
  return (
    <div id={item.id} className={style.itemContainer}>
      <div className={style.itemPreview}>
        <img style={{width:'45px',height:'45px',objectFit:'contain'}} src={item.image} alt={item.name} />
      </div>

      <div className={style.midSection}>
        <p className={style.itemDescription}>
            {item.title} 
        </p>
        <p className={style.itemPrice}>
           {currencySymbol}{item.price}
        </p>
      </div>

      <div className={style.endSection}>
        <p className={style.itemQuantity}>
            {multiplier}{item.quantity}
        </p>
      </div>
    </div>
  )
}
