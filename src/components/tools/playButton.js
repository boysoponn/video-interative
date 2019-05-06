import React from 'react';
import '../../css/animation.css'
import styled from 'styled-components'
  
class Hotspot extends React.Component {
  
  render(){
      return (
        <Play onClick={this.props.onClick}></Play>
  );
  }
}

export default Hotspot;
const Play = styled.a`
width: 80px;
height: 80px;
margin:30px;
background: none;
border:3px solid #fff;
border-radius: 50%;
position: relative;
display: block;
box-shadow: 0px 0px 25px 3px rgba(255, 0, 128, 0.8);
@media screen and (max-width: 740px) {
  width:50px;
  height:50px;
}
:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translateX(-40%) translateY(-50%);
    transform: translateX(-40%) translateY(-50%);
    transform-origin: center center;
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 25px solid #fff;
    z-index: 100;
    -webkit-transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
    transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
:before {
    content: "";
    position: absolute;
    width: 150%;
    height: 150%;
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    -webkit-animation: pulsate1 2s;
    animation: pulsate1 2s;
    -webkit-animation-direction: forwards;
    animation-direction: forwards;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: steps;
    animation-timing-function: steps;
    opacity: 1;
    border-radius: 50%;
    border: 5px solid rgba(255, 255, 255, .75);
    top: -26%;
    left: -26%;
    background: rgba(198, 16, 0, 0);
  }
`;
