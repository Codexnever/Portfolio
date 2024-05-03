import React from "react";
import Card from "react-bootstrap/Card";
import { FaArrowRight } from "react-icons/fa";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hey there! I'm <span className="purple">Chaitanya Kulthe </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />
            Currently, I'm immersed in the world of Full-stack developer at MedResto.
            <br />
            <br />
            Besides coding, I'm passionate about exploring new technologies and enhancing my skills. I enjoy diving into projects that challenge me to think creatively and problem-solve effectively.

            <br />
            <br />
            When I'm not coding, you'll find me:
          </p>
          <ul>
            <li className="about-activity">
            <FaArrowRight /> Travelling
            </li>
            <li className="about-activity">
            <FaArrowRight /> Gaming
            </li>
            <li className="about-activity">
            <FaArrowRight /> Reading
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
