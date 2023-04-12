import config from '../app.config';


    const FIREBASE_CONFIG = {
    apiKey: config.extra.firebaseApiKey,
    authDomain: config.extra.firebaseAuthDomain,
    projectId: config.extra.firebaseProjectId,
    storageBucket: config.extra.firebaseStorageBucket,
    messagingSenderId: config.extra.firebaseMessagingSenderId,
    appId: config.extra.firebaseAppId
    };

export default FIREBASE_CONFIG;

