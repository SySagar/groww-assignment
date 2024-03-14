'use client';
import { Summary } from "../../components/summary";
import Address from "@components/Payments/Address";
import OrderSummaryList from "../../components/Payments/orderSummary";
import PaymentPage from "../../components/Payments/Payment";
import { additionText } from "../../lib/constants";
import { useStepStore } from "@store/stepStore";
import { useRouter } from 'next/router'
import styles from "../payment.module.css";

export default function Payments() {

    const {step, setNextStep} = useStepStore();
    const router = useRouter()
    console.log('slug', router.query.slug);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {
                <div className={styles.process}>
                <Address />
                <OrderSummaryList />
                <PaymentPage />
              </div>
        }
        <div>
            <div className={styles.summary}>
          <Summary />
            </div>

          <p className={styles.additionText}>{additionText}</p>
        </div>
      </div>
    </main>
  );
}
