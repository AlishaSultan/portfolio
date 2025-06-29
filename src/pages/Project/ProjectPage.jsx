import React, { useState } from 'react'
import './ProjectPage.css';

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from 'react-router-dom';

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
const proyectsImg = require.context('../../img', true);

const Project = () => {
  const [estadoModal17, cambiarEstadoModal17] = useState(false);
  const [estadoModal14, cambiarEstadoModal14] = useState(false);
  const [estadoModal15, cambiarEstadoModal15] = useState(false);
  const [estadoModal16, cambiarEstadoModal16] = useState(false);
  const [estadoModal13, cambiarEstadoModal13] = useState(false);
  const [estadoModal12, cambiarEstadoModal12] = useState(false);
  const [estadoModal11, cambiarEstadoModal11] = useState(false);
  const [estadoModal10, cambiarEstadoModal10] = useState(false);
  const [estadoModal9, cambiarEstadoModal9] = useState(false);
  const [estadoModal8, cambiarEstadoModal8] = useState(false);
  const [estadoModal7, cambiarEstadoModal7] = useState(false);
  const [estadoModal6, cambiarEstadoModal6] = useState(false);
  const [estadoModal5, cambiarEstadoModal5] = useState(false);
  const [estadoModal3, cambiarEstadoModal3] = useState(false);

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage
              id='projects'
              defaultMessage='Projects'
            />
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project" offset={-150} duration={500}>
              <FormattedMessage
                id='site-web'
                defaultMessage='websites'
              />
            </NavLink>
            {/* <NavLink to="/project/app" offset={-150} duration={500}>
              Apps
            </NavLink> */}
            {/* <NavLink to="/project/game" offset={-150} duration={500}>
              <FormattedMessage
                id='games'
                defaultMessage='games'
              />
            </NavLink> */}
          </nav>
        </section>

        <section className="projects__grid paginas-web">
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal17(!estadoModal17)}>
              <img src={proyectsImg(`./MultiAuth.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal14(!estadoModal14)}>
              <img src={proyectsImg(`./UploadContent.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal15(!estadoModal15)}>
              <img src={proyectsImg(`./CustomPackage.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal16(!estadoModal16)}>
              <img src={proyectsImg(`./TodoApp.png`)} className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal13(!estadoModal13)}>
              <img src={proyectsImg(`./YouTubeClone.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal12(!estadoModal12)}>
              <img src={proyectsImg(`./FoodDeliveryApp.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal11(!estadoModal11)}>
              <img src={proyectsImg(`./WeatherApp.png`)} alt="" className="projects__img" />
            </a>
          </div>
        </section>
      </main>


<Modal estado={estadoModal17} cambiarEstado={cambiarEstadoModal17}>
  <div className="content-modal">
    <div className="pw-content">
      <div className="eins-modal-preview">
        <img src={proyectsImg(`./MultiAuth.png`)} alt="Multi-auth Project" />
      </div>
      <div className="eins-modal-text">
        <p><FormattedMessage id="multi-auth-1" defaultMessage="Multi-auth system built using Laravel, supporting roles like Admin, User, and Manager." /></p>
        <p><FormattedMessage id="multi-auth-2" defaultMessage="Includes role-based access control, custom dashboards, and route protection." /></p>
        <div className="eins-modal-text-2">
          <span>GitHub:</span> <a href="https://github.com/AlishaSultan/MultiAuth-laravel" target="_blank">View Repo</a>
        </div>
        <div className="eins-modal-text-3">
          <span><FormattedMessage id='projects-tec' defaultMessage='Used technology:' /></span>
          <div className="eins-modal-tec">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" alt="Laravel" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
          </div>
        </div>
      </div>
    </div>
  </div>
</Modal>

<Modal estado={estadoModal14} cambiarEstado={cambiarEstadoModal14}>
  <div className="content-modal">
    <div className="pw-content">
      <div className="eins-modal-preview">
        <img src={proyectsImg(`./UploadContent.png`)} alt="Social Upload Project" />
      </div>
      <div className="eins-modal-text">
        <p>
          <FormattedMessage
            id="social-upload-1"
            defaultMessage="Web tool to upload content directly to YouTube, Instagram, and Facebook using Laravel REST APIs."
          />
        </p>
        <p>
          <FormattedMessage
            id="social-upload-2"
            defaultMessage="Includes OAuth integration, video metadata handling, and media scheduling features."
          />
        </p>
        <div className="eins-modal-text-2">
          <span>GitHub:</span>
          <a
            href="https://github.com/AlishaSultan/UploadContentOnYoutubeUsingLaravel"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repo
          </a>
        </div>
        <div className="eins-modal-text-3">
          <span>
            <FormattedMessage id="projects-tec" defaultMessage="Used technology:" />
          </span>
          <div className="eins-modal-tec">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
              alt="Laravel"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
              alt="PHP"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</Modal>


<Modal estado={estadoModal15} cambiarEstado={cambiarEstadoModal15}>
  <div className="content-modal">
    <div className="pw-content">
      <div className="eins-modal-preview">
        <img src={proyectsImg('./CustomPackage.png')} alt="Custom Package Project" />
      </div>
      <div className="eins-modal-text">
        <p>
          <FormattedMessage
            id="custom-package-1"
            defaultMessage="Developed a fully functional and reusable Laravel Contact Form Package, ideal for integration into any Laravel application."
          />
        </p>
      
        <div className="eins-modal-text-2">
          <span>Packagist:</span>
          <a
            href="https://packagist.org/packages/alisha/customcontactform"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Package
          </a>
        </div>
        <div className="eins-modal-text-3">
          <span>
            <FormattedMessage id="projects-tec" defaultMessage="Used technology:" />
          </span>
          <div className="eins-modal-tec">
           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" alt="Laravel" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg"
              alt="Composer"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
              alt="Git"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</Modal>



<Modal estado={estadoModal16} cambiarEstado={cambiarEstadoModal16}>
  <div className="content-modal">
    <div className="pw-content">
      <div className="eins-modal-preview">
        <img src={proyectsImg(`./TodoApp.png`)} alt="ToDo App" />
      </div>
      <div className="eins-modal-text">
        <p><FormattedMessage id="todo-1" defaultMessage="Simple and intuitive ToDo web app to manage daily tasks and boost productivity." /></p>
        <div className="eins-modal-text-2">
          <span>GitHub:</span> <a href="https://github.com/AlishaSultan/TodoWebApp" target="_blank">View Repo</a>
        </div>
        <div className="eins-modal-text-3">
          <span><FormattedMessage id='projects-tec' defaultMessage='Used technology:' /></span>
          <div className="eins-modal-tec">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="JS" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python"/>

          </div>
        </div>
      </div>
    </div>
  </div>
</Modal>

<Modal estado={estadoModal13} cambiarEstado={cambiarEstadoModal13}>
  <div className="content-modal">
    <div className="pw-content">
      <div className="eins-modal-preview">
        <img src={proyectsImg(`./YouTubeClone.png`)} alt="Static Homepage Project" />
      </div>
      <div className="eins-modal-text">
        <p>
          <FormattedMessage
            id="youtube-clone-1"
            defaultMessage="Created a static homepage layout as a simple web page using only HTML, CSS, and JavaScript."
          />
        </p>
        <p>
          <FormattedMessage
            id="youtube-clone-2"
            defaultMessage="The page includes basic structure, styling, and interactive elements without any frameworks."
          />
        </p>
        <div className="eins-modal-text-2">
          <span>GitHub:</span>
          <a href="https://github.com/AlishaSultan/YouTubeClone" target="_blank" rel="noopener noreferrer">
            View Repo
          </a>
        </div>
        <div className="eins-modal-text-3">
          <span>
            <FormattedMessage id="projects-tec" defaultMessage="Used technology:" />
          </span>
          <div className="eins-modal-tec">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="JavaScript" />
          </div>
        </div>
      </div>
    </div>
  </div>
</Modal>


<Modal estado={estadoModal12} cambiarEstado={cambiarEstadoModal12}>
  <div className="content-modal">
    <div className="pw-content">
      <div className="eins-modal-preview">
        <img src={proyectsImg(`./FoodDeliveryApp.png`)} alt="Food Delivery App" />
      </div>
      <div className="eins-modal-text">
        <p>
          <FormattedMessage
            id="food-delivery-1"
            defaultMessage="Food delivery app that allows users to browse restaurants, view menus, and place orders seamlessly."
          />
        </p>
        <p>
          <FormattedMessage
            id="food-delivery-2"
            defaultMessage="Built using React Native and integrated with Firebase for real-time data, authentication, and order management."
          />
        </p>
        <div className="eins-modal-text-2">
          <span>GitHub:</span>
          <a
            href="https://github.com/AlishaSultan/FDA-FoodDeliveryApp-"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repo
          </a>
        </div>
        <div className="eins-modal-text-3">
          <span>
            <FormattedMessage id="projects-tec" defaultMessage="Used technology:" />
          </span>
          <div className="eins-modal-tec">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React Native"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              alt="JavaScript"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
              alt="Firebase"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS3"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</Modal>


<Modal estado={estadoModal11} cambiarEstado={cambiarEstadoModal11}>
  <div className="content-modal">
    <div className="pw-content">
      <div className="eins-modal-preview">
        <img src={proyectsImg(`./WeatherApp.png`)} alt="Weather App" />
      </div>
      <div className="eins-modal-text">
        <p><FormattedMessage id="weather-1" defaultMessage="Weather App displays current weather, forecast, and temperature by city name." /></p>
        <p><FormattedMessage id="weather-2" defaultMessage="Built with ReactJS and OpenWeather API, includes icons and dynamic UI based on conditions." /></p>
        <div className="eins-modal-text-2">
          <span>GitHub:</span> <a href="https://github.com/yourusername/weather-app" target="_blank">View Repo</a>
        </div>
        <div className="eins-modal-text-3">
          <span><FormattedMessage id='projects-tec' defaultMessage='Used technology:' /></span>
          <div className="eins-modal-tec">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="JS" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
          </div>
        </div>
      </div>
    </div>
  </div>
</Modal>


      <ScrollToTop />

      <Footer />
    </div>
  )
}
export default Project;