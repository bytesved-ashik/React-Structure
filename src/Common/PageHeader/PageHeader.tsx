import { Box } from "@mui/material"
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './PageHeader.module.scss'

const PageHeader:React.FC<{toggleDrawer:()=>void}> = ({toggleDrawer}) => {
    return (
        <Box className={styles.pageheader}>
            <i className={styles.menuIcon} onClick={toggleDrawer}><MenuIcon /></i>
            <i className={styles.notification}><NotificationsIcon fontSize="small" /></i>
        </Box>
    )
}
export default PageHeader;