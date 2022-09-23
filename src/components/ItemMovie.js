import React from 'react';

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

export default ItemMovie;