'use client';
import { Summary } from "../../components/summary";
import Address from "@components/Payments/Address";
import OrderSummaryList from "../../components/Payments/orderSummary";
import PaymentPage from "../../components/Payments/Payment";
import { additionText } from "../../lib/constants";
import styles from "../payment.module.css";
import { useEffect } from "react";
import { usePaymentStore } from "@/app/store/paymentStore";
import { useErrorStore } from "@/app/store/errorStore";
import useToast from "@/app/hooks/useToast";
import { useRouter } from "next/navigation";
import ErrorModal from "@/app/components/error/ErrorModal";
export default function Payments({params}) {

  const {paymentData} = usePaymentStore();
  const {error,setError} = useErrorStore();
  const { showSuccess, showError } = useToast();
  const router = useRouter();
    useEffect(()=>{
      if(params.transactionId !== paymentData.transactionId)
      {
        showError("Something went wrong. Please try again.")
        setError({message : "Invalid ID or refresh", code : 500, errorStatus : true})
      }

    },[paymentData.transactionId]);

  return (
    <main className={styles.main}>{
      
      error.status ? <div>
        <ErrorModal />
      </div> :
      <div className={styles.container}>
        {
                <div className={styles.process}>
                <Address />
                <OrderSummaryList />
                <PaymentPage transactionId={paymentData.transactionId} />
              </div>
        }
        <div>
            <div className={styles.summary}>
          <Summary />
            </div>

          <p className={styles.additionText}>{additionText}</p>
        </div>
      </div>
      
    }
    </main>
  );
}
