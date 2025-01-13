import React, { FC, CSSProperties } from "react";
import Image from "next/image";
import styles from '@/components/common/videoEmpty/index.module.scss'

interface IProps {
  style?: CSSProperties;
}

export const PcvideoEmpty: FC<IProps> = ({ style }) => {

  const pcEmptyData = [
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {id:6},
  ]

  return <div className={styles.pcEmptyBox} style={style}>
    {
      pcEmptyData.map((val,ind) => {
        return <div key={val.id}>
          <div className={styles.imgCoverEmpty}/>
        </div>
      })
    }
    
  </div>
}

export const PcvideoEmptyoth: FC<IProps> = ({ style }) => {
  
  const pcEmptyData = [
    {id:1},
    {id:2},
    {id:3},
    {id:4},
  ]

  return <div className={styles.pcEmptyBox} style={style}>
    {
      pcEmptyData.map((val,ind) => {
        return <div key={val.id}>
          <div className={styles.imgCoverEmptyoth}/>
        </div>
      })
    }
    
  </div>
}


export const MvideoEmpty: FC<IProps> = ({ style }) => {
  const mEmptyData = [
    {id:1},
    {id:2},
    {id:3},
  ]

  return <div className={styles.mEmptyBox} style={style}>
    {
      mEmptyData.map((val,ind) => {
        return <div key={val.id}>
          <div className={styles.mimgCover}/>
        </div>
      })
    }
    
  </div>
}

export const MvideoEmptyoth: FC<IProps> = ({ style }) => {
  const mEmptyData = [
    {id:1},
    {id:2},
  ]

  return <div className={styles.mEmptyBox} style={style}>
    {
      mEmptyData.map((val,ind) => {
        return <div key={val.id}>
          <div className={styles.mimgCoveroth}/>
        </div>
      })
    }
    
  </div>
}
