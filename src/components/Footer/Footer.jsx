import React from 'react';
import './Footer.css';

/* Multi idioma */
import {FormattedMessage} from 'react-intl';


const Footer = () =>{
    // Fecha
    let fecha = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                </div>
                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/in/alisha-sultan-0775832ba/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/AlishaSultan" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);