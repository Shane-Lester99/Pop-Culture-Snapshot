import React from 'react';
import { closeModalFunct, putFunct, clickNavFunct } from '../actions';
import { connect } from 'react-redux';

class YoutubeModalComp extends React.Component {

  constructor(props) {
    super(props);
    
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  //Checks if logged in and adds to account saved media if not saved already
  handleAdd(){
    if(this.props.loggedIn){
      let different = (this.props.userData.savedMedia.length === 0 ||this.props.userData.savedMedia.every(
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

  //Has to be logged in to use and removes media from account
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
    const path = 'https://www.youtube.com/embed/';
    //Could only add in daily page and remove on account page
    const addRemove = () => {
      if(this.props.display === "daily")
        return (<span className="add" onClick={() => this.handleAdd()}>+</span>);
      else if(this.props.display === "page")
        return (<span className="add" onClick={() => this.handleRemove()}>-</span>)
    }
    return (
      //Youtube modal with an embed video, video name, channel name and video description
      <div id="myModal" className="modal" onClick={(e) => {
         if(e.target === e.currentTarget)
          this.props.closeModal();
      }
        }>
        <div className="modal-content">
          <div className="modal-header">
            {
              addRemove()
            }
            <span className="close" onClick={(e) => this.props.closeModal()}>&times;</span>
          </div>
          <div className="modal-body">
            <iframe src={path + this.props.modalData.vidId} height="400" width="100%" allowFullScreen frameBorder="0" ></iframe>
            <h2><a className="youtube-link" href={"https://www.youtube.com/watch?v="+this.props.modalData.vidId}>{this.props.modalData.title}</a></h2>
            <h3><a className="youtube-link" href={"https://www.youtube.com/channel/"+this.props.modalData.channelId}>{this.props.modalData.channelTitle}</a></h3>
            <p>{this.props.modalData.description}</p>
          </div>
          <div className="modal-footer">
            <h3>{this.props.modalData.type.toUpperCase()}</h3>
          </div>
        </div>
      </div>
    );
  }
}

//Get data for modal, where the modal is being displayed, user data and if logged in
const mapStateToProps = (state, ownProps) => {
    return {
        modalData: state.modalData,
        display: state.display,
        userData: state.userData,
        loggedIn: state.loggedIn
    }
}

//Functions to close modal, save media and redirect on save or remove
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

const YoutubeModal = connect(mapStateToProps, mapDispatchToProps)(YoutubeModalComp);
export default YoutubeModal;
