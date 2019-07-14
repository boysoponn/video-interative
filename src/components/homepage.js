import React from 'react';
import '../css/intro.css';
import '../css/animation.css';
import { Player  ,ControlBar} from 'video-react';
import videoIntro from '../video/intro.mp4';
import Mp3 from '../video/mp3.mp3';
import Sound from 'react-sound';
import {Link} from 'react-router-dom';

class Homepage extends React.Component {
  state={
  }

  render(){
      return (
        <div className="intro">
       <Sound
          url={Mp3}
          playStatus={Sound.status.STOPPED}
        />
      <div className="introBackground">
        <div className="introMenu animated fadeIn">
          <Link to="/suggestion"><p>คำแนะนำ</p></Link>
          <Link to="/interactive"><p>เข้าสู่การประเมิน</p></Link>
        </div>
        <div className="introText animated fadeIn">
            <h1 className="introH1">ภาพยนตร์สั้นปฏิสัมพันธ์</h1>
            <p className="introP">แคร์โปรดิวเซอร์ทาวน์เพียวลิมิต อพาร์ทเมนท์ท็อปบู๊ทโหลนโปสเตอร์ราสเบอร์รี บอมบ์พอเพียงออเดอร์พอเพียง ดาวน์เซลส์ซาดิสต์ปิกอัพ ออร์แกนิกบิลชัตเตอร์ โรลออน ซีดานแพนงเชิญแคมป์ ทัวร์นาเมนท์ฟลุคเคลมดาวน์ เอ๊าะรองรับแบรนด์ อิเหนาอุตสาหการฮันนีมูนไง เท็กซ์ สถาปัตย์แมชีนว่ะเวเฟอร์ซัพพลาย ทัวริสต์ตุ๊ดซาดิสม์ เลสเบี้ยนเยลลี่ ตุ๊กตุ๊กไลฟ์กรีน ติวเตอร์</p>
        </div>
      </div>
      <div className="introPlayer">
        <Player ref="bg" autoPlay loop  muted src={videoIntro} disableDefaultControls={true}> 
          <ControlBar disableCompletely={true} />
        </Player>
      </div>
    </div>       
  );
  }
}

export default Homepage;
