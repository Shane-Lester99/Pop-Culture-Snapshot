import React from 'react';
import { clickBoxFunct } from '../actions';
import { connect } from 'react-redux';

class TvComp extends React.Component{
    render() {
        const path = 'http://image.tmdb.org/t/p/w185/';
        const Tv = this.props.dataTv.map(show => 
            <img 
                src={path+show.posterPath} 
                onClick={this.props.clickBox('tv',show)}
                alt="Show Pic"
                key={show.title}> 
            </img>
        );
        return (
            <div>
                <h1>Tv</h1>
                {
                    Tv
                }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state.display)
    return {
        dataTv: state.data.dataTv,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clickBox: (display,payload) => {
            dispatch(clickBoxFunct(display,payload))
        }
    }
}

const Tv = connect(mapStateToProps,mapDispatchToProps)(TvComp);
export default Tv;