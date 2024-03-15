'use client';
import React from "react";
import { useRouter } from "next/navigation";
import style from './home.module.css';

export default function NotFound() {

  const router = useRouter();
  const hanldeBack = () => {
    router.back();
  }

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:'80px'}}>
      <img src="notfound.png" width={700} height={400} alt="404" />

      <button className={style.button} style={{marginTop:20}} onClick={hanldeBack}>Go to Home</button>
    </div>
  );
}
