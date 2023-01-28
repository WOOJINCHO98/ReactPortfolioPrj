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
                <div className="buttonContainer">
                    <Button
                        className="btn btn-success "
                        variant="primary"
                        href={props.link}
                        target='_blank'
                        style={{
                            margin: "3px",
                            fontSize: "13px"
                        }}>

                        <BsGithub/>
                        &nbsp; Archive
                    </Button>

                    {
                        props.demoLink && (
                            <Button
                                className="btn btn-success"
                                variant="primary"
                                href={props.demoLink}
                                target="_blank"
                                style={{
                                    margin: "3px",
                                    fontSize: "13px"
                                }}>
                                <CgWebsite/>
                                &nbsp; {"Demo"}
                            </Button>
                        )
                    }
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProjectsBox;