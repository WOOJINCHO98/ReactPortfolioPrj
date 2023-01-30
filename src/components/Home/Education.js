import React from "react";
import { Container, Row, Col } from "react-bootstrap";






function Education() {
  return (

    <Container>
    <Row style={{ justifyContent: "center", paddingTop: "100px"  , paddingBottom: "100px" }}>
    <Col md={10}>
      <h1 className="Title">Education & Experience</h1>
    </Col>

    <Col md={10}>
      <div className="eduBox">
        <div className="eduTextBox">
          <a className="eduText a_link" href="https://www.likelion.net/" target="_blank" rel="noreferrer" >멋쟁이 사자처럼 11기 운영진 </a>
          <a className="eduText a_link" href="https://www.likelion.net/" target="_blank" rel="noreferrer" >멋쟁이 사자처럼 10기 참여 </a>
          <a className="eduText a_link"  href="https://www.syu.ac.kr/" target="_blank" rel="noreferrer">삼육대학교 컴퓨터공학부 재학중</a>
          <a className="eduText a_link"  href="https://www.syu.ac.kr/" target="_blank" rel="noreferrer">삼육대학교 컴퓨터메카트로닉스공학부 메카트로닉스 전공 </a>
        </div>


        <div className="periodBox">
          <p className="Period">2022.03 ~ ing</p>
          <p className="Period">2022.03 ~ 2022.12</p>
          <p className="Period">2021.07 ~ ing</p>
          <p className="Period">2017.03 ~ 2018.07</p>
        </div>
      </div>
      

    </Col>

  </Row>
</Container>

  );
}

export default Education;