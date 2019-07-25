import React from 'react';
import styled from 'styled-components'

class Controls extends React.Component {
  state={
  }
  
  render(){
    return (
        <GroupSugControl>
            <Icon alt="icon" src={this.props.img}/><P color={this.props.color}>{this.props.text}</P>
        </GroupSugControl>
    );
  }
}

export default Controls;

const GroupSugControl = styled.div`
text-align:left;
`;
const P = styled.span`
font-size:16px;
color:${props => props.color?props.color:'#fff'};
`;

const Icon = styled.img`
  width:40px;
  cursor:pointer;
  margin: 10px 20px;
  border-radius: 50%; 
  :hover{
    background-color: rgba(0, 0, 0, 0.2);  
    transform: scale(1.1);    
  }
  @media screen and (max-width: 767px) {
    width:20px;
    margin: 10px 10px;
  }
`;
