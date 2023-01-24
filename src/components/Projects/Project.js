import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectsBox from "./ProjectsBox";
import Accty from "../../Assets/Projects/Accty.png";
import Notty from "../../Assets/Projects/Notty.png";
import Dice from "../../Assets/Projects/Dice.png";
import Sample from "../../Assets/Projects/Sample.png";

function Project() {

    return (
        <Container fluid className="project-section">
          <Container>
            <h1 className="project-heading">
              프로젝트
            </h1>
            <p style={{ color: "white" }}>
              최근 진행 한 프로젝트를 소개 합니다.
            </p>
            
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              

              <Col md={4} className="project-box">
                <ProjectsBox
                    imgPath={Sample}
                    isBlog={false}
                    header="2023.01.24 ~ ing"
                    title="멋쟁이 사자처럼 삼육 11기 웹사이트"
                    description="11기 신입 부원들을 모집 하기 전에 진행 한 프로젝트입니다. 아직 개발중에 있으며, 배포를 앞두고 있습니다. 백엔드 3인, 프론트엔드 3인팀으로 진행하였습니다. 그 중 프론트엔드를 담당하였습니다. React 를 사용하여 개발하였습니다."
                    //link="https://github.com/woojincho98/accty"
                    //demoLink="https://chatify-49.web.app/"
                />
              </Col>

              <Col md={4} className="project-box">
                <ProjectsBox
                    imgPath={Accty}
                    isBlog={false}
                    header="2022.11.30"
                    title="Accty"
                    description="액티비티 관련 날씨 앱 입니다. 프로젝트의 팀장, 기획, 개발을 담당하였습니다. Android (Java) 를 사용하여 개발하였습니다. 교내의 캡스톤 디자인 수업에서 진행했던 프로젝트입니다.
                    팀원은 총 3인 으로 구성되었습니다. 수업 연계 캡스톤디자인대회에서 우수상을 수상 하였습니다."
                    link="https://github.com/woojincho98/accty"
                    demoLink="https://chatify-49.web.app/"
                />
              </Col>
              <Col md={4} className="project-box" id="NottyBox">
                <ProjectsBox
                    imgPath={Notty}

                    isBlog={false}
                    header="2022.08.01"
                    title="Notty"
                    description="지하철 하차 알림 웹 서비스 입니다. 프로젝트의 팀장, 기획, 개발을 담당하였습니다. Python, Django, Html, CSS 를 사용 하였습니다.
                      멋쟁이사자처럼 해커톤에서 진행했던 프로젝트입니다. 첫번째 팀 프로젝트 였으며, 팀은 총 6인으로 구성되었습니다. 2023년에 디자인을 변경하였습니다."
                    link="https://github.com/woojincho98/nottybuild"
                    demoLink="http://notty.kro.kr/"
                />

              </Col>

              <Col md={4} className="project-box">
                <ProjectsBox
                    imgPath={Accty}
                    isBlog={false}
                    header="2022.11.30"
                    title="Accty"
                    description="액티비티 관련 날씨 앱 입니다. 프로젝트의 팀장, 기획, 개발을 담당하였습니다. Android (Java) 를 사용하여 개발하였습니다. 교내의 캡스톤 디자인 수업에서 진행했던 프로젝트입니다.
                    팀원은 총 3인 으로 구성되었습니다. 수업 연계 캡스톤디자인대회에서 우수상을 수상 하였습니다."
                    link="https://github.com/woojincho98/accty"
                    demoLink="https://chatify-49.web.app/"
                />
              </Col>

              <Col md={4} className="project-box">
                <ProjectsBox
                    imgPath={Accty}
                    isBlog={false}
                    header="2022.11.30"
                    title="Accty"
                    description="액티비티 관련 날씨 앱 입니다. 프로젝트의 팀장, 기획, 개발을 담당하였습니다. Android (Java) 를 사용하여 개발하였습니다. 교내의 캡스톤 디자인 수업에서 진행했던 프로젝트입니다.
                    팀원은 총 3인 으로 구성되었습니다. 수업 연계 캡스톤디자인대회에서 우수상을 수상 하였습니다."
                    link="https://github.com/woojincho98/accty"
                    demoLink="https://chatify-49.web.app/"
                />
              </Col>
              <Col md={4} className="project-box">
                <ProjectsBox
                  imgPath={Dice}
                    isBlog={false}
                    header="2013.08.01"
                    title="DicePlugin"
                    description="지금으로부터 10년 전 마인크래프트의 플러그인을 만들었던 경험이 있습니다. 멀티 서버 환경에서 주사위를 던질 수 있는 플러그인 이었습니다."
                    link="https://blog.naver.com/jowoojin1998/150172099477"
                />
              </Col>
            </Row>
          </Container>
        </Container>
            );
    }

export default Project;