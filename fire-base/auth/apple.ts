import { signInWithPopup, OAuthProvider } from "firebase/auth";
import { firebaseAuth } from "@/fire-base";
const provider = new OAuthProvider('apple.com');
provider.addScope('email');
provider.addScope('name');

export const loginWithApple = () => {

  return signInWithPopup(firebaseAuth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      // Apple credential
      const credential = OAuthProvider.credentialFromResult(result);
      const accessToken = credential?.accessToken;
      const idToken = credential?.idToken;
      // IdP data available using getAdditionalUserInfo(result)
      console.log('Apple--------->', user)
      return user
    })
    .catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // const credential = OAuthProvider.credentialFromError(error);
      console.log('登录失败',  error)
      return error;
    });
}


