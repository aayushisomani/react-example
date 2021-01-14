import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBJnKk4Q7P5qBkjUJSZltsZhc1TN6fDXEc",
    authDomain: "login-kepler.firebaseapp.com",
    databaseURL: "https://login-kepler-default-rtdb.firebaseio.com/",
    projectId: "login-kepler",
    storageBucket: "login-kepler.appspot.com",
    messagingSenderId: "958276903142",
    appId: "1:958276903142:web:95a15c375501a1179fdb27",
    measurementId: "G-LBHECLE01B"
};
firebase.initializeApp(config);
export default firebase;
