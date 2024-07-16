import NaoEncontrada from "pages/NaoEncontrada";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './Player.module.css';

function Player() {
    const [video, setVideo] = useState()
    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/matheus-olie/aluraflix-api/videos?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                if (dados.length > 0) {
                    setVideo(dados[0]);
                } else {
                    setVideo(null)
                }
            });
    }, [parametros.id]);

    if (!video) {
        return <NaoEncontrada />
    }

    return (

        <section>
            <iframe className={styles.iframe}
                width="100%"
                height="100%"
                src={video.video}
                title={video.titulo}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
            </iframe>
        </section>

    )
}

export default Player