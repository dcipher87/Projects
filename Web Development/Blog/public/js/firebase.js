let firebaseConfig = {
  apiKey: "AIzaSyByg2WkDWCnt_6tRFGR-Ccm3N__JlVxeV8",
  authDomain: "bloggin-website-ubi.firebaseapp.com",
  projectId: "bloggin-website-ubi",
  storageBucket: "bloggin-website-ubi.appspot.com",
  messagingSenderId: "152130565397",
  appId: "1:152130565397:web:326532f7ec730251e5a51c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

let db = firebase.firestore();
