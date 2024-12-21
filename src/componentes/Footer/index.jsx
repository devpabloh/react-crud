import styles from "./Footer.module.css"
import logoGovernoDePE from "../../assets/logoGovPERGB.png"

const Footer = ()=>{
    return(
        <header className={styles.footer}>
            <img src={logoGovernoDePE} alt="" />
        </header>
    )
}

export default Footer