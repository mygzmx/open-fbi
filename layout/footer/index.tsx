import React, { FC } from 'react';
import Link from "next/link";
import { useTranslation } from "react-i18next";
import ClientConfig from "@/const/client.config";
import styles from '@/layout/footer/index.module.scss';

const PageFooter: FC = () => {
  const { t } = useTranslation();

  return <div className={styles.footerBox}>

    11
  </div>
}

export default PageFooter
