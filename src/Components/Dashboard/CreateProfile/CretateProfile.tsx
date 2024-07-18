import { Avatar, Box, Button, FormControl, Stack, TextField, Typography } from "@mui/material";
import styles from './CretateProfile.module.scss'
import { CommonButton } from "../../../Common/Button/CommonButton";
import { CommonTextField } from "../../../Common/CommonTextfield/CommonTextfield";
import { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import PhoneInput from "react-phone-input-2";


const level = ['Never played before', 'Beginner', 'InterMediate', 'Advanced', 'Pro']
const CreateProfile = () => {
    const [skillLevel, setSkillLevel] = useState<string>('Beginner');
    const [activeButton, setActiveButton] = useState<string | null>(null);
    const [phone, setPhone] = useState("");

    const handleButtonClick = (button: string) => {
        setActiveButton(button);
        setSkillLevel(button);
    };
    return (
        <Box className={styles.profileMain}>
            <div className={styles.profileContent}>
                <FormControl>
                    <Typography
                        variant="h5"
                        className={styles.profileHead}>
                        Create Your Profile
                    </Typography>
                    <div className={styles.profilepic}>
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" src="" sx={{ width: 60, height: 60 }} />
                            <Button className={styles.uploadBtn} variant="outlined" size="small">Upload Photo</Button>
                        </Stack>
                    </div>

                    <div className={styles.profileElem}  >
                        <Typography>Name</Typography>
                        <CommonTextField />
                    </div>
                    <div className={styles.profileElem} >
                        <Typography>Phone Number</Typography>
                          <PhoneInput
                            country={"eg"}
                            enableSearch={true}
                            value={phone}
                            onChange={(phone) => setPhone(phone)}
                            inputStyle={{ width: '100%' ,height:'3.5rem'}}
                        />
                    </div>
                    <div className={styles.profilepic}>
                        <div className={styles.profileElem} >
                            <Typography>City</Typography>
                            <TextField />
                        </div>
                        <div className={styles.profileElem} >
                            <Typography>Date Of Birth</Typography>
                            <LocalizationProvider 
                                dateAdapter={AdapterDayjs}>
                                <DatePicker  />
                            </LocalizationProvider>
                        </div>
                    </div>
                    <div className={styles.profileElem} >
                        <Typography>Select Sports skill Level</Typography>
                        <div className={styles.buttonsContainer}>
                            {level.map((button, index) => (
                                <div key={index} className={`${styles.buttonWrapper} ${activeButton === button ? styles.active : ''}`}>
                                    {activeButton === button && <CheckIcon className={styles.tickIcon} sx={{ fontSize: 16 }} />}
                                    <button
                                        className={`${styles.button} ${activeButton === button ? styles.activeButton : ''}`}
                                        onClick={() => handleButtonClick(button)}
                                    >
                                        +{button}
                                    </button>

                                </div>
                            ))}
                        </div>
                    </div>
                    <CommonButton label="Save" />
                </FormControl>
            </div>
        </Box>
    )
}
export default CreateProfile;