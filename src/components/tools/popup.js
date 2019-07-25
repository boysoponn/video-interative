import React from 'react';
import { Modal} from 'antd';
import Logo from '../../image/logo.png'
import styled from 'styled-components';
import { Row, Col } from 'antd';
import Tools from '../../image/tool.jpg';
import SugControl from './sugControl';
import Audio from './image/audio.png'
import Forward from './image/forward.png'
import Pause from './image/pause.png'
import Rewind from './image/rewind.png'
import Full from './image/full.png'
import Setting from './image/setting.png'
import {Link} from 'react-router-dom';

class Popup extends React.Component {
    state = { 
        visible: true ,
        content:1
    };
    
changeContent=name=>()=>{
    this.setState({
        content:name
    })
}
close=()=>{
    this.setState({
        visible: false 
    })
}

  render(){
    return ( 
    <div>
        <Modal
          closable={false}
          visible={this.state.visible}
          width={1000}
          footer={null}
        >
            <Content>
                {this.state.content == 1 ?
                <div>
                    <Row align='middle' type="flex">
                        <Col span={5}>
                            <Img src={Logo} />
                        </Col>
                        <Col span={19}>
                            <P bold>กองกิจการนักศึกษา</P>
                            <P>คณะวิทยาการเรียนรู้และศึกษาศาสตร์</P>
                        </Col>
                    </Row>
                    <Row align='middle' type="flex">
                        <Col span={5}>
                            <Img src={Logo} />
                        </Col>
                        <Col span={19}>
                            <P bold>DIVISION OF STUDENT AFFAIRS </P>
                            <P>FACULTY OF SCIENCE & TECHNOLOGY</P>
                        </Col>
                    </Row>
                    <Row align='middle' type="flex">
                        <Col span={2} push={22}>
                            <PButton onClick={this.changeContent(2)}>ต่อไป</PButton> 
                        </Col>
                    </Row>
                </div>
                :
                <div>
                <Row justify="center" align="middle" type="flex">
                    <Col  xs={24} sm={14} md={15} lg={15} >
                        <P bold>คำแนะนำก่อนเข้าสู่การประเมิน</P>
                        <p>กดเลือกคำตอบ ที่ตรงกับความคิดเห็นของคุณ</p> 
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
                <Row align='middle' type="flex">
                    <Col span={4} push={20}>
                        <PButton width={'130px'} onClick={this.close}>ปิดหน้าต่าง</PButton>  
                    </Col>
                        <Col span={4} push={12}>
                        <Link to="/interactive"><PButton width={'110px'}>ชมภาพยนต์</PButton></Link>
                    </Col>
                </Row>
                </div>
                }
            </Content>
        </Modal>
    </div>
  );
  }
}

export default Popup;

const Img = styled.img`
width:180px;
margin:10px;
`;

const P = styled.p`
font-size:30px;
font-family:${props => props.bold?'tufont-bold':'tufont'};
margin: 0 50px;
color: #c30e2f;
letter-spacing: -2px;
`;

const Content = styled.div`
display:flex;
justify-content: center;
`;

const PButton = styled.p`
  color:#c30e2f;
  cursor:pointer;
  font-size:20px;
  font-family:tufont-bold;
  display:inline;
  :after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #c30e2f;
    transition: width .3s;
  }
  :hover::after{
    width:${props => props.width?props.width:'50px'};
    transition: width 0.3s;
  }
`;

const ImageHowto = styled.div`
margin: 5%;
border: 7px azure solid;
border-radius: 10px;
box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.2), 0 18px 60px 0 rgba(0, 0, 0, 0.19);
`;