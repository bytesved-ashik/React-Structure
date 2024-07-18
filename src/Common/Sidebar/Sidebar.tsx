import { Avatar, Box, ListItemIcon, Stack, Typography } from '@mui/material';
import { SidebarData } from './SidebarData';
import styles from './sidebar.module.scss'
import WestIcon from '@mui/icons-material/West';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { AppName } from '../AppName/AppName';

interface sidebarProps {
    toggleDrawer: () => void;
    open: boolean;
}

const Sidebar: React.FC<sidebarProps> = ({ open, toggleDrawer }) => {
    return (
        <Box className={`${styles.sidebarMain} ${open ? styles.open : ""}`}>
            <div className={styles.siderhead}>
                <AppName />
                <i className={styles.arrowIcon} onClick={toggleDrawer}><WestIcon /></i>
            </div>
            {SidebarData.data.map((mainMenu, index) => (
                <>
                    <Box className={styles.diffSection} key={index}>
                        <Typography
                            variant='body2'
                            className={styles.menuItem}>
                            {mainMenu.main}
                        </Typography>
                        {mainMenu.subItems.map((submenu, subIndex) => (
                            <div key={subIndex} className={styles.subMenuItem}>
                                <ListItemIcon sx={{ color: 'grey' }} >
                                   <submenu.icon   />
                                    <Typography
                                        variant='body1'
                                        className={styles.menuItem}>
                                        {submenu.name}
                                    </Typography>
                                </ListItemIcon>
                            </div>
                        ))}
                    </Box>
                </>
            ))}
            <div className={styles.sidebarFotter}>
                <div className={styles.player}>
                    <Stack sx={{ paddingRight: '.5rem' }}>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </Stack>
                    <div>
                        <Typography variant='body2'>Jogn</Typography>
                        <Typography variant='body2'>level 4</Typography>
                    </div>
                </div>
                <i><SettingsOutlinedIcon /></i>
            </div>
        </Box>
    );
};

export default Sidebar;
