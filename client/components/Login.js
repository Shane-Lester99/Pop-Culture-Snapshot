import React from 'react';
import {connect} from 'react-redux';
import {clickSubmitFunct} from '../actions';


class LoginComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
        }
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin() {
        //Api call to check is username and password matches
        //this.props.clickSubmit(data.userId,data.userData)
        //catch alert wrong username or pw
    }
    render() {
        return(
            <div>
                <input id="username" 
                    placeholder="Username"
                    onKeyPress={(e) => {
                        this.setState({
                            username:e.target.value
                        })
                        console.log(this.state.username)
                    }
                    }>
                </input>
                <input id="password"
                    placeholder="Password"
                    onKeyPress={(e) => {
                        this.setState({password:e.target.value});
                        console.log(this.state.password);
                        }
                    }>
                </input>
                <button onClick={(e) => this.handleUsername(e.keyCode)}>Login</button>
            </div>
        );
    }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        clickSubmit: (userId,userData) => {
            dispatch(clickSubmitFunct(userId,userData));
        }
    }
}

const Login = connect(null,mapDispatchtoProps)(LoginComp);
export default Login;