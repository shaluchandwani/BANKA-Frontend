/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import signupUserAction from '../redux/actions/signup.actions';
import { postDataThunkPrivate } from '../redux/thunks/index';
import '../assets/scss/components/style1.css';


export class Signup extends Component {
  state = {
    type: '',
  };

  handleInputChange = (e) => {
    this.setState({
      type: e.label,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.postDataThunkPrivate('post', 'v2/accounts', signupUserAction, this.state);
    if (this.props.signupSuccess.errors) {
      toast.error(`${this.props.signupSuccess.errors}!`);
    } else {
      (toast.success(`Account Sucessfully created, Account Number: ${this.props.signupSuccess.data.accountNumber}`));
    }
  };


  render() {
    const accounttype = [
      { label: 'Saving', value: 1 },
      { label: 'Current', value: 2 },
      { label: 'Loan', value: 3 },
    ];
    return (
        <div>
        <header>
            <div id="Header" className="container1">
                <h1>Banka<p>Your Trust Our Commitment</p></h1>
              </div>
              <nav>
                <ul>
                  <form method="get" action="/">
                    <button type="Logout" className="button_Logout"><span></span>Logout</button></form>
                </ul>
            </nav>
        </header>
        <div id="Client" className="container">
        <div id="menu">
            <ul>
                <li className="current_page_item"><a href="/createBankAccount" accessKey="3" title="">Create Account</a></li>
              </ul>
          </div>
        </div>
        <div id="main">
        <div className="col-md-4">
        <Select value={accounttype.label} name="type" options={ accounttype } onChange={this.handleInputChange}/>Please select account type
      </div>
      <br></br>
      <button type="button" className="sumbit-btn" onClick={this.handleSubmit}>Create</button>
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
  postDataThunkPrivate,
};

export default connect(
  mapStateToProps,
  actionCreator,
)(Signup);
