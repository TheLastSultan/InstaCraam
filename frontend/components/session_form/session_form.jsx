import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import GreetingContainer from '../greeting/greeting_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    const { history } = this.props;
    return nextProps.loggedIn ? this.props.history.push('/') : null;
  }

  _update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    const user = this.state;
    this.props.processForm(user);
  }

  _renderErrors() {
    const { errors } = this.props;
    return (
      <ul className="errors-list">
        { errors.map( (error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  _demo() {
    console.log('demo');
  }

  render() {
    const { formType } = this.props;
    const buttonText = (formType === 'login') ? `Log In` : `Sign Up`;
    let greeting, finePrint, redirect;
    if  (formType === 'signup') {
      greeting = (
        <p className="greeting">
          Share photos with your friends and family!
        </p>
      );
      finePrint = (
        <p className="fine-print">
          Sign up! We don't have a <strong>Terms &amp; Privacy
          Policy</strong>.
        </p>
      );
      redirect = (
        <p>
          Have an account? <Link to="/login">Log in</Link>
        </p>
      );
    } else {
      greeting = (
        <p className="greeting">
          Welcome back!
        </p>
      );
      redirect = (
        <p>
          Don't have account? <Link to="/signup">Sign up</Link>
        </p>
      );
    }
    
    return (
      <div className="splash-container container">
        <div className="splash-image-container">&nbsp;</div>
        <div className="splash-form-container">
          <div className="session-form splash-box">
            <h1>Shootr</h1>
            { greeting }
            <form className="">
              <input
                type="text"
                value={ this.state.username }
                onChange={ this._update('username') }
                placeholder='Username'
              />

              <input
                type="password"
                value={ this.state.password }
                onChange={ this._update('password') }
                placeholder='Password'
              />

              { this._renderErrors() }

              <button onClick={ this._handleSubmit }>
                { buttonText }
              </button>

              <div className="or-container">
                <span className="line">&nbsp;</span>
                <span className="or">or</span>
                <span className="line"></span>
              </div>

              <button onClick={ this._demo }>Demo</button>
              { finePrint }
            </form>
          </div>
          <div className="redirect splash-box">
            { redirect }
          </div>
          <div className="cta">
            Check out the
            <a href="https://github.com/nrrs/shootr/" target="_blank"> repo</a>.
          </div>
        </div>
      </div>
    );
  }


}

export default withRouter(SessionForm);
