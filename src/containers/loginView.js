/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import LoginComponet from '../components/Login';
import '../assets/scss/components/_Signup.scss';
import loginUserAction from '../redux/actions/loginAction';
import { postDataThunk } from '../redux/thunks';
import banka from '../assets/images/pexels-photo.png';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
      },
    };
  }

  handleChange = (e) => {
    const user = { ...this.state.user };
    user[e.target.name] = e.target.value;
    this.setState({ user });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { user } = this.state;
    await this.props.postDataThunk('post', 'v2/auth/signin', loginUserAction, user);
    if (this.props.userCredentials.errors) {
      toast.error(`${this.props.userCredentials.errors}!`);
    } else {
      localStorage.setItem('token', this.props.userCredentials.data.token);
      localStorage.setItem('AccountType', 'Client');
      this.props.history.push('/home');
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col loginLeftSide">
            <h1>Login</h1>
            <img
              className="container__images"
              src={banka}
            />
          </div>
          <div className="col-md-6 myForm">
            <h4> Signin </h4>
            <LoginComponet
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            user= {this.state.user}
            />
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  postDataThunk: PropTypes.func,
  userCredentials: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = (state) => ({
  userCredentials: state.userCredentials.userCredentials,
});

const actionCreator = {
  postDataThunk,
};

export default connect(
  mapStateToProps,
  actionCreator,
)(Login);
