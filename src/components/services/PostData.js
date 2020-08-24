
export function PostData(type, userData){
    console.log(type);
    console.log(userData);
    // console.log(responseJSON);
    // let BaseURL = 'http://localhost/PHP-Slim-Restful/api/';
    return new Promise((resolve, reject) => {
        console.log("Here");
        console.log(userData.Email);
        console.log(userData.Password);

        if(userData.Email === "somani" && userData.Password === "somani")
        resolve("success");
        else
        resolve("failure");

        // fetch('/api', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(userData)
        //     })
        //     .then((response) => response.json())
        //     .then((responseJSON) => {
        //     })
        //     .catch((error) => {
        //      reject(error);
        // });
    });
}