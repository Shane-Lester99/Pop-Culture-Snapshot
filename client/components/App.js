import React from 'react';
import Daily from './Daily';
import {connect} from 'react-redux';
import Navbar from './Navbar';
import Login from './Login';
import Modal from './Modal';
import YoutubeModal from './YoutubeModal';


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
    const showModal = () => {
      if(this.props.showModal === true){
        switch(this.props.modalDisplay){
          case 'tv':
            return <Modal />
          case 'movie':
            return <Modal />
          case 'youtube':
            return <YoutubeModal />
          default:
            return null
        }
      }
      else {
        return null;
      }
    }
    return(
      <div className="site-wrapper">
        <Navbar />
        {
          display()
        }
        {
          showModal()
        }
      </div>
    );
  }
}

const mapStatetoProps = (state,ownProps) => {
  return {
    display: state.display,
    showModal: state.showModal,
    modalDisplay: state.modalDisplay
  }
}

const App = connect(mapStatetoProps)(AppComp);

export default App;
