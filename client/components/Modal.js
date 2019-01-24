import React from 'react';
import { closeModalFunct, putFunct, clickNavFunct } from '../actions';
import { connect } from 'react-redux';


//Modal for tv and movie data
class ModalComp extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  //Adds the media to account page if logged in and not already added
  handleAdd(){
    if(this.props.loggedIn){
      let different = (this.props.userData.savedMedia.length === 0 || this.props.userData.savedMedia.every(
        media => media.type !== this.props.modalData.type || media.id !== this.props.modalData.id
      ))
      if(different){
        let data = this.props.userData.savedMedia.map( (media) => {
          return {type:media.type, id: media.id};
        });
        data.push({type:this.props.modalData.type, id:this.props.modalData.id});
        this.props.closeModal();
        this.props.putFunct(
          this.props.userData.user.accountName,
          this.props.userData.user.description,
          this.props.userData.user.userPhoto,
          data
        )
      }               
    }
    else{
      this.props.closeModal();
      this.props.clickNavFunct('login');
    }
  }
  //The user should be logged in to be able to access account page and remove data from account
  handleRemove(){
    let data = this.props.userData.savedMedia.map( media => {
      if(media.id !== this.props.modalData.id || media.type !== this.props.modalData.type)
        return({type:media.type, id:media.id})
    })
    this.props.closeModal();
    this.props.putFunct(
      this.props.userData.user.accountName,
      this.props.userData.user.description,
      this.props.userData.user.userPhoto,
      data
    )
  }

  render() {
    const path = 'https://image.tmdb.org/t/p/w185/';
    //Swaps between add and remove depending on if on daily page or account page
    const addRemove = () => {
      if(this.props.display === "daily")
        return (
          <span className="add" 
          onClick={() => this.handleAdd()}>
          +</span>       
        );
      else if(this.props.display === "page")
        return (<span className="add"
        onClick={() => this.handleRemove()}>-</span>)
    }
    return (
      <div id="myModal" className="modal" onClick={(e) => {
         if(e.target === e.currentTarget)
          this.props.closeModal();
      }
        }>
        <div className="modal-content">
          <div className="modal-header">
            {
              // + or - on the modal
              addRemove()
            }
            <span className="close" onClick={(e) => this.props.closeModal()}>&times;</span>
          </div>
          <div className="modal-body">
            {/* Display the poster, title and a description */}
            <img src={path+this.props.modalData.posterPath} alt=""></img>
            <h2>{this.props.modalData.title}</h2>
            <p>{this.props.modalData.overview}</p>
          </div>
          <div className="modal-footer">
            <h3>{this.props.modalData.type.toUpperCase()}</h3>
          </div>
        </div>
      </div>
    );
  }
}

//Where modal is being displayed, what is being displayed, if logged in, user's data
const mapStateToProps = (state, ownProps) => {
    return {
        modalData: state.modalData,
        display: state.display,
        userData: state.userData,
        loggedIn: state.loggedIn
    }
}

//Functions to close a modal, add or remove data from account, redirect
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        closeModal: () => {
          dispatch(closeModalFunct())
        },
        putFunct: (accountName,description,userPhoto,mediaObjs) => {
          dispatch(putFunct(accountName,description,userPhoto,mediaObjs))
        },
        clickNavFunct: (display) => {
          dispatch(clickNavFunct(display))
        }
    }
}

const Modal = connect(mapStateToProps, mapDispatchToProps)(ModalComp);
export default Modal;
