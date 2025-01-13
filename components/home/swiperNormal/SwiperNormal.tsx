"use client"
import React, { FC } from 'react';
import { Swiper } from 'antd-mobile';
import Link from "next/link";
import Image from "next/image";
import styles from '@/components/home/swiperNormal/SwiperNormal.module.scss';
import { IBookItem } from "@/types/home.interfaces";

interface IProps {
  bannerList: IBookItem[];
}

const SwiperNormal: FC<IProps> = ({ bannerList }) => {

  return <Swiper
    autoplayInterval={3000}
    style={{
      '--height': '4.2rem',
    }}
    indicatorProps={{
      style: {
        '--dot-spacing': '0.08rem',
      }
    }}
    className={styles.swiperBox}
    autoplay
    loop>
    {bannerList.map((item, index) => (
      <Swiper.Item key={item.bookId + index} className={styles.content}>
        <Link
          prefetch={false}
          href={`/drama/${item.bookId}`}
          className={styles.contentImgBox}
        >
          <Image
            src={item.cover || '/images/cover/wap-banner.png'}
            className={styles.contentImg}
            width={702}
            height={254}
            alt={item.name}
          />
        </Link>
      </Swiper.Item>
    ))}
  </Swiper>
}

export default SwiperNormal;
