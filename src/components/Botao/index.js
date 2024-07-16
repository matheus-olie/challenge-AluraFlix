import styles from './Botao.module.css'

function Botao (props) {
    return(
        <button className={styles.botao}>{props.children}</button>
    )
}

export default Botao