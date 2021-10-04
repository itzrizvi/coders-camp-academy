// Importing Icons, Images and Css
import React from 'react';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import memberOne from '../../images/member-one.jpg';
import memberTwo from '../../images/member-two.jpg';
import memberThree from '../../images/member-three.jpg';
import memberFour from '../../images/member-four.jpg';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
    // Declaring Icons in variables
    const faFb = <FontAwesomeIcon icon={faFacebookF} />
    const faIn = <FontAwesomeIcon icon={faLinkedinIn} />
    const faInsta = <FontAwesomeIcon icon={faInstagram} />
    const faTwit = <FontAwesomeIcon icon={faTwitter} />
    return (
        // Team Member Area Starts
        <div>
            <section className="hero-area pt-16 pb-16 mb-16">
                <div className="hero-bottom-shape"></div>
                <div className="container mx-auto grid grid-cols-1">
                    <h3 className="text-center font-bold text-white text-5xl">ABOUT US</h3>
                </div>
            </section>
            {/* Members Area Starts Here */}
            <section className="team py-8">
                <div className="container mx-auto">
                    <div className="team-title text-center mb-12">
                        <h3 className="text-3xl relative uppercase font-semibold text-navyBlue">Our Monitoring Team</h3>
                    </div>
                    {/* Member Grid Area Starts Here */}
                    <div className="grid grid-cols-4 gap-6 py-12">
                        <div className="member shadow-2xl p-4 rounded-md text-center leading-7">
                            <img src={memberOne} className="rounded-md mb-4" alt="" />
                            <div className="details">
                                <h3 className="font-bold text-xl">Richard Ford</h3>
                                <h4 className="font-semibold text-md mb-4">CEO, Founder</h4>
                                <ul className="text-navyBlue m-4 text-lg team-social">
                                    <li className="inline m-2 p-2">{faFb}</li>
                                    <li className="inline m-2 p-2">{faIn}</li>
                                    <li className="inline m-2 p-2">{faInsta}</li>
                                    <li className="inline m-2 p-2">{faTwit}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="member shadow-2xl p-4 rounded-md text-center leading-7">
                            <img src={memberTwo} className="rounded-md mb-4" alt="" />
                            <div className="details">
                                <h3 className="font-bold text-xl">Carl Peterson</h3>
                                <h4 className="font-semibold text-md mb-4">Chief Executive</h4>
                                <ul className="text-navyBlue m-4 text-lg team-social">
                                    <li className="inline m-2 p-2">{faFb}</li>
                                    <li className="inline m-2 p-2">{faIn}</li>
                                    <li className="inline m-2 p-2">{faInsta}</li>
                                    <li className="inline m-2 p-2">{faTwit}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="member shadow-2xl p-4 rounded-md text-center leading-7">
                            <img src={memberThree} className="rounded-md mb-4" alt="MemberThree" />
                            <div className="details">
                                <h3 className="font-bold text-xl">Jesse Pinkman</h3>
                                <h4 className="font-semibold text-md mb-4">IT Expert</h4>
                                <ul className="text-navyBlue m-4 text-lg team-social">
                                    <li className="inline m-2 p-2">{faFb}</li>
                                    <li className="inline m-2 p-2">{faIn}</li>
                                    <li className="inline m-2 p-2">{faInsta}</li>
                                    <li className="inline m-2 p-2">{faTwit}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="member shadow-2xl p-4 rounded-md text-center leading-7">
                            <img src={memberFour} className="rounded-md mb-4" alt="MemberFour" />
                            <div className="details">
                                <h3 className="font-bold text-xl">Goergia Paul</h3>
                                <h4 className="font-semibold text-md mb-4">Marketing Officer</h4>
                                <ul className="text-navyBlue m-4 text-lg team-social">
                                    <li className="inline m-2 p-2">{faFb}</li>
                                    <li className="inline m-2 p-2">{faIn}</li>
                                    <li className="inline m-2 p-2">{faInsta}</li>
                                    <li className="inline m-2 p-2">{faTwit}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;