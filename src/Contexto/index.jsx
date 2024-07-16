import { createContext, useEffect, useState } from "react";

export const VideosContexto = createContext();

const VideoProvider = ({ children }) => {
    
    const [videos, setVideos] = useState([]);
    const [videosBanner, setVideosBanner] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [categorias, setCategorias] = useState([
            {
                nome: 'FrontEnd',
                cor: '#6BD1FF',
            },
            {
                nome: 'BackEnd',
                cor: '#00C86F',
            },
            {
                nome: 'Mobile',
                cor: '#FFBA05',
            },
            {
                nome: 'IAs Generativas',
                cor: '#865ff3',
            },
    ]);

    useEffect(() => {
        const getVideos = async () => {
            try {
                const response = await fetch('http://localhost:3001/videos');
                if (!response.ok) {
                    throw new Error('Erro ao carregar dados');
                }

                const data = await response.json();
                setVideosBanner(data)
                const agrupados = categorias.map(categoria => ({
                    categoria: { nome: categoria.nome, cor: categoria.cor },
                    videos: data.filter(video => video.categoria.toLowerCase() === categoria.nome.toLowerCase())
                }));
                setVideos(agrupados);
            } catch (error) {
                console.error('Erro de requisição:', error);
            }
        };
        getVideos();
    }, [categorias]);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    

    const deletarVideo = async (id) => {
        try {
            const resposta = await fetch(`http://localhost:3001/videos/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (resposta.ok) {
                setVideos(prevVideos =>
                    prevVideos.map(categoria => ({
                        ...categoria,
                        videos: categoria.videos.filter(video => video.id !== id)
                    }))
                );
                console.log('Vídeo deletado com sucesso');
                return true;
            } else {
                console.error('Falha ao deletar o vídeo');
                return false;
            }
        
        } catch (erro) {
            console.error('Houve um erro na resposta da requisição:', erro);
            return false;
        }
    };

    const compartilhados = {
        videos,
        setVideos,
        categorias,
        setCategorias,
        videosBanner,
        deletarVideo,
        openModal,
        closeModal,
        modalOpen
    }

    return(
        <VideosContexto.Provider value={compartilhados}>
            {children}
        </VideosContexto.Provider>
    )
}

export default VideoProvider