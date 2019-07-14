import React from 'react';
import styled from 'styled-components'
import Audio from './image/audio.png'
import Forward from './image/forward.png'
import Mute from './image/mute.png'
import Pause from './image/pause.png'
import Rewind from './image/rewind.png'
import Play from './image/play.png'
import Full from './image/full.png'
import Setting from './image/setting.png'

class Controls extends React.Component {
  state={
  }
  
  render(){
      return (
        <Box>
          <SetIcon>
            <Icons alt="icon" src={Setting}/>
            <DivIcon>
              <Icon alt="icon" onClick={this.props.rewind} src={Rewind}/>
              <Icon alt="icon" onClick={this.props.videoPlay?this.props.play:this.props.pause} src={this.props.videoPlay?Play:Pause}/>
              <Icon alt="icon" onClick={this.props.forward} src={Forward}/>
              <Icon alt="icon" onClick={this.props.videoMuted?this.props.audio:this.props.muted} src={this.props.videoMuted?Mute:Audio}/>
              <Icon alt="icon" onClick={this.props.full} src={Full}/>          
            </DivIcon>
          </SetIcon> 
        </Box>
  );
  }
}

export default Controls;

const DivIcon = styled.div`
  animation:fadeIn 1s;
  display:none;
  pointer-events: none;
  @media screen and (max-width: 1024px) {
    margin-right:70px;
  }
`;

const Box = styled.div`
  z-index: 100;
  position: absolute;
  right: 20px;
  bottom:100px;
  @media screen and (max-width: 1024px){
    right: 0px;
    bottom: 0px;
  }
`;

const Icon = styled.img`
  width:50px;
  cursor:pointer;
  margin: 5px;
  padding: 10px;
  border-radius: 50%; 
  :hover{
    background-color: rgba(0, 0, 0, 0.2);  
    transform: scale(1.1);    
  }
  @media screen and (max-width: 576px) {
    width:40px;
  }
`;

const Icons = styled.img`
  width:50px;
  cursor:pointer;
  margin: 5px;
  @media screen and (max-width: 576px) {
    width:20px;
  }
`;

const SetIcon = styled.div`
padding: 10px;
margin: 10px;
border-radius: 50%;
background-color: rgba(0,0,0,0.7);
  :hover{
    border-radius:20px;
  }
  :hover ${DivIcon}{
    display:block;
    pointer-events: all;
  }
  :hover ${Icons}{
    display:none;
  }
  @media screen and (max-width: 576px) {
    padding:0;
  }
`;
