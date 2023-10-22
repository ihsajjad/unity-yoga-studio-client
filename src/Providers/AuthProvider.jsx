import { createContext, useEffect, useState } from "react";
import { app } from "./../Firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(app);

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // sign in with google
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user with email and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign out user
  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  const updateProfileImgAndName = (name, photo) => {
    console.log(name, photo);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Observing the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser);
      // sending user data to the server and setting the access token to localStorage
      //   if (currentUser) {
      //     fetch("https://sports-camp360-server-ihsajjad.vercel.app/jwt", {
      //       method: "POST",
      //       headers: {
      //         "content-type": "application/json",
      //       },
      //       body: JSON.stringify({ email: currentUser.email }),
      //     })
      //       .then((res) => res.json())
      //       .then((data) => {
      //         localStorage.setItem("access-token", data.token);

      //       });
      //   } else {
      //     localStorage.removeItem("access-token");
      //   }
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    googleSignIn,
    createUser,
    signIn,
    updateProfileImgAndName,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;