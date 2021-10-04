// Importing Hooks for Data
import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Services.css';

const Services = () => {
    // Using State Hooks For fetching data
    const [courses, setCourses] = useState([]);
    // Using useEffect Hook
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    return (
        <div>
            {/* Hero Banner Area */}
            <section className="hero-area pt-16 pb-16 mb-16">
                <div className="hero-bottom-shape"></div>
                <div className="container mx-auto grid grid-cols-1">
                    <h3 className="text-center font-bold text-white text-5xl">All Services</h3>
                </div>
            </section>
            {/* All Services Maping For Each Data */}
            <section className="all-services pt-8 pb-24">
                <div className="container mx-auto grid grid-cols-4 gap-8">
                    {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Services;