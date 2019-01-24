import React from 'react';
import { clickBoxFunct } from '../actions';
import { connect } from 'react-redux';

class TvComp extends React.Component{
    render() {
        const path = 'https://image.tmdb.org/t/p/w185/';
        //Return array of tv objects
        const Tv = this.props.tvData.map(show =>
          <div className="snap-item" key={show.title}>
            <img
                src={path+show.posterPath}
                onClick={() => this.props.clickBox('tv',show)}
                alt="Tv Pic">
            </img>
          </div>
        );
        return (
          <section id="youtube">
            <div className="content-wrap">
              <div className="container">

                <h3>Tv</h3>
                {/* Side scrolling */}
                <div className="snap-items snap-scroll">
                  <button className="scroll-btn r" onClick={(elem) => elem.target.parentNode.scrollBy(150, 0)}>{">"}</button>
                  <button className="scroll-btn l" onClick={(elem) => elem.target.parentNode.scrollBy(-150, 0)}>{"<"}</button>
                  {
                    //Display all tv objects
                    Tv
                  }
                </div>
              </div>
            </div>
          </section>
        );
    }
}

//get tvdata 
const mapStateToProps = (state, ownProps) => {
    return {
        tvData: state.data.tvData,
    }
}

//pass tv data to modal
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clickBox: (display,payload) => {
            dispatch(clickBoxFunct(display,payload))
        }
    }
}

const Tv = connect(mapStateToProps,mapDispatchToProps)(TvComp);
export default Tv;
