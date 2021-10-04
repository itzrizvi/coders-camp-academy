//Import CSS and FontAswesome Icons
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';
import './NotFound.css';

const NotFound = () => {
    // Declaring Font-Awesome with a variable
    const faSad = <FontAwesomeIcon icon={faSadCry} />
    return (
        <div>
            <div className="container mx-auto grid grid-cols-1 py-16">
                <h3 className="text-center font-bold text-textPink text-5xl mb-6">404</h3>
                <h3 className="text-center font-bold text-textPink text-5xl mb-6">Not Found!!!</h3>
                <h3 className="text-center font-bold text-textPink text-5xl mb-6">{faSad}</h3>
            </div>
        </div>
    );
};

export default NotFound;