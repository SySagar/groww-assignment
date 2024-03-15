import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ErrorModal() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      Transaction not found. You will be directed to the home page in 10
      seconds.
    </div>
  );
}
