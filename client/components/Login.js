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
        this.handleUsername.bind(this);
        this.handlePassword.bind(this);
        this.handleLogin.bind(this);
    }
    handleUsername(e) {
        this.setState({
            username: e.value
        })
        console.log(this.state.username);
    }
    handlePassword(e) {
        this.setState({
            password:e.value
        })
        console.log(this.state.password);
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
                    onKeyDown={this.handleUsername}>
                </input>
                <input id="password"
                    placeholder="Password"
                    onKeyDown={this.handlePassword}>
                </input>
                <button onClick={this.handleLogin}>Login</button>
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