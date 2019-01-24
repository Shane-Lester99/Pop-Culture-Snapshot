import React from 'react';
import { clickBoxFunct } from '../actions';
import { connect } from 'react-redux';
import Modal from './Modal';
import YoutubeModal from './YoutubeModal';

//Account page
class PageComp extends React.Component{
    render() {
        //Return array of all media data
        const Media = this.props.userData.savedMedia.map( media =>{
            const path = 'https://image.tmdb.org/t/p/w185/';
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
        
        //Show modal and which modal
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
            <section>
                <h1 className="page-title">Saved Content</h1>
                <div className="media">
                {
                    //Displays all the media
                    Media
                }
                </div>
                {
                    //Checks if to display modal
                    showModal()
                }
            </section>
        );
    }
}


//Gets user data, if to show modal and which modal
const mapStatetoProps = (state, ownProps) => {
    return {
        userData: state.userData,
        showModal: state.showModal,
        modalDisplay: state.modalDisplay
    }
}

//pass media data to modal
const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        clickBox: (display,payload) => {
            dispatch(clickBoxFunct(display,payload))
        }
    }
}

const Page = connect(mapStatetoProps,mapDispatchtoProps)(PageComp);
export default Page;