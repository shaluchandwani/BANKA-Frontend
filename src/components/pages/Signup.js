/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Form from '../common/FormContainer';
import TextInput from '../common/input';

class SignupComponent extends Component {
  render() {
    return (
      <div className="containeradd">
        <h4> Signup </h4>
          <Form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <TextInput
              value={this.props.firstName}
              name="firstName"
              type="text"
              placeholder="firstName..."
              onChange={this.props.onChange}
              className="form-control border-top-0 border-left-0 border-right-0 rounded-0"
            />
        </div>
        <div className="form-group">
            <TextInput
              value={this.props.lastName}
              name="lastName"
              type="text"
              placeholder="lastName..."
              onChange={this.props.onChange}
              className="form-control border-top-0 border-left-0 border-right-0 rounded-0"
            />
        </div>
             <div className="form-group">
            <TextInput
              value={this.props.email}
              name="email"
              type="email"
              placeholder="Email..."
              onChange={this.props.onChange}
              className="form-control border-top-0 border-left-0 border-right-0 rounded-0"
            />
          </div>
          <div className="form-group">
            <TextInput
              value={this.props.password}
              name="password"
              type="password"
              placeholder="Password..."
              onChange={this.props.onChange}
              className="form-control border-top-0 border-left-0 border-right-0 rounded-0"
            />
          </div>
          <div className="form-group">
            <TextInput
              value={this.props.confirmPassword}
              name="confirmPassword"
              type="password"
              placeholder="confirmPassword..."
              onChange={this.props.onChange}
              className="form-control border-top-0 border-left-0 border-right-0 rounded-0"
            />
          </div>
          <button type="submit" className="sumbit-btn">Signup</button>
        <br />
        <div className="form-footer">
          <p>
            You have an account?
              <a href="/login"><span> Signin</span></a>
          </p>
        </div>
      </Form>
      </div>
    );
  }
}
export default SignupComponent;
