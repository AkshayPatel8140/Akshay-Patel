import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { VscDeviceMobile } from "react-icons/vsc";
import { CiMobile3 } from "react-icons/ci";
import { BsGithub } from "react-icons/bs";

function linkButtonIcon(type) {
  switch (type.toLowerCase()) {
    case 'ios':
      return <CiMobile3 />
    case 'android':
      return <VscDeviceMobile />
    case 'github':
      return <BsGithub />
    case 'site':
      return <CgWebsite />
    default:
      return <></>
  }

}

function AppLinks(params) {
  return (
    params.appLikes.map((element) =>
      <Button variant="primary" href={element.link} target="_blank" style={{ margin: "5px" }}>
        {linkButtonIcon(element.type)} &nbsp;
        {`${element.name}`}
      </Button>
    )
  )
}

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath && <Card.Img variant="top" src={props.imgPath} alt="card-img" />}
      <Card.Body>
        <Card.Title><strong className="purple">{props.title}</strong></Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {"\n"}{"\n"}
        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> 
            &nbsp;
            {"Demo"}
          </Button>
        )}
        {props?.appLikes?.length > 0 && AppLinks(props)}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
