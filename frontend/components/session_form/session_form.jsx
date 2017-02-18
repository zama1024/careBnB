import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formType: this.props.formType
    };
    this.handleSubmit = this.handleSubmit.bind(this);

    if (this.props.demo) {
      this.startUsernameAnimation();
    }
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  startUsernameAnimation(){
     this.setState({email: '', password: ''});

     const demoName = 'guest@email.com';
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
       this.props.login(user);
     }
   }, 100);
  }

  redirectIfLoggedIn() {
   if (this.props.loggedIn) {
     this.props.router.push('/');
   }
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({},this.state);
    if (user.formType === "signup") {
      delete user.formType;
      this.props.signup(user);
    }else{
      delete user.formType;
      this.props.login(user);
    }
  }

  renderErrors() {
    if(this.props.errors.base){
      return(
        <ul>
          {this.props.errors.base.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      );
    }else{
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      );
    }
  }

  toggleForm(e){
    e.preventDefault();
    this.props.clearErrors();
    if(this.state.formType === "login"){
      this.setState({email: '', password: '',formType: "signup"});
    }else {
      this.setState({email: '', password: '', formType: "login"});
    }
  }

  render() {
    let care = "CARE";
    let label = this.state.formType === "signup" ? "Sign Up" : "Log In";
    let prompt = this.state.formType === "signup" ? "Already have a CareBnB account?" : "Don't have a CareBnB account?";
    return (
      <form onSubmit={this.handleSubmit} className="session-form-container">
        <div className="session-top">
          <span id="greeting">We are glad to see that you<span id="care"> {care}</span></span>
        </div>
        <hr></hr>
        {this.renderErrors()}
        <div className="session-form">
          <input placeholder="Email Address" className="inp" type="email"
            id='email'
            value={this.state.email}
            onChange={this.update("email")}/>
          <input className="inp" placeholder="Create a Password" type="password"
            id='password'
            value={this.state.password}
            onChange={this.update("password")}/>
          <input type="submit" value={label}
            className="button"/>
        </div>
        <hr></hr>
        <div id="prompt">{prompt}</div>
        <div className="session-bot">
          <div onClick={this.toggleForm.bind(this)} id="bot-butt">{label === "Sign Up" ? "Log In" : "Sign Up"}</div>
        </div>
      </form>
    );
  }
}

export default withRouter(SessionForm);
