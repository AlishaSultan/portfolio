import React from 'react';
import './AboutPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import cv from '../../cv/cv.pdf';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
import imgabout from '../../img/home.jpg';

const About = () => {

  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={imgabout} alt="" className="sobre-mi-img" />
              
              <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo cv buttonDownload">
                  <FormattedMessage
                      id='btn-cv'
                      defaultMessage='Download CV'
                  />
              </a>
            </div>
            <div className="sobre-mi-info">
              <p>
                <FormattedMessage
                  id='about-info-1'
                  defaultMessage="Hi, I'm Alisha Sultan, a Laravel and PHP Developer with 1 year of hands-on experience in web development. I started my journey by building dynamic websites using core technologies like HTML, CSS, and JavaScript, and quickly expanded my skills into modern stacks including Laravel, PHP, and MySQL. My early projects sparked a deep interest in backend development and full-stack solutions."
                />
              </p>

              <div className="hide parrafo-active">
                <p>
                  <FormattedMessage
                    id='about-info-2'
                    defaultMessage="I consider myself a dedicated and self-motivated developer who is always eager to learn and grow. I have worked with various front-end technologies such as Bootstrap, SCSS, jQuery, and vanilla JavaScript to create responsive and interactive interfaces. On the backend, I’ve developed robust APIs and database-driven applications using Laravel, MongoDB, and MySQL."
                  />
                </p>

                <p>
                  <FormattedMessage
                    id='about-info-3'
                    defaultMessage="Currently, I am working in the industry as a Laravel & PHP Developer, where I collaborate with cross-functional teams on real-time projects, follow agile development practices, and contribute to building scalable web applications. This role has greatly enhanced my understanding of industry standards, team coordination, and practical problem-solving in a professional environment."
                  />
                </p>
              </div>

              <div className="btn-info">
                <div className="custom-btn btn-codigo" id="btn-hide" onClick={readMore}><span>Read more</span></div>
              </div>
            </div>

          </div>

          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="skill-container">
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="HTML" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" title="HTML5" />
                <h2 className="skill-name">HTML</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-1'
                    defaultMessage='With 1 years of professional experience in this language, I am confident in my ability to perform effectively and deliver high-quality results in the industry.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="CSS" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" title="CSS3" />
                <h2 className="skill-name">CSS</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-2'
                    defaultMessage='With 1 year of work experience in this language, I use it daily to develop web designs and user interfaces with efficiency and precision.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="Js" className="skills-img icon-li" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" title="Java Script" />
                <h2 className="skill-name">Javascript</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-3'
                   defaultMessage='With 1 year of experience using it in both front-end and back-end development, I have become well-versed in the language and regularly incorporate it into my work projects.'
                />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="Sass" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" title="Sass" />
                <h2 className="skill-name">Sass</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-4'
                 defaultMessage='With 1 year of using this preprocessor in the professional field, I have included it in many of my projects as it enables me to write more organized and maintainable code.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
                <img alt="Bootstrap" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" title="Bootstrap" />
                <h2 className="skill-name">Bootstrap</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-5'
                    defaultMessage='With one year of experience using this framework, I’ve had the opportunity to apply it in several work projects, which helped me build a solid understanding of its core features.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="jQuery" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" title="jQuery" />
                <h2 className="skill-name">jQuery</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-6'
                   defaultMessage='With one year of experience using this library in both personal and professional projects, it has become one of the tools I use and work with the most.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="php" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" title="PHP" />
                <h2 className="skill-name">PHP</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-7'
                    defaultMessage='Over a year of experience using PHP in both personal and professional projects, focusing on backend development and server-side scripting.'
                  />
                </p>
              </div>

              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="laravel" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" title="Laravel" />
                <h2 className="skill-name">Laravel</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-8'
                    defaultMessage='I have 1 year of professional experience using Laravel to develop secure, scalable, and maintainable web applications.'
                  />
                </p>
              </div>

              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="mongodb" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" title="MongoDB" />
                <h2 className="skill-name">MongoDB</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-10'
                    defaultMessage='I have 1 year of experience using MongoDB to design flexible, scalable, and efficient NoSQL databases for various web applications.'
                  />
                </p>
              </div>

              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="mysql" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" title="MySQL" />
                <h2 className="skill-name">MySQL</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-11'
                    defaultMessage='I have 1 year of experience using MySQL to design, manage, and optimize relational databases for dynamic and data-driven web applications.'
                  />
                </p>
              </div>

              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="react" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title="React" />
                <h2 className="skill-name">React</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-13'
                    defaultMessage='I have 1 year of experience using React to build dynamic, responsive, and component-based user interfaces for web applications.'
                  />
                </p>
              </div>

              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="figma" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" title="Figma" />
                <h2 className="skill-name">Figma</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-14'
                    defaultMessage='I have 3 year of experience using Figma to design intuitive and user-centered UI/UX prototypes for web and mobile applications.'
                  />
                </p>
              </div>




            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default About;