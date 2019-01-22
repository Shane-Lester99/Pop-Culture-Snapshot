import React from 'react';
import {connect} from 'react-redux';
import { clickNavFunct } from '../actions';


class NavbarComp extends React.Component {

    render() {

        return(
            <div>
                <h1>Snapshot</h1>
                <button onClick={this.props.clickNav('daily')}>Daily</button>
                <button onClick={this.props.clickNav('login')}>Login</button>
                <button onClick={
                    ()=> {
                        if(this.props.loggedIn)
                            this.props.clickNav('page')
                        else
                            this.props.clickNav('login')
                    }
                }>My Page</button>
            </div>
        );
    }
}

const mapStatetoProps = (state, ownProps) => {
    return {
        display: state.display,
        loggedIn: state.loggedIn
    }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        clickNav: (display) => {
            dispatch(clickNavFunct(display))
        }
    }
}

const Navbar = connect(mapStatetoProps,mapDispatchtoProps)(NavbarComp);
export default Navbar;



