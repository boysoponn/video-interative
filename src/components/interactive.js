import React from 'react';
import { Player  ,ControlBar} from 'video-react';
import '../css/interactive.css';
import '../css/animation.css';
import Video1 from '../video/test2.mp4';
import Video2 from '../video/test5.mp4';
import Video3 from '../video/test4.mp4';
import Video4 from '../video/test6.mp4';
import Video5 from '../video/test7.mp4';
import Video6 from '../video/test8.mp4';
import Video7 from '../video/test9.mp4';
import Video8 from '../video/test1.mp4';
import Video9 from '../video/test3.mp4';
import Text from './tools/text';
import Controls from './tools/controls';

const choiceVideo={
  video1:{video:Video1,title:"title1",decription:"decription1",yes:"video2",no:"video3"},
  video2:{video:Video2,title:"title2",decription:"decription2",yes:"video4",no:"video5",hotspot:true},
  video3:{video:Video3,title:"title3",decription:"decription3",yes:"video6",no:"video7"},
  video4:{video:Video4,title:"title4",decription:"decription4",yes:"video8"},
  video5:{video:Video5,title:"title5",decription:"decription5",yes:"video8"},
  video6:{video:Video6,title:"title6",decription:"decription6",yes:"video9"},
  video7:{video:Video7,title:"title7",decription:"decription7",yes:"video9"},
  video8:{video:Video8,title:"title8",decription:"decription8"},
  video9:{video:Video9,title:"title9",decription:"decription9"},
};

class Interactive extends React.Component {
  state={
    video:choiceVideo["video1"].video,
    title:choiceVideo["video1"].title,
    description:choiceVideo["video1"].decription,
    yes:choiceVideo["video1"].yes,
    no:choiceVideo["video1"].no
  }

  componentDidMount() {
    this.refs.movie.subscribeToStateChange(this.handleStateChange.bind(this));
  }
  
  handleStateChange(state) {
    this.setState({
      player: state,
      videoMuted:state.muted,
      videoPlay:state.paused
    });
  }

  play=()=>{this.refs.movie.play();}
  pause=()=>{this.refs.movie.pause();}
  rewind=()=>{this.refs.movie.replay(10);this.play();}
  forward=()=>{this.refs.movie.forward(10);}
  muted=()=>{this.refs.movie.muted=true}
  audio=()=>{this.refs.movie.muted=false}
  full=()=>{
    
  }
  
  start=()=>{
    this.setState({
      classStart:'animated fadeOut'
    })
    this.refs.movie.play();
  }

  yes=()=>{
    this.setState({
      show:"fadeOut",
    })
    setTimeout(this.changeVideo,2000)
  }

  changeVideo= () => {
    this.setState({
      video:choiceVideo[this.state.yes].video,
      title:choiceVideo[this.state.yes].title,
      description:choiceVideo[this.state.yes].decription,
      yes:choiceVideo[this.state.yes].yes,
      no:choiceVideo[this.state.yes].no,
      hotspot:choiceVideo[this.state.yes].hotspot
    })
  }

  videoEnded=()=>{
    this.setState({
      show:"fadeIn"
    })
  }
  
  render(){
      return (
      <div className="center animatedShow fadeIn">
        <div className="root">
          <div className="box">
            <Controls
              rewind={this.rewind}
              pause={this.pause}
              forward={this.forward}
              audio={this.audio}
              full={this.full}
              play={this.play}
              muted={this.muted}
              videoMuted={this.state.videoMuted}
              videoPlay={this.state.videoPlay}
            />
            </div>
          {this.state.yes==='video8' ||this.state.yes==='video9'?null:
            <Text
            show={this.state.show}
            title={this.state.title}
            description={this.state.description}
            yes={this.yes}
            hotspot={this.state.hotspot}
            />
          }
            <Player
              ref="movie"
              autoPlay
              isFullscreen
              src={this.state.video}
              disableDefaultControls={true}
              onEnded={this.videoEnded}
            > 
            <ControlBar disableCompletely={true} />
            </Player>
        </div>
      </div>    
  );
  }
}

export default Interactive;
