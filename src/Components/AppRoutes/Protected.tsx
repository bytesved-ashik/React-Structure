import React from "react";
import { useNavigate } from "react-router-dom";
import { LOCALSTORAGE_KEY } from "../../Utils/Constant";
import { ILocalStorageData } from "../../Interface/Interface";

interface ProtectedProps {
  children: React.ReactNode;
}

const Protected = ({ children }: ProtectedProps) => {
  const navigate = useNavigate();

  let loginData = sessionStorage.getItem(LOCALSTORAGE_KEY.userData);
  const user: ILocalStorageData = loginData ? JSON.parse(loginData) : "";
  if (user) {
    navigate("/dashboard");
  } else {
    navigate("/");
  }

  return <div>{children}</div>;
};

export default Protected;
