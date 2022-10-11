// import firebase from 'firebase/compat/app';
// import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: 'AIzaSyApGTff7rWa_Seo-gt532MzJ96AcFghsBw',
//   authDomain: 'linkedin-70bf9.firebaseapp.com',
//   projectId: 'linkedin-70bf9',
//   storageBucket: 'linkedin-70bf9.appspot.com',
//   messagingSenderId: '349642637689',
//   appId: '1:349642637689:web:8da9f015525dd1ae9d2fa8',
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyApGTff7rWa_Seo-gt532MzJ96AcFghsBw',
  authDomain: 'linkedin-70bf9.firebaseapp.com',
  projectId: 'linkedin-70bf9',
  storageBucket: 'linkedin-70bf9.appspot.com',
  messagingSenderId: '349642637689',
  appId: '1:349642637689:web:8da9f015525dd1ae9d2fa8',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

// export { auth };
// export default db;

export { db, auth };
