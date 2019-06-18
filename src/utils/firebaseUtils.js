import firebase from 'firebase'

const configureFirebase = () => {

  let config = {
    apiKey: "AIzaSyBfwQyhQXNGzUSG3IyRVT2-Swt-ZPMY_XY",
    authDomain: "memorial-bd396.firebaseapp.com",
    databaseURL: "https://memorial-bd396.firebaseio.com",
    projectId: "memorial-bd396",
    storageBucket: "memorial-bd396.appspot.com",
    messagingSenderId: "373386077510"
  }
  
  firebase.initializeApp(config)
}

export { configureFirebase }
