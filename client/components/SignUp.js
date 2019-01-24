import React from 'react';
import {connect} from 'react-redux';
import { signUpFunct} from '../actions';


class SignUpComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
        }
        this.handleSignUp = this.handleSignUp.bind(this);
    }
    //Validate username and password and get user data
    handleSignUp() {
        this.props.signUpFunct(
            this.state.username,
            this.state.password,
        )
    }
    render() {
        return(
            <div className="sign-swap"> {/* Sign Up display */}
                <div>
                    <h1>Sign Up</h1>
                    <form className="sign-form" onSubmit={(e) => {
                        e.preventDefault();
                        this.handleSignUp();
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
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
                <div className="swap"> {/* Ask if has account display */}
                    <h1>Sign In</h1>
                    <p>Already have an account? Click the sign in button to go to the sign in page! </p>
                    <button onClick={() => this.props.handleSwap()}>Click Here to Sign In</button>
                </div>
            </div>
        );
    }
}

//Handle swapping between sign in and sign up
const mapStatetoProps = (state, ownProps) => {
    return {
        handleSwap: ownProps.handleSwap
    }
}

//Validate username password
const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        signUpFunct: (username,password) => {
            dispatch(signUpFunct(username,password))
        }

    }
}

const SignUp = connect(mapStatetoProps,mapDispatchtoProps)(SignUpComp);
export default SignUp;
