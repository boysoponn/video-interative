import React from 'react';
import '../css/intro.css';
import '../css/animation.css';
import Suggestion from './suggestion'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

class Homepage extends React.Component {
  render(){
      return (
      <div className="intro">
        <div className="introBackground">
          <div className="introMenu animated fadeIn">
           <Suggestion/>
            <Link to="/interactive"><PButton>เข้าสู่การประเมิน</PButton></Link>
          </div>
          <div className="introText animated fadeIn">
              <H1>ภาพยนตร์สั้นปฏิสัมพันธ์</H1>
              <p className="introP">แคร์โปรดิวเซอร์ทาวน์เพียวลิมิต อพาร์ทเมนท์ท็อปบู๊ทโหลนโปสเตอร์ราสเบอร์รี บอมบ์พอเพียงออเดอร์พอเพียง ดาวน์เซลส์ซาดิสต์ปิกอัพ ออร์แกนิกบิลชัตเตอร์ โรลออน ซีดานแพนงเชิญแคมป์ ทัวร์นาเมนท์ฟลุคเคลมดาวน์ เอ๊าะรองรับแบรนด์ อิเหนาอุตสาหการฮันนีมูนไง เท็กซ์ สถาปัตย์แมชีนว่ะเวเฟอร์ซัพพลาย ทัวริสต์ตุ๊ดซาดิสม์ เลสเบี้ยนเยลลี่ ตุ๊กตุ๊กไลฟ์กรีน ติวเตอร์</p>
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
font-size: 50px;
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