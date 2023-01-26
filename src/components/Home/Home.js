import React from "react";
import GithubCal from "./GithubCal";
import HomeDown from "./HomeDown";
import Type from "./Type";
import Waving from "./Waving";
import { Container,Row,Col } from "react-bootstrap";
function Home() {
  return (
    <div>

      <Container fluid>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12}>
            <h1 className="helloworld" >"HelloWorld!"
              <span className="wave">
                👋🏻
              </span>
            </h1>
          </Col>

          <Col md={4}>
            <Type />
          </Col>
          <Col md={4}>
            <div className="textBox">
              <h1 style={{ float: "left", color: "#ebebeb"}}>개발자 조우진입니다.</h1>
              <br/><br/>
              <p>2021년 5월부터</p>
              <p>웹 개발에 관심이 있습니다.</p>
            </div>
          </Col>
          <Col md={4}>
            <Waving />
          </Col>
          <Col xs={6} md={11}>
            <div className="calendar">
              <GithubCal />
            </div>
          </Col>
        </Row>

      
        <HomeDown />
        </Container>
    </div>

  );
}

export default Home;