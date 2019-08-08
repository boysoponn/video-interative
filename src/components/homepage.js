import React from 'react';
import '../css/intro.css';
import '../css/animation.css';
import Suggestion from './suggestion';
import Popup from './tools/popup';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'antd';

class Homepage extends React.Component {
  state={
    visible: false, 
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render(){
      return (
      <div className="intro">
        <div className="introBackground">
          <div className="introMenu animated fadeIn">
            <Popup/>
           <Suggestion {...this.state} onClose={this.onClose}/>
            <PButton onClick={this.showDrawer}>คำแนะนำ <Icon type="caret-right" /></PButton>
            <Link to="/interactive"><PButton>ชมภาพยนตร์ <Icon type="caret-right" /></PButton></Link>
          </div>
          <div className="introText animated fadeIn">
            <H1>เรื่อง เงิน</H1>
            <P>ภาพยนตร์สั้นปฏิสัมพันธ์</P>
            <P content="true">เรื่องราวของเด็กสาวปีหนึ่งที่ต้องจากบ้านมาเรียนกับเหตุการณ์ที่มี เงิน เข้ามาเกี่ยวข้อง! จะจบลงอย่างไร คุณเท่านั้นที่ตัดสินใจ</P>
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
font-size: 90px;
display: inline-block;
@media screen and (max-width: 1024px) and (min-width : 768px){
  font-size: 60px;
}
@media screen and (max-width: 767px) and (min-width: 320px) {
  font-size: 40px;
}
@media screen and (max-width: 320px) {
  font-size:30px;
}
`;

const P = styled.p`
font-size: ${props => props.content?'22px':'40px'};
color: white;
margin: 0;
padding: 0;
margin-bottom: 10px;
@media screen and (max-width: 1024px) and (min-width : 768px){
  font-size:${props => props.content?'20px':'30px'};
}
@media screen and (max-width: 767px) and (min-width: 320px) {
  font-size:${props => props.content?'14px':'20px'};
}
@media screen and (max-width: 320px) {
  font-size:${props => props.content?'12px':'16px'};
}
`;

const PButton = styled.p`
  color:#fff;
  cursor:pointer;
  width:140px;
  font-size:20px;
  :after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width .3s;
  }
  :hover::after{
    width: 75%;
    transition: width 0.3s;
  }
  @media screen and (max-width: 1024px) and (min-width : 768px){
    font-size: 18px;
    width:130px;
  }
  @media screen and (max-width: 767px) and (min-width: 320px) {
    font-size: 14px;
    width:110px;
  }
`;