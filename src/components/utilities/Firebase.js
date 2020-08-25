import firebase from '../firebase.js';

const myStorage = window.sessionStorage;

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

export function doesUserExist(username) {
    firebase.database().ref('/login/' + username).once('value').then(function (snapshot) {
        if (snapshot.val() === null || snapshot.val() === undefined) {
            return false;
        } else {
            return true
        }
    });
}

export function isUserPasswordCorrect(username, password, _this) {
    firebase.database().ref('/login/' + username).once('value').then(function (snapshot) {
        console.log("in firebase")
        console.log(snapshot.val())
        if (snapshot.val() !== null && snapshot.val().password === password) {
            console.log("voila id password match");
            myStorage.setItem('user', username);
            _this.setState({
                redirect: true,
                showAlert: false,
              })
        }
        else {
            console.log("id password don't match");
            _this.setState({
                showAlert: true,
                alertMessage: "Password and Id dont match",
                redirect: false
              })
        }
    });
}

export function logout() {

}