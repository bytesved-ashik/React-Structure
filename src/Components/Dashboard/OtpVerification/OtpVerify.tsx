import React from 'react';
import { Box, Typography } from '@mui/material';
import image from '../../../image.png';
import styles from './OtpVerify.module.scss'
import { CommonButton } from '../../../Common/Button/CommonButton';
import OTPInput from './OTPInput';
import { AppName } from '../../../Common/AppName/AppName';


export const OtpVerify: React.FC = () => {

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
          <h3>Enter OTP</h3>
        </div>
        <div className={styles.small_text}>
          <Typography variant="body2">
            An OTP was sent to <b>+919909210912</b> <a href='#' >Edit</a>
          </Typography>
        </div>
        <div>
          <OTPInput />
        </div>
        <div className={styles.secOtpElem}>
          <CommonButton label="Verify" />
        </div>
        <div className={styles.small_texts}>
          <Typography variant='body2'>Resend OTP in 00:16 seconds</Typography>
        </div>
        <div className={styles.optFotter}>
          <AppName />
          <Typography
            variant="body2">
            &copy; Login 2024
          </Typography>
        </div>
      </div>
    </Box>
  );
};

