import React, { FC } from 'react';
import { IBookItem } from "@/typings/home.interface";
import Link from "next/link";
import { ImageCover } from "@/components/common/image/ImageCover";
import { useTranslation } from "react-i18next";
import TypeTwoTag from "@/components/common/typeTwoTag";
import styles from '@/components/home/firstList/FirstList.module.scss';

interface IProps {
  isLazy?: boolean;
  dataSource: IBookItem[];
}

const FirstList: FC<IProps> = ({ dataSource, isLazy}) => {
  const { t } = useTranslation();

  return <div className={styles.firstListBox}>
    {dataSource && dataSource.length > 0 ? (dataSource as IBookItem[]).map((item, index) => {

      const { bookId, cover, bookName, chapterCount = 0, typeTwoList = [] } = item;

      const routerToBookInfo = `/film/${bookId}`;

      return <div key={bookId} className={styles.itemBox}>
        <ImageCover
          isLazy={isLazy || index > 11}
          href={routerToBookInfo}
          className={styles.bookImage}
          width={120}
          height={162}
          src={cover}
          alt={bookName}
        />
        <Link prefetch={false} className={styles.chapterCount} href={routerToBookInfo}>
          {`${chapterCount} ${t("home.episodes")}`}
        </Link>

        <Link prefetch={false} href={routerToBookInfo} className={styles.bookName}>
          {bookName}
        </Link>

        <div className={styles.bookNameBox}>
          <Link prefetch={false} href={routerToBookInfo} className={styles.bookNameHover}>
            {bookName}
          </Link>
          {typeTwoList.length > 0 ? <TypeTwoTag typeTwoList={typeTwoList}/> : null}
        </div>

      </div>
    }) : null}
  </div>
}

export default FirstList;
