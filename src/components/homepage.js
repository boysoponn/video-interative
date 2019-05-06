import React from 'react';
import Intro from './intro';
import Interactive from './interactive';

class Homepage extends React.Component {
  state={
    showInteractive:false
  }
  showInteractive=()=>{
    this.setState({
      showInteractive:true
    })
    var elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
      }
    
  }
  render(){
      return (
      <div>
        {!this.state.showInteractive?
        <Intro onClick={this.showInteractive} />
        :
        <Interactive/>
        } 
      </div>    
  );
  }
}

export default Homepage;
