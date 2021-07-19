import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from '@material-ui/icons/GitHub';
import VisibilityIcon from '@material-ui/icons/Visibility';

import classphoto from "../../assets/images/classroom/fontpage.jfif";
import ecommerce from "../../assets/images/ecommerce/cake_website_photo.png";
import netflix from "../../assets/images/ecommerce/netflix-image.png";
import todo from '../../assets/images/ecommerce/todo.png'
import "./Project.css";

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});
const Project = () => {
  const classes = useStyles();
  return (
    <div className="pt-3 pb-3" id="projects">
      <h1 className="text-center  pb-4"> Projects</h1>
      <Container>
        <Row className="d-flex justify-content-around">
          <Col xs={10} md={5} className="mb-3">
            <Card className="project_exp">
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={classphoto}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    ClassRoom Management
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    In the Covid-19 pandemic situation, it is difficult for
                    Tutors to manage the students. So I would like to make a
                    Classroom Management System that manages the student’s
                    attendance, assignments, seminars, and exams online.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a
                  href="https://github.com/sajeevlakshmi/test.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="small" color="dark">
                    <GitHubIcon/>Git Hub
                  </Button>
                </a>
                <a
                  href="https://dlearning-web.herokuapp.com/ "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="small" color="dark">
                  <VisibilityIcon/>View Site
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Col>
          <Col xs={10} md={5} className="mb-3">
            <Card className="project_exp">
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={ecommerce}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    E-Commerce
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This web application is mainly created for the home bakers
                    and to sell their product through this site which is the
                    fundamental feature of this site. The Admin can add , view
                    the products , orders and manage customers .
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className="card-actions">
                <a
                  href="https://github.com/sajeevlakshmi/shoppingCart.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="small" color="dark">
                  <GitHubIcon/>Git Hub
                  </Button>
                </a>
                <a
                  href="https://tastycakecorner.herokuapp.com/ "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="small" color="dark">
                    <VisibilityIcon/>View Site
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex justify-content-around">
          <Col xs={10} md={5} className="mb-3">
            <Card className="project_exp">
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={netflix}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    NetFlix-Clone
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {/* In the Covid-19 pandemic situation, it is difficult for
                    Tutors to manage the students. So I would like to make a
                    Classroom Management System that manages the student’s
                    attendance, assignments, seminars, and exams online. */}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a
                  href="https://github.com/sajeevlakshmi/netflix.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="small" color="dark">
                    <GitHubIcon/>Git Hub
                  </Button>
                </a>
                <a
                  href="https://netflix-clone-49744.web.app/ "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="small" color="dark">
                  <VisibilityIcon/>View Site
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Col>
          <Col xs={10} md={5} className="mb-3">
            <Card className="project_exp">
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={todo}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Todo-App
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {/* In the Covid-19 pandemic situation, it is difficult for
                    Tutors to manage the students. So I would like to make a
                    Classroom Management System that manages the student’s
                    attendance, assignments, seminars, and exams online. */}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a
                  href="https://github.com/sajeevlakshmi/todo-app.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="small" color="dark">
                    <GitHubIcon/>Git Hub
                  </Button>
                </a>
                <a
                  href="https://todo-app-cc7d5.web.app/ "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="small" color="dark">
                  <VisibilityIcon/>View Site
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Col>
          
        </Row>
        
      </Container>
    </div>
  );
};

export default Project;
