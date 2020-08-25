import firebase from '../firebase.js';

export function register(username, name, password, _this) {

    firebase.database().ref('/login/' + username).once('value').then(function (snapshot) {
        if (snapshot.val() === null || snapshot.val() === undefined) {
            firebase.database().ref('login/' + username).set({
                name: name,
                email: username,
                password: password
            });
            _this.setState({
                showAlert: true,
                alertMessage: "User has been successfully register. Please login",
                alertType: 'success'
            })
        } else {
            console.log("in ture")
            _this.setState({
                showAlert: true,
                alertMessage: "User already exist",
                alertType: 'warning'
            })
        }
    });
}