import React, { Component } from 'react';
import './OtherProjects.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import exlink from '../Ex-Link.png';
// To deploy https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f

class OtherProjects extends Component {
  render() {
    return (
      <div className="ProjPage" id="otherprojects">
        <h1 className="Title">Some of my other projects</h1>
          <Grid fluid>
            <Row className="Projects">
              <Col xs={3}>
                <div className="ProjBox">
                  <h2 className="Title">Eco-Eats</h2>
                  <p className="Desc">Web browser extension &amp; website that informs users of the carbon
                                      emissions the foods they shop for on Amazon.com. </p>
                  <p className="Tools">Python, Flask, HTML, CSS, Javascript, Bootstrap</p>
                  <a href="https://github.com/chaytanc/ecoEats" target="_blank" rel="noopener noreferrer">
                    <img className="exlink" src={exlink} alt="External Link Symbol"/></a>
                </div>
              </Col>
              <Col xs={3}>
              <div className="ProjBox">
                  <h2 className="Title">Team Fight Tactics Analyzer</h2>
                  <p className="Desc">A program that collects data from Riot’s competitive match
                                      data for the game Team Fight Tactics. The data can be
                                      processed and visualized with a graph. </p>
                  <p className="Tools">Python, MatLabPlot, PySimpleGui, Riot API</p>
                  <a href="https://github.com/AngelMcCrary-Lupson/tft-patch-comp-analyzer" target="_blank" rel="noopener noreferrer">
                    <img className="exlink" src={exlink} alt="External Link Symbol"/></a>
                </div>
              </Col>
              <Col xs={3}>
              <div className="ProjBox">
                  <h2 className="Title">Husky Study Center</h2>
                  <p className="Desc">Virtual study space for UW students to work together like
                                      they would in on campus study centers. Utilizes Agora’s RTC
                                      SDK to host real time virtual calls to connect students in
                                      the same classes.</p>
                  <p className="Tools">Javascript, HTML, CSS, Agora RTC SDK</p>
                  <a href="https://github.com/AngelMcCrary-Lupson/husky-study-center" target="_blank" rel="noopener noreferrer">
                    <img className="exlink" src={exlink} alt="External Link Symbol"/></a>
                </div>
              </Col>

            </Row>
            <Row className="Projects">
              <Col xs={3}>
              <div className="ProjBox">
                  <h2 className="Title">Playback Speed Controller</h2>
                  <p className="Desc">Chrome Browser extension that allows users to control a video
                                      player’s playback speed. The user can manually input the
                                      playback speed or use buttons to adjust a video’s speed.</p>
                  <p className="Tools">Javascript, HTML, CSS</p>
                  <a href="https://github.com/AngelMcCrary-Lupson/video-playback-extension" target="_blank" rel="noopener noreferrer">
                    <img className="exlink" src={exlink} alt="External Link Symbol"/></a>
                </div>
              </Col>
              <Col xs={3}>
              <div className="ProjBox">
                  <h2 className="Title"><a href="/blackjack">Virtual Blackjack</a></h2>
                  <p className="Desc">Web based game  of video blackjack.</p>
                  <p className="Tools">HTML, CSS, Javascript</p>
                  <a href="https://angelmccrary-lupson.github.io/virtual-blackjack/" target="_blank" rel="noopener noreferrer">
                    <img className="exlink" src={exlink} alt="External Link Symbol"/></a>
                </div>
              </Col>
              <Col xs={3}>
              <div className="ProjBox">
                  <h2 className="Title">Mixed Musical Reality</h2>
                  <p className="Desc">Created a playable virtual piano for the Hololens 2
                      to make music education interactive and fun.</p>
                  <p className="Tools">C#, Unity, Hololens 2, Audacity</p>
                  <a href="https://devpost.com/software/mixed-musical-reality" target="_blank" rel="noopener noreferrer">
                    <img className="exlink" src={exlink} alt="External Link Symbol"/></a>
                </div>
              </Col>
            </Row>
            <Row className="Projects">
              <Col xs={3}>
              <div className="ProjBox">
                  <h2 className="Title">Random Lyric Generator</h2>
                  <p className="Desc">Website that generates random lyrics from a user’s choice
                                      of music artist.</p>
                  <p className="Tools">HTML, CSS, Javascript, MusixMatch Web API</p>
                  <a href="https://angelmccrary-lupson.github.io/random-lyric-generator/" target="_blank" rel="noopener noreferrer">
                    <img className="exlink" src={exlink} alt="External Link Symbol"/></a>
                </div>
              </Col>
            </Row>
          </Grid>
      </div>
    )
  }
}

export default OtherProjects;
