import React from 'react';
import  './../../css/text.css'

class Text extends React.Component {
  state={
  }


  render(){
    return (
    <div className="text">
        <div className="textBox">
            <button onClick={this.props.yes} className="textButton" >{this.props.yesText}</button>
            <button onClick={this.props.no}className="textButton">{this.props.noText}</button>
        </div>
    </div>
  );
  }
}

export default Text;
