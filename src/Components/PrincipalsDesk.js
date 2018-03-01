import React, { Component } from 'react';
import PrincipalImage from '../Resources/principal.jpg';
import PrincipalDirectorMessage from './PrincipalDirectorMessage.js';
import {Image, Modal} from 'react-bootstrap';
import {principalMessageHeading} from '../Resources/Text.js';
import {principalName, principalMessage} from '../Resources/Text.js';
import {truncateLongTexts} from '../Utils/stringManipulations.js'
import '../Stylesheets/PrincipalsDesk.css';

class PrincipalsDesk extends Component {

  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="principalsDesk">
        <Image src={PrincipalImage} responsive />
        <h3>Principal's Desk</h3>
        <p> {truncateLongTexts(principalMessage[0], 190)}...<a onClick={this.handleShow}>more</a> </p>
        <Modal keyboard show={this.state.show} onHide={this.handleClose} dialogClassName="director-modal">
          <Modal.Header closeButton>
            <Modal.Title>{principalMessageHeading}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PrincipalDirectorMessage img={PrincipalImage} name={principalName} message={principalMessage}/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default PrincipalsDesk;
