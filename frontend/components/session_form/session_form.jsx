import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);

    if (this.props.demo) {
      this.startUsernameAnimation();
    }
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  startUsernameAnimation(){
     this.clearFields();

     const demoName = 'guest_user';
     let emailID = setInterval(() => {
       document.getElementById('email').focus();
       let currLength = this.state.email.length;

       if(currLength < demoName.length){
         this.setState({email: this.state.email + demoName.slice(currLength, currLength + 1)});
       } else {
         clearInterval(emailID);
         this.startPasswordAnimation();
       }
     }, 100);
   }

  startPasswordAnimation(){
   const demoPassword = 'password';
   let passwordID = setInterval(() => {
     document.getElementById('password').focus();
     let currLength = this.state.password.length;

     if(currLength < demoPassword.length){
       this.setState({password: this.state.password + demoPassword.slice(currLength, currLength + 1)});
     } else{
       clearInterval(passwordID);
       const user = this.state;
       this.props.processForm({ user });
     }
   }, 100);
  }

  redirectIfLoggedIn() {
   if (this.props.loggedIn) {
     this.props.router.push('/');
   }
  }

  clearFields(){
   this.setState({fname: '', lname: '', email: '', password: ''});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({ user });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="session-form-container">
        <div className="session-top">
          <h1>Welcome to CareBnB!</h1>
        </div>
        {this.renderErrors()}
        <div className="session-form">
          <input type="text"
            id='email'
            placeholder="email"
            value={this.state.email}
            onChange={this.update("email")}/>
          <input type="password"
            id='password'
            placeholder="Password"
            value={this.state.password}
            onChange={this.update("password")}/>
          <input type="submit" value="Submit"
            className="button"/>
        </div>
        <div className="session-bot">
          <h2>Already have an account?</h2>
        </div>
      </form>
    );
  }
}

export default withRouter(SessionForm);
