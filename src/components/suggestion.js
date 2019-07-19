import React from 'react';
import { Row, Col } from 'antd';
import Tools from '../image/tool.webp';
import { Drawer } from 'antd';
import styled from 'styled-components';
import SugControl from './tools/sugControl';
import Audio from './tools/image/audio.png'
import Forward from './tools/image/forward.png'
import Pause from './tools/image/pause.png'
import Rewind from './tools/image/rewind.png'
import Full from './tools/image/full.png'
import Setting from './tools/image/setting.png'

class Intro extends React.Component {
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
       <div>
        <PButton onClick={this.showDrawer}>คำแนะนำ</PButton>
        <Drawer
          bodyStyle={{backgroundColor:'#000'}}
          width='100vw'
          placement={'right'}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
        <PButton onClick={this.onClose}>กลับสู่หน้าหลัก</PButton>
        <div className={"introHowto animated fadeIn"}>
            <Row justify="center" align="middle" type="flex">
              <Col  xs={24} sm={14} md={15} lg={15} >
                  <p className="introTextHowto">คำแนะนำก่อนเข้าสู่การประเมิน</p>
                  <p className="introP">กดเลือกคำตอบ ที่ตรงกับความคิดเห็นของคุณ</p> 
                <ImageHowto>
                    <img alt="tools" src={Tools} width='100%'/>
                </ImageHowto>
              </Col>
              <Col  xs={24} sm={10} md={8} lg={6} >
                  <SugControl img={Setting} text="ปุ่มเรียกใช้งานปุ่มควบคุมวิดีโอ"/> 
                  <SugControl img={Pause} text="ปุ่มหยุดการเล่นวิดิโอ"/> 
                  <SugControl img={Forward} text="ปุ่มเลื่อนการแสดงผล"/> 
                  <SugControl img={Rewind} text="ปุ่มเลื่อนการแสดงผล"/> 
                  <SugControl img={Audio} text="ปุ่มเปิด-ปิดเสียง"/> 
                  <SugControl img={Full} text="ปุ่มแสดงผลเต็มหน้าจอ"/> 
              </Col>
            </Row> 
        </div>
        </Drawer>
      </div>
  );
  }
}

export default Intro;

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

const ImageHowto = styled.div`
margin: 5%;
border: 7px azure solid;
border-radius: 10px;
box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.2), 0 18px 60px 0 rgba(0, 0, 0, 0.19);
`;