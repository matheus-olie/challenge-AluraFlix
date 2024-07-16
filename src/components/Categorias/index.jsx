import { useContext, useEffect, useState } from 'react';
import styles from './Categorias.module.css';
import Card from 'components/Card';
import { VideosContexto } from 'Contexto';

function Categorias({}) {
   
   const {videos, setVideos} = useContext(VideosContexto)
   const {categorias, setCategorias} =useContext(VideosContexto)

    const aoDeletar = (id) => {
        setVideos(videos.filter(video => video.id !== id));
    };

    const aoEditar = (videoEditado) => {
        setVideos(videos.map(video => (video.id === videoEditado.id ? videoEditado : video)));
    };

    useEffect(()=> {
        console.log(videos)
    }, [videos])

    const atualizarVideoLocalmente = (videoAtualizado) => {
        setVideos(videos.map(video => {
            if (video.id === videoAtualizado.id) {
                return videoAtualizado;
            }

            return video;
        }));
    };

    return (
        <section className={styles.categorias}>
          {videos?.map(categoria => (
            <div key={categoria.categoria.div}>
              <h3 style={{ backgroundColor: categoria.categoria.cor }} key={categoria.categoria.nome}>{categoria.categoria.nome}</h3>
              <div className={styles.cardContainer}>
                {renderizaVideos(categoria.videos, categoria.categoria.cor, aoDeletar, aoEditar, atualizarVideoLocalmente, setVideos)}
              </div>
            </div>
          ))}
        </section>
    );
}

function renderizaVideos(videos, cor, aoDeletar, aoEditar, atualizarVideoLocalmente) {
    return (
      <>
        {videos?.map(video => {
          return (
            <Card
              key={video?.id}
              id={video?.id}
              imagem={video?.imagem}
              cor={cor}
              titulo={video?.titulo}
              descricao={video?.descricao}
              categoria={video.categoria}
              onDelete={aoDeletar}
              onEdit={aoEditar}
              link={video?.video}
              atualizarVideoLocalmente={atualizarVideoLocalmente}
            />
          );
        })}
      </>
    );
}

export default Categorias;
