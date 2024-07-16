import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './Logo.png'
import CabecalhoLink from 'components/CabecalhoLink';

function Header () {
    return(
        <header className={styles.cabecalho}>
            <Link to={"./"}>
                <img src={logo} alt='Logo AluraFlix'></img>
            </Link>
            <nav>
                <CabecalhoLink url='/'>HOME</CabecalhoLink>
                <CabecalhoLink url='/novovideo'>NOVO VÍDEO</CabecalhoLink>
            </nav>
        </header>
    )
}

export default Header