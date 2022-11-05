import React from 'react';
import withColor from '../hoc/withColor';

const ItemMovie = ({ movie }) => {
    return (
        <>
            <li>
                <img className="image" src={movie.poster} alt={movie.title} />
                <span className="title">{movie.title}</span>
            </li>
        </>
    );
};

export default withColor(ItemMovie);