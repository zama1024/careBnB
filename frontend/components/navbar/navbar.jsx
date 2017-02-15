import React from 'react';
import { hashHistory } from 'react-router';

import Modal from 'react-modal';
import { authModalStyle } from '../../util/modal_styles';

import SessionFormContainer from '../session_form/session_form_container';

document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.body);
});

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { authModal: false, formType: '' };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this._logout = this._logout.bind(this);

    this.toListingForm = this.toListingForm.bind(this);
    this.toMyListings = this.toMyListings.bind(this);
    this.toMyBookings = this.toMyBookings.bind(this);
  }

  openModal(type, demo) {
    this.setState({ authModal: true, formType: type, demo: demo });
  }

  closeModal() {
    this.setState({ authModal: false, demo: false });
  }

  _logout() {
    this.setState({ authModal: false, demo: false });
    this.props.logout();
  }

  toggleForm() {
    if (this.state.formType === 'signup'){
      this.setState({ formType: 'login' });
    } else {
      this.setState({ formType: 'signup' });
    }
  }

  toListingForm() {
    hashHistory.push('/listing/new');
  }


  toMyListings() {
    hashHistory.push('/myListing');
  }

  toMyBookings() {
    hashHistory.push('/myBooking');
  }

  toHome() {
    hashHistory.push('/');
  }

  sessionLinks() {
    return (
      <div className="nav-container">
        <div className="nav-links">
          <a className="logo link" onClick={this.toHome.bind(this)}>CareBnB</a>
          <a className="link">Become a Host</a>
          <a className="link" onClick={this.openModal.bind(this, 'signup', false)}>Sign Up</a>
          <a className="link" onClick={this.openModal.bind(this, 'login', false)}>Log In</a>
          <a className="link" onClick={this.openModal.bind(this, 'login', true)}>Demo</a>
        </div>
        <Modal isOpen={this.state.authModal}
          onRequestClose={this.closeModal.bind(this)}
          style={authModalStyle}>
          <SessionFormContainer formType={this.state.formType}
            closeModal={this.closeModal.bind(this)}
            toggleForm={this.toggleForm.bind(this)}
            demo={this.state.demo}
          />
        </Modal>
      </div>
    );
  }

  personalGreeting() {
    return (
      <div className="nav-container">
        <div className="greeting-buttons-container">
          <button onClick={this.toListingForm}>Become a Host</button>
          <button onClick={this.toMyListings}>Listings</button>
          <button onClick={this.toMyBookings}>Bookings</button>
          <button onClick={this._logout}>Logout</button>
        </div>
      </div>
    );
  }

  greeting() {
    const currentUser = this.props.currentUser;
    const logout = this.props.logout;

    return (
      currentUser ? this.personalGreeting(currentUser, logout) : this.sessionLinks()
    );
  }

  render() {
    return this.greeting();
  }
}

export default Nav;
