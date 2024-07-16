import Banner from 'components/Banner';
import { useContext, useState } from 'react';
import Categorias from 'components/Categorias';
import ModalZoom from 'components/Modal';
import styles from './Inicio.module.css'
import { VideosContexto } from 'Contexto';


function Inicio () {
    
    const {categorias, setCategorias} = useContext(VideosContexto);
    const [videoEdit, setVideoEdit] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const aoClicar = (video) => {
        setVideoEdit(video);
        setModalOpen(true);
    };

    const saveEdit = () => {
        setVideoEdit(null);
        setModalOpen(false);
    };

    const closeModal = () => {
        setModalOpen(false);
        setVideoEdit(null);
    }
    
    return(
        <>
        <Banner categorias={categorias}/>
        <main className={styles.background}>
            <Categorias />
            {modalOpen && (
                <ModalZoom
                    isOpen={modalOpen}
                    onClose={closeModal}
                    videoToEdit={videoEdit}
                    onSave={saveEdit}
                />
            )}

        </main>
        </>
    )
}

export default Inicio