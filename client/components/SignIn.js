import React from 'react';
import {connect} from 'react-redux';
import {signInFunct} from '../actions';


class SignInComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
        }
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin() {
        this.props.signInFunct(this.state.username,this.state.password);
    }
    render() {
        return(
            <section>
                <div>
                    <h1>Sign In</h1>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        this.handleLogin();
                    }}>
                        <input type="text" 
                            onChange={(e) => {
                                this.setState({username: e.target.value})
                            }}
                            placeholder="Username"
                        >
                        </input>
                        <input type="password" 
                            onChange={(e) => {
                                this.setState({password: e.target.value})
                            }}
                            placeholder="Password"
                        >
                        </input>
                        <button type="submit">Sign In</button>
                    </form>
                </div>
                <div>
                    <h1>Sign Up</h1>
                    <p>
                        Don't have an account? Click the sign up button below and create a new account. Our users are able to save their favorite
                        daily topics and view them later!
                         
                    </p>
                    <button onClick={() => this.props.handleSwap()}>Click Here to Sign Up</button>
                </div>
            </section>
        );
    }
}

const mapStatetoProps = (state, ownProps) => {
    return {
        handleSwap: ownProps.handleSwap
    }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        signInFunct: (username, password) => {
            dispatch(signInFunct(username,password))
        }
        
    }
}

const SignIn = connect(mapStatetoProps,mapDispatchtoProps)(SignInComp);
export default SignIn;
