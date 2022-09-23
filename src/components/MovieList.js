import React from 'react';
import withFetch from './hoc/withFetch';
import ItemMovie from './ItemMovie';

const MovieList = ({ listMovie }) => {
    return (
        <ul className="movieList">
            {listMovie.map((item) => (
                <ItemMovie movie={item} key={item.id} />
            ))}
        </ul>
    );
};
const HOC = withFetch(MovieList)
export default HOC;