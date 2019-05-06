import React from 'react';
import '../css/intro.css';
import '../css/animation.css';
import { Row, Col } from 'antd';
import { Player  ,ControlBar} from 'video-react';
import videoIntro from '../video/intro.mp4';
import videoIntro2 from '../video/hh2.mp4';
import Tools from '../video/tools.mp4';
class Intro extends React.Component {
  state={
    classShow:"fadeIn",
    howToShow:false
  }
  letPlay=()=>{    
    this.setState({
      classShow:"fadeOut"
    })
  setTimeout(this.howToShow,2000)
  }

  howToShow=()=>{
    this.setState({
      howToShow:true
    })
    this.refs.bg.pause();
  }

  render(){
    let video=videoIntro;
    if(window.innerWidth<window.innerHeight){
      video=videoIntro2;
    }
    return (
    <div>
      <div className="introBackground">
        <div className={"introText animated "+this.state.classShow}>
            <h1 className="introH1">ภาพยนตร์สั้นปฏิสัมพันธ์</h1>
            <p className="introP">แคร์โปรดิวเซอร์ทาวน์เพียวลิมิต อพาร์ทเมนท์ท็อปบู๊ทโหลนโปสเตอร์ราสเบอร์รี บอมบ์พอเพียงออเดอร์พอเพียง ดาวน์เซลส์ซาดิสต์ปิกอัพ ออร์แกนิกบิลชัตเตอร์ โรลออน ซีดานแพนงเชิญแคมป์ ทัวร์นาเมนท์ฟลุคเคลมดาวน์ เอ๊าะรองรับแบรนด์ อิเหนาอุตสาหการฮันนีมูนไง เท็กซ์ สถาปัตย์แมชีนว่ะเวเฟอร์ซัพพลาย ทัวริสต์ตุ๊ดซาดิสม์ เลสเบี้ยนเยลลี่ ตุ๊กตุ๊กไลฟ์กรีน ติวเตอร์</p>
            <button className="introButton" onClick={this.letPlay}>เริ่มต้น</button>
        </div>
        {!this.state.howToShow?null:
        <div className={"introHowto animated fadeIn"}>
            <Row>
            <Col span={24} >
            <p className="introTextHowto">คำแนะนำ</p>
            <p className="introTextHowto">ก่อนรับชมภาพยนตร์สั้นปฏิสัมพันธ์</p>
            <div className="videoHowto">
            <Player
                ref="howto"
                autoPlay
                loop
                muted
                src={Tools}
                disableDefaultControls={true}
              > 
              <ControlBar disableCompletely={true} />
              </Player>
              </div>
              <p className="introP">กดอันใดอันหนึ่งเพื่อเลือกและดำเนินวิดีโอต่อไป</p> 
              <button className="introButton" onClick={this.props.onClick}>เริ่มเล่น</button>
            </Col>
            </Row> 
        </div>
          } 
      </div>
      <div className="introPlayer">
        <Player
          ref="bg"
          autoPlay
          loop
          muted
          src={video}
          disableDefaultControls={true}
        > 
        <ControlBar disableCompletely={true} />
        </Player>
      </div>
    </div>
  );
  }
}

export default Intro;
