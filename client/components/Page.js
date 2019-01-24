import React from 'react';
import { clickBoxFunct } from '../actions';
import { connect } from 'react-redux';
import Modal from './Modal';
import YoutubeModal from './YoutubeModal';

class PageComp extends React.Component{
    render() {
        const Media = this.props.userData.savedMedia.map( media =>{
            const path = 'http://image.tmdb.org/t/p/w185/';
            if(media.type === "movie" || media.type === "tv"){
                return(
                    <div className="snap-item" key={media.title}>
                        <img
                        src={path+media.posterPath}
                        onClick={() => this.props.clickBox(media.type,media)}
                        alt="Media Pic">
                        </img>
                    </div>
                );
            }
            else{
                return(
                    <div className="snap-item" key={media.title}>
                        <img
                        src={media.thumbnail}
                        onClick={() => this.props.clickBox('youtube',media)}
                        alt="Youtube Pic">
                        </img>
                    </div>
                );
            }
        })
        
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
            else{
                return null;
            }
        }
        return(
            <div>
                <img src={this.props.userData.user.userPhoto} alt="PHOTO"></img>
                <h1>{this.props.userData.user.accountName}</h1>
                <p>{this.props.userData.user.description}</p>
                {
                    Media
                }
                {
                    showModal()
                }
            </div>
        );
    }
}

const mapStatetoProps = (state, ownProps) => {
    return {
        userData: state.userData,
        showModal: state.showModal,
        modalDisplay: state.modalDisplay
    }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        clickBox: (display,payload) => {
            dispatch(clickBoxFunct(display,payload))
        }
    }
}

const Page = connect(mapStatetoProps,mapDispatchtoProps)(PageComp);
export default Page;