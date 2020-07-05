import React, { Component } from 'react';
import './NavBar.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <Grid>
          <Row between="xs">
            <Col xs={3}>
              <a href="/#home">Home</a>
            </Col>
            <Col xs={3}>
              <a href="/#about">About</a>
            </Col>
            <Col xs={3}>
              <a href="/#projects">Projects</a>
            </Col>
            <Col xs={3}>
              <a href="/#contact">Contact</a>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default NavBar;
