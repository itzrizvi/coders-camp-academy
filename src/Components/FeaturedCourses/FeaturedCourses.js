// Importing FontAwesome and CSS
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './FeaturedCourses.css';

const FeaturedCourses = (props) => {
    // Declaring Font Awesome Icon in a Variable
    const faUs = <FontAwesomeIcon icon={faUser} />
    // Destructurig Data From Props
    const { title, author, img, languages, lessons, price, takenby } = props.featuredCourse;
    return (
        // Showing Four Items As Featured
        <div className="single-featured-service shadow-2xl">
            <img src={img} alt="Course_Image" />
            <h2>{title}</h2>
            <h3 className="price">Price: ${price}</h3>
            <div className="overlay">
                <h3 className="text-textPink">{title}</h3>
                <p>Languages: {languages}</p>
                <p className="author">Trainer: {author}</p>
                <div className="grid grid-cols-2 gap-4 border-t-2 border-borderPink mt-2 pt-4">
                    <p className="text-left"><span className="text-textPink">Lessons:</span> {lessons}</p>
                    <p className="text-right"><span className="text-textPink">{faUs}</span> {takenby}</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCourses;