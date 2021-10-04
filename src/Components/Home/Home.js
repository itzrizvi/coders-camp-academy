// Importing Hooks, Navlink, Svg Files, Css and Component
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import animationOne from '../../images/hero-animation-01.svg';
import animationTwo from '../../images/hero-animation-02.svg';
import FeaturedCourses from '../FeaturedCourses/FeaturedCourses';
import './Home.css';

const Home = () => {
    // Setting Up Data with UseState Hook
    const [featuredCourses, setFeaturedCourses] = useState([]);
    // Fetching Data for Dynamic UI
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setFeaturedCourses(data));
    }, []);

    return (
        <div className="main">
            {/* Hero Banner Area */}
            <section className="hero-area pt-28 pb-16">
                <div className="hero-bottom-shape"></div>
                <div className="container mx-auto grid grid-cols-2 gap-4">
                    <div className="left-hero-area mt-16">
                        <h2 className="uppercase text-5xl font-bold text-white pb-6">Coders <span className="text-textPink">Camp</span> Academy</h2>
                        <p className="text-lg text-white leading-7 pb-6">Holisticly procrastinate mission-critical convergence with reliable customer service.
                            Assertively underwhelm idea-sharing for impactful solutions.</p>
                        <NavLink to="/services">
                            <button className="header-btn shadow-2xl">Our Courses</button>
                        </NavLink>
                    </div>
                    <div className="right-hero-area block relative ml-4">
                        {/* Animated SVG Files */}
                        <img src={animationOne} width="180" className="animationOne" alt="AnimatedImage" />
                        <img src={animationTwo} className="animationTwo" alt="AnimatedImage" />
                    </div>
                </div>
            </section>
            <section className="featured-services pt-8 pb-24">
                <div className="featured-title container mx-auto text-center py-16">
                    <h3 className="font-bold text-3xl uppercase text-navyBlue relative">Featured Services</h3>
                </div>
                <div className="container mx-auto grid grid-cols-4 gap-8">
                    {/* Slicing then Mapping the Array of all Services for Showing only 4 Featured Items to Home */}
                    {
                        featuredCourses.slice(0, 4).map(featuredCrs => <FeaturedCourses key={featuredCrs.id} featuredCourse={featuredCrs}></FeaturedCourses>)
                    }
                </div>
            </section>

        </div>
    );
};

export default Home;