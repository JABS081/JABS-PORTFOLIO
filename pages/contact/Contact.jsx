import React from 'react'

import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkTree,
} from 'react-icons/fa';

import {FiSend} from 'react-icons/fi';

import './contact.css'

const Contact = () => {
    return (
        <section className='contact section'>
            <h2 className='section__title'>
                Get In <span>Touch</span>
            </h2>

            <div className='contact__container container grid'>
                <div className='contact__data'>
                    <h3 className='contact__title'>Hey these is Jabs!</h3>

                    <p className='contact__description'>
                        Hi its Nice talking to you , I'm always open to discussing new project,
                        enourmous creativity,Business ideas and job Availability as my utmost career and visions. 
                    </p>

                    <div className='contact__info'>
                        <div className='info__item'>
                            <FaEnvelopeOpen className='info__icon' />

                            <div>
                                <span className='info__title'>Mail me</span>
                                <h4 className='info__desc'>abassjohn37@gmail.com</h4>
                            </div>
                        </div>

                        <div className='info__item'>
                            <FaPhoneSquareAlt className='info__icon' />

                            <div>
                                <span className='info__title'>Call me</span>
                                <h4 className='info__desc'>+234 813 887 9137</h4>
                            </div>
                        </div>
                    </div>

                    <div className='contact__social'>
                        <a href='https://www.facebook.com/081ayobami' className='contact__social-link'>
                            <FaFacebookF />
                        </a>

                        <a href='https://www.instagram.com/abassjohn0013' className='contact__social-link'>
                            <FaInstagram />
                        </a>

                        <a href='https://www.youtube.com/@johnabass2150' className='contact__social-link'>
                            <FaYoutube />
                        </a>

                        <a href='https://linktr.ee/jabmantech' className='contact__social-link'>
                            <FaLinkTree />
                        </a>
                    </div>
                </div>

                <form action='' className='contact__form'>
                    <div className='form__input-group'>
                        <div className='form__input-div'>
                            <input 
                              type='text' 
                              placeholder='Your Name' 
                              className='form__control' 
                          />
                        </div>

                        <div className='form__input-div'>
                            <input 
                              type='email' 
                              placeholder='Your Email' 
                              className='form__control' 
                          />
                        </div>

                        <div className='form__input-div'>
                            <input 
                              type='text' 
                              placeholder='Your Subject' 
                              className='form__control' 
                          />
                        </div>
                    </div>

                    <div className='form__input-div'>
                        <textarea 
                          placeholder='Your Message' 
                          className='form__control textarea'
                        ></textarea>
                    </div>

                    <button className='button'>
                        Send Message
                        <span className='button__icon-contact__button-icon'>
                            <FiSend />
                        </span>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;