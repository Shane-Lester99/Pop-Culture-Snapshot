import React from 'react';
import { closeModalFunct } from '../actions';
import { connect } from 'react-redux';

class YoutubeModalComp extends React.Component {
  render() {
    const path = 'https://www.youtube.com/embed/';
    return (
      <div id="myModal" className="modal" onClick={(e) => {
         if(e.target === e.currentTarget)
          this.props.closeModel();
      }
        }>
        <div className="modal-content">
          <div className="modal-header">
            <span className="add">+</span>
            <span className="close" onClick={(e) => this.props.closeModel()}>&times;</span>
          </div>
          <div className="modal-body">
            <iframe src={path + this.props.modalData.vidId} height="400" width="100%" allowFullScreen frameBorder="0" ></iframe>
            <a href={"https://www.youtube.com/watch?v="+this.props.modalData.vidId}>{this.props.modalData.title}</a>
            <a href={"https://www.youtube.com/channel/"+this.props.modalData.channelId}>Channel Title</a>
            <p>{this.props.modalData.description}</p>
          </div>
          <div className="modal-footer">
            <h3>Footer</h3>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        modalData: state.modalData,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        closeModel: () => {
            dispatch(closeModalFunct())
        }
    }
}

const YoutubeModal = connect(mapStateToProps, mapDispatchToProps)(YoutubeModalComp);
export default YoutubeModal;
