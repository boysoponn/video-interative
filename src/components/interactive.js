import React from 'react';
import { Player  ,ControlBar} from 'video-react';
import '../css/interactive.css';
import '../css/animation.css';
import Click from '../video/click.mp3';
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
import styled from 'styled-components'
import Controls from './tools/controls';
import Sound from 'react-sound';

const choiceVideo={
  video1:{video:Video1,yes:"video2",no:"video3",interactive:'text',yesText:'อยู่ไหว',noText:'อยูไม่ไหว'},
  video2:{video:Video2,flowVideo:"video6"},
  video3:{video:Video3,yes:"video4",no:"video5",interactive:'text',time:50,yesText:'เอา',noText:'ไม่เอา'},
  video4:{video:Video4,yes:"video6",no:"video5",interactive:'text',yesText:'เอา',noText:'ไม่เอา'},
  video5:{video:Video5,yes:"video8",interactive:'hotspot',},
  video6:{video:Video6,yes:"video9",interactive:'text',},
  video7:{video:Video7,yes:"video9",interactive:'hotspot',},
  video8:{video:Video8,interactive:'hotspot',},
  video9:{video:Video9,interactive:'hotspot',},
};

class Interactive extends React.Component {
  state={
    clickSound:Sound.status.STOPPED,
    show:"animated fadeIn",
    video:choiceVideo["video1"].video,
    yes:choiceVideo["video1"].yes,
    no:choiceVideo["video1"].no,
    yesText:choiceVideo["video1"].yesText,
    noText:choiceVideo["video1"].noText,
    interactive:choiceVideo["video1"].interactive,
    timeInteractive:5,
    duration:999,
    currentTime:0
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
      duration:state.duration-this.state.timeInteractive,
      currentTime:state.currentTime,
    });
    if(state.ended && this.state.flowVideo){
      // let flowVideo = this.state.flowVideo;
      // this.setState({
      // video:choiceVideo[flowVideo].video,  
      // interactive:choiceVideo[flowVideo].interactive,
      // yes:choiceVideo[flowVideo].yes,
      // no:choiceVideo[flowVideo].no,  
      // yesText:choiceVideo[flowVideo].yesText,
      // noText:choiceVideo[flowVideo].noText,
      // timeInteractive:choiceVideo[flowVideo].time,
      // duration:999,
      // currentTime:0,
      // show:null,
      // });
      // setTimeout(this.setFadeIn,10000);
    }
  }

  full=()=>{
    var elem = document.documentElement;
    if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
      if (elem.requestFullScreen) {
          elem.requestFullScreen();
      } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullScreen) {
          elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
      }
  } else {
      if (document.cancelFullScreen) {
          document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
      } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
      }
  }
  }
  play=()=>{this.playSound();this.refs.movie.play();}
  pause=()=>{this.playSound();this.refs.movie.pause();}
  rewind=()=>{this.play();this.playSound();this.refs.movie.replay(10);}
  forward=()=>{this.playSound();this.refs.movie.forward(10);}
  muted=()=>{this.playSound();this.refs.movie.muted=true; }
  audio=()=>{this.playSound();this.refs.movie.muted=false; }
  playSound=()=>{this.setState({clickSound:Sound.status.PLAYING})}
  stopSound=()=>{this.setState({clickSound:Sound.status.STOPPED})}

  end=()=>{
    alert("sdfgd")
  }

  yes=()=>{
    this.setState({
      show:"animated fadeOut",   
    })
    setTimeout(this.changeVideoYes,2000);
  }

  no=()=>{
    this.setState({
      show:"animated fadeOut",   
    })
    setTimeout(this.changeVideoNo,2000);
  }

  changeVideoYes = () => {
    this.setState({   
      show:null,
      video:choiceVideo[this.state.yes].video,  
      interactive:choiceVideo[this.state.yes].interactive,
      yes:choiceVideo[this.state.yes].yes,
      no:choiceVideo[this.state.yes].no,  
      yesText:choiceVideo[this.state.yes].yesText,
      noText:choiceVideo[this.state.yes].noText,
      timeInteractive:choiceVideo[this.state.yes].time,
      flowVideo:choiceVideo[this.state.yes].flowVideo?choiceVideo[this.state.yes].flowVideo:false,
      duration:999,
      currentTime:0,
    });
     setTimeout(this.setFadeIn,10000);
  }

  changeVideoNo = () => {
    this.setState({   
      show:null,
      video:choiceVideo[this.state.no].video,  
      interactive:choiceVideo[this.state.no].interactive,
      yes:choiceVideo[this.state.no].yes,
      no:choiceVideo[this.state.no].no,  
      yesText:choiceVideo[this.state.no].yesText,
      noText:choiceVideo[this.state.no].noText,
      timeInteractive:choiceVideo[this.state.no].time,
      flowVideo:choiceVideo[this.state.no].flowVideo?choiceVideo[this.state.no].flowVideo:false,
      duration:999,
      currentTime:0,
    })
     setTimeout(this.setFadeIn,10000);
  }
  
  setFadeIn=()=>{
    this.setState({
      show:"animated fadeIn",     
    });
  }


  render(){

      return (
      <div className="center animatedShow fadeIn">
        <Sound
          url={Click}
          playStatus={this.state.clickSound}
          onFinishedPlaying={this.stopSound}
        />
        <Root>
          <Block></Block>
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
            {this.state.currentTime<this.state.duration?null:
            <TypeInteractive
              show={this.state.show}
              yes={this.state.yes==='end'?this.end:this.yes}
              interactive={this.state.interactive}
              yesText={this.state.yesText}
              noText={this.state.noText}            
              no={this.state.no==='end'?this.end:this.no}
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

const Block = styled.div`
  height:100%;
  width: 100vw;
  position:absolute;
  z-index:5;
`;

