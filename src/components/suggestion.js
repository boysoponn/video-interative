import React from 'react';
import { Row, Col } from 'antd';
import { Player  ,ControlBar} from 'video-react';
import Tools from '../video/tools.mp4';
import {Link} from 'react-router-dom';

class Intro extends React.Component {
  
  render(){    

    return (
    <div className="intro">
      <div className="introBackground">
        <div className="introMenu2 animated fadeIn">
          <Link to="/"><p>หน้าหลัก</p></Link>
          <Link to="/interactive"><p>เข้าสู่การประเมิน</p></Link>
        </div>
        <div className={"introHowto animated fadeIn"}>
            <Row justify="center" align="middle" type="flex">
              <Col  xs={24} sm={12} md={24} lg={12}>
                <div>
                  <p className="introTextHowto">คำแนะนำ</p>
                  <p className="introTextHowto">ก่อนรับชมภาพยนตร์สั้นปฏิสัมพันธ์</p>
                </div>
              </Col>
              <Col  xs={24} sm={12} md={24} lg={12} >
                <div className="videoHowto">
                  <Player ref="howto" autoPlay loop  muted src={Tools} disableDefaultControls={true}> 
                    <ControlBar disableCompletely={true} />
                  </Player>
                </div>
                <p className="introP">กดอันใดอันหนึ่งเพื่อเลือกและดำเนินวิดีโอต่อไป</p> 
                <button className="introButton">เริ่มเล่น</button>
              </Col>
            </Row> 
        </div>
      </div>
    </div>
  );
  }
}

export default Intro;
