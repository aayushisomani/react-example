import React from 'react';
import {Redirect} from 'react-router-dom';
import './../tailwind.min.css';
import './../Kepler.css';

class Kepler extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            redirect: false
        }
        this.logout = this.logout.bind(this);
    }

    componentWillMount(){
        if(sessionStorage.getItem("this.state")){
            console.log("Call for map now");
        }
        // else{
        //     this.setState({redirect: true});
        // }
    }
    // componentDidUpdate = (props) => {
    
    // }

    logout(){
        sessionStorage.setItem("this.state", '');
        sessionStorage.clear();
        this.setState({redirect: true});
    }

    render(){

        if(this.state.redirect){
            return (
                <Redirect to={'/'} />
            )
        }

        return [
        // <div id="asda" className="asda"> 
        //     HELLO World </div>,
           <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
           {/* <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
           <h2>See Covid-19 Map for the world</h2>
            <a href="/Maps"><button class="inline-flex items-center bg-gray-200 border-0 ml-3 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Map
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            </button></a>
           </nav> */}
           <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap text-base justify-center">
           <button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0" onClick ={this.logout} >Logout
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
        </button></nav>
        <div class ="map-class mx-auto mt-10">
        <h1 class="h1">See Covid-19  <a href="/Maps"><button class="inline-flex items-center bg-gray-200 border-0 ml-3 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Map
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            </button></a> for the world</h1>
           
            </div>
         </div>  
       
        ];
        }
            
}

export default Kepler;


