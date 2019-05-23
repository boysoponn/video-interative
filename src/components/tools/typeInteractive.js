import React from 'react';
import Hotspot from './hotspot';
import Text from './text';

class TypeInteractive extends React.Component {
  state={
  }


  render(){
    return (
    !this.props.show?null:   
    <div className={"showInteractive "+this.props.show}>
    {this.props.interactive==='hotspot'?
    <Hotspot
    yes={this.props.yes}
    no={this.props.no}
    title={this.props.title}
    description={this.props.description}
    show={this.props.show}
    yesText="dfgdfg"
    noText="NOOOOOO"
    yesTop={this.props.yesTop}
    yesLeft={this.props.yesLeft}
    yesTextRight={this.props.yesTextRight}
    noTop={this.props.noTop}
    noLeft={this.props.noLeft}
    noTextRight={this.props.noTextRight}
    />
    : 
    this.props.interactive==='text'?
    <Text
    yes={this.props.yes}
    no={this.props.no}
    title={this.props.title}
    description={this.props.description}
    show={this.props.show}
    yesText="dfgdfg"
    noText="NOOOOOO"
    />
    :null
    }
    </div>
  );
  }
}

export default TypeInteractive;
