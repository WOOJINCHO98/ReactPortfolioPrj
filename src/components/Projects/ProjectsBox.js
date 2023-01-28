import {React} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {CgWebsite} from "react-icons/cg";
import {BsGithub} from "react-icons/bs";

function ProjectsBox(props) {

    return (
        <Card className="project-box-view">
            <Card.Header>{props.header}</Card.Header>
            <Card.Img variant="top" src={props.imgPath} alt="card-img"/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text
                    style={{
                        textAlign: "justify"
                    }}>
                    {props.description}
                </Card.Text>
                <Button
                    className="btn btn-success btn-lg float-left"
                    variant="primary"
                    href={props.link}
                    target='_blank'
                    style={{
                        margin: "0 auto"
                    }}>

                    <BsGithub/>
                    &nbsp; Archive
                </Button>
                {"\n"}
                {"\n"}

                {
                    !props.isBlog && props.demoLink && (
                        <Button
                            className="btn btn-success btn-lg float-right"
                            variant="primary"
                            href={props.demoLink}
                            target="_blank"
                            style={{
                                margin: "0 auto"
                            }}>
                            <CgWebsite/>
                            &nbsp; {"Demo"}
                        </Button>
                    )
                }
            </Card.Body>
        </Card>
    );
}

export default ProjectsBox;