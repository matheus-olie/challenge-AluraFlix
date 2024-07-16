import EditarCard from "components/Modal/EditarCard"
import styles from './CriarVideo.module.css'
import { useContext } from "react";
import { VideosContexto } from "Contexto";
import { saveVideo } from "components/MetodoPost";


function CriarVideo () {
   
    const { closeModal } = useContext(VideosContexto);
    
    const aoSalvarVideo  = async (novoVideo) => {
        const sucesso = await  saveVideo(novoVideo);

        if (sucesso) {
            alert('Vídeo adicionado com sucesso')
        } else {
            alert('Falha ao adicionar video')
        }
    };


    return(
        <div className={styles.container}>
            <EditarCard
                titulo='NOVO VIDEO'
                subtitulo={'Complete o formulário para criar um novo vídeo.'}
                onSave={aoSalvarVideo}
                onClose={closeModal}
            />
        </div>
    )
}

export default CriarVideo