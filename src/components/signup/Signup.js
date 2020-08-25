import React from 'react';
import { Redirect } from 'react-router-dom';
import { PostData } from '../services/PostData';
import './../tailwind.min.css';
import firebase from '../firebase.js';
import Footer from '../Footer/Footer';
import { getAlertMessage, showWarningAlert } from '../alert/Alert';
import {register} from '../utilities/register';

class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      userExist: true,
      redirect: false,
      showAlert: false,
      alertMessage: '',
      updateInProgress: false,
    }
    this.signup = this.signup.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }


  signup() {
    PostData('signup', this.state).then((result) => {
      const a = register(this.state.email, this.state.name, this.state.password, this)
    });
  }

  onNameChange(e) {
    this.setState({
      name: e.target.value,
    });
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
      return (
        <Redirect to={'/'} />
      )
    }

    return (
      <div class="text-gray-700 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav class="absolute right-0 md:mr-3 md:ml-4 md:py-1 md:pl-4 md:border-b md:border-gray-400	flex flex-wrap text-base justify-center">
              <a href="/"><button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Sign in
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button></a></nav>
          </div>

        </div>
        <div class="text-gray-700 body-font">
          {
            this.state.alertType === 'warning' ? showWarningAlert(this.state.showAlert, this.state.alertMessage) :
              getAlertMessage(this.state.showAlert, this.state.alertMessage)
          }
          <div class="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto mx-auto w-full mt-3 md:mt-0 items-center">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
            <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" onChange={this.onNameChange} placeholder="Name" type="text" />
            <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" onChange={this.onEmailChange} placeholder="Username" type="text" />
            <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" onChange={this.onPasswordChange} placeholder="Password" type="password" />
            <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={this.signup} >Sign up</button>
          </div>
        </div>
        <Footer />
      </div>)
  }
}

export default Signup;
