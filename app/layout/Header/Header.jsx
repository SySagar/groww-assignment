"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLoadingStore } from "@/app/store/loadingStore";
import { useMerchantStore } from "@/app/store/merchantStore";
import {
  RectangleSkeleton,
  CircleSkeleton,
} from "@/app/components/Standard/Skeleton/Skeleton";
import themeChanger from "@/app/theme/themeChanger";
import APIMethods from "@lib/api";
import style from "./header.module.css";
import Image from "next/image";

export default function Header() {
  const { merchantName, merchantLogo, setMerchant } = useMerchantStore();
  const { fetchThemeData, resetThemeToOriginal } = themeChanger();
  const [loading, setLoading] = useState(false);

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
  };

  useEffect(() => {
    setLoading(true);
    fethcMerchantDetails().finally(() => setLoading(false));
  }, []);

  return (
    <div className={style.headerContainer}>
      <div className={style.headerBody}>
        {loading ? (
          <div className={style.loadingSkeleton}>
            <div className={style.skeleton}>
              <CircleSkeleton width="35px" height="35px" />
              <RectangleSkeleton width="100px" height="35px" />
            </div>
          </div>
        ) : (
          <div className={style.logoContainer}>
            <Link href="/">
              <Image
                src={merchantLogo}
                className={style.logo}
                width={35}
                height={35}
                alt="Picture of the author"
              />
            </Link>
            <p className={style.merchantName}>{merchantName} Cart</p>
          </div>
        )}

        <div className={style.themeToggle}>
          <button onClick={defaultTheme} className={style.button}>
            default
          </button>
          <button onClick={themeChange} className={style.button2}>
            custom
          </button>
        </div>
      </div>
    </div>
  );
}
