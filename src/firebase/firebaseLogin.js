import { auth, googleProvider, signInWithRedirect } from "./getFirebase.js";


export const googleLoginHandler = () => {
  signInWithRedirect(auth, googleProvider);
}
