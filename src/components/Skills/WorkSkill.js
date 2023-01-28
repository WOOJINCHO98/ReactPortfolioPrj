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
                    <Col xs={4} md={2} className="tech-icons">
                        <SiAmazonaws/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <DiVisualstudio/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <DiGithubBadge/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <SiFirebase/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <SiFigma/>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default WorkSkill;