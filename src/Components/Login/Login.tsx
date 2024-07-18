import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useStateContext } from "../../Common/Context/Context";
import Loader from "../../Common/Loader/Loader";
import styles from "./Login.module.scss";
import { LoginApi } from "../../Apis/Login/LoginApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const {
    showPassword,
    setShowPassword,
    loading,
    setLoading,
    loginData,
    setLoginData,
  } = useStateContext();

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    const payload = {
      email: loginData?.email,
      password: loginData?.password,
    };
    setLoading(true);
    LoginApi(payload)
      .then((response) => {
        if (response.statusCode === 200) {
          setLoading(false);
          navigate("/dashboard");
          toast.success("Login success");
          // dispatch(setUserData(response));
          // localStorage.setItem(
          //   LOCALSTORAGE_KEY?.userData,
          //   JSON.stringify(response)
          // );
        } else {
          toast.error(response.message);
          setLoading(false);
        }
      })
      .catch((err: any) => {
        console.log("err", err);
        toast.error(err);
        setLoading(false);
      });
  };

  return loading ? (
    <Loader loading={loading} />
  ) : (
    <Box className={styles.login}>
      <Box className={styles.loginBody}>
        <div style={{ fontSize: "30px" }}>Login</div>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className={styles.email_textbox}
          onChange={(e: any) =>
            setLoginData((prev) => ({ ...prev, email: e?.target?.value }))
          }
        />

        <FormControl
          sx={{ m: 1 }}
          variant="outlined"
          className={styles.password_textbox}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            onChange={(e: any) =>
              setLoginData((prev) => ({ ...prev, password: e?.target?.value }))
            }
            label="Password"
          />
        </FormControl>
        <Button
          variant="contained"
          className={styles.login_button}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};
