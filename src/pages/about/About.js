import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Profile from '../../assets/images/profile/DSC_0287 copy.JPG'

const About = () => {
    return (
        <div id="about">
            <div className="about">

            <h1 className="pt-3 text-center  pb-3">About Me</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
           
                    {/* Profile picture */}
                   <Col xs={12} md={6} >
                   <Row className="justify-content-center mb-2  ">
                     <Image className="profile justify-content-end" alt="profile" src={Profile}  thumbnail fluid />
                   </Row>
                   </Col>
                   {/* About Me Description */}
                   <Col xs={12} md={6}>
                       {/* Description */}
                       <Row className="align-items-start p-2 my-details rounded">
                       Hi there! I am <strong>&nbsp;Lakshmi Priya</strong>
                <br />A passionate programmer , born and brought up in India. I am a Full Stack Web Developer with React.js,  Express.js, Node.js, and MongoDb as my tech stack.
                <br />
                In 2008, I successfully completed my Engineering with specialization in 'Computer Science and Engineering'.
                <br />
                I have a steady source of motivation that drives me to do my best. 
              
                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  {/* <div>
                    <Link to="/contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                      </Link>
                  </div> */}
                  <div>
                    <a href="https://drive.google.com/file/d/1yd64ta5GL60HpWmrY6B9Pz8G35VZVzk-/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/sajeevlakshmi" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    {/* <a href="https://www.linkedin.com/in/lakshmi-priya-8aa49a79/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a> */}
                  </div>
                </Col>
                       </Row>
                       {/* Buttons */}
                       <Row>

                       </Row>
                   </Col>

                </Row>
            </Container>
            </div>
        </div>
    )
}

export default About
