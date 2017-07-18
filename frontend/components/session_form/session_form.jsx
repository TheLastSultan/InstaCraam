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
    let greeting;
    if  (formType === 'signup') {
      greeting = (<p>Sign up to share photos with other Shootrs</p>);
    }

    return (
      <div className="splash-container">
        <div className="splash-image-container">&nbsp;</div>
        <div className="splash-form-container">
          <div className="splash-box">
            <h1>Shootr</h1>
            { greeting }
            <form className="session-form">
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

              <button onClick={ this._demo }>Demo/Guest Login</button>

            </form>
          </div>
          <div className="splash-box">
            <GreetingContainer />
          </div>
          <div>
            Check out the repo.
          </div>
        </div>
      </div>
    );
  }


}

export default withRouter(SessionForm);
