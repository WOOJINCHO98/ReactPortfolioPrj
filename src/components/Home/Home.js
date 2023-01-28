import React from "react";
import { Container,Row,Col } from "react-bootstrap";


import GithubCal from "./GithubCal";
import MediaGithubCal from "./MediaGithubCal";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Type from "./Type";
import Waving from "./Waving";

import {
  AiFillGithub,
  AiFillBook,
  AiFillInstagram,
} from "react-icons/ai";

function Home() {
  return (
    <div>
      <Container fluid>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12}>
            <h1 className="helloworld" >              
            <span className="wave">
                👋🏻
              </span>"HelloWorld!"

            </h1>
          </Col>

          <Col md={11}>
            <div className="typeBox">
              <Type />
            </div>
          </Col>
          <Col md={6}>
            <div className="textBox">
              <p className="introText" style={{ float: "left", color: "#ebebeb"}}>개발자 조우진입니다.</p>
              <br/><br/>
            </div>
            


            <div class="snsBox">
        
              <a href="https://github.com/WOOJINCHO98" target='_blank'  rel="noreferrer" className="icon-colour  home-social-icons"><AiFillGithub /></a>
              <a href="https://www.instagram.com/cioudi" target='_blank'  rel="noreferrer" className="icon-colour  home-social-icons"><AiFillBook /></a>
              <a href="https://velog.io/@woojincho98" target='_blank'  rel="noreferrer" className="icon-colour  home-social-icons"><AiFillInstagram /></a>
                

            </div>

          </Col>
          <Col md={5}>
            <Waving />
          </Col>
          <Col md={11}>
            <div className="calendar">
              <GithubCal />
            </div>
            <div className="mediaCalendar">
            <MediaGithubCal />
            </div>
          </Col>
        </Row>

        <div className="section">
        <AboutMe />
        </div>        
        <div className="section">
        <Education />
        </div>
        </Container>
    </div>

  );
}

export default Home;