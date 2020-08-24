import React from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../services/PostData';
import './../tailwind.min.css';
import firebase from '../firebase.js';


class Signup extends React.Component {

  constructor(props){
    super(props);
    this.state ={
        name:'',
        email:'',
        password:'',
        userExist: true,
    }
    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);

}

componentDidUpdate = () => {
  console.log("Component did update + ", this.state.userExist);
  if(this.setState.userExist){
    console.log("Signing up")
    const itemsRef = firebase.database().ref('login');

    firebase.database().ref('login/' + this.state.email).set({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    });
  } else {
    console.log("User Already exist");
  }
}
  signup(){
    PostData('signup', this.state).then ((result) => {
      
      console.log("signup State " + this.state.email);
      // console.log(this.state.email);
      console.log("Sidhi");
      const itemsRef = firebase.database().ref('login');
      const _this  =  this;
    firebase.database().ref('/login/' + this.state.email).once('value').then(function(snapshot) {
       if(snapshot.val() === null || snapshot.val() === undefined){
         console.log(" Null of undefined found"); 
          firebase.database().ref('login/' + _this.state.email).set({
            name: _this.state.name,
            email: _this.state.email,
            password: _this.state.password
        });
       }
      });

  console.log("flat ")

  
      

        // let responseJSON = result;
        // if(result === "success"){
        //     // var x = document.getElementById("asda");
        //     //   x.style.display = "block";
        //     sessionStorage.setItem('userData', responseJSON);
        //     this.setState({redirect: true});
        // }
        // else{
        //     console.log("error in logging");
        // }
        // //console.log(responseJSON);
    });
}

onChange(e){
    this.setState({[e.target.name]: e.target.value});
    // console.log(this.state);
}

onNameChange(e){
  this.setState({
    name : e.target.value,
  });
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

//   if(this.state.redirect){
//     return (
//         <Redirect to={'/'} />
//     )
// }

// if(sessionStorage.getItem('userData')){
//     return (
//         <Redirect to={'/'} />
//     )
// }

        return (
        <div class="text-gray-700 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">First Link</a>
      <a class="mr-5 hover:text-gray-900">Second Link</a>
      <a class="mr-5 hover:text-gray-900">Third Link</a>
      <a class="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
    <a href="/"><button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Sign in
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button></a>
  </div>
  <div class="text-gray-700 body-font">
    <div class="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto mx-auto w-full mt-3 md:mt-0 items-center">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" onChange={this.onNameChange} placeholder="Name" type="text"/>
      <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" onChange={this.onEmailChange} placeholder="Email" type="text"/>
      <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" onChange={this.onPasswordChange} placeholder="Password" type="text"/>
      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={this.signup} >Sign up</button>
    </div>
</div>

</div>)
  
}}

export default Signup;
