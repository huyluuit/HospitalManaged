// Initialize Firebase
var config = {
    apiKey: "AIzaSyDMr9v-E8CDnJ9EkLDy_GpfIJTVBbcmOYc",
    authDomain: "hospital-b466b.firebaseapp.com",
    databaseURL: "https://hospital-b466b.firebaseio.com",
    projectId: "hospital-b466b",
    storageBucket: "hospital-b466b.appspot.com",
    messagingSenderId: "433236587141"
};
firebase.initializeApp(config);

var test = firebase.database().ref().child('test');
var databasetest = document.getElementById('databasetesting');

test.on('value', snap => databasetest.innerText = snap.val());

function WriteNewData(key, object) {
    firebase.database().ref(key).set(object);
}

function UpdateData(key, object) {

}