import React from "react";
import style from "./payments.module.css";
import { useStepStore } from "@/app/store/stepStore";
import { usePaymentStore } from "@/app/store/paymentStore";
import { useRouter } from "next/navigation";
import useToast from "@/app/hooks/useToast";

export default function PaymentPage({ transactionId }) {
  const { step, setNextStep } = useStepStore();
  const { paymentData, setPaymentData } = usePaymentStore();
  const [selected, setSelected] = React.useState("");
  const { showSuccess, showError } = useToast();
  const router = useRouter();

  console.log("paymentData", paymentData);
  const handleBack = () => {
    setNextStep(step - 1);
  };

  const handleOptionClick = (e) => {
    console.log(e.target.id);

    if (e.target.id === "creditOption") {
      setSelected("credit");
    } else {
      setSelected("upi");
    }

    setPaymentData({
      ...paymentData,
      paymentMethod: e.target.id,
    });
    
  };


  const handleProcessPayment = () => {
    setPaymentData({
      ...paymentData,
      status: "success",
    });
    showSuccess("Payment Successful");
    // router.push(`/payments/${transactionId}/success`, { scroll: false });
  }

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
        <div
          className={style.options}
          onClick={handleOptionClick}
          id="creditOption"
        >
          <div style={{ display: "flex", gap: "20px" }}>
            <img
              src="/creditCard.png"
              width={40}
              height={40}
              style={{ objectFit: "contain" }}
              alt=""
            />
            <div className={style.wrapper}>
              <label className={style.heading} htmlFor="credit">
                Credit/Debit Card
              </label>
              <p className={style.subHeading}>**** **** **** 1234</p>
            </div>
          </div>
          <input
            type="radio"
            id="credit"
            name="payment"
            value="credit"
            checked={selected === "credit"}
          />
        </div>

        <div
          className={style.options}
          onClick={handleOptionClick}
          id="upiOption"
        >
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/upi.png"
              width={40}
              height={40}
              style={{ objectFit: "contain" }}
              alt=""
            />
            <div className={style.wrapper}>
              <label className={style.heading} htmlFor="credit">
                UPI
              </label>
              <p className={style.subHeading}>hiring@groww.in</p>
            </div>
          </div>
          <input
            type="radio"
            id="credit"
            name="payment"
            value="credit"
            checked={selected === "upi"}
          />
        </div>

        <div className={style.divider}></div>

        <div className={style.transactionInfo}>
          Transaction Id:{' '}<span style={{fontWeight:400}}>{transactionId}</span>
        </div>

        <div className={style.divider}></div>

      </div>
      {step === 3 && (
        <div className={style.next}>
          <button onClick={handleProcessPayment} className={
            (selected === "" || step !==3) ? style.disabled : style.button
          }>
            Make Payment
          </button>
          <button onClick={handleBack} className={style.button}>
            Back
          </button>
        </div>
      )}
    </div>
  );
}
