import React from "react";
import style from "./payments.module.css";
import { useStepStore } from "@/app/store/stepStore";

export default function PaymentPage() {
  const { step, setNextStep } = useStepStore();
  const [selected, setSelected] = React.useState("credit");
  const handleNext = () => {
    setNextStep(step+1);
  };

  const handleBack = () => {
    setNextStep(step-1);
  };

  const handleOptionClick = (e) => {
   console.log(e.target.id);

   if(e.target.id === "creditOption"){
     setSelected("credit");
    }
    else{
      setSelected("upi");
    }
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
      
      <div className={style.paymentMethods}>
          <div className={style.options} onClick={handleOptionClick} id="creditOption">
            <div style={{display:'flex', gap:'20px'}}>
            <img src="creditCard.png" width={40} height={40} style={{objectFit:'contain'}} alt="" />
            <div className={style.wrapper}>
            <label htmlFor="credit">Credit/Debit Card</label>
            <p className={style.subHeading}>**** **** **** 1234</p>
            </div>
            </div>
            <input type="radio" id="credit" name="payment" value="credit" 
            checked={selected === "credit"}
            />
          </div>

          <div className={style.options} onClick={handleOptionClick} id="upiOption">
            <div style={{display:'flex', gap:'20px', justifyContent:'center', alignItems:'center'}}>
            <img src="upi.png" width={40} height={40}  style={{objectFit:'contain'}} alt="" />
            <div className={style.wrapper}>
            <label htmlFor="credit">UPI</label>
            <p className={style.subHeading}>hiring@groww.in</p>
            </div>
            </div>
            <input type="radio" id="credit" name="payment" value="credit" 
            checked={selected === "upi"}
            />
          </div>

          <div className={style.divider}></div>
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
