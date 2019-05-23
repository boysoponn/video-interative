import React from 'react';
import './../../css/hotspot.css';
import './../../css/animation.css';
import styled from 'styled-components'
  
class Hotspot extends React.Component {
  
  render(){
      return (
        <div>
            <HotspotComponent top={this.props.yesTop} left={this.props.yesLeft}>
                <div className="item-inner">
                    <div className="slack"></div>
                </div>
                <DivText textRight={this.props.yesTextRight}>
                    <Text onClick={this.props.yes}>{this.props.yesText}</Text>                
                </DivText>
            </HotspotComponent>
            <HotspotComponent top={this.props.noTop} left={this.props.noLeft}>
                <div className="item-inner">
                    <div className="slack"></div>
                </div>
                <DivText textRight={this.props.noTextRight}>
                    <Text onClick={this.props.no}>{this.props.noText}</Text>                
                </DivText>
            </HotspotComponent>
        </div>
  );
  }
}

export default Hotspot;

const HotspotComponent = styled.div`
position: absolute;
top:${props => props.top}%;
left:${props => props.left}%;
`;

const DivText = styled.div`
position: absolute;
animation: fadeIn 2s ;
top: -30px;
left: ${props => props.textRight?'0':'50px'};
right: ${props => props.textRight?'50px':'0'};
`;

const Text = styled.p`
color:#fff;
font-size:50px
cursor:pointer;
`;