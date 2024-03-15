import React from "react";
import style from "./payments.module.css";
import { useStepStore } from "@/app/store/stepStore";
import { usePaymentStore } from "@/app/store/paymentStore";
import { useRouter } from "next/navigation";
import { getRandomStatus } from "@/app/utils/getStatus";
import useToast from "@/app/hooks/useToast";

export default function PaymentPage({ transactionId }) {
  const { step, setNextStep } = useStepStore();
  const { paymentData, setPaymentData } = usePaymentStore();
  const [selected, setSelected] = React.useState("");
  const { showSuccess, showError, showGeneral } = useToast();
  const router = useRouter();

  const handleBack = () => {
    setNextStep(step - 1);
  };

  const handleOptionClick = (e) => {
    if (e.target.id === "creditOption") {
      setSelected("card");
    } else {
      setSelected("upi");
    }
  };

  const handleProcessPayment = () => {
    const randomStatus = getRandomStatus();
    setPaymentData({
      ...paymentData,
      status: randomStatus.status,
      statusMessage: randomStatus.message,
      paymentMethod: selected.toUpperCase(),
      transactionTime: new Date().toLocaleString(),
    });
    if (randomStatus.status === "success") showSuccess("Payment Successful");
    else if (randomStatus.status === "pending") showGeneral("Payment Pending");
    else showError("Payment Failed");
    router.push(`/payments/${transactionId}/success`, { scroll: false });
  };

  return (
    <div className={style.container}>
      <div className={step === 3 ? style.active : style.header}>
        <span
          className={style.stepTitle}
          style={{
            padding: "8px",
            paddingInline: "14px",
            background: "var(--background)",
            color: "var(--foreground)",
          }}
        >
          3
        </span>
        Payment Methods
      </div>

      <div className={style.paymentMethods}>
        <div
          className={step !== 3 ? style.disabledOption : style.options}
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
            disabled={step === 3 ? false : true}
            value="credit"
            checked={selected === "card"}
          />
        </div>

        <div
          className={step !== 3 ? style.disabledOption : style.options}
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
            disabled={step === 3 ? false : true}
            value="credit"
            checked={selected === "upi"}
          />
        </div>

        <div className={style.divider}></div>

        <div className={style.transactionInfo}>
          <span style={{ color: "var(--foreground)" }}>Transaction Id: </span>
          <span style={{ fontWeight: 400 }}>{transactionId}</span>
        </div>

        <div className={style.divider}></div>
      </div>
      {step === 3 && (
        <div className={style.next}>
          <button
            onClick={handleProcessPayment}
            className={
              selected === "" || step !== 3 ? style.disabled : style.button
            }
          >
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
