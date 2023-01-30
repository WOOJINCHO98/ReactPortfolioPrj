import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectsBox from "./ProjectsBox";
import Accty from "../../Assets/Projects/Accty.png";
import Notty from "../../Assets/Projects/Notty.png";
import Dice from "../../Assets/Projects/Dice.png";
import Likelion from "../../Assets/Projects/Likelion.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";

function Project() {
    const [visible, setVisible] = React.useState(false);
    const [visible2, setVisible2] = React.useState(false);

    return (
        <Container fluid="fluid" className="project-section">
            <Container>
                <h1 className="project-heading">
                    프로젝트
                </h1>
                <p
                    className="project-subhead"
                    style={{
                        color: "white"
                    }}>
                    최근 진행 한 프로젝트를 소개 합니다.
                </p>

                <Row
                    style={{
                        justifyContent: "center",
                        paddingBottom: "10px"
                    }}>

                    <Col md={4} className="project-box">
                        <ProjectsBox
                            imgPath={Likelion}
                            header="2023.01.24 ~ ing"
                            title="멋쟁이 사자처럼 삼육 11기 웹사이트"
                            description="11기 신입 부원들과 함께 사용하기 위해 진행 한 프로젝트입니다. 프론트 작업은 완료 되었습니다. 아직 개발중에 있으며, 배포를 앞두고 있습니다. 백엔드 3인, 프론트엔드 3인팀으로 진행하였습니다. 그 중 프론트엔드를 담당하였습니다. React 를 사용하여 개발하였습니다."
                            link="https://github.com/SYULION11th/likelionpage-front"
                            demoLink="https://syulion11th.github.io/likelionpage-front"
                            test="demo"

                            />
                    </Col>

                    <Col md={4} className="project-box">
                        <ProjectsBox
                            imgPath={Portfolio}
                            header="2023.01.24 ~ ing"
                            title="포트폴리오 웹사이트 (현재 사이트)"
                            description="포트폴리오 웹사이트 입니다. React 를 사용하여 개발하였습니다."
                            link="https://github.com/WOOJINCHO98/ReactPortfolioPrj.git"
                            demoLink="http://woojincho@kro.kr"/>

                    </Col>

                    <Col md={4} className="project-box">
                        <ProjectsBox
                            imgPath={Accty}
                            header="2022.10.14 ~ 12.16"
                            title="CGV Database Project"
                            description="CGV 영화관의 데이터베이스를 구축하고, 관리자와 사용자의 기능을 구현하였습니다. 교내의 데이터베이스 수업에서 진행했던 프로젝트입니다. 세부적인 문서화 작업으로 상당히 오랜 기간이 소요 됐던 프로젝트 입니다. 팀은 4명으로 이루어져 있었습니다. 프로젝트의 DB설계 및 기능 구현을 담당하였습니다. Oracle, C#, WinForm 을 사용하여 개발하였습니다. "
                            link="https://github.com/WOOJINCHO98/DatabaseWinformTeamPrj"/>
                    </Col>

                    <Col md={4} className="project-box">
                        <ProjectsBox
                            imgPath={Accty}
                            header="2022.11.30"
                            title="Accty"
                            description="액티비티 관련 날씨 앱 입니다. 프로젝트의 팀장, 기획, 개발을 담당하였습니다. Android (Java) 를 사용하여 개발하였습니다. 교내의 캡스톤 디자인 수업에서 진행했던 프로젝트입니다.
                    팀원은 총 3인 으로 구성되었습니다. 수업 연계 캡스톤디자인대회에서 우수상을 수상 하였습니다."
                            link="https://github.com/woojincho98/accty"/>

                        <button className="showButton" onClick={() => setVisible(true)}>VIDEO</button>
                        <div
                            className="videoBox"
                            style={{
                                display: visible
                                    ? 'block'
                                    : 'none'
                            }}>
                            <iframe
                                className="Video"
                                src="https://www.youtube-nocookie.com/embed/7TWgM2Nl3cA?autoplay=1&mute=1&loop=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; "
                                allowFullScreen="allowFullScreen"></iframe>
                            <button className="exitButton" onClick={() => setVisible(false)}>X</button>
                        </div>
                    </Col>
                    <Col md={4} className="project-box" id="NottyBox">
                        <ProjectsBox
                            imgPath={Notty}
                            header="2022.08.01"
                            title="Notty"
                            description="지하철 하차 알림 웹 서비스 입니다. 프로젝트의 팀장, 기획, 개발을 담당하였습니다. Python, Django, Html, CSS 를 사용 하였습니다.
                      멋쟁이사자처럼 해커톤에서 진행했던 프로젝트입니다. 첫번째 팀 프로젝트 였으며, 팀은 총 6인으로 구성되었습니다. 2023년에 디자인을 변경하였습니다."
                            link="https://github.com/woojincho98/nottybuild"
                            demoLink="http://notty.kro.kr/"/>

                        <button className="showButton" onClick={() => setVisible2(true)}>VIDEO</button>
                        <div
                            className="videoBox"
                            style={{
                                display: visible2
                                    ? 'block'
                                    : 'none'
                            }}>
                            <iframe
                                className="Video"
                                src="https://www.youtube-nocookie.com/embed/Nngh_gY4L1w?autoplay=1&mute=1&loop=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; "
                                allowFullScreen="allowFullScreen"></iframe>
                            <button className="exitButton" onClick={() => setVisible2(false)}>X</button>
                        </div>

                    </Col>

                    <Col md={4} className="project-box">
                        <ProjectsBox
                            imgPath={Dice}
                            header="2013.08.01"
                            title="DicePlugin"
                            description="지금으로부터 10년 전 마인크래프트의 플러그인을 만들었던 경험이 있습니다. 멀티 서버 환경에서 주사위를 던질 수 있는 플러그인 이었습니다."
                            link="https://blog.naver.com/jowoojin1998/150172099477"/>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Project;