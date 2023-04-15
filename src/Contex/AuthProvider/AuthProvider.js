import React, { createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../components/pages/ContexInfo/ContextInfo";

const auth = getAuth(app);
const GoogleLogin = new GoogleAuthProvider();
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // password Registration

  const PasswordRegistration = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  google auth Login
  const googleAuth = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleLogin);
  };

  // Password Login------------------
  const passwordLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // update profile---------------
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // current user info ---------------

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);

      setLoading(false);
    });
    return () => unsubcribe();
  }, []);

  // signOut ...........
  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const varifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const authInfo = {
    varifyEmail,
    loading,
    updateUserProfile,
    PasswordRegistration,
    passwordLogin,
    user,
    googleAuth,
    LogOut,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
