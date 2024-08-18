import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"

import { createContext, useEffect, useState } from "react"
import app from "../../Firebase/Firebase.config"

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const Authentication = ({children}) => {
    const auth = getAuth(app)
    const [loader, setLoader] = useState(true);
    // manage user
    const [user, setUser] = useState(null);

    // create user
    const createUser = (email, pass) => {
      setLoader(true);
      return createUserWithEmailAndPassword(auth, email, pass);
    };

    // login user
    const loginUser = (email, pass) => {
      setLoader(true);
      return signInWithEmailAndPassword(auth, email, pass);
    };
    // googleLogin
    const googleLogin = () => {
      setLoader(true);
      return signInWithPopup(auth, googleProvider);
    };

    // sign Out user

    const logOut = () => {
      setUser(null);
      setLoader(true);
      return signOut(auth);
    };
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
          setLoader(false);
        });

        return () => unSubscribe();
      }, [setUser,setLoader]);

      const authInfo = {
        createUser,
        loader,
        loginUser,
        user,
        setUser,
        logOut,
        googleLogin,
      };
      return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      );
}

export default Authentication
