"use client"
import React, { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {

  function notAllowCopy (e: KeyboardEvent) {
    if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
      e.preventDefault()
    }
  }
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (process.env.NODE_ENV === 'production') { // development
      timer = setInterval(() => { Function("debugger")() }, 1000)
    }
    window.addEventListener("keydown", notAllowCopy);
    return () => {
      timer && clearInterval(timer);
      window.removeEventListener("keydown", notAllowCopy);
    }
  }, []);

  return <>
    {/*<RemFlexible suppressHydrationWarning />*/}
    {children}
  </>
}
