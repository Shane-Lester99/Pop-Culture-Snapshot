import React from 'react';
import {connect} from 'react-redux';
import {clickSubmitFunct} from '../actions';


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
        //Api call to check is username and password matches
        //this.props.clickSubmit(data.userId,data.userData)
        //catch alert wrong username or pw
    }
    render() {
        return(
            <section>
                <div>
                    <h1>Sign In</h1>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        console.log(this.state);
                    }}>
                        <input type="text" 
                            onChange={(e) => {
                                this.setState({username: e.target.value})
                            }}
                            placeholder="Username"
                        >
                        </input>
                        <input type="text" 
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
                    <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                    <button onClick={() => this.props.handleSwap()}>Sign Up</button>
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
        clickSubmit: (userId,userData) => {
            dispatch(clickSubmitFunct(userId,userData));
        }
        
    }
}

const SignIn = connect(mapStatetoProps,mapDispatchtoProps)(SignInComp);
export default SignIn;
