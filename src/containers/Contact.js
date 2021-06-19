import React, { Component } from 'react';
import './Contact.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import linkedin from '../linkedin.png';
import github from '../github.png';

class OtherProjects extends Component {
  render() {
    return (
      <div className="Page" id="contact">
        <h1 className="Title">Contact</h1>
        <p>I’m always looking for <span>new opportunities</span> to learn and grow,
            so feel free to get in touch
            if you have any questions or anything else.</p>
        <p>Email me <a href="mailto:angel.mccrary.lupson@gmail.com"><span>here </span></a>
            and let’s chat!</p>
        <Grid>
        <Row center="xs">
        </Row>
        <hr />
        <Row center="xs">
          <Col><a href="https://github.com/AngelMcCrary-Lupson"><img className="Socials" src={github} alt="Github Logo"/></a></Col>
          <Col><a href="https://www.linkedin.com/in/angel-mccrary-lupson"><img className="Socials" src={linkedin} alt="Linkedin Logo"/></a></Col>
        </Row>
        <footer>Angel McCrary-Lupson &copy; All Rights Reserved.</footer>
        </Grid>
      </div>
    )
  }
}

export default OtherProjects;
