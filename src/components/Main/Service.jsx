import React from 'react';
import '../../pages/Service/ServicesPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Service = () => (
    <section className="servicios" id="servicios">
        <h2 className="heading">
            <FormattedMessage
                id='services'
                defaultMessage='Services'
            />
        </h2>
        <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-code"></i>
                <h3>
                    <FormattedMessage
                        id='frontend'
                        defaultMessage='Frontend Development'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='frontend-info'
                        defaultMessage='Building responsive and interactive user interfaces using HTML, CSS, JavaScript, React, Bootstrap, and other modern tools.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-server"></i>
                <h3>
                    <FormattedMessage
                        id='backend'
                        defaultMessage='Backend Development'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='backend-info'
                        defaultMessage='Developing secure and scalable server-side applications using PHP, Laravel, MySQL, MongoDB, and RESTful APIs.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
                <i className="fas fa-layer-group"></i>
                <h3>
                    <FormattedMessage
                        id='fullstack'
                        defaultMessage='Full Stack Development'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='fullstack-info'
                        defaultMessage='End-to-end development combining both frontend and backend technologies to deliver complete web solutions.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
                <i className="fas fa-pencil-ruler"></i>
                <h3>
                    <FormattedMessage
                        id='figma'
                        defaultMessage='Figma UI Design'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='figma-info'
                        defaultMessage='Designing user-friendly web and mobile interfaces using Figma with a focus on usability, accessibility, and brand consistency.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="600">
                <i className="fas fa-tools"></i>
                <h3>
                    <FormattedMessage
                        id='webmaintenance'
                        defaultMessage='Web Maintenance'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='webmaintenance-info'
                        defaultMessage='Regular updates, bug fixes, performance improvements, and content management to ensure your website runs smoothly.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="700">
                <i className="fab fa-wordpress"></i>
                <h3>
                    <FormattedMessage
                        id='wordpress'
                        defaultMessage='WordPress Development'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='wordpress-info'
                        defaultMessage='Creating and customizing WordPress websites, themes, and plugins tailored to client needs and business goals.'
                    />
                </p>
            </div>
        </div>
        {/* <div className='portafolio-btn'>
            <Link to="/service">
                <ButtomGet/>
            </Link>
        </div> */}
    </section>
);

export default React.memo(Service);
