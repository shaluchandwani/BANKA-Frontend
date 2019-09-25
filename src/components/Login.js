import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormContainer from './common/FormContainer';
import Input from './common/input';
import '../assets/scss/components/login.scss';

class LoginComponet extends Component {
  render() {
    return (
      <FormContainer onSubmit={this.props.onSubmit}>
        <Input
            type="text"
            name="email"
            className="form-control col-md-10 border-top-0 border-left-0 border-right-0 rounded-0"
            placeholder="Email"
            value={this.props.email}
            onChange={this.props.onChange}
          />
        <br/>

        <Input
            type="password"
            name="password"
            className="form-control col-md-10 border-top-0 border-left-0 border-right-0 rounded-0"
            placeholder="Password"
            value={this.props.password}
            onChange={this.props.onChange}
          />

        <br/>
        <button type="submit" className="sumbit-btn">Signin</button>
        <br/>
        <br/>
        <p>Dont have an account<span> <a href= '/'>Signup</a> </span></p>
      </FormContainer>
    );
  }
}

LoginComponet.propTypes = {
  onSubmit: PropTypes.func,
  email: PropTypes.string,
  onChange: PropTypes.func,
  password: PropTypes.string,
};

export default LoginComponet;
