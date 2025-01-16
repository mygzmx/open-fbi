import React, { FC, CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import styles from '@/components/common/empty/index.module.scss';

export const EmptyCom: FC<{ style?: CSSProperties; message?: string; }> = ({ style, message }) => {
  const { t } = useTranslation();

  return <div className={styles.emptyBox} style={style}>
    <Image
      className={styles.emptyIcon}
      width={320}
      height={240}
      src={'/images/common/empty.png'}
      alt={t('home.emptyDesc')}
    />
    <div className={styles.emptyIntro}>
      {message ?? t('home.emptyDesc')}
    </div>
  </div>
}

export default EmptyCom;
