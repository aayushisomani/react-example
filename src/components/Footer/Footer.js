import React from 'react';
import './../tailwind.min.css';

class Footer extends React.Component {

    render() {
        return (
            <div class="absolute bottom-0 left-0 text-gray-700 body-font">
                <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <span class="ml-3 text-xl">K-Maps</span>

                    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 K-Maps —
      <a href="https://github.com/asomani27" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@Aayushi</a>
                    </p>

                </div>
            </div>
        );
    }
}
export default Footer;
