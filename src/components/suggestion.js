import React from 'react';
import { Modal} from 'antd';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import Tools from '../image/tool.jpg';
import SugControl from './tools/sugControl';
import Audio from './tools/image/audio2.png'
import Forward from './tools/image/forward2.png'
import Pause from './tools/image/pause2.png'
import Rewind from './tools/image/rewind2.png'
import Full from './tools/image/full2.png'
import Setting from './tools/image/setting2.png'
import { Icon } from 'antd';

class Intro extends React.Component {
  render(){    
    return (
       <div>
        <Modal
          onCancel={this.props.onClose}
          visible={this.props.visible}
          width={1000}
          footer={null}
        >
            <Content>
                <Div>
                <Row justify="center" align="middle" type="flex">
                    <Col  xs={24} sm={14} md={15} lg={15} >
                        <P2>คำแนะนำก่อนเข้าสู่การชมภาพยนตร์</P2>
                        <P3>กดเลือกคำตอบที่ตรงกับความคิดเห็นของคุณ</P3> 
                        <ImageHowto>
                            <img alt="tools" src={Tools} width='100%'/>
                        </ImageHowto>
                    </Col>
                    <Col  xs={24} sm={10} md={9} lg={9} >
                        <SugControl img={Setting} color="#000" text="ปุ่มเรียกใช้งานปุ่มควบคุมวิดีโอ"/> 
                        <SugControl img={Pause} color="#000" text="ปุ่มหยุดการเล่นวิดิโอ"/> 
                        <SugControl img={Forward} color="#000" text="ปุ่มเลื่อนการแสดงผล"/> 
                        <SugControl img={Rewind} color="#000" text="ปุ่มเลื่อนการแสดงผล"/> 
                        <SugControl img={Audio} color="#000" text="ปุ่มเปิด-ปิดเสียง"/> 
                        <SugControl img={Full} color="#000" text="ปุ่มแสดงผลเต็มหน้าจอ"/> 
                    </Col>
                </Row>
                <Row>
                <Col xs={16} sm={19} md={20} lg={20}></Col>
                <Col xs={8} sm={5} md={4} lg={4}>
                    <PButton width={'120px'} onClick={this.props.onClose}>ปิดหน้าต่าง <Icon type="caret-right" /></PButton> 
                </Col>
                </Row>
                </Div>
            </Content>
        </Modal>
      </div>
  );
  }
}

export default Intro;

const P2 = styled.p`
font-size:30px;
color: #c30e2f;
margin: 0;
@media screen and (max-width: 767px) and (min-width: 481px) {
    font-size: 20px;
}
@media screen and (max-width: 480px) and (min-width: 321px) {
    font-size:18px;
}
@media screen and (max-width: 320px) {
    font-size:14px;
}
`;

const Div = styled.div`
margin: 0 20px;
`;

const P3 = styled.p`
font-size:20px;
color: #c30e2f;
@media screen and (max-width: 767px) and (min-width: 481px) {
    font-size:16px;
}
@media screen and (max-width: 480px) and (min-width: 320px) {
    font-size:14px;
}
@media screen and (max-width: 320px) {
    font-size:11px;
}
`;

const Content = styled.div`
display:flex;
justify-content: center;
`;

const PButton = styled.p`
  color:${props => props.color?props.color:'#c30e2f'};
  cursor:pointer;
  font-size:20px;
  width:${props => props.width?props.width:'none'};
  :after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background:${props => props.color?props.color:'#c30e2f'};
    transition: width .3s;
  }
  :hover::after{
    width:${props => props.width?props.width:'50px'};
    transition: width 0.3s;
  }
  @media screen and (max-width: 767px) and (min-width: 481px) {
    font-size:16px;
}
@media screen and (max-width: 480px) and (min-width: 320px) {
    font-size:14px;
}
@media screen and (max-width: 320px) {
    font-size:11px;
}
`;

const ImageHowto = styled.div`
margin: 5%;
border: 7px azure solid;
border-radius: 10px;
box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.2), 0 18px 60px 0 rgba(0, 0, 0, 0.19);
`;