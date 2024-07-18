import { ToastContainer } from "react-toastify";
import AppRoutes from "./Components/AppRoutes/AppRoutes";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <AppRoutes />
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default App;
