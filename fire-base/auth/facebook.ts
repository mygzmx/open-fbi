import { signInWithPopup, FacebookAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
import firebaseAuth from "@/fire-base/auth";

export const loginWithFacebook = () => {
  const provider = new FacebookAuthProvider();
  // signInWithRedirect(auth, provider);
  // // todo
  // getRedirectResult(auth)
  signInWithPopup(firebaseAuth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      console.log('facebook--------->', user)
    }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
    // ...
  });
}


