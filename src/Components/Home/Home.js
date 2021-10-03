import React from 'react';
import { NavLink } from 'react-router-dom';
import animationOne from '../../images/hero-animation-01.svg';
import animationTwo from '../../images/hero-animation-02.svg';
import './Home.css';

const Home = () => {
    return (
        <div className="main">
            <section className="hero-area pt-28 pb-16">
                <div className="container mx-auto grid grid-cols-2 gap-4">
                    <div className="left-hero-area mt-16">
                        <h2 className="uppercase text-5xl font-bold text-white pb-6">Coders Camp Academy</h2>
                        <p className="text-lg text-white leading-7 pb-6">Holisticly procrastinate mission-critical convergence with reliable customer service.
                            Assertively underwhelm idea-sharing for impactful solutions.</p>
                        <NavLink to="/services">
                            <button className="header-btn shadow-2xl">Our Courses</button>
                        </NavLink>
                    </div>
                    <div className="right-hero-area block relative ml-4">
                        <img src={animationOne} width="180" className="animationOne" alt="AnimatedImage" />
                        <img src={animationTwo} className="animationTwo" alt="AnimatedImage" />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;