import React from 'react';
import Daily from './Daily';
import {connect} from 'react-redux';
import Navbar from './Navbar';
import Login from './Login';
import Modal from './Modal';
import Youtube from './Youtube';
import YoutubeModal from './YoutubeModal';
import { getDataAsync } from '../actions';
import Page from './Page';


class AppComp extends React.Component {

  //Get daily data
componentDidMount () {
    this.props.getDataAsync();
  }

  render() {
    // decides which display to show
    const display = () => {
      switch(this.props.display) {
        case "daily":
          return <Daily />
        case "login":
          return <Login />
        case 'page':
          return <Page />
        default:
          return <Daily />
      }
    }
    //Should modal be shown and which
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
          //Displays the component
          display()
        }
        {
          //Checks if modal should display, which to display and display modal
          showModal()
        }
      </div>
    );
  }
}

//which display, should you show modal, which modal to display
const mapStatetoProps = (state,ownProps) => {
  return {
    display: state.display,
    showModal: state.showModal,
    modalDisplay: state.modalDisplay
  }
}

//Get daily data
const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    getDataAsync: () => {
      dispatch(getDataAsync())
    }
  }
}

const App = connect(mapStatetoProps,mapDispatchtoProps)(AppComp);

export default App;
