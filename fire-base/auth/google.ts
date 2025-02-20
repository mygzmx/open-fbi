import {
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { firebaseAuth } from "@/fire-base";
import { jwtDecode } from "jwt-decode";

export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  provider.addScope("email");
  provider.addScope("profile");
  return signInWithPopup(firebaseAuth, provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    console.log('google-------->', user)
    return user;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    // const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log('登录失败',  error)
    return error;
  });
}
