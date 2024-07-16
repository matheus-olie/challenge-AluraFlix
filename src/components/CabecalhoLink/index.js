import { Link, useLocation } from 'react-router-dom';
import styles from './CabecalhoLink.module.css';

function CabecalhoLink ({ url, children }) {

    const localizacao =useLocation();
    
    return(
        <Link className={`
            ${styles.link}
            ${localizacao.pathname === url ? styles.linkDestacado : ''}
        `} to={url}>
            {children}
        </Link>


    )
}

export default CabecalhoLink