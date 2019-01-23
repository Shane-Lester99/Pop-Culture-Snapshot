import React from 'react';
import Tv from './Tv';
import Movie from './Movie';
import Youtube from './Youtube';

class Daily extends React.Component{
    render() {
        return (
            <div>
                <Tv />
                <Movie />
                <Youtube />
            </div>
        );
    }
}

export default Daily;
