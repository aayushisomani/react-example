import React from 'react';
import {PostData} from '../services/PostData';
import {Redirect} from 'react-router-dom';
import './../tailwind.min.css';
import Kepler from "../Kepler/Kepler"

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
    }

    login(){
        PostData('login', this.state).then ((result) => {
            let responseJSON = result;
            if(result === "success"){
                // var x = document.getElementById("asda");
                //   x.style.display = "block";
                sessionStorage.setItem('userData', responseJSON);
                this.setState({redirect: true});
            }
            else{
                console.log("error in logging");
            }
            //console.log(responseJSON);
        });
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
        // console.log(this.state);
    }

render(){

    if(this.state.redirect){
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
  {/* <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href="/Signup"><button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Sign up
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button></a>
  </div> */}
  <div class="text-gray-700 body-font mt-10">
    <div class="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto mx-auto w-full mt-10 md:mt-0 items-center">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign In</h2>
      <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" name="Email" placeholder="Email" type="email" onChange={this.onChange}/>
      <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" name="Password" placeholder="Password" type="password" onChange={this.onChange}/>
      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-4" type="submit" value="login" onClick={this.login}>Sign in</button>
      {/* <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign up</button> */}
    </div>
</div>
<Kepler/>
</div>)
  
}}

export default Home;
