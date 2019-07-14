import React from 'react';
import styled from 'styled-components'

class Text extends React.Component {
 render(){
    return (
    <DivText>
        <TextBox onClick={this.props.yes}>
            <TextButton>{this.props.yesText}</TextButton>
        </TextBox>
        <TextBox onClick={this.props.no}>
            <TextButton>{this.props.noText}</TextButton>
        </TextBox>
    </DivText>
  );
  }
}

export default Text;

const DivText = styled.div`
  background: none;
  position:absolute;
  z-index:5;
  display:flex;
  width:100%;
  height: 100%;
`;

const TextButton = styled.p`
  font-size: 80px;
  color: #fff;
  -webkit-transition: 0.2s; 
  transition:  0.2s;
  @media screen and (max-width: 576px) {
    font-size:15px;
  }
  @media screen and (min-width: 577px) and (max-width: 768px){
    font-size:30px;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px){
      font-size:50px;
  }
`;

const TextBox = styled.div`
  width:50%;
  height: 100%;
  text-align:center;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.2);
  :hover{
    background-color: rgba(255, 255, 255, 0.3);
  }
  :hover ${TextButton}{
    color: #d8d8d8;
    scale: 0;
    transform: scale(1.1);
  }
`;
