import React from 'react';
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoSubmit = this.demoSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }
    componentDidMount(){
      this.props.clearErrors();
  }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);

        this.props.processForm(user);
    }

    demoSubmit(e){
      e.preventDefault();
      const demoUser = {
        username: "DemoUser",
        password: "password",
        email: "demo@gmail.com",
      }
      this.props.processForm(demoUser);
  }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    componentDidUpdate() {
      // this.props.clearErrors();
    }
    componentWillUnmount() {
      this.props.clearErrors();
    }

    renderErrors() {
        if (this.props.errors.length){
            return (
                <div>
                    {this.props.errors.map((error, i) => (
                        <p key={`error-${i}`}>
                            {error}
                        </p>
                    ))}
                </div>
            )
        } else {
            return null;
        }

    }

    render(){
      if (this.props.formType === 'Login') {
        return (
          <div className="session-form-background">
            <div className="login-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                  <h1 className="welcome">Welcome back!</h1>
                  <p className="excited">We're so excited to see you again!</p>
                    <div className='error-message-login'>{this.renderErrors()}</div>
                    <div className="login-form">
                        <label>USERNAME
                          <br />
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>PASSWORD
                          <br />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                <p className="need-account">Need an account? <Link to="/signup" className="register">Register</Link></p>
                </form>
                <div className='demo-login'>
                  <button className='demo-button' onClick={(e) => this.demoSubmit(e)}>Demo Log In</button>
                  <p className="demo-info">Log in with a demo user</p>
                </div>
            </div>
          </div>
        );
      } else {
          return (
            <div className="session-form-background">
                <div className="signup-container">
                    <form onSubmit={this.handleSubmit}>
                        <h1 className="create">Create an account</h1>
                        <div className='error-message-signup'>{this.renderErrors()}</div>
                        <div className="signup-form">
                          <label className="email-signup">
                          <div className='username-signup-text'>
                            EMAIL
                          </div>
                            <br/>
                              <input type="email"
                              value={this.state.email}
                              onChange={this.update("email")}
                              required={true}></input>
                          </label>
                          <br/>
                          <label className="username-signup">
                            <div className='username-signup-text'>
                              USERNAME
                            </div>
                            <br/>
                              <input type="text"
                              value={this.state.username}
                              onChange={this.update("username")}></input>
                          </label>
                          <br/>
                          <label className="password-signup">
                          <div className='username-signup-text'>
                            PASSWORD
                          </div>
                            <br/>
                              <input type="password"
                              value={this.state.password}
                              onChange={this.update("password")}></input>
                          </label>
                          <br/>
                          <button className="session-form-button">Continue</button>
                        </div>
                    </form>
                    <Link to="/login" className="register">Already have an account?</Link>
                </div>
            </div>
          )
       }
    }
}

export default SessionForm;