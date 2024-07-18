import { useSelector } from "react-redux";
import { getUserData } from "../../ReduxToolkit/Slices/LoginSlices";
import { ILocalStorageData } from "../../Interface/Interface";

export const Dashboard = () => {
  const data: ILocalStorageData = useSelector(getUserData);
  console.log("data", data);
  return <h1>Dashboard</h1>;
};
