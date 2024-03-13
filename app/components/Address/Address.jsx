import React from 'react';
import style from './address.module.css';

export default function Address() {
  return (
    <div className={style.container}>
        <div className={style.addressBody}>

    <div className={style.info}>
     <p className={style.main}>
        Deliver to: Soumya Sagar Samal, 768017
     </p>
     <p className={style.sub}>
        Atri Hall of Residence, near VSSUT , Burla, Sambalpur, Odisha
     </p>
        </div>


    <button className={style.button}>
        change
    </button>
    </div>
    </div>
  )
}
