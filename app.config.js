export default {
  "expo": {
      "name": "fbphoneauth",
      "slug": "fbphoneauth",
      "version": "1.0.0",
      "orientation": "portrait",
      "icon": "./assets/icon.png",
      "userInterfaceStyle": "light",
      "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
      },
      "updates": {
      "fallbackToCacheTimeout": 0
      },
      "assetBundlePatterns": [
      "**/*"
      ],
      "ios": {
      "supportsTablet": true
      },
      "android": {
      "adaptiveIcon": {
          "foregroundImage": "./assets/adaptive-icon.png",
          "backgroundColor": "#FFFFFF"
      }
      },
      "web": {
      "favicon": "./assets/favicon.png"
      }
  },
  "extra" :{
      firebaseApiKey: "AIzaSyB_qn4oKVWdam3OlepR-rOpEwYmSw4Q1ik",
      firebaseAuthDomain: "auth-otp-bb904.firebaseapp.com",
      firebaseProjectId: "auth-otp-bb904",
      firebaseStorageBucket: "auth-otp-bb904.appspot.com",
      firebaseMessagingSenderId: "55986416052",
      firebaseAppId: "1:55986416052:web:2fc039c516e33bce246ae1",
  }
  }

/*
export const firebaseConfig = {
  apiKey: "AIzaSyB_qn4oKVWdam3OlepR-rOpEwYmSw4Q1ik",
  authDomain: "auth-otp-bb904.firebaseapp.com",
  projectId: "auth-otp-bb904",
  storageBucket: "auth-otp-bb904.appspot.com",
  messagingSenderId: "55986416052",
  appId: "1:55986416052:web:2fc039c516e33bce246ae1",
  measurementId: "G-H7X94B38CD",
}

  /*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_qn4oKVWdam3OlepR-rOpEwYmSw4Q1ik",
  authDomain: "auth-otp-bb904.firebaseapp.com",
  projectId: "auth-otp-bb904",
  storageBucket: "auth-otp-bb904.appspot.com",
  messagingSenderId: "55986416052",
  appId: "1:55986416052:web:2fc039c516e33bce246ae1",
  measurementId: "G-H7X94B38CD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



  */