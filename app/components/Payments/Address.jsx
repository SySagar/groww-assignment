import React from "react";
import style from "./payments.module.css";
import { useStepStore } from "@/app/store/stepStore";

export default function Address() {
  const { step, setNextStep } = useStepStore();
  const handleNext = () => {
    setNextStep(step+1);
  };

  return (
    <div className={style.container}>
      <div className={step === 1 ? style.active : style.header}>
        <span
          style={{
            padding: "8px",
            paddingInline: "14px",
            background: "var(--background)",
            color: "var(--foreground)",
          }}
        >
          1
        </span>
        Address
      </div>
      
      <div className={style.address}>
        <p style={{ fontWeight: 600, color:'var(--foreground)' }}>
          {" "}
          Deliver to: Soumya Sagar Samal, 768017
        </p>
        <p style={{color:'var(--foreground)', fontWeight:'400',fontSize:'14px'}}> Atri Hall of Residence, near VSSUT , Burla, Sambalpur, Odisha</p>
      </div>
      {
        (step===1) &&
          <div className={style.next}>
        <button onClick={handleNext} className={style.button}>
          Next
        </button>
      </div>
    }
    </div>
  );
}
