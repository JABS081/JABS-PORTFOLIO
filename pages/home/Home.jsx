import React from 'react'
import profile from "../../../assets/home.jpg"
import { link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./home.css"

const Home = () => {
    return (
        <section className='home section grid'>
            <img src={profile} alt='' className='home__img' />

            <div className='home__content'>
                <div className="home__data">
                    <h1 className='home__title'>
                        <SPAN>I'M JABS.</SPAN> WEB SPECIALIST
                        </h1>

                        <p className='home__description'>
                            I'M A NIGERIA BASED WEB DESIGNER & FRONTEND SPECIALIZED.I offer full web development
                            with React and Javascript ,also backened development services using (PHP, JQUERY AND PYTHON)
                            and UI/UX design using FIGMA & ADOBE XD, I LOVE BUILDING NEW IDEAS AND MAKING MY CUSTOMERS HAPPY.
                        </p>

                        <link to='/about' className='button'>
                            More About Me <span className='button__icon'>
                                <FaArrowRight />
                                </span>
                        </link>
                </div>
            </div>

            <div className='color__block'></div>
        </section>
    );
};

export default Home;