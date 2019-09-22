import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'


const config = {
    apiKey: "AIzaSyC2t7nQMM1jLYAWVCCKYuugqHBrghs4ypc",
    authDomain: "m-city-e2777.firebaseapp.com",
    databaseURL: "https://m-city-e2777.firebaseio.com",
    projectId: "m-city-e2777",
    storageBucket: "m-city-e2777.appspot.com",
    messagingSenderId: "667551981831"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebaseDB,
    firebasePlayers
}