import React from 'react';
import '../../pages/Project/ProjectPage.css';
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';
import { FormattedMessage } from 'react-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img src={proyectImg(`./MultiAuth.png`)} alt='MultiAuth' />
                        <div className="content">
                            <h3>MultiAuth in Laravel</h3>
                            <p>Multiple user roles (admin, user, etc.) authentication system using Laravel guards and middleware.</p>
                            <p className="tecnologias">Laravel - PHP - MySQL - Blade</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img src={proyectImg(`./UploadContent.png`)} alt='Upload Social' />
                        <div className="content">
                            <h3>Upload Content to YouTube, Instagram, Facebook</h3>
                            <p>Automated media upload system built in Laravel using APIs of YouTube, Instagram, and Facebook.</p>
                            <p className="tecnologias">Laravel - REST APIs - OAuth - PHP</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img src={proyectImg(`./CustomPackage.png`)} alt='Laravel Package' />
                        <div className="content">
                            <h3>Laravel Custom Package</h3>
                            <p>Created and published a reusable Laravel package for internal API token management.</p>
                            <p className="tecnologias">Laravel - PHP - Composer - Git</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img src={proyectImg(`./TodoApp.png`)} alt='ToDo App' />
                        <div className="content">
                            <h3>ToDo Web App</h3>
                            <p>Full-stack task management application built using Laravel backend and Blade frontend.</p>
                            <p className="tecnologias">Python - HTML - CSS - JavaScript</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img src={proyectImg(`./YouTubeClone.png`)} alt='YouTube Clone' />
                        <div className="content">
                            <h3>YouTube Clone</h3>
                            <p>Video sharing platform inspired by YouTube with upload, like, and comment features.</p>
                            <p className="tecnologias">HTML - CSS - JavaScript</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img src={proyectImg(`./FoodDeliveryApp.png`)} alt='Food Delivery' />
                        <div className="content">
                            <h3>Food Delivery App</h3>
                            <p>Online food ordering and delivery platform with admin and restaurant panel.</p>
                            <p className="tecnologias">React Native - Firebase</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img src={proyectImg(`./WeatherApp.png`)} alt='Weather App' />
                        <div className="content">
                            <h3>Weather App</h3>
                            <p>Real-time weather forecasting web application using OpenWeather API.</p>
                            <p className="tecnologias">JavaScript - HTML - CSS - OpenWeather API</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet />
                </Link>
            </div>
        </section>
    );
};

export default React.memo(Project);
