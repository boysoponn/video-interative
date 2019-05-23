import React from 'react';
import { Row, Col } from 'antd';
import { Player  ,ControlBar} from 'video-react';
import Tools from '../video/tools.mp4';

class Intro extends React.Component {
  
  render(){
    return (
    <div className="intro">
      <div className="introBackground">
        <div className={"introHowto animated fadeIn"}>
            <p className="introTextHowto">คำแนะนำ</p>
            <p className="introTextHowto">ก่อนรับชมภาพยนตร์สั้นปฏิสัมพันธ์</p>
            <Row className="row">
              <Col lg={24} xl={12}>
                <div className="videoHowto">
                <Player
                    ref="howto"
                    autoPlay
                    loop
                    muted
                    src={Tools}
                    playsInline
                    disableDefaultControls={true}
                  > 
                  <ControlBar disableCompletely={true} />
                  </Player>
                  </div>
              </Col>
              <Col lg={24} xl={12}>
                <p className="introP">กดอันใดอันหนึ่งเพื่อเลือกและดำเนินวิดีโอต่อไป</p> 
                <button className="introButton" onClick={this.props.onClick}>เริ่มเล่น</button>
              </Col>
            </Row> 
        </div>
      </div>
    </div>
  );
  }
}

export default Intro;
