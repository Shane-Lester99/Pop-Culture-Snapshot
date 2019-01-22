import React from 'react';
import Tv from './Tv';
import Movie from './Movie'

class Daily extends React.Component{
    render() {
        return (
            <div>
                <Tv />
                <Movie />
            </div>
        );
    }
}

export default Daily;
