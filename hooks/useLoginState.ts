"use client"
import { onAuthStateChanged } from "@firebase/auth";
import { firebaseAuth } from "@/fire-base";
import { useEffect } from "react";

// 监听状态
export const useLoginState = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        console.log("监听状态 - 用户已登录：", user);
      } else {
        console.log("监听状态 - 用户未登录");
      }
    });

    return () => unsubscribe();  // 清理监听
  }, [])

}
