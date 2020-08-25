import React from 'react';
import { Redirect } from 'react-router-dom';
import './../tailwind.min.css';
import firebase from '../firebase.js';
import Footer from '../Footer/Footer';
import { showWarningAlert } from '../alert/Alert';
import {isUserPasswordCorrect} from '../utilities/login';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Password: '',
      redirect: false,
      showAlert: false,
      alertMessage: ''
    }
    this.login = this.login.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  login() {
    console.log("in email");
    console.log(this.state.email);
    console.log(this.state.password);
    const _this = this;
    let myStorage = window.sessionStorage;

    isUserPasswordCorrect(this.state.email, this.state.password, this)
  }

  onEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onPasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

  render() {

    if (this.state.redirect) {
      console.log("Redirect is true");
      return (
        <Redirect to={'/Kepler'} />
      )
    }

    if (sessionStorage.getItem('user')) {
      return (
        <Redirect to={'/Kepler'} />
      )
    }

    return (
      <div class="text-gray-700 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav class="absolute right-0 md:mr-3 md:ml-4 md:py-1 md:pl-4 md:border-b md:border-gray-400	flex flex-wrap text-base justify-center">
            <a href="/Signup"><button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Sign up
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button></a></nav>
        </div>
        <div class=" text-gray-700 body-font mt-10">
          {
            showWarningAlert(this.state.showAlert, this.state.alertMessage)
          }
          {/* <Alert alertMessage={this.state.alertMessage} showAlert={this.state.showAlert}/> */}
          <div class="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto mx-auto w-full md:mt-0 items-center">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign In</h2>
            <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" name="Email" placeholder="Username" type="text" onChange={this.onEmailChange} />
            <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" name="Password" placeholder="Password" type="password" onChange={this.onPasswordChange} />
            <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-4" type="submit" value="login" onClick={this.login}>Sign in</button>
            {/* <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign up</button> */}
          </div>
        </div>
        <Footer />
      </div>

    )

  }
}

export default Home;
