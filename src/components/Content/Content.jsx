import React from 'react';
import './Content.css';
import ParticleHeaderBg from '../ParticlesBg/ParticlesHeader/ParticleHeaderBg';

/* ReactScroll */
import { Link } from 'react-scroll';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Content = () => (
    <div className="contenido">
        <ParticleHeaderBg/>
        <section className="inicio" id="inicio">
        
            <div className="titulo">
            
                <p data-aos="fade-up" data-aos-delay="600">
                    <FormattedMessage
                        id='greeting'
                        defaultMessage='Hello'
                    />
                </p>
                <h1 data-aos="fade-up" data-aos-delay="800">
                    <FormattedMessage
                        id='name'
                        defaultMessage='I am Alisha Sultan'
                    />
                </h1>
                <p data-aos="fade-up" data-aos-delay="1000">
                    <FormattedMessage
                        id='rol'
                        defaultMessage='From UI to DB | Full-Stack Developer'
                    />
                </p>

                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/in/alisha-sultan-0775832ba/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/AlishaSultan" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400"><i className="fab fa-github"></i></a>
                
                </div>
                <div className="wrapper">
                    <a className="button" href="https://www.linkedin.com/in/alisha-sultan-0775832ba/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200">
                        <div className="icon">
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <span>Linkedin</span>
                    </a>
                    <a className="button" href="https://github.com/AlishaSultan" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400">
                        <div className="icon">
                            <i className="fab fa-github"></i>
                        </div>
                        <span>Github</span>
                    </a>
                </div>

                <Link to="sobre-mi" href="#sobre-mi">
                    <div className="scroll-down"></div>
                </Link>
            </div>
        </section>
    </div>
);

export default Content;