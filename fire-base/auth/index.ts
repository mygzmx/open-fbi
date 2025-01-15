import { loginWithGoogle } from "@/fire-base/auth/google";
import { loginWithFacebook } from "@/fire-base/auth/facebook";
import { loginWithApple } from "@/fire-base/auth/apple";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "@/fire-base";
import { UserCredential } from "@firebase/auth";

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
