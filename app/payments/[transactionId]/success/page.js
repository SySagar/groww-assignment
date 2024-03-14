"use client";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SuccessDone() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/", { replace: false });
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <img src="/success.gif" width={200} height={200} alt="" />

      <p style={{ marginTop: 20, fontSize: "30px" }}>Payment Successful</p>
    </div>
  );
}
