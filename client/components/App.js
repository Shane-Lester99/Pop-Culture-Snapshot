import React from 'react';
import Daily from './Daily';
import {connect} from 'react-redux';
import Navbar from './Navbar';
import Login from './Login';


class AppComp extends React.Component {
  
  render() {
    // save in a variable the result of a ternary expression
    const display = () => {
      switch(this.props.display) {
        case "daily":
          return <Daily />
        case "login":
          return <Login />
        default:
          return <Daily />
      }
    }
    return(
      <div>
        <Navbar />
        <Daily />
        
      </div>
    );
  }
}

const mapStatetoProps = (state,ownProps) => {
  return {
    display: state.display
  }
}

const App = connect(mapStatetoProps)(AppComp);

export default App;