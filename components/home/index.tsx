"use client"
import React, { FC } from "react";
import SwiperNormal from "@/components/home/swiperNormal/SwiperNormal";
import SwiperArea from "@/components/home/swiperArea/SwiperArea";
import MFooter from "@/components/home/mFooter/MFooter";
import styles from '@/components/home/index.module.scss';
import EmptyCom from "@/components/common/empty";
import HomeTitle from "@/components/home/homeTitle/HomeTitle";
import FirstList from "@/components/home/firstList/FirstList";
import { ColumnNameRoute, IBookItem, IHomeResItem } from "@/types/home.interfaces";
import { useTranslation } from "react-i18next";

interface IProps {
  bigList: IBookItem[];
  smallData: IHomeResItem[];
}

const WapHome: FC<IProps> = ({ bigList, smallData}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.homeWrap}>

      <SwiperNormal bannerList={bigList}/>
      <SwiperArea bannerList={bigList}/>

      {smallData.map((item, index) => {
        return <div key={item.id} className={styles.mainContent}>
          <HomeTitle title={t(item.name)} href={`/more/${ColumnNameRoute[item.name]}`}/>
          <FirstList dataSource={item.items || []} isLazy={index > 0}/>
        </div>
      })}

      {bigList.length === 0 && smallData.length === 0 ? <EmptyCom /> : null}

      <MFooter />
    </div>
  )
}


export default WapHome
