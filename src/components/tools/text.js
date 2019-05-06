import React from 'react';
import  './../../css/text.css';
import './../../css/animation.css';
import Hotspot from './hotspot';

class Text extends React.Component {
  state={
  }


  render(){
    return (
    !this.props.show?null:    
    this.props.hotspot?
     <Hotspot/>
     : 
    <div className={"text animated "+this.props.show}>
        <div className="textBox">
            <p className="textTitle">{this.props.title}</p>
            <p className="textDescription">{this.props.description}</p>
            <button onClick={this.props.yes} className="textButton" >YES</button>
            <button onClick={this.props.no}className="textButton">NO</button>
        </div>
    </div>
  );
  }
}

export default Text;
