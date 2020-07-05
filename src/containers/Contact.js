import React, { Component } from 'react';
import './Contact.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import linkedin from '../linkedin.png';
import github from '../github.png';
// const phpURL = "http://students.washington.edu/angelml/Personal%20Website/contact.php";
// add loading circle and validation for sending a message
class OtherProjects extends Component {
//   formSubmission = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.target);
// //this should be fixed when I put everything on one host
//     fetch(phpURL, {
//       method: 'POST',
//       body: data,
//       mode: 'cors',
//       headers: {
//       'Content-Type': 'text/plain'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//   }).then(function(parseText) {
//       let text = parseText;
//       console.log(text);
//       return text;
//     }
//   ).then(function(response) {
//       alert(response);
//       console.log("Sent");
//     });
//
//   }



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
          <Col><a href="https://github.com/AngelMcCrary-Lupson"><img className="Socials" src={github} /></a></Col>
          <Col><a href="https://www.linkedin.com/in/angel-mccrary-lupson"><img className="Socials" src={linkedin}/></a></Col>
        </Row>
        <footer>Angel McCrary-Lupson &copy; All Rights Reserved.</footer>
        </Grid>
      </div>
    )
  }
}

// <form onSubmit={this.formSubmission}>
//   <Col><input type="text" name="name" placeholder="Name" required></input></Col>
//   <Col><input type="text" name="email" placeholder="Email" required></input></Col>
//   <Col><textarea id="Message" name="message" placeholder="Message"></textarea></Col>
//   <input type="submit" name="submit" value="Submit"></input>
// </form>

export default OtherProjects;
