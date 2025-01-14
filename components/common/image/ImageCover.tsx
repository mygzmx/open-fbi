import React, { FC, useMemo } from 'react';
import Image from 'next/image';
import { ImageProps } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { UrlObject } from "url";
import { ELanguage } from "@/typings/home.interface";
import DefaultCover from "@/components/icons/defaultCover";
import classNames from "classnames";
import styles from "@/components/common/image/index.module.scss";

type Url = string | UrlObject;

interface IProps extends ImageProps {
  href: Url;
  replace?: boolean;
  scroll?: boolean;
  onClick?: () => void;
  scale?: boolean; // hover效果
  shallow?: boolean;
  locale?: ELanguage
}

const defaultCover = DefaultCover;
// const defaultFilm = `/images/${process.env.Platform}/defaultFilm.png`;

export const onImgError = (e: any) => {
  e.target.style.visibility = 'hidden';
  e.target.src = defaultCover;
  // e.target.srcset = defaultCover;
  e.target.onload = function (){
    e.target.style.visibility = 'visible';
  }
}

export const ImageCover: FC<IProps> = (props) => {

  const imageProps = useMemo(() => {
    const _props = {} as ImageProps;
    const blackAttributes = ['scale', 'locale', 'onClick', 'className', 'href', 'replace', 'rel', 'shallow'];
    for (const item in props) {
      if (blackAttributes.indexOf(item) === -1) {
        const value = Reflect.get(props, item)
        Reflect.set(_props, item, value)
      }
    }
    if(!Reflect.has(_props, 'src')) {
      Reflect.set(_props, "src", defaultCover)
    }
    return _props;
  }, [props]);


  const { scale = false, href, className, alt = '', locale, onClick, replace = false, rel, shallow = false } = props;

  return <Link
    prefetch={false}
    rel={rel}
    shallow={shallow}
    replace={replace}
    locale={locale}
    href={href}
    className={classNames(className, styles.imageBox, scale && styles.imageScaleBox)}
    onClick={() => onClick && onClick()}>
    {/* eslint-disable-next-line jsx-a11y/alt-text */}
    <Image
      className={styles.imageItem}
      onError={onImgError}
      {...imageProps}
      alt={alt}
    />
  </Link>
}
