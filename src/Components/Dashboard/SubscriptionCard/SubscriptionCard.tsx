
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styles from "./SubscriptionCard.module.scss";
import { Divider, Typography } from '@mui/material';
import { CommonButton } from '../../../Common/Button/CommonButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Sidebar from '../../../Common/Sidebar/Sidebar';


const SubscriptionCard = () => {
  const [isSubscriptionOpen, setSubscriptionOpen] = useState(false);

  const handleSubscriptionClick = () => {
    setSubscriptionOpen(true);
  };

  const handleClose = () => {
    setSubscriptionOpen(false);
  };
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className={styles.mainContainer}>
      <Button variant="outlined" onClick={handleSubscriptionClick}>Subscription</Button>
      {/* <Sidebar onSubscriptionClick={handleSubscriptionClick} /> */}
      <Dialog open={isSubscriptionOpen} onClose={handleClose} className={styles.subscriptionDialog} fullScreen={fullScreen}>

        <div className={styles.titleContainer}>
          <div className={styles.main_Title}>Subscription</div>
          <IconButton aria-label="close" onClick={handleClose} className={styles.closeButton}>
            <CloseIcon />
          </IconButton>
        </div>

        <Divider />
        <DialogContent>
          {/* Content for the subscription box */}
          <div className={styles.firstBox}>
            <div className={styles.icon}  >
              <ThumbUpAltOutlinedIcon />
            </div>
            <div className={styles.iconTextContainer}>

              <Typography className={styles.text} sx={{ fontSize: '14px' }}>To pay</Typography>
              <Typography variant='h6'>
                <span className={styles.textInner}>$0.99/month</span>
              </Typography>
            </div>

          </div>
          <p className={styles.para1}>Pay through Netbanking</p>
          <div className={styles.C_button}>
            <CommonButton label='Continue' />
          </div>
        </DialogContent>
        <p className={styles.para}>This transaction will expire in 5m 59s</p>
        <DialogActions>
          <Button onClick={handleClose} color="primary">PLAYPICKUPS.App</Button>
        </DialogActions>

      </Dialog>
    </div>
  );
};

export default SubscriptionCard;