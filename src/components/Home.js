/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import '../assets/scss/components/style1.css';
import pic01 from '../assets/images/pic01.jpg';

class Home extends Component {
  logout = async () => {
    window.localStorage.clear();
    window.location.replace('/signup');
  };

  render() {
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
                <li><a href="/createBankAccount" accessKey="3" title="">Create Account</a></li>
              </ul>
          </div>
    </div>
    <div id="main">
        <div id="banner">
          <img src={pic01} alt="" className="image-full" />
        </div>
        <div id="welcome">
          <div className="title">
            <h2>WELCOME TO BANKA</h2>
            <span className="byline">A light weight core banking application for you</span>
          </div>
        </div>
  </div>
    </div>
    );
  }
}

export default Home;
