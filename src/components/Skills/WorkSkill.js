import React from "react";
import {Container, Col, Row} from "react-bootstrap";

import {SiAmazonaws} from "react-icons/si";
import {DiGithubBadge, DiVisualstudio} from "react-icons/di";
import {SiFigma, SiFirebase} from "react-icons/si";

function WorkSkill() {
    return (
        <Container fluid="fluid" className="skill-section">
            <Container>

                <Row
                    style={{
                        justifyContent: "center",
                        paddingBottom: "50px"
                    }}>
                    <Col xs={4} md={3} className="tech-icons">
                        <SiAmazonaws/>
                        <div className="proficiency-30"></div>
                    </Col>
                    <Col xs={4} md={3} className="tech-icons">
                        <DiVisualstudio/>
                        <div className="proficiency-70"></div>
                    </Col>
                    <Col xs={4} md={3} className="tech-icons">
                        <DiGithubBadge/>
                        <div className="proficiency-50"></div>
                    </Col>
                    <Col xs={4} md={3} className="tech-icons">
                        <SiFirebase/>
                        <div className="proficiency-30"></div>
                    </Col>
                    <Col xs={4} md={3} className="tech-icons">
                        <SiFigma/>
                        <div className="proficiency-50"></div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default WorkSkill;