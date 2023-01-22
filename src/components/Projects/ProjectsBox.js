import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectsBox(props) {
    return (
        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.description}
            </Card.Text>
            <Button variant="primary" href={props.link}>
                Go to {props.title}
            </Button>
        </Card.Body>
        </Card>
    );
}

export default ProjectsBox;