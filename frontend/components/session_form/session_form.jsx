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

    if (this.props.formType !== nextProps.formType) {
      nextProps.clearErrors();
    }
    return nextProps.loggedIn ? this.props.history.push('/') : null;
  }

  componentWillUnmount() {
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
    const fullname = "Barney Stinson".split(""),
          username = "The_Barnacle".split(""),
          password = "password".split(""),
          batman = {
            fullname: 'Barney Stinson',
            username: 'The_Barnacle',
            password: 'password'
          };
    const delayTime = 100;

    const autoType = (query, id) => {
      const promise = new Promise( (resolve, reject) => {
        for (let i = 0; i < query.length; i++) {
          setTimeout( () => {
            document.getElementById(id).value += query[i];
            i ++;
            if (i === query.length-1) {
              setTimeout( () => {
                resolve();
              }, delayTime * 3);
            }
          }, i*delayTime);
        }
      });
      return promise;
    };

    if  (this.props.formType === 'signup') {
      autoType(fullname, 'fullname')
        .then( () => autoType(username, 'username'))
        .then( () => autoType(password, 'password'))
        .then( () => this.props.guestLogin(batman));
    } else {
      autoType(username, 'username')
      .then( () => autoType(password, 'password'))
      .then( () => this.props.guestLogin(batman));
    }



  }

  render() {
    const { formType } = this.props;
    const buttonText = (formType === 'login') ? `Log In` : `Sign Up`;
    let greeting, finePrint, redirect, fullname;
    if  (formType === 'signup') {
      fullname = (
        <input
          id="fullname"
          type="text"
          value={ this.state.fullname }
          onChange={ this._update('fullname') }
          placeholder='Full Name'
        />
      );
      greeting = (
        <p className="greeting">
          Check in on your favorite NewYork Sitcom Characters!
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
            <h1 className="shootr">InstaCram</h1>
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
            <a href="https://github.com/TheLastSultan" target="_blank"> repo</a>.
          </div>
        </div>
      </div>
    );
  }


}

export default withRouter(SessionForm);
