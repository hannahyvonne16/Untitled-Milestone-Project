import { createContext, useState, useEffect}  from "react";

export const CurrentUser = createContext()

export default function CurrentUserProvider ({children}) {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const getLoggedInUser = async () => {
            let response = await fetch(`http://localhost:4000/authentication/profile`)
        }
    })

    window.setCurrentUser = setCurrentUser
    return (
        <CurrentUser.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </CurrentUser.Provider>
    
    )

}