import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Nav/Navbar";

import Header from "./components/Header/Header";
import About from "./pages/about/About";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import parallex_image from "./assets/images/parallax/parallex_img1.jpg";
import Container from "react-bootstrap/Container";
import Skills from "./pages/skills/Skills";
import Experience from "./pages/experience/Experience";
// import Carousal from "./components/carousal/Carousal";

 import { BrowserRouter as Router,Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div>
    {/* <Router>
      <Route path='/'component={}/>
    </Router> */}
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 5,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={parallex_image}
          bgImageAlt=""
          strength={-200}
        >
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>

      <div>
      
        <Skills />
      
      </div>

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={parallex_image}
          bgImageAlt=""
          strength={-200}
        >
          <Container className="container-box rounded">
            <Fade duration={500}>
              <Experience />
            </Fade>
          </Container>
        </Parallax>
      </div>
      <div>
        <Contact/>
      </div>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
