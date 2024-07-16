import { useContext, useState } from 'react';
import styles from './Card.module.css';
import ModalZoom from 'components/Modal';
import { Link } from 'react-router-dom';
import { VideosContexto } from 'Contexto';

function Card({ id, imagem, titulo, cor, descricao, categoria }) {
    const { deletarVideo } = useContext(VideosContexto);
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const aoDeletar = async () => {
        const deletado = await deletarVideo(id);
        if (deletado) {
            alert('Video deletado com sucesso');
        } else {
            alert('Não foi possível deletar o video');
        }
    };

    return (
        <>
            <div className={styles.card} >
                <Link to={`/${id}`} style={{ boxShadow: `0px 0px 30px 10px ${cor} inset`, borderRadius: '5px'}} >
                    <img
                        className={styles.imagem}
                        src={imagem}
                        alt={titulo}
                        style={{ border: `solid 4px ${cor}` }}
                    />
                </Link>
                <figcaption className={styles.caption} style={{ border: `solid 4px ${cor}`, borderTop: 'none' }}>
                    <div className={styles.titulo}>{}</div>
                    <div className={styles.icons}>
                        <div className={styles.delete} onClick={aoDeletar}>
                            <img src="/imagens/Vector.png" alt="Deletar" />
                            <p>Deletar</p>
                        </div>
                        <div className={styles.edit} onClick={openModal}>
                            <img src="/imagens/editar.png" alt="Editar" />
                            <p>Editar</p>
                        </div>
                    </div>
                </figcaption>
            </div>
            <ModalZoom
                isOpen={modalOpen}
                onClose={closeModal}
                videoToEdit={{ id, titulo, imagem, cor, descricao, categoria }}
            />
        </>
    );
}

export default Card;
