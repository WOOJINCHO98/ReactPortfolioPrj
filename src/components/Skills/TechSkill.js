import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import {DiReact, DiDjango, DiAndroid, DiHtml5, DiCss3} from "react-icons/di";

function TechSkill() {
    return (
        <Container fluid="fluid" className="skill-section">
            <Container>

                <Row
                    style={{
                        justifyContent: "center",
                        paddingBottom: "50px"
                    }}>
                    <Col xs={4} md={3} className="tech-icons">
                        <DiHtml5/>
                        <div className="proficiency-70"></div>
                        <p>HTML5</p>
                    </Col>
                    <Col xs={4} md={3} className="tech-icons">
                        <DiCss3/>
                        <div className="proficiency-70"></div>
                        <p>CSS3</p>
                    </Col>
                    <Col xs={4} md={3} className="tech-icons">
                        <DiReact/>
                        <div className="proficiency-50"></div>
                        <p>REACT</p>
                    </Col>
                    <Col xs={4} md={3} className="tech-icons">
                        <div className="proficiency-70"></div>
                        <DiDjango/>
                        <p>DJANGO</p>
                    </Col>
                    <Col xs={4} md={3} className="tech-icons">
                        <DiAndroid/>
                        <div className="proficiency-50"></div>
                        <p>ANDROID</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default TechSkill;