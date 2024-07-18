import logo from './temp.jpg'
import styles from './AppName.module.scss'

export const AppName = () => {
    return (
        <div className={styles.appName}>
            <img src={logo} alt=""  className={styles.logoimg}/>
            <h3>PLAYPICKUP.APP</h3>
        </div>
    );
}