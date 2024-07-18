import Backdrop from "@mui/material/Backdrop";
import styles from "./Loader.module.scss";

interface IProps {
  loading: boolean;
}

const Loader = ({ loading }: IProps) => {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <div className={styles.loader}></div>
      </Backdrop>
    </div>
  );
};

export default Loader;
