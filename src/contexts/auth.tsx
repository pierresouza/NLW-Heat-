import { createContext, ReactNode } from "react";

type User = {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
};

type AuthContextData = {
  user: User | null;
  signInUrl: string;
};

const AuthContext = createContext({} as AuthContextData);

type AuthProvider = {
  children: ReactNode;
};

export function AuthProvider(props: AuthProvider) {
    
  return (
    <AuthContext.Provider value={{}}>{props.children}</AuthContext.Provider>
  );
}
