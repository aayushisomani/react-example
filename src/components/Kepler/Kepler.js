import React from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './../tailwind.min.css';
import './../Kepler.css';
import { isUserLoggedIn } from '../utilities/IsUserLoggedIn';

class Kepler extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        this.logout = this.logout.bind(this);
    }

    logout() {
        sessionStorage.setItem("this.state", '');
        sessionStorage.clear();
        this.setState({ redirect: true });
    }

    render() {

        if (this.state.redirect) {
            return (
                <Redirect to={'/'} />
            )
        }

        if (!isUserLoggedIn()) {
            this.setState({ redirect: true });
        }

        return [
            <div>
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                    <nav class="absolute right-0 md:mr-3 md:ml-4 md:py-1 md:pl-4 md:border-b md:border-gray-400	flex flex-wrap text-base justify-center">
                        <button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0" onClick={this.logout} >Logout
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button></nav></div>,
        {/* <div class ="map-class mx-auto mt-10">
        <h1 class="h1">See Covid-19  <a href="/Maps"><button class="inline-flex items-center bg-gray-200 border-0 ml-3 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Map
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            </button></a> for the world</h1>
           
            </div> */}
                <div class="map-class">
                    <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col items-center">
                        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>

                        <div class="flex-grow">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">COVID-19 Map</h2>
                            <p class="leading-relaxed text-base">To access COVID-19 geospatial analysis of the world, click on learn more.</p>
                            <a class="mt-3 text-indigo-500 inline-flex items-center" href="/Maps">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div></div>
                </div>

                <Footer />
            </div>

        ];
    }

}

export default Kepler;


