import React from 'react';
import {Link, withRouter} from 'react-router';

class SessionForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user}).then(() => this.props.router.push("/"))
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        )
      )}
      </ul>
    )
  }

  navLink() {
    if (this.props.formType === 'signup') {
      return <Link to='/login'>Log In Instead</Link>
    } else {
      return <Link to='/signup'>Sign Up Instead</Link>
    }
  }


  render() {
    const text = (this.props.formType === 'signup') ? 'Sign Up' : 'Log In'
    return(

      <div>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <h1>{text}</h1>
          <br />
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}

          <input
            type="text"
            placeholder="username"
            value={this.state.username}
            onChange={this.update('username')}>
          </input>
          <input
            type="text"
            value={this.state.password}
            placeholder="password"
            onChange={this.update('password')}>
          </input>

          <input type="submit" value={text} />
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
