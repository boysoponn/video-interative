import React from 'react';
import { Player  ,ControlBar} from 'video-react';
import '../css/interactive.css';
import '../css/animation.css';
import Video1 from '../video/tools.mp4';
import Video2 from '../video/N_01.mp4';
import Video3 from '../video/test4.mp4';
import Video4 from '../video/test6.mp4';
import Video5 from '../video/test7.mp4';
import Video6 from '../video/test8.mp4';
import Video7 from '../video/test9.mp4';
import Video8 from '../video/test1.mp4';
import Video9 from '../video/test3.mp4';
import TypeInteractive from './tools/typeInteractive';
import Controls from './tools/controls';
import styled from 'styled-components'

const choiceVideo={
  video1:{video:Video1,yes:"video2",no:"video3",interactive:'hotspot',yesText:'',noText:'',noTextRight:false,yesTextRight:false,yesTop:0,yesLeft:0,noTop:0,noLeft:0},
  video2:{video:Video2,yes:"video4",no:"video5",interactive:'text',yesText:'',noText:''},
  video3:{video:Video3,yes:"video6",no:"video7"},
  video4:{video:Video4,yes:"video8"},
  video5:{video:Video5,yes:"video8"},
  video6:{video:Video6,yes:"video9"},
  video7:{video:Video7,yes:"video9"},
  video8:{video:Video8},
  video9:{video:Video9},
};

class Interactive extends React.Component {
  state={
    show:"animated fadeIn",
    video:choiceVideo["video1"].video,
    yes:choiceVideo["video1"].yes,
    no:choiceVideo["video1"].no,
    interactive:choiceVideo["video1"].interactive
  }

  start=()=>{
    this.setState({
      classStart:'animated fadeOut'
    })
    this.refs.movie.play();
  }

  componentDidMount() {
    this.refs.movie.subscribeToStateChange(this.handleStateChange.bind(this));
  }
  
  handleStateChange(state) {
    this.setState({
      player: state,
      videoMuted:state.muted,
      videoPlay:state.paused,
      duration:state.duration-5,
      currentTime:state.currentTime
    });
  }

  play=()=>{this.refs.movie.play();}
  pause=()=>{this.refs.movie.pause();}
  rewind=()=>{this.refs.movie.replay(10);this.play();}
  forward=()=>{this.refs.movie.forward(10);}
  muted=()=>{this.refs.movie.muted=true}
  audio=()=>{this.refs.movie.muted=false}
  

  yes=()=>{
    this.setState({
      show:"animated fadeOut",     
    })
    setTimeout(this.changeVideo,2000)
  }

  changeVideo= () => {
    this.setState({
      video:choiceVideo[this.state.yes].video,  
      interactive:choiceVideo[this.state.yes].interactive,
      yes:choiceVideo[this.state.yes].yes,
      no:choiceVideo[this.state.yes].no,  
    })
    setTimeout(this.setFadeIn,2000)
  }
  
  setFadeIn=()=>{
    this.setState({
      show:"animated fadeIn",     
    })
  }

  render(){
    console.log(this.state.interactive)
      return (
      <div className="center animatedShow fadeIn">
        <Root>
          <div className="box">
            <Controls
              rewind={this.rewind}
              pause={this.pause}
              forward={this.forward}
              audio={this.audio}
              full={this.props.full}
              play={this.play}
              muted={this.muted}
              videoMuted={this.state.videoMuted}
              videoPlay={this.state.videoPlay}
            />
          </div>
            {this.state.currentTime<this.state.duration?null:
            <TypeInteractive
            show={this.state.show}
            yes={this.yes}
            interactive={this.state.interactive}
            yesTop={16}
            yesLeft={40}
            yesTextRight={false}
            noTop={50}
            noLeft={40}
            noTextRight={false}
            />
            }
          <Player
            ref="movie"
            autoPlay
            muted
            src={this.state.video}
            disableDefaultControls={true}
            playsInline
          > 
          <ControlBar disableCompletely={true} />
          </Player>
        </Root>
      </div>    
  );
  }
}

export default Interactive;
const Root = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;