import React, { Component } from 'react';
import './About.css';
import ProfilePic from '../maxresdefault.jpg';
import { Grid, Row, Col } from 'react-flexbox-grid';
import resume from '../resume.pdf';

class About extends Component {
  render() {
    return (
      <div className="AboutPage" id="home">
        <div className="Intro">
          <h1 className="Title">Howdy!</h1>
          <h2 className="Text">My name is <span>Angel McCrary-Lupson</span><br /> and I want to
                              <span> develop software</span>.</h2>
        </div>
        <div className="About" id="about">
        <h1 className="Title">About Me</h1>
        <Row>
          <Col xs={8}>
            <p className="Text">I’m an Informatics student at the University of Washington Class of ‘22
                                and am an <span>aspiring software developer</span>.
                                </p>
            <p className="Text">I love to tinker around with technology, learn new things,
                                and would consider myself a jack of all trades. <br />
                                Recently I’ve focused on learning <span>Python</span> and developing
                                websites with <span>React</span>.</p>
            <p className="Text">If you're curious about my experience and skills feel free to
                                keep scrolling or check out my <a href={resume} target="_blank"><span>resume</span></a>.</p>
          </Col>
          <Col xs={4}>

          </Col>
        </Row>
        </div>
      </div>
    )
  }
}
        // <!--    <img className="Profile" src={ProfilePic}/> -->
export default About;
