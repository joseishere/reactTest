import firebase from "firebase/app"
import "firebase/auth"

// REACT_APP_FIREBASE_API_KEY=AIzaSyBfgFj_O7479QLjbQrWt1-is1Qan4cQRl8
// REACT_APP_FIREBASE_AUTH_DOMAIN=react-development-955aa.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=react-development-955aa
// REACT_APP_FIREBASE_STORAGE_BUCKET=react-development-955aa.appspot.com
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID=428097450323
// REACT_APP_FIREBASE_APP_ID=1:428097450323:web:7991186120086a57bf31a6

const app = firebase.initializeApp({
    apiKey: 'AIzaSyBfgFj_O7479QLjbQrWt1-is1Qan4cQRl8',
    authDomain: 'react-development-955aa.firebaseapp.com',
    projectId: 'react-development-955aa',
    storageBucket: 'react-development-955aa.appspot.com',
    messagingSenderId: '428097450323',
    appId: '428097450323:web:7991186120086a57bf31a6'
})

export const auth = app.auth()
export default app