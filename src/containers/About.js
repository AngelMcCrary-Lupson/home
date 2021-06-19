import React, { Component } from 'react';
import './About.css';
import ProfilePic from '../headshot.jpg';
import { Row, Col } from 'react-flexbox-grid';
import resume from '../resume.pdf';

class About extends Component {
  render() {
    return (
      <div className="AboutPage" id="home">
        <div className="Intro">
          <h1 className="Title">Howdy!</h1>
          <h2 className="Text">My name is <span>Angel McCrary-Lupson</span><br /> and I
                              <span> develop software</span>.</h2>
        </div>
        <div className="About" id="about">
        <h1 className="Title">About Me</h1>
        <Row>
          <Col xs={8}>
            <p className="Text">I’m a <span>software developer</span> that wants to make people's lives easier
                                with my creations.</p>
            <p className="Text">With my bachelor's in Informatics at the University of Washington (Class of 2021)
                                I focused on <span>using technology and information to empower others</span> and is something I
                                want to continue during throughout my career.</p>
            <p className="Text">I love to tinker around with technology, learn new things,
                                and would consider myself a jack of all trades. <br />
                                Recently I’ve been learning <span>Android app development</span> and developing
                                websites with <span>React</span>.</p>
            <p className="Text">If you're curious about my experience and skills feel free to
                                keep scrolling or check out my resume
                                <a href={resume} target="_blank" rel="noopener noreferrer" ><span> here</span></a>.</p>
          </Col>
          <Col xs={4}>
            <img className="Profile" src={ProfilePic} alt="Headshot of Angel"/>
          </Col>
        </Row>
        </div>
      </div>
    )
  }
}

export default About;
