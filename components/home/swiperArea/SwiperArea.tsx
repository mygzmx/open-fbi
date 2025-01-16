"use client"
import React, { FC, useEffect, useRef, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import styles from '@/components/home/swiperArea/SwiperArea.module.scss';
import { IBookItem } from "@/types/home.interfaces";

interface IProps {
  bannerList: IBookItem[];
}

const SwiperArea: FC<IProps> = ({ bannerList = [] }) => {
  const timer = useRef<NodeJS.Timeout>(null);
  const count = useRef(0);
  const [swiperIndex, setSwiperIndex] = useState(0);
  useEffect(() => {
    setTimer();
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    }
  }, []); // eslint-disable-line

  const setTimer = () => {
    if (bannerList.length > 0) {
      timer.current = setInterval(() => {
        if (count.current < bannerList.length - 1) {
          count.current += 1;
          setSwiperIndex(prevState => prevState + 1)
        } else {
          count.current = 0
          setSwiperIndex(0)
        }
      }, 3000);
    }
  }

  const onIndicator = (index: number) => {
    setSwiperIndex(index);
    count.current = index;
    if (timer.current) {
      clearInterval(timer.current)
      setTimer();
    }
  }

  return <div className={styles.swiperWrap}>
    <div className={styles.swiperBox}>
      {bannerList.map((ban, index) => {
        const linkTo = `/drama/${ban.bookId}`;
        return <div key={ban.bookId + '_' + index} className={classNames(styles.swiperItem, swiperIndex === index && styles.swiperItemActive)}>
          <Link
            prefetch={false}
            className={styles.content}
            href={linkTo}>
            <Image
              src={ban.cover}
              className={styles.contentImg}
              width={1200}
              height={587}
              alt={ban.name}
            />
          </Link>

          <div className={styles.left}>
            <Link prefetch={false} className={styles.bookName} href={linkTo}>
              {ban.bookName}
            </Link>

            <Link prefetch={false} className={styles.intro} href={linkTo}>
              {ban.introduction}
            </Link>
          </div>
        </div>
      })}

      <div className={styles.indicatorBox}>
        {bannerList.map((item,index) =>{
          return <div
            key={item.bookId + '_' + index}
            className={classNames(styles.indicatorItem, swiperIndex === index ? styles.indicatorActive : '')}
            onClick={() => onIndicator(index)}>
            { item.name }
          </div>
        })}
      </div>
    </div>
  </div>
}

export default SwiperArea;
