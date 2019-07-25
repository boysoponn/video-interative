import React from 'react';
import { Player  ,ControlBar} from 'video-react';
import {Redirect} from 'react-router-dom';
import '../css/interactive.css';
import '../css/animation.css';
import Video1 from '../video/v1m.mp4';
import Video2 from '../video/v2m.mp4';
import Video3 from '../video/v3m.mp4';
import Video4 from '../video/v4m.mp4';
import Video5 from '../video/v5m.mp4';
import Video6 from '../video/v6m.mp4';
import Video7 from '../video/v7m.mp4';
import Video8 from '../video/v8m.mp4';
import Video9 from '../video/v9m.mp4';
import Video10 from '../video/v10m.mp4';
import Video11 from '../video/v11m.mp4';
import Video12 from '../video/v12m.mp4';
import Video13 from '../video/v13m.mp4';
import TypeInteractive from './tools/typeInteractive';
import styled from 'styled-components'
import Controls from './tools/controls';

const choiceVideo={
  video1:{video:Video3,yes:"video2",no:"video3",interactive:'text',yesText:'อยู่ไหว',noText:'อยู่ไม่ไหว'},
  video2:{video:Video2,flowVideo:"video6"},
  video3:{video:Video3,yes:"video4",no:"video5",interactive:'text',yesText:'เอา',noText:'ไม่เอา'},
  video4:{video:Video4,flowVideo:"video6"},
  video5:{video:Video5,flowVideo:"video6"},
  video6:{video:Video6,yes:"video7",no:'video8',interactive:'text',yesText:'อ่าน',noText:'ไม่อ่าน'},
  video7:{video:Video7,yes:"video9",no:'video10',interactive:'text',yesText:'โอน',noText:'ไม่โอน'},
  video8:{video:Video8,yes:"video9",no:'video10',interactive:'text',yesText:'โอน',noText:'ไม่โอน'},
  video9:{video:Video9,flowVideo:"video11"},
  video10:{video:Video10,flowVideo:"video11"},
  video11:{video:Video11,yes:"video12",no:'video13',interactive:'text',yesText:'หยิบเงิน',noText:'ไม่หยิบเงิน'},
  video12:{video:Video12,end:true},
  video13:{video:Video13,end:true},
};

class interactiveDesktop extends React.Component {
  state={
    video:choiceVideo["video1"].video,
    yes:choiceVideo["video1"].yes,
    no:choiceVideo["video1"].no,
    yesText:choiceVideo["video1"].yesText,
    noText:choiceVideo["video1"].noText,
    interactive:choiceVideo["video1"].interactive,
    timeInteractive:5,
    show:null
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
    if(this.state.currentTime < this.state.duration){
      this.setState({
        show:"animated fadeIn"
      })
    }
    if(state.ended && this.state.flowVideo){
      this.setState({
        show:"animated fadeOut",   
        answer:this.state.flowVideo
      })
      setTimeout(this.changeVideo,2000);
    }
    if(state.ended && this.state.toend){
      setTimeout(this.end,2000);
    }
  }

  start=()=>{
    this.refs.movie.muted=false;
    this.refs.movie.play(); 
    this.setState({
      start:true
    })
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
  play=()=>{this.refs.movie.play();}
  pause=()=>{this.refs.movie.pause();}
  rewind=()=>{this.play();this.refs.movie.replay(10);}
  forward=()=>{this.refs.movie.forward(10);}
  muted=()=>{this.refs.movie.muted=true; }
  audio=()=>{this.refs.movie.muted=false; }

  yes=()=>{
    this.setState({
      show:"animated fadeOut",   
      answer:this.state.yes
    })
    setTimeout(this.changeVideo,2000);
  }

  no=()=>{
    this.setState({
      show:"animated fadeOut",   
      answer:this.state.no
    })
    setTimeout(this.changeVideo,2000);
  }

  changeVideo = () => {
    this.setState({   
      show:null, 
      video:choiceVideo[this.state.answer].video,  
      interactive:choiceVideo[this.state.answer].interactive,
      yes:choiceVideo[this.state.answer].yes,
      no:choiceVideo[this.state.answer].no,  
      yesText:choiceVideo[this.state.answer].yesText,
      noText:choiceVideo[this.state.answer].noText,
      timeInteractive:choiceVideo[this.state.answer].time?choiceVideo[this.state.answer].time:5,
      flowVideo:choiceVideo[this.state.answer].flowVideo?choiceVideo[this.state.answer].flowVideo:false,
      toend:choiceVideo[this.state.answer].end?choiceVideo[this.state.answer].end:false,
    });
     setTimeout(this.setFadeIn,10000);
  }
  
  setFadeIn=()=>{
    this.setState({
      show:"animated fadeIn",     
    });
  }

  end =()=>{
    this.setState({
      end:true
    });
  }

  back=()=>{
    this.setState({
      back:true
    });
  }

  again=()=>{
    window.location.reload();
  }

  renderRedirect = () => {
    if (this.state.back) {
      return <Redirect to='/' />
    }
    if (this.state.again) {
      return <Redirect to='/interactive' />
    }
  }

  render(){
      return (
      <div className="center animatedShow fadeIn">
        {this.renderRedirect()}            
        <Root>
        {this.state.start?
        <Div>
          {!this.state.end?
            <DivControl>
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
                    interactive={this.state.interactive}
                    yesText={this.state.yesText}
                    noText={this.state.noText}                
                    yes={this.yes}
                    no={this.no}   
                    yesTop={20}
                    yesLeft={50}
                    noTop={50}
                    noLeft={20 }
                  />
                  } 
              </DivControl>
              :
              <Start>
                <p onClick={this.back} className="lineAnimation ">กลับหน้าแรก</p>
                <p>&nbsp;&nbsp;&nbsp;</p>
                <p onClick={this.again} className="lineAnimation ">เล่นอีกครั้ง</p>
              </Start>
              }
              </Div>
              :
              <Start>
                <p onClick={this.start} className="lineAnimation ">เริ่มต้น</p>
              </Start>
            }
          <Player
            ref="movie"
            autoPlay={this.state.start}
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

export default interactiveDesktop;

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
const Div = styled.div`
display: contents;
`;

const DivControl = styled.div`
height: 100%;
width: 100vw;
position: absolute;
z-index: 2;
`;

const Start = styled.div`
height: 100%;
width: 100vw;
position: absolute;
z-index: 999;
display: flex;
justify-content: center;
align-items: center;
`;