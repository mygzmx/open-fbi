import React, { FC } from 'react';
import Link from "next/link";
import { useTranslation } from "react-i18next";
import HomeMoreSvg from "@/components/svg/more/MoreSvg";
import styles from '@/components/home/homeTitle/HomeTitle.module.scss';

interface IProps {
  title: string;
  href?: string;
  onTagClick?: () => void;
}

const HomeTitle: FC<IProps> = ({ title, href,onTagClick }) => {
  const { t } = useTranslation();

  if (href) {
    return <div className={styles.titleWrap}>
      <h2 className={styles.titleText}>{title}</h2>
      <Link className={styles.moreIcon} prefetch={false} href={href} title={title} onClick={onTagClick}>
        <HomeMoreSvg
          className={styles.moreIcon}
          width={18}
          height={18} />
      </Link>
      <Link className={styles.moreBox} prefetch={false} href={href} title={title} onClick={onTagClick}>
        {t("home.more")}
      </Link>
    </div>
  }

  return <div className={styles.titleWrap}>
    <h2 className={styles.titleText}>{title}</h2>
  </div>
}

export default HomeTitle
