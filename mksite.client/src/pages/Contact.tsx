import { Button, ButtonGroup, Card, Container } from "react-bootstrap";
import JavaImg from "../assets/logos/Java.svg";
import style from "../assets/Contact.module.css";
import Phone from "../assets/Phone.svg";
import Email from "../assets/Email.svg";
import LinkedIn from "../assets/LinkedIn.svg";

const ContactCard = (props) => {
  return (
    <Card className={`${style.card}`} style={{ width: "20rem" }}>
      <Card.Img variant="top" src={JavaImg} height="180px" />
      <Card.Body>
        <Card.Title className={`${style.title}`}>Madeeha Khan</Card.Title>
        <Card.Text>hi! thanks for visiting!</Card.Text>
        <ButtonGroup>
          <Button className={`${style.button}`}>
            <a href={`tel:${Phone}`}>
              <img width="25px" height="25px" src={Phone} alt="Call"></img>
            </a>
          </Button>
          <Button className={`${style.button}`}>
            <a
              href="https://www.linkedin.com/in/madeeha-khan-1a0741116/"
              target="_blank"
            >
              <img
                width="25px"
                height="25px"
                src={LinkedIn}
                alt="LinkedIn"
              ></img>
            </a>
          </Button>
          <Button className={`${style.button}`}>
            <a href={`mailto:${Email}`}>
              <img width="25px" height="25px" src={Email} alt="Email"></img>
            </a>
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export const Contact = () => {
  //add linkedin and email and phone
  //add link to full resume pdf
  return (
    <Container className={`${style.contact}`}>
      <ContactCard></ContactCard>
    </Container>
  );
};
