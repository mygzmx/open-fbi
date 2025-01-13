"use client"
import React, { ReactNode, useEffect } from "react";

const Template = ({ children }: { children: ReactNode }) => {

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
    console.log("%c FE-HUB ",
      `font-size: 28px;font-weight:bold;background: linear-gradient(300deg, #0c0f32, #421233, #af2942);padding: 24px 15px;
      border-radius: 8px;text-shadow:0 -2px 2px #FFFFFF, 4px 1px 4px rgba(0, 0, 0, 0.5);color: #ff375f;`
    );
    window.addEventListener("keydown", notAllowCopy);
    return () => {
      if (timer) {
        clearInterval(timer);
      }
      window.removeEventListener("keydown", notAllowCopy);
    }
  }, []);

  return <>
    {children}
  </>
}

export default Template;
