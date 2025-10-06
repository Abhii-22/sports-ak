import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // In a real app, this would involve a backend call
  const signIn = (email) => {
    setCurrentUser({ email });
  };

  const signOut = () => {
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
