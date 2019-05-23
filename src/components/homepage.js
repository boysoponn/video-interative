import React from 'react';
import Intro from './intro';
import Interactive from './interactive';

class Homepage extends React.Component {
  state={
    showInteractive:false,
    fullScreen:false
  }
  showInteractive=()=>{
    this.setState({
      showInteractive:true
    })
    this.full();
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
  render(){
      return (
      <div>
        {!this.state.showInteractive?
        <Intro onClick={this.showInteractive} />
        :
        <Interactive  full={this.full}/>
        } 
      </div>    
  );
  }
}

export default Homepage;
