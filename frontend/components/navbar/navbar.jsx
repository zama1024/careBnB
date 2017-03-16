import React from 'react';
import { hashHistory, replace, Link } from 'react-router';

import Modal from 'react-modal';
import { authModalStyle } from '../../util/modal_styles';

import SessionFormContainer from '../session_form/session_form_container';

document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.body);
});

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "", showModal: false, formType: '' };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.logout = this.logout.bind(this);

    this.toListingForm = this.toListingForm.bind(this);
    this.toMyListings = this.toMyListings.bind(this);
    this.toMyBookings = this.toMyBookings.bind(this);
  }

  openModal(type, demo) {
    this.setState({ showModal: true, formType: type, demo: demo });
  }

  closeModal() {
    this.setState({ showModal: false, demo: false });
  }

  logout() {
    this.setState({ showModal: false, demo: false });
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
    hashHistory.push('/listings/new');
  }


  toMyListings() {
    hashHistory.push('/myListings');
  }

  toMyBookings() {
    hashHistory.push('/myBookings');
  }

  toHome() {
    hashHistory.push('/');
  }

  sessionLinks() {
    return (
      <div className="nav-container">
        <div id="logoContainer" className="" >
          <Link to="/"><img id="vid" src={window.logo}></img></Link>
        </div>
        <div id="search">
          <input className="searchHidden" type="text" onChange={ this.search.bind(this) }/>
        </div>
        <div className="leftContainer">
          <a className="link" onClick={this.openModal.bind(this, 'signup', false)}>Become a Host</a>
          <a className="link" onClick={this.openModal.bind(this, 'signup', false)}>Sign Up</a>
          <a className="link" onClick={this.openModal.bind(this, 'login', false)}>Log In</a>
          <a className="link" onClick={this.openModal.bind(this, 'login', true)}>Demo</a>
        </div>
        <Modal isOpen={this.state.showModal}
          onRequestClose={this.closeModal.bind(this)}
          style={authModalStyle}
          contentLabel="Example Modal">
          <SessionFormContainer formType={this.state.formType}
            closeModal={this.closeModal.bind(this)}
            toggleForm={this.toggleForm.bind(this)}
            demo={this.state.demo} />
        </Modal>
      </div>
    );
  }

  search(e) {
    e.preventDefault();
    this.setState({address: e.target.value});
    let searchCity = this.state.address;
    this.props.updateSearchParams({address: e.target.value});
  }

  greeting() {
    return (
      <div className="nav-container">
        <div id="logoContainer" className="" onClick={this.toHome.bind(this)}>
          <img id="vid" src={window.logo}>
          </img>
        </div>
        <div id="search">
          <input className="searchHidden" type="text" onChange={ this.search.bind(this) }/>
        </div>
        <div className="leftContainer">

          <a id="bahost" className="link" onClick={this.toListingForm}>Become a Host</a>
          <a className="link" onClick={this.toMyListings}>Listings</a>
          <a className="link" onClick={this.toMyBookings}>Bookings</a>
          <a className="link" onClick={this.logout}>Logout</a>
        </div>
        <img id="navimg" src={this.props.currentUser.profile_pic_url} />
      </div>
    );
  }


  render() {
    const currentUser = this.props.currentUser;
    const logout = this.props.logout;

    return currentUser ? this.greeting() : this.sessionLinks();
  }
}

export default Nav;
