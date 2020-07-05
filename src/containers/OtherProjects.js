import React, { Component } from 'react';
import './OtherProjects.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import exlink from '../Ex-Link.png';

class OtherProjects extends Component {
  render() {
    return (
      <div className="ProjPage" id="otherprojects">
        <h1 className="Title">Some of my other projects</h1>
          <Grid fluid>
            <Row className="Projects">
              <Col xs={3}>
                <div className="ProjBox">
                  <h2 className="Title"><a href="/blackjack">Virtual Blackjack</a></h2>
                  <p className="Desc">Web based game  of video blackjack</p>
                  <p className="Tools">HTML, CSS, Javascript</p>
                  <img className="exlink" src={exlink}/>
                </div>
              </Col>
              <Col xs={3}>
                <div className="ProjBox">
                  <h2 className="Title">Mixed Musical Reality</h2>
                  <p className="Desc">Created a playable virtual piano for the Hololens 2
                      to make music education interactive and fun.</p>
                  <p className="Tools">C#, Unity, Audacity</p>
                  <a href="https://devpost.com/software/mixed-musical-reality" target="_blank">
                    <img className="exlink" src={exlink}/></a>
                </div>
              </Col>
              <Col xs={3}>
                <div className="ProjBox">
                  <h2 className="Title">Give & Get Help</h2>
                  <p className="Desc">Was the designer and researcher of a team building a website aimed
                      at centralizing accurate information in regards to natural disasters.</p>
                  <p className="Tools">Photoshop</p>
                  <img className="exlink" src={exlink}/>
                </div>
              </Col>
            </Row>
          </Grid>
      </div>
    )
  }
}

export default OtherProjects;
