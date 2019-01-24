import React from 'react';
import Tv from './Tv';
import Movie from './Movie';
import Youtube from './Youtube';

//Display Daily top 10 for tv, movie and youtube
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
