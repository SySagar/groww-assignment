import React from "react";
import style from "./payments.module.css";
import { useStepStore } from "@/app/store/stepStore";
import CartList from "../cart/CartList";

export default function OrderSummary() {
  const { step, setNextStep } = useStepStore();
  console.log("sterp", step);
  const handleNext = () => {
    setNextStep(step+1);
  };

  const handleBack = () => {
    setNextStep(step-1);
  };

  return (
    <div className={style.container}>
      <div className={step === 2 ? style.active : style.header}>
        <span
        className={style.stepTitle}
          style={{
            padding: "8px",
            paddingInline: "14px",
            background: "var(--background)",
            color: "var(--foreground)",
          }}
        >
          2
        </span>
        Order Summary
      </div>
      
      <div className={style.summary}>
       <CartList/>
      </div>
      {
        (step===2) &&
          <div className={style.next}>
        <button onClick={handleNext} className={style.button}>
          Next
        </button>
        <button onClick={handleBack} className={style.button}>
          Back
        </button>
      </div>
    }
    </div>
  );
}
