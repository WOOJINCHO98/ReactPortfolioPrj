import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function AboutMe() {
  return (

    <Container>
    <Row style={{ justifyContent: "center", paddingTop: "100px"  , paddingBottom: "100px" }}>
    <Col md={10}>
      <h1 className="Title">ABOUT ME</h1>
    </Col>
    <Col md={5}>
      <div className="AboutTextBox">
        <p className="About">이름ㅤㅤㅤㅤㅤㅤㅤ조우진</p>
        <p className="About">생년월일ㅤㅤㅤㅤㅤ1998.07.28</p>
        <p className="About">연락처ㅤㅤㅤㅤㅤㅤ010-2914-2852</p>
        <p className="About">주소지ㅤㅤㅤㅤㅤㅤ서울특별시 중랑구</p>
      </div>
    </Col>
    <Col md={5}>
      <div className="AboutTextBox">
        <p>끊임 없이 성장하고 싶은 웹 프론트엔드 개발 지망생입니다.</p>
        <p>의도치 않은 전공 변경이었지만, 개발자로서 빠르게 적응해 나가고 있습니다.</p>
        <p>사람들과 함께 성장하기 위해서 지난 1년간 개발 교육 프로그램에 참여하여 동료들과 
        학습을 공유하고 함께 프로젝트를 진행하며 개발 역량을 쌓아왔습니다.</p>
        <p>2023년 부터 꾸준히 깃허브에 개인 프로젝트를 올리고 있습니다.</p>
        <p>현재는 웹 프론트엔드 개발자로서의 역량을 쌓기 위해 리액트를 공부하고 있습니다.</p>
      </div>

    </Col>

  </Row>
</Container>

  );
}

export default AboutMe;