import { React } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectsBox(props) {

    return (
        <Card className="project-box-view">
            <Card.Header>{props.header}</Card.Header>
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                {props.description}
                </Card.Text>
                <Button variant="primary" href={props.link}>
                    깃허브 바로가기  {props.title}
                </Button>

                <Button variant="primary" href={props.demoLink}>
                    데모링크 바로가기  {props.title}
                </Button>

            </Card.Body>
        </Card>
    );
}

export default ProjectsBox;