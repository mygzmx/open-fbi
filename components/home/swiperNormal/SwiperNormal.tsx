"use client"
import React, { FC } from 'react';
import { ImageCover } from "@/components/common/image/ImageCover";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { IBookItem } from "@/types/home.interfaces";
import styles from '@/components/home/swiperNormal/SwiperNormal.module.scss';

interface IProps {
  bigList: IBookItem[];
}

const SwiperNormal: FC<IProps> = ({ bigList = [] }) => {
  const { t } = useTranslation()

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className={styles.swiperBox}>
      {bigList.map((item) => {
        const { bookId, cover, bookName, introduction = '', chapterCount = 0 } = item;
        const routerToBookInfo = `/film/${bookId}`;
        return <div key={item.bookId} className={styles.swiperItem}>
          <ImageCover
            href={routerToBookInfo}
            className={styles.contentImgBox}
            width={120}
            height={162}
            src={cover}
            alt={bookName}
          />
          <Link prefetch={false} className={styles.rightCard} href={routerToBookInfo}>
            <div className={styles.rightCardTop}>
              <h2 className={styles.bookName} >
                {bookName}
              </h2>
              <p className={styles.chapterCount}>{chapterCount || 0} {t('home.episodes')}</p>
              <p className={styles.intro}>{introduction}</p>
            </div>
            {
              !!(item?.typeTwoList && item.typeTwoList.length) ? <div className={styles.rightCardBottom}>
                {
                  item.typeTwoList.map((typeTwoListItem) => (
                    <div key={typeTwoListItem.id + '_' + item.bookId} className={styles.rightTag}>{typeTwoListItem.name}</div>
                  ))
                }
              </div> : null
            }
          </Link>
        </div>
      })}
    </Slider>
  )
}

export default SwiperNormal;
