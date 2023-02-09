import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectsBox from "./ProjectsBox";
import Accty from "../../Assets/Projects/Accty.png";
import Notty from "../../Assets/Projects/Notty.png";
import Dice from "../../Assets/Projects/Dice.png";
import Likelion from "../../Assets/Projects/Likelion.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Database from "../../Assets/Projects/Database.png";

function Project() {
    const [visible, setVisible] = React.useState(false);
    const [visible2, setVisible2] = React.useState(false);

    return (
        <Container fluid="fluid" className="project-section">
            <Container>
                <Row
                    style={{
                        justifyContent: "center",
                        paddingBottom: "10px"
                    }}>

                    <Col md={4} className="project-box">
                        <ProjectsBox
                            imgPath={Likelion}
                            header="2023.01.24 ~ ing"
                            title="멋쟁이사자처럼 삼육 11기 웹사이트"
                            description="11기 신입 부원들과 함께 사용하기 위해 진행 한 프로젝트입니다. 아직 개발 중에 있으며, 2월 14일 배포를 예정하고 있습니다. 백엔드 3인, 프론트엔드 3인으로 진행하였습니다. 메인 페이지와 지원 페이지의 구현을 담당하였습니다. React를 사용하여 개발하였습니다. DRF에 HTTP 요청을 보내기 위해 axios를 사용하였습니다."
                            link="https://github.com/SYULION11th/likelionpage-front"
                            demoLink="https://syulion11th.github.io/likelionpage-front"
                            test="demo"/>
                    </Col>

                    <Col md={4} className="project-box">
                        <ProjectsBox
                            imgPath={Portfolio}
                            header="2023.01.24 ~ ing"
                            title="포트폴리오 웹사이트 (현재 사이트)"
                            description="포트폴리오 웹사이트입니다. 개인적으로 진행한 첫 번째 React 프로젝트입니다. 위트있는 포트폴리오 사이트를 제작하기 위해서 three.js를 활용하여 자신을 표현한 3D모델을 삽입하였습니다. 또한, React-Bootstrap을 활용하여 반응형 웹사이트를 구현하였습니다. 컴포넌트 위주로 코드를 작성하여 가독성을 높이는 것에 중점을 두었습니다."
                            link="https://github.com/WOOJINCHO98/ReactPortfolioPrj.git"/>

                    </Col>

                    <Col md={4} className="project-box">
                        <ProjectsBox
                            imgPath={Database}
                            header="2022.10.14 ~ 12.16"
                            title="영화관 데이터베이스 프로젝트"
                            description="영화관에서 관리자와 사용자의 예매와 관련된 기능을 구현한 프로젝트 입니다. 교내의 데이터베이스 수업에서 진행했던 프로젝트입니다. 세부적인 문서화 작업을 중점으로 한 프로젝트입니다. 팀은 4명으로 이루어져 있었습니다. 프로젝트의 데이터베이스 설계와 기능 구현을 담당하였습니다. Oracle, C#, WinForm 을 사용하여 개발하였습니다. "
                            link="https://github.com/WOOJINCHO98/DatabaseWinformTeamPrj"/>
                    </Col>

                    <Col md={4} className="project-box">
                        <ProjectsBox
                            imgPath={Accty}
                            header="2022.09.01 ~ 11.30"
                            title="Accty"
                            description="액티비티 관련 운동 지수를 표현할 수 있는 안드로이드 앱입니다. 프로젝트의 팀장, 기획, 개발을 담당하였습니다. Android (Java)를 사용하여 개발하였습니다. 교내의 캡스톤 디자인 수업에서 진행했던 프로젝트입니다.
                    팀원은 총 3인으로 구성되었습니다. 수업 연계 캡스톤디자인 대회에서 우수상을 수상하였습니다."
                            link="https://github.com/woojincho98/accty"
                            demoLink="https://appetize.io/app/qc67wp4r4wyssn2ncahhqfaloq?location=37.5368%2C127.0057&device=pixel4&osVersion=11.0&scale=90"/>

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
                            header="2022.07.22 ~ 08.20"
                            title="Notty"
                            description="지하철 하차 알림 웹서비스 입니다. 프로젝트의 팀장, 기획, 개발을 담당하였습니다. Python, Django, Html, CSS를 사용 하였습니다.
                      멋쟁이사자처럼 해커톤에서 진행했던 프로젝트입니다. 첫 번째 팀 프로젝트였으며, 팀은 프론트 3인, 백엔드 3인으로 구성되었습니다. 2023년에 개인적으로 디자인을 변경하였습니다."
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
                            description="10년 전 마인크래프트의 멀티 서버에서 사용 가능한 주사위 플러그인을 만들었습니다. 자바의 기본 문법은 구글링을 하고, 다른 유저의 플러그인을 디컴파일해 구조를 파악하는 노력을 통해 완성할 수 있었습니다. 실제로 어떤 서버에서 사용되는 모습을 확인 하였던 그때의 기쁨을 잊을 수 없습니다. 개발의 매력을 느낄 수 있었던 첫 경험이었습니다."
                            bloglink="https://blog.naver.com/jowoojin1998/150172099477"/>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Project;