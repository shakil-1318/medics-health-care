import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthentication();
const auth = getAuth();

const useFirebase = () => {

    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    const googleAuthProvider = new GoogleAuthProvider();

    // sign in google
    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleAuthProvider)

            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    // observe user state changed 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [])

    // logout auth
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {

            })
            .finally(() => setIsLoading(false))
    }

    // registration field email and password

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    // registration form
    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be at least 6 charecter')
            return;
        }
        if (/!(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
            setError('Password must be at least two uppercase');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // setUser(result.user);
                // setEmail(result.user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message)
            })

    }

    // login form
    const loginForm = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be at least 6 charecter')
            return;
        }
        if (/!(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
            setError('Password must be at least two uppercase');
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                // setPassword(result.user);
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // veryfy email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {

            })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }




    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        isLoading,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        email,
        password,
        loginForm,
        handleNameChange,
        name
    }
}
export default useFirebase;