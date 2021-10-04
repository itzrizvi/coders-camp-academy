import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const navActive = {
        borderBottom: '2px solid #ff6492'
    }
    const faMap = <FontAwesomeIcon icon={faMapMarker} />
    const faEnv = <FontAwesomeIcon icon={faEnvelope} />
    const faPhn = <FontAwesomeIcon icon={faPhone} />
    const faFb = <FontAwesomeIcon icon={faFacebookF} />
    const faIn = <FontAwesomeIcon icon={faLinkedinIn} />
    const faInsta = <FontAwesomeIcon icon={faInstagram} />
    const faTwit = <FontAwesomeIcon icon={faTwitter} />
    return (
        <div>
            <footer className="foot py-10">
                <div className="container mx-auto grid grid-cols-4 gap-12">
                    <div className="logo">
                        <h3 className="text-white font-bold text-2xl">CO<span className="text-textPink">DE</span>RS CA<span className="text-textPink">MP</span></h3>
                        <p className="text-white text-base leading-6 pt-4">We are Coders Camp Academy. We have a great team of different programming languages
                            and they has a lot of skills for developing games, apps, websites and have the best experiences
                            to work with different frameworks and library. You can always check our courses. Thank You.
                        </p>
                    </div>
                    <div className="footer-navigation px-12">
                        <h3 className="text-white font-bold text-xl pb-3 mt-1">Important Links</h3>
                        <nav className="text-left text-white">
                            <NavLink activeStyle={navActive} className="p-1 m-1 block" to="/home">Home</NavLink>
                            <NavLink activeStyle={navActive} className="p-1 m-1 block" to="/about">About</NavLink>
                            <NavLink activeStyle={navActive} className="p-1 m-1 block" to="/services">Services</NavLink>
                            <NavLink activeStyle={navActive} className="p-1 m-1 block" to="/contact">Contact</NavLink>
                        </nav>
                    </div>
                    <div className="get-intouch px-12">
                        <h3 className="text-white font-bold text-xl pb-3 mt-1">Get In Touch</h3>
                        <ul className="text-white leading-7">
                            <li className="my-2">{faMap} <span className="ml-2">1234 Street Name, City Name, USA</span></li>
                            <li className="my-2">{faEnv} <span className="ml-2">you@domain.com</span></li>
                            <li className="my-2">{faPhn} <span className="ml-2">(123) 456-7890 - (123) 456-7890</span></li>
                        </ul>
                    </div>
                    <div className="social-icons px-12">
                        <h3 className="text-white font-bold text-xl pb-4 mt-1">Social Media</h3>
                        <ul className="text-white leading-7">
                            <li>{faFb} <span className="ml-2">Facebook</span></li>
                            <li>{faIn} <span className="ml-2">LinkedIn</span></li>
                            <li>{faInsta} <span className="ml-2">Instagram</span></li>
                            <li>{faTwit} <span className="ml-2">Twitter</span></li>
                        </ul>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;