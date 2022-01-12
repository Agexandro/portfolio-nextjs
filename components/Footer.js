import style from '../styles/Home.module.css'
import FooterStyle from '../styles/Footer.module.css'

const Footer = ()=>{
    return (
        <footer className={style.hero}>
            <div className={FooterStyle.footer}>
                <ul className={FooterStyle.social}>
                    <li><a>GitHub</a></li>
                    <li><a>LinkedIn</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;