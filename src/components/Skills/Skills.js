import React from "react";
import TechSkill from './TechSkill.js';
import WorkSkill from './WorkSkill.js';
import { Container, Row, Col } from 'react-bootstrap';

function Skills() {
    return (
        <Container fluid="fluid" className="skill-section">
            <Container>
            <Row style={{ justifyContent: "center" }}>
                    <Col xs={12} md={12}>
                        <h1 className="SkillTitle">TechStack</h1>
                    </Col>
                </Row>
                <TechSkill/>
                <Row style={{ justifyContent: "center"}}>
                    <Col xs={12} md={12}>
                        <h1 className="SkillTitle">WorkSkill</h1>
                    </Col>
                </Row>
                <WorkSkill/>
            </Container>
        </Container>
    );
}

export default Skills
                              