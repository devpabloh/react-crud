import styles from "./Header.module.css"
import logoATI from "../../assets/logoATIPE.png"

const Header = ()=>{
    return(
        <header className={styles.header}>
            <img src={logoATI} alt="" />
        </header>
    )
}

export default Header