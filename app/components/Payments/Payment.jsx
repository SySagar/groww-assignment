import React from "react";
import style from "./payments.module.css";
import { useStepStore } from "@/app/store/stepStore";

export default function PaymentPage() {
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
      <div className={step === 3 ? style.active : style.header}>
        <span
          style={{
            padding: "8px",
            paddingInline: "14px",
            background: "var(--background)",
            color: "var(--primary)",
          }}
        >
          3
        </span>
        Payment Methods
      </div>
      
      <div className={style.address}>
        <p style={{ fontWeight: 600 }}>
          {" "}
          Deliver to: Soumya Sagar Samal, 768017
        </p>
        <p> Atri Hall of Residence, near VSSUT , Burla, Sambalpur, Odisha</p>
      </div>
      {
        (step===3) &&
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
