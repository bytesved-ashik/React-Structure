import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface loginData {
  email: string;
  password: string;
}

interface IstateContext {
  loginData: loginData;
  setLoginData: Dispatch<SetStateAction<loginData>>;
  showPassword: boolean;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const StateContext = createContext<IstateContext | undefined>(undefined);

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a StateProvider");
  }
  return context;
};

export const StateProvider = ({ children }: any) => {
  const [loginData, setLoginData] = useState<loginData>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <StateContext.Provider
      value={{
        loginData,
        setLoginData,
        showPassword,
        setShowPassword,
        setLoading,
        loading,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
