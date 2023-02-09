import {React} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {BsGithub} from "react-icons/bs";
import {SiBloglovin} from "react-icons/si";
import {BsFileEarmarkPlay} from "react-icons/bs";
function ProjectsBox(props) {

    return (
        <Card
            border="primary"
            style={{
                borderRadius: "25px 25px 5px 5px",
                border: "none"
            }}className="project-box-view">
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


                    {
                        props.link && (
                            
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
                    &nbsp; Github
                </Button>
                        )
                    }

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
                                <BsFileEarmarkPlay/>
                                &nbsp; {"Demo"}
                            </Button>
                        )
                    }

                    {
                        props.bloglink && (
                            <Button
                                className="btn btn-success"
                                variant="primary"
                                href={props.bloglink}
                                target="_blank"
                                style={{
                                    margin: "3px",
                                    fontSize: "13px"
                                }}>
                                <SiBloglovin/>
                                &nbsp; {"Blog"}
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