import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            signIn:true
        }
        this.handleSwap = this.handleSwap.bind(this);
    }

    handleSwap() {
        this.setState({signIn: !this.state.signIn});
    }
    render() {

        return(
            <section>
                {
                    this.state.signIn ? <SignIn handleSwap={this.handleSwap}/> : <SignUp handleSwap={this.handleSwap}/>
                }
            </section>
        );
    }
}

export default Login;
