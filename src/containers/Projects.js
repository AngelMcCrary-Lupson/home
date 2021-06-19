import React, { Component } from 'react';
import './Projects.css';
import Scraper from '../scraper.png';
import FundingFinder from '../fundingfinder.png';
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
                <h2 className="Title">Funding Finder</h2>
                <p className="Desc">Award winning iSchool Capstone project that helps small
                                    businesses in Washington state connect with funding and assistance organizations
                                    in order to become more resilient.</p>
                <p className="Tools">React, Typescript, Bulma, Material UI, Bootstrap</p>
                <a href="https://laurenng.github.io/about-kala/dist/index.html" target="_blank" rel="noopener noreferrer">
                  <img className="exlink" src={exlink} alt="External Link Symbol"/>
                </a>
              </Col>
              <Col xs className="Project Right">
                <img className="ScreenShot" src={FundingFinder} alt="Funding and Assitance page of Funding Finder website"/>
              </Col>
            </Row>
            <Row id="Project2">
              <Col xs className="Project Left">
                <img className="ScreenShot" src={Scraper} alt="Homepage of Internship Scraper Website"/>
              </Col>
              <Col xs className="Project Right">
                <h2 className="Title">Job &amp; Internship Scraper</h2>
                <p className="Desc">Scrapes various job postings off of job offering
                                     websites and allows the user to keep track of
                                     their favorites.</p>
                <p className="Tools">Python, Beautiful Soup, Flask, Javascript, Bootstrap, Heroku</p>
                <a href="https://ireallywantaninternship.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <img className="exlink" src={exlink} alt="External Link Symbol"/>
                </a>
              </Col>
            </Row>
          </Grid>
      </div>
    )
  }
}

export default Projects;
