import React from 'react';
import { Row, Col, Container } from "reactstrap";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import axios from 'axios';
import logo from './logo.svg';
import image from './fan.jpg';
import './App.css';
function App() {


  const pay = async (e) => {
    const data = await axios.get('http://localhost:3000/product/', {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlBoYW0gVHJvbmcgTmdoaWEiLCJpZCI6MywiaWF0IjoxNTE2MjM5MDIyfQ.66t98S58WovBfQfrabt17q5VxpoCxzVjdI1gfo25ntk'
      }
    })
    console.log(data);
  }


  return (
    <div className="App">
      <Container fluid={true}>
        <Row>
          <Col md={5}>
            <img src={image} height={100 + "%"} width={100 + "%"} />
          </Col>
          <Col md={7}>
            <div>
              <Card>
                <CardBody>
                  <CardTitle>[FREESHIP TỪ 50K] Quạt bàn B3 Fugio</CardTitle>
                  <CardSubtitle>208.000</CardSubtitle>
                  <CardText>.Quạt kẹp YOOBAO F04 là dòng quạt đa năng của Yoobao, Quạt có ưu thế tích hợp bộ pin sạc khủng nhất trong các dòng quạt kẹp lên tới 6400mAh, cho thời gian chạy liên tục ở cấp số 1 tới 32 tiếng. Quạt có độ hoàn thiện tốt, màu sặc tươi sáng cùng động cơ không chổi than hiệu suất cao giúp thời gian sử dụng quạt được lâu hơn, động cơ bền và chạy cực êm.
                  Quạt yoobao tích điện mang theo bất cứ đâu cũng được.
                  - Kẹp xe đẩy , nôi cũi cho bé
                  -  Kẹp bàn làm việc cho bố mẹ
                  - Cầm tay khi đi chơi, đi du lịch, dã ngoại
                  - Để bàn làm việc, bàn học, để lên bất cứ mặt phẳng nào cũng ok
                  - Gió kết hợp lúc mạnh lúc yếu (an toàn cho cổ họng bé nếu nằm ngủ)

Hết pin bạn có thể sạc được bằng cổng USB-dẹt với cable sạc đi kèm và sử dụng cổng usb từ máy tính, sạc dự phòng hay cục sạc điện thoại đều được. Do pin dung lượng lớn nên thời gian sạc vào khoảng 8-10h mới đầy pin, bạn cũng có thể vừa sạc vừa sử dụng mà hoàn toàn không lo ảnh hưởng đến pin của thiết bị.</CardText>
                  <Button onClick={pay}>THANH TOAN</Button>
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
