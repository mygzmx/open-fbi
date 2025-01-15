import { loginWithGoogle } from "@/fire-base/auth/google";
import { loginWithFacebook } from "@/fire-base/auth/facebook";
import { loginWithApple } from "@/fire-base/auth/apple";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "@/fire-base";
import { UserCredential, onAuthStateChanged } from "@firebase/auth";

export type LoginType = "google" | "facebook" | "apple";

type LoginWith = (loginType: LoginType) => Promise<UserCredential>;


export const loginWith: LoginWith = (loginType) => {
  switch (loginType) {
    case "google":
      return loginWithGoogle();
    case "facebook":
      return loginWithFacebook();
    case "apple":
      return loginWithApple();
  }
}


export const logout = () => signOut(firebaseAuth);

export const loginState = () => onAuthStateChanged(firebaseAuth, (user) => {
  if (user) {
    console.log("监听状态 - 用户已登录：", user);
  } else {
    console.log("监听状态 - 用户未登录");
  }
});
