import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AutrhProvider = ({children}) => {
 const [user,setUser] = useState(null);
 const [loading , setLoading] = useState(true)

 const createUser = (email,password) =>{
   return createUserWithEmailAndPassword(auth,email,password)
 }

 const userLogin = (email , password) =>{
  return signInWithEmailAndPassword (auth , email,password)
 }

 const logOut = () =>{
    return signOut(auth)
 }
 
 //observe  auth state change
 useEffect (()=>{
  const unsubscribe = onAuthStateChanged(auth , currentUser =>{
    console.log('auth state change',currentUser);
    setUser(currentUser)
    setLoading(false)
  })
  return ()=>{
    unsubscribe()
  }
 },[])

//function pass 

 const authInfo={
   user ,
   loading,
   createUser,
   userLogin,
   logOut
 }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AutrhProvider;