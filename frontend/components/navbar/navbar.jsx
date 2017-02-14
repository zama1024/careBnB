import { Link } from 'react-router';
import React from 'react';

export default class navBar extends React.Component {
  logout(){
    (this.props.logout(this.props.currentUser));
  }
  render() {
    if (this.props.currentUser){
      return (
        <div>
          <h1>Welcome {this.props.currentUser.username}</h1>
          <button onClick={ this.logout.bind(this) }>Log Out</button>
        </div>
      );
    }else {
      return(
        <ul className="navbar">
          <li className="logo"><Link to='/'>{"CareBnB"}</Link></li>
          <li><Link to='/'>Become a Host</Link></li>
          <li><Link to='/'>Sign Up</Link></li>
          <li><Link to='/'>Log In</Link></li>
        </ul>
      );
    }
  }
}
