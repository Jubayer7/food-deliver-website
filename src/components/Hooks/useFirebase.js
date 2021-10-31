import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import initializeAuthintication from "../../firebase/firebase.init";

initializeAuthintication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState();
    const [error, setError] = useState();

    const googleHandler = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)


    }

    const handleLogout = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
        });
    }
    return {
        user,
        error,
        googleHandler,
        handleLogout
    }
}




export default useFirebase;