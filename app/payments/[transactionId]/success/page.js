"use client";
import React from "react";
import style from "./success.module.css";
import { useEffect } from "react";
import { usePaymentStore } from "@/app/store/paymentStore";
import { useRouter } from "next/navigation";
import { Summary } from "@/app/components/summary";
import useToast from "@/app/hooks/useToast";

export default function SuccessDone() {
  const router = useRouter();
  const [counter,setCounter] = React.useState(30);
  const { paymentData } = usePaymentStore();
  const {showError} = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/", { replace: false });
    }, 30000);

    return () => clearTimeout(timer);
  }, [router]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCounter(counter => counter - 1);
    },1000);
    return () => clearInterval(interval);
  }
  ,[counter]);

  useEffect(()=>{
    if(!paymentData.transactionId && !paymentData.paymentMethod){
      showError("Transaction cancelled");
      router.push("/");
    }
  },[]);

  return (
    <div
      className={style.container}
    >
      <img src={
        paymentData.status === "success"
          ? "/success.gif"
          : paymentData.status === "pending"
          ? "/pending.gif"
          : "/fail.gif"
      
      } width={120} height={120} alt={paymentData.status} />

      <p className={style.paymentStatus}>{
        paymentData.statusMessage
      }</p>

      <div className={style.receiptContainer}>
        <div className={style.receiptBody}>
        <div className={style.payMode}>
            <p>
              <span style={{fontWeight:'400', color:'var(--foreground'}}>Payment Mode:</span> {paymentData.paymentMethod}
            </p>
            <p>
              <span style={{fontWeight:'400', color:'var(--foreground'}}>TimeStamp:</span> {paymentData.transactionTime}
            </p>
          </div>

          <div className={style.divider}></div>

          <div className={style.transactionId}>
            <p>
              <span style={{fontWeight:'700', color:'var(--foreground'}}>Transaction ID:</span> {paymentData.transactionId}
            </p>
          </div>

          <div className={style.divider}></div>

          <div className={style.summary}>
            <Summary />
          </div>
        </div>

        
   
            
      </div>

      <span className={style.redirectText} style={{fontWeight:'700', color:'var(--foreground'}}>redirecting to home page in {counter} seconds...</span>
    </div>
  );
}
