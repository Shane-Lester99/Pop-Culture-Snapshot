import React from 'react';
import { clickBoxFunct } from '../actions';
import { connect } from 'react-redux';

class MoviesComp extends React.Component{
    render() {
        const path = 'http://image.tmdb.org/t/p/w185/';;
        const Movie = this.props.dataMovie.map(movie => 
            <img 
                src={path+movie.posterPath}
                onClick={this.props.clickBox('movie',movie)}
                alt="Movie Pic"
                key={movie.title}>
            </img>
        );
        return (
            <div>
                <h1>Movies</h1>
                {
                    Movie
                }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state.display)
    return {
        dataMovie: state.data.dataMovie
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clickBox: (display,payload) => {
            dispatch(clickBoxFunct(display,payload))
        }
    }
}

const Movie = connect(mapStateToProps,mapDispatchToProps)(MoviesComp);
export default Movie;
