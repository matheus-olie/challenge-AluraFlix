import React, { useContext} from 'react';
import styles from './Banner.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { VideosContexto } from 'Contexto';

function Banner () {
    const { categorias, videosBanner } = useContext(VideosContexto);
         
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        dotsClass: `slick-dots ${styles.dots}`,
        appendDots: dots => (
            <div>
                <ul style={{marginBottom: '0px', height: '40px', backgroundColor: '#03122F'}}>
                    {dots}
                </ul>
            </div>
        ),
    };

    return (
        <div className={styles.capa}>
            <Slider {...settings}>
                {videosBanner.map((video) => {
                    const categoria = categorias.find(categoria => categoria.nome.toLowerCase() === video.categoria.toLowerCase())
                    return (
                        <div key={video.id} className={styles.slide}>
                            <div className={styles.overlay} style={{ backgroundImage: `url(${video.imagem})`}}>
                                <div className={styles.sobreposicao}></div>
                                <div className={styles.elementosSobrepostos}>
                                    <div>
                                        <h3 style={{backgroundColor: categoria ? categoria.cor : '#000000'}}>
                                            {categoria ? categoria.nome : 'Categoria Desconhecida'}
                                        </h3>
                                        <h1>{video.titulo}</h1>
                                        <p>{video.descricao}</p>
                                    </div>
                                    <div className={styles.videoslink}>
                                        <Link to={`/${video.id}`}>
                                            <img
                                                src={video.imagem}
                                                alt=''
                                                style={{ border: `5px solid ${categoria ? categoria.cor : '#000000'}`, borderRadius: `20px`}}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default Banner