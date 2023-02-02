import {React} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {CgWebsite} from "react-icons/cg";
import {BsGithub} from "react-icons/bs";

function ProjectsBox(props) {

    return (
        <Card border="primary" style={{ borderRadius:"25px 25px 5px 5px", border:"none" }}className="project-box-view">
            <Card.Header className="cardHeader">{props.header}</Card.Header>
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

                <Card.Img variant="bottom" src={props.imgPath} alt="card-img"/>

            </Card.Body>
        </Card>
    );
}

export default ProjectsBox;