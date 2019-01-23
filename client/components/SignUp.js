import React from 'react';
import {connect} from 'react-redux';
import {clickSubmitFunct} from '../actions';


class SignUpComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            description:'',
        }
        this.handleSignUp = this.handleSignUp.bind(this);
    }
    handleSignUp() {
        //Api call to check is username and password matches
        //this.props.clickSubmit(data.userId,data.userData)
        //catch alert wrong username or pw
    }
    render() {
        return(
            <div>
                <div>
                    <h1>Sign Up</h1>
                    <form onSubmit={(e) => {
                        e.preventDefault();
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
                    <h1>Sign In</h1>
                    <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                    <button onClick={() => this.props.handleSwap()}>Sign Up</button>
                </div>
            </div>
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

const SignUp = connect(mapStatetoProps,mapDispatchtoProps)(SignUpComp);
export default SignUp;
