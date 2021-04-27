import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import classphoto from '../../assets/images/classroom/fontpage.jfif';
import ecommerce from '../../assets/images/ecommerce/e-commerce.jpg';
 import './Project.css';

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
         <Col xs={12} md={6}  >
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
          <Typography variant="body2" color="textSecondary" component="p">
          In the Covid-19 pandemic situation, it is difficult for Tutors to manage the students.
           So I would like to make a Classroom Management System that manages the student’s attendance, assignments, seminars, and exams online.  
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href="https://github.com/sajeevlakshmi/test.git" target="_blank" rel="noopener noreferrer" >
        <Button size="small" color="primary">
          Source Code
        </Button>
        </a>
        <a href="https://dlearning-web.herokuapp.com/ " target="_blank" rel="noopener noreferrer">
        <Button size="small" color="primary">
          Live
        </Button></a>
      </CardActions>
    </Card>  

        
         </Col>
         <Col xs={12} md={6} className="" >
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
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Source Code
        </Button>
        <Button size="small" color="primary">
          Live
        </Button>
      </CardActions>
    </Card>  

        
         </Col>
         
     </Row>
     </Container>
        </div>
    )
}

export default Project

