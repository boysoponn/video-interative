import React from 'react';
import './../../css/animation.css';
import styled from 'styled-components'
  
class Hotspot extends React.Component {
  
  render(){
      return (
        <div >
            <HotspotComponent top={this.props.yesTop} left={this.props.yesLeft}>
                <Slack/>
                <DivText textRight={this.props.yesTextRight}>
                    <Text onClick={this.props.yes}>{this.props.yesText}</Text>                
                </DivText>
            </HotspotComponent>
            <HotspotComponent top={this.props.noTop} left={this.props.noLeft}>
                    <Slack/>
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
position: absolute
top:${props => props.top}%;
left:${props => props.left}%;
`;

const Text = styled.p`
color:#fff;
width: 450px;
font-size:70px
cursor:pointer;
-webkit-transition: 0.2s; 
transition:  0.2s;
@media screen and (max-width: 1024px) and (min-width : 768px){
    width: 200px;
    font-size:25px;
  }
  @media screen and (max-width: 767px) and (min-width: 320px) {
    width: 80px;
    font-size:16px;
  }
  @media screen and (max-width: 320px) {
    width: 72px;
    font-size:12px;
  }
`;

const DivText = styled.div`
position: absolute;
animation: fadeIn 2s ;
top: -45px;
left: ${props => props.textRight?'-450px':'80px'};
    :hover ${Text}{
        transform: scale(1.1);
    }
    @media screen and (max-width: 768px){
        top: -20px;
        left: ${props => props.textRight?'-200px':'25px'};
    }
    @media screen and (min-width: 769px) and (max-width: 1024px){
        top: -10px;
        left: ${props => props.textRight?'-200px':'25px'};
    }
    @media screen and (max-width: 320px) {
        top: -5px;
        left: ${props => props.textRight?'-90px':'22px'};
    }
`;

const Slack = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: relative;
    background-color: #fff;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, .2);
    :before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        content: "";
        display: block;
        border: 4px solid #fff;
        box-shadow: inset 0 0 4px 2px rgba(0, 0, 0, .2), 0 0 4px 2px rgba(0, 0, 0, .2);
        animation: slack 400ms linear infinite;
        animation-direction: alternate;
      }
        @media screen and (max-width: 768px){
            width: 8px;
            height: 8px;
            :before{
                width: 16px;
                height: 16px; 
                border: 2px solid #fff;
            }
        }
        @media screen and (min-width: 769px) and (max-width: 1024px){
            width: 12px;
            height: 12px;
            :before{
                width: 24px;
                height: 24px; 
                border: 3px solid #fff;
            }
        }
`;
