import React from 'react';
import {connect} from 'react-redux';
import { clickNavFunct } from '../actions';


class NavbarComp extends React.Component {

    render() {

        return(
            <div>
                <header id="header-wrap">
                  <nav id="primary-menu">
                    <span className="logo">PopSnapShot</span>
                    <ul>
                      <button onClick={() => this.props.clickNav('daily')}>Snap shot</button>
                      <button onClick={() => this.props.clickNav('login')}>Login</button>
                      <li onClick={
                          () => {
                              if(this.props.loggedIn)
                                  this.props.clickNav('page')
                              else
                                  this.props.clickNav('login')
                          }
                      }>Login</li>
                    </ul>
                  </nav>
                </header>
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
