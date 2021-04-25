import React from 'react';
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
        <div className="main-info">
            <h1>Hi,I am Lakshmi</h1>
            <h2>Web Developer</h2>
            <Typed
            className="typed-text"
            strings={["Web Design","Web Development","Learner"]}
            typeSpeed={40}
            backSpeed={60}
            loop
            />
        </div>          
       </div>
    )
}

export default Header

