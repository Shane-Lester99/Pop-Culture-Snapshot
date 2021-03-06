import React from 'react';
import { clickBoxFunct } from '../actions';
import { connect } from 'react-redux';

class YoutubeComp extends React.Component{

  render() {
    //returns array of all youtube objects
    const Video = this.props.youtubeData.map(video =>
      <div className="snap-item" key={video.title}>
        <img
        src={video.thumbnail}
        onClick={() => this.props.clickBox('youtube',video)}
        alt="Youtube pic">
        </img>
      </div>
  );

  return (
      <section id="youtube">
        <div className="content-wrap">
          <div className="container">

            <h3>Youtube</h3>
            {/*Side scrolling*/}
            <div className="snap-items snap-scroll">
              <button className="scroll-btn r" onClick={(elem) => elem.target.parentNode.scrollBy(150, 0)}>{">"}</button>
              <button className="scroll-btn l" onClick={(elem) => elem.target.parentNode.scrollBy(-150, 0)}>{"<"}</button>

              {
                //Displays all youtube objs
                Video
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

//Daily youtube data
const mapStateToProps = (state, ownProps) => {
  return {
    youtubeData: state.data.youtubeData
  }
}

//Bring up modal
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clickBox: (display,payload) => {
      dispatch(clickBoxFunct(display,payload))
    }
  }
}

const Youtube = connect(mapStateToProps,mapDispatchToProps)(YoutubeComp);
export default Youtube;
