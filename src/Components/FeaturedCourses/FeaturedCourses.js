import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './FeaturedCourses.css';

const FeaturedCourses = (props) => {
    const faUs = <FontAwesomeIcon icon={faUser} />
    const { title, author, img, languages, lessons, price, takenby } = props.featuredCourse;
    return (
        <div className="single-featured-service shadow-2xl">
            <img src={img} alt="" />
            <h2>{title}</h2>
            <h3 className="price">Price: ${price}</h3>
            <div className="overlay">
                <h3 className="text-textPink">{title}</h3>
                <p>Languages: {languages}</p>
                <p className="author">Trainer: {author}</p>
                <div className="grid grid-cols-2 gap-4 border-t-2 border-borderPink mt-2 pt-4">
                    <p className="text-left">Lessons: {lessons}</p>
                    <p className="text-right">{faUs} {takenby}</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCourses;