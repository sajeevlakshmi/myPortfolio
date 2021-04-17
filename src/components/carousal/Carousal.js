import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from "../../assets/images/carousal/slide1.jpg";
import Slide2 from "../../assets/images/carousal/slide2.jpg";
import Slide3 from "../../assets/images/carousal/slide3.jpg";
import './Carousal.css'

const Carousal = () => {
    return (
        <div className="carousal">
            <Carousel controls={false} indicators interval={2500} pause={false}>
  <Carousel.Item>
    <img
      className="d-block w-100" src={Slide1} alt="First slide"/>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" src={Slide2} alt="Second slide"/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100"src={Slide3} alt="Third slide"/>
  </Carousel.Item>
</Carousel>
       </div>
    )
}

export default Carousal

