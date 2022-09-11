import {initializeApp} from 'firebase/app';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDqhOVGBfHwCaJMHkc0D4_Np68vJMGESCc",
    authDomain: "crwn-clothing-db-22c41.firebaseapp.com",
    projectId: "crwn-clothing-db-22c41",
    storageBucket: "crwn-clothing-db-22c41.appspot.com",
    messagingSenderId: "1020688271828",
    appId: "1:1020688271828:web:250327a273c363e64eae41"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userDocRef;

}

