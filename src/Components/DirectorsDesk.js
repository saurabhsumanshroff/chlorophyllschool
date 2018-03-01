import React, { Component } from 'react';
import DirectorImage from '../Resources/director.jpg';
import PrincipalDirectorMessage from './PrincipalDirectorMessage.js';
import {Image, Modal, Button} from 'react-bootstrap';
import {directorMessageHeading} from '../Resources/Text.js';
import {directorName, directorMessage} from '../Resources/Text.js';
import '../Stylesheets/DirectorsDesk.css';

class DirectorsDesk extends Component {

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
      <div className="directorsDesk">
        <Image src={DirectorImage} responsive />
        <h3>Director's Desk</h3>
        <p> Director Message Director Message Director Message Director Message Director Message Director Message Director Message Director Message Director Message </p>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Launch demo modal
        </Button>
        <Modal keyboard show={this.state.show} onHide={this.handleClose} dialogClassName="director-modal">
          <Modal.Header closeButton>
            <Modal.Title>{directorMessageHeading}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PrincipalDirectorMessage img={DirectorImage} name={directorName} message={directorMessage}/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default DirectorsDesk;
