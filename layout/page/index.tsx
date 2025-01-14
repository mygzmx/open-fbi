"use client"
import React, { FC, useEffect, useState } from "react";
import Image from "next/image"
import { BrowserIcon } from "@/components/BrowserIcon";
import { setCookieTheme } from "@/utils/cookie";
import { useRouter } from 'next/navigation';
import PageFooter from "@/layout/footer";
import Link from "next/link";
import styles from "@/layout/page/index.module.scss";

type IProps = {
  children: React.ReactNode;
  theme: string;
}

const PageLayout: FC<IProps> = ({ children, theme }) => {

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
    <div className={styles.navContainer}>
      <Link href={'/'} className={styles.navLeft}>
        <Image
          className={styles.logo}
          width={40}
          height={40}
          src={"/images/logo.jpeg"}
          alt={'FEHUB'}
        />
        <div className={styles.intro}>DramaBox</div>
      </Link>
      <div className={styles.navRight}>
        <div onClick={onChangeTheme} className={styles.theme}>
          {themeColor === 'dark' ?
            <BrowserIcon browser={'Moon'} size={15} className={styles.moon} style={{ fill: '#e6e6e6' }}/> :
            <BrowserIcon browser={'Sun'} size={24} className={styles.sun}/>
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
    <PageFooter/>
  </>
}

export default PageLayout
