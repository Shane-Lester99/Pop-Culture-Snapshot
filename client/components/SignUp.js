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
    handleSignUp() {
        this.props.signUpFunct(
            this.state.username,
            this.state.password,
        )
    }
    render() {
        return(
            <section>
                <div>
                    <h1>Sign Up</h1>
                    <form onSubmit={(e) => {
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
                        <input password="text" 
                            onChange={(e) => {
                                this.setState({password: e.target.value})
                            }}
                            placeholder="Password"
                        >
                        </input>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
                <div>
                    <h1>Sign In</h1>
                    <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                    <button onClick={() => this.props.handleSwap()}>Click Here to Sign In</button>
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
        signUpFunct: (username,password) => {
            dispatch(signUpFunct(username,password))
        } 
        
    }
}

const SignUp = connect(mapStatetoProps,mapDispatchtoProps)(SignUpComp);
export default SignUp;
