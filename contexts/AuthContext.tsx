import React, { createContext, ReactNode, useContext, useState } from 'react';

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<{
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  unsetUser: () => void;
} | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(null);

  const unsetUser = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, setUser, unsetUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth harus digunakan dalam AuthProvider");
  }
  return context;
};