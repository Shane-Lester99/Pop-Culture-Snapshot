import React from 'react';
import { clickBoxFunct } from '../actions';
import { connect } from 'react-redux';

class MoviesComp extends React.Component{

  render() {
    const path = 'https://image.tmdb.org/t/p/w185/';
    //Returns array of movie objs
    const Movie = this.props.movieData.map(movie =>
      <div className="snap-item" key={movie.title}>
        <img
        src={path+movie.posterPath}
        onClick={() => this.props.clickBox('movie',movie)}
        alt="Movie Pic">
        </img>
      </div>
  );
  return (
      <section id="youtube">
        <div className="content-wrap">
          <div className="container">

            <h3>Movies</h3>
            {/* Side Scrolling */}
            <div className="snap-items snap-scroll">
              <button className="scroll-btn r" onClick={(elem) => elem.target.parentNode.scrollBy(150, 0)}>{">"}</button>
              <button className="scroll-btn l" onClick={(elem) => elem.target.parentNode.scrollBy(-150, 0)}>{"<"}</button>
              {
                //Display all movie objs
                Movie
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

//Movie data
const mapStateToProps = (state, ownProps) => {
  return {
    movieData: state.data.movieData
  }
}

//Pass movie data to modal
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clickBox: (display,payload) => {
      dispatch(clickBoxFunct(display,payload))
    }
  }
}

const Movie = connect(mapStateToProps,mapDispatchToProps)(MoviesComp);
export default Movie;
