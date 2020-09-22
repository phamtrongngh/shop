import React, { useState } from 'react';
import { Row, Col, Container } from "reactstrap";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import axios from 'axios';
import logo from '../src/payme-logo.png';
import image from './fan.jpg';
import './App.css';
function App() {
  const { buy, setBuy } = useState(0);
  const pay = async (e) => {
    const data = await axios.post('http://localhost:3000/v1/connect/info', {
      userId: "#!@#!s12w21",
      appId: 1
    })
    console.log(data);
  }
  return (
    <div className="App">
      <Container fluid={true}>
        <Row style={{
          backgroundColor: 'rgb(24, 158, 255)',
          height: `50px`
        }}>

        </Row>
        <Row style={{
          marginTop: `100px`
        }}>
          <Col md={5}>
            <img src={image} height={100 + "%"} width={100 + "%"} />
          </Col>
          <Col md={7}>
            <div>
              <Card>
                <CardBody>
                  <CardTitle><h2>[FREESHIP TỪ 50K] Quạt bàn B3 Fugio</h2></CardTitle>
                  <CardSubtitle style={{
                    color: 'rgba(52, 140, 217)'
                  }}><h3>208.000 VND</h3></CardSubtitle>
                  <CardText style={{
                    textAlign: "left"
                  }}>
                    Quạt kẹp YOOBAO F04 là dòng quạt đa năng của Yoobao, Quạt có ưu thế tích hợp bộ pin sạc khủng nhất trong các dòng quạt kẹp lên tới 6400mAh, cho thời gian chạy liên tục ở cấp số 1 tới 32 tiếng. Quạt có độ hoàn thiện tốt, màu sặc tươi sáng cùng động cơ không chổi than hiệu suất cao giúp thời gian sử dụng quạt được lâu hơn, động cơ bền và chạy cực êm.
                  Quạt yoobao tích điện mang theo bất cứ đâu cũng được: <br />
                  - Kẹp xe đẩy , nôi cũi cho bé.<br />
                  -  Kẹp bàn làm việc cho bố mẹ. <br />
                  - Cầm tay khi đi chơi, đi du lịch, dã ngoại. <br />
                  - Để bàn làm việc, bàn học, để lên bất cứ mặt phẳng nào cũng ok. <br />
                  - Gió kết hợp lúc mạnh lúc yếu (an toàn cho cổ họng bé nếu nằm ngủ). <br />
                  Hết pin bạn có thể sạc được bằng cổng USB-dẹt với cable sạc đi kèm và sử dụng cổng usb từ máy tính, sạc dự phòng hay cục sạc điện thoại đều được. Do pin dung lượng lớn nên thời gian sạc vào khoảng 8-10h mới đầy pin, bạn cũng có thể vừa sạc vừa sử dụng mà hoàn toàn không lo ảnh hưởng đến pin của thiết bị.</CardText>
                  <p><b>Thanh toán bằng ví con PAYME</b></p>
                  <div
                    onClick={pay}
                    style={{
                      margin: '0 auto',
                      border: `2px solid rgb(8 161 37)`,
                      borderRadius: `5px`,
                      backgroundImage: `url('${logo}')`,
                      backgroundSize: `contain`,
                      backgroundRepeat: `no-repeat`,
                      width: `200px`,
                      height: `50px`
                    }}></div>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;
