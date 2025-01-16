"use client"
import { onAuthStateChanged, User } from "@firebase/auth";
import { firebaseAuth } from "@/fire-base";
import { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";

// const clientId = "965892564166-c4skf5ujfev5ovvt2rq4pjnlopehgoe8.apps.googleusercontent.com";
const clientId = "173403677457-a1lbgb0rca9ubjc6479jrskttr9mkb47.apps.googleusercontent.com"; // self
const appId = "629274312371363";

// 监听状态
export const useLoginState = () => {

  const [user, setUser] = useState<User>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        // console.log("监听状态 - 用户已登录：", user);
        setUser(user);
      } else {
        setUser(null);
        // console.log("监听状态 - 用户未登录");
        initGoogle();
      }
    });
    return () => unsubscribe(); // 清理监听
  }, []) // eslint-disable-line

  // 初始化 Google One Tap
  const initGoogle = () => {
    if (google) {
      console.log('初始化 Google One Tap')
      google?.accounts.id.initialize({
        client_id: clientId,
        callback: handleCredentialResponse,
      });
      // 显示 One Tap 提示框
      google?.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed()) {
          console.log("One Tap 登录未显示，原因：", notification.getNotDisplayedReason());
        }
        if (notification.isSkippedMoment()) {
          console.log("用户跳过了 One Tap 提示");
        }
      });
    }
  }

  // 处理 Google 登录回调
  const handleCredentialResponse = async (response) => {
    console.log("Google 登录成功，ID Token：", response.credential);
    // 使用 Firebase 验证 Google 的 ID Token
    const credential = GoogleAuthProvider.credential(response.credential);
    try {
      const userCredential = await signInWithCredential(firebaseAuth, credential);
      console.log("Firebase 登录成功，用户信息：", userCredential.user);
      setUser(userCredential.user)
    } catch (error) {
      console.error("Firebase 登录失败：", error.message);
    }
  };

  return [user, setUser]
}
