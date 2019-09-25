/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import signupUserAction from '../redux/actions/signup.actions';
import { postDataThunksignup } from '../redux/thunks/index';
import SignupComponent from '../components/pages/Signup';
import banka from '../assets/images/pexels-photo.png';

export class Signup extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  };

  handleInputChange = (e) => {
    const user = { ...this.state.user };
    user[e.target.name] = e.target.value;
    this.setState({ user });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { user } = this.state;
    await this.props.postDataThunksignup('post', 'v2/auth/signup', signupUserAction, user);
    if (this.props.signupSuccess.errors) {
      toast.error(`${this.props.signupSuccess.errors}!`);
    } else {
      (toast.success(`${this.props.signupSuccess}!`), setTimeout(() => this.props.history.push('/login'), 6000));
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-7 container__leftSide">
            <h1>Join us</h1>
            <h5>BANKA</h5>
            <img
              className="container__images"
              src={banka}
            />
          </div>
          <div className="col-md-5 col-sm-5">
            <SignupComponent
              onChange={this.handleInputChange}
              onSubmit={this.handleSubmit}
              user={this.state.user}
            />
          </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  signupSuccess: state.signupSuccess.signupSuccess,
  errors: state.signupSuccess.errors,
});

const actionCreator = {
  postDataThunksignup,
};

export default connect(
  mapStateToProps,
  actionCreator,
)(Signup);
