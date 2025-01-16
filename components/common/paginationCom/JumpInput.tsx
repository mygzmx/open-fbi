import React, { FC, useEffect, useState } from "react";
import styles from '@/components/common/paginationCom/index.module.scss';

interface IProps {
  totalPage: number;
  currentPage: number;
  onJumpChange: (page: number) => void;
}

const JumpInput:FC<IProps> = ({ currentPage, totalPage, onJumpChange }) => {
  const [value, setValue] = useState<string | number>(currentPage);

  useEffect(() => {
    setValue(currentPage);
  }, [currentPage]);

  return (<div className={styles.jumpInputBox}>
    跳转至
    <input
      className={styles.jumpInput}
      value={value}
      step={1}
      onInput={(e) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const page = e.target && e.target.value && parseInt(e.target?.value) ? parseInt(e.target?.value) : 0;
        if (page > 0) {
          setValue(page > totalPage ? totalPage : page);
        } else if (page === 0) {
          setValue('');
        } else {
          setValue(1);
        }
      }}
      onKeyDown={(e) => {
        if (e.keyCode === 13 || e.code === "Enter") {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          const page = e.target && e.target?.value && parseInt(e.target?.value) ? parseInt(e.target?.value) : 0;
          if (page && page > 0) {
            onJumpChange(page > totalPage ? totalPage : page)
          } else {
            onJumpChange(1)
          }

        }
      }}
      onBlur={(e) => {
        const page = e.target && e.target?.value && parseInt(e.target?.value as string) ? parseInt(e.target?.value as string) : 0;
        if (page !== currentPage) {
          if (page && page > 0) {
            onJumpChange(page > totalPage ? totalPage : page)
          } else {
            onJumpChange(1)
          }
        }
      }}
      type={"number"}/>
    页
  </div>);
}

export default JumpInput;
