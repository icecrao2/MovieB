import { useState } from 'react';

import {
  auth,
  googleProvider,
  githubProvider,
  signOut,
  onAuthStateChanged,
  signInWithRedirect,
} from "../firebase/getFirebase.js";


const user_manager = (initialUser = '') => {


  const [user, setUser] = useState(initialUser);


  const login = (platform) => {

    if (!platform) return;

    if (platform === 'sign in with google') {
      signInWithRedirect(auth, googleProvider);
    }
    else if (platform === 'sign in with github') {
      signInWithRedirect(auth, githubProvider);
    }
  }

  const logout = (success, fail) => {
    signOut(auth).then(
      success
    ).catch(
      fail
    );
  }

  const authStateChange = () => {
    onAuthStateChanged(auth, (currentUser) => {

      if (currentUser) {
        setUser(currentUser);
      }
      else setUser(null);

    });
  }

  return { login, logout, user, authStateChange };
}


export { user_manager };