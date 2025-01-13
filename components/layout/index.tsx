"use client"
import React, { FC, useEffect, useState } from "react";
import Image from "next/image"
import { SafeArea } from 'antd-mobile'
import { BrowserIcon } from "@/components/BrowserIcon";
import { setCookieTheme } from "@/utils/cookie";
import { useRouter } from 'next/navigation';
import styles from "@/components/layout/index.module.scss";

type IProps = {
  children: React.ReactNode;
  theme: string;
}

const PageLayout: FC<IProps> = ({ children, theme}) => {

  const [themeColor, setThemeColor] = useState(theme);
  const router = useRouter();

  const onChangeTheme = () => {
    const _theme = themeColor === "dark" ? 'light' : 'dark'
    setThemeColor(_theme);
    setCookieTheme(_theme);
  }

  const goUserPage = () => {
    router.push('/user');
  }

  useEffect(() => {
    document.documentElement.dataset.theme = themeColor;
  }, [themeColor])

  return <>
    <SafeArea position={"top"}/>
    <div className={styles.navContainer}>
      <div className={styles.navLeft}>
      <Image
        className={styles.logo}
        width={40}
        height={40}
        src={"/images/logo.jpeg"}
        alt={'FEHUB'}
      />
        <div className={styles.intro}>FEHUB</div>
      </div>
      <div className={styles.navRight}>
        <div onClick={onChangeTheme} className={styles.theme}>
          { themeColor === 'dark' ?
            <BrowserIcon browser={'Moon'} size={15} className={styles.moon} style={{ fill: '#e6e6e6' }}/> :
            <BrowserIcon browser={'Sun'} size={24} className={styles.sun} />
          }
        </div>

        <button className={styles.avatarBox} onClick={goUserPage}>
          <Image
            className={styles.avatar}
            width={40}
            height={40}
            src={"/images/common/avatar.png"}
            alt={'avatar'}
          />
        </button>
      </div>
    </div>

    {children}
    <footer className={styles.footerBox}>
      1212
    </footer>
    <SafeArea position='bottom' />
  </>
}

export default PageLayout
