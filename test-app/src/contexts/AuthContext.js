import React from 'react'
import {auth} from '../firebase'
const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}


export function AuthProvider() {

    const [currentuser, setCurrentUser] = useState()

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
    auth.onAuthStateChanged(user => {
        setCurrentUser(user)
    })

    return unsubscribe
}, [])

    const value = {
        currentuser,
        signup
    }

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}
