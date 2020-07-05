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
              <a href="/home/#home">Home</a>
            </Col>
            <Col xs={3}>
              <a href="/home/#about">About</a>
            </Col>
            <Col xs={3}>
              <a href="/home/#projects">Projects</a>
            </Col>
            <Col xs={3}>
              <a href="/home/#contact">Contact</a>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default NavBar;
