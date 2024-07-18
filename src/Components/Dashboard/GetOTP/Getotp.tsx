import {
  Box,
  Checkbox,
  Link,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./Getotp.module.scss";
import image from "../../../image.png";
import GoogleIcon from "@mui/icons-material/Google";
import { CommonButton } from "../../../Common/Button/CommonButton";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { AppName } from "../../../Common/AppName/AppName";

const GetOtp = () => {
  const [phone, setPhone] = useState("");

  return (
    <Box className={styles.getotp_Container}>
      <div className={styles.imgContainer}>
        <img src={image} className={styles.heroimg} alt="Clap Boy" />
      </div>
      <div className={styles.otpSection}>
        <div className={styles.secOtpElem}>
          <AppName />
        </div>
        <div className={styles.secOtpElem}>
          <h3>Nice To See You</h3>
          <span>&#128075;</span>
        </div>
        <div>
          <div className={styles.phoneInputContainer}>
            <PhoneInput
              country={"eg"}
              enableSearch={true}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputStyle={{ width: "100%" }}
            />
          </div>
          <Typography variant="body2">We'll Send OTP via SMS</Typography>
        </div>
        <div className={styles.secOtpElem}>
          <Checkbox disabled checked />
          <Typography variant="body2">
            By continuing, you agree to our
            <Link href="#"> Privacy Policy </Link>
            and
            <Link href="#"> T&Cs</Link>.
          </Typography>
        </div>
        <div className={styles.secOtpElem}>
          <CommonButton label="Get OTP" />
        </div>
        <hr />
        <button className={`${styles.secOtpElem} ${styles.goggleBtn}`}>
          <i>
            <GoogleIcon />
          </i>
          <Typography variant="body2"> or Sign in with Goggle</Typography>
        </button>

        <div className={styles.optFotter}>
          <AppName />
          <Typography variant="body2">&copy; Login 2024</Typography>
        </div>
      </div>
    </Box>
  );
};

export default GetOtp;
