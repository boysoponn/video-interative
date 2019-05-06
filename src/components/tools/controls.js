import React from 'react';
import './../../css/interactive.css';
import Audio from './image/audio.png'
import Forward from './image/forward.png'
import Mute from './image/mute.png'
import Pause from './image/pause.png'
import Rewind from './image/rewind.png'
import Play from './image/play.png'
import Full from './image/full.png'

class Controls extends React.Component {
  state={
  }
  
  render(){
      return (
      <div className="divIcon" >
       <img className="icon" alt="icon" onClick={this.props.rewind} src={Rewind}/>
       <img className="icon" alt="icon" onClick={this.props.videoPlay?this.props.play:this.props.pause} src={this.props.videoPlay?Play:Pause}/>
       <img className="icon" alt="icon" onClick={this.props.forward} src={Forward}/>
       <img className="icon" alt="icon" onClick={this.props.videoMuted?this.props.audio:this.props.muted} src={this.props.videoMuted?Mute:Audio}/>
       <img className="icon" alt="icon" onClick={this.props.full} src={Full}/>
      </div>    
  );
  }
}

export default Controls;


