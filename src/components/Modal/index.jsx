import styled from 'styled-components';
import EditarCard from './EditarCard';
import { useContext, useEffect, useState } from 'react';
import { VideosContexto } from 'Contexto';


const Overlay = styled.div`
  background-color: rgba(3, 18, 47, 0.6);
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;  
  height: 100%;
  z-index: 99999;
`;

const ModalDialog = styled.dialog`
  width: 700px;
  padding-bottom: 3rem;
  border: 5px solid #6BD1FF;
  background-color: #03122F;
  border-radius: 10px;
  color: white;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100000;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const CloseButtonImg = styled.img`
  width: 40px;
  display: block;
`;

function ModalZoom({ isOpen, onClose, videoToEdit }) {
  const { videos, setVideos } = useContext(VideosContexto);
  const [videoAtualizado, setVideoAtualizado] = useState(videoToEdit);
  
  useEffect(() => {
    setVideoAtualizado(videoToEdit);
  }, [videoToEdit]);

  const closeModal = () => {
    onClose();
  };

  const atualizarVideo = async (video) => {
    try {
      const response = await fetch(`http://localhost:3001/videos/${videoToEdit.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(video),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Vídeo atualizado com sucesso');

        const videosAtualizados = videos.map(categoria =>
          categoria.categoria.nome.toLowerCase() === videoToEdit.categoria.toLowerCase()
            ? {
              ...categoria,
              videos: categoria.videos.map(v => v.id === videoToEdit.id ? data : v)
            }
            : categoria
        );

        setVideos(videosAtualizados);
        closeModal();
      } else {
        alert('Não foi possível atualizar o vídeo');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Ocorreu um erro ao atualizar o vídeo');
    }
  };

  return (
    <>
      {isOpen && (
        <>
          <Overlay />
          <ModalDialog open={true}>
            <CloseButton onClick={closeModal}>
              <CloseButtonImg src="/imagens/X-cancel.png" alt="Botão Fechar" />
            </CloseButton>
            <EditarCard 
              titulo="EDITAR VIDEO:" 
              subtitulo="Atualize as informações do vídeo"
              videoToEdit={videoAtualizado}
              onSave={atualizarVideo}
              onClose={closeModal}
            />
            <form method="dialog"></form>
          </ModalDialog>
        </>
      )}
    </>
  );
}

export default ModalZoom;
