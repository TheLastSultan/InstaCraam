import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import GreetingContainer from '../greeting/greeting_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      username: "",
      password: ""
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._demo = this._demo.bind(this);
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

  _demo(e) {
    e.preventDefault();
    //
    // const guest = {
    //   username: 'guest',
    //   password: 'password'
    // };

    // this.props.guestLogin(guest);



    const guest = "guest".split("");
    const pw = "password".split("");

    const autoType = (query, id, callback) => {
      const promise = new Promise( (res, rej) => {
        for (let i = 0; i < query.length; i++) {
          setTimeout( () => {
            document.getElementById(id).value += query[i];
            i ++;
          }, i*100);
        }
      });
      return promise;
    };

    autoType(guest, 'username')
      .then(autoType(pw, 'password'))
      .then(console.log('trigger'));


  }

  render() {
    const { formType } = this.props;
    const buttonText = (formType === 'login') ? `Log In` : `Sign Up`;
    let greeting, finePrint, redirect, fullname;
    if  (formType === 'signup') {
      fullname = (
        <input
          type="text"
          value={ this.state.fullname }
          onChange={ this._update('fullname') }
          placeholder='Full Name'
        />
      );
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
            <h1 className="shootr">Shootr</h1>
            { greeting }
            <form className="">
              { fullname }

              <input
                id="username"
                type="text"
                value={ this.state.username }
                onChange={ this._update('username') }
                placeholder='Username'
              />

              <input
                id="password"
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
