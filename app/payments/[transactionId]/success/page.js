'use client';
import React from 'react';
import Lottie from 'lottie-react';

export default function SuccessDone() {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:'80px'}}>
   
   <Lottie animationData={"done.json"} />

    <p style={{marginTop:20}} >Payment Successful</p>
  </div>
  )
}
