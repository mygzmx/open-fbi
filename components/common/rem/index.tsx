'use client'
import React, { FC } from "react";
import Script from "next/script";

interface IProps {
  mobileScreenWidth?: number;
  pcFontSize?: string
}

const RemFlexible: FC<IProps> = ({ mobileScreenWidth = 750, pcFontSize = '83.3px' }) => {
  // if (typeof window === "undefined") return;
  return <Script id='rem_flexible' strategy={"beforeInteractive"} dangerouslySetInnerHTML={{
    __html: `(function flexible(window, document) {
    var docEl = document.documentElement;
    function setPageFontsize() {
      document.documentElement.style.setProperty('--vh', (window.innerHeight / 100) + 'px');
      var clientWidth = window.innerWidth || docEl.clientWidth;
      if (clientWidth <= 768) {
        var rem = 100 * (clientWidth / ${mobileScreenWidth});
        rem && (docEl.style.fontSize = rem + 'px');
      } else {
        docEl.style.fontSize = '${pcFontSize}'
      }
      if (window.resizeScreen) {
        window.resizeScreen();
      }
    }
    setPageFontsize();
    setTimeout(function () {
      setPageFontsize()
    }, 50)
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    window.addEventListener(resizeEvt, setPageFontsize);
    window.addEventListener("pageshow", function (e) {
      if (e.persisted) {
        setPageFontsize()
      }
    });
    window.addEventListener("keydown", function (e) {
      if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        e.preventDefault()
      }
    });
  })(window, document);`
  }} />
}

export default RemFlexible;
