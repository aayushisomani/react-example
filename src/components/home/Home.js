import React, {useState} from 'react';
import {PostData} from '../services/PostData';
import {Redirect} from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import './../tailwind.min.css';
import Kepler from "../Kepler/Kepler"
import firebase from '../firebase.js';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            Email:'',
            Password:'',
            redirect: false
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    
    }

    login(){
        console.log("in email");
        console.log(this.state.email);
        console.log(this.state.password);
        const _this  =  this;

        firebase.database().ref('/login/' + this.state.email).once('value').then(function(snapshot) {
            console.log("in firebase")
            console.log(snapshot.val())
            if(snapshot.val() !== null && snapshot.val().password === _this.state.password){
                console.log("voila id password match");
                _this.setState({
                    redirect:true
                })
            }
            else{
                console.log("id password don't match");

                  
            }
            
            // if(snapshot.val() === null || snapshot.val() === undefined){
            //   console.log(" Null of undefined found"); 
            // }
           });
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
        // console.log(this.state);
    }

    onEmailChange(e){
        this.setState({
          email : e.target.value,
        });
      }
      
      onPasswordChange(e){
        this.setState({
          password : e.target.value,
        });
      }
      
render(){

    if(this.state.redirect){
        console.log("Redirect is true");
        return (
            <Redirect to={'/Kepler'} />
        )
    }

    if(sessionStorage.getItem('userData')){
        return (
            <Redirect to={'/Kepler'} />
        )
    }

        return (
        <div class="text-gray-700 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href="/Signup"><button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Sign up
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button></a>
  </div> 
  <div class="text-gray-700 body-font mt-10">
    <div class="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto mx-auto w-full mt-10 md:mt-0 items-center">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign In</h2>
      <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" name="Email" placeholder="Email" type="email" onChange={this.onEmailChange}/>
      <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" name="Password" placeholder="Password" type="password" onChange={this.onPasswordChange}/>
      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-4" type="submit" value="login" onClick={this.login}>Sign in</button>
      {/* <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign up</button> */}
    </div>
</div>
</div>)
  
}}

export default Home;
