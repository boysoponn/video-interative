import React from 'react';
import '../css/intro.css';
import '../css/animation.css';
import Suggestion from './suggestion';
import Popup from './tools/popup';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

class Homepage extends React.Component {
  render(){
      return (
      <div className="intro">
        <div className="introBackground">
          <div className="introMenu animated fadeIn">
            <Popup/>
           <Suggestion/>
            <Link to="/interactive"><PButton>เข้าสู่การประเมิน</PButton></Link>
          </div>
          <div className="introText animated fadeIn">
              <H1>ภาพยนตร์สั้นปฏิสัมพันธ์</H1>
              <p className="introP">เรื่อง เงิน</p>
          </div>
        </div>
      </div>       
    );
  }
}

export default Homepage;

const H1 = styled.h1`
text-transform: capitalize;
color: white;
margin-bottom: 0;
margin-top: 0;
font-size: 60px;
font-family:'tufont-bold';
display: inline-block;
@media screen and (max-width: 767px) and (min-width: 320px) {
  font-size: 30px;
}
@media screen and (max-width: 1024px) and (min-width : 768px){
  font-size: 35px;
}
`;

const PButton = styled.p`
  color:#fff;
  cursor:pointer;
  width:100px;
  :after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width .3s;
  }
  :hover::after{
    width: 100%;
    transition: width 0.3s;
  }
`;