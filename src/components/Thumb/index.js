import React from 'react';
import PropTypes from "prop-types";

// Routing
import { Link } from 'react-router-dom';

// Styles
import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable }) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt='movie-thumb' />
            </Link> 
        ): (
            <Image src={image} alt='movie-thumb' />
        )}
    </div>
);

Thumb.propTypes = {
    image: PropTypes.string,
    movieid: PropTypes.number,
    clickable: PropTypes.bool,
}

export default Thumb;