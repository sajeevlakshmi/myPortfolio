import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import emailjs from "emailjs-com";
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

import "./Contact.css";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }
  handleChange = (event) => {
    console.log(event.target.value);
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uk8ofpj', 'template_3kcl8ej', e.target,'user_7h7pWHUQYHKqorqxqs6uX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      this.setState({
        name: "",
        email: "",
        message: ""
      });
     alert("Message sent successfully")
   
  };
  render() {
    return (
      <div className="pt-3 pb-3" id="contact">
        <h1 className="pt-3 text-center  pb-3">contact me</h1>
        <hr />
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
          
            <Col
              xs={12}
              md={4}
              className="align-items-start p-2  rounded"
            >
              
              <h4>Contact</h4>
              <Card className="card-body rounded">
                <Card.Body  >
                  <div className=" align-items-start p-2">
                    <p >Email</p>
                    <p><EmailIcon/>sajeev.lakshmi@gmail.com</p>

                  </div>
                  <div  className="align-items-start p-2">
                  <p >Phone</p>
                    <p ><CallIcon/>+971-552850158</p>
                  </div>
                  
                </Card.Body>
              </Card>
             
            </Col>
          
            <Col xs={12} md={2}></Col>
            <Col xs={12} md={6}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label htmlFor="full-name">Full Name</Form.Label>
                  <Form.Control
                    id="full-name"
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control
                    id="email"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="message">Message</Form.Label>
                  <Form.Control
                    id="message"
                    name="message"
                    as="textarea"
                    rows="3"
                    value={this.state.message}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Button
                  className="d-inline-block"
                  variant="dark"
                  type="submit"
                >
                  Submit
                </Button>
                
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
// align-items-start p-2