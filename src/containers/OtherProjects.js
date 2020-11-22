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
                  <h2 className="Title">Team Fight Tactics Analyzer</h2>
                  <p className="Desc">A program that collects data from Riot’s competitive match
                                      data for the game Team Fight Tactics. The data can be
                                      processed and visualized with a graph. </p>
                  <p className="Tools">Python, MatLabPlot, PySimpleGui, Riot API</p>
                  <a href="https://github.com/AngelMcCrary-Lupson/tft-patch-comp-analyzer" target="_blank">
                    <img className="exlink" src={exlink}/></a>
                </div>
              </Col>
              <Col xs={3}>
                <div className="ProjBox">
                  <h2 className="Title">Mixed Musical Reality</h2>
                  <p className="Desc">Created a playable virtual piano for the Hololens 2
                      to make music education interactive and fun.</p>
                  <p className="Tools">C#, Unity, Hololens 2, Audacity</p>
                  <a href="https://devpost.com/software/mixed-musical-reality" target="_blank">
                    <img className="exlink" src={exlink}/></a>
                </div>
              </Col>
              <Col xs={3}>
                <div className="ProjBox">
                  <h2 className="Title">Random Lyric Generator</h2>
                  <p className="Desc">Website that generates random lyrics from a user’s choice
                                      of music artist.</p>
                  <p className="Tools">HTML, CSS, Javascript, MusixMatch Web API</p>
                  <a href="https://angelmccrary-lupson.github.io/random-lyric-generator/" target="_blank">
                    <img className="exlink" src={exlink}/></a>
                </div>
              </Col>

            </Row>
            <Row className="Projects">
              <Col xs={3}>
                <div className="ProjBox">
                  <h2 className="Title"><a href="/blackjack">Virtual Blackjack</a></h2>
                  <p className="Desc">Web based game  of video blackjack.</p>
                  <p className="Tools">HTML, CSS, Javascript</p>
                  <a href="https://angelmccrary-lupson.github.io/virtual-blackjack/" target="_blank">
                    <img className="exlink" src={exlink}/></a>
                </div>
              </Col>
            </Row>
          </Grid>
      </div>
    )
  }
}

export default OtherProjects;
