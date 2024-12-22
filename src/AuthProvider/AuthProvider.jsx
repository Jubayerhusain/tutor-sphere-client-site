import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Fixed: Correctly initialize state

  // SIGNUP: Create user function
  const createUser = async (email, password) => {
    setLoading(true);
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  // SIGNIN: User SignIn function
  const signInUser = async (email, password) => {
    setLoading(true);
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  // SIGNOUT: User SignOut function
  const signOutUser = async () => {
    setLoading(true);
    try {
      return await signOut(auth);
    } finally {
      setLoading(false); // Ensure loading is set to false after sign-out
    }
  };

  // GOOGLE AUTH: User SignIn with Google AuthProvider
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleAuth = async () => {
    setLoading(true);
    try {
      return signInWithPopup(auth, googleProvider);
    } finally {
      setLoading(false);
    }
  };

  // Get the current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("hey juabyer your current user", currentUser);
      setLoading(false); // Stop loading once auth state is determined
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    handleGoogleAuth,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {loading ? (
        <div class="flex items-center justify-center h-screen bg-gray-100">
          <div class="relative flex items-center justify-center">
            <div class="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500 border-dotted"></div>
            <div class="absolute inset-0 h-12 w-12 rounded-full border-4 border-gradient-to-r from-green-400 to-blue-500"></div>
          </div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
