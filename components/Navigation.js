import Link from 'next/link'
import { useState } from 'react/cjs/react.development'
import style from '../styles/Navigation.module.css'

const Navigation = () => {
    const [toggle, setToggle] = useState('')

    const showMenu = () => {
        toggle == '' ?
            setToggle(style.hide) : setToggle('')
    }

    return (
        <nav className={style.navigation}>
            <p className={style.logo}>Portfolio</p>
            <ul className={style.menu+' '+toggle}>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/education"><a onClick={showMenu}>Education</a></Link>
                </li>
                <li>
                    <Link href="/contact"><a onClick={showMenu}>Contact</a></Link>
                </li>
            </ul>
            <div onClick={showMenu} className={style.burger}>
                <div className={style.bar1}></div>
                <div className={style.bar2}></div>
                <div className={style.bar3}></div>
            </div>
        </nav>
    )
}

export default Navigation;