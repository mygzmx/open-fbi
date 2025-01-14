import { signInWithPopup, OAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
import firebaseAuth from "@/fire-base/auth";

export const loginWithApple = () => {
  const provider = new OAuthProvider('apple.com');
  provider.addScope('email');
  provider.addScope('name');
  // signInWithRedirect(auth, provider);
  // // todo
  // getRedirectResult(auth)
  signInWithPopup(firebaseAuth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      // Apple credential
      const credential = OAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      const idToken = credential.idToken;

      // IdP data available using getAdditionalUserInfo(result)
      // ...

      console.log('Apple--------->', user)
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The credential that was used.
      const credential = OAuthProvider.credentialFromError(error);

      // ...
    });
}


