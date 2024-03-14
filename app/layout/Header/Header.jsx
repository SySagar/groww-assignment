"use client";
import React, { useEffect } from "react";
import Link from 'next/link';
import { useMerchantStore } from "@/app/store/merchantStore";
import themeChanger from "@/app/theme/themeChanger";
import APIMethods from "@lib/api";
import style from "./header.module.css";
import Image from "next/image";

export default function Header() {
  const { merchantName, merchantLogo, setMerchant } = useMerchantStore();
  const { fetchThemeData, resetThemeToOriginal } = themeChanger();

  const themeChange = () => {
    fetchThemeData();
  };

  const defaultTheme = () => {
    resetThemeToOriginal();
  };

  const fethcMerchantDetails = async () => {
    const response = await APIMethods.merchant.data();
    const merchantLogo = response.data.merchantLogo;
    const merchantName = response.data.merchantName;
    setMerchant({ merchantName, merchantLogo });
  }

  useEffect(() => {
    fethcMerchantDetails();
  }, []);

  return (
    <div className={style.headerContainer}>
      <div className={style.headerBody}>
        <div className={style.logoContainer}>
          <Link href='/'>
          <Image
            src={merchantLogo}
            className={style.logo}
            width={35}
            height={35}
            alt="Picture of the author"
            />
            </Link>
          <p>{merchantName} Cart</p>
        </div>

        <div className={style.themeToggle}>
          <button onClick={defaultTheme} className={style.button}>default</button>
          <button onClick={themeChange} className={style.button2}>
            custom
          </button>
        </div>
      </div>
    </div>
  );
}
