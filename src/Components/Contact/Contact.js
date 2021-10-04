// Import Font Awesome and CSS
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeadset, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
    // Font Awesome Icons in different Variable
    const faPhn = <FontAwesomeIcon icon={faPhone} />
    const faMap = <FontAwesomeIcon icon={faMapMarker} />
    const faEnv = <FontAwesomeIcon icon={faEnvelope} />
    const faChat = <FontAwesomeIcon icon={faHeadset} />

    return (
        // Contact Area Starts Here
        <div>
            <section className="hero-area pt-16 pb-16 mb-16">
                <div className="hero-bottom-shape"></div>
                <div className="container mx-auto grid grid-cols-1">
                    <h3 className="contact-title text-center font-bold text-white text-5xl">Get In Touch</h3>
                </div>
            </section>
            {/* Get In Touch Area Starts */}
            <section className="get-in-touch">
                <div className="card-grid container mx-auto grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-8 pt-8 mb-20">
                    <div className="card py-6 text-center shadow-2xl rounded-md border border-grayBorder">
                        <h2 className="text-textPink text-3xl mb-4">{faPhn}</h2>
                        <h3 className="text-navyBlue text-lg font-bold mb-2">Call Us</h3>
                        <p className="text-navyBlue text-md">+123 456-78900</p>
                    </div>
                    <div className="card py-6 text-center shadow-2xl rounded-md border border-grayBorder">
                        <h2 className="text-textPink text-3xl mb-4">{faMap}</h2>
                        <h3 className="text-navyBlue text-lg font-bold mb-2">Call Us</h3>
                        <p className="text-navyBlue text-md">+123 456-78900</p>
                    </div>
                    <div className="card py-6 text-center shadow-2xl rounded-md border border-grayBorder">
                        <h2 className="text-textPink text-3xl mb-4">{faEnv}</h2>
                        <h3 className="text-navyBlue text-lg font-bold mb-2">Call Us</h3>
                        <p className="text-navyBlue text-md">+123 456-78900</p>
                    </div>
                    <div className="card py-6 text-center shadow-2xl rounded-md border border-grayBorder">
                        <h2 className="text-textPink text-3xl mb-4">{faChat}</h2>
                        <h3 className="text-navyBlue text-lg font-bold mb-2">Call Us</h3>
                        <p className="text-navyBlue text-md">+123 456-78900</p>
                    </div>
                </div>
            </section>
            {/* Google Map Area */}
            <section className="google-map">
                <iframe className="w-full" title="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450937!2d144.953735315922!3d-37.817323442021234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sbd!4v1571030260624!5m2!1sen!2sbd" height="450" allowfullscreen=""></iframe>
            </section>
        </div>
    );
};

export default Contact;