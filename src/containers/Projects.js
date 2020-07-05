import React, { Component } from 'react';
import './Projects.css';
import Scraper from '../scraper.png';
import Lyric from '../lyric.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import exlink from '../Ex-Link-Dark.png';

class Projects extends Component {
  render() {
    return (
      <div className="ProjectPage" id="projects">
        <h1 className="Title">Things I've Built</h1>
          <Grid fluid>
            <Row id="Project1">
              <Col xs className="Project Left">
                <h2 className="Title">Job & Internship Scraper</h2>
                <p className="Desc">Scrapes various job postings off of job offering
                                     websites and allows the user to keep track of
                                     their favorites.</p>
                <p className="Tools">Python, Beautiful Soup, Flask, Javascript, Bootstrap, Heroku</p>
                <a href="https://ireallywantaninternship.herokuapp.com/" target="_blank"><img className="exlink" src={exlink}/></a>
              </Col>
              <Col xs className="Project Right">
                <img className="ScreenShot" src={Scraper}/>
              </Col>
            </Row>
            <Row id="Project2">
              <Col xs className="Project Left">
                <img  className="ScreenShot" src={Lyric}/>
              </Col>
              <Col xs className="Project Right">
                <h2 className="Title">Random Lyric Generator</h2>
                <p className="Desc">Generates random lyrics from a user’s
                                    choice of music artist.</p>
                <p className="Tools">HTML, CSS, Javascript, Musixmatch Web API</p>
                <a href="https://angelmccrary-lupson.github.io/random-lyric-generator/" target="_blank">
                  <img className="exlink" src={exlink}/>
                </a>
              </Col>
          </Row>
          </Grid>
      </div>
    )
  }
}

export default Projects;
