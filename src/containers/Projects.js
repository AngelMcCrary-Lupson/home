import React, { Component } from 'react';
import './Projects.css';
import Scraper from '../scraper.png';
import Eco from '../ecoeats.jpg';
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
                <img  className="ScreenShot" src={Eco}/>
              </Col>
              <Col xs className="Project Right">
                <h2 className="Title">Eco-Eats</h2>
                <p className="Desc">Web browser extension & website that informs users of the carbon
                                    emissions the foods they shop for on Amazon.com. </p>
                <p className="Tools">Python, Flask, HTML, CSS, Javascript, Bootstrap</p>
                <a href="https://ecoeats.pythonanywhere.com/" target="_blank">
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
