import { Component } from 'react';
import { signUp } from '../../utilities/users-service'

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      error: ''
    });
  };

  _handleSubmit = async (event) => {
  event.preventDefault();

  //Alternative:
  // try {
  //   const formData = {...this.state}; // copy state to a new object
  //   delete formData.error;
  //   delete formData.confirm;

  try {
    const formData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    const user = await signUp(formData);
     this.props.setUser(user);  // log the user data that came back from the server
  } catch {
    // an error occured
    this.setState({error: 'Sign up failed - try again'})
  }
}

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this._handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
  