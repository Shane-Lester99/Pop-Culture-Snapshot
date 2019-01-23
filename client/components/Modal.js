import React from 'react';
import { closeModalFunct } from '../actions';
import { connect } from 'react-redux';

class ModalComp extends React.Component {
  render() {
    const path = 'http://image.tmdb.org/t/p/w185/';
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
            <img src={path+this.props.modalData.posterPath} alt=""></img>
            <h2>{this.props.modalData.title}</h2>
            <p>{this.props.modalData.overview}</p>
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

const Modal = connect(mapStateToProps, mapDispatchToProps)(ModalComp);
export default Modal;
