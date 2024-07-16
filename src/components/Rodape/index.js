import styles from './Rodape.module.css';
import logo from './Logo.png';

function Rodape () {
    return(
        <footer className={styles.rodape}>
            <img src={logo} />
        </footer>

    )
}

export default Rodape