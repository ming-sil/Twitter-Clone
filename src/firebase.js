import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBhD4aFtMmIM54k7OpA10rgOY0_vYEpnck",
  authDomain: "twitter-clone-baf2f.firebaseapp.com",
  projectId: "twitter-clone-baf2f",
  storageBucket: "twitter-clone-baf2f.appspot.com",
  messagingSenderId: "660443749226",
  appId: "1:660443749226:web:dedd052a7c1b7c0f45a313",
};

const firebase = initializeApp(firebaseConfig);

export { firebase };
