import Header from "components/Header"
import Rodape from "components/Rodape"
import { Outlet } from "react-router-dom"
import styles from './PaginaBase.module.css'

function PaginaBase () {
    return(
        <main className={styles.background}>
            <Header />
            <Outlet />
            <Rodape />
        </main>
    )
}

export default PaginaBase