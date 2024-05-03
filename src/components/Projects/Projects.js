import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Screenshot 2024-05-02 014937.png";
import chat from "../../Assets/Projects/hello.jpg";
import bitsOfCode from "../../Assets/Projects/pr2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="ChatApp"
              description=
              "Create a chat application using HTML, CSS, and JavaScript for the frontend, with Node.js, Express, MongoDB, and JWT for the backend. This app facilitates real-time communication between users, secured with JSON Web Tokens (JWT) authentication. Users can exchange messages in a seamless and responsive interface, leveraging MongoDB for efficient data storage and retrieval."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="KOD (Kitchen Order-Delivery)"
              description="Designed and developed KOD (Kitchen Order Delivery) system utilizing HTML, CSS, and JavaScript for the frontend, alongside Node.js and Express for the backend, with MySQL for data storage. Streamlining restaurant operations, it enables efficient order management and real-time updates for kitchen staff through a dedicated interface."
              ghLink="https://github.com/Codexnever/KDS"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Rise restaurant"
              description="Crafted a sleek restaurant website with HTML, CSS, and jQuery, focusing on intuitive user interfaces. Implemented dynamic form functionalities to enhance user interaction, providing a seamless browsing experience for potential diners."
              ghLink="https://github.com/Codexnever/Restaurant-project"
              demoLink="#"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
