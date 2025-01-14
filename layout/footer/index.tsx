import React, { FC } from 'react';
import Link from "next/link";
import { useTranslation } from "react-i18next";
import ClientConfig from "@/const/client.config";
import styles from '@/layout/footer/index.module.scss';

const PageFooter: FC = () => {
  const { t } = useTranslation();

  return <div className={styles.footerBox}>

    <div className={styles.footerList}>
      <div className={styles.footerItem}>
        <div className={styles.footerLabel}>{ t('home.about') }</div>
        <Link prefetch={false} rel={'nofollow'} className={styles.footerLink} href={'/terms'}>
          {t('home.termsOfUse')}
        </Link>
        <Link prefetch={false} rel={'nofollow'} className={styles.footerLink} href={'/privacy'}>
          {t('home.privacyPolicy')}
        </Link>
      </div>

      <div className={styles.footerItem}>
        <div className={styles.footerLabel}>{ t('home.contact') }</div>
        <Link prefetch={false} rel={'nofollow'} className={styles.footerLink} href={'/business'}>
          {t('home.business')}
        </Link>
        <Link prefetch={false} rel={'nofollow'} className={styles.footerLinkEmail} href={`mailto:hr@dramabox.com`}>
          {`${t('home.joinUs')}: hr@dramabox.com`}
        </Link>
      </div>
    </div>

    <div className={styles.footerContent}>
      <div className={styles.community}>
        <div className={styles.communityLabel}>{t("home.community")}:</div>
        <Link
          prefetch={false}
          rel={'nofollow'}
          className={styles.communityItem}
          href={'https://www.facebook.com/profile.php?id=61552540530213'}
          target={'_blank'}>
          Facebook
        </Link>
        <Link
          prefetch={false}
          rel={'nofollow'}
          className={styles.communityItem}
          href={'https://www.youtube.com/@dramaboxapp'}
          target={'_blank'}>
          Youtube
        </Link>
        <Link
          prefetch={false}
          className={styles.communityItem}
          rel={'nofollow'}
          href={'https://www.tiktok.com/@dramaboxtik'}
          target={'_blank'}>
          Tiktok
        </Link>
      </div>

      <Link prefetch={false} rel={'nofollow'} className={styles.fmail} href={`mailto:feedback@dramabox.com`}>
        {t("home.email")}: &nbsp;feedback@dramabox.com
      </Link>
      <p className={styles.fText}>© {ClientConfig.name}, {t('home.allRightsReserved')} STORYMATRIX PTE.LTD.</p>
    </div>
  </div>
}

export default PageFooter
