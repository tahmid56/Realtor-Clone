// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyA8_xtctGffWVOeFEbXn51MBIvj7dM-aXs',
    authDomain: 'fir-frontend-233de.firebaseapp.com',
    projectId: 'fir-frontend-233de',
    storageBucket: 'fir-frontend-233de.appspot.com',
    messagingSenderId: '20469864990',
    appId: '1:20469864990:web:8a96e26c73667928e16c0f',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()

