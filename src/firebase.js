import { initializeApp } from "firebase/app";
//import { getDatabase} from "firebase/database";
import { getAuth} from "firebase/auth";
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBjhJzI2SVNjqWJX8WkeDWqn_0JSKYJHso",
    authDomain: "course-project-d4fa3.firebaseapp.com",
    projectId: "course-project-d4fa3",
    storageBucket: "course-project-d4fa3.appspot.com",
    messagingSenderId: "560436797154",
    appId: "1:560436797154:web:65dfb593fe316566ee48bb"
};

initializeApp(firebaseConfig);

const auth = getAuth();

//const db = getDatabase();
const db = getFirestore();

export {auth, db};
