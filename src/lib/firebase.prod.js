import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyByUpUo-_x5uyCex9lwZi2R3MKqeXDmau4",
    authDomain: "netflix-clone-fba9f.firebaseapp.com",
    projectId: "netflix-clone-fba9f",
    storageBucket: "netflix-clone-fba9f.appspot.com",
    messagingSenderId: "886176166257",
    appId: "1:886176166257:web:8badfeb4ac0752fb5246d0"
};

const firebase = Firebase.initializeApp(config);

export { firebase };