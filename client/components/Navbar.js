import React from 'react';
import {connect} from 'react-redux';
import { clickNavFunct, logOutFunct } from '../actions';

//Navagation bar
class NavbarComp extends React.Component {

    render() {
        //Swap between login and logout function
        const log = () => {
            if(!this.props.loggedIn)
                return(
                    <button onClick={() => this.props.clickNav('login')}>Login</button>
                );
            else{
                return(
                    <button onClick={() => this.props.logOut()}>Logout</button>
                );
            }
        }
        return(
            <div>
                <header id="header-wrap">
                  <nav id="primary-menu">
                    <span className="logo">PopSnapShot</span>
                    <ul>
                        {/* Buttons for Navagation */}
                        <button onClick={() => this.props.clickNav('daily')}>Snapshot</button>
                        <button onClick={
                            () => {
                                if(this.props.loggedIn)
                                    this.props.clickNav('page')
                                else
                                    this.props.clickNav('login')
                            }
                        }>My Page</button>
                        {
                            log()
                        }
                    </ul>
                  </nav>
                </header>
            </div>
        );
    }
}

//gets what is currently being display and if logged in
const mapStatetoProps = (state, ownProps) => {
    return {
        display: state.display,
        loggedIn: state.loggedIn
    }
}

//swap display and logout functions
const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        clickNav: (display) => dispatch(clickNavFunct(display)),
        logOut: () => dispatch(logOutFunct())
    }
}

const Navbar = connect(mapStatetoProps,mapDispatchtoProps)(NavbarComp);
export default Navbar;
