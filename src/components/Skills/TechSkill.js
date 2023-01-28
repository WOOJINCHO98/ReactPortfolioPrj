import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import {
    DiReact,
    DiDjango,
    DiAndroid,
    DiHtml5,
    DiCss3,
} from "react-icons/di";

function TechSkill() {
    return (
        <Container fluid="fluid" className="skill-section">
            <Container>

                <Row
                    style={{
                        justifyContent: "center",
                        paddingBottom: "50px"
                    }}>

                    <Col xs={4} md={2} className="tech-icons">
                        <DiHtml5/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <DiCss3/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <DiReact/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <DiDjango/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <DiAndroid/>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default TechSkill;