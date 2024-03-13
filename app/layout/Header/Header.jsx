'use client'
import React from 'react';
import { useThemeStore } from '@/app/store/themeStore';
import style from './header.module.css';
import Image from 'next/image'
import useThemeData from '@/app/hooks/useThemeData';

export default function Header() {
  const { merchantName, merchantLogo } = useThemeStore();
  const { theme } = useThemeData();

  console.log('merchantLogo', merchantLogo);

  return (
    <div className={style.headerContainer}>
      <div className={style.headerBody}>
        
      <div className={style.logoContainer}>
      <Image
      src={merchantLogo}
      width={40}
      height={40}
      alt="Picture of the author"
    />
      </div>
      
      </div>
    </div>
  )
}
